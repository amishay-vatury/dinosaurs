package com.dinosaursland.app;

import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.os.Bundle;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.Locale;

@CapacitorPlugin(name = "Tts")
public class TtsPlugin extends Plugin implements TextToSpeech.OnInitListener {
    private TextToSpeech tts;
    private boolean ready = false;

    @Override
    public void load() {
        tts = new TextToSpeech(getContext(), this);
        tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
            @Override
            public void onStart(String utteranceId) {}

            @Override
            public void onDone(String utteranceId) {
                notifyListeners("ttsDone", new JSObject());
            }

            @Override
            public void onError(String utteranceId) {
                notifyListeners("ttsDone", new JSObject());
            }

            @Override
            public void onStop(String utteranceId, boolean interrupted) {
                // Interrupted by a new speak() call — don't reset JS state;
                // the new utterance will fire ttsDone when it finishes.
            }
        });
    }

    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS) {
            int result = tts.setLanguage(Locale.US);
            if (result != TextToSpeech.LANG_MISSING_DATA && result != TextToSpeech.LANG_NOT_SUPPORTED) {
                ready = true;
            }
        }
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text");
        Float rate = call.getFloat("rate", 0.85f);

        if (text == null || text.isEmpty()) {
            call.resolve();
            return;
        }

        if (ready) {
            tts.setSpeechRate(rate != null ? rate : 0.85f);
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, new Bundle(), "tts-utterance");
        }
        call.resolve();
    }

    @PluginMethod
    public void stop(PluginCall call) {
        if (tts != null) {
            tts.stop();
        }
        call.resolve();
    }
}
