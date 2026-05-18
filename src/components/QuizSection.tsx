import { useState } from 'react';
import type { QuizQuestion } from '../data/quizData';
import { useSoundEffects } from '../hooks/useSoundEffects';
import styles from './QuizSection.module.css';

type Status = 'idle' | 'correct' | 'wrong';

interface QuestionState {
  selected: number | null;
  status: Status;
}

interface Props {
  questions: QuizQuestion[];
  accentColor: string;
}

export function QuizSection({ questions, accentColor }: Props) {
  const [states, setStates] = useState<QuestionState[]>(
    questions.map(() => ({ selected: null, status: 'idle' }))
  );
  const { playCorrect, playWrong } = useSoundEffects();

  const select = (qi: number, oi: number) => {
    if (states[qi].status === 'correct') return;
    setStates((prev) =>
      prev.map((s, i) => (i === qi ? { ...s, selected: oi, status: 'idle' } : s))
    );
  };

  const submit = (qi: number) => {
    const { selected } = states[qi];
    if (selected === null) return;
    const isCorrect = selected === questions[qi].correctIndex;
    if (isCorrect) {
      playCorrect();
      setStates((prev) =>
        prev.map((s, i) => (i === qi ? { ...s, status: 'correct' } : s))
      );
    } else {
      playWrong();
      setStates((prev) =>
        prev.map((s, i) => (i === qi ? { ...s, status: 'wrong' } : s))
      );
    }
  };

  const retry = (qi: number) => {
    setStates((prev) =>
      prev.map((s, i) => (i === qi ? { selected: null, status: 'idle' } : s))
    );
  };

  const totalCorrect = states.filter((s) => s.status === 'correct').length;

  return (
    <div className={styles.panel}>
      <div className={styles.header} style={{ borderBottomColor: accentColor + '55' }}>
        <span className={styles.quizIcon}>🧠</span>
        <span className={styles.quizTitle}>Quiz</span>
        <span className={styles.score} style={{ color: accentColor }}>
          {totalCorrect}/{questions.length}
        </span>
      </div>

      <div className={styles.questions}>
        {questions.map((q, qi) => {
          const { selected, status } = states[qi];
          const isDone = status === 'correct';

          return (
            <div
              key={qi}
              className={`${styles.question} ${isDone ? styles.questionDone : ''}`}
            >
              <p className={styles.questionText}>
                <span className={styles.qNum} style={{ color: accentColor }}>
                  Q{qi + 1}.
                </span>{' '}
                {q.question}
              </p>

              <div className={styles.options}>
                {q.options.map((opt, oi) => {
                  let optClass = styles.option;
                  if (selected === oi) {
                    if (status === 'correct') optClass += ' ' + styles.optionCorrect;
                    else if (status === 'wrong') optClass += ' ' + styles.optionWrong;
                    else optClass += ' ' + styles.optionSelected;
                  }
                  if (isDone && oi !== q.correctIndex) optClass += ' ' + styles.optionFaded;

                  return (
                    <button
                      key={oi}
                      className={optClass}
                      style={selected === oi && status === 'idle' ? { borderColor: accentColor } : {}}
                      onClick={() => select(qi, oi)}
                      disabled={isDone}
                    >
                      <span className={styles.optionLetter}>
                        {['A', 'B', 'C'][oi]}
                      </span>
                      <span className={styles.optionText}>{opt}</span>
                      {selected === oi && status === 'correct' && (
                        <span className={styles.optionIcon}>✓</span>
                      )}
                      {selected === oi && status === 'wrong' && (
                        <span className={styles.optionIcon}>✗</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {status === 'correct' && (
                <div className={styles.feedback + ' ' + styles.feedbackCorrect}>
                  🎉 Correct!
                </div>
              )}

              {status === 'wrong' && (
                <div className={styles.feedbackRow}>
                  <div className={styles.feedback + ' ' + styles.feedbackWrong}>
                    ✗ Not quite — try again!
                  </div>
                  <button
                    className={styles.retryBtn}
                    onClick={() => retry(qi)}
                  >
                    ↩ Retry
                  </button>
                </div>
              )}

              {status !== 'correct' && (
                <button
                  className={styles.submitBtn}
                  style={{ backgroundColor: selected !== null ? accentColor : '' }}
                  onClick={() => submit(qi)}
                  disabled={selected === null}
                >
                  Submit
                </button>
              )}
            </div>
          );
        })}
      </div>

      {totalCorrect === questions.length && (
        <div className={styles.allCorrect}>
          🦕 Perfect score! You know your dinosaurs!
        </div>
      )}
    </div>
  );
}
