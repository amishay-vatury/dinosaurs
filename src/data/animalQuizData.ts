import type { QuizQuestion } from './quizData';

export const animalQuizData: Record<string, QuizQuestion[]> = {

  // ── MAMMALS ──────────────────────────────────────────────────────────────────
  'giant-panda': [
    { question: 'What do giant pandas eat almost exclusively?', options: ['Fish', 'Bamboo', 'Berries'], correctIndex: 1 },
    { question: 'How tiny is a newborn giant panda cub?', options: ['About the size of a cat', 'About the size of a stick of butter', 'About the size of a puppy'], correctIndex: 1 },
    { question: 'What special feature helps giant pandas grip bamboo?', options: ['An enlarged thumb claw', 'A "false thumb" made from a wrist bone', 'Extra-long claws on all five fingers'], correctIndex: 1 },
  ],
  'african-elephant': [
    { question: 'How many muscles are in an elephant\'s trunk?', options: ['Around 4,000', 'Around 40,000', 'Around 400'], correctIndex: 1 },
    { question: 'What do elephants use to communicate over long distances?', options: ['Loud trumpet calls', 'Low-frequency rumbles through the ground', 'Scent markings on trees'], correctIndex: 1 },
    { question: 'What is the leader of an elephant herd called?', options: ['The patriarch', 'The silverback', 'The matriarch'], correctIndex: 2 },
  ],
  'blue-whale': [
    { question: 'What do blue whales eat?', options: ['Large fish like tuna', 'Tiny shrimp-like creatures called krill', 'Squid and octopus'], correctIndex: 1 },
    { question: 'How loud can a blue whale\'s call be?', options: ['Up to 120 decibels', 'Up to 188 decibels', 'Up to 99 decibels'], correctIndex: 1 },
    { question: 'How long can blue whales live?', options: ['About 25 years', 'About 80–90 years', 'About 200 years'], correctIndex: 1 },
  ],
  cheetah: [
    { question: 'How fast can a cheetah accelerate from 0 to 60 mph?', options: ['In about 3 seconds', 'In about 10 seconds', 'In about 20 seconds'], correctIndex: 0 },
    { question: 'What is unique about cheetahs compared to other big cats?', options: ['They can swim underwater', 'They cannot roar — they chirp and purr instead', 'They have no spots'], correctIndex: 1 },
    { question: 'Why do cheetahs need to rest after a chase?', options: ['Their muscles cramp from the speed', 'They overheat and need to cool down before eating', 'They need to mark territory first'], correctIndex: 1 },
  ],
  giraffe: [
    { question: 'How many vertebrae are in a giraffe\'s neck?', options: ['7 — the same as a human', '14 — twice as many as a human', '20 — far more than any other mammal'], correctIndex: 0 },
    { question: 'What color is a giraffe\'s tongue and why?', options: ['Red, because of the blood vessels near the surface', 'Purple-black, possibly to protect from sunburn', 'Pink, just like a human tongue'], correctIndex: 1 },
    { question: 'Why is a giraffe\'s heart so large and powerful?', options: ['To pump blood 8 feet up to the brain against gravity', 'To keep warm in cold African nights', 'To pump extra blood to its long legs while running'], correctIndex: 0 },
  ],
  'arctic-fox': [
    { question: 'How does the Arctic fox survive extreme cold of -70°C?', options: ['By migrating to warmer areas', 'With the warmest paw pads and densest fur of any mammal', 'By hibernating underground all winter'], correctIndex: 1 },
    { question: 'What does the Arctic fox\'s fur do in summer?', options: ['It stays white all year round', 'It changes to brown or grey to match the summer tundra', 'It falls out completely and regrows white in autumn'], correctIndex: 1 },
    { question: 'What animal does the Arctic fox sometimes follow to find food?', options: ['Snowy owls', 'Polar bears', 'Walruses'], correctIndex: 1 },
  ],
  'bottlenose-dolphin': [
    { question: 'What is a dolphin\'s "signature whistle"?', options: ['A mating call used only in spring', 'A unique sound that acts like a personal name', 'An alarm signal for the whole pod'], correctIndex: 1 },
    { question: 'How do dolphins sleep without drowning?', options: ['They sleep on the surface like a log', 'They rest on the sea floor', 'They sleep with only half their brain at a time, never fully losing consciousness'], correctIndex: 2 },
    { question: 'What is echolocation?', options: ['Navigating by watching ocean currents', 'Sending sound waves and listening for echoes to find objects', 'Using the Earth\'s magnetic field to navigate'], correctIndex: 1 },
  ],
  gorilla: [
    { question: 'How much DNA do gorillas share with humans?', options: ['About 85%', 'About 98.3%', 'About 70%'], correctIndex: 1 },
    { question: 'What is a "silverback" gorilla?', options: ['A very old gorilla that has lost its fur', 'The dominant adult male in the group, named for silver fur on his back', 'A subspecies found only in mountain regions'], correctIndex: 1 },
    { question: 'What do gorillas build every single night?', options: ['Underground burrows for sleeping', 'New sleeping nests from leaves and branches', 'Territorial marker piles of rocks'], correctIndex: 1 },
  ],
  'polar-bear': [
    { question: 'What color is a polar bear\'s fur really?', options: ['Pure white', 'Transparent and hollow — it appears white because it reflects light', 'Yellow-white, stained by the cold air'], correctIndex: 1 },
    { question: 'What makes polar bears unique among bears?', options: ['They are the only bears that can climb trees', 'They are the only bear species classified as marine mammals', 'They are the only bears that mate for life'], correctIndex: 1 },
    { question: 'What is the biggest threat to polar bears today?', options: ['Overhunting by humans', 'Loss of sea ice due to climate change', 'Competition with grizzly bears'], correctIndex: 1 },
  ],
  'fennec-fox': [
    { question: 'What are the fennec fox\'s giant ears mainly used for?', options: ['To scare away predators with loud sounds', 'Radiating body heat to cool down AND hearing prey underground', 'Picking up distant mating calls of other fennec foxes'], correctIndex: 1 },
    { question: 'How do fennec foxes survive in the desert without drinking much water?', options: ['They store water in a special hump like a camel', 'They get most of their water from the food they eat', 'They absorb moisture from the air through their skin'], correctIndex: 1 },
    { question: 'Where does the fennec fox live?', options: ['The Sahara Desert of North Africa', 'The Arctic tundra', 'The Amazon rainforest'], correctIndex: 0 },
  ],

  // ── BIRDS ─────────────────────────────────────────────────────────────────────
  'bald-eagle': [
    { question: 'Why is the bald eagle called "bald" when it has white feathers?', options: ['Its head appears bald from a distance', 'The name comes from an old English word "balde" meaning white', 'Young bald eagles really are bald before their white feathers grow in'], correctIndex: 1 },
    { question: 'What can a bald eagle\'s nest weigh after years of additions?', options: ['Up to 100 pounds', 'Over 1 ton', 'About 50 pounds'], correctIndex: 1 },
    { question: 'What caused bald eagles to nearly go extinct in the 20th century?', options: ['Habitat destruction and hunting', 'DDT pesticide use and hunting', 'Disease and drought'], correctIndex: 1 },
  ],
  'emperor-penguin': [
    { question: 'Who keeps the egg warm during the Antarctic winter while the mother hunts?', options: ['Both parents take turns equally', 'The father balances it on his feet for up to 65 days without eating', 'The egg is buried in the snow for insulation'], correctIndex: 1 },
    { question: 'How deep can emperor penguins dive?', options: ['About 200 feet (60 m)', 'Over 1,850 feet (564 m)', 'About 600 feet (180 m)'], correctIndex: 1 },
    { question: 'How long can emperor penguins hold their breath?', options: ['About 2 minutes', 'Over 20 minutes', 'About 8 minutes'], correctIndex: 1 },
  ],
  flamingo: [
    { question: 'Where does a flamingo\'s pink color come from?', options: ['A natural pigment in their feathers at birth', 'Carotenoid pigments from the algae and crustaceans they eat', 'Special oil they spread on their feathers from a gland'], correctIndex: 1 },
    { question: 'What happens to a flamingo\'s color if it stops eating its special diet?', options: ['It turns a brighter, deeper pink', 'It slowly fades to white', 'It turns orange from stored pigments'], correctIndex: 1 },
    { question: 'How does a flamingo use its uniquely shaped bent bill?', options: ['To dig holes in mud for nesting', 'To filter tiny food particles upside-down in water', 'To fight off other flamingos during breeding season'], correctIndex: 1 },
  ],
  peacock: [
    { question: 'What are a peacock\'s tail feathers called?', options: ['Plumage', 'A train', 'A fan'], correctIndex: 1 },
    { question: 'How do peacock feathers get their brilliant shimmering colors?', options: ['From colorful pigments deposited in each feather barb', 'From microscopic crystal-like structures that reflect light', 'From a special oil the peacock spreads over its feathers'], correctIndex: 1 },
    { question: 'Can a peacock fly despite its enormous tail?', options: ['No — the tail is too heavy for flight', 'Yes — it can fly and roosts in trees at night', 'Only when it discards its tail feathers in winter'], correctIndex: 1 },
  ],
  hummingbird: [
    { question: 'How many times per second does a hummingbird beat its wings?', options: ['About 20 times', 'Up to 80 times', 'About 5 times'], correctIndex: 1 },
    { question: 'What makes hummingbirds unique among all birds?', options: ['They are the only birds with hollow bones', 'They are the only birds that can fly backward, hover, and briefly fly upside-down', 'They are the only birds that don\'t build nests'], correctIndex: 1 },
    { question: 'How much does a ruby-throated hummingbird weigh?', options: ['About the same as a golf ball', 'About the same as a nickel coin', 'About the same as a sheet of paper'], correctIndex: 1 },
  ],
  'great-horned-owl': [
    { question: 'What are the "horns" on a great horned owl?', options: ['Their actual ear tufts', 'Just feather tufts — not ears or horns at all', 'Small horn-like bony projections on the skull'], correctIndex: 1 },
    { question: 'How far can a great horned owl rotate its head?', options: ['90 degrees', '180 degrees', '270 degrees'], correctIndex: 2 },
    { question: 'What makes great horned owl flight nearly silent?', options: ['They fly very slowly to avoid air turbulence', 'Special serrated feathers that break up and muffle air turbulence', 'They only fly when there is wind to cover the sound'], correctIndex: 1 },
  ],
  toucan: [
    { question: 'Despite its enormous size, why is a toucan\'s bill lightweight?', options: ['It\'s made of extremely thin bone', 'It\'s made of hollow keratin supported by a spongy interior', 'It\'s made of feathers compressed together, not bone at all'], correctIndex: 1 },
    { question: 'What does a toucan use its colorful bill for besides eating?', options: ['Digging nests, swimming, and carrying young', 'Reaching fruit, regulating body temperature, and attracting mates', 'Singing, warning of predators, and building dams'], correctIndex: 1 },
    { question: 'How do toucans sleep?', options: ['On open branches with their tail hanging down', 'Curled in tree holes with bill tucked back over their body', 'In communal roosts of hundreds of birds in treetops'], correctIndex: 1 },
  ],
  ostrich: [
    { question: 'What is the ostrich\'s most famous ability?', options: ['It can fly short distances in emergencies', 'It\'s the fastest two-legged animal — running up to 45 mph (72 km/h)', 'It can go without water for an entire month'], correctIndex: 1 },
    { question: 'Do ostriches really bury their heads in the sand when frightened?', options: ['Yes, it\'s a well-documented defense behavior', 'No — it\'s a myth; they lower their head to rotate eggs in the nest', 'Yes, but only young ostriches do this'], correctIndex: 1 },
    { question: 'How large are ostrich eyes compared to their brain?', options: ['About the same size', 'Their eyes are bigger than their brain!', 'Their brain is much larger than their eyes'], correctIndex: 1 },
  ],
  'peregrine-falcon': [
    { question: 'What is the top speed of a peregrine falcon in a hunting dive?', options: ['About 100 mph (160 km/h)', 'Over 240 mph (390 km/h)', 'About 60 mph (97 km/h)'], correctIndex: 1 },
    { question: 'What helps a peregrine falcon breathe during its extreme-speed dive?', options: ['A special muscle that compresses its chest while diving', 'Cone-shaped bony ridges in its nostrils that act as speed brakes', 'It holds its breath completely throughout every dive'], correctIndex: 1 },
    { question: 'Where have peregrine falcons adapted to live in modern times?', options: ['Only in remote wilderness areas far from humans', 'In cities — nesting on skyscrapers and hunting pigeons', 'Only in coastal cliff areas near the ocean'], correctIndex: 1 },
  ],
  'snowy-owl': [
    { question: 'How many lemmings can a snowy owl eat in one year?', options: ['About 100', 'Up to 1,600', 'About 50'], correctIndex: 1 },
    { question: 'What is a snowy owl "irruption"?', options: ['A seasonal molting of their white feathers', 'A mass southward migration when lemmings are scarce', 'A group display performed to attract mates in spring'], correctIndex: 1 },
    { question: 'Unlike most owls, snowy owls are often active during the day. Why?', options: ['They cannot see well at night due to their bright white coloring', 'The Arctic has 24 hours of sunlight in summer, so daytime activity is necessary', 'They are too large to fly quietly at night'], correctIndex: 1 },
  ],

  // ── REPTILES ─────────────────────────────────────────────────────────────────
  'komodo-dragon': [
    { question: 'How do Komodo dragons actually kill their prey?', options: ['With toxic bacteria in their saliva alone', 'With venom glands in their lower jaw', 'By constricting prey with their powerful body'], correctIndex: 1 },
    { question: 'How does a Komodo dragon detect prey from far away?', options: ['With incredibly sensitive ears', 'By sampling air scent particles with its forked tongue', 'With excellent long-distance eyesight'], correctIndex: 1 },
    { question: 'How much can a Komodo dragon eat at one meal?', options: ['About 10% of its body weight', 'Up to 80% of its own body weight', 'About 25% of its body weight'], correctIndex: 1 },
  ],
  'american-alligator': [
    { question: 'How does the temperature inside an alligator\'s nest affect the babies?', options: ['Warmer nests produce larger babies', 'Temperature determines whether babies hatch as males or females', 'Cooler temperatures cause faster hatching'], correctIndex: 1 },
    { question: 'How many teeth can an alligator go through in its lifetime?', options: ['About 200 teeth total', 'Over 3,000 teeth', 'About 80 teeth total'], correctIndex: 1 },
    { question: 'What is a "gator hole" and why is it important?', options: ['A burrow where alligators sleep in winter', 'A depression dug by alligators that provides water for many species in droughts', 'A territorial marking hole dug by male alligators'], correctIndex: 1 },
  ],
  chameleon: [
    { question: 'Why do chameleons primarily change color?', options: ['To camouflage from predators', 'To communicate mood and social status to other chameleons', 'To absorb heat from sunlight'], correctIndex: 1 },
    { question: 'How fast can a chameleon\'s tongue shoot out to catch prey?', options: ['In about 1 second', 'In just 0.07 seconds — faster than the eye can follow', 'In about half a second'], correctIndex: 1 },
    { question: 'What can chameleon eyes do that human eyes cannot?', options: ['See in total darkness like night-vision goggles', 'Move completely independently — looking in different directions at the same time', 'See ultraviolet light like insects can'], correctIndex: 1 },
  ],
  'king-cobra': [
    { question: 'What does the king cobra\'s scientific name Ophiophagus mean?', options: ['King of the forest', 'Snake-eater', 'Hooded serpent'], correctIndex: 1 },
    { question: 'What makes king cobras unique among snakes regarding their eggs?', options: ['They have live births instead of laying eggs', 'They are the only snakes that build nests and guard their eggs', 'Their eggs have the hardest shells of any snake'], correctIndex: 1 },
    { question: 'How high can a king cobra raise its body off the ground?', options: ['About 6 inches', 'Up to a third of its length — enough to look a person in the eye', 'It cannot raise its body at all'], correctIndex: 1 },
  ],
  'sea-turtle': [
    { question: 'What is the leatherback sea turtle named for?', options: ['The leather straps on its flippers', 'Its leathery back — it has no hard shell, only flexible cartilage-reinforced skin', 'The leathery texture of its eggs'], correctIndex: 1 },
    { question: 'How deep can a leatherback sea turtle dive?', options: ['About 300 feet (90 m)', 'Over 4,000 feet (1,219 m)', 'About 1,000 feet (305 m)'], correctIndex: 1 },
    { question: 'What is the leatherback\'s primary food?', options: ['Fish and crustaceans', 'Jellyfish', 'Seagrass and algae'], correctIndex: 1 },
  ],
  'nile-crocodile': [
    { question: 'How long can a Nile crocodile go without eating?', options: ['About 2 weeks', 'Up to a year after a large meal', 'About 2 months'], correctIndex: 1 },
    { question: 'What do crocodiles swallow stones for?', options: ['As ballast to help them sink underwater', 'To help grind up food in their stomach — they cannot chew', 'For calcium to strengthen their teeth'], correctIndex: 1 },
    { question: 'Despite being fearsome predators, what do mother Nile crocodiles do with newborn babies?', options: ['They leave them immediately after they hatch', 'They carry them gently in their jaws to the water and protect them', 'They bury them in mud to keep them moist'], correctIndex: 1 },
  ],
  'galapagos-tortoise': [
    { question: 'How long can Galápagos tortoises live?', options: ['About 60 years', 'Over 170 years', 'About 100 years'], correctIndex: 1 },
    { question: 'How did Charles Darwin use the Galápagos tortoises?', options: ['He ate them for food on his voyage', 'He observed that different island populations had evolved different shell shapes, inspiring his theory of evolution', 'He brought them back to England as pets'], correctIndex: 1 },
    { question: 'How long can a Galápagos tortoise survive without food or water?', options: ['About a week', 'Up to an entire year', 'About a month'], correctIndex: 1 },
  ],
  'green-iguana': [
    { question: 'What is the "parietal eye" on a green iguana\'s head?', options: ['An extra eye that sees in color', 'A light-sensing organ on top of the head that detects shadows from above', 'A fake eye pattern to scare predators'], correctIndex: 1 },
    { question: 'What happens when a predator grabs a green iguana\'s tail?', options: ['The iguana turns around and bites the predator', 'The tail detaches — and can grow back over several months', 'The iguana freezes completely still in shock'], correctIndex: 1 },
    { question: 'Despite being called "green" iguanas, what colors can they actually be?', options: ['Only green — hence the name', 'Orange, blue, grey and other colors depending on age and region', 'Red and yellow — green is actually rare in adults'], correctIndex: 1 },
  ],

  // ── AMPHIBIANS ───────────────────────────────────────────────────────────────
  axolotl: [
    { question: 'What makes the axolotl a "Peter Pan" animal?', options: ['It lives in Neverland habitats in Mexico', 'It never metamorphoses — it stays in its larval, aquatic form its whole life', 'It can reverse its aging process when stressed'], correctIndex: 1 },
    { question: 'What is the axolotl\'s most famous superpower?', options: ['It can change color to camouflage in any environment', 'It can completely regenerate lost limbs, heart tissue, and even parts of its brain', 'It can survive out of water for weeks at a time'], correctIndex: 1 },
    { question: 'Why are wild axolotls critically endangered?', options: ['They are heavily hunted for their toxins', 'They exist naturally in just one lake near Mexico City, which is highly polluted', 'Climate change has frozen all of their mountain habitats'], correctIndex: 1 },
  ],
  'poison-dart-frog': [
    { question: 'Where do poison dart frogs get their toxins from?', options: ['They produce the toxins in special glands in their skin', 'From specific insects and mites they eat in the wild', 'From the toxic plants they live among in the rainforest'], correctIndex: 1 },
    { question: 'What is aposematism?', options: ['The ability to change color rapidly', 'Using bright warning colors to signal to predators: "I am dangerous!"', 'The ability to inflate the body to appear larger'], correctIndex: 1 },
    { question: 'What are scientists developing from poison dart frog toxins?', options: ['New pesticides for agriculture', 'Powerful new painkillers for human medicine', 'New materials for bulletproof vests'], correctIndex: 1 },
  ],
  'red-eyed-tree-frog': [
    { question: 'Why do red-eyed tree frogs have such vivid red eyes?', options: ['Red eyes help them see better at night', 'To flash at startled predators — the sudden bright color momentarily confuses them', 'The red is a health signal used to attract mates'], correctIndex: 1 },
    { question: 'What do red-eyed tree frogs do during the day to stay safe?', options: ['They dive into pools of water', 'They sleep on leaves with eyes closed, relying on their green back for camouflage', 'They bury themselves in mud at the base of trees'], correctIndex: 1 },
    { question: 'How do red-eyed tree frog eggs hatch?', options: ['The eggs fall into the water below and hatch there', 'Tadpoles hatch from eggs laid on leaves and drop into the water pool below', 'The mother carries the eggs on her back until they hatch'], correctIndex: 1 },
  ],
  'american-bullfrog': [
    { question: 'Why is the American bullfrog considered a problematic invasive species?', options: ['It is too loud and disturbs human settlements', 'When introduced to new areas, it devastates native wildlife by eating almost anything', 'It carries a deadly disease that infects native frogs'], correctIndex: 1 },
    { question: 'How far can a male bullfrog\'s call be heard?', options: ['About 10 feet (3 m)', 'Up to half a mile (0.8 km)', 'About 100 feet (30 m)'], correctIndex: 1 },
    { question: 'What do the large round discs behind a bullfrog\'s eyes do?', options: ['They change color to signal its mood', 'They are eardrums (tympanic membranes) that help it locate sounds precisely', 'They store fat reserves for winter hibernation'], correctIndex: 1 },
  ],
  'fire-salamander': [
    { question: 'How is the fire salamander different from most amphibians when it comes to reproduction?', options: ['It lays eggs on dry land instead of in water', 'It gives birth to live larvae directly into streams instead of laying eggs', 'It can reproduce without any water at all'], correctIndex: 1 },
    { question: 'What is the name of the poison produced by fire salamanders?', options: ['Batrachotoxin', 'Samandarin', 'Tetrodotoxin'], correctIndex: 1 },
    { question: 'Where did the fire salamander legend about fire come from?', options: ['They were seen crawling out of flames without burning', 'They shelter in logs and walk out unharmed when the wood is placed on a fire', 'Ancient people saw them near volcanoes in southern Europe'], correctIndex: 1 },
  ],
  'cane-toad': [
    { question: 'What happened after cane toads were introduced to Australia in 1935?', options: ['They successfully controlled the pest beetles they were meant to eat', 'Their population exploded to over 200 million and devastated native wildlife', 'They died out within a few years because Australian conditions didn\'t suit them'], correctIndex: 1 },
    { question: 'How many eggs can a female cane toad lay in one clutch?', options: ['About 500 eggs', 'Up to 35,000 eggs', 'About 5,000 eggs'], correctIndex: 1 },
    { question: 'How do cane toads take advantage of beehives?', options: ['They break into beehives to steal honey', 'They position themselves at hive entrances and eat worker bees as they fly in and out', 'They mimic the queen bee\'s scent to sneak inside'], correctIndex: 1 },
  ],
  'glass-frog': [
    { question: 'What makes glass frogs unique and easy to identify?', options: ['They can make glass-like clicking sounds', 'Their bellies are transparent — you can see their internal organs through their skin', 'They are perfectly colorless and completely see-through all over'], correctIndex: 1 },
    { question: 'What do male glass frogs do for their eggs?', options: ['They fertilize them and immediately leave', 'They guard the egg clutch every night until the tadpoles hatch', 'They eat them if food becomes scarce'], correctIndex: 1 },
    { question: 'A recent discovery showed glass frogs become more transparent at night. Why?', options: ['Their skin produces a chemical that turns it clear in darkness', 'They hide their red blood cells in their liver while sleeping, reducing their visible coloring', 'They absorb moonlight which bleaches their skin temporarily'], correctIndex: 1 },
  ],
  mudpuppy: [
    { question: 'What makes mudpuppies unusual compared to most other salamanders?', options: ['They can survive on land for months at a time', 'They keep their external gills their entire adult life and never metamorphose', 'They lay their eggs out of water, unlike all other salamanders'], correctIndex: 1 },
    { question: 'Do mudpuppies actually make sounds like dogs?', options: ['Yes — they make a distinctive bark that sounds exactly like a small dog', 'No — mudpuppies are completely and permanently silent', 'Only males bark during mating season in spring'], correctIndex: 1 },
    { question: 'When do mudpuppies breed?', options: ['In summer when the water is warmest', 'In late fall and winter — even under ice', 'In spring when water levels are highest after snowmelt'], correctIndex: 1 },
  ],

  // ── INVERTEBRATES ─────────────────────────────────────────────────────────────
  'giant-pacific-octopus': [
    { question: 'How many hearts does an octopus have?', options: ['One, like most animals', 'Three — two for the gills and one for the body', 'Two — one for each side of the body'], correctIndex: 1 },
    { question: 'Why is octopus blood blue?', options: ['It contains copper-based hemocyanin instead of iron-based hemoglobin', 'It reflects deep ocean light when deep underwater', 'Young octopuses have red blood that turns blue with age'], correctIndex: 0 },
    { question: 'What happens to a mother octopus after her eggs hatch?', options: ['She immediately starts preparing a new nest', 'She dies — she doesn\'t eat during the 6–7 months of caring for her eggs', 'She teaches the babies to hunt before they venture out alone'], correctIndex: 1 },
  ],
  'monarch-butterfly': [
    { question: 'How far do monarch butterflies migrate each fall?', options: ['About 500 miles (800 km)', 'Over 3,000 miles (4,800 km) from Canada to Mexico', 'About 100 miles (160 km) to warmer US states'], correctIndex: 1 },
    { question: 'How many generations does it take for monarchs to migrate north?', options: ['Just one generation flies the entire route north and back', '3–4 generations fly north, but only 1 special generation flies all the way south', '2 generations — one going and one coming back'], correctIndex: 1 },
    { question: 'What plant do monarch caterpillars need to eat, and why is it important?', options: ['Stinging nettles — to build resistance to predators', 'Milkweed — it contains toxins that make both the caterpillar and butterfly poisonous to birds', 'Oak leaves — they provide a chemical that helps with navigation'], correctIndex: 1 },
  ],
  'honey-bee': [
    { question: 'How many flowers must a honey bee visit to make one pound of honey?', options: ['About 10,000 flowers', 'About 2 million flowers', 'About 100,000 flowers'], correctIndex: 1 },
    { question: 'What does the bee "waggle dance" communicate?', options: ['That the hive is under threat and needs defending', 'The exact direction and distance to a food source', 'That the queen bee is ready to lay a new set of eggs'], correctIndex: 1 },
    { question: 'About what fraction of human food crops do honey bees pollinate?', options: ['About one-tenth', 'About one-third', 'About two-thirds'], correctIndex: 1 },
  ],
  'mantis-shrimp': [
    { question: 'How many types of color receptors do mantis shrimp eyes have?', options: ['3 — the same as humans', '16 — far more than any other known animal', '6 — double the human amount'], correctIndex: 1 },
    { question: 'What happens when a mantis shrimp strikes with its dactyl club?', options: ['It delivers an electric shock through the club', 'The club moves with bullet-like speed and can even create a cavitation bubble', 'The club delivers a jet of water that knocks prey backward'], correctIndex: 1 },
    { question: 'What material science application are scientists developing inspired by mantis shrimp clubs?', options: ['Ultra-light aircraft wings based on the club\'s hollow structure', 'Super-strong body armor using the helix-reinforced structure of the club', 'High-efficiency solar cells based on how the club reflects light'], correctIndex: 1 },
  ],
  dragonfly: [
    { question: 'How long have dragonflies been on Earth?', options: ['About 65 million years — since the dinosaurs died out', 'Over 300 million years — long before the first dinosaurs appeared', 'About 100 million years — appearing in the Cretaceous period'], correctIndex: 1 },
    { question: 'What percentage of their prey do dragonflies successfully catch?', options: ['About 50% — similar to a lion\'s success rate', 'About 95% — the highest of any known predator', 'About 75% — better than most predators'], correctIndex: 1 },
    { question: 'How do dragonfly nymphs differ from the adults we see flying?', options: ['Nymphs look just like tiny adults with the same features', 'Nymphs are aquatic and live underwater for 1–4 years before becoming flying adults', 'Nymphs are completely invisible — they live entirely underground'], correctIndex: 1 },
  ],
  'horseshoe-crab': [
    { question: 'How long have horseshoe crabs existed virtually unchanged?', options: ['About 100 million years', 'Over 450 million years', 'About 200 million years'], correctIndex: 1 },
    { question: 'What is horseshoe crab blood used for?', options: ['Creating dyes for expensive fabrics', 'Safety-testing every injectable medicine and vaccine used by humans', 'Manufacturing high-grade lubricants for spacecraft'], correctIndex: 1 },
    { question: 'Are horseshoe crabs actually crabs?', options: ['Yes, they are a species of true crab', 'No — they are more closely related to spiders and scorpions', 'No — they are actually a type of primitive fish'], correctIndex: 1 },
  ],
  'giant-squid': [
    { question: 'How large are giant squid eyes?', options: ['About the size of a golf ball', 'Up to 12 inches (30 cm) across — the size of a dinner plate', 'About the size of a tennis ball'], correctIndex: 1 },
    { question: 'When was the first photograph of a living giant squid taken?', options: ['In 1952, by a deep-sea submersible', 'In 2004 — they lived as legends for centuries before this!', 'In 1980, when cameras were first waterproof enough'], correctIndex: 1 },
    { question: 'What evidence of giant squid battles is regularly found on sperm whales?', options: ['Giant squid tentacles found in whale stomachs', 'Circular sucker scars from giant squid on sperm whale skin', 'Broken squid beaks embedded in whale skin'], correctIndex: 1 },
  ],
  lobster: [
    { question: 'What makes lobsters potentially "biologically immortal"?', options: ['They never get any diseases because of special antibodies', 'Unlike other animals, they show no weakening of immunity or fertility as they age', 'They can survive almost any injury due to rapid healing'], correctIndex: 1 },
    { question: 'How do lobsters taste their food?', options: ['With a tongue inside their mouth', 'With chemoreceptors on their feet and legs', 'With sensory organs at the tips of their antennae'], correctIndex: 1 },
    { question: 'What color is lobster blood, and why?', options: ['Red — because it contains iron-based hemoglobin like humans', 'Blue — because it contains copper-based hemocyanin', 'Clear — they don\'t actually have colored blood'], correctIndex: 1 },
  ],

  // ── FISH ──────────────────────────────────────────────────────────────────────
  'great-white-shark': [
    { question: 'What special sensory organ helps great white sharks detect hidden prey?', options: ['A line of pressure sensors along their side', 'Ampullae of Lorenzini that detect electromagnetic fields from heartbeats', 'Extra-sensitive nostrils that can smell through solid objects'], correctIndex: 1 },
    { question: 'How do great white sharks hunt seals near the surface?', options: ['They circle slowly waiting for the seal to tire', 'They breach completely out of the water — leaping up to 10 feet (3 m) into the air!', 'They herd seals into shallow water where they\'re easier to catch'], correctIndex: 1 },
    { question: 'How old is the great white shark as a species?', options: ['About 5 million years old', 'About 16 million years old — older than many extinct dinosaurs were', 'About 2 million years old'], correctIndex: 1 },
  ],
  clownfish: [
    { question: 'All clownfish are born male — what happens to the dominant male if the female dies?', options: ['He stays male and finds a new female from another group', 'He undergoes a complete sex change to become the new female', 'The group breaks up and all fish go their separate ways'], correctIndex: 1 },
    { question: 'How do clownfish survive inside their host anemone\'s deadly stinging tentacles?', options: ['Their skin is just thick enough to not trigger the stinging cells', 'A special mucus coating tricks the anemone into not firing its sting', 'They have complete immunity to all anemone toxins in their bloodstream'], correctIndex: 1 },
    { question: 'What did the movie "Finding Nemo" get biologically wrong?', options: ['Clownfish can\'t actually swim that fast', 'If the mother died, the father Marlin would actually become a new mother, not search for his son', 'Great white sharks and clownfish never live in the same ocean region'], correctIndex: 1 },
  ],
  seahorse: [
    { question: 'Why are seahorses unique in the entire animal kingdom?', options: ['They are the only fish that cannot breathe in water', 'They are the only animal species where the male carries the pregnancy and gives birth', 'They are the only fish that can walk on two fins on the sea floor'], correctIndex: 1 },
    { question: 'Why do seahorses need to eat almost constantly?', options: ['Their rapid metabolism burns through food in minutes', 'They have no stomach — food passes through too quickly to absorb enough nutrients', 'They feed their young directly from a special pouch continuously'], correctIndex: 1 },
    { question: 'What do mated seahorse pairs do every single morning?', options: ['Perform a synchronized swimming display to check on each other\'s health', 'Hold tails and do a greeting dance together', 'Separate territories and spend the day hunting independently'], correctIndex: 1 },
  ],
  'manta-ray': [
    { question: 'Despite their enormous size, what do giant manta rays eat?', options: ['Large fish and squid', 'Tiny plankton filtered from the water', 'Sea turtles and other large ocean animals'], correctIndex: 1 },
    { question: 'What evidence suggests manta rays are highly intelligent?', options: ['They can be trained to perform complex tasks in captivity', 'They appear to recognize themselves in mirrors — one of very few non-mammal animals', 'They have been observed using rocks as tools to open shellfish'], correctIndex: 1 },
    { question: 'What are the "horns" on a manta ray\'s head?', options: ['Defensive weapons against predators', 'Cephalic fins that funnel plankton-rich water into their mouth', 'Organs used to detect the Earth\'s magnetic field for navigation'], correctIndex: 1 },
  ],
  anglerfish: [
    { question: 'What powers the glowing lure on a female anglerfish\'s forehead?', options: ['A special electric organ in the lure itself', 'Colonies of living bioluminescent bacteria inside the lure', 'Chemical reactions similar to those in a glow stick'], correctIndex: 1 },
    { question: 'What happens to a male anglerfish when he finds a female?', options: ['He waits nearby and fertilizes her eggs externally when she releases them', 'He bites into her body and their tissues permanently fuse together', 'He guards her territory and brings her food in exchange for mating rights'], correctIndex: 1 },
    { question: 'How can an anglerfish eat prey much larger than itself?', options: ['It paralyzes prey with a venomous bite first', 'It has a massively expandable stomach and flexible jaw that can engulf prey twice its size', 'It swallows prey whole by dislocating its lower jaw like a python'], correctIndex: 1 },
  ],
  'electric-eel': [
    { question: 'How much electricity can a large electric eel generate?', options: ['About 100 volts — enough to give a mild shock', 'Up to 860 volts — enough to stun a horse', 'About 9 volts — about the same as a battery'], correctIndex: 1 },
    { question: 'What is the electric eel actually most closely related to?', options: ['True eels like the European eel', 'Catfish — it\'s actually a type of knifefish', 'Sharks — it\'s a cartilaginous fish like them'], correctIndex: 1 },
    { question: 'Why do electric eels have to surface frequently?', options: ['To scan their surroundings with eyes above the waterline', 'To breathe air — the murky water is too low in oxygen', 'To charge their electric organs by exposing them to sunlight'], correctIndex: 1 },
  ],
  piranha: [
    { question: 'What is the truth about piranha attacks on humans?', options: ['Piranha attacks on healthy adult humans are extremely rare — they prefer to scavenge', 'Piranhas actively seek out human swimmers and attack in coordinated packs', 'Piranhas are actually only dangerous to children — adults are too large for them to harm'], correctIndex: 0 },
    { question: 'How were piranha teeth historically used by indigenous peoples?', options: ['As jewelry and decoration in ceremonies', 'As cutting tools, scissors, and arrowheads — they\'re remarkably sharp', 'As musical instruments, scraped together to make sound'], correctIndex: 1 },
    { question: 'Why do red-bellied piranhas swim in schools?', options: ['To coordinate group hunting attacks on large prey', 'Mainly for protection from larger predators, not primarily for hunting', 'To keep warm in the cool Amazon river water'], correctIndex: 1 },
  ],
  'blue-tang': [
    { question: 'What color are baby blue tangs when they hatch?', options: ['Pale blue with white stripes', 'Bright yellow — they change to blue as they mature', 'The same vivid blue as adults'], correctIndex: 1 },
    { question: 'Why are blue tangs sometimes called "surgeonfish"?', options: ['Because they were discovered by a famous surgeon', 'Because of sharp scalpel-like spines near their tail used for defense', 'Because their mouths look like surgical tools when seen up close'], correctIndex: 1 },
    { question: 'How do blue tangs help coral reefs stay healthy?', options: ['They produce chemicals that prevent coral bleaching', 'By constantly grazing on algae that would otherwise smother and kill the coral', 'They carry coral larvae on their scales and spread them to new locations'], correctIndex: 1 },
  ],
};
