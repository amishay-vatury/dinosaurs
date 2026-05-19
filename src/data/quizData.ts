export interface QuizQuestion {
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
}

export const quizData: Record<string, QuizQuestion[]> = {
  eoraptor: [
    { question: 'What does "Eoraptor" mean?', options: ['Dawn thief', 'Ancient lizard', 'Small runner'], correctIndex: 0 },
    { question: 'What type of diet did Eoraptor have?', options: ['Pure carnivore', 'Pure herbivore', 'Omnivore — plants and animals'], correctIndex: 2 },
    { question: 'Where was Eoraptor discovered?', options: ['China', 'USA', 'Argentina'], correctIndex: 2 },
  ],
  herrerasaurus: [
    { question: 'Who is Herrerasaurus named after?', options: ['A famous scientist', 'A goat herder named Victorino Herrera', 'The Herrera valley in Argentina'], correctIndex: 1 },
    { question: 'What unique jaw feature did Herrerasaurus have?', options: ['Extra large teeth', 'A flexible joint in its lower jaw', 'No lower jaw bones'], correctIndex: 1 },
    { question: 'How long was Herrerasaurus?', options: ['2 meters', '6 meters', '12 meters'], correctIndex: 1 },
  ],
  coelophysis: [
    { question: 'Where were hundreds of Coelophysis fossils found together?', options: ['Ghost Ranch, New Mexico', 'Montana', 'The Gobi Desert'], correctIndex: 0 },
    { question: 'What is Coelophysis the official state fossil of?', options: ['Texas', 'Utah', 'New Mexico'], correctIndex: 2 },
    { question: 'What does "Coelophysis" mean?', options: ['Fast runner', 'Hollow form', 'Ghost lizard'], correctIndex: 1 },
  ],
  plateosaurus: [
    { question: 'On how many legs could Plateosaurus walk?', options: ['Only two', 'Only four', 'Both two and four legs'], correctIndex: 2 },
    { question: 'What was unusual about Plateosaurus growth rates?', options: ['It never stopped growing', 'Growth rates varied greatly between individuals', 'It grew very slowly'], correctIndex: 1 },
    { question: 'How heavy could adult Plateosaurus get?', options: ['400 kg', '4,000 kg', '40,000 kg'], correctIndex: 1 },
  ],
  liliensternus: [
    { question: 'Who is Liliensternus named after?', options: ['Hugo Rühle von Lilienstern', 'A region in Germany', 'A plant species'], correctIndex: 0 },
    { question: 'What was the likely purpose of the small crests on Liliensternus?', options: ['Thermal regulation', 'Visual display to attract mates', 'Intimidating prey'], correctIndex: 1 },
    { question: 'Which group does Liliensternus belong to?', options: ['Tyrannosaurs', 'Coelophysoidea', 'Sauropods'], correctIndex: 1 },
  ],
  staurikosaurus: [
    { question: 'What does "Staurikosaurus" mean?', options: ['Southern Cross lizard', 'Brazilian lizard', 'Ancient hunter'], correctIndex: 0 },
    { question: 'How old are the Staurikosaurus fossils?', options: ['150 million years', '228 million years', '66 million years'], correctIndex: 1 },
    { question: 'How many Staurikosaurus skeletons have been found?', options: ['Only one partial skeleton', 'Over 100 skeletons', 'Dozens of complete skeletons'], correctIndex: 0 },
  ],
  mussaurus: [
    { question: 'What does "Mussaurus" mean?', options: ['Giant lizard', 'Mouse lizard', 'Swift lizard'], correctIndex: 1 },
    { question: 'Why was Mussaurus given its name?', options: ['It was mouse-colored', 'The first fossils found were tiny hatchlings', 'It had a mouse-like face'], correctIndex: 1 },
    { question: 'What does evidence of communal nesting suggest about Mussaurus?', options: ['It laid eggs in water', 'It showed early social behavior', 'It laid only one egg at a time'], correctIndex: 1 },
  ],
  riojasaurus: [
    { question: 'Where was Riojasaurus discovered?', options: ['Rioja, Spain', 'La Rioja province, Argentina', 'Riojas region, Brazil'], correctIndex: 1 },
    { question: 'Which group did Riojasaurus belong to?', options: ['Tyrannosaurs', 'Prosauropods', 'Ankylosaurs'], correctIndex: 1 },
    { question: 'What was Riojasaurus notable for during the Triassic?', options: ['Being the fastest dinosaur', 'Being one of the largest dinosaurs of its era', 'Being the first dinosaur to fly'], correctIndex: 1 },
  ],
  procompsognathus: [
    { question: 'Approximately how big was Procompsognathus?', options: ['Size of an elephant', 'Size of a chicken', 'Size of a horse'], correctIndex: 1 },
    { question: 'What does the name "Procompsognathus" mean?', options: ['Before Compsognathus', 'Pretty small jaw', 'Early runner'], correctIndex: 0 },
    { question: 'Where did Procompsognathus live?', options: ['A hot, semi-arid environment in Germany', 'Tropical forests of China', 'Cold polar regions'], correctIndex: 0 },
  ],
  nyasasaurus: [
    { question: 'Why is Nyasasaurus significant?', options: ['It was the largest Triassic dinosaur', 'It may be the oldest known dinosaur', 'It had the most teeth of any dinosaur'], correctIndex: 1 },
    { question: 'How old might Nyasasaurus be?', options: ['150 million years', '200 million years', '243 million years'], correctIndex: 2 },
    { question: 'Where were Nyasasaurus fossils originally collected?', options: ['Tanzania, in the 1930s', 'Argentina, in the 1990s', 'China, in the 1970s'], correctIndex: 0 },
  ],
  pisanosaurus: [
    { question: 'Which famous group might Pisanosaurus be the earliest member of?', options: ['Sauropods', 'Ornithischians', 'Theropods'], correctIndex: 1 },
    { question: 'Which dinosaurs are ornithischians?', options: ['T. Rex and Spinosaurus', 'Triceratops, Stegosaurus, and Iguanodon', 'Diplodocus and Brachiosaurus'], correctIndex: 1 },
    { question: 'How large was Pisanosaurus?', options: ['Size of a chicken', 'Size of a cow', 'Size of an elephant'], correctIndex: 0 },
  ],
  thecodontosaurus: [
    { question: 'When was Thecodontosaurus first scientifically named?', options: ['1842', '1902', '1995'], correctIndex: 0 },
    { question: 'What happened to many original Thecodontosaurus fossils?', options: ['They were stolen', 'They were destroyed in WWII bombing raids', 'They were lost at sea'], correctIndex: 1 },
    { question: 'Where were Thecodontosaurus fossils found?', options: ['Texas, USA', 'The Bristol region of England', 'Patagonia, Argentina'], correctIndex: 1 },
  ],
  panphagia: [
    { question: 'What does "Panphagia" mean?', options: ['First lizard', 'Eats everything', 'Ancient reptile'], correctIndex: 1 },
    { question: 'What was significant about Panphagia\'s teeth?', options: ['The largest teeth ever found', 'Intermediate between meat-eaters and plant-eaters', 'It had no teeth at all'], correctIndex: 1 },
    { question: 'Panphagia is one of the earliest known members of which group?', options: ['Tyrannosaurs', 'Sauropodomorphs', 'Pterosaurs'], correctIndex: 1 },
  ],
  dilophosaurus: [
    { question: 'What does "Dilophosaurus" mean?', options: ['Two-crested lizard', 'Dangerous lizard', 'Desert lizard'], correctIndex: 0 },
    { question: 'What did Jurassic Park incorrectly add to Dilophosaurus?', options: ['Its twin crests', 'A neck frill and venom', 'Sharp teeth'], correctIndex: 1 },
    { question: 'Where did Dilophosaurus live?', options: ['What is now Arizona, USA', 'What is now Mongolia', 'What is now England'], correctIndex: 0 },
  ],
  cryolophosaurus: [
    { question: 'Why is Cryolophosaurus nicknamed "Elvisaurus"?', options: ['It was discovered by someone named Elvis', 'Its crest resembles Elvis Presley\'s pompadour hairstyle', 'It was found dancing in the ice'], correctIndex: 1 },
    { question: 'Where was Cryolophosaurus discovered?', options: ['The Arctic', 'Antarctica', 'Siberia'], correctIndex: 1 },
    { question: 'At what altitude were the Cryolophosaurus fossils found?', options: ['100 meters', '4,000 meters above sea level', 'Sea level'], correctIndex: 1 },
  ],
  megalosaurus: [
    { question: 'What was historic about Megalosaurus?', options: ['It was the largest dinosaur ever', 'It was the first dinosaur formally named by science', 'It lived the longest'], correctIndex: 1 },
    { question: 'Who used Megalosaurus to coin the term "Dinosauria" in 1842?', options: ['Charles Darwin', 'Richard Owen', 'Mary Anning'], correctIndex: 1 },
    { question: 'What does "Megalosaurus" mean?', options: ['Great lizard', 'Ancient beast', 'Stone bone'], correctIndex: 0 },
  ],
  allosaurus: [
    { question: 'What is Allosaurus sometimes called?', options: ['The king of dinosaurs', 'The lion of the Jurassic', 'The thunder lizard'], correctIndex: 1 },
    { question: 'How many Allosaurus were found at the Cleveland-Lloyd Quarry?', options: ['Over 60', 'Over 200', 'Only 2'], correctIndex: 0 },
    { question: 'What feeding technique did Allosaurus likely use?', options: ['Swallowing prey whole', 'Using its upper jaw like a hatchet to slash', 'Chasing prey across vast distances'], correctIndex: 1 },
  ],
  ceratosaurus: [
    { question: 'What made Ceratosaurus unusual among theropods?', options: ['It could fly', 'A nose horn and small bony back plates', 'It had six legs'], correctIndex: 1 },
    { question: 'What does the deep, flattened tail of Ceratosaurus suggest?', options: ['It was very slow', 'It may have been a capable swimmer', 'It used its tail as a primary weapon'], correctIndex: 1 },
    { question: 'What does "Ceratosaurus" mean?', options: ['Horned lizard', 'Crested beast', 'Finned hunter'], correctIndex: 0 },
  ],
  stegosaurus: [
    { question: 'What is the "thagomizer"?', options: ['The plates on Stegosaurus\'s back', 'The four tail spikes of Stegosaurus', 'A type of food Stegosaurus ate'], correctIndex: 1 },
    { question: 'How big was the brain of Stegosaurus?', options: ['The size of a human brain', 'The size of a walnut', 'The size of a basketball'], correctIndex: 1 },
    { question: 'What likely function did the back plates serve?', options: ['Attacking predators directly', 'Temperature regulation and display', 'Carrying food'], correctIndex: 1 },
  ],
  diplodocus: [
    { question: 'How long was Diplodocus?', options: ['12 meters', '26 meters', '50 meters'], correctIndex: 1 },
    { question: 'What could Diplodocus\'s tail potentially do?', options: ['Hold it underwater', 'Crack like a whip and produce a sonic boom', 'Act as a rudder for swimming'], correctIndex: 1 },
    { question: 'What type of teeth did Diplodocus have?', options: ['Broad crushing teeth', 'Peg-like teeth only at the front of its mouth', 'No teeth at all'], correctIndex: 1 },
  ],
  brachiosaurus: [
    { question: 'What made Brachiosaurus different from most sauropods?', options: ['Its tail was longer than its neck', 'Its front legs were longer than its rear legs', 'It had two heads'], correctIndex: 1 },
    { question: 'How tall could Brachiosaurus reach?', options: ['5 meters', '13 meters', '25 meters'], correctIndex: 1 },
    { question: 'What did scientists once incorrectly believe about Brachiosaurus?', options: ['It could fly', 'It lived underwater', 'It was cold-blooded'], correctIndex: 1 },
  ],
  apatosaurus: [
    { question: 'What famous naming controversy involves Apatosaurus?', options: ['Confused with Diplodocus for decades', 'Mixed up with Brontosaurus for over a century', 'Mislabeled as a fish'], correctIndex: 1 },
    { question: 'What does "Apatosaurus" mean?', options: ['Thunder lizard', 'Deceptive lizard', 'Long-neck lizard'], correctIndex: 1 },
    { question: 'What 2015 study conclusion changed dinosaur history?', options: ['Apatosaurus was a fish-eater', 'Brontosaurus is a valid genus separate from Apatosaurus', 'Apatosaurus had feathers'], correctIndex: 1 },
  ],
  brontosaurus: [
    { question: 'What does "Brontosaurus" mean?', options: ['Thunder lizard', 'Giant beast', 'Long-neck lizard'], correctIndex: 0 },
    { question: 'When was Brontosaurus restored as a valid genus after being invalidated?', options: ['1990', '2015', '1960'], correctIndex: 1 },
    { question: 'How did Brontosaurus differ from Apatosaurus?', options: ['It was much heavier', 'Longer, more slender neck and different proportions', 'It lived in a different time period'], correctIndex: 1 },
  ],
  camarasaurus: [
    { question: 'What does "Camarasaurus" mean?', options: ['Armored lizard', 'Chambered lizard', 'Long-necked lizard'], correctIndex: 1 },
    { question: 'What was special about Camarasaurus teeth?', options: ['Very tiny teeth', 'Spoon-shaped and strong enough for tough vegetation', 'Razor-sharp serrated teeth'], correctIndex: 1 },
    { question: 'What was Camarasaurus\'s dietary advantage over other sauropods?', options: ['It could digest meat', 'Its strong teeth let it eat tough plants others avoided', 'It could survive without water'], correctIndex: 1 },
  ],
  compsognathus: [
    { question: 'How big was Compsognathus?', options: ['As big as an elephant', 'About the size of a turkey', 'As big as a horse'], correctIndex: 1 },
    { question: 'What do fossil specimens reveal was inside Compsognathus?', options: ['Plant material', 'The remains of lizards', 'Fish bones'], correctIndex: 1 },
    { question: 'What famous fossil was found in the same deposits?', options: ['Tyrannosaurus Rex', 'Archaeopteryx', 'Velociraptor'], correctIndex: 1 },
  ],
  archaeopteryx: [
    { question: 'What makes Archaeopteryx scientifically important?', options: ['It was the largest dinosaur', 'It links dinosaurs to modern birds', 'It was the first dinosaur found'], correctIndex: 1 },
    { question: 'What bird-like feature did Archaeopteryx have?', options: ['A toothless beak', 'Fully formed feathers and wings', 'Only warm blood'], correctIndex: 1 },
    { question: 'How many Archaeopteryx specimens are known to exist?', options: ['Only about 12', 'Over 1,000', 'None — only footprints'], correctIndex: 0 },
  ],
  ornitholestes: [
    { question: 'What does "Ornitholestes" mean?', options: ['Bird robber', 'Small runner', 'Night hunter'], correctIndex: 0 },
    { question: 'What early misconception existed about Ornitholestes?', options: ['It was thought to be aquatic', 'It was incorrectly given a nose horn in reconstructions', 'It was thought to have a sail'], correctIndex: 1 },
    { question: 'How many complete Ornitholestes skeletons have been found?', options: ['Only one', 'Dozens', 'Hundreds'], correctIndex: 0 },
  ],
  mamenchisaurus: [
    { question: 'What record does Mamenchisaurus hold?', options: ['Largest land animal ever', 'Longest neck of any known animal', 'Most teeth of any dinosaur'], correctIndex: 1 },
    { question: 'How long could the neck of Mamenchisaurus be?', options: ['5 meters', '15 meters', '25 meters'], correctIndex: 1 },
    { question: 'Where was Mamenchisaurus found?', options: ['USA', 'China', 'Africa'], correctIndex: 1 },
  ],
  kentrosaurus: [
    { question: 'How did Kentrosaurus differ from Stegosaurus in its armor?', options: ['It had no armor', 'It had spikes along most of its back, not just the tail', 'It had more plates and fewer spikes'], correctIndex: 1 },
    { question: 'How many individual bones were found at the Tendaguru site?', options: ['Over 1,200 bones from 70+ individuals', 'Just 3 skeletons', 'Over 10,000 bones'], correctIndex: 0 },
    { question: 'Where was Kentrosaurus found?', options: ['USA', 'China', 'Tanzania'], correctIndex: 2 },
  ],
  huayangosaurus: [
    { question: 'Why is Huayangosaurus important?', options: ['It is the largest stegosaurid known', 'It is one of the most primitive stegosaurids known', 'It is the most recently discovered stegosaurid'], correctIndex: 1 },
    { question: 'How did Huayangosaurus differ from later stegosaurids?', options: ['It had no plates at all', 'It had teeth at the front of its jaws, not just a beak', 'It had eight legs'], correctIndex: 1 },
    { question: 'Where was Huayangosaurus found?', options: ['England', 'Sichuan Province, China', 'Montana, USA'], correctIndex: 1 },
  ],
  guanlong: [
    { question: 'How is Guanlong related to Tyrannosaurus Rex?', options: ['An early relative living 90 million years before T. Rex', 'A direct descendant of T. Rex', 'Not related to T. Rex at all'], correctIndex: 0 },
    { question: 'What does "Guanlong" mean?', options: ['Ancient dragon', 'Crowned dragon', 'Feathered lizard'], correctIndex: 1 },
    { question: 'How were two Guanlong individuals found?', options: ['In a museum collection already', 'Preserved together in a deadly mud trap', 'Discovered by a farmer plowing a field'], correctIndex: 1 },
  ],
  camptosaurus: [
    { question: 'What does "Camptosaurus" mean?', options: ['Flexible lizard', 'Large lizard', 'Crested lizard'], correctIndex: 0 },
    { question: 'What locomotion could Camptosaurus use?', options: ['Only two legs', 'Only four legs', 'Both two and four legs'], correctIndex: 2 },
    { question: 'Camptosaurus is an evolutionary link toward which group?', options: ['The giant sauropods', 'The large hadrosaurs of the Cretaceous', 'The armored ankylosaurs'], correctIndex: 1 },
  ],
  yangchuanosaurus: [
    { question: 'Where was Yangchuanosaurus found?', options: ['USA', 'Yongchuan County, Sichuan, China', 'Mongolia'], correctIndex: 1 },
    { question: 'What role did Yangchuanosaurus play in its ecosystem?', options: ['A small scavenger', 'The apex predator of Late Jurassic China', 'A fish-eater in rivers'], correctIndex: 1 },
    { question: 'What large prey did Yangchuanosaurus likely hunt?', options: ['Small insects', 'Giant sauropods like Mamenchisaurus', 'Other apex predators'], correctIndex: 1 },
  ],
  shunosaurus: [
    { question: 'What unique feature did Shunosaurus have for a sauropod?', options: ['Wings for gliding', 'A bony club at the end of its tail', 'Armor plates covering its back'], correctIndex: 1 },
    { question: 'How many good Shunosaurus skeletons are known?', options: ['Just 1', 'Nearly a dozen', 'Over 100'], correctIndex: 1 },
    { question: 'Where was Shunosaurus discovered?', options: ['Brazil', 'USA', 'China'], correctIndex: 2 },
  ],
  tyrannosaurus: [
    { question: 'How does T. Rex\'s bite force compare to other land animals?', options: ['The most powerful of any known land animal', 'Only average for its size', 'Less powerful than Allosaurus'], correctIndex: 0 },
    { question: 'How good was T. Rex\'s eyesight?', options: ['Very poor — it relied on smell', 'Better than a modern hawk', 'Similar to a human\'s'], correctIndex: 1 },
    { question: 'How much weight could T. Rex\'s arms actually curl?', options: ['Only 5 kg', 'Over 180 kg', 'Nothing — they were useless'], correctIndex: 1 },
  ],
  triceratops: [
    { question: 'How long was the Triceratops skull?', options: ['0.5 meters', '1 meter', 'Up to 2.5 meters'], correctIndex: 2 },
    { question: 'What do healed T. Rex bite marks on Triceratops bones prove?', options: ['They were prey animals only', 'T. Rex and Triceratops really did fight each other', 'They were friendly neighbors'], correctIndex: 1 },
    { question: 'How were Triceratops teeth arranged?', options: ['All in one row like human teeth', 'Stacked in columns — one grew below as one wore out', 'Only at the very front of the mouth'], correctIndex: 1 },
  ],
  velociraptor: [
    { question: 'How big was a real Velociraptor?', options: ['As big as a human', 'About the size of a turkey', 'As big as a horse'], correctIndex: 1 },
    { question: 'What was Velociraptor\'s sickle claw actually used for?', options: ['Slashing prey like a knife', 'Pinning and holding struggling prey', 'Digging underground burrows'], correctIndex: 1 },
    { question: 'What famous fossil shows Velociraptor in combat?', options: ['The "Dancing Dinosaurs" fossil', 'The "Fighting Dinosaurs" fossil with a Protoceratops', 'The "Running Pair" fossil'], correctIndex: 1 },
  ],
  spinosaurus: [
    { question: 'What was the main diet of Spinosaurus?', options: ['Other large dinosaurs', 'Plants', 'Primarily fish'], correctIndex: 2 },
    { question: 'How tall could Spinosaurus\'s neural spines be?', options: ['0.2 meters', '1.6 meters', '5 meters'], correctIndex: 1 },
    { question: 'What lifestyle did Spinosaurus likely have?', options: ['Fully terrestrial like most dinosaurs', 'Semi-aquatic, spending much time in rivers', 'Nocturnal cave-dweller'], correctIndex: 1 },
  ],
  ankylosaurus: [
    { question: 'Which surprising body part of Ankylosaurus was also armored?', options: ['Its teeth', 'Even its eyelids', 'Its tongue'], correctIndex: 1 },
    { question: 'What could Ankylosaurus\'s tail club do?', options: ['Nothing — it was decorative', 'Shatter the leg bones of a T. Rex', 'Dig holes in the ground'], correctIndex: 1 },
    { question: 'When did Ankylosaurus live?', options: ['200 million years ago', 'At the very end of the Cretaceous, 68-66 million years ago', '100 million years ago'], correctIndex: 1 },
  ],
  parasaurolophus: [
    { question: 'What was the function of Parasaurolophus\'s hollow crest?', options: ['Water storage like a camel\'s hump', 'A resonating chamber for producing calls', 'Protection against predators'], correctIndex: 1 },
    { question: 'What sound did Parasaurolophus likely produce?', options: ['A high-pitched squeak', 'A deep, haunting trombone-like sound', 'A loud roar like a lion'], correctIndex: 1 },
    { question: 'How did the crest differ between individuals?', options: ['All crests were identical', 'Crest shape differed between males, females, and juveniles', 'Only adult males had crests'], correctIndex: 1 },
  ],
  iguanodon: [
    { question: 'When was Iguanodon officially recognized by science?', options: ['1825', '1969', '2005'], correctIndex: 0 },
    { question: 'What mistake did early scientists make about Iguanodon?', options: ['They thought it could fly', 'They placed its thumb spike on its nose', 'They thought it lived underwater'], correctIndex: 1 },
    { question: 'How many Iguanodon skeletons were found in a Belgian coal mine in 1878?', options: ['3', '38', '380'], correctIndex: 1 },
  ],
  pachycephalosaurus: [
    { question: 'How thick could the skull dome of Pachycephalosaurus be?', options: ['1 centimeter', '25 centimeters', '50 centimeters'], correctIndex: 1 },
    { question: 'What is the ongoing scientific debate about Pachycephalosaurus?', options: ['Whether it was a dinosaur at all', 'Whether it head-butted rivals or mainly used the dome for display', 'Whether it lived on land or in water'], correctIndex: 1 },
    { question: 'What does "Pachycephalosaurus" mean?', options: ['Spiky dinosaur', 'Thick-headed lizard', 'Dome-headed giant'], correctIndex: 1 },
  ],
  edmontosaurus: [
    { question: 'What remarkable specimens of Edmontosaurus have been found?', options: ['Frozen specimens in ice', 'Mummified specimens with preserved skin and tendons', 'Fossilized eggs with embryos'], correctIndex: 1 },
    { question: 'What do T. Rex bite marks on Edmontosaurus bones tell us?', options: ['They were peaceful neighbors', 'Edmontosaurus was actively hunted by T. Rex', 'T. Rex only ate plants'], correctIndex: 1 },
    { question: 'What might Edmontosaurus have had on top of its flat head?', options: ['A large bony horn', 'A fleshy comb that left no fossil trace', 'Nothing at all'], correctIndex: 1 },
  ],
  carnotaurus: [
    { question: 'What does "Carnotaurus" mean?', options: ['Spiny lizard', 'Meat-eating bull', 'Horned runner'], correctIndex: 1 },
    { question: 'How did Carnotaurus\'s arms compare to T. Rex\'s?', options: ['Much longer and more powerful', 'Even more reduced — almost vestigial stubs', 'About the same size'], correctIndex: 1 },
    { question: 'What did skin impressions of Carnotaurus reveal?', options: ['It was covered in feathers', 'A mosaic of small pebbly scales with rows of larger bumps', 'Completely smooth bare skin'], correctIndex: 1 },
  ],
  giganotosaurus: [
    { question: 'How did Giganotosaurus\'s skull compare to T. Rex\'s?', options: ['Shorter and deeper', 'Longer and more slender', 'Identical in shape'], correctIndex: 1 },
    { question: 'When did Giganotosaurus live relative to T. Rex?', options: ['At the same time as T. Rex', 'About 30 million years before T. Rex', 'After T. Rex went extinct'], correctIndex: 1 },
    { question: 'What unusual shape was Giganotosaurus\'s brain?', options: ['Round like a human brain', 'Banana-shaped — long and narrow', 'The same as T. Rex\'s brain'], correctIndex: 1 },
  ],
  argentinosaurus: [
    { question: 'How heavy might Argentinosaurus have been?', options: ['5,000 kg', 'Up to 70,000 kg', '500,000 kg'], correctIndex: 1 },
    { question: 'How tall was a single Argentinosaurus vertebra?', options: ['50 cm', 'Over 1.5 meters', '3 meters'], correctIndex: 1 },
    { question: 'Despite its enormous size, what was Argentinosaurus?', options: ['The top predator of its era', 'A prey animal hunted by Giganotosaurus', 'A solitary cave-dweller'], correctIndex: 1 },
  ],
  deinonychus: [
    { question: 'What did Deinonychus\'s discovery change about how scientists viewed dinosaurs?', options: ['It showed dinosaurs were all plant-eaters', 'It showed dinosaurs could be active, warm-blooded predators', 'It proved dinosaurs could swim'], correctIndex: 1 },
    { question: 'Which film features dinosaurs inspired by the larger Deinonychus?', options: ['Jurassic Park — calling them Velociraptors', 'King Kong', 'Ice Age'], correctIndex: 0 },
    { question: 'What does "Deinonychus" mean?', options: ['Swift thief', 'Terrible claw', 'Ancient hunter'], correctIndex: 1 },
  ],
  oviraptor: [
    { question: 'Why is Oviraptor\'s name considered unjust?', options: ['It was too small to eat eggs', 'It was falsely accused of stealing eggs that were its own', 'It was much smaller than originally thought'], correctIndex: 1 },
    { question: 'What behavior did Oviraptor display similar to modern birds?', options: ['Flying short distances', 'Brooding its eggs by sitting on the nest', 'Singing to attract mates'], correctIndex: 1 },
    { question: 'What did Oviraptor\'s toothless beak allow it to eat?', options: ['Only soft plant material', 'Hard food like shellfish or nuts', 'Only meat'], correctIndex: 1 },
  ],
  therizinosaurus: [
    { question: 'What record does Therizinosaurus hold?', options: ['Longest neck ever', 'Longest claws of any known animal — up to 90 cm each', 'Heaviest dinosaur ever'], correctIndex: 1 },
    { question: 'Despite its terrifying claws, what did Therizinosaurus eat?', options: ['Other large dinosaurs', 'Fish', 'Plants'], correctIndex: 2 },
    { question: 'Therizinosaurus belonged to which surprising group?', options: ['Sauropods', 'Theropods (same group as T. Rex)', 'Ceratopsians'], correctIndex: 1 },
  ],
  protoceratops: [
    { question: 'The "Fighting Dinosaurs" fossil shows Protoceratops locked in combat with what?', options: ['Tyrannosaurus Rex', 'A Velociraptor', 'An Oviraptor'], correctIndex: 1 },
    { question: 'Why is Protoceratops especially valuable to paleontologists?', options: ['Only one specimen is known', 'Complete growth series from eggs to adults are known', 'It was found in the Arctic'], correctIndex: 1 },
    { question: 'What does "Protoceratops" mean?', options: ['Ancient lizard', 'First horned face', 'Small shield'], correctIndex: 1 },
  ],
  styracosaurus: [
    { question: 'How many long spikes could Styracosaurus have on its neck frill?', options: ['One', 'Up to six', 'Over twenty'], correctIndex: 1 },
    { question: 'What does an Alberta bone bed of Styracosaurus suggest?', options: ['It lived completely alone', 'It lived in large herds', 'It hibernated in caves'], correctIndex: 1 },
    { question: 'What does "Styracosaurus" mean?', options: ['Horned lizard', 'Spiked lizard', 'Shield lizard'], correctIndex: 1 },
  ],
  utahraptor: [
    { question: 'What inspired the oversized Velociraptors in Jurassic Park?', options: ['Pure fiction with no real basis', 'Utahraptor, the largest raptor ever', 'An undiscovered species'], correctIndex: 1 },
    { question: 'How long could Utahraptor\'s sickle claw be?', options: ['5 cm', 'Over 30 cm', '1 meter'], correctIndex: 1 },
    { question: 'What evidence suggests Utahraptor may have been a pack hunter?', options: ['Cave paintings showing group hunts', 'Multiple individuals found together in quicksand-like mud', 'Bite patterns on prey bones'], correctIndex: 1 },
  ],
  baryonyx: [
    { question: 'Who discovered Baryonyx?', options: ['A professional paleontologist', 'An amateur fossil hunter in a Surrey clay pit', 'A construction worker'], correctIndex: 1 },
    { question: 'What did the stomach contents of Baryonyx preserve?', options: ['Plant seeds', 'Fish scales and Iguanodon bones', 'Other dinosaur eggs'], correctIndex: 1 },
    { question: 'What does "Baryonyx" mean?', options: ['Sharp tooth', 'Heavy claw', 'Strong jaw'], correctIndex: 1 },
  ],
  microraptor: [
    { question: 'How many wings did Microraptor have?', options: ['Two, like most birds', 'Four — on both arms and legs', 'None — it ran on the ground'], correctIndex: 1 },
    { question: 'What color were Microraptor\'s feathers?', options: ['Bright red and yellow', 'Iridescent black, like a modern starling', 'Pure white'], correctIndex: 1 },
    { question: 'What did Microraptor\'s stomach contents reveal?', options: ['It ate only plants', 'It ate fish, birds, and mammals — a very varied diet', 'It ate only insects'], correctIndex: 1 },
  ],
  maiasaura: [
    { question: 'What does "Maiasaura" mean?', options: ['Large duck', 'Good mother lizard', 'Nesting giant'], correctIndex: 1 },
    { question: 'What evidence proved that Maiasaura cared for its young?', options: ['Cave art showing parenting', 'Hatchlings with worn teeth at nests, showing adults brought food', 'Large adult bones found near nests'], correctIndex: 1 },
    { question: 'What happened to a Maiasaura bone in 1985?', options: ['It was stolen from a museum', 'It was taken into space aboard the Space Shuttle', 'It was the first dinosaur bone DNA-tested'], correctIndex: 1 },
  ],
  corythosaurus: [
    { question: 'What does "Corythosaurus" mean?', options: ['Crested lizard', 'Helmet lizard', 'Hollow head'], correctIndex: 1 },
    { question: 'How did the Corythosaurus crest vary between individuals?', options: ['All crests were identical', 'Males had larger crests; juveniles had none at all', 'Only juveniles had crests'], correctIndex: 1 },
    { question: 'What do preserved skin impressions of Corythosaurus show?', options: ['It had feathers all over', 'A pebbly, scale-like texture across its body', 'Completely smooth bare skin'], correctIndex: 1 },
  ],
  euoplocephalus: [
    { question: 'Which surprising body part of Euoplocephalus was armored?', options: ['Its feet', 'Its eyelids', 'Its tongue'], correctIndex: 1 },
    { question: 'How was the armor of Euoplocephalus attached?', options: ['Attached to the skeleton like a suit', 'Fused into the skin itself', 'Held in place by strong muscles'], correctIndex: 1 },
    { question: 'How well-known is Euoplocephalus in terms of fossil specimens?', options: ['Only 2 specimens known', 'The most abundantly known ankylosaur', 'Only one complete specimen'], correctIndex: 1 },
  ],
  carcharodontosaurus: [
    { question: 'What does "Carcharodontosaurus" mean?', options: ['Giant lizard', 'Shark-toothed lizard', 'Iron-jawed beast'], correctIndex: 1 },
    { question: 'What happened to the original Carcharodontosaurus fossils?', options: ['They were stolen', 'They were destroyed in World War II', 'They were lost in a flood'], correctIndex: 1 },
    { question: 'Where did Carcharodontosaurus live?', options: ['North America', 'North Africa', 'South America'], correctIndex: 1 },
  ],
  mapusaurus: [
    { question: 'What does the bone bed of multiple Mapusaurus individuals suggest?', options: ['All killed by a flood', 'Evidence of social or pack behavior', 'They were the same individual'], correctIndex: 1 },
    { question: 'What language does the name "Mapusaurus" come from?', options: ['Latin', 'Mapuche indigenous language, meaning "earth lizard"', 'Greek, meaning "giant predator"'], correctIndex: 1 },
    { question: 'How is Mapusaurus related to Giganotosaurus?', options: ['Completely unrelated', 'Both belong to the carcharodontosaurid family', 'Mapusaurus evolved into Giganotosaurus'], correctIndex: 1 },
  ],
  psittacosaurus: [
    { question: 'What does "Psittacosaurus" mean?', options: ['Small horned lizard', 'Parrot lizard', 'Ancient ceratopsian'], correctIndex: 1 },
    { question: 'What remarkable discovery was made in one Psittacosaurus specimen?', options: ['A complete brain cavity', 'Long quill-like structures on its tail', 'Preserved scales showing color patterns'], correctIndex: 1 },
    { question: 'How common is Psittacosaurus in the fossil record?', options: ['Only 3 specimens', 'Dozens of complete skeletons of all age classes', 'None — only footprints exist'], correctIndex: 1 },
  ],
  albertosaurus: [
    { question: 'What does a bone bed of 26+ Albertosaurus individuals suggest?', options: ['A volcano killed them all', 'They may have lived and hunted in social groups', 'They were all prey animals'], correctIndex: 1 },
    { question: 'How did Albertosaurus likely compare in speed to T. Rex?', options: ['Much slower', 'About the same', 'Faster due to its lighter build'], correctIndex: 2 },
    { question: 'What does "Albertosaurus" mean?', options: ['Hunter from the north', 'Alberta lizard', 'Canadian predator'], correctIndex: 1 },
  ],
  chasmosaurus: [
    { question: 'What does "Chasmosaurus" mean?', options: ['Big-horned lizard', 'Opening lizard', 'Ancient ceratopsian'], correctIndex: 1 },
    { question: 'What proportion of Chasmosaurus\'s skull did its frill take up?', options: ['One-tenth of the skull', 'Nearly a third of the skull', 'Almost the entire skull'], correctIndex: 1 },
    { question: 'How was Chasmosaurus related to Triceratops?', options: ['A direct ancestor of Triceratops', 'An evolutionary precursor in the same broad lineage', 'Not related at all'], correctIndex: 1 },
  ],
  lambeosaurus: [
    { question: 'Who is Lambeosaurus named after?', options: ['A famous fossil site', 'Paleontologist Lawrence Lambe', 'The Lambe River in Canada'], correctIndex: 1 },
    { question: 'How did the Lambeosaurus crest shape vary?', options: ['All crests were identical', 'Differed significantly between males, females, and juveniles', 'Only males had crests'], correctIndex: 1 },
    { question: 'What function did the hollow crest of Lambeosaurus serve?', options: ['Water storage', 'Amplifying its vocalizations', 'Protection against predators'], correctIndex: 1 },
  ],
  rugops: [
    { question: 'What does "Rugops" mean?', options: ['Rough beast', 'Wrinkle face', 'Ugly predator'], correctIndex: 1 },
    { question: 'Why is Rugops scientifically important beyond being a predator?', options: ['It was the largest predator ever', 'It helps confirm ancient continental drift between Africa and South America', 'It is the earliest known theropod'], correctIndex: 1 },
    { question: 'What group did Rugops belong to?', options: ['Tyrannosaurs', 'Abelisaurids — a uniquely Southern Hemisphere group', 'Spinosaurids'], correctIndex: 1 },
  ],
  suchomimus: [
    { question: 'What does "Suchomimus" mean?', options: ['Big jaw', 'Crocodile mimic', 'Fish hunter'], correctIndex: 1 },
    { question: 'How many teeth did Suchomimus have?', options: ['About 10 large teeth', 'Over 100 conical teeth', 'No teeth — just a beak'], correctIndex: 1 },
    { question: 'What is ironic about where Suchomimus fossils were found?', options: ['They were found underwater', 'Found in the Sahara Desert, which was lush and watery in the Cretaceous', 'Found on a mountaintop'], correctIndex: 1 },
  ],
  alioramus: [
    { question: 'What unique feature did Alioramus have compared to other tyrannosaurs?', options: ['A sail on its back', 'A row of bony bumps along the top of its snout', 'A very long tail'], correctIndex: 1 },
    { question: 'With which larger tyrannosaur did Alioramus coexist in Mongolia?', options: ['Tyrannosaurus Rex', 'Tarbosaurus', 'Albertosaurus'], correctIndex: 1 },
    { question: 'What does "Alioramus" mean?', options: ['Ancient runner', 'Different branch', 'Mongolian hunter'], correctIndex: 1 },
  ],
  sauropelta: [
    { question: 'What defensive feature did Sauropelta have that later ankylosaurs lacked?', options: ['A tail club', 'No tail club but prominent side spikes', 'Wings for escaping'], correctIndex: 1 },
    { question: 'How was Sauropelta\'s armor attached?', options: ['Screwed into the bones', 'Embedded directly in the skin', 'Tied together with muscle'], correctIndex: 1 },
    { question: 'What does "Sauropelta" mean?', options: ['Lizard shield', 'Heavy armor', 'Ancient shell'], correctIndex: 0 },
  ],
  quetzalcoatlus: [
    { question: 'How large was Quetzalcoatlus\'s wingspan?', options: ['3 meters', 'Up to 11 meters — like a small aircraft', '20 meters'], correctIndex: 1 },
    { question: 'How tall was Quetzalcoatlus when standing on the ground?', options: ['1 meter, like a large dog', 'As tall as a modern giraffe (5-6 meters)', 'As tall as a 3-story building'], correctIndex: 1 },
    { question: 'Who is Quetzalcoatlus named after?', options: ['A famous fossil hunter', 'The Aztec feathered serpent god Quetzalcoatl', 'The country of Mexico'], correctIndex: 1 },
  ],
  pteranodon: [
    { question: 'What does "Pteranodon" mean?', options: ['Ancient wings', 'Winged and toothless', 'Flying lizard'], correctIndex: 1 },
    { question: 'How did male and female Pteranodon differ?', options: ['Males were much larger overall', 'Males had much larger crests than females', 'Only females had crests'], correctIndex: 1 },
    { question: 'How heavy was Pteranodon?', options: ['200 kg', 'About 20 kg', '2,000 kg'], correctIndex: 1 },
  ],
  mosasaurus: [
    { question: 'What was Mosasaurus in the Cretaceous oceans?', options: ['A peaceful filter-feeder like a whale shark', 'The apex predator — it even ate sharks', 'A bottom-dweller eating shellfish'], correctIndex: 1 },
    { question: 'How did Mosasaurus move its tail?', options: ['Side to side, like a fish', 'Up and down, like a whale', 'Using fins, not its tail'], correctIndex: 1 },
    { question: 'What unusual tooth feature did Mosasaurus have?', options: ['No teeth at all — just a beak', 'A second row of teeth on the roof of its mouth', 'Teeth that grew back constantly'], correctIndex: 1 },
  ],

  // ── Auto-generated from fun facts ─────────────────────────────────────────

  saturnalia: [
    { question: 'Where were Saturnalia fossils discovered?', options: ['Rio Grande do Sul, Brazil', 'Ischigualasto, Argentina', 'Sichuan, China'], correctIndex: 0 },
    { question: 'What is Saturnalia\'s significance among sauropodomorphs?', options: ['The largest ever discovered', 'One of the most primitive ever known', 'The first to develop a very long tail'], correctIndex: 1 },
    { question: 'Which predator did Saturnalia coexist with in Triassic South America?', options: ['Herrerasaurus', 'Staurikosaurus', 'Coelophysis'], correctIndex: 1 },
  ],
  lessemsaurus: [
    { question: 'Who is Lessemsaurus named after?', options: ['A region in Argentina', 'Don Lessen, founder of the Dinosaur Society', 'A famous fossil hunter'], correctIndex: 1 },
    { question: 'What is Lessemsaurus significant for?', options: ['Being one of the fastest Triassic dinosaurs', 'Being one of the earliest examples of the giant sauropod body plan', 'Having the longest neck of any Triassic dinosaur'], correctIndex: 1 },
    { question: 'How many Lessemsaurus specimens have been found?', options: ['Only one', 'Over 50', 'About a dozen'], correctIndex: 0 },
  ],
  efraasia: [
    { question: 'Who is Efraasia named after?', options: ['A region in Germany', 'E. Fraas, a German paleontologist', 'The city of Erfurt'], correctIndex: 1 },
    { question: 'How did Efraasia feed on conifer trees?', options: ['It shook the trees to make branches fall', 'It reared up on hind legs and used hand claws to pull branches down', 'It knocked trees over with its tail'], correctIndex: 1 },
    { question: 'Where was Efraasia discovered?', options: ['South America', 'France and Germany', 'North America'], correctIndex: 1 },
  ],
  ingentia: [
    { question: 'What assumption did Ingentia\'s discovery challenge?', options: ['That dinosaurs were cold-blooded', 'That gigantism in sauropods only evolved in the Jurassic', 'That Triassic dinosaurs were all carnivores'], correctIndex: 1 },
    { question: 'What title has Ingentia been given by scientists?', options: ['The first true flyer', 'The first true giant of its time', 'The first true pack hunter'], correctIndex: 1 },
    { question: 'Where was Ingentia discovered?', options: ['China', 'North America', 'Argentina'], correctIndex: 2 },
  ],
  chindesaurus: [
    { question: 'What is Chindesaurus significant for being?', options: ['The largest Triassic predator', 'One of the earliest dinosaurs known from North America', 'The first feathered dinosaur'], correctIndex: 1 },
    { question: 'How did Chindesaurus hunt its prey?', options: ['It ambushed prey from trees', 'It sprinted aggressively through dense vegetation', 'It hunted in rivers like Spinosaurus'], correctIndex: 1 },
    { question: 'In which US states were Chindesaurus fossils found?', options: ['Texas and New Mexico', 'Montana and Wyoming', 'Utah and Colorado'], correctIndex: 0 },
  ],
  eodromaeus: [
    { question: 'What does "Eodromaeus" mean?', options: ['Ancient lizard', 'Dawn runner', 'Small predator'], correctIndex: 1 },
    { question: 'What type of teeth did Eodromaeus have?', options: ['Flat leaf-shaped teeth for plants', 'Sabre-like canine teeth for catching prey', 'No teeth — just a beak'], correctIndex: 1 },
    { question: 'What is Eodromaeus\'s evolutionary significance?', options: ['It is considered a basal theropod near the origin of that entire group', 'It is the ancestor of all sauropods', 'It is the first known dinosaur to have feathers'], correctIndex: 0 },
  ],
  supersaurus: [
    { question: 'What record does Supersaurus potentially hold?', options: ['The heaviest dinosaur ever', 'The longest dinosaur ever discovered', 'The tallest dinosaur ever'], correctIndex: 1 },
    { question: 'On which continents have Supersaurus fossils been found?', options: ['Only North America', 'North America and Europe', 'All seven continents'], correctIndex: 1 },
    { question: 'What did Supersaurus eat?', options: ['Meat from large prey animals', 'Cycads, ferns, and conifers', 'Fish from rivers'], correctIndex: 1 },
  ],
  heterodontosaurus: [
    { question: 'What is unique about Heterodontosaurus\'s teeth?', options: ['The largest teeth of any small dinosaur', 'Three distinct types of teeth — the most varied of any known dinosaur', 'No teeth at all — just a beak'], correctIndex: 1 },
    { question: 'How did male Heterodontosaurus compete for mates?', options: ['With large bony horns on their heads', 'With fang-like tusks and brightly colored cheeks', 'With elaborate tail feathers'], correctIndex: 1 },
    { question: 'How much did Heterodontosaurus weigh?', options: ['About 1.8 kg — the size of a large cat', 'About 50 kg — the size of a dog', 'About 200 kg — the size of a cow'], correctIndex: 0 },
  ],
  anchisaurus: [
    { question: 'Where were Anchisaurus fossils discovered?', options: ['Montana and Wyoming', 'Massachusetts and New York', 'Argentina and Brazil'], correctIndex: 1 },
    { question: 'How did Anchisaurus feed on high vegetation?', options: ['It only fed at ground level', 'It used grasping hands to pull branches down and reared up on hind legs', 'It knocked trees over with its tail'], correctIndex: 1 },
    { question: 'What is the significance of Anchisaurus fossils from eastern North America?', options: ['The most numerous sauropod fossils ever found', 'Among the earliest dinosaur fossils known from eastern North America', 'They show the first evidence of feathers in North America'], correctIndex: 1 },
  ],
  monolophosaurus: [
    { question: 'How many crests did Monolophosaurus have on its head?', options: ['None at all', 'One single crest on its snout', 'Two crests, like Dilophosaurus'], correctIndex: 1 },
    { question: 'What might the crest of Monolophosaurus have been used for?', options: ['Digging for food underground', 'Display or warning — possibly colored red', 'Headbutting rivals like Pachycephalosaurus'], correctIndex: 1 },
    { question: 'Where was Monolophosaurus discovered?', options: ['North America', 'Africa', 'Xinjiang, China'], correctIndex: 2 },
  ],
  scelidosaurus: [
    { question: 'What is Scelidosaurus notable for being?', options: ['The largest Jurassic herbivore', 'One of the earliest known armored dinosaurs', 'The first dinosaur found with feathers'], correctIndex: 1 },
    { question: 'What did Scelidosaurus do when threatened by predators?', options: ['It ran away as fast as possible', 'It planted feet wide and lowered its center of gravity to present armored flanks', 'It inflated its body to look bigger'], correctIndex: 1 },
    { question: 'In which two locations have Scelidosaurus fossils been found?', options: ['Montana and Argentina', 'England and Tibet', 'Germany and Tanzania'], correctIndex: 1 },
  ],
  proceratosaurus: [
    { question: 'What is Proceratosaurus\'s surprising evolutionary relationship?', options: ['It is an ancestor of Spinosaurus', 'It is one of the earliest known tyrannosauroids', 'It was the first ceratopsian'], correctIndex: 1 },
    { question: 'What was the likely function of Proceratosaurus\'s nasal crest?', options: ['To look bigger to rivals', 'Heat regulation — it had vascularized tissue inside', 'To make loud calls for communication'], correctIndex: 1 },
    { question: 'Where was the Proceratosaurus skull originally discovered?', options: ['Germany', 'Mongolia', 'Gloucestershire, England'], correctIndex: 2 },
  ],
  barosaurus: [
    { question: 'What does the famous Barosaurus mount at the American Museum of Natural History show?', options: ['A Barosaurus eating from tall trees', 'A Barosaurus rearing up to defend a juvenile from Allosaurus', 'A group of Barosaurus walking in a herd'], correctIndex: 1 },
    { question: 'What was Barosaurus\'s "tripodal stance"?', options: ['Standing on three legs to rest', 'Rearing up on hind legs and using its tail as a third support for defense', 'A swimming position using tail and two back legs'], correctIndex: 1 },
    { question: 'To which other sauropod was Barosaurus closely related?', options: ['Brachiosaurus', 'Apatosaurus', 'Diplodocus'], correctIndex: 2 },
  ],
  torvosaurus: [
    { question: 'Which famous predator did Torvosaurus rival as apex predator of the Late Jurassic?', options: ['Tyrannosaurus Rex', 'Spinosaurus', 'Allosaurus'], correctIndex: 2 },
    { question: 'On how many continents have Torvosaurus fossils been found?', options: ['One — North America only', 'Two — North America and Europe', 'Three — North America, Europe, and Africa'], correctIndex: 1 },
    { question: 'What does fossil evidence of Torvosaurus marks on sauropod bones tell us?', options: ['They were peaceful neighbors', 'Torvosaurus actively preyed on or scavenged large sauropods', 'Torvosaurus only ate plants'], correctIndex: 1 },
  ],
  hesperosaurus: [
    { question: 'How did Hesperosaurus defend itself against predators like Ceratosaurus?', options: ['With powerful front legs and claws', 'With defensive tail spikes (thagomizer)', 'By hiding in water'], correctIndex: 1 },
    { question: 'Where have all known Hesperosaurus fossils been found?', options: ['Exclusively in Wyoming\'s Morrison Formation', 'Africa and Europe', 'Montana and South Dakota'], correctIndex: 0 },
    { question: 'Which dinosaur was Hesperosaurus closely related to?', options: ['Ankylosaurus', 'Stegosaurus', 'Brachiosaurus'], correctIndex: 1 },
  ],
  abrictosaurus: [
    { question: 'How many specimens of Abrictosaurus are known?', options: ['Over 100', 'About a dozen', 'Only one'], correctIndex: 2 },
    { question: 'To which dinosaur family did Abrictosaurus belong?', options: ['Tyrannosaurs', 'Heterodontosaurids', 'Sauropods'], correctIndex: 1 },
    { question: 'Where was Abrictosaurus discovered?', options: ['South America', 'North America', 'Lesotho, Africa'], correctIndex: 2 },
  ],
  liopleurodon: [
    { question: 'Liopleurodon was not a dinosaur — what was it?', options: ['A crocodile ancestor', 'A plesiosaur (marine reptile)', 'A large prehistoric fish'], correctIndex: 1 },
    { question: 'How big was Liopleurodon really, compared to popular exaggerations?', options: ['About 25 metres long — as depicted', 'About 6 metres — far smaller than the claimed 25 metres', 'About 15 metres long'], correctIndex: 1 },
    { question: 'What does Liopleurodon\'s name refer to?', options: ['Its enormous size', 'Its sharp teeth', 'Its smooth-sided front teeth'], correctIndex: 2 },
  ],
  hadrosaurus: [
    { question: 'What historic first did Hadrosaurus achieve in 1868?', options: ['First dinosaur skeleton ever found', 'First dinosaur skeleton ever mounted and displayed in a museum', 'First dinosaur to have its DNA extracted'], correctIndex: 1 },
    { question: 'What did Hadrosaurus primarily eat?', options: ['Fish and small animals', 'Insects and grubs', 'Tough vegetation including magnolia leaves'], correctIndex: 2 },
    { question: 'How did Hadrosaurus reach high vegetation?', options: ['By stretching a very long neck', 'By rearing up on its massive hind legs', 'By climbing into trees'], correctIndex: 1 },
  ],
  gallimimus: [
    { question: 'What does "Gallimimus" mean?', options: ['Swift lizard', 'Chicken mimic', 'Desert runner'], correctIndex: 1 },
    { question: 'How fast could Gallimimus run?', options: ['About 20 km/h', 'Up to 68 km/h — one of the fastest dinosaurs', 'About 40 km/h'], correctIndex: 1 },
    { question: 'In which famous film franchise was Gallimimus shown running in a herd?', options: ['Godzilla', 'The Land Before Time', 'Jurassic Park'], correctIndex: 2 },
  ],
  troodon: [
    { question: 'What made Troodon unique among non-avian dinosaurs in terms of intelligence?', options: ['It was the only dinosaur known to use tools', 'It had the largest brain-to-body ratio of any known non-avian dinosaur', 'It had the most teeth of any dinosaur'], correctIndex: 1 },
    { question: 'What does "Troodon" mean?', options: ['Night hunter', 'Fast runner', 'Wounding tooth'], correctIndex: 2 },
    { question: 'Why did Troodon have especially large reflective eyes?', options: ['To appear more threatening to rivals', 'Adapted for nocturnal or twilight hunting', 'To attract mates with their appearance'], correctIndex: 1 },
  ],
  torosaurus: [
    { question: 'What was remarkable about the Torosaurus skull?', options: ['The smallest skull relative to body size of any ceratopsian', 'It constituted nearly a third of its total body length', 'It weighed more than the rest of its body'], correctIndex: 1 },
    { question: 'How is Torosaurus related to Triceratops?', options: ['Torosaurus was the direct ancestor of Triceratops', 'They are closely related and lived at the same time and place', 'They are unrelated despite similar appearances'], correctIndex: 1 },
    { question: 'What was the colorful frill of Torosaurus likely used for?', options: ['Protection against rain', 'Thermoregulation only', 'Behavioral displays toward rivals'], correctIndex: 2 },
  ],
  stegoceras: [
    { question: 'How did male Stegoceras compete for dominance?', options: ['Using tail spikes to fight', 'Using their domed skulls as battering rams in head-to-head contests', 'Wrestling with their front legs'], correctIndex: 1 },
    { question: 'Where have Stegoceras fossils been found?', options: ['Africa and Europe', 'Asia only', 'Alberta, Saskatchewan, and New Mexico'], correctIndex: 2 },
    { question: 'How many Stegoceras specimens are known?', options: ['Only 3', '41 different specimens', 'Over 200'], correctIndex: 1 },
  ],
  pentaceratops: [
    { question: 'What does "Pentaceratops" mean?', options: ['Four-horned face', 'Five-horned face', 'Many-horned lizard'], correctIndex: 1 },
    { question: 'What record does the Pentaceratops skull hold?', options: ['Most teeth of any ceratopsian', 'One of the largest skulls of any known land animal', 'The longest horns of any ceratopsian'], correctIndex: 1 },
    { question: 'In which areas have Pentaceratops fossils been discovered?', options: ['Montana and Alberta', 'New Mexico, Colorado, and Mexico', 'Asia and Europe'], correctIndex: 1 },
  ],
  centrosaurus: [
    { question: 'What do the famous Centrosaurus bone beds reveal about its behavior?', options: ['It was a solitary ambush predator', 'It lived in massive migratory herds', 'It buried its young like crocodilians'], correctIndex: 1 },
    { question: 'What dramatic event do some Centrosaurus bone beds preserve?', options: ['A volcanic eruption killing many at once', 'Herds that drowned while crossing flooded rivers during migration', 'A fight between rival herds'], correctIndex: 1 },
    { question: 'How many individual Centrosaurus specimens have paleontologists found?', options: ['Just 3 or 4', '46 different specimens', 'Over 500'], correctIndex: 1 },
  ],
  dracorex: [
    { question: 'Which fictional world does the Dracorex species name honor?', options: ['Lord of the Rings', 'The Chronicles of Narnia', 'Harry Potter\'s Hogwarts school'], correctIndex: 2 },
    { question: 'What controversial theory exists about Dracorex?', options: ['It may have been venomous', 'Some researchers think it was just a juvenile Pachycephalosaurus, not its own species', 'It may have been aquatic'], correctIndex: 1 },
    { question: 'What does "Dracorex" mean?', options: ['Dragon king', 'Ancient lizard', 'Horned monster'], correctIndex: 0 },
  ],
  sauroposeidon: [
    { question: 'What potential record does Sauroposeidon hold?', options: ['The longest dinosaur ever', 'The heaviest dinosaur ever', 'Potentially the tallest dinosaur ever — its head could reach 15 metres high'], correctIndex: 2 },
    { question: 'When did Sauroposeidon live?', options: ['In the Late Cretaceous with T. rex', 'In the Early Cretaceous, about 125 million years ago', 'In the Jurassic period'], correctIndex: 1 },
    { question: 'In which US states have Sauroposeidon fossils been found?', options: ['Montana, Wyoming, and Colorado', 'California, Nevada, and Utah', 'Texas, Wyoming, and Oklahoma'], correctIndex: 2 },
  ],
  tenontosaurus: [
    { question: 'Which famous predator frequently hunted Tenontosaurus?', options: ['Tyrannosaurus rex', 'Allosaurus', 'Pack-hunting Deinonychus'], correctIndex: 2 },
    { question: 'What did Tenontosaurus use for defense against raptors?', options: ['A bony tail club', 'A massive, stiffened tail', 'Thick body armor'], correctIndex: 1 },
    { question: 'How many Tenontosaurus specimens are known?', options: ['About 10', '77 different specimens', 'Over 200'], correctIndex: 1 },
  ],
  ornithomimus: [
    { question: 'What does "Ornithomimus" mean?', options: ['Fast runner', 'Bird mimic', 'Desert sprinter'], correctIndex: 1 },
    { question: 'What kind of environment did Ornithomimus prefer?', options: ['Dense forests', 'Open desert plains', 'Wetlands, sprinting with speed and agility'], correctIndex: 2 },
    { question: 'What was Ornithomimus\'s diet?', options: ['Primarily meat', 'Plants — it was herbivorous', 'Fish from rivers'], correctIndex: 1 },
  ],
  suchosaurus: [
    { question: 'How did Suchosaurus hunt its prey?', options: ['By running down prey on land', 'By standing thigh-deep in murky rivers to catch large fish', 'By ambushing from trees'], correctIndex: 1 },
    { question: 'To which famous dinosaur was Suchosaurus closely related?', options: ['Allosaurus', 'Tyrannosaurus', 'Baryonyx'], correctIndex: 2 },
    { question: 'In which countries have Suchosaurus fossils been found?', options: ['North America only', 'Africa and South America', 'England, Portugal, and Spain'], correctIndex: 2 },
  ],
  abelisaurus: [
    { question: 'What family of dinosaurs takes its name from Abelisaurus?', options: ['The Tyrannosaurs', 'The Spinosaurids', 'The Abelisauridae'], correctIndex: 2 },
    { question: 'What role did the Abelisauridae family play on the southern continents?', options: ['They were the giant herbivores', 'They filled the top predator role that T. rex filled in the north', 'They were aquatic predators'], correctIndex: 1 },
    { question: 'Where was Abelisaurus discovered?', options: ['Mongolia', 'North Africa', 'The Anacleto Formation of Argentina'], correctIndex: 2 },
  ],
};
