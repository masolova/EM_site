const CATEGORIES_EN = [
  {
    "name": "tolkien's middle-earth",
    "tags": {
      "a": "geek",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Mordor",
        "d": "Dark land where Sauron rules and the One Ring was forged"
      },
      {
        "w": "Shire",
        "d": "Peaceful hobbit homeland in the west of Middle-earth"
      },
      {
        "w": "Rivendell",
        "d": "Elven refuge led by Elrond, where the Fellowship was formed"
      },
      {
        "w": "Mithril",
        "d": "Rare silver metal — Bilbo's shirt made of it saved Frodo"
      },
      {
        "w": "Balrog",
        "d": "Ancient fire demon Gandalf fought on the Bridge of Khazad-dûm"
      },
      {
        "w": "Gondor",
        "d": "Kingdom of Men whose throne Aragorn reclaims"
      },
      {
        "w": "Ent",
        "d": "Tree-herder creature; Treebeard leads them against Saruman"
      },
      {
        "w": "Palantír",
        "d": "Seeing-stone used by Sauron and Saruman to spy across Middle-earth"
      },
      {
        "w": "Rohan",
        "d": "Kingdom of the horse-lords; home of King Théoden"
      },
      {
        "w": "Smaug",
        "d": "Fire-breathing dragon who guards the Lonely Mountain's treasure"
      },
      {
        "w": "Gandalf",
        "d": "Grey wizard who tells hobbits they're late — then isn't"
      },
      {
        "w": "Frodo",
        "d": "Ring-bearer hobbit whose quiet courage saves Middle-earth"
      },
      {
        "w": "Aragorn",
        "d": "Ranger heir to Gondor's throne who becomes its greatest king"
      },
      {
        "w": "Legolas",
        "d": "Elven archer who never misses and never ages"
      },
      {
        "w": "Gollum",
        "d": "Wretched creature twisted by centuries of ring obsession"
      },
      {
        "w": "Isengard",
        "d": "Saruman's industrial fortress torn apart by raging Ents"
      },
      {
        "w": "Lothlorien",
        "d": "Timeless elven forest ruled by Galadriel, golden-hued"
      },
      {
        "w": "Hobbit",
        "d": "Small, furry-footed folk who love second breakfasts"
      },
      {
        "w": "Moria",
        "d": "Ancient dwarf mine full of darkness and one very large demon"
      },
      {
        "w": "Nazgûl",
        "d": "Nine black-robed wraith kings who hunt the One Ring"
      },
      {
        "w": "Saruman",
        "d": "White wizard turned traitor who industrialises Isengard"
      },
      {
        "w": "Orthanc",
        "d": "Impenetrable black tower at the heart of Isengard"
      },
      {
        "w": "Arwen",
        "d": "Half-elven princess who gives up immortality for Aragorn"
      },
      {
        "w": "Helm's Deep",
        "d": "Fortress where Aragorn's forces make their last heroic stand"
      },
      {
        "w": "Mount Doom",
        "d": "Only place where the One Ring can be destroyed"
      },
      {
        "w": "Bilbo",
        "d": "Unexpected burglar hobbit who steals the Arkenstone from Smaug"
      },
      {
        "w": "Valinor",
        "d": "Blessed realm across the sea where elves sail at life's end"
      },
      {
        "w": "The Prancing Pony",
        "d": "Bree inn where Frodo first meets the mysterious Strider"
      },
      {
        "w": "Eowyn",
        "d": "Shield-maiden of Rohan who slays the Witch-king disguised as a man"
      },
      {
        "w": "One Ring",
        "d": "One Ring to rule them all, forged in the fires of Mordor"
      },
      {
        "w": "Pippin",
        "d": "Cheerful Took hobbit who accidentally summons a palantír"
      },
      {
        "w": "Faramir",
        "d": "Gondor's noble captain who resists the Ring's temptation"
      },
      {
        "w": "Silmaril",
        "d": "Three jewels containing the light of the Two Trees of Valinor"
      },
      {
        "w": "Shelob",
        "d": "Colossal spider who nearly ends Frodo's quest in her lair"
      },
      {
        "w": "Lembas",
        "d": "Elvish waybread so filling one bite can sustain a grown man"
      }
    ]
  },
  {
    "name": "star wars universe",
    "tags": {
      "a": "geek",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Tatooine",
        "d": "Desert twin-sun planet, birthplace of both Skywalkers"
      },
      {
        "w": "Lightsaber",
        "d": "Elegant laser-sword weapon of the Jedi and Sith"
      },
      {
        "w": "Wookiee",
        "d": "Tall furry species; Chewbacca is the most famous one"
      },
      {
        "w": "Death Star",
        "d": "Moon-sized Imperial superweapon that can destroy planets"
      },
      {
        "w": "X-Wing",
        "d": "Rebel Alliance starfighter that blew up the first Death Star"
      },
      {
        "w": "Hoth",
        "d": "Frozen rebel base planet attacked by Imperial walkers"
      },
      {
        "w": "Ewok",
        "d": "Small furry warriors of Endor who help defeat the Empire"
      },
      {
        "w": "Mandalorian",
        "d": "Warrior culture bound by honour; wears iconic beskar armour"
      },
      {
        "w": "Sith",
        "d": "Dark-side Force users who crave power above all else"
      },
      {
        "w": "Millennium Falcon",
        "d": "Han Solo's legendary ship that made the Kessel Run in 12 parsecs"
      },
      {
        "w": "Yoda",
        "d": "Ancient green Jedi Master whose wisdom comes in small packages"
      },
      {
        "w": "Darth Vader",
        "d": "Iconic dark lord whose helmet breathing haunts cinema history"
      },
      {
        "w": "The Force",
        "d": "Mystical energy field that binds the galaxy together"
      },
      {
        "w": "R2-D2",
        "d": "Beeping astromech droid who quietly saves everyone repeatedly"
      },
      {
        "w": "C-3PO",
        "d": "Protocol droid fluent in over six million forms of communication"
      },
      {
        "w": "Jedi",
        "d": "Peacekeeping order of Force-wielders guided by calm and discipline"
      },
      {
        "w": "Alderaan",
        "d": "Peaceful planet destroyed by the Death Star to intimidate Leia"
      },
      {
        "w": "Emperor Palpatine",
        "d": "Scheming Sith lord who secretly engineered the fall of the Republic"
      },
      {
        "w": "Coruscant",
        "d": "Planet-wide city and seat of the Galactic Republic"
      },
      {
        "w": "BB-8",
        "d": "Spherical rolling droid who carries the map to Luke Skywalker"
      },
      {
        "w": "Han Solo",
        "d": "Roguish smuggler who shoots first and asks questions never"
      },
      {
        "w": "Dagobah",
        "d": "Swampy exile planet where Yoda trains Luke in the Force"
      },
      {
        "w": "Naboo",
        "d": "Peaceful planet of waterfalls, home of Queen Amidala"
      },
      {
        "w": "Stormtrooper",
        "d": "White-armoured Imperial soldiers with famously poor aim"
      },
      {
        "w": "TIE Fighter",
        "d": "Fast twin-ion engine Imperial fighter with distinctive screech"
      },
      {
        "w": "Obi-Wan Kenobi",
        "d": "Wise Jedi Master who trained both Anakin and Luke Skywalker"
      },
      {
        "w": "Kylo Ren",
        "d": "Conflicted dark-side warrior torn between light and legacy"
      },
      {
        "w": "Leia",
        "d": "Princess, senator, rebel general — the galaxy's greatest leader"
      },
      {
        "w": "The Clone Wars",
        "d": "Galaxy-wide conflict fought with army of identical soldiers"
      },
      {
        "w": "Grogu",
        "d": "50-year-old baby with big ears and irresistible Force powers"
      },
      {
        "w": "Mustafar",
        "d": "Volcanic planet where Obi-Wan defeats Anakin in fiery duel"
      },
      {
        "w": "Boba Fett",
        "d": "Feared bounty hunter in Mandalorian armour with jetpack"
      },
      {
        "w": "Kashyyyk",
        "d": "Forest moon home world of the Wookiee species"
      },
      {
        "w": "Darth Maul",
        "d": "Double-bladed lightsaber wielding Sith apprentice with iconic red tattoos"
      },
      {
        "w": "AT-AT",
        "d": "Four-legged Imperial walking tank that terrorised the Battle of Hoth"
      }
    ]
  },
  {
    "name": "iconic movie quotes",
    "tags": {
      "a": "human",
      "b": "movies",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "I'll be back",
        "d": "Terminator's cold promise that became pop culture shorthand"
      },
      {
        "w": "Here's looking at you, kid",
        "d": "Bogart's farewell toast to Bergman in Casablanca"
      },
      {
        "w": "May the Force be with you",
        "d": "Star Wars blessing exchanged among Jedi and rebels"
      },
      {
        "w": "You can't handle the truth!",
        "d": "Nicholson's explosive courtroom outburst in A Few Good Men"
      },
      {
        "w": "To infinity and beyond!",
        "d": "Buzz Lightyear's rallying cry for adventure in Toy Story"
      },
      {
        "w": "Why so serious?",
        "d": "Joker's chilling taunt that makes smiling feel dangerous"
      },
      {
        "w": "Houston, we have a problem",
        "d": "Apollo 13's understated call from space that changed everything"
      },
      {
        "w": "Just keep swimming",
        "d": "Dory's cheerful life advice in Finding Nemo"
      },
      {
        "w": "Life is like a box of chocolates",
        "d": "Forrest Gump's mama's wisdom about life's sweet surprises"
      },
      {
        "w": "I see dead people",
        "d": "The Sixth Sense's chilling child confession that rewrites the film"
      },
      {
        "w": "You talking to me?",
        "d": "Taxi Driver's mirror monologue — Scorsese's most imitated scene"
      },
      {
        "w": "There's no place like home",
        "d": "Dorothy clicks her ruby slippers and escapes Oz forever"
      },
      {
        "w": "Say hello to my little friend",
        "d": "Scarface's machine-gun moment before Tony Montana's last stand"
      },
      {
        "w": "I am your father",
        "d": "The Empire Strikes Back reveal that rewired a generation's brains"
      },
      {
        "w": "Elementary, my dear Watson",
        "d": "Holmes's cool deduction phrase — actually never in the books"
      },
      {
        "w": "E.T. phone home",
        "d": "Alien's three-word plea that moved an entire generation to tears"
      },
      {
        "w": "Go ahead, make my day",
        "d": "Dirty Harry's invitation to criminals to try their luck"
      },
      {
        "w": "You had me at hello",
        "d": "Renée Zellweger's melting reply in Jerry Maguire"
      },
      {
        "w": "Show me the money!",
        "d": "Cuba Gooding Jr.'s electrifying demand in Jerry Maguire"
      },
      {
        "w": "Here's Johnny!",
        "d": "Jack Nicholson's axe-through-the-door terror in The Shining"
      },
      {
        "w": "I'm king of the world!",
        "d": "DiCaprio's bow-deck triumph in Titanic before things go wrong"
      },
      {
        "w": "With great power comes great responsibility",
        "d": "Uncle Ben's wisdom that defines every Spider-Man story"
      },
      {
        "w": "You shall not pass!",
        "d": "Gandalf's bridge stand against the Balrog in Fellowship"
      },
      {
        "w": "Hasta la vista, baby",
        "d": "T-800's sarcastic farewell before freezing his enemy in T2"
      },
      {
        "w": "Just when I thought I was out",
        "d": "Godfather III's weary Corleone pulled back into crime"
      },
      {
        "w": "They may take our lives",
        "d": "Braveheart's freedom speech that still raises goosebumps"
      },
      {
        "w": "I feel the need — the need for speed!",
        "d": "Top Gun's cockpit catchphrase between Maverick and Goose"
      },
      {
        "w": "It's not personal, it's strictly business",
        "d": "The Godfather's ice-cold justification for betrayal"
      },
      {
        "w": "Bond. James Bond.",
        "d": "The most iconic self-introduction in cinema history"
      },
      {
        "w": "Keep your friends close, but your enemies closer",
        "d": "Michael Corleone's ruthless strategic wisdom in Godfather II"
      },
      {
        "w": "I drink your milkshake!",
        "d": "Daniel Plainview's power-hungry metaphor in There Will Be Blood"
      },
      {
        "w": "Frankly, my dear, I don't give a damn",
        "d": "Rhett Butler's ice-cold exit line in Gone with the Wind"
      },
      {
        "w": "Get busy living, or get busy dying",
        "d": "Red's prison-break philosophy in The Shawshank Redemption"
      },
      {
        "w": "All those moments will be lost in time",
        "d": "Roy Batty's rain-soaked farewell speech in Blade Runner"
      },
      {
        "w": "You're gonna need a bigger boat",
        "d": "Chief Brody's stunned understatement when Jaws finally surfaces"
      }
    ]
  },
  {
    "name": "legendary video games",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Tetris",
        "d": "Falling-block puzzle game that colonised every device ever made"
      },
      {
        "w": "Minecraft",
        "d": "Block-building sandbox game played by hundreds of millions worldwide"
      },
      {
        "w": "Pac-Man",
        "d": "Yellow dot-muncher fleeing ghosts in a maze since 1980"
      },
      {
        "w": "Doom",
        "d": "First-person shooter that defined the genre and terrified parents"
      },
      {
        "w": "The Legend of Zelda",
        "d": "Epic adventure linking Link, Zelda, and Ganon across centuries"
      },
      {
        "w": "Pokémon",
        "d": "Catch-em-all franchise that became the world's biggest media IP"
      },
      {
        "w": "Grand Theft Auto",
        "d": "Open-world crime sandbox where anything and everything goes"
      },
      {
        "w": "Half-Life",
        "d": "Gordon Freeman's crowbar debut that revolutionised FPS storytelling"
      },
      {
        "w": "Portal",
        "d": "Puzzle game where you shoot holes in space to solve puzzles"
      },
      {
        "w": "The Sims",
        "d": "Life simulation where your little people live better than you do"
      },
      {
        "w": "Super Mario Bros.",
        "d": "Plumber's platforming debut that saved the video game industry"
      },
      {
        "w": "Street Fighter II",
        "d": "Arcade fighting classic that spawned a billion combo arguments"
      },
      {
        "w": "Sonic the Hedgehog",
        "d": "Sega's blue speed-demon who challenged Mario in the 90s"
      },
      {
        "w": "Space Invaders",
        "d": "Alien-blasting arcade game that invented the gaming industry"
      },
      {
        "w": "Diablo II",
        "d": "Dark hack-and-slash RPG whose loot loop enslaved a generation"
      },
      {
        "w": "World of Warcraft",
        "d": "Massive online RPG that consumed millions of real-world hours"
      },
      {
        "w": "Counter-Strike",
        "d": "Tactical shooter where one bullet ends your round brutally"
      },
      {
        "w": "Fortnite",
        "d": "Battle royale phenomenon with dance moves and celebrity collabs"
      },
      {
        "w": "Pong",
        "d": "Two paddles and a ball — the game that started everything"
      },
      {
        "w": "Halo",
        "d": "Master Chief's console debut that launched Xbox into orbit"
      },
      {
        "w": "Final Fantasy VII",
        "d": "JRPG with the most devastating plot twist in gaming history"
      },
      {
        "w": "Among Us",
        "d": "Social deduction game of trust and betrayal on a spaceship"
      },
      {
        "w": "Angry Birds",
        "d": "Slingshot puzzle game that hooked the entire smartphone era"
      },
      {
        "w": "Cyberpunk 2077",
        "d": "Neon-soaked dystopian RPG that had the most dramatic launch"
      },
      {
        "w": "The Witcher 3",
        "d": "Monster-hunting RPG with hundreds of hours of award-winning story"
      },
      {
        "w": "Dark Souls",
        "d": "Brutally hard action RPG that made dying a learning experience"
      },
      {
        "w": "Red Dead Redemption 2",
        "d": "Epic open-world Western with emotional depth and stunning horses"
      },
      {
        "w": "GTA V",
        "d": "Three-protagonist heist epic that became the best-selling game ever"
      },
      {
        "w": "Resident Evil",
        "d": "Survival horror series that defined jump scares and tank controls"
      },
      {
        "w": "Overwatch",
        "d": "Team-based hero shooter that launched a whole genre category"
      },
      {
        "w": "Skyrim",
        "d": "Dragon-slaying RPG still being ported to every device after 2011"
      },
      {
        "w": "Mario Kart",
        "d": "Kart racer where rubber bands and blue shells destroy friendships"
      },
      {
        "w": "Mortal Kombat",
        "d": "Gore-filled fighter whose fatalities scandalised Congress in 1993"
      },
      {
        "w": "Stardew Valley",
        "d": "Cosy farming RPG created entirely by one person over four years"
      },
      {
        "w": "Asteroids",
        "d": "Classic arcade shooter where you blast rocks hurtling through space"
      }
    ]
  },
  {
    "name": "world street food",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Taco",
        "d": "Mexican folded tortilla stuffed with meat, salsa, and joy"
      },
      {
        "w": "Kebab",
        "d": "Grilled meat on a skewer — from Istanbul to every city"
      },
      {
        "w": "Dim Sum",
        "d": "Hong Kong's bite-sized steamed dumplings served in bamboo baskets"
      },
      {
        "w": "Poutine",
        "d": "Canadian fries drowned in gravy and squeaky cheese curds"
      },
      {
        "w": "Pad Thai",
        "d": "Thailand's stir-fried noodle dish with peanuts and lime"
      },
      {
        "w": "Falafel",
        "d": "Crispy chickpea fritters stuffed into pita — Middle Eastern classic"
      },
      {
        "w": "Arepas",
        "d": "Colombian corn cakes split open and stuffed with fillings"
      },
      {
        "w": "Banh Mi",
        "d": "Vietnamese baguette fusing French colonialism with pickled daikon"
      },
      {
        "w": "Churros",
        "d": "Fried dough sticks dusted in sugar, dipped in chocolate"
      },
      {
        "w": "Takoyaki",
        "d": "Japanese octopus balls cooked in round moulds at street stalls"
      },
      {
        "w": "Samosa",
        "d": "Triangular fried pastry stuffed with spiced potato or meat"
      },
      {
        "w": "Empanada",
        "d": "Latin American stuffed pastry baked or fried to golden perfection"
      },
      {
        "w": "Pretzel",
        "d": "German twisted bread dusted with salt — beer's best friend"
      },
      {
        "w": "Shawarma",
        "d": "Slow-rotating spit meat wrapped in flatbread with garlic sauce"
      },
      {
        "w": "Crêpe",
        "d": "Paper-thin French pancake filled with sweet or savoury fillings"
      },
      {
        "w": "Jerk Chicken",
        "d": "Jamaican slow-smoked chicken blazing with scotch bonnet spice"
      },
      {
        "w": "Hotteok",
        "d": "Korean street pancake filled with brown sugar and cinnamon"
      },
      {
        "w": "Currywurst",
        "d": "Berlin's beloved sausage smothered in curried ketchup — iconic"
      },
      {
        "w": "Bunny Chow",
        "d": "South African curry served inside a hollowed-out loaf of bread"
      },
      {
        "w": "Roti Canai",
        "d": "Malaysian flaky flatbread torn and dipped in lentil curry"
      },
      {
        "w": "Gyoza",
        "d": "Japanese pan-fried dumplings with crispy bottoms and juicy centres"
      },
      {
        "w": "Pão de Queijo",
        "d": "Brazilian chewy cheese bread balls — addictive and gluten-free"
      },
      {
        "w": "Elote",
        "d": "Mexican grilled corn slathered in mayo, chilli, lime and cheese"
      },
      {
        "w": "Naan",
        "d": "Indian leavened flatbread blistered in a clay tandoor oven"
      },
      {
        "w": "Brigadeiro",
        "d": "Brazilian chocolate fudge truffle rolled in sprinkles — party staple"
      },
      {
        "w": "Bánh Xèo",
        "d": "Vietnamese sizzling crispy rice pancake stuffed with shrimp and pork"
      },
      {
        "w": "Chaat",
        "d": "Indian street snack of crispy, tangy, spicy layered flavours"
      },
      {
        "w": "Momo",
        "d": "Himalayan steamed dumpling beloved across Nepal, Tibet and India"
      },
      {
        "w": "Okonomiyaki",
        "d": "Japanese savoury pancake cooked tableside and loaded with toppings"
      },
      {
        "w": "Döner Kebab",
        "d": "Rotisserie meat shaved into flatbread — Germany's favourite late night"
      },
      {
        "w": "Gua Bao",
        "d": "Taiwanese fluffy steamed bun cradling slow-braised pork belly"
      },
      {
        "w": "Mandazi",
        "d": "East African coconut-spiced doughnut fried to golden perfection"
      },
      {
        "w": "Kibbeh",
        "d": "Lebanese fried bulgur and minced meat shells — street food gold"
      },
      {
        "w": "Siu Mai",
        "d": "Open-topped Cantonese pork and shrimp dumplings from dim sum"
      },
      {
        "w": "Corn Dog",
        "d": "Deep-fried hot dog on a stick wrapped in sweet cornbread batter"
      }
    ]
  },
  {
    "name": "billionaires & tech moguls",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Elon Musk",
        "d": "Tesla, SpaceX, X owner — world's most unpredictable tycoon"
      },
      {
        "w": "Jeff Bezos",
        "d": "Amazon founder who turned books into everything into space rockets"
      },
      {
        "w": "Steve Jobs",
        "d": "Apple visionary who made design the most important business strategy"
      },
      {
        "w": "Mark Zuckerberg",
        "d": "Facebook founder who connected the world and angered half of it"
      },
      {
        "w": "Bill Gates",
        "d": "Microsoft co-founder turned global health philanthropist"
      },
      {
        "w": "Warren Buffett",
        "d": "Omaha oracle who beat the market for 60 years buying boring stocks"
      },
      {
        "w": "Larry Page",
        "d": "Google co-founder who indexed the entire web from a dorm room"
      },
      {
        "w": "Jack Ma",
        "d": "Alibaba founder who built China's answer to Amazon from nothing"
      },
      {
        "w": "Jensen Huang",
        "d": "Nvidia CEO whose GPU chips power the entire AI revolution"
      },
      {
        "w": "Sam Altman",
        "d": "OpenAI CEO who put AI assistants in everyone's pocket"
      },
      {
        "w": "Sergey Brin",
        "d": "Google co-founder who turned internet search into a global empire"
      },
      {
        "w": "Tim Cook",
        "d": "Apple CEO who kept the company growing after Steve Jobs"
      },
      {
        "w": "Sundar Pichai",
        "d": "Google and Alphabet CEO who shaped the AI search era"
      },
      {
        "w": "Reed Hastings",
        "d": "Netflix co-founder who killed Blockbuster and redefined TV watching"
      },
      {
        "w": "Larry Ellison",
        "d": "Oracle founder and yacht racer — tech's most flamboyant billionaire"
      },
      {
        "w": "Travis Kalanick",
        "d": "Uber co-founder whose aggressive growth changed urban transport"
      },
      {
        "w": "Satya Nadella",
        "d": "Microsoft CEO who revived the company with cloud and AI bets"
      },
      {
        "w": "Peter Thiel",
        "d": "PayPal co-founder and contrarian investor who funded Facebook early"
      },
      {
        "w": "Reid Hoffman",
        "d": "LinkedIn founder and Silicon Valley's most connected networker"
      },
      {
        "w": "Oprah Winfrey",
        "d": "Media mogul whose book club endorsement creates instant bestsellers"
      },
      {
        "w": "Michael Bloomberg",
        "d": "Bloomberg empire founder who turned financial data into billions"
      },
      {
        "w": "Mukesh Ambani",
        "d": "Asia's richest man building India's largest telecom empire"
      },
      {
        "w": "Bernard Arnault",
        "d": "LVMH luxury empire builder — owns Louis Vuitton, Dior, Moët"
      },
      {
        "w": "Masayoshi Son",
        "d": "SoftBank founder whose Vision Fund made the biggest bets in tech"
      },
      {
        "w": "Patrick Collison",
        "d": "Stripe CEO who made online payments invisible and global"
      },
      {
        "w": "Marc Andreessen",
        "d": "Netscape pioneer turned top venture capitalist backing bold ideas"
      },
      {
        "w": "Evan Spiegel",
        "d": "Snapchat founder who pioneered disappearing messages and Stories"
      },
      {
        "w": "Brian Chesky",
        "d": "Airbnb co-founder who turned spare rooms into a travel empire"
      },
      {
        "w": "Zhang Yiming",
        "d": "ByteDance founder who unleashed TikTok on the entire world"
      },
      {
        "w": "Changpeng Zhao",
        "d": "Binance founder who became crypto's most powerful exchange boss"
      },
      {
        "w": "Whitney Wolfe Herd",
        "d": "Bumble founder who flipped online dating to women-make-first-move"
      },
      {
        "w": "Andrew Carnegie",
        "d": "Steel tycoon who gave away most of his fortune building libraries"
      },
      {
        "w": "Rockefeller",
        "d": "Standard Oil monopolist and first American billionaire in history"
      },
      {
        "w": "George Soros",
        "d": "Investor who broke the Bank of England in one legendary trade"
      },
      {
        "w": "Coco Chanel",
        "d": "Fashion mogul who liberated women's style and built a luxury empire"
      }
    ]
  },
  {
    "name": "iconic sports stars",
    "tags": {
      "a": "human",
      "b": "sport",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Michael Jordan",
        "d": "Six NBA titles, two three-peats — the GOAT debate starts here"
      },
      {
        "w": "Usain Bolt",
        "d": "Fastest human ever — 9.58 seconds changed what bodies can do"
      },
      {
        "w": "Pelé",
        "d": "Brazilian king of football who won three World Cups"
      },
      {
        "w": "Serena Williams",
        "d": "23 Grand Slams and a dominance that redefined women's tennis"
      },
      {
        "w": "Muhammad Ali",
        "d": "The Greatest — float like a butterfly, sting like a bee"
      },
      {
        "w": "Lionel Messi",
        "d": "Eight Ballon d'Or awards and a World Cup to complete the legend"
      },
      {
        "w": "Roger Federer",
        "d": "Tennis's elegant master — 20 Slams and never broke a racket"
      },
      {
        "w": "Michael Phelps",
        "d": "Most decorated Olympian ever with 23 gold medals in swimming"
      },
      {
        "w": "Wayne Gretzky",
        "d": "The Great One — hockey records no one will ever come close to"
      },
      {
        "w": "Tiger Woods",
        "d": "15 majors and a comeback from career-ending injury that stunned sport"
      },
      {
        "w": "Cristiano Ronaldo",
        "d": "Five Ballon d'Ors and a work ethic that is almost inhuman"
      },
      {
        "w": "Simone Biles",
        "d": "Greatest gymnast ever — invented moves that carry her name"
      },
      {
        "w": "LeBron James",
        "d": "King James — four titles, four teams, still competing past 40"
      },
      {
        "w": "Novak Djokovic",
        "d": "Most Grand Slam titles ever — mental steel as much as talent"
      },
      {
        "w": "Ayrton Senna",
        "d": "Formula One genius and eternal rain-master who died too soon"
      },
      {
        "w": "Jesse Owens",
        "d": "Four gold medals at 1936 Berlin Olympics humiliated Nazi ideology"
      },
      {
        "w": "Babe Ruth",
        "d": "Baseball's Sultan of Swat who invented the home run era"
      },
      {
        "w": "Diego Maradona",
        "d": "Hand of God, Goal of the Century — football's flawed genius"
      },
      {
        "w": "Steffi Graf",
        "d": "Only player to win all four Slams and an Olympic gold in one year"
      },
      {
        "w": "Kobe Bryant",
        "d": "Black Mamba — five titles, Mamba Mentality, unforgettable legacy"
      },
      {
        "w": "Carl Lewis",
        "d": "Nine Olympic golds in sprinting and long jump across three Games"
      },
      {
        "w": "Nadia Comaneci",
        "d": "First gymnast ever to score a perfect 10 at the Olympics"
      },
      {
        "w": "Mike Tyson",
        "d": "Youngest heavyweight champion ever — ferocious and unforgettable"
      },
      {
        "w": "Valentina Vezzali",
        "d": "Italy's six-time Olympic fencing champion, greatest ever"
      },
      {
        "w": "Ronaldo Nazário",
        "d": "Brazil's original Ronaldo — two World Cups, a genius striker"
      },
      {
        "w": "Floyd Mayweather",
        "d": "50-0 unbeaten record — boxing's defensive genius and showman"
      },
      {
        "w": "Jack Nicklaus",
        "d": "18 major titles — the Golden Bear nobody has yet surpassed"
      },
      {
        "w": "Martina Navratilova",
        "d": "18 Grand Slam singles titles and the most dominant serve-and-volley"
      },
      {
        "w": "Eliud Kipchoge",
        "d": "Marathon runner who first broke the two-hour barrier in history"
      },
      {
        "w": "Sebastian Vettel",
        "d": "Four consecutive F1 world championships with Red Bull Racing"
      },
      {
        "w": "Shaquille O'Neal",
        "d": "Unstoppable force in the paint — four NBA titles and Hollywood fame"
      },
      {
        "w": "Valentino Rossi",
        "d": "MotoGP's nine-time world champion who became motorsport royalty"
      },
      {
        "w": "Pita Taufatofua",
        "d": "Tonga's flag-bearing shirtless Olympian hero from three sports"
      },
      {
        "w": "Didier Drogba",
        "d": "Chelsea's clutch king — goals in finals that defy the pressure"
      },
      {
        "w": "Shane Warne",
        "d": "Cricket's spin wizard — Ball of the Century rewrote leg-spin history"
      }
    ]
  },
  {
    "name": "cult tv series",
    "tags": {
      "a": "human",
      "b": "tv",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Friends",
        "d": "Six New Yorkers on a sofa who defined a whole TV generation"
      },
      {
        "w": "Breaking Bad",
        "d": "Chemistry teacher becomes drug kingpin — prestige TV's gold standard"
      },
      {
        "w": "The Office",
        "d": "Mockumentary comedy that made awkward silence into art form"
      },
      {
        "w": "Stranger Things",
        "d": "80s nostalgia kids vs. monsters from the Upside Down"
      },
      {
        "w": "Game of Thrones",
        "d": "Dragons, betrayals, and weddings that traumatised millions"
      },
      {
        "w": "The Sopranos",
        "d": "Mob boss in therapy — the show that launched prestige TV"
      },
      {
        "w": "Seinfeld",
        "d": "Show about nothing that became comedy's defining moment"
      },
      {
        "w": "Black Mirror",
        "d": "Tech dystopia anthology — each episode a new nightmare scenario"
      },
      {
        "w": "Squid Game",
        "d": "Korean survival thriller that became Netflix's biggest global hit"
      },
      {
        "w": "The Simpsons",
        "d": "Springfield's yellow family still running — 35+ seasons of satire"
      },
      {
        "w": "The Wire",
        "d": "Baltimore crime drama so real it's taught in university courses"
      },
      {
        "w": "Lost",
        "d": "Plane crash survivors on a mysterious island full of secrets"
      },
      {
        "w": "Westworld",
        "d": "AI cowboys in a theme park awakening to their own consciousness"
      },
      {
        "w": "Twin Peaks",
        "d": "David Lynch's surreal murder mystery that broke television forever"
      },
      {
        "w": "Dexter",
        "d": "Serial killer who only murders murderers — morally complicated TV"
      },
      {
        "w": "Better Call Saul",
        "d": "Breaking Bad prequel that somehow matched its predecessor's brilliance"
      },
      {
        "w": "The Mandalorian",
        "d": "Space cowboy protects Baby Yoda in Disney's Star Wars universe"
      },
      {
        "w": "Sherlock",
        "d": "BBC modernisation of Holmes — Cumberbatch made deduction cool again"
      },
      {
        "w": "Fleabag",
        "d": "Phoebe Waller-Bridge's fourth-wall-breaking tour de force comedy"
      },
      {
        "w": "Chernobyl",
        "d": "HBO's haunting miniseries about the world's worst nuclear disaster"
      },
      {
        "w": "Succession",
        "d": "Media dynasty's children devour each other fighting for the throne"
      },
      {
        "w": "The Crown",
        "d": "Royal family's private dramas behind Buckingham Palace's walls"
      },
      {
        "w": "Peaky Blinders",
        "d": "Birmingham gang family navigates power in 1920s Britain"
      },
      {
        "w": "It's Always Sunny",
        "d": "Terrible people doing terrible things in a Philadelphia bar"
      },
      {
        "w": "Arrested Development",
        "d": "Dysfunctional wealthy family in the most layered sitcom ever made"
      },
      {
        "w": "Fargo",
        "d": "Coen Brothers-inspired dark comedy crime in America's frozen north"
      },
      {
        "w": "True Detective",
        "d": "McConaughey and Harrelson solving a Louisiana murder over years"
      },
      {
        "w": "Mr. Robot",
        "d": "Hacker drama so technically accurate it surprised real cybersecurity pros"
      },
      {
        "w": "Mindhunter",
        "d": "FBI agents interview serial killers to build criminal profiling science"
      },
      {
        "w": "The Boys",
        "d": "Superheroes as corrupt celebrities — the most satisfying satire on TV"
      },
      {
        "w": "Atlanta",
        "d": "Donald Glover's surreal portrait of music, race and ambition in Georgia"
      },
      {
        "w": "Dark",
        "d": "German time-travel thriller with the most complex family tree in TV"
      },
      {
        "w": "Ozark",
        "d": "Financial advisor launders cartel money in Missouri lake country"
      },
      {
        "w": "House of Cards",
        "d": "Ruthless politician claws his way to the White House through manipulation"
      },
      {
        "w": "The Haunting of Hill House",
        "d": "Family trauma horror where ghosts hide in plain sight throughout"
      }
    ]
  },
  {
    "name": "blockbuster franchises",
    "tags": {
      "a": "human",
      "b": "movies",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Harry Potter",
        "d": "Boy wizard's journey from cupboard under stairs to defeating Voldemort"
      },
      {
        "w": "Jurassic Park",
        "d": "Dinosaurs cloned from DNA in amber escape and eat everyone"
      },
      {
        "w": "James Bond",
        "d": "British spy with gadgets, martinis, and a licence to kill"
      },
      {
        "w": "The Matrix",
        "d": "Humanity is enslaved in a simulation — red pill reveals the truth"
      },
      {
        "w": "Indiana Jones",
        "d": "Archaeologist professor who punches Nazis and hates snakes"
      },
      {
        "w": "Back to the Future",
        "d": "DeLorean time machine requires 1.21 gigawatts to rewrite history"
      },
      {
        "w": "The Hunger Games",
        "d": "Teenagers forced to fight to the death for a dystopian government"
      },
      {
        "w": "Avatar",
        "d": "Blue alien world of Pandora — the highest-grossing films ever"
      },
      {
        "w": "Pirates of the Caribbean",
        "d": "Swashbuckling Depp as Jack Sparrow in sun-drenched sea adventures"
      },
      {
        "w": "Fast & Furious",
        "d": "Cars, family, and increasingly absurd physics-defying action"
      },
      {
        "w": "Marvel Cinematic Universe",
        "d": "Interconnected superhero epic that took over cinema for a decade"
      },
      {
        "w": "The Lord of the Rings",
        "d": "Epic fantasy trilogy that set the standard for blockbuster filmmaking"
      },
      {
        "w": "Star Wars",
        "d": "Galaxy-spanning saga about light vs dark that started in 1977"
      },
      {
        "w": "Transformers",
        "d": "Giant shape-shifting alien robots smashing Earth in loud CGI spectacles"
      },
      {
        "w": "Mission: Impossible",
        "d": "Ethan Hunt does one more impossible stunt per film, indefinitely"
      },
      {
        "w": "Toy Story",
        "d": "Pixar's toy world — friendship, loyalty, and existential dread for kids"
      },
      {
        "w": "The Hobbit",
        "d": "Bilbo's unexpected journey into dragon territory with thirteen dwarves"
      },
      {
        "w": "Shrek",
        "d": "Grumpy ogre dismantles fairy tales — Smash Mouth forever included"
      },
      {
        "w": "Batman",
        "d": "Brooding billionaire vigilante beating criminals in a rubber suit"
      },
      {
        "w": "Terminator",
        "d": "Robot assassin sent from future to kill the mother of humanity's saviour"
      },
      {
        "w": "Despicable Me",
        "d": "Supervillain adopts three orphan girls — minions steal the show"
      },
      {
        "w": "John Wick",
        "d": "Retired assassin avenges his dog — ballet of ballistic precision"
      },
      {
        "w": "Rocky",
        "d": "Underdog boxer goes the distance in Philadelphia — inspiring underdog epic"
      },
      {
        "w": "Alien",
        "d": "In space, no one can hear you scream — Xenomorph is cinema's best monster"
      },
      {
        "w": "Die Hard",
        "d": "Cop vs. terrorists in a skyscraper — the Christmas movie debate continues"
      },
      {
        "w": "Spider-Man",
        "d": "Teenage New Yorker with web-powers fights crime while juggling homework"
      },
      {
        "w": "The Dark Knight",
        "d": "Nolan's Batman trilogy peaked with Heath Ledger's defining Joker"
      },
      {
        "w": "Avengers",
        "d": "Earth's mightiest heroes assembled to stop Thanos snapping half of everything"
      },
      {
        "w": "Superman",
        "d": "Last son of Krypton — the original superhero who set the template"
      },
      {
        "w": "Ghostbusters",
        "d": "Scientists with proton packs busting Manhattan's paranormal threats"
      },
      {
        "w": "X-Men",
        "d": "Mutant superhero team fighting prejudice and world-ending threats"
      },
      {
        "w": "Planet of the Apes",
        "d": "Apes in charge, humans enslaved — sci-fi's most enduring franchise"
      },
      {
        "w": "Dune",
        "d": "Desert planet holds the universe's most valuable substance — spice"
      },
      {
        "w": "Top Gun",
        "d": "Fighter pilots, aviator shades, and volleyball — 80s cinema peak"
      },
      {
        "w": "Oppenheimer",
        "d": "The man who built the atomic bomb and instantly regretted it"
      }
    ]
  },
  {
    "name": "hit songs everyone knows",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Bohemian Rhapsody",
        "d": "Queen's six-minute operatic rock epic that defies every genre"
      },
      {
        "w": "Billie Jean",
        "d": "Michael Jackson's paranoid bass groove that launched the moonwalk"
      },
      {
        "w": "Smells Like Teen Spirit",
        "d": "Nirvana's anthemic explosion that buried the 80s overnight"
      },
      {
        "w": "Imagine",
        "d": "John Lennon's peaceful utopia request — pop music's greatest plea"
      },
      {
        "w": "Hotel California",
        "d": "Eagles' chilling rock epic about a place you can never leave"
      },
      {
        "w": "Thriller",
        "d": "MJ's zombie disco — the most iconic music video ever made"
      },
      {
        "w": "Yesterday",
        "d": "The Beatles' melancholic acoustic song most covered in history"
      },
      {
        "w": "Stairway to Heaven",
        "d": "Led Zeppelin's eight-minute journey from folk to hard rock peak"
      },
      {
        "w": "Shape of You",
        "d": "Ed Sheeran's tropical-pop hit that dominated streaming for months"
      },
      {
        "w": "Lose Yourself",
        "d": "Eminem's one-shot-don't-miss Oscar-winning rap from 8 Mile"
      },
      {
        "w": "Rolling in the Deep",
        "d": "Adele's scorched-earth breakup anthem that launched a career"
      },
      {
        "w": "Blinding Lights",
        "d": "The Weeknd's retro-synth earworm that topped charts forever"
      },
      {
        "w": "Like a Rolling Stone",
        "d": "Dylan's six-minute verbal takedown called greatest song ever written"
      },
      {
        "w": "Purple Rain",
        "d": "Prince's soaring guitar ballad — rock's most emotional solo ever"
      },
      {
        "w": "Born to Run",
        "d": "Springsteen's desperate highway escape anthem for the working class"
      },
      {
        "w": "Sweet Child O' Mine",
        "d": "Guns N' Roses opening riff that every guitarist tries to learn"
      },
      {
        "w": "Uptown Funk",
        "d": "Bruno Mars and Mark Ronson's funk revival that nobody could stop"
      },
      {
        "w": "Happy",
        "d": "Pharrell's relentlessly optimistic tune from Despicable Me"
      },
      {
        "w": "Someone Like You",
        "d": "Adele's devastating piano ballad about the one who got away"
      },
      {
        "w": "Old Town Road",
        "d": "Lil Nas X's country-rap blend that rewrote chart history"
      },
      {
        "w": "Baby One More Time",
        "d": "Britney's schoolgirl debut that launched a pop icon overnight"
      },
      {
        "w": "Africa",
        "d": "Toto's 80s anthem beloved again because the internet willed it"
      },
      {
        "w": "Mr. Brightside",
        "d": "The Killers' jealousy anthem that never left the UK charts"
      },
      {
        "w": "Dancing Queen",
        "d": "ABBA's euphoric disco floor-filler that crowns every party"
      },
      {
        "w": "Waterloo",
        "d": "ABBA's Eurovision-winning battle song that launched global stardom"
      },
      {
        "w": "Gangnam Style",
        "d": "PSY's Korean horse-dance hit that broke YouTube's view counter"
      },
      {
        "w": "One More Time",
        "d": "Daft Punk's endlessly uplifting dance anthem — celebrate, don't stop"
      },
      {
        "w": "Shallow",
        "d": "Lady Gaga and Bradley Cooper's raw duet that stunned the Oscars"
      },
      {
        "w": "Despacito",
        "d": "Luis Fonsi's reggaeton hit that became the most-streamed song ever"
      },
      {
        "w": "We Will Rock You",
        "d": "Queen's stomp-stomp-clap stadium anthem of collective power"
      },
      {
        "w": "Bad Guy",
        "d": "Billie Eilish's whispered bop that made dark pop mainstream"
      },
      {
        "w": "Shake It Off",
        "d": "Taylor Swift's carefree haters-gonna-hate pop perfection"
      },
      {
        "w": "YMCA",
        "d": "Village People's disco classic now synonymous with any crowd event"
      },
      {
        "w": "Hey Jude",
        "d": "The Beatles' na-na-na singalong that lasts over seven minutes"
      },
      {
        "w": "Born This Way",
        "d": "Lady Gaga's acceptance anthem that became an LGBTQ+ anthem"
      }
    ]
  },
  {
    "name": "world leaders everyone knows",
    "tags": {
      "a": "human",
      "b": "politics",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Napoleon",
        "d": "French emperor who conquered Europe and exiled himself twice"
      },
      {
        "w": "Cleopatra",
        "d": "Egypt's last pharaoh who allied with Caesar and Anthony"
      },
      {
        "w": "Churchill",
        "d": "Britain's wartime bulldog who refused to surrender to Hitler"
      },
      {
        "w": "Gandhi",
        "d": "India's nonviolent liberator who defeated an empire with a salt march"
      },
      {
        "w": "Mandela",
        "d": "South Africa's jailed activist who became president without bitterness"
      },
      {
        "w": "JFK",
        "d": "America's youngest president, Cold War navigator, assassinated in Dallas"
      },
      {
        "w": "Queen Elizabeth II",
        "d": "Britain's longest-reigning monarch — 70 years of quiet service"
      },
      {
        "w": "Caesar",
        "d": "Roman general-dictator whose assassination spawned a civil war"
      },
      {
        "w": "Merkel",
        "d": "Germany's steady chancellor who led Europe through multiple crises"
      },
      {
        "w": "Obama",
        "d": "First Black US president whose 2008 election moved the world"
      },
      {
        "w": "Lincoln",
        "d": "US president who ended slavery and was shot for it"
      },
      {
        "w": "Mao Zedong",
        "d": "Chinese Communist founder who remade the world's most populous country"
      },
      {
        "w": "Stalin",
        "d": "Soviet dictator whose industrialisation cost millions of lives"
      },
      {
        "w": "Hitler",
        "d": "Nazi leader whose genocidal ideology caused the deadliest war in history"
      },
      {
        "w": "Roosevelt",
        "d": "FDR — New Deal architect who led the US through Depression and WWII"
      },
      {
        "w": "Margaret Thatcher",
        "d": "Britain's Iron Lady who privatised industries and broke the unions"
      },
      {
        "w": "Alexander the Great",
        "d": "Macedonian king who built history's largest empire by age 30"
      },
      {
        "w": "Genghis Khan",
        "d": "Mongol conqueror who created the largest land empire ever"
      },
      {
        "w": "George Washington",
        "d": "America's first president who refused to become a king"
      },
      {
        "w": "Xi Jinping",
        "d": "China's president for life who reshaped global power dynamics"
      },
      {
        "w": "Putin",
        "d": "Russia's long-ruling strongman who launched a war on Europe's doorstep"
      },
      {
        "w": "Fidel Castro",
        "d": "Cuba's revolutionary leader who survived 638 CIA assassination attempts"
      },
      {
        "w": "De Gaulle",
        "d": "Free France's wartime leader who made Paris liberated and proud again"
      },
      {
        "w": "Atatürk",
        "d": "Turkey's founding father who modernised an empire into a republic"
      },
      {
        "w": "Nehru",
        "d": "India's first prime minister who guided a billion people to independence"
      },
      {
        "w": "Abraham Lincoln",
        "d": "Honest Abe — split rails and a fractured nation back together"
      },
      {
        "w": "Martin Luther King Jr.",
        "d": "Civil rights leader who dreamed of equality and was silenced for it"
      },
      {
        "w": "Simón Bolívar",
        "d": "South American liberator who freed six countries from Spanish rule"
      },
      {
        "w": "Benito Mussolini",
        "d": "Italian fascist dictator who allied with Hitler and died for it"
      },
      {
        "w": "Ho Chi Minh",
        "d": "Vietnamese independence leader who outlasted French and American armies"
      },
      {
        "w": "Indira Gandhi",
        "d": "India's iron-willed prime minister — first woman to lead the country"
      },
      {
        "w": "Julius Caesar",
        "d": "Et tu, Brute — betrayed and stabbed by his own Senate allies"
      },
      {
        "w": "Elizabeth I",
        "d": "England's Virgin Queen who defeated the Armada and defined an era"
      },
      {
        "w": "Lenin",
        "d": "Russian revolutionary who turned Marx's ideas into a global movement"
      },
      {
        "w": "Angela Davis",
        "d": "Civil rights activist and radical philosopher who changed American debate"
      }
    ]
  },
  {
    "name": "ancient wonders & landmarks",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Pyramids of Giza",
        "d": "Only ancient wonder still standing — built with breathtaking precision"
      },
      {
        "w": "Colosseum",
        "d": "Rome's 50,000-seat arena where gladiators fought to entertain crowds"
      },
      {
        "w": "Machu Picchu",
        "d": "Inca mountain citadel hidden in Peruvian Andes for centuries"
      },
      {
        "w": "Great Wall",
        "d": "China's 13,000-mile fortification — visible ambition, not from space"
      },
      {
        "w": "Parthenon",
        "d": "Athens' hilltop temple dedicated to goddess Athena, 2,400 years old"
      },
      {
        "w": "Stonehenge",
        "d": "Mysterious Neolithic stone circle on England's Salisbury Plain"
      },
      {
        "w": "Taj Mahal",
        "d": "White marble mausoleum built by emperor for his beloved wife"
      },
      {
        "w": "Petra",
        "d": "Jordan's rose-red city carved directly into sandstone cliffs"
      },
      {
        "w": "Angkor Wat",
        "d": "Cambodia's vast 12th-century Hindu temple — largest religious complex ever"
      },
      {
        "w": "Chichén Itzá",
        "d": "Mayan pyramid that marks equinox with a descending serpent shadow"
      },
      {
        "w": "Easter Island",
        "d": "Remote Pacific island whose 900 massive stone heads still mystify"
      },
      {
        "w": "Acropolis",
        "d": "Athens' rocky citadel topped by the Parthenon — birthplace of democracy"
      },
      {
        "w": "Hagia Sophia",
        "d": "Istanbul's great dome — once the world's largest cathedral for 1,000 years"
      },
      {
        "w": "Pompeii",
        "d": "Roman city frozen in time by Vesuvius's volcanic ash in 79 AD"
      },
      {
        "w": "Alhambra",
        "d": "Granada's stunning Moorish palace with intricate tilework and gardens"
      },
      {
        "w": "Colossus of Rhodes",
        "d": "Giant bronze sun-god statue once straddling Rhodes harbour entrance"
      },
      {
        "w": "Lighthouse of Alexandria",
        "d": "Ancient world's tallest man-made structure guiding ships for centuries"
      },
      {
        "w": "Borobudur",
        "d": "Indonesia's 9th-century Buddhist temple — world's largest Buddhist monument"
      },
      {
        "w": "Tikal",
        "d": "Guatemala's towering Mayan ruins rising from rainforest canopy"
      },
      {
        "w": "Persepolis",
        "d": "Persian Empire's ceremonial capital burned by Alexander the Great"
      },
      {
        "w": "Lascaux",
        "d": "French cave whose 17,000-year-old paintings are humanity's first gallery"
      },
      {
        "w": "Colossus of Nero",
        "d": "Massive Roman statue standing near the amphitheatre that took its name"
      },
      {
        "w": "Hanging Gardens",
        "d": "Legendary terraced Babylonian gardens — possibly the most mythologised wonder"
      },
      {
        "w": "Temple of Artemis",
        "d": "Ephesus's colossal Greek temple destroyed and rebuilt seven times"
      },
      {
        "w": "Mausoleum at Halicarnassus",
        "d": "Tomb so magnificent it gave us the word mausoleum"
      },
      {
        "w": "Abu Simbel",
        "d": "Colossal Egyptian temple carved from rock face by Ramesses II"
      },
      {
        "w": "Terracotta Army",
        "d": "8,000 life-sized clay soldiers buried with China's first emperor"
      },
      {
        "w": "Chartres Cathedral",
        "d": "French Gothic masterpiece with the finest medieval stained glass"
      },
      {
        "w": "Roman Forum",
        "d": "Ancient Rome's civic heart — ruins of the world's first superpower"
      },
      {
        "w": "Karnak Temple",
        "d": "Egypt's vast complex of temples built over 2,000 years by pharaohs"
      },
      {
        "w": "Mesa Verde",
        "d": "Cliff dwellings of ancestral Pueblo people in Colorado's canyon walls"
      },
      {
        "w": "Teotihuacan",
        "d": "Pre-Aztec pyramid city near Mexico City — mysterious builders unknown"
      },
      {
        "w": "Valley of the Kings",
        "d": "Egypt's royal burial ground hiding treasures including Tutankhamun's tomb"
      },
      {
        "w": "Sphinx",
        "d": "Colossal limestone guardian at Giza — nose missing, origins debated"
      },
      {
        "w": "Olympia",
        "d": "Site of ancient Greece's Olympic Games and Zeus's giant statue"
      }
    ]
  },
  {
    "name": "disney & pixar characters",
    "tags": {
      "a": "human",
      "b": "movies",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Simba",
        "d": "Lion King who must reclaim his throne after his father's murder"
      },
      {
        "w": "Buzz Lightyear",
        "d": "Space ranger toy convinced he's a real hero — until he isn't"
      },
      {
        "w": "Elsa",
        "d": "Ice queen who builds a frozen castle and finally lets it go"
      },
      {
        "w": "Nemo",
        "d": "Little clownfish lost in the ocean — his father swims the entire Pacific"
      },
      {
        "w": "Woody",
        "d": "Cowboy toy who fears being replaced — loyalty is his superpower"
      },
      {
        "w": "Wall-E",
        "d": "Lonely trash-compacting robot who saves humanity with a plant"
      },
      {
        "w": "Moana",
        "d": "Polynesian chief's daughter who sails beyond the reef to save her island"
      },
      {
        "w": "Aladdin",
        "d": "Street thief from Agrabah who finds a lamp and wishes big"
      },
      {
        "w": "Mulan",
        "d": "Chinese girl who joins the army disguised as a man to save her father"
      },
      {
        "w": "Remy",
        "d": "Rat with a culinary genius who controls a chef from inside his hat"
      },
      {
        "w": "Stitch",
        "d": "Alien experiment 626 who finds family means nobody gets left behind"
      },
      {
        "w": "Genie",
        "d": "Phenomenal cosmic powers, itty-bitty living space — Robin Williams magic"
      },
      {
        "w": "Rapunzel",
        "d": "Tower-imprisoned princess with magical 70-foot hair as her escape rope"
      },
      {
        "w": "Merida",
        "d": "Scottish princess who refuses to marry and accidentally turns mum into a bear"
      },
      {
        "w": "Incredibles",
        "d": "Superhero family with powers that match each member's personality"
      },
      {
        "w": "Dory",
        "d": "Blue tang fish with short-term memory loss who keeps just swimming"
      },
      {
        "w": "Coco",
        "d": "Miguel crosses to the Land of the Dead to find his musical great-great-grandfather"
      },
      {
        "w": "Baymax",
        "d": "Inflatable healthcare robot from San Fransokyo who gives the best hugs"
      },
      {
        "w": "Olaf",
        "d": "Snowman who dreams of summer — warm hugs and blissful ignorance"
      },
      {
        "w": "Scar",
        "d": "Lion King's scheming uncle who sings villain songs before committing regicide"
      },
      {
        "w": "Ursula",
        "d": "Sea witch who takes Ariel's voice in exchange for legs — bad deal"
      },
      {
        "w": "Gaston",
        "d": "Narcissistic hunter who eats five dozen eggs and despises books"
      },
      {
        "w": "Hades",
        "d": "Underworld's fast-talking blue-flame corporate villain in Hercules"
      },
      {
        "w": "Yzma",
        "d": "Prehistoric megalomaniac whose plan goes wrong when Kuzco becomes a llama"
      },
      {
        "w": "Joy",
        "d": "Inside Out's yellow emotion trying to keep everything glowing perfectly"
      },
      {
        "w": "Miguel",
        "d": "Aspiring musician who enters the Land of the Dead on Día de Muertos"
      },
      {
        "w": "Maleficent",
        "d": "Dark fairy who curses Sleeping Beauty with a spinning-wheel death"
      },
      {
        "w": "Pinocchio",
        "d": "Wooden puppet whose nose grows with every lie he tells"
      },
      {
        "w": "Dumbo",
        "d": "Baby elephant mocked for giant ears — turns out they let him fly"
      },
      {
        "w": "Bambi",
        "d": "Fawn whose mother's death traumatised an entire generation of children"
      },
      {
        "w": "Tinker Bell",
        "d": "Peter Pan's jealous fairy sidekick who leaves pixie dust wherever she flies"
      },
      {
        "w": "Lady",
        "d": "American cocker spaniel sharing a spaghetti dinner with the Tramp"
      },
      {
        "w": "Flounder",
        "d": "Ariel's nervous yellow fish best friend who braves every danger for her"
      },
      {
        "w": "Bing Bong",
        "d": "Riley's imaginary friend in Inside Out — the saddest goodbye in animation"
      },
      {
        "w": "Rex",
        "d": "Toy Story's anxious T-Rex who worries his arms are too short"
      }
    ]
  },
  {
    "name": "extreme sports & stunts",
    "tags": {
      "a": "human",
      "b": "adventure",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Skydiving",
        "d": "Leaping from aircraft and freefalling before deploying a parachute"
      },
      {
        "w": "BMX",
        "d": "Bicycle motocross — tricks, ramps, and aerial acrobatics on two wheels"
      },
      {
        "w": "Parkour",
        "d": "Urban freerunning — treating the city as an obstacle course"
      },
      {
        "w": "Bungee jumping",
        "d": "Leaping from great heights tied to an elastic cord — pure freefall"
      },
      {
        "w": "Surfing",
        "d": "Riding ocean waves on a board — the original extreme sport"
      },
      {
        "w": "Skateboarding",
        "d": "Street and ramp tricks on a plank — now an Olympic sport"
      },
      {
        "w": "Snowboarding",
        "d": "Descending mountains on one wide board — cooler sibling of skiing"
      },
      {
        "w": "Base jumping",
        "d": "Parachuting from fixed structures — Buildings, Antennae, Spans, Earth"
      },
      {
        "w": "Motocross",
        "d": "Off-road motorcycle racing over dirt jumps and rough terrain"
      },
      {
        "w": "Wingsuit",
        "d": "Flying in a squirrel suit through mountains — closest thing to being a bird"
      },
      {
        "w": "Free solo climbing",
        "d": "Scaling vertical rock walls with no ropes — one mistake means death"
      },
      {
        "w": "Cave diving",
        "d": "Scuba diving in underwater cave systems where exits are not guaranteed"
      },
      {
        "w": "Cliff diving",
        "d": "Jumping from towering cliffs into water — judged on entry perfection"
      },
      {
        "w": "Kitesurfing",
        "d": "Riding waves powered by a giant kite — speed meets surfing"
      },
      {
        "w": "Slacklining",
        "d": "Balancing and walking on a flat webbing stretched between two points"
      },
      {
        "w": "Street luge",
        "d": "Lying on a flat board and hurtling down paved roads at terrifying speed"
      },
      {
        "w": "Freediving",
        "d": "Diving deep on a single breath — no tanks, pure human lung capacity"
      },
      {
        "w": "Mountain biking",
        "d": "Descending rocky trails on a bicycle at speeds that defy sense"
      },
      {
        "w": "Ice climbing",
        "d": "Scaling frozen waterfalls using axes and crampons in freezing cold"
      },
      {
        "w": "Zorbing",
        "d": "Rolling downhill inside a giant transparent inflatable ball"
      },
      {
        "w": "Paragliding",
        "d": "Soaring silently on thermal air currents with a canopy wing"
      },
      {
        "w": "Highlining",
        "d": "Walking a slackline hundreds of metres above the ground — no net"
      },
      {
        "w": "Whitewater kayaking",
        "d": "Paddling a small kayak through violent river rapids and waterfalls"
      },
      {
        "w": "Speed flying",
        "d": "Hybrid of paragliding and skiing — swooping at high speed over slopes"
      },
      {
        "w": "Volcano boarding",
        "d": "Riding a plank down an active volcano's ash slopes at terrifying speed"
      },
      {
        "w": "Ski jumping",
        "d": "Launching off a ramp at 90 km/h and flying through thin mountain air"
      },
      {
        "w": "Downhill skiing",
        "d": "Racing down steep mountain courses at over 140 km/h"
      },
      {
        "w": "Big wave surfing",
        "d": "Towing into 20-metre waves that would swallow houses whole"
      },
      {
        "w": "Rope swinging",
        "d": "Leaping off a cliff attached to a rope for a massive pendulum swing"
      },
      {
        "w": "Dirt biking",
        "d": "Off-road motorcycle riding through mud, jumps and tight forest trails"
      },
      {
        "w": "Bull riding",
        "d": "Staying on a bucking 900-pound bull for eight seconds — rodeo king"
      },
      {
        "w": "Kite surfing",
        "d": "Using wind-powered kite to propel a board across water at high speed"
      },
      {
        "w": "Bobsledding",
        "d": "Teams hurtling down icy tracks in a metal sled at 150 km/h"
      },
      {
        "w": "Ultramarathon",
        "d": "Running anything beyond 42 km — often through deserts or mountains"
      },
      {
        "w": "Wakeboarding",
        "d": "Riding a small board towed behind a motorboat, performing aerial tricks"
      }
    ]
  },
  {
    "name": "world currencies",
    "tags": {
      "a": "human",
      "b": "geography",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Dollar",
        "d": "World's reserve currency — backed by the US economy and military"
      },
      {
        "w": "Euro",
        "d": "Shared currency of 20 European Union nations since 1999"
      },
      {
        "w": "Yen",
        "d": "Japan's currency, symbol ¥ — known for its very small denominations"
      },
      {
        "w": "Pound",
        "d": "British sterling — one of the world's oldest currencies still in use"
      },
      {
        "w": "Rupee",
        "d": "Currency of India and several South Asian neighbours"
      },
      {
        "w": "Yuan",
        "d": "China's renminbi unit — rising in global trade importance"
      },
      {
        "w": "Franc",
        "d": "Swiss currency known for stability — also used in several African nations"
      },
      {
        "w": "Real",
        "d": "Brazil's currency since 1994 — stabilised a hyperinflationary economy"
      },
      {
        "w": "Won",
        "d": "South Korean currency powering Asia's fourth-largest economy"
      },
      {
        "w": "Peso",
        "d": "Currency used across eight Latin American countries"
      },
      {
        "w": "Ruble",
        "d": "Russia's currency, battered by sanctions since the Ukraine invasion"
      },
      {
        "w": "Krona",
        "d": "Scandinavian currency shared by Sweden, Norway, and Denmark"
      },
      {
        "w": "Dirham",
        "d": "UAE's stable currency — pegged to the dollar since 1997"
      },
      {
        "w": "Shekel",
        "d": "Israel's currency — ancient name revived for the modern state"
      },
      {
        "w": "Lira",
        "d": "Turkey's currency that lost massive value through inflation crises"
      },
      {
        "w": "Ringgit",
        "d": "Malaysia's currency — literally means jagged in Malay"
      },
      {
        "w": "Baht",
        "d": "Thailand's currency — named after a traditional unit of gold weight"
      },
      {
        "w": "Rand",
        "d": "South Africa's currency named after the Witwatersrand gold-bearing ridge"
      },
      {
        "w": "Dinar",
        "d": "Currency of several Middle Eastern and North African nations"
      },
      {
        "w": "Zloty",
        "d": "Poland's currency — literally means golden in Polish"
      },
      {
        "w": "Forint",
        "d": "Hungary's currency — one of the oldest currencies still in use"
      },
      {
        "w": "Naira",
        "d": "Nigeria's currency — powers Africa's largest economy"
      },
      {
        "w": "Hryvnia",
        "d": "Ukraine's currency — symbol of national identity through war"
      },
      {
        "w": "Tenge",
        "d": "Kazakhstan's currency introduced after Soviet Union dissolution"
      },
      {
        "w": "Bitcoin",
        "d": "First cryptocurrency — decentralised digital gold for the internet age"
      },
      {
        "w": "Ethereum",
        "d": "Crypto platform whose Ether coin powers smart contracts and NFTs"
      },
      {
        "w": "Afghani",
        "d": "Afghanistan's currency — one of the world's lowest-valued coins"
      },
      {
        "w": "Krone",
        "d": "Denmark's currency — kept separate from the Euro by national pride"
      },
      {
        "w": "Dong",
        "d": "Vietnam's currency — 25,000 dong buys roughly one US dollar"
      },
      {
        "w": "Peso Colombiano",
        "d": "Colombia's currency used across coffee farms and cities alike"
      },
      {
        "w": "Rial",
        "d": "Iranian currency heavily devalued by decades of international sanctions"
      },
      {
        "w": "Kwanza",
        "d": "Angola's oil-rich currency named after the Kwanza river"
      },
      {
        "w": "Leke",
        "d": "Albania's currency — named after Alexander the Great"
      },
      {
        "w": "Cedi",
        "d": "Ghana's currency — the gold-rich west African nation's unit"
      },
      {
        "w": "Metical",
        "d": "Mozambique's currency — named after the Arabic word for weight"
      }
    ]
  },
  {
    "name": "musical instruments",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Guitar",
        "d": "Six-stringed instrument powering rock, blues, folk, and flamenco"
      },
      {
        "w": "Piano",
        "d": "88 keys, 10 fingers, infinite possibilities — the ultimate solo instrument"
      },
      {
        "w": "Violin",
        "d": "Bowed string instrument at the heart of orchestras and folk music"
      },
      {
        "w": "Drums",
        "d": "Percussion kit that is every band's heartbeat and timekeeper"
      },
      {
        "w": "Saxophone",
        "d": "Invented in 1840 — the instrument that defined jazz sound"
      },
      {
        "w": "Trumpet",
        "d": "Brass instrument that leads jazz bands and heralds royalty"
      },
      {
        "w": "Cello",
        "d": "Deep-voiced string instrument that sounds closest to the human voice"
      },
      {
        "w": "Flute",
        "d": "Woodwind instrument played sideways — among the world's oldest"
      },
      {
        "w": "Harp",
        "d": "47-string instrument plucked in orchestras and Celtic traditions"
      },
      {
        "w": "Accordion",
        "d": "Bellows-driven keyboard instrument squeezed into polka and tango"
      },
      {
        "w": "Ukulele",
        "d": "Four-stringed Hawaiian mini-guitar — happiness in your hands"
      },
      {
        "w": "Banjo",
        "d": "Five-stringed American instrument of bluegrass and folk tradition"
      },
      {
        "w": "Tuba",
        "d": "Largest brass instrument — the orchestra's bellowing bass voice"
      },
      {
        "w": "Sitar",
        "d": "Long-necked Indian plucked instrument central to classical ragas"
      },
      {
        "w": "Bagpipes",
        "d": "Scottish wind instrument where an air bag keeps notes continuous"
      },
      {
        "w": "Didgeridoo",
        "d": "Aboriginal Australian instrument producing circular-breathed drones"
      },
      {
        "w": "Harpsichord",
        "d": "Pre-piano keyboard where strings are plucked not struck — Baroque sound"
      },
      {
        "w": "Oboe",
        "d": "Double-reed woodwind instrument that tunes the orchestra before concerts"
      },
      {
        "w": "Mandolin",
        "d": "Eight-stringed plucked instrument central to Italian and bluegrass music"
      },
      {
        "w": "Theremin",
        "d": "Eerie electronic instrument played without touching — pure air movement"
      },
      {
        "w": "Bassoon",
        "d": "Deep double-reed woodwind instrument — the orchestra's grumbling uncle"
      },
      {
        "w": "Trombone",
        "d": "Slide-operated brass instrument that can sound mournful or comedic"
      },
      {
        "w": "Marimba",
        "d": "Wooden xylophone-like instrument with resonators creating warm tones"
      },
      {
        "w": "Synthesizer",
        "d": "Electronic keyboard instrument that can sound like anything at all"
      },
      {
        "w": "Tabla",
        "d": "Pair of Indian hand drums central to Hindustani classical music"
      },
      {
        "w": "French Horn",
        "d": "Coiled brass instrument producing rich rounded harmonics in orchestras"
      },
      {
        "w": "Xylophone",
        "d": "Percussion instrument with wooden bars struck by mallets"
      },
      {
        "w": "Clarinet",
        "d": "Single-reed woodwind with a warm range from sultry low to bright high"
      },
      {
        "w": "Bass Guitar",
        "d": "Low-frequency string instrument that locks groove with the drum kit"
      },
      {
        "w": "Harmonica",
        "d": "Pocket-sized wind instrument blown and sucked for blues soul"
      },
      {
        "w": "Viola",
        "d": "Middle-voiced string instrument — larger than violin, deeper and mellower"
      },
      {
        "w": "Koto",
        "d": "Japan's 13-stringed zither — the national instrument of classical tradition"
      },
      {
        "w": "Pan Flute",
        "d": "Ancient instrument of multiple pipes — evokes Andean mountains"
      },
      {
        "w": "Double Bass",
        "d": "Towering bowed string instrument anchoring orchestras and jazz quartets"
      },
      {
        "w": "Bouzouki",
        "d": "Greek long-neck lute central to rebetiko music and Zorba dancing"
      }
    ]
  },
  {
    "name": "social media platforms",
    "tags": {
      "a": "human",
      "b": "tech",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Instagram",
        "d": "Photo and Reels platform where aesthetics drive massive follower counts"
      },
      {
        "w": "TikTok",
        "d": "Short video platform that rewired attention spans worldwide"
      },
      {
        "w": "X",
        "d": "Formerly Twitter — microblogging site renamed by Elon Musk in 2023"
      },
      {
        "w": "YouTube",
        "d": "Video giant where creators build careers with one camera and passion"
      },
      {
        "w": "Snapchat",
        "d": "Disappearing messages and Stories — invented a format copied everywhere"
      },
      {
        "w": "Reddit",
        "d": "Forum of forums — every niche topic has a subreddit community"
      },
      {
        "w": "LinkedIn",
        "d": "Professional networking platform where everyone is open to opportunities"
      },
      {
        "w": "Pinterest",
        "d": "Visual inspiration board platform loved by designers and planners"
      },
      {
        "w": "WhatsApp",
        "d": "Encrypted messaging app owned by Meta — 2 billion users globally"
      },
      {
        "w": "Telegram",
        "d": "Cloud-based messaging app with massive group and channel features"
      },
      {
        "w": "Facebook",
        "d": "Original social network — still 3 billion users, mostly older adults"
      },
      {
        "w": "Threads",
        "d": "Meta's Twitter rival built on Instagram accounts — launched 2023"
      },
      {
        "w": "BeReal",
        "d": "Two-minute window to post an authentic front-and-back camera photo"
      },
      {
        "w": "Discord",
        "d": "Gaming-born chat platform now home to communities about everything"
      },
      {
        "w": "Twitch",
        "d": "Live streaming platform where gamers built entertainment empires"
      },
      {
        "w": "Mastodon",
        "d": "Decentralised Twitter alternative running on open-source protocol"
      },
      {
        "w": "Tumblr",
        "d": "Reblog-based blogging platform — fandom culture's original home"
      },
      {
        "w": "Clubhouse",
        "d": "Audio-only social network that peaked in 2021 then nearly vanished"
      },
      {
        "w": "Bluesky",
        "d": "Decentralised Twitter rival built on the AT Protocol by Jack Dorsey"
      },
      {
        "w": "WeChat",
        "d": "China's super-app — chat, payments, news, and shopping in one"
      },
      {
        "w": "Weibo",
        "d": "China's Twitter-like microblogging platform with hundreds of millions active"
      },
      {
        "w": "MySpace",
        "d": "First mainstream social network — everyone customised their profile song"
      },
      {
        "w": "Vine",
        "d": "Six-second video loop app that launched a generation of comedians"
      },
      {
        "w": "Google+",
        "d": "Google's social network attempt that nobody really used"
      },
      {
        "w": "Substack",
        "d": "Newsletter platform where writers monetise directly from subscribers"
      },
      {
        "w": "Patreon",
        "d": "Creator subscription platform letting fans support artists directly"
      },
      {
        "w": "Lemon8",
        "d": "ByteDance's Instagram-Pinterest hybrid targeting lifestyle content"
      },
      {
        "w": "Quora",
        "d": "Q&A platform where experts and curious minds share knowledge"
      },
      {
        "w": "Nextdoor",
        "d": "Neighbourhood social network for hyper-local community updates"
      },
      {
        "w": "Vero",
        "d": "Subscription-based chronological social app marketed as ad-free"
      },
      {
        "w": "Kick",
        "d": "Live streaming rival to Twitch with more permissive content rules"
      },
      {
        "w": "Letterboxd",
        "d": "Film diary and review community — Goodreads but for movie lovers"
      },
      {
        "w": "Goodreads",
        "d": "Book tracking and review platform connecting 150 million readers"
      },
      {
        "w": "Flickr",
        "d": "Photo sharing community beloved by photographers before Instagram"
      },
      {
        "w": "Foursquare",
        "d": "Location check-in app that pioneered the concept of gamified places"
      }
    ]
  },
  {
    "name": "car brands everyone knows",
    "tags": {
      "a": "human",
      "b": "biz",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Ferrari",
        "d": "Italian sports car brand — prancing horse, screaming engine, obscene prices"
      },
      {
        "w": "Toyota",
        "d": "World's bestselling car brand — reliability so good it's almost boring"
      },
      {
        "w": "BMW",
        "d": "Bavarian luxury cars — the ultimate driving machine, as they insist"
      },
      {
        "w": "Tesla",
        "d": "Electric car brand that made EVs desirable and disrupted everything"
      },
      {
        "w": "Mercedes",
        "d": "German luxury pioneer — three-pointed star of automotive prestige"
      },
      {
        "w": "Porsche",
        "d": "Sports car brand where the iconic 911 never goes out of style"
      },
      {
        "w": "Lamborghini",
        "d": "Italian supercar with scissor doors named after fighting bulls"
      },
      {
        "w": "Audi",
        "d": "German brand whose four interlocking rings signal premium craftsmanship"
      },
      {
        "w": "Ford",
        "d": "American giant that invented the assembly line and the Model T"
      },
      {
        "w": "Rolls-Royce",
        "d": "British ultra-luxury brand — the quietest cars money can buy"
      },
      {
        "w": "Honda",
        "d": "Japanese brand famous for reliability and the most-stolen Civic"
      },
      {
        "w": "Volkswagen",
        "d": "People's Car — Beetle, Golf, and the emissions scandal of 2015"
      },
      {
        "w": "Chevrolet",
        "d": "American brand behind the Corvette, Camaro, and heartland trucks"
      },
      {
        "w": "Jeep",
        "d": "Off-road American icon — from WWII battlefields to suburban school runs"
      },
      {
        "w": "Bugatti",
        "d": "French hypercar brand — Veyron and Chiron are engineering extremes"
      },
      {
        "w": "Nissan",
        "d": "Japanese brand behind the legendary GT-R supercar and the Leaf EV"
      },
      {
        "w": "Hyundai",
        "d": "South Korean brand that shocked Europe with quality and value"
      },
      {
        "w": "Volvo",
        "d": "Swedish brand that invented the three-point seatbelt and saved millions"
      },
      {
        "w": "Bentley",
        "d": "British grand tourer — handcrafted luxury from Crewe since 1919"
      },
      {
        "w": "Subaru",
        "d": "Japanese brand whose all-wheel drive dominates rally stages and suburbs"
      },
      {
        "w": "Maserati",
        "d": "Italian sports brand — the trident of exotic performance and drama"
      },
      {
        "w": "Peugeot",
        "d": "French brand whose lion logo roamed Europe's roads for over a century"
      },
      {
        "w": "Renault",
        "d": "French brand behind the iconic Renault 4 and F1 championships"
      },
      {
        "w": "Kia",
        "d": "South Korean brand that shocked luxury rivals with bold design"
      },
      {
        "w": "Cadillac",
        "d": "American luxury icon — tailfins, Eldorado, and the presidential limousine"
      },
      {
        "w": "Aston Martin",
        "d": "British grand tourer — James Bond's preferred car since 1964"
      },
      {
        "w": "McLaren",
        "d": "British F1-derived supercar brand with carbon fibre and wild aero"
      },
      {
        "w": "Alfa Romeo",
        "d": "Italian brand whose heart races faster than the cars' reliability"
      },
      {
        "w": "Land Rover",
        "d": "British off-roader — from African safaris to Chelsea school runs"
      },
      {
        "w": "Mazda",
        "d": "Japanese brand with the Wankel-powered RX-7 and perfect Miata"
      },
      {
        "w": "Dodge",
        "d": "American muscle brand — Charger and Challenger roar from the 1960s"
      },
      {
        "w": "Citroën",
        "d": "French brand whose hydropneumatic suspension floated like a magic carpet"
      },
      {
        "w": "MINI",
        "d": "British-German icon — reinvented a 1960s classic for modern city streets"
      },
      {
        "w": "Fiat",
        "d": "Italian small-car brand whose 500 is the most fashionable city car"
      },
      {
        "w": "Mitsubishi",
        "d": "Japanese brand behind the legendary Lancer Evolution rally weapon"
      }
    ]
  },
  {
    "name": "famous detectives (fiction)",
    "tags": {
      "a": "human",
      "b": "books",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Sherlock Holmes",
        "d": "Baker Street's deductive genius who turned observation into a superpower"
      },
      {
        "w": "Hercule Poirot",
        "d": "Agatha Christie's meticulous Belgian detective with impeccable moustaches"
      },
      {
        "w": "Miss Marple",
        "d": "Elderly English village lady whose sweet appearance hides razor wit"
      },
      {
        "w": "Columbo",
        "d": "Rumpled LA detective whose just-one-more-thing unravels every alibi"
      },
      {
        "w": "Nancy Drew",
        "d": "Teenage amateur detective who solved mysteries long before it was cool"
      },
      {
        "w": "Jessica Fletcher",
        "d": "Murder She Wrote's mystery author who finds bodies in every town she visits"
      },
      {
        "w": "Clouseau",
        "d": "Bumbling Inspector whose accidental brilliance solves every case"
      },
      {
        "w": "Sam Spade",
        "d": "Hard-boiled Maltese Falcon PI who invented the noir detective template"
      },
      {
        "w": "Philip Marlowe",
        "d": "Raymond Chandler's wisecracking LA private eye in fedora and trench coat"
      },
      {
        "w": "Monk",
        "d": "OCD detective whose encyclopaedic attention to detail spots what everyone misses"
      },
      {
        "w": "Magnum P.I.",
        "d": "Hawaiian Ferrari-driving ex-Navy PI with a magnificent moustache"
      },
      {
        "w": "Veronica Mars",
        "d": "Teen California detective solving dark secrets in a class-divided town"
      },
      {
        "w": "Barnaby",
        "d": "Midsomer Murders detective whose peaceful English county hides shocking murder rates"
      },
      {
        "w": "Kinsey Millhone",
        "d": "Sue Grafton's tough California PI working the alphabet one crime at a time"
      },
      {
        "w": "Morse",
        "d": "Oxford crossword-loving inspector who prefers beer and Wagner to procedure"
      },
      {
        "w": "Benoit Blanc",
        "d": "Daniel Craig's Southern drawl detective unravelling whodunit ensemble mysteries"
      },
      {
        "w": "Adrian Monk",
        "d": "Phobia-riddled San Francisco consultant detective — same person as Monk"
      },
      {
        "w": "Harriet Vane",
        "d": "Dorothy Sayers' mystery writer who becomes Lord Peter Wimsey's partner"
      },
      {
        "w": "Lisbeth Salander",
        "d": "Millennium trilogy's tattooed hacker vigilante with a photographic memory"
      },
      {
        "w": "Endeavour",
        "d": "Young Inspector Morse navigating 1960s Oxford murder and snobbery"
      },
      {
        "w": "Easy Rawlins",
        "d": "Walter Mosley's Black LA detective navigating racism alongside murder"
      },
      {
        "w": "Vera",
        "d": "ITV's frumpy Northumberland detective hiding brilliant instincts under a mac"
      },
      {
        "w": "Wallander",
        "d": "Brooding Swedish inspector dealing with violence in idyllic small-town Sweden"
      },
      {
        "w": "Lord Peter Wimsey",
        "d": "Dorothy Sayers' aristocratic amateur detective with impeccable taste"
      },
      {
        "w": "Tintin",
        "d": "Belgian boy reporter solving global conspiracies with a loyal white terrier"
      },
      {
        "w": "Batman",
        "d": "DC's Dark Knight detective — the World's Greatest Detective according to himself"
      },
      {
        "w": "Ellery Queen",
        "d": "Golden Age detective and novelist — the character who wrote his own stories"
      },
      {
        "w": "Cam Jansen",
        "d": "Children's mystery series heroine with a photographic memory camera click"
      },
      {
        "w": "Kay Scarpetta",
        "d": "Patricia Cornwell's forensic pathologist whose autopsies crack every case"
      },
      {
        "w": "Jack Reacher",
        "d": "Lee Child's drifting ex-military cop who straightens problems with his fists"
      },
      {
        "w": "Precious Ramotswe",
        "d": "Botswana's No.1 Ladies' Detective Agency founder — gentle but sharp"
      },
      {
        "w": "Robbie Coltrane",
        "d": "Cracker's Fitz — Scottish criminal psychologist profiling killers with whisky"
      },
      {
        "w": "DCI Hunt",
        "d": "Life on Mars's seventies no-nonsense detective who punches first, asks never"
      },
      {
        "w": "Phryne Fisher",
        "d": "Glamorous 1920s Melbourne detective who solves crimes in haute couture"
      },
      {
        "w": "Harry Hole",
        "d": "Jo Nesbø's self-destructive Oslo detective hunting Norway's most dangerous killers"
      }
    ]
  },
  {
    "name": "world capitals everyone knows",
    "tags": {
      "a": "human",
      "b": "geo",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Paris",
        "d": "City of Light — Eiffel Tower, croissants, and eternal romance"
      },
      {
        "w": "Tokyo",
        "d": "Japan's neon megacity — world's most populated metropolitan area"
      },
      {
        "w": "London",
        "d": "British capital of Big Ben, royals, red buses, and rainy genius"
      },
      {
        "w": "Washington D.C.",
        "d": "US capital planned on a grid with the White House at its heart"
      },
      {
        "w": "Moscow",
        "d": "Russia's Red Square capital — cold winters and warm propaganda"
      },
      {
        "w": "Beijing",
        "d": "China's ancient capital with the Forbidden City at its core"
      },
      {
        "w": "Rome",
        "d": "Eternal City built on seven hills — pasta, ruins, and divine ambition"
      },
      {
        "w": "Berlin",
        "d": "Germany's reunified capital — still processing history, always creative"
      },
      {
        "w": "Cairo",
        "d": "Egypt's chaotic megacity beside the Nile and the pyramids"
      },
      {
        "w": "Buenos Aires",
        "d": "Argentina's passionate capital where tango was born"
      },
      {
        "w": "Ottawa",
        "d": "Canada's quiet federal capital — Niagara is not the capital"
      },
      {
        "w": "Madrid",
        "d": "Spain's sun-baked capital that only comes alive after midnight"
      },
      {
        "w": "New Delhi",
        "d": "India's planned capital built by British architects in the 1900s"
      },
      {
        "w": "Canberra",
        "d": "Australia's capital built as a compromise between Sydney and Melbourne"
      },
      {
        "w": "Brasília",
        "d": "Brazil's futuristic capital carved from jungle in just four years"
      },
      {
        "w": "Seoul",
        "d": "South Korea's dynamic capital powering K-pop and tech innovation"
      },
      {
        "w": "Nairobi",
        "d": "Kenya's capital — East Africa's business hub with giraffes at the airport"
      },
      {
        "w": "Bangkok",
        "d": "Thailand's chaotic capital of temples, street food, and tuk-tuks"
      },
      {
        "w": "Ankara",
        "d": "Turkey's capital — not Istanbul, though everyone assumes otherwise"
      },
      {
        "w": "Riyadh",
        "d": "Saudi Arabia's conservative capital transforming into a modern city"
      },
      {
        "w": "Oslo",
        "d": "Norway's fjord-framed capital — consistently ranked world's happiest city"
      },
      {
        "w": "Vienna",
        "d": "Austria's imperial capital of Mozart, coffee houses, and waltzes"
      },
      {
        "w": "Amsterdam",
        "d": "Netherlands' canal city of bicycles, museums, and liberal culture"
      },
      {
        "w": "Pretoria",
        "d": "South Africa's administrative capital — jacaranda trees bloom purple annually"
      },
      {
        "w": "Havana",
        "d": "Cuba's time-capsule capital of vintage cars, salsa, and revolution"
      },
      {
        "w": "Reykjavík",
        "d": "World's northernmost capital — Northern Lights visible from city limits"
      },
      {
        "w": "Bern",
        "d": "Switzerland's low-key federal capital of arcades and clock towers"
      },
      {
        "w": "Wellington",
        "d": "New Zealand's wind-lashed harbour capital between two dramatic islands"
      },
      {
        "w": "Singapore",
        "d": "City-state capital and country simultaneously — clean, efficient, strict"
      },
      {
        "w": "Kyoto",
        "d": "Japan's ancient imperial capital — 1,600 Buddhist temples and shrines"
      },
      {
        "w": "Lisbon",
        "d": "Portugal's hilly Atlantic capital famous for fado music and pastéis"
      },
      {
        "w": "Dublin",
        "d": "Ireland's literary pub capital — Joyce, Guinness, and rocky weather"
      },
      {
        "w": "Athens",
        "d": "Greece's ancient capital where democracy and philosophy were invented"
      },
      {
        "w": "Stockholm",
        "d": "Sweden's island capital spread across 14 islands in the Baltic Sea"
      },
      {
        "w": "Warsaw",
        "d": "Poland's resilient capital rebuilt from rubble after WWII destruction"
      }
    ]
  },
  {
    "name": "fairy tales & children's stories",
    "tags": {
      "a": "human",
      "b": "stories",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Cinderella",
        "d": "Kitchen servant transformed by a fairy godmother to meet the prince"
      },
      {
        "w": "Red Riding Hood",
        "d": "Girl in a red cape who finds a wolf in her grandmother's bed"
      },
      {
        "w": "Pinocchio",
        "d": "Wooden puppet whose lying nose grows — wants to be a real boy"
      },
      {
        "w": "Snow White",
        "d": "Poisoned apple princess saved by seven dwarves and a prince's kiss"
      },
      {
        "w": "Hansel & Gretel",
        "d": "Siblings abandoned in woods who find a witch's edible candy house"
      },
      {
        "w": "Peter Pan",
        "d": "Boy who never grows up leads children to Neverland forever"
      },
      {
        "w": "Sleeping Beauty",
        "d": "Princess cursed to sleep 100 years — only true love's kiss breaks it"
      },
      {
        "w": "Jack & the Beanstalk",
        "d": "Magic beans grow to the clouds where a giant guards golden treasures"
      },
      {
        "w": "The Ugly Duckling",
        "d": "Mocked ugly bird discovers it was always a beautiful swan"
      },
      {
        "w": "Goldilocks",
        "d": "Trespassing girl who sampled the bears' porridge, chairs, and beds"
      },
      {
        "w": "Rumpelstiltskin",
        "d": "Imp who spins straw into gold but demands the firstborn child"
      },
      {
        "w": "Thumbelina",
        "d": "Tiny girl born from a flower seed has adventures among frogs and mice"
      },
      {
        "w": "The Three Little Pigs",
        "d": "Straw, sticks, and bricks — only one house withstands the wolf"
      },
      {
        "w": "The Little Mermaid",
        "d": "Sea princess trades her voice for legs to chase a human prince"
      },
      {
        "w": "Puss in Boots",
        "d": "Cunning talking cat who wins a kingdom for his penniless master"
      },
      {
        "w": "Beauty & the Beast",
        "d": "A rose, a curse, and a library — love transforms the monstrous"
      },
      {
        "w": "Tom Thumb",
        "d": "Tiny boy the size of a thumb who has enormous adventures"
      },
      {
        "w": "The Pied Piper",
        "d": "Magical piper leads rats — then unpaid, leads children — out of Hamelin"
      },
      {
        "w": "Winnie-the-Pooh",
        "d": "Honey-obsessed bear in the Hundred Acre Wood with simple wisdom"
      },
      {
        "w": "Alice in Wonderland",
        "d": "Girl falls down rabbit hole into nonsense logic and talking cards"
      },
      {
        "w": "The Frog Prince",
        "d": "Princess must kiss a frog to restore the cursed prince inside"
      },
      {
        "w": "Baba Yaga",
        "d": "Russian forest witch in a chicken-legged hut who may help or hinder"
      },
      {
        "w": "The Gingerbread Man",
        "d": "Freshly baked cookie runs from everyone — run, run, as fast as you can"
      },
      {
        "w": "Three Billy Goats",
        "d": "Three goats outsmart a troll guarding the bridge to greener pastures"
      },
      {
        "w": "Ali Baba",
        "d": "Woodcutter discovers thieves' cave with Open Sesame password"
      },
      {
        "w": "Rapunzel",
        "d": "Long-haired tower prisoner lets down her hair for her prince to climb"
      },
      {
        "w": "The Snow Queen",
        "d": "Icy queen captures a boy — his friend Gerda rescues him through love"
      },
      {
        "w": "Aladdin",
        "d": "Street boy finds a magic lamp with a genie who grants three wishes"
      },
      {
        "w": "The Emperor's New Clothes",
        "d": "Vain emperor tricked into parading naked while everyone pretends not to notice"
      },
      {
        "w": "Bluebeard",
        "d": "Wealthy husband with a forbidden locked room — curiosity proves deadly"
      },
      {
        "w": "The Selfish Giant",
        "d": "Oscar Wilde's giant refuses children in his garden until a child transforms him"
      },
      {
        "w": "Mowgli",
        "d": "Jungle Book's boy raised by wolves — Baloo, Bagheera, Shere Khan"
      },
      {
        "w": "The Little Prince",
        "d": "Saint-Exupéry's celestial boy with a rose who teaches what matters most"
      },
      {
        "w": "Charlotte's Web",
        "d": "Spider spells out words in her web to save her beloved pig Wilbur"
      },
      {
        "w": "The Velveteen Rabbit",
        "d": "Toy rabbit loved so much it becomes real through a child's devotion"
      }
    ]
  },
  {
    "name": "epic rivalries in sports",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Messi",
        "d": "FC Barcelona's magician at the heart of football's greatest rivalry"
      },
      {
        "w": "Ronaldo",
        "d": "Manchester United to Real Madrid — the other half of football's GOAT debate"
      },
      {
        "w": "Ali",
        "d": "The Greatest — who fought Frazier three legendary times"
      },
      {
        "w": "Frazier",
        "d": "Smokin' Joe — the immovable force that met Ali's unstoppable greatness"
      },
      {
        "w": "Federer",
        "d": "Graceful Swiss master of every surface, Nadal's most famous opponent"
      },
      {
        "w": "Nadal",
        "d": "Clay-court king who owns Roland Garros and pushed Federer to his limits"
      },
      {
        "w": "Borg",
        "d": "Cool Swedish ice man who dominated Wimbledon until McEnroe arrived"
      },
      {
        "w": "McEnroe",
        "d": "Explosive American genius whose tantrums matched his brilliance"
      },
      {
        "w": "Bird",
        "d": "Larry Bird — Celtics forward whose rivalry with Magic defined the 80s NBA"
      },
      {
        "w": "Magic Johnson",
        "d": "Lakers point guard whose dazzling play clashed beautifully with Bird"
      },
      {
        "w": "Senna",
        "d": "Brazilian F1 god whose rivalry with Prost was the sport's most intense"
      },
      {
        "w": "Prost",
        "d": "The Professor — Senna's tactical foil who calculated while Senna attacked"
      },
      {
        "w": "Tyson",
        "d": "Iron Mike — ferocious champion whose rivalry with Holyfield defined an era"
      },
      {
        "w": "Djokovic",
        "d": "Serbian champion who made the Federer-Nadal rivalry a Big Three"
      },
      {
        "w": "Schumacher",
        "d": "Michael — seven titles, fierce rival of Hill, Häkkinen, and Alonso"
      },
      {
        "w": "Pacquiao",
        "d": "Filipino boxing legend whose showdown with Mayweather was boxing's biggest"
      },
      {
        "w": "Mayweather",
        "d": "Undefeated defensive boxer whose TBE status was Pacquiao's obsession"
      },
      {
        "w": "Evert",
        "d": "Chris Evert — baseline queen locked in legendary rivalry with Navratilova"
      },
      {
        "w": "Navratilova",
        "d": "Serve-and-volley champion who fought Evert 80 times over two decades"
      },
      {
        "w": "Hamilton",
        "d": "Seven-time F1 champion whose current rivalry with Verstappen defines the era"
      },
      {
        "w": "Verstappen",
        "d": "Red Bull's Dutch champion who overtook Hamilton in 2021's final lap drama"
      },
      {
        "w": "Nicklaus",
        "d": "Golden Bear whose 18 majors are the benchmark Tiger chased his whole career"
      },
      {
        "w": "Ovechkin",
        "d": "Washington Capitals power forward locked in goals-record rivalry with history"
      },
      {
        "w": "Crosby",
        "d": "Pittsburgh Penguins captain — the other half of hockey's greatest rivalry"
      },
      {
        "w": "Senna vs Prost",
        "d": "F1's defining duel — collisions, stolen titles, and eternal legend"
      },
      {
        "w": "Federer vs Nadal",
        "d": "Tennis's greatest rivalry — opposite styles producing five-set masterpieces"
      },
      {
        "w": "Ali vs Frazier",
        "d": "Thrilla in Manila — three fights for boxing's soul and heavyweight crown"
      },
      {
        "w": "Celtic vs Rangers",
        "d": "Glasgow's Old Firm derby — football's most intensely divided city rivalry"
      },
      {
        "w": "Real Madrid vs Barça",
        "d": "El Clásico — world football's biggest match between Spain's giants"
      },
      {
        "w": "Australia vs England",
        "d": "The Ashes — cricket's 140-year war over a tiny urn of burned bail"
      },
      {
        "w": "Federer vs Djokovic",
        "d": "2019 Wimbledon final — the greatest single match in tennis history"
      },
      {
        "w": "LeBron vs Jordan",
        "d": "GOAT debate that splits basketball fans across every generation"
      },
      {
        "w": "Holmes vs Norton",
        "d": "Ken Norton — the challenger who broke Ali's jaw and still nearly lost"
      },
      {
        "w": "Indurain vs Pantani",
        "d": "Tour de France mountain battles that redefined cycling's romance"
      },
      {
        "w": "Bolt vs Gay",
        "d": "Two fastest sprinters alive facing off for 100m supremacy"
      }
    ]
  },
  {
    "name": "emojis & internet slang",
    "tags": {
      "a": "human",
      "b": "tech",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "LOL",
        "d": "Laughing Out Loud — the internet's first expression of digital amusement"
      },
      {
        "w": "GG",
        "d": "Good Game — sportsmanship shorthand that can be sincere or sarcastic"
      },
      {
        "w": "FOMO",
        "d": "Fear Of Missing Out — anxiety about not being at the party everyone's at"
      },
      {
        "w": "GOAT",
        "d": "Greatest Of All Time — the ultimate compliment in internet sports debate"
      },
      {
        "w": "Bruh",
        "d": "Expression of disbelief, disappointment, or just general exasperation"
      },
      {
        "w": "YOLO",
        "d": "You Only Live Once — justification for every questionable life decision"
      },
      {
        "w": "Slay",
        "d": "Crushing it with style and confidence — maximum praise for an outfit"
      },
      {
        "w": "NPC",
        "d": "Non-Player Character — someone acting mindlessly with no original thought"
      },
      {
        "w": "Rizz",
        "d": "Magnetic charisma and effortless ability to attract romantic interest"
      },
      {
        "w": "Ghosting",
        "d": "Disappearing from someone's life without explanation or warning"
      },
      {
        "w": "TBH",
        "d": "To Be Honest — prefaces an opinion you might not love hearing"
      },
      {
        "w": "Simp",
        "d": "Someone excessively devoted to a person who barely acknowledges them"
      },
      {
        "w": "No Cap",
        "d": "No lie — used to emphasise that what you're saying is completely true"
      },
      {
        "w": "Bussin",
        "d": "When food is so incredibly good it deserves its own praise language"
      },
      {
        "w": "Sus",
        "d": "Suspicious — made famous by Among Us's crewmate betrayal gameplay"
      },
      {
        "w": "AFK",
        "d": "Away From Keyboard — gaming shorthand for temporarily unavailable"
      },
      {
        "w": "TL;DR",
        "d": "Too Long; Didn't Read — give me the summary right now please"
      },
      {
        "w": "IMO",
        "d": "In My Opinion — softens strong statements that you absolutely mean"
      },
      {
        "w": "Ratio",
        "d": "When replies outnumber likes — indicates a post backfired spectacularly"
      },
      {
        "w": "Vibe Check",
        "d": "Assessing whether the energy, mood, or person is good or bad"
      },
      {
        "w": "Touch Grass",
        "d": "Advice to go outside — someone has spent too long on the internet"
      },
      {
        "w": "FR FR",
        "d": "For Real For Real — double emphasis that this is 100% serious"
      },
      {
        "w": "IRL",
        "d": "In Real Life — the physical world that exists between screen sessions"
      },
      {
        "w": "Lowkey",
        "d": "Secretly, subtly, or to a moderate degree — quiet approval"
      },
      {
        "w": "Stan",
        "d": "Obsessive fan — from Eminem's 2000 song about a fan who went too far"
      },
      {
        "w": "Main Character",
        "d": "Believing or acting like you're the protagonist of your own life movie"
      },
      {
        "w": "Delulu",
        "d": "Short for delusional — wildly optimistic about something unlikely"
      },
      {
        "w": "Bet",
        "d": "Affirmative agreement — equivalent to sounds good or you're on"
      },
      {
        "w": "It's giving",
        "d": "Communicating a specific vibe or energy — it's giving royalty"
      },
      {
        "w": "Caught in 4K",
        "d": "Exposed doing something in full high-definition undeniable clarity"
      },
      {
        "w": "W",
        "d": "A Win — the highest possible one-letter compliment online"
      },
      {
        "w": "Understood the assignment",
        "d": "Perfectly executed exactly what was needed — maximum approval"
      },
      {
        "w": "Era",
        "d": "A life phase defined by a dominant vibe — she's in her villain era"
      },
      {
        "w": "Hot take",
        "d": "An opinion so controversial it needs a warning label before sharing"
      },
      {
        "w": "Clout",
        "d": "Social influence, fame, or internet status worth chasing and exploiting"
      }
    ]
  },
  {
    "name": "conspiracy theories",
    "tags": {
      "a": "human",
      "b": "hist",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Area 51",
        "d": "Secret Nevada military base supposedly hiding UFOs and alien technology"
      },
      {
        "w": "Flat Earth",
        "d": "Belief the Earth is a flat disc guarded by a wall of Antarctic ice"
      },
      {
        "w": "Moon Landing Hoax",
        "d": "Claim the 1969 Apollo mission was staged in a Hollywood studio"
      },
      {
        "w": "Illuminati",
        "d": "Secret society of elites supposedly controlling world governments"
      },
      {
        "w": "Roswell",
        "d": "1947 New Mexico crash rumoured to be a UFO covered up by the military"
      },
      {
        "w": "Bermuda Triangle",
        "d": "Atlantic zone where ships and planes supposedly vanish mysteriously"
      },
      {
        "w": "Chemtrails",
        "d": "Theory that aircraft condensation trails contain sinister mind-control chemicals"
      },
      {
        "w": "Reptilians",
        "d": "Shape-shifting lizard aliens secretly running human governments"
      },
      {
        "w": "JFK Second Shooter",
        "d": "Theory Kennedy was killed by multiple shooters from the grassy knoll"
      },
      {
        "w": "Bigfoot",
        "d": "Enormous hairy ape-man roaming North American forests, camera-shy"
      },
      {
        "w": "Hollow Earth",
        "d": "Theory a hidden civilisation lives inside the Earth's hollow interior"
      },
      {
        "w": "Birds Aren't Real",
        "d": "Satirical claim all birds are government surveillance drones"
      },
      {
        "w": "Mandela Effect",
        "d": "When masses share false memories — was it Berenstain or Berenstein?"
      },
      {
        "w": "5G Conspiracy",
        "d": "Theory 5G mobile networks cause illness or enable mind control"
      },
      {
        "w": "Paul Is Dead",
        "d": "Claim Beatle Paul McCartney died in 1966 and was secretly replaced"
      },
      {
        "w": "New World Order",
        "d": "Shadowy global elite plotting to install one-world authoritarian government"
      },
      {
        "w": "Princess Diana",
        "d": "Theory the Royal Family ordered Diana's 1997 Paris crash death"
      },
      {
        "w": "Denver Airport",
        "d": "Murals and gargoyles fuel theories it's a secret bunker for elites"
      },
      {
        "w": "Fake News Media",
        "d": "Belief mainstream media is entirely controlled to hide the truth"
      },
      {
        "w": "9/11 Inside Job",
        "d": "Theory the US government planned the World Trade Center attacks"
      },
      {
        "w": "Elvis Is Alive",
        "d": "Claim the King faked his 1977 death and is still living quietly"
      },
      {
        "w": "Water Fluoridation",
        "d": "Theory fluoride in tap water is mind-control mass medication"
      },
      {
        "w": "Contrail Planes",
        "d": "Same as chemtrails — aircraft spraying chemicals for population control"
      },
      {
        "w": "QAnon",
        "d": "Deep state child-trafficking cabal theory that spread from internet boards"
      },
      {
        "w": "Ancient Aliens",
        "d": "Theory extraterrestrials helped build ancient human wonders"
      },
      {
        "w": "Faked Titanic Sinking",
        "d": "Theory the Olympia was substituted for insurance fraud purposes"
      },
      {
        "w": "Microchip Vaccines",
        "d": "Bill Gates supposedly hiding tracking chips in COVID vaccine doses"
      },
      {
        "w": "Cleopatra's Race",
        "d": "Fringe claim about Cleopatra's ethnicity used for culture war purposes"
      },
      {
        "w": "Stanley Kubrick Hoax",
        "d": "Claim Kubrick directed the fake moon landing footage in 2001 style"
      },
      {
        "w": "George Soros Control",
        "d": "Billionaire philanthropist falsely blamed for orchestrating social unrest"
      },
      {
        "w": "Pizzagate",
        "d": "Debunked 2016 theory a pizza restaurant was running a trafficking ring"
      },
      {
        "w": "Tesla's Free Energy",
        "d": "Nikola Tesla's supposed free-energy machine suppressed by oil companies"
      },
      {
        "w": "Phantom Time Hypothesis",
        "d": "Medieval years 614–911 AD supposedly never existed and were invented"
      },
      {
        "w": "Tartaria",
        "d": "Fringe claim a vast lost empire was erased from official world history"
      },
      {
        "w": "CIA Invented Hip Hop",
        "d": "Theory rap music was engineered to keep Black communities in prison"
      }
    ]
  },
  {
    "name": "legendary stadium moments",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Hand of God",
        "d": "Maradona's handball goal that Argentina pretended was divine intervention"
      },
      {
        "w": "Zidane Headbutt",
        "d": "World Cup final exit — Zidane headbutted Materazzi and walked off forever"
      },
      {
        "w": "Bolt's 9.58",
        "d": "Usain Bolt's world record 100m at Berlin 2009 — physics redefined"
      },
      {
        "w": "Miracle on Ice",
        "d": "1980 US Olympic team shocked the Soviet Union in Lake Placid hockey"
      },
      {
        "w": "Leicester 5000:1",
        "d": "Leicester City won the Premier League as 5000-1 underdogs — impossibly"
      },
      {
        "w": "Flu Game",
        "d": "Michael Jordan scored 38 points while visibly ill — legend status cemented"
      },
      {
        "w": "Haka",
        "d": "New Zealand All Blacks' pre-match war dance that intimidates the entire planet"
      },
      {
        "w": "Fosbury Flop",
        "d": "Dick Fosbury won 1968 gold with backwards high jump — changed the event forever"
      },
      {
        "w": "Nadia's 10",
        "d": "Nadia Comaneci scored gymnastics' first-ever perfect 10 at Montreal 1976"
      },
      {
        "w": "Usain Triple-Triple",
        "d": "Bolt won 100m, 200m, and 4x100m at three consecutive Olympics"
      },
      {
        "w": "The Minneapolis Miracle",
        "d": "Stefon Diggs' 61-yard game-winning TD catch with no time on the clock"
      },
      {
        "w": "Federer's Tweener",
        "d": "Between-the-legs passing shot at the US Open that left the crowd breathless"
      },
      {
        "w": "Rumble in the Jungle",
        "d": "Ali's rope-a-dope strategy drained Foreman before eight-round knockout"
      },
      {
        "w": "Black Power Salute",
        "d": "Tommie Smith and John Carlos raised fists at 1968 Mexico City Olympics"
      },
      {
        "w": "Budd vs Decker",
        "d": "Barefoot Zola Budd's collision with Mary Decker ended both medal hopes"
      },
      {
        "w": "Agassi's Comeback",
        "d": "Andre Agassi returned from ranked 141st to win the French Open"
      },
      {
        "w": "Tiger's Chip-In",
        "d": "Tiger Woods' impossible Augusta chip that hung on the lip before dropping"
      },
      {
        "w": "Beamon's Jump",
        "d": "Bob Beamon jumped 8.90m at 1968 Olympics — the long jump world stood still"
      },
      {
        "w": "The Immaculate Reception",
        "d": "Franco Harris' impossible 1972 deflected catch saved Pittsburgh's season"
      },
      {
        "w": "Wembley 1966",
        "d": "England's only World Cup triumph — was the ball over the line?"
      },
      {
        "w": "Pietersen's Switch Hit",
        "d": "Kevin Pietersen switched hands mid-delivery to hit a six at The Oval"
      },
      {
        "w": "Schumacher Lap",
        "d": "Michael Schumacher's legendary 2004 Bahrain qualifying lap setting pole"
      },
      {
        "w": "The Shot",
        "d": "Michael Jordan's buzzer-beater over Craig Ehlo — arm pump became a symbol"
      },
      {
        "w": "Tonya vs Nancy",
        "d": "Tonya Harding's rival Nancy Kerrigan kneecapped before 1994 Olympics"
      },
      {
        "w": "Di Stefano's Five",
        "d": "Alfredo Di Stéfano scored in five consecutive European Cup finals — remarkable"
      },
      {
        "w": "Secretariat's Belmont",
        "d": "1973 Triple Crown race won by 31 lengths — the most dominant horse race ever"
      },
      {
        "w": "Borg's Five",
        "d": "Björn Borg won five consecutive Wimbledon titles with ice-cold precision"
      },
      {
        "w": "Liverpool Istanbul",
        "d": "2005 Champions League final — 3-0 down at half-time, won on penalties"
      },
      {
        "w": "Lauda's Comeback",
        "d": "Niki Lauda raced six weeks after his 1976 Nürburgring near-fatal inferno"
      },
      {
        "w": "Jesse's Four Golds",
        "d": "Jesse Owens' four gold medals at Hitler's 1936 Berlin Olympics — defiant"
      },
      {
        "w": "Kipchoge Sub-2",
        "d": "Eliud Kipchoge's 1:59:40 marathon in Vienna — first human under two hours"
      },
      {
        "w": "The Catch",
        "d": "Dwight Clark's leaping touchdown catch that launched the 49ers dynasty"
      },
      {
        "w": "Phelps' 7th Gold",
        "d": "Michael Phelps' one-stroke win by 0.01 second in Beijing relay — 7 golds"
      },
      {
        "w": "Armstrong's 7",
        "d": "Lance Armstrong's seven Tour de France titles later stripped for doping"
      },
      {
        "w": "Tyson's Bite",
        "d": "Mike Tyson bit Evander Holyfield's ear off in a 1997 championship rematch"
      }
    ]
  },
  {
    "name": "space missions & spacecraft",
    "tags": {
      "a": "geek",
      "b": "space",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Apollo 11",
        "d": "First crewed Moon landing — Armstrong's small step, humanity's giant leap"
      },
      {
        "w": "Voyager 1",
        "d": "First human-made object to leave the solar system — still transmitting"
      },
      {
        "w": "Hubble",
        "d": "Space telescope that gave humanity its deepest and most beautiful views"
      },
      {
        "w": "Curiosity",
        "d": "Car-sized Mars rover exploring Gale Crater since 2012"
      },
      {
        "w": "Cassini",
        "d": "Saturn orbiter that revealed ring details and dove into the planet to end"
      },
      {
        "w": "New Horizons",
        "d": "First probe to fly past Pluto — showed us a heart-shaped ice plain"
      },
      {
        "w": "James Webb",
        "d": "Infrared space telescope showing galaxies from the universe's first moments"
      },
      {
        "w": "Sputnik",
        "d": "First satellite ever — Soviet beep heard round the world in 1957"
      },
      {
        "w": "Perseverance",
        "d": "NASA Mars rover hunting biosignatures and testing oxygen production"
      },
      {
        "w": "ISS",
        "d": "International Space Station — continuous human presence in orbit since 2000"
      },
      {
        "w": "Challenger",
        "d": "Shuttle that broke apart 73 seconds after launch in 1986, killing seven"
      },
      {
        "w": "Pioneer 10",
        "d": "First probe through the asteroid belt — carries a plaque for alien finders"
      },
      {
        "w": "Vostok 1",
        "d": "Gagarin's capsule — first human spaceflight on April 12, 1961"
      },
      {
        "w": "Apollo 13",
        "d": "Oxygen tank explosion 56 hours into mission — Houston, we have a problem"
      },
      {
        "w": "Rosetta",
        "d": "ESA probe that orbited a comet and deployed Philae lander on its surface"
      },
      {
        "w": "MAVEN",
        "d": "Mars Atmosphere and Volatile Evolution probe mapping how Mars lost its air"
      },
      {
        "w": "Artemis I",
        "d": "NASA's 2022 uncrewed Moon orbit test — return to the Moon begins"
      },
      {
        "w": "Hayabusa2",
        "d": "Japanese probe that retrieved asteroid Ryugu samples and returned to Earth"
      },
      {
        "w": "Viking 1",
        "d": "First spacecraft to successfully land on Mars — searched for life in 1976"
      },
      {
        "w": "OSIRIS-REx",
        "d": "NASA mission that scooped samples from asteroid Bennu and returned them"
      },
      {
        "w": "Galileo",
        "d": "Jupiter orbiter that discovered Europa's subsurface ocean possibility"
      },
      {
        "w": "Chang'e 4",
        "d": "China's historic lander on the Moon's far side — never done before"
      },
      {
        "w": "Parker Solar",
        "d": "Fastest human-made object — diving through the Sun's outer corona"
      },
      {
        "w": "Juno",
        "d": "NASA probe orbiting Jupiter mapping its magnetic field and atmosphere"
      },
      {
        "w": "Starman",
        "d": "Elon Musk's Tesla Roadster launched to space as Falcon Heavy test payload"
      },
      {
        "w": "Luna 9",
        "d": "First spacecraft to soft-land on the Moon — Soviet triumph of 1966"
      },
      {
        "w": "Mariner 4",
        "d": "First probe to fly past Mars — showed a cratered, thin-atmosphered world"
      },
      {
        "w": "Messenger",
        "d": "First spacecraft to orbit Mercury — mapped the innermost planet fully"
      },
      {
        "w": "Magellan",
        "d": "Venus radar mapper that revealed the cloud-shrouded planet's surface"
      },
      {
        "w": "New Shepard",
        "d": "Blue Origin's suborbital capsule that took the first tourists to space"
      },
      {
        "w": "Dragon",
        "d": "SpaceX's crew capsule that ended US dependence on Russian Soyuz launches"
      },
      {
        "w": "Ingenuity",
        "d": "Tiny Mars helicopter — first powered flight on another planet in 2021"
      },
      {
        "w": "Starliner",
        "d": "Boeing's crew capsule whose first crewed mission suffered propulsion issues"
      },
      {
        "w": "DART",
        "d": "NASA spacecraft that deliberately crashed into an asteroid to deflect it"
      },
      {
        "w": "Euclid",
        "d": "ESA's dark energy telescope launched in 2023 to map the dark universe"
      }
    ]
  },
  {
    "name": "famous operas",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "La Traviata",
        "d": "Verdi's doomed courtesan drama — Violetta's aria stops time itself"
      },
      {
        "w": "Carmen",
        "d": "Bizet's fiery Spanish gypsy whose love ends in a fatal knife wound"
      },
      {
        "w": "The Magic Flute",
        "d": "Mozart's fairy-tale initiation opera with the Queen of the Night's aria"
      },
      {
        "w": "Madama Butterfly",
        "d": "Puccini's heartbreaking tale of a Japanese bride abandoned by an American sailor"
      },
      {
        "w": "Rigoletto",
        "d": "Verdi's hunchback jester whose plot to avenge his daughter ends in tragedy"
      },
      {
        "w": "Tosca",
        "d": "Puccini's Roman thriller of love, torture, and rooftop suicide"
      },
      {
        "w": "Aida",
        "d": "Verdi's Egyptian slave princess caught between love and patriotism"
      },
      {
        "w": "Don Giovanni",
        "d": "Mozart's irresistible seducer who is dragged to hell by a stone statue"
      },
      {
        "w": "Turandot",
        "d": "Puccini's unfinished Chinese princess who executes wrong-answer suitors"
      },
      {
        "w": "The Barber of Seville",
        "d": "Rossini's comedy of disguise and haircuts — fizzing with comic genius"
      },
      {
        "w": "La Bohème",
        "d": "Puccini's Paris garret romance — Mimi's death is opera's most heartbreaking"
      },
      {
        "w": "Der Ring",
        "d": "Wagner's 16-hour Norse mythology epic requiring four evenings to complete"
      },
      {
        "w": "Così fan tutte",
        "d": "Mozart's cynical love experiment — all women do it, apparently"
      },
      {
        "w": "Otello",
        "d": "Verdi's Shakespeare adaptation — jealousy strangles love and then Iago wins"
      },
      {
        "w": "Fidelio",
        "d": "Beethoven's only opera — a wife rescues her unjustly imprisoned husband"
      },
      {
        "w": "Nabucco",
        "d": "Verdi's Babylonian epic — Va, pensiero became Italy's unofficial national anthem"
      },
      {
        "w": "Salome",
        "d": "Richard Strauss's scandalous opera climaxing in the Dance of the Seven Veils"
      },
      {
        "w": "Falstaff",
        "d": "Verdi's comic masterpiece — his last opera written at age 79 in pure joy"
      },
      {
        "w": "The Marriage of Figaro",
        "d": "Mozart's comedy of class warfare — servants outsmart their aristocratic master"
      },
      {
        "w": "Lucia di Lammermoor",
        "d": "Donizetti's mad-scene showpiece — soprano goes insane in a bloody wedding dress"
      },
      {
        "w": "Tristan und Isolde",
        "d": "Wagner's love-death opus — a love potion leading to eternal longing"
      },
      {
        "w": "L'elisir d'amore",
        "d": "Donizetti's comic love potion opera — wine sold as cure for heartbreak"
      },
      {
        "w": "Don Pasquale",
        "d": "Donizetti's comic opera of an old bachelor tricked by a scheming bride"
      },
      {
        "w": "Parsifal",
        "d": "Wagner's sacred festival drama — the Holy Grail quest in musical form"
      },
      {
        "w": "I Pagliacci",
        "d": "Leoncavallo's clown opera — Canio sings Vesti la giubba through real tears"
      },
      {
        "w": "Norma",
        "d": "Bellini's druid priestess who chooses death over betrayal — bel canto peak"
      },
      {
        "w": "The Flying Dutchman",
        "d": "Wagner's ghost ship captain doomed to sail until a faithful wife saves him"
      },
      {
        "w": "Eugene Onegin",
        "d": "Tchaikovsky's Pushkin adaptation — a letter refused returns as regret"
      },
      {
        "w": "Boris Godunov",
        "d": "Mussorgsky's Russian tsar guilt-haunted by a murdered child prince"
      },
      {
        "w": "Elektra",
        "d": "Richard Strauss's savage Greek revenge — dischordant and devastating"
      },
      {
        "w": "Billy Budd",
        "d": "Britten's sea tragedy — innocent sailor hanged by a corrupt officer"
      },
      {
        "w": "The Turn of the Screw",
        "d": "Britten's chamber opera — are the ghosts real or in the governess's mind?"
      },
      {
        "w": "Nixon in China",
        "d": "John Adams's modern opera staging Nixon's historic 1972 Beijing visit"
      },
      {
        "w": "Wozzeck",
        "d": "Berg's expressionist tragedy — a soldier tormented by the world around him"
      },
      {
        "w": "Simon Boccanegra",
        "d": "Verdi's political opera of a Genoese doge seeking redemption through love"
      }
    ]
  },
  {
    "name": "mythological creatures",
    "tags": {
      "a": "human",
      "b": "mythology",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Kraken",
        "d": "Titanic Norse sea monster that drags entire ships beneath the waves"
      },
      {
        "w": "Phoenix",
        "d": "Fire bird that burns to ash and rises reborn from the flames"
      },
      {
        "w": "Chimera",
        "d": "Greek fire-breathing monster with lion head, goat body, and serpent tail"
      },
      {
        "w": "Jörmungandr",
        "d": "Norse World Serpent encircling the ocean — its release signals Ragnarok"
      },
      {
        "w": "Cerberus",
        "d": "Three-headed dog guarding the gates of Hades, Heracles' labour"
      },
      {
        "w": "Griffin",
        "d": "Eagle-headed lion body — guardian of treasure in Greek and Persian myth"
      },
      {
        "w": "Basilisk",
        "d": "Serpent king whose gaze kills instantly — Harry Potter fans know this"
      },
      {
        "w": "Valkyrie",
        "d": "Norse warrior maidens who choose which soldiers die in battle"
      },
      {
        "w": "Kitsune",
        "d": "Japanese shape-shifting fox with up to nine tails — trickster and spirit"
      },
      {
        "w": "Hydra",
        "d": "Multi-headed Greek water serpent — cut one head off, two grow back"
      },
      {
        "w": "Minotaur",
        "d": "Bull-headed man trapped in Crete's labyrinth, fed on Athenian youth"
      },
      {
        "w": "Banshee",
        "d": "Irish wailing spirit whose shriek announces an imminent death"
      },
      {
        "w": "Wendigo",
        "d": "Algonquin spirit of cannibalism and winter hunger — terrifying and ravenous"
      },
      {
        "w": "Manticore",
        "d": "Persian lion with human face and scorpion tail that eats men whole"
      },
      {
        "w": "Leviathan",
        "d": "Biblical sea chaos-monster — so vast it makes oceans look like puddles"
      },
      {
        "w": "Selkie",
        "d": "Celtic seal-people who shed their skins to walk as humans on shore"
      },
      {
        "w": "Wyvern",
        "d": "Two-legged winged dragon — heraldic cousin of the traditional four-legged variety"
      },
      {
        "w": "Sphinx",
        "d": "Egyptian lion-human guardian who asks riddles and kills wrong answerers"
      },
      {
        "w": "Tengu",
        "d": "Japanese mountain demon with long nose — martial arts master and trickster"
      },
      {
        "w": "Roc",
        "d": "Arabian mythological bird large enough to carry elephants through the air"
      },
      {
        "w": "Unicorn",
        "d": "White horse with a single spiralled horn — symbol of purity and magic"
      },
      {
        "w": "Cyclops",
        "d": "One-eyed giant of Greek myth — Odysseus blinded Polyphemus to escape"
      },
      {
        "w": "Ammit",
        "d": "Egyptian devourer with lion, hippo, and crocodile parts — eats unworthy souls"
      },
      {
        "w": "Perytons",
        "d": "Winged stags casting human shadows — Atlantean creatures from medieval legend"
      },
      {
        "w": "Nüe",
        "d": "Japanese chimera — monkey head, tanuki body, tiger legs, snake tail"
      },
      {
        "w": "Dragon",
        "d": "Fire-breathing winged reptile ruling European and Asian mythology equally"
      },
      {
        "w": "Medusa",
        "d": "Gorgon whose gaze turns men to stone — Perseus used a mirror to defeat her"
      },
      {
        "w": "Centaur",
        "d": "Half-man half-horse of Greek myth — Chiron the wise tutored Achilles"
      },
      {
        "w": "Werewolf",
        "d": "Human who transforms into a wolf at the full moon — folklore universal"
      },
      {
        "w": "Mermaid",
        "d": "Half-human half-fish sea creature luring sailors with song and beauty"
      },
      {
        "w": "Pegasus",
        "d": "Winged white horse of Greek myth — born from Medusa's blood"
      },
      {
        "w": "Siren",
        "d": "Greek sea creatures whose irresistible song drove sailors onto the rocks"
      },
      {
        "w": "Golem",
        "d": "Jewish myth — animate clay figure brought to life by inscribed word of power"
      },
      {
        "w": "Yeti",
        "d": "Himalayan Abominable Snowman — mountaineers' mysterious giant footprinted mystery"
      },
      {
        "w": "Thunderbird",
        "d": "Native American storm-bringer whose wingbeats create thunder overhead"
      }
    ]
  },
  {
    "name": "architectural wonders",
    "tags": {
      "a": "human",
      "b": "architecture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Sagrada Família",
        "d": "Gaudí's unfinished Barcelona basilica with organic stone towers still rising"
      },
      {
        "w": "Fallingwater",
        "d": "Frank Lloyd Wright's cantilevered house built over a waterfall in Pennsylvania"
      },
      {
        "w": "Burj Khalifa",
        "d": "World's tallest building at 828 metres — Dubai's ultimate status symbol"
      },
      {
        "w": "Pantheon",
        "d": "Rome's 2,000-year-old dome with a hole in the top — perfect proportions"
      },
      {
        "w": "Sydney Opera House",
        "d": "Jørn Utzon's shell-sail masterpiece became Australia's entire identity"
      },
      {
        "w": "Guggenheim Bilbao",
        "d": "Gehry's titanium-curved museum that regenerated an entire Spanish city"
      },
      {
        "w": "Petronas Towers",
        "d": "Twin Kuala Lumpur skyscrapers linked by a sky bridge at the 41st floor"
      },
      {
        "w": "Neuschwanstein",
        "d": "Mad King Ludwig's fairytale Bavarian castle that inspired Disney's Cinderella"
      },
      {
        "w": "Pompidou Centre",
        "d": "Paris museum with all its colourful pipes and ducts worn on the outside"
      },
      {
        "w": "Chartres Cathedral",
        "d": "French Gothic masterpiece with the finest medieval stained glass on Earth"
      },
      {
        "w": "Chichen Itza",
        "d": "Mayan pyramid complex with a serpent shadow at each equinox"
      },
      {
        "w": "Eden Project",
        "d": "Cornwall's giant geodesic biodomes housing entire tropical ecosystems"
      },
      {
        "w": "Lotus Temple",
        "d": "New Delhi's flower-shaped Bahá'í House of Worship in white marble"
      },
      {
        "w": "Louvre Pyramid",
        "d": "I.M. Pei's glass pyramid entrance — modern geometry meets classical palace"
      },
      {
        "w": "Empire State",
        "d": "New York's Art Deco icon finished in just 410 days during the Depression"
      },
      {
        "w": "Millau Viaduct",
        "d": "Norman Foster's French motorway bridge higher than the Eiffel Tower"
      },
      {
        "w": "St Basil's",
        "d": "Moscow's iconic multicoloured onion-domed cathedral on Red Square"
      },
      {
        "w": "Notre-Dame",
        "d": "Paris Gothic cathedral partially destroyed by 2019 fire — being restored"
      },
      {
        "w": "Leaning Tower of Pisa",
        "d": "Romanesque Italian tower that started sinking during construction"
      },
      {
        "w": "Golden Gate Bridge",
        "d": "San Francisco's fog-wrapped art-deco suspension bridge since 1937"
      },
      {
        "w": "Petra Treasury",
        "d": "Jordan's rose-red facade carved straight into a sandstone cliff face"
      },
      {
        "w": "Forbidden City",
        "d": "Beijing's 9,999-room imperial palace — no one counted all the rooms"
      },
      {
        "w": "Uffizi Gallery",
        "d": "Florence's Renaissance art palace housing Botticelli's Birth of Venus"
      },
      {
        "w": "St. Basil's Cathedral",
        "d": "Ivan the Terrible's Red Square cathedral — legend says he blinded the architect"
      },
      {
        "w": "Christ the Redeemer",
        "d": "Rio's art-deco Christ statue spreading arms over the city from Corcovado"
      },
      {
        "w": "Taj Mahal",
        "d": "Shah Jahan's white marble mausoleum reflecting in its long pool at dawn"
      },
      {
        "w": "Hagia Sophia",
        "d": "Constantinople's 537 AD masterpiece — church, mosque, museum, mosque again"
      },
      {
        "w": "Colosseum",
        "d": "Rome's elliptical amphitheatre fitting 80,000 spectators for gladiatorial games"
      },
      {
        "w": "Parthenon",
        "d": "Athens' Doric temple atop the Acropolis whose marble was stolen to London"
      },
      {
        "w": "Angkor Wat",
        "d": "Cambodia's 12th-century temple complex — largest religious monument on Earth"
      },
      {
        "w": "Big Ben",
        "d": "London's iconic clocktower — the bell inside is called Big Ben, not the tower"
      },
      {
        "w": "Colosseum of El Djem",
        "d": "Tunisia's remarkably preserved Roman amphitheatre — Africa's Colosseum"
      },
      {
        "w": "Shwedagon Pagoda",
        "d": "Yangon's golden Buddhist stupa rising 98 metres above the city"
      },
      {
        "w": "Al-Masjid al-Nabawi",
        "d": "Medina's Prophet's Mosque — Islam's second holiest site, constantly expanded"
      },
      {
        "w": "Marina Bay Sands",
        "d": "Singapore's three-tower sky park hotel with rooftop infinity pool above the city"
      }
    ]
  },
  {
    "name": "dystopian novels",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "1984",
        "d": "Orwell's surveillance state with Big Brother watching every thought"
      },
      {
        "w": "Brave New World",
        "d": "Huxley's pleasure-engineered society where happiness is enforced by soma"
      },
      {
        "w": "Fahrenheit 451",
        "d": "Bradbury's future where firemen burn books instead of saving buildings"
      },
      {
        "w": "The Handmaid's Tale",
        "d": "Atwood's theocratic America where fertile women are enslaved breeders"
      },
      {
        "w": "A Clockwork Orange",
        "d": "Burgess's ultra-violence and aversion therapy in a teenage gang future"
      },
      {
        "w": "We",
        "d": "Zamyatin's 1924 prototype for every dystopia that came after it"
      },
      {
        "w": "The Giver",
        "d": "Lowry's seemingly perfect community secretly built on erased memories"
      },
      {
        "w": "The Road",
        "d": "McCarthy's ash-grey post-apocalyptic father-son survival walk through America"
      },
      {
        "w": "Do Androids Dream of Electric Sheep?",
        "d": "Dick's android-hunting story that became Blade Runner"
      },
      {
        "w": "Hunger Games",
        "d": "Collins's televised child death match in a post-American empire"
      },
      {
        "w": "Lord of the Flies",
        "d": "Golding's boys on an island regress to savagery without adult structure"
      },
      {
        "w": "The Circle",
        "d": "Eggers's Silicon Valley tech company that wants complete human surveillance"
      },
      {
        "w": "Parable of the Sower",
        "d": "Butler's 2020s California climate collapse — written in 1993"
      },
      {
        "w": "Station Eleven",
        "d": "Mandel's flu-pandemic world where travelling Shakespeare players preserve culture"
      },
      {
        "w": "Never Let Me Go",
        "d": "Ishiguro's boarding school students raised as organ donor clones"
      },
      {
        "w": "The Children of Men",
        "d": "P.D. James's world where human reproduction has stopped — last generation"
      },
      {
        "w": "Anthem",
        "d": "Rand's novella where individuality is illegal and the word I has been erased"
      },
      {
        "w": "Oryx and Crake",
        "d": "Atwood's biotech dystopia — a geneticist redesigns humanity from scratch"
      },
      {
        "w": "The Iron Heel",
        "d": "Jack London's 1908 oligarchic dystopia — one of the genre's founding texts"
      },
      {
        "w": "The Power",
        "d": "Naomi Alderman's world where women develop electricity in their bodies"
      },
      {
        "w": "Make Me No Grave",
        "d": "Frontier dystopia exploring race, power, and justice at the edge of civilization"
      },
      {
        "w": "Wool",
        "d": "Howey's underground silo world where the outside is always lethal"
      },
      {
        "w": "The City & The City",
        "d": "Miéville's two cities occupying the same space — legally unseeing each other"
      },
      {
        "w": "Divergent",
        "d": "Roth's fractured Chicago divided into virtue-based factions"
      },
      {
        "w": "The Man in the High Castle",
        "d": "Philip K. Dick's Nazi-won World War II alternative America"
      },
      {
        "w": "V for Vendetta",
        "d": "Alan Moore's fascist Britain and a masked anarchist in a Guy Fawkes face"
      },
      {
        "w": "The Drowned World",
        "d": "Ballard's flooded tropical London — climate catastrophe written in 1962"
      },
      {
        "w": "Neuromancer",
        "d": "Gibson's cyberspace hacker novel that invented the word cyberspace"
      },
      {
        "w": "The Dispossessed",
        "d": "Le Guin's anarchist moon society contrasted with its capitalist twin planet"
      },
      {
        "w": "Blood Music",
        "d": "Greg Bear's nanotechnology apocalypse turning humans into living ecosystems"
      },
      {
        "w": "Kallocain",
        "d": "Swedish 1940 novel about a loyalty drug state — Europe's forgotten dystopia"
      },
      {
        "w": "The Trial",
        "d": "Kafka's nightmare bureaucratic arrest — guilty of nothing, trapped in everything"
      },
      {
        "w": "Cat's Cradle",
        "d": "Vonnegut's ice-nine substance that accidentally freezes all the world's water"
      },
      {
        "w": "The Running Man",
        "d": "Stephen King's deadly gameshow dystopia that Hunger Games borrowed from"
      },
      {
        "w": "Borne",
        "d": "Jeff VanderMeer's post-collapse city ruled by a flying bear called Mord"
      }
    ]
  },
  {
    "name": "gemstones",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Ruby",
        "d": "Deep red corundum; 'Sunrise Ruby' sold for $30M — rarest coloured gem"
      },
      {
        "w": "Tourmaline",
        "d": "More colours than any gem; Paraíba variety glows electric blue-green"
      },
      {
        "w": "Lapis Lazuli",
        "d": "Afghan blue rock mined 9,000 years; ground into ultramarine paint"
      },
      {
        "w": "Alexandrite",
        "d": "Chrysoberyl that's green in daylight and red under a lamp"
      },
      {
        "w": "Sapphire",
        "d": "Blue corundum; Diana and Kate's engagement ring was a 12-carat one"
      },
      {
        "w": "Opal",
        "d": "Silica gem refracting rainbow colours; 95% comes from Australia"
      },
      {
        "w": "Amethyst",
        "d": "Purple quartz; once prized as ruby until Brazil made it abundant"
      },
      {
        "w": "Tanzanite",
        "d": "Blue-violet zoisite near Kilimanjaro; found in 1967, rarer than diamond"
      },
      {
        "w": "Emerald",
        "d": "Green beryl; Cleopatra's favourite, now mainly mined in Colombia"
      },
      {
        "w": "Jade",
        "d": "Jadeite or nephrite — both names; sacred green stone of Chinese emperors"
      },
      {
        "w": "Diamond",
        "d": "Pure carbon, hardest natural thing; also the world's most hyped gem"
      },
      {
        "w": "Aquamarine",
        "d": "Pale blue beryl; sailors wore it as a talisman against drowning"
      },
      {
        "w": "Garnet",
        "d": "Deep red silicate; January birthstone also found in meteorites"
      },
      {
        "w": "Peridot",
        "d": "Lime-green gem from Earth's mantle — also arrives on meteorites"
      },
      {
        "w": "Moonstone",
        "d": "Feldspar with a ghostly blue glow — like moonlight trapped in stone"
      },
      {
        "w": "Morganite",
        "d": "Peachy-pink beryl; quietly replaced diamonds in engagement rings"
      },
      {
        "w": "Pearl",
        "d": "Only gem made by a living animal — an oyster annoyed by sand"
      },
      {
        "w": "Spinel",
        "d": "Mistaken for ruby for centuries; the 'Black Prince's Ruby' is one"
      },
      {
        "w": "Labradorite",
        "d": "Grey stone that flashes neon blue inside — called labradorescence"
      },
      {
        "w": "Rhodochrosite",
        "d": "Bubblegum-pink manganese gem; Argentina's national gemstone"
      },
      {
        "w": "Obsidian",
        "d": "Volcanic glass so sharp it was used as surgical scalpels in antiquity"
      },
      {
        "w": "Tsavorite",
        "d": "Vivid green garnet from Kenya; discovered while fleeing a buffalo"
      },
      {
        "w": "Amber",
        "d": "Fossilised tree resin; some still contain prehistoric insects inside"
      },
      {
        "w": "Topaz",
        "d": "Hardest silicate; pure topaz is colourless — colour versions are treated"
      },
      {
        "w": "Benitoite",
        "d": "Rare blue gem found only in California; glows neon under UV light"
      },
      {
        "w": "Sunstone",
        "d": "Feldspar with glittery copper platelets; ancient Viking navigation stone"
      },
      {
        "w": "Kunzite",
        "d": "Delicate lilac spodumene; named after gemologist George Kunz"
      },
      {
        "w": "Zircon",
        "d": "Oldest mineral on Earth; brilliant blue cuts rival diamond in sparkle"
      },
      {
        "w": "Bloodstone",
        "d": "Dark green jasper with red iron-oxide spots; ancient warrior's amulet"
      },
      {
        "w": "Chrysoprase",
        "d": "Apple-green chalcedony; Alexander the Great wore it into battle"
      },
      {
        "w": "Iolite",
        "d": "Violet-blue cordierite; Vikings used it as a polarising compass filter"
      },
      {
        "w": "Larimar",
        "d": "Sky-blue pectolite found only in the Dominican Republic; volcanic gem"
      },
      {
        "w": "Moldavite",
        "d": "Green tektite glass formed by meteor impact 15 million years ago"
      },
      {
        "w": "Citrine",
        "d": "Golden quartz; ancient Romans wore it as protection against evil thoughts"
      },
      {
        "w": "Apatite",
        "d": "Neon-blue phosphate crystal; same mineral that makes your teeth hard"
      }
    ]
  },
  {
    "name": "dance styles worldwide",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Tango",
        "d": "Argentina — melancholic close-embrace dance from Buenos Aires slums"
      },
      {
        "w": "Capoeira",
        "d": "Brazil — martial art as dance; enslaved Africans hid combat in it"
      },
      {
        "w": "Kathak",
        "d": "North India — storytelling dance with spins and rhythmic footwork"
      },
      {
        "w": "Flamenco",
        "d": "Andalusia — passionate Romani dance of stamping, clapping, guitar"
      },
      {
        "w": "Breakdancing",
        "d": "South Bronx — hip-hop power moves and freezes; Olympic since 2024"
      },
      {
        "w": "Samba",
        "d": "Brazil — fast Afro-Brazilian carnival dance with hip-swinging bounce"
      },
      {
        "w": "Bharatanatyam",
        "d": "Tamil Nadu — ancient temple dance, fixed legs, expressive arms"
      },
      {
        "w": "Polka",
        "d": "Czech Republic — lively 2/4 couple dance that swept Europe in the 1840s"
      },
      {
        "w": "Butoh",
        "d": "Japan — post-WWII avant-garde dance of contorted slowness and taboo"
      },
      {
        "w": "Waltz",
        "d": "Austria — rotating 3/4 time couple dance that scandalised the 1800s"
      },
      {
        "w": "Salsa",
        "d": "Caribbean/NYC — syncopated partner dance fusing Cuban and Puerto Rican roots"
      },
      {
        "w": "Lindy Hop",
        "d": "Harlem, 1920s — exuberant swing dance named after Lindbergh's flight"
      },
      {
        "w": "Ballet",
        "d": "Italy/France, 16th c. — pointe shoes, turnout; legs weren't built for this"
      },
      {
        "w": "Tap Dance",
        "d": "USA — metal-tipped shoes as percussion; roots in African jig traditions"
      },
      {
        "w": "Hula",
        "d": "Hawaii — every hip sway and hand gesture narrates a legend or story"
      },
      {
        "w": "Cossack Dance",
        "d": "Ukraine — explosive hopak of squat-kicks and airborne spins"
      },
      {
        "w": "Kabuki",
        "d": "Japan — theatrical dance-drama with white-face makeup; all-male cast"
      },
      {
        "w": "Whirling Dervish",
        "d": "Sufi Islam, Turkey — spinning meditation to reach spiritual ecstasy"
      },
      {
        "w": "Ceilidh",
        "d": "Scotland/Ireland — raucous folk dancing; expect spinning and collisions"
      },
      {
        "w": "Kuduro",
        "d": "Angola — fast, angular street dance from Luanda driven by electronic beats"
      },
      {
        "w": "Gagaku",
        "d": "Japan — world's oldest court music-dance, played since the 7th century"
      },
      {
        "w": "Moribayasa",
        "d": "Guinea, West Africa — victory dance only for those who survived grave illness"
      },
      {
        "w": "Adumu",
        "d": "Maasai, East Africa — competitive jumping dance; highest leaper wins respect"
      },
      {
        "w": "Disco",
        "d": "USA, 1970s — mirror balls and platform shoes; nearly killed rock music"
      },
      {
        "w": "Cumbia",
        "d": "Colombian rhythm that conquered all of Latin America's dance floors"
      },
      {
        "w": "Krump",
        "d": "Explosive LA street dance born from clown dancing; raw emotional release"
      },
      {
        "w": "Vogueing",
        "d": "LGBTQ ballroom runway dance made global by Madonna's 1990 hit"
      },
      {
        "w": "Jive",
        "d": "Fast bouncy swing dance from 1930s US juke joints; pure energy"
      },
      {
        "w": "Zydeco",
        "d": "Louisiana Creole dance to accordion and washboard; sweat-soaked joy"
      },
      {
        "w": "Bhangra",
        "d": "Punjabi harvest dance with shoulder shrugs and arm pumps; festival staple"
      },
      {
        "w": "Legong",
        "d": "Intricate Balinese temple dance performed by young girls in gold costume"
      },
      {
        "w": "Chicago Footwork",
        "d": "Lightning-fast foot patterns from Chicago's underground house scene"
      },
      {
        "w": "Jarabe Tapatio",
        "d": "Mexican hat dance; national symbol where man courts a coy woman"
      },
      {
        "w": "Dandiya",
        "d": "Gujarati stick dance performed at Navratri; two sticks clack in rhythmic patterns"
      },
      {
        "w": "Fandango",
        "d": "Spanish courtship dance in triple time; stamping footwork and castanets"
      }
    ]
  },
  {
    "name": "cocktails & spirits",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Negroni",
        "d": "Gin, Campari, vermouth — a count wanted a stronger Americano, 1919"
      },
      {
        "w": "Absinthe",
        "d": "Up to 90% ABV anise spirit; banned in France 1915–2011, unfairly"
      },
      {
        "w": "Daiquiri",
        "d": "Rum, lime, sugar — Cuban beach town name; Hemingway's Havana staple"
      },
      {
        "w": "Old Fashioned",
        "d": "Whiskey, bitters, sugar — one of the oldest cocktails, Louisville"
      },
      {
        "w": "Mojito",
        "d": "White rum, mint, lime, soda — Havana classic since the 16th century"
      },
      {
        "w": "Martini",
        "d": "Gin and dry vermouth — Bond insists on shaken, purists wince"
      },
      {
        "w": "Margarita",
        "d": "Tequila, lime, triple sec — salt-rimmed Mexican classic, origin disputed"
      },
      {
        "w": "Manhattan",
        "d": "Rye, sweet vermouth, bitters — said to be from New York's club, 1870s"
      },
      {
        "w": "Sazerac",
        "d": "Rye, Peychaud's bitters, absinthe rinse — New Orleans, 1838"
      },
      {
        "w": "Cosmopolitan",
        "d": "Vodka, cranberry, lime, triple sec — made famous by Sex and the City"
      },
      {
        "w": "Mezcal",
        "d": "Mexican agave spirit; smoky because the piñas are roasted underground"
      },
      {
        "w": "Aperol Spritz",
        "d": "Prosecco, Aperol, soda — Italy's aperitivo in a glass; very Instagram"
      },
      {
        "w": "Pisco Sour",
        "d": "Pisco, lime, egg white — Peru and Chile both claim it, endlessly"
      },
      {
        "w": "Dark & Stormy",
        "d": "Dark rum and ginger beer — Bermuda's national drink, Gosling's only"
      },
      {
        "w": "Sidecar",
        "d": "Cognac, triple sec, lemon — Paris 1920s; named for a WWI motorcycle sidecar"
      },
      {
        "w": "Calvados",
        "d": "French apple brandy from Normandy; oak-aged and tastes like autumn"
      },
      {
        "w": "Tom Collins",
        "d": "Gin, lemon, sugar, soda — 1874 NYC; a famous hoax preceded it"
      },
      {
        "w": "Kir Royale",
        "d": "Champagne with blackcurrant cassis — French aperitif, named for a mayor"
      },
      {
        "w": "Whiskey Sour",
        "d": "Bourbon, lemon, sugar, egg white — frothy, citrusy, impossible to ruin"
      },
      {
        "w": "Campari",
        "d": "Bitter Italian liqueur; red from crushed beetles until 2006"
      },
      {
        "w": "Cachaça",
        "d": "Brazilian sugarcane spirit; base of a caipirinha — do not call it rum"
      },
      {
        "w": "Gimlet",
        "d": "Gin and lime cordial — Royal Navy anti-scurvy drink; Chandler loved it"
      },
      {
        "w": "Aperitivo",
        "d": "Italy's pre-dinner ritual — light drinks, snacks; the art of anticipation"
      },
      {
        "w": "Chartreuse",
        "d": "Herbal liqueur; 130 plants, recipe known only to two monks in France"
      },
      {
        "w": "Corpse Reviver",
        "d": "Gin, Cointreau, Lillet, absinthe — 1930s hangover cure in a glass"
      },
      {
        "w": "Negroni Sbagliato",
        "d": "Negroni made with prosecco instead of gin; viral TikTok sensation"
      },
      {
        "w": "Paloma",
        "d": "Tequila and grapefruit soda; more popular in Mexico than the Margarita"
      },
      {
        "w": "Spritz",
        "d": "Prosecco, Aperol, soda over ice; afternoon drink of northern Italy"
      },
      {
        "w": "French 75",
        "d": "Gin and lemon juice topped with champagne; named after a WW1 cannon"
      },
      {
        "w": "Boulevardier",
        "d": "Whiskey Negroni; bourbon, Campari, sweet vermouth — bold American cousin"
      },
      {
        "w": "Mint Julep",
        "d": "Bourbon over crushed ice with fresh mint; Kentucky Derby's signature drink"
      },
      {
        "w": "Last Word",
        "d": "Equal parts gin, lime, Maraschino, Chartreuse; Prohibition-era equal-parts gem"
      },
      {
        "w": "Zombie",
        "d": "Three rums, falernum, absinthe rinse; tiki bar creation so strong it's rationed"
      },
      {
        "w": "Espresso Martini",
        "d": "Vodka shaken with fresh espresso; wakes you up and gets you drunk"
      },
      {
        "w": "Clover Club",
        "d": "Pre-Prohibition gin with raspberry syrup and egg white; silky pink classic"
      }
    ]
  },
  {
    "name": "constellations",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Orion",
        "d": "The Hunter — Betelgeuse, Rigel, and three stars in a perfect belt"
      },
      {
        "w": "Cassiopeia",
        "d": "The Queen — W-shape in the Milky Way; home to supernova remnant Cas A"
      },
      {
        "w": "Scorpius",
        "d": "The Scorpion — red supergiant Antares; summer sky in Northern Hemisphere"
      },
      {
        "w": "Andromeda",
        "d": "The Princess — home to the nearest spiral galaxy to the Milky Way"
      },
      {
        "w": "Ursa Major",
        "d": "The Great Bear — Big Dipper's pointer stars lead straight to Polaris"
      },
      {
        "w": "Leo",
        "d": "The Lion — zodiac star Regulus at heart; the sickle forms its head"
      },
      {
        "w": "Cygnus",
        "d": "The Swan — Deneb and the Northern Cross in a rich Milky Way band"
      },
      {
        "w": "Pegasus",
        "d": "The Winged Horse — Great Square asterism marks the Northern autumn sky"
      },
      {
        "w": "Lyra",
        "d": "The Lyre — brilliant Vega inside; also home to the Ring Nebula M57"
      },
      {
        "w": "Aquila",
        "d": "The Eagle — Altair is a Summer Triangle vertex; bright Milky Way band"
      },
      {
        "w": "Sagittarius",
        "d": "The Archer — aims at the galactic core; black hole lurks behind it"
      },
      {
        "w": "Perseus",
        "d": "The Hero — 'Demon Star' Algol dims every 2.8 days as a companion eclipses it"
      },
      {
        "w": "Gemini",
        "d": "The Twins — Castor and Pollux; Castor is actually six stars in disguise"
      },
      {
        "w": "Boötes",
        "d": "The Herdsman — orange giant Arcturus is one of the sky's brightest stars"
      },
      {
        "w": "Ursa Minor",
        "d": "The Little Bear — Polaris at its tail tip; the sky rotates around it"
      },
      {
        "w": "Centaurus",
        "d": "The Centaur — Alpha Centauri is the closest star system, 4.37 ly away"
      },
      {
        "w": "Hercules",
        "d": "The Hero — large but faint; hosts M13, a globular of 300,000 stars"
      },
      {
        "w": "Taurus",
        "d": "The Bull — Pleiades cluster plus Crab Nebula from the 1054 AD supernova"
      },
      {
        "w": "Draco",
        "d": "The Dragon — coils round Ursa Minor; Thuban was once the pole star"
      },
      {
        "w": "Canis Major",
        "d": "The Great Dog — Sirius, the sky's brightest star, is its nose"
      },
      {
        "w": "Virgo",
        "d": "The Maiden — second-largest constellation; 1,300 galaxies cluster behind it"
      },
      {
        "w": "Ophiuchus",
        "d": "The Serpent Bearer — crosses the ecliptic; astrologers pretend it doesn't"
      },
      {
        "w": "Crux",
        "d": "The Southern Cross — smallest constellation; on four national flags"
      },
      {
        "w": "Corona Borealis",
        "d": "The Northern Crown — delicate arc; T CrB may go nova any time now"
      },
      {
        "w": "Auriga",
        "d": "The Charioteer — pentagon with bright Capella; three Messier clusters inside"
      },
      {
        "w": "Aquarius",
        "d": "The Water-Bearer; ancient constellation linked to floods and Ganymede"
      },
      {
        "w": "Aries",
        "d": "The Ram; first zodiac sign; home to one of the equinox points"
      },
      {
        "w": "Pisces",
        "d": "The Fish; two fish tied together; where the vernal equinox now lies"
      },
      {
        "w": "Corvus",
        "d": "The Crow; small southern quartet of stars in Apollo's sacred bird"
      },
      {
        "w": "Canis Minor",
        "d": "The Little Dog; home to Procyon, eighth-brightest star in the sky"
      },
      {
        "w": "Libra",
        "d": "The Scales; only zodiac constellation representing an object, not a creature"
      },
      {
        "w": "Vela",
        "d": "The Sails; part of the ancient mega-constellation Argo Navis, now split"
      },
      {
        "w": "Lupus",
        "d": "The Wolf; ancient Greeks called it simply the beast; southern sky"
      },
      {
        "w": "Piscis Austrinus",
        "d": "Home to Fomalhaut, called the Loneliest Bright Star in the sky"
      },
      {
        "w": "Cancer",
        "d": "The Crab; faintest zodiac constellation; contains the Beehive Cluster"
      }
    ]
  },
  {
    "name": "critically acclaimed TV",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Mad Men",
        "d": "1960s ad agency drama — sharp suits, sharper dialogue, endless smoking"
      },
      {
        "w": "The Leftovers",
        "d": "2% of the world vanished — this HBO gem explores who's left behind"
      },
      {
        "w": "Dark",
        "d": "German time-travel puzzle spanning three centuries and four families"
      },
      {
        "w": "Fargo",
        "d": "Coen-brothers-style crime anthology — Minnesota nice meets murder"
      },
      {
        "w": "True Detective",
        "d": "McConaughey and Harrelson hunt a killer across Louisiana's bayous"
      },
      {
        "w": "The Americans",
        "d": "Soviet spies living as a normal D.C. family — Cold War in suburbia"
      },
      {
        "w": "Barry",
        "d": "Hitman tries acting classes — dark comedy about identity gone wrong"
      },
      {
        "w": "Halt and Catch Fire",
        "d": "Underrated 80s drama about building PCs and losing yourself in tech"
      },
      {
        "w": "Deadwood",
        "d": "Profane gold-rush Western — South Dakota as a Shakespearean mud pit"
      },
      {
        "w": "Six Feet Under",
        "d": "A funeral home family unraveling — HBO's meditation on life and death"
      },
      {
        "w": "Rectify",
        "d": "Death-row man freed by DNA tries to exist — devastating slow burn"
      },
      {
        "w": "Band of Brothers",
        "d": "Easy Company from D-Day to Germany — WWII stripped of all glamour"
      },
      {
        "w": "Shogun 2024",
        "d": "FX epic — English navigator lost in feudal Japan; every episode grips"
      },
      {
        "w": "The Bear",
        "d": "Fine-dining chaos in a Chicago sandwich shop — kitchen anxiety as art"
      },
      {
        "w": "Atlanta",
        "d": "Donald Glover's surreal rap hustle meets Southern Gothic strangeness"
      },
      {
        "w": "Severance",
        "d": "Work and home memories surgically split — dystopia as a desk job"
      },
      {
        "w": "Slow Horses",
        "d": "Gary Oldman leads MI5's misfits — spy thriller with a hangover vibe"
      },
      {
        "w": "Homeland",
        "d": "CIA officer chases terrorists — Carrie Mathison trusts no one"
      },
      {
        "w": "Boardwalk Empire",
        "d": "Prohibition-era Atlantic City — Buscemi as corrupt city treasurer"
      },
      {
        "w": "The Night Of",
        "d": "One night, one murder, one terrifying ride through NYC's justice system"
      },
      {
        "w": "Justified",
        "d": "US Marshal Raylan Givens shoots first, talks second, in Kentucky"
      },
      {
        "w": "The Shield",
        "d": "Dirty LA cop show — Vic Mackey breaks every rule and your trust"
      },
      {
        "w": "Carnivàle",
        "d": "1930s Dust Bowl — traveling carnival hides a cosmic good-vs-evil war"
      },
      {
        "w": "Industry",
        "d": "Cutthroat London banking grads — ambition, pills, and all-nighters"
      },
      {
        "w": "Pachinko",
        "d": "Korean family saga spanning generations in Japan — Apple TV epic"
      },
      {
        "w": "The Wire",
        "d": "Baltimore crime epic called the greatest TV show ever made; five perfect seasons"
      },
      {
        "w": "Breaking Bad",
        "d": "Chemistry teacher becomes drug kingpin; Walter White's descent is TV gold"
      },
      {
        "w": "The Sopranos",
        "d": "New Jersey mob boss in therapy; invented prestige TV as we know it"
      },
      {
        "w": "Succession",
        "d": "Vicious billionaire family tears itself apart over who gets the throne"
      },
      {
        "w": "Better Call Saul",
        "d": "Breaking Bad prequel that many fans believe surpassed the original"
      },
      {
        "w": "Twin Peaks",
        "d": "Lynch's FBI-in-weird-small-town mystery rewrote what TV could be in 1990"
      },
      {
        "w": "Chernobyl",
        "d": "HBO miniseries on the 1986 nuclear disaster; brutal, precise, unforgettable"
      },
      {
        "w": "Oz",
        "d": "HBO prison drama from 1997; gritty forerunner to every great cable drama"
      },
      {
        "w": "Rome",
        "d": "HBO/BBC epic of Caesar's era; lavish, violent, cancelled too soon"
      },
      {
        "w": "The Thick of It",
        "d": "Blistering British political satire; Malcolm Tucker is TV's greatest swearing tyrant"
      }
    ]
  },
  {
    "name": "heists & great escapes",
    "tags": {
      "a": "human",
      "b": "hist",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Alcatraz Escape",
        "d": "Three convicts vanished from the 'inescapable' island in 1962"
      },
      {
        "w": "D.B. Cooper",
        "d": "Hijacked a plane, took $200k, parachuted out — never found"
      },
      {
        "w": "Great Train Robbery",
        "d": "£2.6 million swiped from a moving train in England, 1963"
      },
      {
        "w": "Hatton Garden",
        "d": "Elderly British crooks drilled into a vault over Easter weekend"
      },
      {
        "w": "Antwerp Diamond Heist",
        "d": "$100M in gems vanished from the 'world's most secure' vault"
      },
      {
        "w": "Brink's-Mat",
        "d": "Gold bullion job at Heathrow that launched a crime empire"
      },
      {
        "w": "Lufthansa Heist",
        "d": "Goodfellas-inspiring $5M airport robbery no one was convicted for"
      },
      {
        "w": "Frank Abagnale",
        "d": "Con man who posed as pilot, doctor, and lawyer — all fake"
      },
      {
        "w": "El Chapo Tunnel",
        "d": "Drug lord escaped maximum security via a mile-long hidden tunnel"
      },
      {
        "w": "Papillon",
        "d": "French prisoner escaped Devil's Island on a raft of coconuts"
      },
      {
        "w": "Gardner Museum Theft",
        "d": "$500M in art stolen overnight from Boston — Vermeer still missing"
      },
      {
        "w": "Baghdad Museum Looting",
        "d": "Thousands of ancient artifacts vanished in Iraq's fall in 2003"
      },
      {
        "w": "Banco Central Burglary",
        "d": "Brazilian gang posed as landscapers, tunneled into a vault — $70M"
      },
      {
        "w": "Dalton Gang",
        "d": "Wild West bank robbers whose final job went spectacularly wrong"
      },
      {
        "w": "Maze Prison Escape",
        "d": "38 IRA prisoners broke out of Britain's most secure jail in 1983"
      },
      {
        "w": "Victor Lustig",
        "d": "Conman sold the Eiffel Tower — twice — to unsuspecting merchants"
      },
      {
        "w": "Paris Museum Heist",
        "d": "Five Picassos stolen from the Musée d'Art Moderne through a window"
      },
      {
        "w": "Ronnie Biggs",
        "d": "Great Train Robbery man who fled to Brazil and hid for decades"
      },
      {
        "w": "Billy the Kid",
        "d": "Outlaw shot his way out of a New Mexico jail, killing two guards"
      },
      {
        "w": "Butch Cassidy",
        "d": "Train-robbing outlaw so famous they made a whole movie about him"
      },
      {
        "w": "John Dillinger",
        "d": "Carved a fake gun from soap, bluffed his way out of an Indiana jail"
      },
      {
        "w": "Berlin Wall Escapes",
        "d": "East Germans crossed the Wall in cars, tunnels, hot air balloons"
      },
      {
        "w": "Societe Generale Fraud",
        "d": "Rogue trader lost €4.9B then blamed the bank for not stopping him"
      },
      {
        "w": "Knightsbridge Heist",
        "d": "Valerio Viccei robbed a London safety deposit center in 1987"
      },
      {
        "w": "Great Postal Robbery",
        "d": "£7M taken from a Glasgow sorting office in 1967 — rarely remembered"
      },
      {
        "w": "The Great Escape",
        "d": "76 Allied POWs fled Stalag Luft III in 1944; basis of classic film"
      },
      {
        "w": "Starbucks Jewel Thief",
        "d": "Doris Payne shoplifted diamond rings from luxury stores for over 40 years"
      },
      {
        "w": "Murph the Surf",
        "d": "Jack Murphy stole the Star of India sapphire from NYC museum in 1964"
      },
      {
        "w": "Kangaroo Gang",
        "d": "Australian shoplifters used specially sewn coats to steal goods across Europe"
      },
      {
        "w": "ABN AMRO Heist",
        "d": "Customer posed as jeweller and spent months charming bank vault access"
      },
      {
        "w": "Securitas Depot",
        "d": "2006 UK cash robbery netted 53 million pounds; largest in British history at time"
      },
      {
        "w": "Spaghetti House Siege",
        "d": "1975 London restaurant hostage crisis turned botched robbery into days-long standoff"
      },
      {
        "w": "Antwerp Train Heist",
        "d": "2007 armed robbery of gold and diamonds from a moving Belgian train"
      },
      {
        "w": "Night Fox",
        "d": "Real-life cat burglar Thomas Crown; Frederic Bourdin impersonated missing children"
      },
      {
        "w": "Museum Heist Vienna",
        "d": "1986 Kunsthistorisches theft of Cellini's Saliera; ransom note called it an art loan"
      }
    ]
  },
  {
    "name": "legendary shipwrecks",
    "tags": {
      "a": "human",
      "b": "hist",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Titanic",
        "d": "Unsinkable luxury liner that sank on its very first voyage"
      },
      {
        "w": "Bismarck",
        "d": "Nazi Germany's pride — sunk just 8 days into its mission"
      },
      {
        "w": "Mary Celeste",
        "d": "Found adrift with crew gone and hot food still on the table"
      },
      {
        "w": "Lusitania",
        "d": "British liner torpedoed in 18 minutes, helping spark WWI outrage"
      },
      {
        "w": "Vasa",
        "d": "Swedish warship sank 20 minutes after launch — now a museum"
      },
      {
        "w": "Edmund Fitzgerald",
        "d": "Ore freighter swallowed by Lake Superior — immortalized in song"
      },
      {
        "w": "Costa Concordia",
        "d": "Cruise ship ran aground after captain made an unauthorized detour"
      },
      {
        "w": "Andrea Doria",
        "d": "Italian liner sank after a collision in fog off Nantucket, 1956"
      },
      {
        "w": "Endurance",
        "d": "Shackleton's ship crushed by Antarctic ice — crew survived anyway"
      },
      {
        "w": "USS Arizona",
        "d": "Battleship sunk at Pearl Harbor; still entombs 900 sailors today"
      },
      {
        "w": "RMS Republic",
        "d": "Edwardian liner sunk in 1909 — first distress call broadcast at sea"
      },
      {
        "w": "Yamato",
        "d": "Japan's mightiest battleship sent on a one-way suicide mission in 1945"
      },
      {
        "w": "Estonia",
        "d": "Ferry sank in a Baltic storm in 1994 — 852 drowned in icy water"
      },
      {
        "w": "HMS Hood",
        "d": "Britain's great battlecruiser exploded after one shell from Bismarck"
      },
      {
        "w": "SS Eastland",
        "d": "Overloaded Chicago boat capsized in the river — 848 dead, calm day"
      },
      {
        "w": "Dona Paz",
        "d": "Philippine ferry collision in 1987 — deadliest peacetime sea disaster"
      },
      {
        "w": "Lancastria",
        "d": "WWII troopship sunk off France — Churchill hid the story for months"
      },
      {
        "w": "MV Sewol",
        "d": "Korean ferry sank in 2014; captain fled as 300 students drowned"
      },
      {
        "w": "General Slocum",
        "d": "New York steamer burned in the East River in 1904 — 1,000 dead"
      },
      {
        "w": "USS Indianapolis",
        "d": "Delivered atom bomb parts, sank — survivors faced days of shark attacks"
      },
      {
        "w": "Birkenhead",
        "d": "1852 troopship: soldiers stood firm so women and children could board"
      },
      {
        "w": "Atocha",
        "d": "Spanish galleon sank in 1622 with 40 tons of gold and silver aboard"
      },
      {
        "w": "Flying Dutchman",
        "d": "Ghost ship doomed to sail forever — an omen dreaded by all sailors"
      },
      {
        "w": "Empress of Ireland",
        "d": "Canadian liner sank in 14 minutes in 1914 — more died than Titanic"
      },
      {
        "w": "Gloucester Wreck",
        "d": "Royal flagship sank in 1682 — future King James II barely escaped"
      },
      {
        "w": "Mary Rose",
        "d": "Henry VIII's flagship sank in 1545; raised in 1982 with crew still aboard"
      },
      {
        "w": "SS Waratah",
        "d": "Australian liner vanished off South Africa in 1909 with 211 aboard; never found"
      },
      {
        "w": "Antikythera Ship",
        "d": "Roman-era cargo ship carried world's first computer; found off Greek island"
      },
      {
        "w": "White Ship",
        "d": "1120 disaster killed Henry I's heir and changed English history forever"
      },
      {
        "w": "RMS Tayleur",
        "d": "Brand-new iron clipper sank on maiden voyage in 1854; compass was off"
      },
      {
        "w": "Batavia",
        "d": "Dutch VOC flagship wrecked 1629; survivors committed spectacular mutiny and massacre"
      },
      {
        "w": "Princess Alice",
        "d": "1878 Thames collision killed 600 Londoners; worst peacetime river disaster"
      },
      {
        "w": "SS Mendi",
        "d": "1917 troopship sank killing 646 South African soldiers; a forgotten war tragedy"
      },
      {
        "w": "Cape Fear Graveyard",
        "d": "North Carolina coast has swallowed more than 5,000 ships over the centuries"
      },
      {
        "w": "Gustloff",
        "d": "Wilhelm Gustloff sinking in 1945 killed 9,000; worst maritime disaster in history"
      }
    ]
  },
  {
    "name": "unsolved mysteries",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Tamam Shud Case",
        "d": "Dead man on an Australian beach with a torn-out book page — still unsolved"
      },
      {
        "w": "Zodiac Killer",
        "d": "Taunted police with coded letters — identity still unknown"
      },
      {
        "w": "Dyatlov Pass",
        "d": "Nine hikers died mysteriously in the Soviet mountains, 1959"
      },
      {
        "w": "Voynich Manuscript",
        "d": "A medieval book written in a language no one can decode"
      },
      {
        "w": "Jack the Ripper",
        "d": "Victorian London's most infamous serial killer, never identified"
      },
      {
        "w": "Nazca Lines",
        "d": "Massive desert drawings only visible from the sky — made by whom?"
      },
      {
        "w": "Wow! Signal",
        "d": "A 72-second radio burst from space — never heard again"
      },
      {
        "w": "Tunguska Event",
        "d": "Massive 1908 Siberian explosion flattened forests — no crater found"
      },
      {
        "w": "Kryptos",
        "d": "CIA's courtyard sculpture with four coded panels — one still unsolved"
      },
      {
        "w": "Cicada 3301",
        "d": "Mysterious internet puzzles appeared in 2012 — no one knows who's behind them"
      },
      {
        "w": "MH370",
        "d": "Malaysia Airlines jet vanished mid-flight in 2014 — no confirmed wreckage"
      },
      {
        "w": "Flannan Isles",
        "d": "Three lighthouse keepers vanished in 1900 — table set, coats left, gone"
      },
      {
        "w": "Beale Ciphers",
        "d": "Three coded papers lead to buried treasure — only one decoded so far"
      },
      {
        "w": "Springfield Three",
        "d": "Three Missouri women vanished overnight in 1992 — no trace ever found"
      },
      {
        "w": "Max Headroom Hack",
        "d": "Unknown pirate hijacked Chicago TV in 1987 with a creepy mask — free"
      },
      {
        "w": "Amber Room",
        "d": "Nazi-looted amber chamber vanished in WWII — worth $500M, still gone"
      },
      {
        "w": "Roanoke Colony",
        "d": "150 English settlers disappeared in 1590 — only 'CROATOAN' carved"
      },
      {
        "w": "Black Dahlia",
        "d": "Hollywood actress found dismembered in 1947 — elaborate crime, no arrest"
      },
      {
        "w": "Skeleton Lake",
        "d": "Hundreds of ancient skeletons in a Himalayan lake — nobody knows why"
      },
      {
        "w": "Antikythera Mechanism",
        "d": "Ancient Greek computer predicted eclipses 2,000 years ago — how?"
      },
      {
        "w": "Green Children",
        "d": "Two green-skinned kids appeared in medieval England from 'underground'"
      },
      {
        "w": "Taman Shud Note",
        "d": "Coded message in the Somerton Man's pocket — five lines, still unbroken"
      },
      {
        "w": "Hinterkaifeck Murders",
        "d": "Bavarian farm family killed in 1922 — killer hid in the barn first"
      },
      {
        "w": "Lost City of Z",
        "d": "Percy Fawcett vanished in the Amazon in 1925 searching for an old city"
      },
      {
        "w": "Overtoun Bridge",
        "d": "Scottish bridge where dozens of dogs have leapt to their deaths — why?"
      },
      {
        "w": "Havana Syndrome",
        "d": "US diplomats struck by mystery brain illness in Cuba; cause still unknown"
      },
      {
        "w": "The Isdal Woman",
        "d": "Charred unidentified body found in Norway 1970; spy theory still unresolved"
      },
      {
        "w": "DB Cooper Landing",
        "d": "Only unsolved air piracy in US history; parachuted with 200k dollars, vanished"
      },
      {
        "w": "Phaistos Disc",
        "d": "Minoan clay disc covered in stamped symbols; no one can read it"
      },
      {
        "w": "Lost Ark",
        "d": "Gold-covered chest from Exodus disappeared from Jerusalem; location a mystery"
      },
      {
        "w": "UVB-76 Buzzer",
        "d": "Russian shortwave station broadcasts cryptic codes 24 hours a day since 1976"
      },
      {
        "w": "Lake Anjikuni",
        "d": "1930 report of entire Inuit village vanishing overnight; evidence disputed"
      },
      {
        "w": "Nine Unknown Men",
        "d": "Legendary secret society said to guard world's most dangerous knowledge"
      },
      {
        "w": "Doris Lessing Effect",
        "d": "Replaced by: The Patomskiy Crater — Siberian limestone mound of unknown origin, found 1949"
      },
      {
        "w": "Patomskiy Crater",
        "d": "Mysterious limestone mound in Siberian taiga; origin debated since its 1949 discovery"
      }
    ]
  },
  {
    "name": "dangerous animals",
    "tags": {
      "a": "geek",
      "b": "sci",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Box Jellyfish",
        "d": "World's most venomous creature — 60 tentacles of instant death"
      },
      {
        "w": "Black Mamba",
        "d": "Africa's fastest snake can chase you at 12 mph — just flee"
      },
      {
        "w": "Hippo",
        "d": "Looks lazy, kills more people in Africa than lions each year"
      },
      {
        "w": "Mosquito",
        "d": "World's deadliest animal — tiny, buzzy, and carries malaria"
      },
      {
        "w": "Saltwater Croc",
        "d": "Planet's largest reptile; lurks in rivers and explodes at prey"
      },
      {
        "w": "Cone Snail",
        "d": "Pretty shell, deadly harpoon — no antivenom exists"
      },
      {
        "w": "Blue-Ringed Octopus",
        "d": "Palm-sized, flashes blue rings, carries enough venom to kill 26 people"
      },
      {
        "w": "Cape Buffalo",
        "d": "'Black Death' — gores predators and holds grudges for hours"
      },
      {
        "w": "Komodo Dragon",
        "d": "Giant lizard with toxic saliva that slowly kills its prey"
      },
      {
        "w": "Poison Dart Frog",
        "d": "Tiny, neon-bright frog with enough poison for 10 men"
      },
      {
        "w": "Inland Taipan",
        "d": "World's most toxic snake — one bite packs venom to kill 100 humans"
      },
      {
        "w": "Puffer Fish",
        "d": "Contains tetrodotoxin — 1,200x deadlier than cyanide; chefs risk it"
      },
      {
        "w": "Stonefish",
        "d": "World's most venomous fish hides as a harmless rock on the seabed"
      },
      {
        "w": "Deathstalker Scorpion",
        "d": "Desert scorpion whose sting kills children without antivenom"
      },
      {
        "w": "Cassowary",
        "d": "Giant flightless bird with a dagger claw that can disembowel you"
      },
      {
        "w": "Great White Shark",
        "d": "3,000 lbs of teeth — detects one drop of blood from miles away"
      },
      {
        "w": "Polar Bear",
        "d": "World's largest land predator — actively hunts humans, no fear at all"
      },
      {
        "w": "Sydney Funnel-Web",
        "d": "Australia's deadliest spider bites through fingernails — kills in hours"
      },
      {
        "w": "Tsetse Fly",
        "d": "Tiny African fly carrying sleeping sickness — kills hundreds of thousands"
      },
      {
        "w": "Bullet Ant",
        "d": "Sting tops every pain scale — feels like being shot for 24 hours"
      },
      {
        "w": "Electric Eel",
        "d": "Delivers 860-volt shocks — enough to knock a horse unconscious"
      },
      {
        "w": "Nile Crocodile",
        "d": "Ambushes prey mid-river; kills more humans than saltwater crocs do"
      },
      {
        "w": "Irukandji Jellyfish",
        "d": "Thumbnail jellyfish whose sting makes victims beg for death"
      },
      {
        "w": "Brazilian Wandering Spider",
        "d": "Hunts actively and hides in banana shipments — world's most venomous"
      },
      {
        "w": "African Lion",
        "d": "Coordinated pride hunters — even elephants fear a hungry mob of lions"
      },
      {
        "w": "King Cobra",
        "d": "World's longest venomous snake; single bite injects enough to kill an elephant"
      },
      {
        "w": "Slow Loris",
        "d": "Cute but venomous primate; toxic bite from elbow glands causes tissue death"
      },
      {
        "w": "Leopard",
        "d": "Stealthiest big cat; responsible for more human attacks in India than any other"
      },
      {
        "w": "Porcupine",
        "d": "Hollow quills detach on contact and work deeper into flesh with movement"
      },
      {
        "w": "Asian Giant Hornet",
        "d": "Dissolves flesh on contact; thirty stings can kill a human; Japan's giant killer"
      },
      {
        "w": "Tiger",
        "d": "Most deadly big cat to humans; hundreds of attacks on people each decade"
      },
      {
        "w": "Goliath Birdeater",
        "d": "World's largest spider; barbed hair spray causes severe eye irritation"
      },
      {
        "w": "Russell's Viper",
        "d": "Responsible for more snakebite deaths than any other species; South Asia's deadliest"
      },
      {
        "w": "Tarantula Hawk",
        "d": "Wasp with the second most painful sting in the world; paralyses tarantulas"
      },
      {
        "w": "Siafu Ant",
        "d": "African driver ant; columns of 50 million ants can strip animals to the bone"
      }
    ]
  },
  {
    "name": "one-hit wonders (music)",
    "tags": {
      "a": "human",
      "b": "music",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Gotye",
        "d": "Somebody That I Used to Know guy — then vanished like one"
      },
      {
        "w": "99 Luftballons",
        "d": "Nena's Cold War anthem about balloons sparking nuclear panic"
      },
      {
        "w": "Tainted Love",
        "d": "Soft Cell's synth-pop heartbreak still plays at every 80s party"
      },
      {
        "w": "Come On Eileen",
        "d": "Dexys Midnight Runners' unstoppable earworm you can't unhear"
      },
      {
        "w": "Chumbawamba",
        "d": "They get knocked down, they get up again — one song, forever"
      },
      {
        "w": "Take On Me",
        "d": "A-ha's pencil-sketch music video made them legends for one song"
      },
      {
        "w": "Right Said Fred",
        "d": "I'm Too Sexy — the most confident one-hit wonder ever recorded"
      },
      {
        "w": "Vanilla Ice",
        "d": "Ice Ice Baby rapper who sampled Queen then quietly disappeared"
      },
      {
        "w": "Macarena",
        "d": "Los del Río's dance-floor command that infected the entire planet"
      },
      {
        "w": "Baha Men",
        "d": "Who Let the Dogs Out — still no answer, still unavoidable at weddings"
      },
      {
        "w": "Aqua",
        "d": "Barbie Girl made them global stars and one lawsuit — then nothing"
      },
      {
        "w": "Falco",
        "d": "Rock Me Amadeus — Austrian rapper used Mozart to top charts once"
      },
      {
        "w": "Hanson",
        "d": "MMMBop ruled 1997 — three brothers, one colossal fluke, then silence"
      },
      {
        "w": "Lou Bega",
        "d": "Mambo No. 5 listed women's names over brass — world danced, then forgot"
      },
      {
        "w": "Wheatus",
        "d": "Teenage Dirtbag — one perfect ode to a loser who loves Iron Maiden"
      },
      {
        "w": "Rupert Holmes",
        "d": "Escape (Pina Colada Song) — asked if you liked them; world said yes once"
      },
      {
        "w": "Len",
        "d": "Steal My Sunshine was a 1999 summer smash — Len never smashed again"
      },
      {
        "w": "Haddaway",
        "d": "What is Love — the neck-bobbing anthem from Night at the Roxbury"
      },
      {
        "w": "Eiffel 65",
        "d": "Blue (Da Ba Dee) — they were blue, they had a house, one song, done"
      },
      {
        "w": "Irene Cara",
        "d": "What a Feeling from Flashdance — Oscar-winning earworm, one peak"
      },
      {
        "w": "Los Lobos",
        "d": "La Bamba in 1987 — a cover that eclipsed their entire career overnight"
      },
      {
        "w": "Doop",
        "d": "A 1994 Dutch novelty hit that conquered Europe then vanished in weeks"
      },
      {
        "w": "Chesney Hawkes",
        "d": "The One and Only — literally one song, and the title says it all"
      },
      {
        "w": "Toni Basil",
        "d": "Mickey — cheerleader chant ruled 1982 then silence forever after"
      },
      {
        "w": "Dexys Midnight Runners",
        "d": "Come On Eileen crew — overalls, fiddles, and one massive hit"
      },
      {
        "w": "Soft Cell",
        "d": "Tainted Love duo; that one synth-pop track outlived their entire career"
      },
      {
        "w": "Nena",
        "d": "German singer whose 99 Red Balloons became a Cold War pop anthem"
      },
      {
        "w": "Norman Greenbaum",
        "d": "Spirit in the Sky was his one miracle; gospel rock from a Jewish atheist"
      },
      {
        "w": "Stiltskin",
        "d": "Inside was only No.1 because of a Levi's ad; still a banger"
      },
      {
        "w": "Anita Ward",
        "d": "Ring My Bell was 1979 funkiest earworm; she never charted again"
      },
      {
        "w": "Carl Douglas",
        "d": "Kung Fu Fighting sold 11 million copies; his follow-up sold almost none"
      },
      {
        "w": "Lipps Inc",
        "d": "Funkytown was 1980 inescapable disco banger; the band faded fast after"
      },
      {
        "w": "The Buggles",
        "d": "Video Killed the Radio Star was the first MTV video ever broadcast in 1981"
      },
      {
        "w": "Carly Rae Jepsen",
        "d": "Call Me Maybe was 2012 most inescapable earworm; career never matched it"
      },
      {
        "w": "Deee-Lite",
        "d": "Groove Is in the Heart was 1990 club euphoria; Lady Miss Kier never returned"
      }
    ]
  },
  {
    "name": "nobel prize winners",
    "tags": {
      "a": "human",
      "b": "hist",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Einstein",
        "d": "Theory of relativity + Nobel = the face of genius itself"
      },
      {
        "w": "Marie Curie",
        "d": "Won two Nobels in two sciences — still a record nobody's matched"
      },
      {
        "w": "Camus",
        "d": "Won Literature at 44 — French-Algerian existentialist, died in a car crash"
      },
      {
        "w": "Malala",
        "d": "Youngest Nobel laureate; shot by Taliban for defending girls' education"
      },
      {
        "w": "MLK",
        "d": "Civil rights giant who dreamed big and won the Peace Prize in 1964"
      },
      {
        "w": "Hemingway",
        "d": "Old Man and the Sea author who won Literature in 1954"
      },
      {
        "w": "Mother Teresa",
        "d": "Calcutta's saint of the poor; 1979 Peace Prize winner"
      },
      {
        "w": "Bob Dylan",
        "d": "First rock musician to win Literature — he took a while to say thanks"
      },
      {
        "w": "Pauling",
        "d": "Only person to win two solo Nobels — Chemistry and Peace, no shared prizes"
      },
      {
        "w": "Aung San Suu Kyi",
        "d": "Myanmar democracy icon who won in 1991 while under house arrest"
      },
      {
        "w": "Gorbachev",
        "d": "Soviet leader who ended the Cold War and won the 1990 Peace Prize"
      },
      {
        "w": "Toni Morrison",
        "d": "Beloved author won Literature in 1993 — first Black woman to do so"
      },
      {
        "w": "Harold Pinter",
        "d": "Playwright's ominous silences earned the 2005 Literature Prize"
      },
      {
        "w": "Feynman",
        "d": "Bongo-playing physicist decoded quantum electrodynamics and made it fun"
      },
      {
        "w": "Elie Wiesel",
        "d": "Holocaust survivor whose memoir Night became testimony — Peace 1986"
      },
      {
        "w": "Solzhenitsyn",
        "d": "Gulag Archipelago author won in 1970 — USSR blocked him from collecting"
      },
      {
        "w": "Rutherford",
        "d": "Split the atom and won Chemistry in 1908 — before that was terrifying"
      },
      {
        "w": "Albert Schweitzer",
        "d": "Philosopher, musician, and jungle doctor — Peace Prize 1952"
      },
      {
        "w": "Andrei Sakharov",
        "d": "Built the H-bomb then became its fiercest critic — Peace Prize 1975"
      },
      {
        "w": "Alexander Fleming",
        "d": "Discovered penicillin by accident — and won Medicine in 1945"
      },
      {
        "w": "Naipaul",
        "d": "V.S. Naipaul won Literature in 2001 — brilliant writer, difficult man"
      },
      {
        "w": "Wangari Maathai",
        "d": "Kenyan activist planted 30 million trees and won Peace Prize in 2004"
      },
      {
        "w": "Ivan Pavlov",
        "d": "Trained dogs to drool on command — won Medicine in 1904, you know why"
      },
      {
        "w": "Kissinger",
        "d": "Won the Peace Prize in 1973 — still one of the most debated choices"
      },
      {
        "w": "Watson & Crick",
        "d": "Decoded the double helix — Medicine prize 1962, controversy included"
      },
      {
        "w": "Nelson Mandela",
        "d": "27 years imprisoned; Nobel Peace Prize 1993 for ending apartheid peacefully"
      },
      {
        "w": "Gabriel Garcia Marquez",
        "d": "Magic realism master; Nobel Literature 1982 for One Hundred Years of Solitude"
      },
      {
        "w": "Niels Bohr",
        "d": "Quantum atom model pioneer; Nobel Physics 1922; helped shape the atomic age"
      },
      {
        "w": "Amartya Sen",
        "d": "Bengali economist; Nobel 1998 for work on famine and human development theory"
      },
      {
        "w": "Doris Lessing",
        "d": "Nobel Literature 2007; feminist epic The Golden Notebook changed women's fiction"
      },
      {
        "w": "Werner Heisenberg",
        "d": "Uncertainty Principle physicist; Nobel 1932; crucial to quantum mechanics foundation"
      },
      {
        "w": "Lech Walesa",
        "d": "Solidarity trade-union leader; Nobel Peace 1983; helped bring down communism"
      },
      {
        "w": "Seamus Heaney",
        "d": "Irish poet; Nobel Literature 1995; greatest Irish poet since Yeats"
      },
      {
        "w": "Malala Yousafzai",
        "d": "Youngest Nobel laureate; shot by Taliban at 15, fought on for girls' education"
      },
      {
        "w": "Peter Higgs",
        "d": "Nobel Physics 2013 for predicting the Higgs boson; confirmed by CERN five decades later"
      }
    ]
  },
  {
    "name": "classical composers",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Bach",
        "d": "Baroque genius who composed 1,000+ works and had 20 children"
      },
      {
        "w": "Mozart",
        "d": "Writing symphonies at age 5 — the original child prodigy"
      },
      {
        "w": "Beethoven",
        "d": "Composed his greatest symphonies after going completely deaf"
      },
      {
        "w": "Chopin",
        "d": "Polish piano poet who poured heartbreak into nocturnes and études"
      },
      {
        "w": "Vivaldi",
        "d": "The Four Seasons priest who wrote 500 concertos in Venice"
      },
      {
        "w": "Tchaikovsky",
        "d": "Swan Lake, Nutcracker, 1812 Overture — one man, endless bangers"
      },
      {
        "w": "Debussy",
        "d": "French impressionist who made pianos sound like rippling water"
      },
      {
        "w": "Wagner",
        "d": "Opera epic-maker whose Ring Cycle runs 15 hours across four nights"
      },
      {
        "w": "Brahms",
        "d": "Romantic heavyweight who burned most of his early work in shame"
      },
      {
        "w": "Handel",
        "d": "Messiah's 'Hallelujah' chorus — the one that makes audiences stand up"
      },
      {
        "w": "Schubert",
        "d": "Died at 31 with 600+ songs written — the most prolific sad genius ever"
      },
      {
        "w": "Mahler",
        "d": "Symphonies so vast they shook halls — each one a life crisis in music"
      },
      {
        "w": "Liszt",
        "d": "Piano rockstar who made women faint — 19th-century celebrity culture"
      },
      {
        "w": "Sibelius",
        "d": "Wrote Finlandia for Finland then stopped composing for 30 years"
      },
      {
        "w": "Monteverdi",
        "d": "Invented opera in 1607 — without him, no Broadway, no Puccini"
      },
      {
        "w": "Satie",
        "d": "Wrote Gymnopédie and ate only white food — the original eccentric"
      },
      {
        "w": "Dvorak",
        "d": "Wrote New World Symphony while homesick for Bohemia in New York"
      },
      {
        "w": "Shostakovich",
        "d": "Wrote symphonies under Stalin — coded protest buried in every bar"
      },
      {
        "w": "Rachmaninoff",
        "d": "Giant hands, giant concertos — every pianist finds them exhausting"
      },
      {
        "w": "Stravinsky",
        "d": "The Rite of Spring caused a real riot at its 1913 Paris premiere"
      },
      {
        "w": "Puccini",
        "d": "La Bohème, Tosca, Butterfly — opera's greatest heartbreaker by miles"
      },
      {
        "w": "Schumann",
        "d": "Romantic composer jumped into the Rhine — never truly recovered"
      },
      {
        "w": "Bruckner",
        "d": "Nine massive symphonies from a devout Austrian obsessed with numbers"
      },
      {
        "w": "Bartok",
        "d": "Collected folk songs on wax cylinders and rewrote what music could be"
      },
      {
        "w": "Ravel",
        "d": "Wrote Bolero as a joke — one melody, 15 minutes — it conquered the world"
      },
      {
        "w": "Purcell",
        "d": "English Baroque master; Dido's Lament is among the most moving pieces ever written"
      },
      {
        "w": "Palestrina",
        "d": "Renaissance polyphony perfected; his motets defined sacred Catholic music for centuries"
      },
      {
        "w": "Saint-Saens",
        "d": "Wrote Carnival of the Animals and Danse Macabre; French showman with serious chops"
      },
      {
        "w": "Faure",
        "d": "French Romantic; his Requiem is unusually gentle, radiant rather than terrifying"
      },
      {
        "w": "Grieg",
        "d": "Norwegian Romantic; In the Hall of the Mountain King is used in every thriller"
      },
      {
        "w": "Elgar",
        "d": "English Romantic; Pomp and Circumstance March is every graduation ceremony worldwide"
      },
      {
        "w": "Telemann",
        "d": "Most prolific Baroque composer ever; wrote more than Bach and Handel combined"
      },
      {
        "w": "Gluck",
        "d": "Reformed opera away from vocal gymnastics toward dramatic truth; influenced Mozart"
      },
      {
        "w": "Couperin",
        "d": "Louis XIV's court harpsichordist; his ornate French style defined an era"
      },
      {
        "w": "Janacek",
        "d": "Czech late-Romantic; opera Jenufa and Sinfonietta are fierce late-career masterworks"
      }
    ]
  },
  {
    "name": "martial arts",
    "tags": {
      "a": "human",
      "b": "sport",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Karate",
        "d": "Japanese striking art famous for boards, belts, and kata forms"
      },
      {
        "w": "Judo",
        "d": "The gentle way — throws and pins, no punches required"
      },
      {
        "w": "Kung Fu",
        "d": "Ancient Chinese art with styles named after animals like the crane"
      },
      {
        "w": "Taekwondo",
        "d": "Korean kicking art — Olympic sport where legs do all the talking"
      },
      {
        "w": "Muay Thai",
        "d": "Thai 'art of eight limbs' — fists, elbows, knees, and shins"
      },
      {
        "w": "BJJ",
        "d": "Brazilian Jiu-Jitsu: make bigger opponents tap out on the ground"
      },
      {
        "w": "Kendo",
        "d": "Japanese sword-fighting with bamboo sticks and full armour"
      },
      {
        "w": "Sambo",
        "d": "Soviet combat sport mixing judo and wrestling — Khabib's secret weapon"
      },
      {
        "w": "Aikido",
        "d": "Japanese art that redirects an attacker's own force against them"
      },
      {
        "w": "Sumo",
        "d": "Push the big guy out of the ring — Japan's ancient national sport"
      },
      {
        "w": "Wrestling",
        "d": "Oldest sport in the world — just two humans trying to throw each other"
      },
      {
        "w": "Boxing",
        "d": "Two fists, a ring, and 12 rounds to sort out your differences"
      },
      {
        "w": "MMA",
        "d": "Mixed martial arts: every style welcome, only one winner leaves upright"
      },
      {
        "w": "Hapkido",
        "d": "Korean joint-lock art that turns wrists into weapons against you"
      },
      {
        "w": "Wing Chun",
        "d": "Compact Chinese style Bruce Lee studied — fast hands, close range"
      },
      {
        "w": "Ninjutsu",
        "d": "Ninja stealth art — disappearing into shadows since feudal Japan"
      },
      {
        "w": "Kickboxing",
        "d": "Punches AND kicks — boxing's more aggressive, leg-happy cousin"
      },
      {
        "w": "Savate",
        "d": "French foot-fighting art where shoes are weapons of choice"
      },
      {
        "w": "Pankration",
        "d": "Ancient Greek brawl combining boxing and wrestling — Olympics 648 BC"
      },
      {
        "w": "Escrima",
        "d": "Filipino stick-and-blade fighting art — weapon-based from day one"
      },
      {
        "w": "Lethwei",
        "d": "Myanmar bare-knuckle combat where headbutts are perfectly legal"
      },
      {
        "w": "Silat",
        "d": "Southeast Asian blade art with hypnotic footwork and lethal precision"
      },
      {
        "w": "Tang Soo Do",
        "d": "Korean striking art that inspired Taekwondo — Chuck Norris's choice"
      },
      {
        "w": "Systema",
        "d": "Russian special-forces art focused on breathing, flow, and silent takedowns"
      },
      {
        "w": "Krav Maga",
        "d": "Israeli military combat system — no rules, just survive"
      },
      {
        "w": "Jeet Kune Do",
        "d": "Bruce Lee's personal hybrid philosophy; absorb what is useful, discard the rest"
      },
      {
        "w": "Catch Wrestling",
        "d": "Victorian-era British grappling; grandparent of modern submission wrestling and MMA"
      },
      {
        "w": "Bando",
        "d": "Burmese martial art emphasising animal techniques; includes weapons and empty hand"
      },
      {
        "w": "Bokator",
        "d": "Ancient Khmer combat art depicted on Angkor Wat temple walls; UNESCO recognised"
      },
      {
        "w": "Vale Tudo",
        "d": "Brazilian anything-goes fighting; brutal forerunner that gave birth to UFC"
      },
      {
        "w": "Pencak Silat",
        "d": "Indonesian art combining strikes, locks, weapons; lightning-fast footwork is hallmark"
      },
      {
        "w": "Dambe",
        "d": "West African boxing where fist is wrapped in rope; Hausa warrior tradition"
      },
      {
        "w": "Lua",
        "d": "Ancient Hawaiian bone-breaking art; once secret, now UNESCO intangible heritage"
      },
      {
        "w": "Sanda",
        "d": "Chinese full-contact kickboxing combining Kung Fu with wrestling takedowns"
      },
      {
        "w": "Gatka",
        "d": "Sikh martial art with wooden or steel swords; performed at religious festivals"
      }
    ]
  },
  {
    "name": "renaissance artists",
    "tags": {
      "a": "human",
      "b": "art",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Leonardo da Vinci",
        "d": "Painted Mona Lisa and designed helicopters 500 years too early"
      },
      {
        "w": "Michelangelo",
        "d": "Spent 4 years on his back painting the Sistine Chapel ceiling"
      },
      {
        "w": "Raphael",
        "d": "Master of harmony who painted The School of Athens at age 25"
      },
      {
        "w": "Botticelli",
        "d": "Birth of Venus guy — made goddesses floating on shells fashionable"
      },
      {
        "w": "Titian",
        "d": "Venetian color king who allegedly lived to 99 and kept painting"
      },
      {
        "w": "Dürer",
        "d": "German master who brought Italian Renaissance ideas north of the Alps"
      },
      {
        "w": "Caravaggio",
        "d": "Dramatic shadow-and-light genius who also stabbed a man to death"
      },
      {
        "w": "Donatello",
        "d": "Sculptor who made David the first free-standing nude since antiquity"
      },
      {
        "w": "Brunelleschi",
        "d": "Engineered Florence's massive cathedral dome — and invented perspective"
      },
      {
        "w": "El Greco",
        "d": "Greek-Spanish painter of elongated mystic figures nobody understood yet"
      },
      {
        "w": "Ghiberti",
        "d": "Doors of Paradise sculptor — beat Brunelleschi in a legendary contest"
      },
      {
        "w": "Masaccio",
        "d": "First Renaissance painter to nail realistic perspective — died at 26"
      },
      {
        "w": "Veronese",
        "d": "Venetian feast painter so lavish the Inquisition interrogated him"
      },
      {
        "w": "Tintoretto",
        "d": "Venice's speed-painter who covered entire ceilings in weeks, not years"
      },
      {
        "w": "Piero della Francesca",
        "d": "Math-obsessed painter who made geometry look holy and serene"
      },
      {
        "w": "Fra Angelico",
        "d": "Monk-painter of glowing angels — the Vatican's favorite fresco man"
      },
      {
        "w": "Pontormo",
        "d": "Florentine Mannerist whose swirling colors gave everyone anxiety in a good way"
      },
      {
        "w": "Cellini",
        "d": "Goldsmith and sculptor who wrote the Renaissance's most boastful autobiography"
      },
      {
        "w": "Giorgione",
        "d": "Mysterious Venetian who invented mood painting — died young, left few works"
      },
      {
        "w": "Perugino",
        "d": "Raphael's teacher — serene landscapes and sweet-faced saints every time"
      },
      {
        "w": "Filippino Lippi",
        "d": "Son of a monk and a nun, painted angels with suspicious ease"
      },
      {
        "w": "Signorelli",
        "d": "Painted twisted apocalyptic nudes that gave Michelangelo ideas for the Sistine"
      },
      {
        "w": "Mantegna",
        "d": "Northern Italian master who foreshortened a dead Christ with startling realism"
      },
      {
        "w": "Verrocchio",
        "d": "Leonardo's teacher — sculptor, painter, goldsmith, and overachiever"
      },
      {
        "w": "Jan van Eyck",
        "d": "Flemish master who made oil paint the new standard for realism"
      },
      {
        "w": "Rogier van der Weyden",
        "d": "Flemish master whose Descent from the Cross devastates with raw grief"
      },
      {
        "w": "Hans Holbein",
        "d": "Tudor court painter; his portrait of Henry VIII defined how we picture the king"
      },
      {
        "w": "Hieronymus Bosch",
        "d": "Netherlandish visionary painted hellscapes 500 years ahead of their time"
      },
      {
        "w": "Lucas Cranach",
        "d": "Luther's visual propagandist; painted the Protestant Reformation into being"
      },
      {
        "w": "Sofonisba Anguissola",
        "d": "First great female Renaissance painter; court portraitist to Philip II of Spain"
      },
      {
        "w": "Rosso Fiorentino",
        "d": "Florentine Mannerist; raw emotional distortion shocked Renaissance viewers"
      },
      {
        "w": "Agnolo Bronzino",
        "d": "Medici court painter; cold jewel-like Mannerist portraits of icy aristocrats"
      },
      {
        "w": "Paolo Uccello",
        "d": "Obsessed with perspective; Battle of San Romano is a chess game in paint"
      },
      {
        "w": "Albrecht Altdorfer",
        "d": "German Danube School pioneer; first true landscape paintings in Western art"
      },
      {
        "w": "Jacopo Sansovino",
        "d": "Florentine sculptor turned Venice's architect; his library defines the Piazza San Marco"
      }
    ]
  },
  {
    "name": "horror icons (film)",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Freddy Krueger",
        "d": "Kills you in your dreams — so don't fall asleep"
      },
      {
        "w": "Pennywise",
        "d": "Stephen King's clown that makes storm drains terrifying forever"
      },
      {
        "w": "Xenomorph",
        "d": "Alien creature with acid blood and a second mouth inside its mouth"
      },
      {
        "w": "Jason Voorhees",
        "d": "Hockey-masked silent killer who never runs but always catches you"
      },
      {
        "w": "Hannibal Lecter",
        "d": "Polite cannibal psychiatrist — scariest villain in a suit ever"
      },
      {
        "w": "Chucky",
        "d": "Good Guy doll with a serial killer's soul and a very sharp knife"
      },
      {
        "w": "Ghostface",
        "d": "Scream's killer who calls to ask your favourite scary movie first"
      },
      {
        "w": "Sadako",
        "d": "The Ring's wet-haired ghost who crawls out of your TV after 7 days"
      },
      {
        "w": "Jigsaw",
        "d": "I want to play a game — and losing means very bad things"
      },
      {
        "w": "Predator",
        "d": "Alien trophy hunter with heat vision and a cloaking device"
      },
      {
        "w": "Michael Myers",
        "d": "Silent Shape in a white mask who makes Halloween permanently unsettling"
      },
      {
        "w": "Dracula",
        "d": "The original vampire — cape, coffin, castle, and terrible table manners"
      },
      {
        "w": "Leatherface",
        "d": "Texas chainsaw-wielding giant who made road trips permanently terrifying"
      },
      {
        "w": "Pinhead",
        "d": "Hellraiser's cenobite with pins for a face and puzzles for a hobby"
      },
      {
        "w": "Frankenstein's Monster",
        "d": "Stitched-together corpse brought to life — neither alive nor truly dead"
      },
      {
        "w": "The Nun",
        "d": "Demonic nun from The Conjuring universe — makes churches frightening"
      },
      {
        "w": "Pazuzu",
        "d": "The Exorcist's spinning-headed demon that made Hollywood rethink pea soup"
      },
      {
        "w": "Candyman",
        "d": "Say his name five times in a mirror — we dare you"
      },
      {
        "w": "Annabelle",
        "d": "Cursed porcelain doll — real paranormal investigators locked her in a case"
      },
      {
        "w": "It (Deadlights)",
        "d": "Pennywise's true cosmic form — seeing it drives you mad instantly"
      },
      {
        "w": "Werewolf",
        "d": "Full moon comes out, mild-mannered man becomes a fur-covered nightmare"
      },
      {
        "w": "The Babadook",
        "d": "Australian grief-monster from a children's pop-up book — creepiest pages ever"
      },
      {
        "w": "Midsommar Bear",
        "d": "Swedish folk-horror finale where someone meets a bear suit badly"
      },
      {
        "w": "Art the Clown",
        "d": "Terrifier's silent mime-clown with the most graphic kills in modern horror"
      },
      {
        "w": "Samara",
        "d": "American Ring remake ghost — seven days, one well, no survivors"
      },
      {
        "w": "Nosferatu",
        "d": "Expressionist 1922 vampire Count Orlok; gaunt, clawed, shadow-on-wall iconic"
      },
      {
        "w": "The Witch Black Phillip",
        "d": "Goat demon from 2015 folk horror; wouldst thou like to live deliciously?"
      },
      {
        "w": "Valak",
        "d": "Demonic nun from The Conjuring universe; became the highest-grossing horror villain"
      },
      {
        "w": "The Thing",
        "d": "Carpenter's shapeshifting Antarctic alien; paranoia-monster of creature horror"
      },
      {
        "w": "Captain Spaulding",
        "d": "Rob Zombie's deranged clown killer; appeared in House of 1000 Corpses"
      },
      {
        "w": "Kayako",
        "d": "Grudge ghost with broken-neck crawl and death rattle; J-horror at its purest"
      },
      {
        "w": "Tall Man",
        "d": "Angus Scrimm's Phantasm villain; silver sphere-wielding undertaker of dreams"
      },
      {
        "w": "Cenobites",
        "d": "Hellraiser's sadomasochist interdimensional beings; pleasure and pain indistinguishable"
      },
      {
        "w": "Pumpkinhead",
        "d": "Stan Winston's 1988 vengeance demon; spectacular practical-effects creature"
      },
      {
        "w": "Xenomorph Queen",
        "d": "Ultimate Aliens villain; egg-laying colossus that dwarfs the standard drone"
      }
    ]
  },
  {
    "name": "breakthroughs in medicine",
    "tags": {
      "a": "geek",
      "b": "sci",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Penicillin",
        "d": "Moldy lab dish accident that went on to save 200 million lives"
      },
      {
        "w": "X-Ray",
        "d": "Röntgen accidentally photographed his wife's hand bones in 1895"
      },
      {
        "w": "Vaccination",
        "d": "Jenner noticed milkmaids didn't get smallpox — and saved the world"
      },
      {
        "w": "Anesthesia",
        "d": "Before this, surgery was just screaming louder and faster"
      },
      {
        "w": "DNA Structure",
        "d": "Watson and Crick's double helix unlocked the code of all life"
      },
      {
        "w": "Insulin",
        "d": "Banting's discovery turned a death sentence into a managed condition"
      },
      {
        "w": "Germ Theory",
        "d": "Pasteur proved tiny invisible organisms — not bad air — cause disease"
      },
      {
        "w": "IVF",
        "d": "Test-tube baby breakthrough; Louise Brown born 1978, now 8M+ people"
      },
      {
        "w": "MRI",
        "d": "Giant magnet that sees inside your body without any radiation"
      },
      {
        "w": "CRISPR",
        "d": "Gene-editing scissors that can rewrite the code of life itself"
      },
      {
        "w": "Aspirin",
        "d": "Willow bark's gift to humanity — headache to heart attack prevention"
      },
      {
        "w": "Blood Transfusion",
        "d": "Karl Landsteiner found blood types in 1901, making safe transfers possible"
      },
      {
        "w": "Chemotherapy",
        "d": "Using poison to fight cancer — crude but still saving millions"
      },
      {
        "w": "Antiseptics",
        "d": "Lister made surgeons wash hands — death rates plummeted overnight"
      },
      {
        "w": "Organ Transplant",
        "d": "First heart transplant 1967; Barnard proved hearts can be swapped"
      },
      {
        "w": "Statins",
        "d": "Cholesterol-lowering drugs that quietly prevent millions of heart attacks yearly"
      },
      {
        "w": "CT Scan",
        "d": "X-ray's smarter sibling — takes 3D slices of your entire body"
      },
      {
        "w": "Stem Cells",
        "d": "Blank-slate cells that could rebuild damaged hearts, brains, and spines"
      },
      {
        "w": "mRNA Vaccine",
        "d": "COVID-19's silver lining — rewired how fast we can make vaccines"
      },
      {
        "w": "Chloroform",
        "d": "Victorian surgery's first knockout punch — works too well, actually"
      },
      {
        "w": "Dialysis",
        "d": "Machine that does your kidneys' job when they've quit on you"
      },
      {
        "w": "Endoscopy",
        "d": "Tiny camera on a tube — no surgery needed to see inside"
      },
      {
        "w": "Antibiotics",
        "d": "Penicillin's whole drug family — bacteria's worst invention nightmare"
      },
      {
        "w": "Human Genome",
        "d": "2003: full map of 3 billion base pairs — instruction manual for humans"
      },
      {
        "w": "Pacemaker",
        "d": "Small electric implant that keeps hearts beating when they forget to"
      },
      {
        "w": "Lithium for Bipolar",
        "d": "John Cade's 1949 discovery turned lithium into psychiatry's first effective drug"
      },
      {
        "w": "Oral Rehydration Therapy",
        "d": "Simple salt-sugar water solution saves millions of cholera and diarrhea deaths yearly"
      },
      {
        "w": "Smallpox Eradication",
        "d": "Only human disease ever eliminated; 1980 WHO declaration ended 3,000 years of terror"
      },
      {
        "w": "Chlorpromazine",
        "d": "First antipsychotic drug; 1952 breakthrough emptied mental asylums around the world"
      },
      {
        "w": "Electrocardiogram",
        "d": "Einthoven's 1903 device made heart rhythm visible; Nobel Prize followed in 1924"
      },
      {
        "w": "Blood Groups",
        "d": "Landsteiner's 1901 ABO discovery made safe transfusions possible; saved millions"
      },
      {
        "w": "Antiretrovirals",
        "d": "Triple-therapy for HIV turned a death sentence into a manageable chronic condition"
      },
      {
        "w": "Beta Blockers",
        "d": "James Black's 1960s heart drugs became one of medicine's greatest lifesavers"
      },
      {
        "w": "Laparoscopy",
        "d": "Keyhole surgery revolution; from massive scars to tiny incisions and same-day discharge"
      },
      {
        "w": "Aspirin Discovery",
        "d": "Bayer synthesised acetylsalicylic acid in 1897; still the world's most used drug"
      }
    ]
  },
  {
    "name": "board games & card games",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Chess",
        "d": "2,500-year-old war simulation still played by millions worldwide"
      },
      {
        "w": "Monopoly",
        "d": "Friendship-destroying property game that takes 4 hours and ends in arguments"
      },
      {
        "w": "Poker",
        "d": "Card game where bluffing is a legitimate and celebrated strategy"
      },
      {
        "w": "Scrabble",
        "d": "Spelling showdown where 'qi' and 'za' are legitimate power moves"
      },
      {
        "w": "Risk",
        "d": "World domination on a board — and yes, it destroys friendships too"
      },
      {
        "w": "Catan",
        "d": "Trade me brick for sheep — the game that made euros cool"
      },
      {
        "w": "Backgammon",
        "d": "Ancient dice-and-strategy race board game, 5,000 years and still fun"
      },
      {
        "w": "Go",
        "d": "Deceptively simple stone-placing game with more moves than atoms in the universe"
      },
      {
        "w": "Mahjong",
        "d": "Chinese tile-matching game and a staple of family gatherings across Asia"
      },
      {
        "w": "Uno",
        "d": "Draw Four card that ends friendships and starts arguments every time"
      },
      {
        "w": "Cluedo",
        "d": "Was it Colonel Mustard in the library with the candlestick?"
      },
      {
        "w": "Battleship",
        "d": "Grid-based naval war — B7 — hit or miss and total silence"
      },
      {
        "w": "Trivial Pursuit",
        "d": "Six colored wedges of smug knowledge-flaunting since 1981"
      },
      {
        "w": "Dominoes",
        "d": "Tile-matching game that gave its name to a Cold War geopolitical theory"
      },
      {
        "w": "Snap",
        "d": "Fastest fingers win — the simplest card game that still causes chaos"
      },
      {
        "w": "Bridge",
        "d": "Sophisticated trick-taking card game that retirees play with ruthless intensity"
      },
      {
        "w": "Checkers",
        "d": "Diagonal jumping game solved by a computer in 2007 — every game a draw"
      },
      {
        "w": "Stratego",
        "d": "Hidden-piece battle game where the Marshal fears only the humble Spy"
      },
      {
        "w": "Ticket to Ride",
        "d": "Collect train cards, claim routes, quietly block your friends' plans"
      },
      {
        "w": "Codenames",
        "d": "Spymaster gives one-word clues linking secret agents — tension guaranteed"
      },
      {
        "w": "Pandemic",
        "d": "Cooperative disease-fighting game that hits different post-2020"
      },
      {
        "w": "Solitaire",
        "d": "Single-player card stacking game that colonized every Windows desktop"
      },
      {
        "w": "Jenga",
        "d": "Pull a block without toppling the tower — pure trembling tension"
      },
      {
        "w": "Connect Four",
        "d": "Drop discs, get four in a row, feel smugly victorious"
      },
      {
        "w": "Taboo",
        "d": "Describe a word without using the five most obvious words for it"
      },
      {
        "w": "Carcassonne",
        "d": "Medieval tile-laying game where you cunningly steal opponents' cities and farms"
      },
      {
        "w": "7 Wonders",
        "d": "Simultaneous card-drafting for 2-7 players; builds ancient civilisations in an hour"
      },
      {
        "w": "Azul",
        "d": "Abstract Portuguese tile game; simple to learn, devastatingly strategic to master"
      },
      {
        "w": "Splendor",
        "d": "Gem-merchant engine-builder; smooth poker-chip tokens make it tactilely irresistible"
      },
      {
        "w": "Magic: The Gathering",
        "d": "First trading card game; spawned a billion-dollar industry and pro esports scene"
      },
      {
        "w": "Dixit",
        "d": "Dreamlike artwork storytelling game; players score by being vaguely right, not exact"
      },
      {
        "w": "Coup",
        "d": "Bluffing card game where everyone lies about which power they hold; brutal fun"
      },
      {
        "w": "Hanabi",
        "d": "Cooperative fireworks card game where you can see everyone's cards except your own"
      },
      {
        "w": "Dominion",
        "d": "First deck-building game; spawned an entire genre in 2008; still endlessly replayable"
      },
      {
        "w": "Hive",
        "d": "Abstract insect chess with no board; tiles are the board; pocket edition travels well"
      }
    ]
  },
  {
    "name": "extinct animals",
    "tags": {
      "a": "geek",
      "b": "sci",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Dodo",
        "d": "Flightless Mauritius bird that trusted humans — once"
      },
      {
        "w": "Mammoth",
        "d": "Shaggy elephant cousin that roamed the Ice Age tundra for millennia"
      },
      {
        "w": "T-Rex",
        "d": "King of the dinosaurs with tiny arms and a catastrophic problem"
      },
      {
        "w": "Megalodon",
        "d": "60-foot prehistoric shark that made great white look like a goldfish"
      },
      {
        "w": "Saber-Tooth Tiger",
        "d": "Ice Age cat with 11-inch fangs — terrifying even by cat standards"
      },
      {
        "w": "Thylacine",
        "d": "Tasmanian tiger — last one died in a zoo in 1936"
      },
      {
        "w": "Passenger Pigeon",
        "d": "Once billions strong; hunted to zero — last one died in 1914"
      },
      {
        "w": "Steller's Sea Cow",
        "d": "Gentle ocean giant discovered in 1741 and hunted to extinction by 1768"
      },
      {
        "w": "Quagga",
        "d": "Half zebra, half horse — South African hybrid gone by the 1880s"
      },
      {
        "w": "Great Auk",
        "d": "Flightless Arctic seabird clubbed to extinction for its feathers"
      },
      {
        "w": "Pterodactyl",
        "d": "Flying reptile that ruled Jurassic skies — not a dinosaur, technically"
      },
      {
        "w": "Irish Elk",
        "d": "Giant deer with 12-foot antlers too wide for the post-Ice-Age forests"
      },
      {
        "w": "Woolly Rhino",
        "d": "Furry Ice Age rhino — cave painters left plenty of portraits behind"
      },
      {
        "w": "Pyrenean Ibex",
        "d": "First extinct animal briefly cloned in 2003 — died minutes later"
      },
      {
        "w": "Moa",
        "d": "Giant New Zealand bird hunted to nothing by arriving Māori within centuries"
      },
      {
        "w": "Dire Wolf",
        "d": "Ice Age pack predator bigger than a grey wolf — Game of Thrones got it right"
      },
      {
        "w": "Aurochs",
        "d": "Wild ancestor of all domestic cattle, extinct since 1627 in Poland"
      },
      {
        "w": "Trilobite",
        "d": "Armored sea creatures that dominated oceans for 270 million years — then gone"
      },
      {
        "w": "Haast's Eagle",
        "d": "New Zealand's massive eagle that hunted moa — wingspan of 3 metres"
      },
      {
        "w": "Baiji Dolphin",
        "d": "Yangtze River dolphin declared functionally extinct in 2006 — boats won"
      },
      {
        "w": "Cave Lion",
        "d": "Largest cat ever to stalk Europe — immortalized in Lascaux cave art"
      },
      {
        "w": "Ground Sloth",
        "d": "Bear-sized sloth that walked the Americas until humans showed up"
      },
      {
        "w": "Triceratops",
        "d": "Three-horned dinosaur that stood its ground against T-Rex — respect"
      },
      {
        "w": "Brontosaurus",
        "d": "Long-necked giant now officially a real genus again after 100 years"
      },
      {
        "w": "Pinta Island Tortoise",
        "d": "Lonesome George was the last one — died 2012, species gone forever"
      },
      {
        "w": "Megatherium",
        "d": "Giant ground sloth the size of an elephant; roamed South America until 10,000 BC"
      },
      {
        "w": "Deinotherium",
        "d": "Prehistoric elephant relative with downward-curving tusks; Africa's ancient giant"
      },
      {
        "w": "Arthropleura",
        "d": "Millipede-like creature 2.5 m long; largest ever land invertebrate; Carboniferous"
      },
      {
        "w": "Glyptodon",
        "d": "VW Beetle-sized armadillo relative; ancient peoples may have sheltered under shells"
      },
      {
        "w": "Rodrigues Solitaire",
        "d": "Dodo's island cousin; flightless Mauritian pigeon hunted to extinction by 1746"
      },
      {
        "w": "Sivatherium",
        "d": "Extinct giraffe relative with massive moose-like antlers; outlasted ice ages"
      },
      {
        "w": "Basilosaurus",
        "d": "Ancient whale-like predator 18 m long; fully aquatic with tiny vestigial legs"
      },
      {
        "w": "Elasmosaurus",
        "d": "Long-necked plesiosaur; neck alone was 7 metres; ocean predator of the Cretaceous"
      },
      {
        "w": "Josephoartigasia",
        "d": "Largest known rodent ever; guinea pig relative the size of a bull; South America"
      },
      {
        "w": "Chalicothere",
        "d": "Horse-relative with gorilla-like knuckle-walking gait; extinct 3.5 million years ago"
      }
    ]
  },
  {
    "name": "spy agencies",
    "tags": {
      "a": "human",
      "b": "hist",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "CIA",
        "d": "America's foreign spy arm — once tried to kill Castro with an exploding cigar"
      },
      {
        "w": "MI6",
        "d": "Britain's secret intelligence service — home of the real James Bonds"
      },
      {
        "w": "KGB",
        "d": "Soviet spy machine that monitored millions and feared almost no one"
      },
      {
        "w": "Mossad",
        "d": "Israel's elite spy agency famous for hunting down Nazi war criminals"
      },
      {
        "w": "FSB",
        "d": "The KGB's successor — still busy, still scary, now with more polonium"
      },
      {
        "w": "NSA",
        "d": "Listens to everyone's calls and emails — Snowden told us so"
      },
      {
        "w": "Stasi",
        "d": "East German secret police that had informants on every street corner"
      },
      {
        "w": "BND",
        "d": "Germany's foreign intelligence service, founded by a former Nazi general"
      },
      {
        "w": "DGSE",
        "d": "France's foreign spy service — once blew up a Greenpeace ship in Auckland"
      },
      {
        "w": "MSS",
        "d": "China's all-seeing spy ministry that rivals the CIA in global reach"
      },
      {
        "w": "MI5",
        "d": "Britain's domestic counter-intelligence — the spy who stays home"
      },
      {
        "w": "RAW",
        "d": "India's foreign spy service, created after the 1962 China border shock"
      },
      {
        "w": "GRU",
        "d": "Russia's military intelligence — Novichok and unit 29155's calling card"
      },
      {
        "w": "ISI",
        "d": "Pakistan's powerful spy service with fingers in Afghan politics for decades"
      },
      {
        "w": "Shin Bet",
        "d": "Israel's internal security service — the one who handles threats inside"
      },
      {
        "w": "ASIS",
        "d": "Australia's foreign spy service — quiet, effective, almost never in the news"
      },
      {
        "w": "SVR",
        "d": "Russia's foreign civilian spy service — the KGB's other successor"
      },
      {
        "w": "Agentura",
        "d": "Tsarist Russia's feared secret police — the original surveillance state"
      },
      {
        "w": "GCHQ",
        "d": "Britain's signals intelligence hub — where codebreakers cracked Enigma"
      },
      {
        "w": "Abwehr",
        "d": "Nazi Germany's military intelligence — full of double agents and incompetence"
      },
      {
        "w": "SAVAK",
        "d": "Iran's feared pre-revolution secret police trained by CIA and Mossad"
      },
      {
        "w": "MID",
        "d": "Cuba's intelligence service — punching way above its weight since 1961"
      },
      {
        "w": "CSIS",
        "d": "Canada's spy service — yes, Canada has spies, and they're very polite"
      },
      {
        "w": "AW",
        "d": "Poland's foreign intelligence — post-communist makeover, NATO-aligned"
      },
      {
        "w": "Chekhist",
        "d": "The old Bolshevik secret police tradition — still a badge of honor in Russia"
      },
      {
        "w": "Deuxieme Bureau",
        "d": "France's historic military intelligence service; active from 1871 through WWII"
      },
      {
        "w": "SD",
        "d": "Nazi SS intelligence arm; Reinhard Heydrich's feared internal security apparatus"
      },
      {
        "w": "SMERSH",
        "d": "Soviet WWII counter-intelligence; name means Death to Spies; Bond villain inspiration"
      },
      {
        "w": "Unit 8200",
        "d": "Israeli elite SIGINT unit; alumni start top cybersecurity firms worldwide"
      },
      {
        "w": "SIS",
        "d": "Britain's MI6 official name; Secret Intelligence Service gathering foreign intelligence"
      },
      {
        "w": "DIA",
        "d": "US Defense Intelligence Agency; military spy arm bigger than CIA by personnel count"
      },
      {
        "w": "DGSI",
        "d": "France's domestic counter-intelligence since 2014; replaced the infamous DST"
      },
      {
        "w": "Mukhabarat",
        "d": "Generic Arabic term for ruthless Arab state intelligence services; feared across region"
      },
      {
        "w": "SDECE",
        "d": "France's Cold War foreign spy service; predecessor to today's DGSE"
      },
      {
        "w": "Section D",
        "d": "Britain's WWII sabotage arm; predecessor of SOE and modern SAS special operations"
      }
    ]
  },
  {
    "name": "revolutions",
    "tags": {
      "a": "human",
      "b": "hist",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "French Revolution",
        "d": "Liberty, equality, fraternity — and a lot of guillotines"
      },
      {
        "w": "American Revolution",
        "d": "Colonists told Britain: no taxation without representation — then fired muskets"
      },
      {
        "w": "Russian Revolution",
        "d": "1917: Tsar out, Lenin in, Romanovs doomed, communism begins"
      },
      {
        "w": "Industrial Revolution",
        "d": "Steam power turned farms into factories and changed everything forever"
      },
      {
        "w": "Cuban Revolution",
        "d": "Castro and Che Guevara toppled Batista in 1959 — beard power"
      },
      {
        "w": "Iranian Revolution",
        "d": "1979: Shah deposed, Khomeini returns, Islamic Republic declared"
      },
      {
        "w": "Haitian Revolution",
        "d": "Only successful slave revolt in history; created the first Black republic"
      },
      {
        "w": "Velvet Revolution",
        "d": "Czechoslovakia's peaceful 1989 protest that ended communism in weeks"
      },
      {
        "w": "Arab Spring",
        "d": "2010–12 wave of uprisings that shook the entire Middle East"
      },
      {
        "w": "Chinese Revolution",
        "d": "Mao's Communist Party took power in 1949; a billion lives changed"
      },
      {
        "w": "Glorious Revolution",
        "d": "1688: England swapped a Catholic king for a Dutch Protestant — bloodlessly"
      },
      {
        "w": "Mexican Revolution",
        "d": "1910–1920: Zapata and Villa fought for land and peasants in a decade of chaos"
      },
      {
        "w": "Meiji Restoration",
        "d": "Japan went from samurai to steamships in one generation — 1868"
      },
      {
        "w": "Bolshevik Revolution",
        "d": "October 1917's armed seizure — Lenin's second act, the decisive one"
      },
      {
        "w": "Greek Revolution",
        "d": "1821: Greeks threw off Ottoman rule after 400 years — Byron approved"
      },
      {
        "w": "Digital Revolution",
        "d": "Personal computers and the internet rewired civilization faster than any army"
      },
      {
        "w": "Portuguese Revolution",
        "d": "1974 Carnation Revolution: soldiers put flowers in gun barrels, regime fell"
      },
      {
        "w": "Romanian Revolution",
        "d": "1989: Ceaușescu gave a speech, got booed, fled, and was shot by Christmas"
      },
      {
        "w": "Xinhai Revolution",
        "d": "1911: China ended 2,000 years of imperial rule in a few months"
      },
      {
        "w": "Scientific Revolution",
        "d": "Copernicus to Newton — humanity learned the universe doesn't revolve around us"
      },
      {
        "w": "Colour Revolutions",
        "d": "Post-Soviet wave of pro-democracy uprisings named after roses, tulips, oranges"
      },
      {
        "w": "Green Revolution",
        "d": "1960s agricultural science fed a billion people who'd have otherwise starved"
      },
      {
        "w": "Philippine Revolution",
        "d": "1986 People Power ousted Marcos — millions in streets, zero bullets fired"
      },
      {
        "w": "Neolithic Revolution",
        "d": "Humans quit wandering, started farming — civilization began 12,000 years ago"
      },
      {
        "w": "Atlantic Revolutions",
        "d": "Late 1700s chain of uprisings linking America, France, and Caribbean together"
      },
      {
        "w": "Tunisian Revolution",
        "d": "Mohamed Bouazizi's self-immolation sparked the Arab Spring's first success story"
      },
      {
        "w": "Carnation Revolution",
        "d": "1974 Portugal; soldiers used flowers not weapons to end 40 years of dictatorship"
      },
      {
        "w": "Orange Revolution",
        "d": "2004 Ukraine; crowds in orange blocked rigged election result in freezing cold"
      },
      {
        "w": "Solidarity Movement",
        "d": "Poland's 1980 trade-union revolution; first crack in the Soviet Eastern Bloc"
      },
      {
        "w": "Storming the Bastille",
        "d": "1789 Paris; symbolic prison attack that became the icon of French Revolution"
      },
      {
        "w": "Paris Commune",
        "d": "1871 radical workers' government held Paris for 72 days before bloody suppression"
      },
      {
        "w": "Tiananmen 1989",
        "d": "Student democracy movement crushed by tanks; Tank Man photo seen around the world"
      },
      {
        "w": "Singing Revolution",
        "d": "Estonia, Latvia, Lithuania regained independence from USSR through mass choir protest"
      },
      {
        "w": "Occupy Wall Street",
        "d": "2011 protest against inequality; We are the 99 percent became a global slogan"
      },
      {
        "w": "Beer Hall Putsch",
        "d": "Hitler's failed 1923 Munich coup; ended in prison where he wrote Mein Kampf"
      }
    ]
  },
  {
    "name": "megastructures & dyson spheres",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Dyson Sphere",
        "d": "Freeman Dyson, 1960 — shell around a star to capture its entire energy output"
      },
      {
        "w": "O'Neill Cylinder",
        "d": "O'Neill, 1974 — counter-rotating cylinders providing artificial gravity in space"
      },
      {
        "w": "Stanford Torus",
        "d": "NASA/Stanford, 1975 — donut-shaped rotating space habitat for ~10,000 people"
      },
      {
        "w": "Space Elevator",
        "d": "Tether from Earth to geostationary orbit — rides up like a cosmic cargo lift"
      },
      {
        "w": "Ringworld",
        "d": "Larry Niven, 1970 — a ring around a star with surface area of millions of Earths"
      },
      {
        "w": "Alderson Disk",
        "d": "Dan Alderson — solar-system-sized disc, star at center, flat habitable surface"
      },
      {
        "w": "Shkadov Thruster",
        "d": "Shkadov, 1987 — giant mirror reflects starlight to slowly steer an entire star"
      },
      {
        "w": "Matrioshka Brain",
        "d": "Nested Dyson shells; each layer uses waste heat to run planet-scale computing"
      },
      {
        "w": "Bernal Sphere",
        "d": "J.D. Bernal, 1929 — hollow spinning sphere housing thousands in a sealed habitat"
      },
      {
        "w": "Orbital Ring",
        "d": "Paul Birch — mass ring in low orbit tethered to Earth; enables cheap launches"
      },
      {
        "w": "Dyson Swarm",
        "d": "Millions of solar collectors around a star — practical cousin of the full sphere"
      },
      {
        "w": "Bishop Ring",
        "d": "Forrest Bishop — a massive open-edged rotating hoop habitat, miles wide"
      },
      {
        "w": "Stellar Engine",
        "d": "Megastructure using a star's output to slowly propel an entire solar system"
      },
      {
        "w": "Caplan Thruster",
        "d": "Matthew Caplan — uses stellar wind and fusion jets to move a star cross-galaxy"
      },
      {
        "w": "Topopolis",
        "d": "A tube millions of km long twisted into a knot; spin it for habitable interior"
      },
      {
        "w": "Globus Cassus",
        "d": "All of Earth's mass rearranged into a thin spinning shell with interior biomes"
      },
      {
        "w": "Banks Orbital",
        "d": "Iain M. Banks — a ring habitat millions of km wide; one step below a Ringworld"
      },
      {
        "w": "Nicoll-Dyson Beam",
        "d": "A Dyson sphere repurposed as a death ray — focus starlight to sterilize planets"
      },
      {
        "w": "Gravitational Lens",
        "d": "Use a star's gravity to focus distant light — a passive, cosmic-scale telescope"
      },
      {
        "w": "Dyson Bubble",
        "d": "Statites held by radiation pressure around a star — no orbital mechanics needed"
      },
      {
        "w": "Jupiter Brain",
        "d": "Convert Jupiter's mass into processors and think at a full planetary scale"
      },
      {
        "w": "Megasail",
        "d": "A planet-sized solar sail pushed by lasers to reach relativistic velocities"
      },
      {
        "w": "Lofstrom Loop",
        "d": "Keith Lofstrom — magnetic launch loop shoots payloads to orbit without rockets"
      },
      {
        "w": "Penrose Sphere",
        "d": "Structure around a spinning black hole harvesting energy from its ergosphere"
      },
      {
        "w": "Murray Dyson Net",
        "d": "Loose mesh of solar collectors around a star — easier than a solid shell"
      },
      {
        "w": "Birch Planet",
        "d": "Theoretical shell-planet built around a black hole; billions of times Earth's surface"
      },
      {
        "w": "McKendree Cylinder",
        "d": "Giant rotating habitat 460 km long; evolved design beyond O'Neill Cylinder"
      },
      {
        "w": "Sunshade Array",
        "d": "Space-based mirrors to reflect sunlight; proposed geoengineering against warming"
      },
      {
        "w": "Weyl Wormhole",
        "d": "Theoretical spacetime tunnel connecting two distant points; a traversable shortcut"
      },
      {
        "w": "Ansible",
        "d": "Faster-than-light communication device from sci-fi; Ursula Le Guin coined the term"
      },
      {
        "w": "Von Neumann Probe",
        "d": "Self-replicating space probe that builds copies; could colonise galaxy in millions of years"
      },
      {
        "w": "Geodesic Dome",
        "d": "Buckminster Fuller's efficient sphere structure; predecessor concept to planetary shells"
      },
      {
        "w": "Seawater Tower",
        "d": "Proposed climate megastructure; km-tall towers to cool Earth's surface artificially"
      },
      {
        "w": "Rho Cassiopeiae",
        "d": "Hypergiant star 100,000 times Sun's luminosity; megastructure candidate target"
      },
      {
        "w": "Dyson Shell",
        "d": "Rigid complete sphere around a star; structurally impossible but endlessly imagined"
      }
    ]
  },
  {
    "name": "cognitive biases",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Anchoring",
        "d": "First number you see sticks — everything after is judged relative to it"
      },
      {
        "w": "Survivorship Bias",
        "d": "Only studying winners and ignoring all the failures that never made it through"
      },
      {
        "w": "Dunning-Kruger Effect",
        "d": "Beginners feel like geniuses; true experts feel like frauds. Both are wrong"
      },
      {
        "w": "Halo Effect",
        "d": "They're attractive, so you assume they're also smart, kind, and trustworthy"
      },
      {
        "w": "Confirmation Bias",
        "d": "You only read news that agrees with you — and feel very well-informed doing it"
      },
      {
        "w": "Sunk Cost Fallacy",
        "d": "Sitting through a terrible movie because you paid for the ticket — don't"
      },
      {
        "w": "Bandwagon Effect",
        "d": "Believing something mainly because millions of other people already believe it"
      },
      {
        "w": "Availability Heuristic",
        "d": "Plane crashes feel common after one in the news; sharks feel inevitable at sea"
      },
      {
        "w": "Framing Effect",
        "d": "'95% fat-free' sells better than '5% fat' — same thing, very different feelings"
      },
      {
        "w": "Hindsight Bias",
        "d": "After the outcome: 'I knew it all along!' No, you really didn't"
      },
      {
        "w": "Baader-Meinhof",
        "d": "Learn a new word, then see it absolutely everywhere — frequency illusion strikes"
      },
      {
        "w": "Ostrich Effect",
        "d": "Avoid checking your portfolio during a crash — if you don't look, it can't hurt"
      },
      {
        "w": "IKEA Effect",
        "d": "Your wobbly DIY shelf feels more precious than a perfect one from the store"
      },
      {
        "w": "Curse of Knowledge",
        "d": "Once you know something, you can't imagine not knowing it — makes teaching hard"
      },
      {
        "w": "Spotlight Effect",
        "d": "You think everyone noticed the stain on your shirt. They didn't. Nobody did"
      },
      {
        "w": "Status Quo Bias",
        "d": "Sticking with the default option because changing anything feels like a loss"
      },
      {
        "w": "False Consensus",
        "d": "Assuming your opinions and habits are way more common than they actually are"
      },
      {
        "w": "Reactance",
        "d": "Tell someone they can't have it and suddenly they desperately need exactly that"
      },
      {
        "w": "Planning Fallacy",
        "d": "You'll finish in a week. It takes three months. Every single time. Every time"
      },
      {
        "w": "Zero-Risk Bias",
        "d": "Eliminating a tiny risk entirely beats halving a massive one — feels better"
      },
      {
        "w": "Negativity Bias",
        "d": "One criticism erases ten compliments — bad news just sticks so much harder"
      },
      {
        "w": "Recency Bias",
        "d": "Last week's crash feels more predictive of the future than the last decade"
      },
      {
        "w": "In-Group Bias",
        "d": "Your team are individuals; everyone else is a faceless, homogeneous blob"
      },
      {
        "w": "Attribution Error",
        "d": "Their failure is character; your failure is circumstance — convenient, no?"
      },
      {
        "w": "Decoy Effect",
        "d": "A useless third option added just to make the pricey option look like a bargain"
      },
      {
        "w": "Gambler's Fallacy",
        "d": "Believing past random events affect future ones; the roulette wheel has no memory"
      },
      {
        "w": "Just-World Fallacy",
        "d": "Assuming good things happen to good people; blames victims for their misfortune"
      },
      {
        "w": "Optimism Bias",
        "d": "Believing you're less likely than others to experience bad events; near-universal"
      },
      {
        "w": "Normalcy Bias",
        "d": "Underestimating disaster likelihood because nothing bad has happened yet; deadly"
      },
      {
        "w": "Illusory Superiority",
        "d": "93% of drivers think they're above average; statistically impossible self-inflation"
      },
      {
        "w": "Bizarreness Effect",
        "d": "Unusual information is remembered better than ordinary information; weird sticks"
      },
      {
        "w": "Cheerleader Effect",
        "d": "People look more attractive in groups than alone; context warps perception"
      },
      {
        "w": "Hot-Hand Fallacy",
        "d": "Believing a winning streak must continue; basketball players are not actually hot"
      },
      {
        "w": "Rosy Retrospection",
        "d": "Remembering past events as better than they actually were; nostalgia is a liar"
      },
      {
        "w": "Telescoping Effect",
        "d": "Recent events feel further away and old events feel closer than they actually were"
      }
    ]
  },
  {
    "name": "chess legends",
    "tags": {
      "a": "human",
      "b": "hist",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Kasparov",
        "d": "Russia, 1985–2000 — youngest undisputed champion; lost to Deep Blue in 1997"
      },
      {
        "w": "Fischer",
        "d": "USA, 1972–75 — won the Cold War 'Match of the Century'; only American champion"
      },
      {
        "w": "Carlsen",
        "d": "Norway, 2013–23 — highest Elo ever (2882); five-time world champion"
      },
      {
        "w": "Tal",
        "d": "USSR, 1960–61 — the 'Magician from Riga'; legendary for wild sacrificial attacks"
      },
      {
        "w": "Capablanca",
        "d": "Cuba, 1921–27 — undefeated 8 years; his endgame still taught as a masterclass"
      },
      {
        "w": "Alekhine",
        "d": "France, 1927–46 — only champion to die holding the title; combinative genius"
      },
      {
        "w": "Botvinnik",
        "d": "USSR, 1948–63 — 'Patriarch of Soviet chess'; won three separate title reigns"
      },
      {
        "w": "Spassky",
        "d": "USSR, 1969–72 — lost the Cold War showdown to Bobby Fischer in Reykjavik"
      },
      {
        "w": "Karpov",
        "d": "USSR, 1975–85 — won title by forfeit when Fischer refused; dominated a decade"
      },
      {
        "w": "Anand",
        "d": "India, 2007–13 — first Asian undisputed champion; five titles; lightning-fast"
      },
      {
        "w": "Steinitz",
        "d": "Austria, 1886–94 — first official world champion; invented positional chess"
      },
      {
        "w": "Lasker",
        "d": "Germany, 1894–1921 — held the title 27 years, the longest reign in history"
      },
      {
        "w": "Euwe",
        "d": "Netherlands, 1935–37 — amateur math professor who briefly toppled Alekhine"
      },
      {
        "w": "Smyslov",
        "d": "USSR, 1957–58 — near-perfect endgame technique and an opera-quality baritone"
      },
      {
        "w": "Petrosian",
        "d": "USSR, 1963–69 — 'Iron Tigran'; turned prophylactic defense into high art"
      },
      {
        "w": "Kramnik",
        "d": "Russia, 2000–07 — dethroned Kasparov with the Berlin Defence; positional titan"
      },
      {
        "w": "Topalov",
        "d": "Bulgaria, 2005–06 — FIDE champion; match vs. Kramnik derailed by 'Toiletgate'"
      },
      {
        "w": "Ponomariov",
        "d": "Ukraine, 2002–04 — became FIDE world champion at just 18 years old"
      },
      {
        "w": "Kasimdzhanov",
        "d": "Uzbekistan, 2004–05 — first Central Asian to hold any world chess title"
      },
      {
        "w": "Khalifman",
        "d": "Russia, 1999 — FIDE knockout champion while Kasparov and Kramnik sat it out"
      },
      {
        "w": "Liren",
        "d": "China, 2023 — defeated Nepomniachtchi in a thrilling tiebreak; world champion"
      },
      {
        "w": "Gukesh",
        "d": "India, 2024 — youngest undisputed world chess champion ever at just 18"
      },
      {
        "w": "Nepomniachtchi",
        "d": "Russia — lost epic world championship matches to both Carlsen and Ding Liren"
      },
      {
        "w": "Morphy",
        "d": "USA, 1850s — 19th-century king; crushed Europe's best then quit chess forever"
      },
      {
        "w": "Polgar",
        "d": "Hungary — Judit Polgar reached world no. 8; greatest female player of all time"
      },
      {
        "w": "Bronstein",
        "d": "Soviet genius who drew the 1951 world championship against Botvinnik; near-miss legend"
      },
      {
        "w": "Nimzowitsch",
        "d": "Hypermodern prophet whose My System rewrote how chess is played and taught"
      },
      {
        "w": "Reti",
        "d": "Hypermodern pioneer who shocked everyone by playing 1.Nf3 against Capablanca"
      },
      {
        "w": "Tarrasch",
        "d": "German classical champion whose dogmatic rules dominated chess for a generation"
      },
      {
        "w": "Pillsbury",
        "d": "American prodigy who won Hastings 1895 ahead of all the world's best; died at 33"
      },
      {
        "w": "Deep Blue",
        "d": "IBM's computer that beat Kasparov in 1997; changed how we see human intelligence"
      },
      {
        "w": "Stockfish",
        "d": "Open-source engine rated 3500+; makes grandmasters look like beginners"
      },
      {
        "w": "AlphaZero",
        "d": "Google's AI taught itself chess in 4 hours then crushed every engine; alien style"
      },
      {
        "w": "Nona Gaprindashvili",
        "d": "First woman to earn grandmaster title; dominated women's chess for two decades"
      },
      {
        "w": "Maxime Vachier-Lagrave",
        "d": "French grandmaster nicknamed MVL; elite top-10 player famous for Najdorf Sicilian"
      }
    ]
  },
  {
    "name": "geology: eras & concepts",
    "tags": {
      "a": "geek",
      "b": "sci",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Jurassic",
        "d": "201–145 Mya — giant sauropods ruled and the first birds took flight"
      },
      {
        "w": "Cambrian",
        "d": "541–485 Mya — explosion of animal body plans; life suddenly got very creative"
      },
      {
        "w": "Pleistocene",
        "d": "2.6M–11,700 ya — woolly mammoths, saber-tooths, and early Homo sapiens on ice"
      },
      {
        "w": "Cretaceous",
        "d": "145–66 Mya — ended when an asteroid ended the non-avian dinosaurs' reign"
      },
      {
        "w": "Devonian",
        "d": "419–359 Mya — 'Age of Fishes'; first forests and first four-limbed vertebrates"
      },
      {
        "w": "Carboniferous",
        "d": "359–299 Mya — vast coal swamps, flying insects, first reptiles on dry land"
      },
      {
        "w": "Triassic",
        "d": "252–201 Mya — first dinosaurs and mammals crawled out of the Permian's ashes"
      },
      {
        "w": "Ordovician",
        "d": "485–443 Mya — sea life diversified wildly; ended in a glacial mass extinction"
      },
      {
        "w": "Silurian",
        "d": "443–419 Mya — jawed fish appeared; plants finally dared to colonize the land"
      },
      {
        "w": "Holocene",
        "d": "11,700 ya–now — warm interglacial spanning all of recorded human civilization"
      },
      {
        "w": "Permian",
        "d": "299–252 Mya — ended with the Great Dying: 96% of marine species wiped out"
      },
      {
        "w": "Paleocene",
        "d": "66–56 Mya — mammals inherited a dinosaur-free world and diversified like mad"
      },
      {
        "w": "Eocene",
        "d": "56–33.9 Mya — warm greenhouse Earth; early whales and horses got their start"
      },
      {
        "w": "Oligocene",
        "d": "33.9–23 Mya — Antarctica iced over; grasslands spread as forests retreated"
      },
      {
        "w": "Miocene",
        "d": "23–5.3 Mya — apes thrived, grasslands exploded, early hominids took first steps"
      },
      {
        "w": "Pliocene",
        "d": "5.3–2.6 Mya — Australopithecus walked upright; Earth cooled toward ice ages"
      },
      {
        "w": "Anthropocene",
        "d": "Proposed from ~1950 — humans reshaped the planet enough to earn their own epoch"
      },
      {
        "w": "Ediacaran",
        "d": "635–541 Mya — first complex multicellular life: soft-bodied Precambrian blobs"
      },
      {
        "w": "Cryogenian",
        "d": "720–635 Mya — Snowball Earth; glaciers reached the equator at least twice"
      },
      {
        "w": "Archean",
        "d": "4–2.5 Bya — first stable continents; stromatolites are life's earliest trace"
      },
      {
        "w": "Hadean",
        "d": "4.6–4 Bya — molten hellscape; no rocks survived; named after the underworld"
      },
      {
        "w": "Proterozoic",
        "d": "2.5 Bya–541 Mya — oxygen built up; first eukaryotes and sexual reproduction"
      },
      {
        "w": "Quaternary",
        "d": "2.6 Mya–now — ice ages, megafauna extinctions, and the entire human story"
      },
      {
        "w": "Neogene",
        "d": "23–2.6 Mya — modern mammals and birds appear; the world starts looking familiar"
      },
      {
        "w": "Paleocene-Eocene",
        "d": "PETM — sudden 5°C spike 56 Mya from massive carbon release; life scrambled"
      },
      {
        "w": "Plate Tectonics",
        "d": "Theory that Earth's crust rides on moving slabs; explains earthquakes and mountains"
      },
      {
        "w": "San Andreas Fault",
        "d": "California's 1,300 km crack where Pacific and North American plates grind past"
      },
      {
        "w": "Mid-Ocean Ridge",
        "d": "Underwater mountain chain where new crust constantly rises from Earth's mantle"
      },
      {
        "w": "Subduction Zone",
        "d": "Where one plate dives under another, generating volcanoes and megathrust earthquakes"
      },
      {
        "w": "Pangaea",
        "d": "Supercontinent that existed 300 million years ago before breaking into today's landmasses"
      },
      {
        "w": "Stratigraphy",
        "d": "Reading rock layers like pages of history; deeper equals older; key geology tool"
      },
      {
        "w": "Unconformity",
        "d": "Gap in geological record where erosion removed millions of years of rock layers"
      },
      {
        "w": "Igneous Rock",
        "d": "Rock formed by cooled magma; granite under continents, basalt under oceans"
      },
      {
        "w": "Metamorphic Rock",
        "d": "Original rock transformed by heat and pressure deep underground; marble from limestone"
      },
      {
        "w": "Moho Discontinuity",
        "d": "Boundary between Earth's crust and mantle; where seismic waves suddenly speed up"
      }
    ]
  },
  {
    "name": "cosmic wonders",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Kepler-442b",
        "d": "Super-Earth ~1,200 ly away; one of the best Earth Similarity Index scores known"
      },
      {
        "w": "TRAPPIST-1e",
        "d": "Rocky habitable-zone planet orbiting an ultra-cool dwarf star ~40 ly away"
      },
      {
        "w": "Sagittarius A*",
        "d": "Milky Way's central supermassive black hole, ~26,000 ly away; imaged in 2022"
      },
      {
        "w": "Betelgeuse",
        "d": "Orion's red giant ~700 ly away; its 2019 'Great Dimming' hinted at a supernova"
      },
      {
        "w": "Proxima Centauri b",
        "d": "Earth-sized planet in the habitable zone of our nearest star, ~4.2 ly away"
      },
      {
        "w": "TOI-700 d",
        "d": "Earth-sized habitable-zone planet found by TESS in 2020, ~100 ly away"
      },
      {
        "w": "Cygnus X-1",
        "d": "First confirmed black hole ~6,000 ly away; spotted as an X-ray source in 1964"
      },
      {
        "w": "Tabby's Star",
        "d": "KIC 8462852 — bizarre irregular dimming ~1,500 ly away; megastructures?"
      },
      {
        "w": "Oumuamua",
        "d": "First confirmed interstellar object through our solar system; spotted in 2017"
      },
      {
        "w": "Io",
        "d": "Jupiter's innermost big moon — most volcanically active body in the solar system"
      },
      {
        "w": "HD 189733b",
        "d": "Hot Jupiter where it rains molten glass at 5,400 mph — a legitimate nightmare"
      },
      {
        "w": "Kepler-16b",
        "d": "Real-life Tatooine — a planet orbiting two suns, just like in Star Wars"
      },
      {
        "w": "Borisov",
        "d": "Second confirmed interstellar visitor (2019) — a comet from another star system"
      },
      {
        "w": "Eta Carinae",
        "d": "Hypermassive star with a twin-lobed nebula hinting at an imminent hypernova"
      },
      {
        "w": "GJ 1214b",
        "d": "Likely a steam-shrouded super-Earth — astronomers call it a 'water world'"
      },
      {
        "w": "M87*",
        "d": "Supermassive black hole in galaxy M87; the first ever directly imaged, in 2019"
      },
      {
        "w": "Titan",
        "d": "Saturn's largest moon — methane lakes, thick atmosphere, possibly life below ice"
      },
      {
        "w": "Enceladus",
        "d": "Saturn's icy moon spraying salty water geysers — a top candidate for alien life"
      },
      {
        "w": "Europa",
        "d": "Jupiter's ice-covered moon with a global ocean that may harbor microbial life"
      },
      {
        "w": "55 Cancri e",
        "d": "Lava super-Earth so scorching its surface may be a flowing ocean of molten rock"
      },
      {
        "w": "PSR B1919+21",
        "d": "First pulsar found (1967); its clockwork signal was briefly mistaken for aliens"
      },
      {
        "w": "Kepler-452b",
        "d": "NASA's 'Earth cousin' — similar size and orbit to ours, ~1.5 billion years older"
      },
      {
        "w": "Wolf 359",
        "d": "Tiny red dwarf 7.8 ly away; famous as the site of a catastrophic Borg battle"
      },
      {
        "w": "WASP-12b",
        "d": "Hot Jupiter being slowly devoured by its own star — gone in ~3 million years"
      },
      {
        "w": "TOI-1452 b",
        "d": "Ocean world candidate ~100 ly away; may be almost entirely deep liquid water"
      },
      {
        "w": "Pillars of Creation",
        "d": "Eagle Nebula gas columns where new stars are born; Hubble's most iconic image"
      },
      {
        "w": "Andromeda Galaxy",
        "d": "Nearest major galaxy; will collide with Milky Way in 4.5 billion years"
      },
      {
        "w": "Halley's Comet",
        "d": "Most famous comet; returns every 75 years; seen at Battle of Hastings in 1066"
      },
      {
        "w": "Crab Nebula",
        "d": "Remnant of 1054 supernova; Chinese astronomers recorded it; pulsar at its heart"
      },
      {
        "w": "Orion Nebula",
        "d": "Stellar nursery 1,344 light-years away; visible to naked eye as fuzzy sword star"
      },
      {
        "w": "Cosmic Microwave Background",
        "d": "Afterglow of the Big Bang; faint radiation permeating the entire observable universe"
      },
      {
        "w": "Gamma-Ray Burst",
        "d": "Most energetic explosions in universe; outshine entire galaxies for seconds"
      },
      {
        "w": "Magnetar",
        "d": "Neutron star with insanely powerful magnetic field; strongest known in the universe"
      },
      {
        "w": "Quasar",
        "d": "Supermassive black hole actively feeding; brightest persistent objects in the cosmos"
      },
      {
        "w": "Dark Matter Web",
        "d": "Invisible cosmic scaffold of dark matter connecting galaxy clusters across billions of light-years"
      }
    ]
  },
  {
    "name": "ancient empires",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Ottoman",
        "d": "Anatolia, 13th–20th c. — ruled three continents from Constantinople at its peak"
      },
      {
        "w": "Byzantine",
        "d": "E. Mediterranean, 4th–15th c. — Rome's heir; fell with Constantinople in 1453"
      },
      {
        "w": "Mughal",
        "d": "India, 16th–19th c. — built the Taj Mahal; unified most of the subcontinent"
      },
      {
        "w": "Khmer",
        "d": "SE Asia, 9th–15th c. — built Angkor Wat; ruled much of mainland Southeast Asia"
      },
      {
        "w": "Inca",
        "d": "Andes, 13th–16th c. — largest pre-Columbian empire; 40,000 km of mountain roads"
      },
      {
        "w": "Achaemenid",
        "d": "Persia, 6th–4th c. BC — first world empire; Egypt to India under Cyrus the Great"
      },
      {
        "w": "Song Dynasty",
        "d": "China, 10th–13th c. — invented paper money and deployed gunpowder in warfare"
      },
      {
        "w": "Mali",
        "d": "W. Africa, 13th–17th c. — Mansa Musa's 1324 pilgrimage was the richest trip ever"
      },
      {
        "w": "Carthage",
        "d": "N. Africa, 9th–2nd c. BC — Phoenician sea empire that battled Rome for survival"
      },
      {
        "w": "Gupta",
        "d": "India, 4th–6th c. — 'Golden Age': zero invented, astronomy and arts thrived"
      },
      {
        "w": "Mongol",
        "d": "Eurasia, 13th–14th c. — largest contiguous land empire ever; Genghis Khan's gift"
      },
      {
        "w": "Roman",
        "d": "Mediterranean, 1st c. BC–5th c. — roads, law, aqueducts from Scotland to Persia"
      },
      {
        "w": "Han Dynasty",
        "d": "China, 206 BC–220 AD — opened the Silk Road; Chinese still call themselves 'Han'"
      },
      {
        "w": "Sassanid",
        "d": "Persia, 3rd–7th c. — Rome's fiercest rival; fell when Islam swept out of Arabia"
      },
      {
        "w": "Assyrian",
        "d": "Mesopotamia, 10th–7th c. BC — first to use iron weapons and terror as strategy"
      },
      {
        "w": "Aztec",
        "d": "Mexico, 14th–16th c. — built Tenochtitlan on a lake; fed the sun god daily"
      },
      {
        "w": "Umayyad",
        "d": "7th–8th c. — caliphate stretching from Spain to Sindh in just a few decades"
      },
      {
        "w": "Maurya",
        "d": "India, 4th–2nd c. BC — Ashoka unified India then renounced war for Buddhism"
      },
      {
        "w": "Macedonian",
        "d": "4th c. BC — Alexander conquered to the edge of India by age 30 and then some"
      },
      {
        "w": "Abbasid",
        "d": "8th–13th c. — 'Golden Age of Islam'; Baghdad was the world's greatest city"
      },
      {
        "w": "Ming Dynasty",
        "d": "China, 14th–17th c. — rebuilt the Great Wall and sent treasure fleets to Africa"
      },
      {
        "w": "Songhai",
        "d": "W. Africa, 15th–16th c. — Timbuktu was a global Islamic scholarship center"
      },
      {
        "w": "Seleucid",
        "d": "Near East, 4th–2nd c. BC — Alexander's biggest heir state; Greek meets Persian"
      },
      {
        "w": "Qin Dynasty",
        "d": "China, 221–206 BC — first unified empire; standardized writing, weights, laws"
      },
      {
        "w": "Median",
        "d": "Persia, 7th–6th c. BC — first Iranian empire; helped topple the feared Assyrians"
      },
      {
        "w": "Egyptian Empire",
        "d": "New Kingdom pharaohs ruled from Nubia to Syria; 3,000 years of unbroken civilization"
      },
      {
        "w": "Zhou Dynasty",
        "d": "Longest-lasting Chinese dynasty; 800 years of feudal rule; Confucius lived in this era"
      },
      {
        "w": "Parthian Empire",
        "d": "Iranian dynasty that halted Roman expansion east for 500 years of constant war"
      },
      {
        "w": "Kushan Empire",
        "d": "Buddhist Central Asian empire bridging Rome and China along the Silk Road"
      },
      {
        "w": "Vijayanagara",
        "d": "Last great Hindu empire of South India; capital Hampi stunned Portuguese visitors"
      },
      {
        "w": "Toltec Empire",
        "d": "Mesoamerican precursor to the Aztecs; pyramid city Tula had warrior columns"
      },
      {
        "w": "Samanid Empire",
        "d": "Persian Renaissance dynasty that made Bukhara the Islamic world's cultural capital"
      },
      {
        "w": "Khwarazmian Empire",
        "d": "Powerful Central Asian state annihilated by Genghis Khan after insulting his envoy"
      },
      {
        "w": "Tibetan Empire",
        "d": "7th to 9th century Tibet briefly occupied Tang China's capital Chang'an; major power"
      },
      {
        "w": "Aksumite Empire",
        "d": "East African Christian empire; traded with Rome, Persia, India; built famous obelisks"
      }
    ]
  },
  {
    "name": "programming languages",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Haskell",
        "d": "1990 — purely functional; if it compiles, it probably works — used in finance"
      },
      {
        "w": "Rust",
        "d": "Mozilla, 2010 — memory safety without a garbage collector; C++ but less haunted"
      },
      {
        "w": "COBOL",
        "d": "Grace Hopper, 1959 — older than most programmers; still runs global banking"
      },
      {
        "w": "Lisp",
        "d": "John McCarthy, 1958 — AI pioneer; parentheses all the way down; invented GC"
      },
      {
        "w": "Fortran",
        "d": "IBM, 1957 — first high-level language; still crunching numbers in supercomputers"
      },
      {
        "w": "Erlang",
        "d": "Ericsson, 1986 — built for fault tolerance; quietly powers WhatsApp for billions"
      },
      {
        "w": "Prolog",
        "d": "Colmerauer, 1972 — logic programming; tell it the rules, it finds the answers"
      },
      {
        "w": "Ada",
        "d": "US DoD, 1980 — safety-critical systems; named after Lovelace; flies in warplanes"
      },
      {
        "w": "Smalltalk",
        "d": "Xerox PARC, 1972 — invented OOP and the desktop GUI; everything since is a remix"
      },
      {
        "w": "APL",
        "d": "Iverson, 1966 — exotic symbol arrays; ancestor of NumPy-style computing"
      },
      {
        "w": "Simula",
        "d": "Dahl & Nygaard, 1967 — invented classes and objects; OOP's forgotten grandfather"
      },
      {
        "w": "ALGOL",
        "d": "1958 — introduced block scope; every procedural language that followed owes it"
      },
      {
        "w": "Forth",
        "d": "Chuck Moore, 1970 — stack-based, near-zero overhead; still lives in spacecraft"
      },
      {
        "w": "Tcl",
        "d": "Ousterhout, 1988 — scripting glue language; Tk gave it a cross-platform GUI"
      },
      {
        "w": "Eiffel",
        "d": "Meyer, 1985 — invented Design by Contract; software correctness as a religion"
      },
      {
        "w": "ML",
        "d": "Robin Milner, 1973 — invented type inference; parent of OCaml, F#, and Haskell"
      },
      {
        "w": "Zig",
        "d": "Andrew Kelley, 2016 — challenging C with better safety and compile-time power"
      },
      {
        "w": "Nim",
        "d": "Andreas Rumpf, 2008 — Python-like syntax, C-like speed, compiles to C or JS"
      },
      {
        "w": "SNOBOL",
        "d": "Bell Labs, 1962 — pioneered string pattern matching; a distant ancestor of regex"
      },
      {
        "w": "PL/I",
        "d": "IBM, 1964 — tried to replace both COBOL and Fortran at once; nobody was happy"
      },
      {
        "w": "Icon",
        "d": "Griswold, 1977 — generator-based language that seeded Python's iterator design"
      },
      {
        "w": "Self",
        "d": "Ungar & Smith, 1987 — prototype OOP; directly inspired JavaScript's object model"
      },
      {
        "w": "J",
        "d": "Iverson & Hui, 1990 — ASCII heir to APL; write a full algorithm in 5 characters"
      },
      {
        "w": "Oberon",
        "d": "Niklaus Wirth, 1987 — lean Pascal successor; its minimalism influenced Go"
      },
      {
        "w": "Rebol",
        "d": "Sassenrath, 1997 — tiny dialect-driven language with a devoted cult following"
      },
      {
        "w": "Python",
        "d": "Most popular language on Earth; readable syntax made it the language of AI and data"
      },
      {
        "w": "JavaScript",
        "d": "Created in 10 days in 1995; now runs the entire interactive web and Node backends"
      },
      {
        "w": "C",
        "d": "1972 systems language still powering operating systems, compilers, and embedded devices"
      },
      {
        "w": "Go",
        "d": "Google's 2009 language for concurrent servers; fast compilation, simple syntax, goroutines"
      },
      {
        "w": "Julia",
        "d": "Designed for scientific computing; runs at C speed with Python-like expressiveness"
      },
      {
        "w": "TypeScript",
        "d": "JavaScript with types; Microsoft's addition saved countless production bugs worldwide"
      },
      {
        "w": "Kotlin",
        "d": "JetBrains' 2011 language replaced Java as Android's preferred development language"
      },
      {
        "w": "Elixir",
        "d": "Erlang VM language with Ruby syntax; powers Discord real-time messaging at huge scale"
      },
      {
        "w": "Crystal",
        "d": "Ruby-syntax language that compiles to native code; combines elegance with raw speed"
      },
      {
        "w": "Clojure",
        "d": "Modern Lisp on the JVM; immutable data and REPL-driven development for brave souls"
      }
    ]
  },
  {
    "name": "great unsolved problems",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Riemann Hypothesis",
        "d": "All non-trivial zeta zeros sit on Re(s)=½ — $1M prize, still unclaimed"
      },
      {
        "w": "P vs NP",
        "d": "Can every problem that's quick to verify also be quick to solve? Probably not"
      },
      {
        "w": "Goldbach's Conjecture",
        "d": "Every even integer > 2 is the sum of two primes — checked to 4×10^18, unproven"
      },
      {
        "w": "Twin Prime Conjecture",
        "d": "Infinitely many prime pairs differing by 2 (like 11 & 13)? Almost certainly yes"
      },
      {
        "w": "Collatz Conjecture",
        "d": "3n+1 or n/2 repeatedly — every number eventually hits 1. Nobody can prove it"
      },
      {
        "w": "Birch–Swinnerton-Dyer",
        "d": "Predicts rational solutions on elliptic curves from their L-function — unproven"
      },
      {
        "w": "Navier-Stokes",
        "d": "Do smooth fluid-flow solutions always exist in 3D? Water may hide the answer"
      },
      {
        "w": "Hodge Conjecture",
        "d": "Certain topological cycles on complex varieties are secretly algebraic — maybe"
      },
      {
        "w": "Yang-Mills",
        "d": "Does quantum Yang-Mills theory have a positive mass gap in 3D? Open since 1954"
      },
      {
        "w": "ABC Conjecture",
        "d": "Links prime factors of a+b=c — Mochizuki claims a proof; experts still argue"
      },
      {
        "w": "Legendre's Conjecture",
        "d": "Is there always a prime between n² and (n+1)²? Probably yes — proven? Nope"
      },
      {
        "w": "Odd Perfect Number",
        "d": "Every known perfect number is even — does an odd one exist? Sought for centuries"
      },
      {
        "w": "Moving Sofa Problem",
        "d": "What's the largest sofa shape you can turn around a hallway corner? Still open"
      },
      {
        "w": "Perfect Cuboid",
        "d": "A box with all edges, face diagonals, and space diagonal as integers — elusive"
      },
      {
        "w": "Kissing Number",
        "d": "How many equal spheres can touch one sphere in high dimensions? Open past dim 4"
      },
      {
        "w": "Chromatic Number",
        "d": "What's the minimum colors needed to 4-color a planar map? Proved — barely"
      },
      {
        "w": "Frankl's Conjecture",
        "d": "In a union-closed set family, some element appears in at least half the sets"
      },
      {
        "w": "Langlands Program",
        "d": "Grand unified theory linking number theory, geometry, and representation theory"
      },
      {
        "w": "Scholz's Conjecture",
        "d": "Shortest addition chain for 2^n−1 is at most n−1 more steps than for 2^n"
      },
      {
        "w": "Schanuel's Conjecture",
        "d": "Pins down algebraic independence of exponentials — unproven since 1966"
      },
      {
        "w": "Zauner's Conjecture",
        "d": "Do symmetric quantum measurements (SIC-POVMs) exist in every dimension?"
      },
      {
        "w": "Happy Ending Problem",
        "d": "How many points guarantee a convex n-gon? Known for small n; formula eludes"
      },
      {
        "w": "Landau's Problems",
        "d": "Four ancient prime conjectures from 1912 — all four remain wide open today"
      },
      {
        "w": "Divisor Bound",
        "d": "Sharp estimates on how many divisors a number can have — ties to the Riemann"
      },
      {
        "w": "Kurepa's Conjecture",
        "d": "Left factorial !p is never divisible by prime p — checked far, still unproven"
      },
      {
        "w": "Dark Matter",
        "d": "85% of universe's mass is invisible stuff we can detect but cannot see or explain"
      },
      {
        "w": "Dark Energy",
        "d": "Mystery force accelerating cosmic expansion; constitutes 68% of the universe's energy"
      },
      {
        "w": "Quantum Gravity",
        "d": "Grand unification of quantum mechanics and general relativity; physics' holy grail"
      },
      {
        "w": "Baryon Asymmetry",
        "d": "Why did the Big Bang create more matter than antimatter? We shouldn't exist"
      },
      {
        "w": "Consciousness",
        "d": "How and why does subjective experience arise from physical brain processes?"
      },
      {
        "w": "Turbulence",
        "d": "Feynman called it the most important unsolved problem in classical physics"
      },
      {
        "w": "High-Temp Superconductivity",
        "d": "Why some materials conduct with zero resistance at high temperatures is unexplained"
      },
      {
        "w": "Fine-Tuned Universe",
        "d": "Physical constants are impossibly precise for life; why are they exactly this way?"
      },
      {
        "w": "Arrow of Time",
        "d": "Physics equations work both ways in time, yet time only flows forward — why?"
      },
      {
        "w": "Origin of Life",
        "d": "Exactly how did chemistry become biology on early Earth? No agreed answer exists"
      }
    ]
  },
  {
    "name": "language families",
    "tags": {
      "a": "geek",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Indo-European",
        "d": "~3.2B speakers — English, Spanish, Hindi, Russian, Persian; one ancient ancestor"
      },
      {
        "w": "Sino-Tibetan",
        "d": "~1.4B speakers — Mandarin, Cantonese, Burmese; dominant in East and SE Asia"
      },
      {
        "w": "Austronesian",
        "d": "~380M speakers — Malay, Tagalog, Malagasy; spread across half the world's oceans"
      },
      {
        "w": "Afroasiatic",
        "d": "~500M speakers — Arabic, Hebrew, Amharic, Hausa; spans N. Africa & Middle East"
      },
      {
        "w": "Niger-Congo",
        "d": "~700M speakers — Swahili, Yoruba, Zulu; largest family by number of languages"
      },
      {
        "w": "Dravidian",
        "d": "~250M speakers — Tamil, Telugu, Kannada, Malayalam; predates Indo-Aryan in India"
      },
      {
        "w": "Turkic",
        "d": "~200M speakers — Turkish, Uzbek, Kazakh, Uyghur; from Istanbul to Xinjiang"
      },
      {
        "w": "Uralic",
        "d": "~25M speakers — Finnish, Estonian, Hungarian; oddly out of place in Europe"
      },
      {
        "w": "Japonic",
        "d": "~128M speakers — Japanese and Ryukyuan languages; Japan & the Ryukyu Islands"
      },
      {
        "w": "Koreanic",
        "d": "~80M speakers — Korean and Jeju; a near-isolate family on the Korean Peninsula"
      },
      {
        "w": "Nilo-Saharan",
        "d": "~50M speakers — Luo, Kanuri, Songhay; spans East and Central Africa"
      },
      {
        "w": "Kartvelian",
        "d": "~5M speakers — Georgian and kin; ancient, unique script, fiercely independent"
      },
      {
        "w": "Tai-Kadai",
        "d": "~93M speakers — Thai, Lao, Zhuang; tonal languages of Southeast Asia"
      },
      {
        "w": "Austroasiatic",
        "d": "~117M speakers — Khmer, Vietnamese, Munda; ancient roots in South & SE Asia"
      },
      {
        "w": "Mongolic",
        "d": "~6M speakers — Mongolian and Buryat; the tongue of the steppe and Genghis Khan"
      },
      {
        "w": "Trans-New Guinea",
        "d": "Papua New Guinea — ~800 languages on one island; most diverse place on Earth"
      },
      {
        "w": "Quechuan",
        "d": "~8M speakers — the voice of the Inca Empire, still alive across the Andes today"
      },
      {
        "w": "Na-Dene",
        "d": "~200K speakers — includes Navajo, the most spoken indigenous language in the US"
      },
      {
        "w": "Mande",
        "d": "~20M speakers — Mandinka, Bambara; West Africa's deep pre-colonial tongue"
      },
      {
        "w": "Hmong-Mien",
        "d": "~4M speakers — southern China and SE Asia; classification still sparks debate"
      },
      {
        "w": "Eskimo-Aleut",
        "d": "~10K speakers — polysynthetic Arctic languages; yes, many words for snow"
      },
      {
        "w": "Isolate: Basque",
        "d": "~750K speakers — related to nothing on Earth; every linguist's favorite mystery"
      },
      {
        "w": "Isolate: Sumerian",
        "d": "Humanity's first written language — died ~2000 BC with zero known relatives"
      },
      {
        "w": "Semitic",
        "d": "Sub-branch of Afroasiatic — Arabic, Hebrew, Amharic; right-to-left scripts"
      },
      {
        "w": "Creole",
        "d": "Born when languages collide — Haitian Creole's 12M speakers call it their own"
      },
      {
        "w": "Tungusic",
        "d": "Siberian family including Evenki and Manchu; once ruled China, now endangered"
      },
      {
        "w": "Yeniseian",
        "d": "Siberian isolate family; only known relative of Na-Dene across the Bering Strait"
      },
      {
        "w": "Pama-Nyungan",
        "d": "Covers 90% of Australia; includes most Aboriginal languages; unique tonal systems"
      },
      {
        "w": "Ainu",
        "d": "Language isolate of Japan's Indigenous Ainu people; critically endangered today"
      },
      {
        "w": "Tibeto-Burman",
        "d": "Branch of Sino-Tibetan; covers Tibetan, Burmese, and hundreds of Himalayan languages"
      },
      {
        "w": "Bantu",
        "d": "Largest sub-branch of Niger-Congo; Swahili, Zulu, Xhosa; spread across sub-Saharan Africa"
      },
      {
        "w": "Hurro-Urartian",
        "d": "Extinct ancient Near East family; Hurrian and Urartian were once major civilisation tongues"
      },
      {
        "w": "Proto-Indo-European",
        "d": "Reconstructed ancestor of half the world's speakers; homeland still debated by linguists"
      },
      {
        "w": "Sign Languages",
        "d": "Independent visual language families; ASL and BSL are mutually unintelligible sister systems"
      },
      {
        "w": "Nakh-Dagestanian",
        "d": "Caucasus family including Chechen and Avar; among world's most complex grammars"
      }
    ]
  },
  {
    "name": "famous experiments",
    "tags": {
      "a": "geek",
      "b": "hist",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Schrödinger's Cat",
        "d": "Schrödinger, 1935 — quantum superposition makes a cat alive AND dead at once"
      },
      {
        "w": "Double Slit",
        "d": "Thomas Young, 1801 — light is a wave; later, particles are too. Physics weeps"
      },
      {
        "w": "Pavlov's Dog",
        "d": "Pavlov, 1890s — ring a bell enough times and dogs drool on cue. So do humans"
      },
      {
        "w": "Stanford Prison",
        "d": "Zimbardo, 1971 — students became brutal guards in days; ethics boards were born"
      },
      {
        "w": "Milgram Experiment",
        "d": "Milgram, 1961 — most people zap strangers if an authority figure says to"
      },
      {
        "w": "Michelson-Morley",
        "d": "1887 — found no ether carrying light waves; paved the way for relativity"
      },
      {
        "w": "Rutherford's Gold Foil",
        "d": "Rutherford, 1909 — alpha particles bounced back, revealing the atomic nucleus"
      },
      {
        "w": "Miller-Urey",
        "d": "1952 — zapped chemicals in a flask and made amino acids; life from scratch"
      },
      {
        "w": "Mendel's Peas",
        "d": "Mendel, 1856–63 — crossbred peas in a monastery and cracked genetic inheritance"
      },
      {
        "w": "CERN Higgs Boson",
        "d": "ATLAS & CMS, 2012 — found the Higgs boson; the Standard Model rejoiced"
      },
      {
        "w": "Asch Conformity",
        "d": "Asch, 1951 — people deny obvious truths about lines just to fit in with a group"
      },
      {
        "w": "Ebbinghaus Curve",
        "d": "Ebbinghaus, 1885 — memory fades exponentially; spaced repetition is the cure"
      },
      {
        "w": "Hawthorne Effect",
        "d": "Workers at a 1920s factory improved just because someone was watching them"
      },
      {
        "w": "Bobo Doll",
        "d": "Bandura, 1961 — kids watched adults punch a doll, then eagerly did the same"
      },
      {
        "w": "Tuskegee Study",
        "d": "1932–72 — US withheld syphilis treatment from Black men; bioethics awakened"
      },
      {
        "w": "Marshmallow Test",
        "d": "Mischel, 1970 — wait for two marshmallows now; success later? (It's complicated)"
      },
      {
        "w": "Faraday's Induction",
        "d": "Faraday, 1831 — moved a magnet through a coil and invented the electrical age"
      },
      {
        "w": "Cavendish Experiment",
        "d": "Cavendish, 1798 — weighed the Earth using two metal balls and a twisted wire"
      },
      {
        "w": "Watson & Crick DNA",
        "d": "1953 — double helix revealed using Franklin's X-ray; biology never the same"
      },
      {
        "w": "Foucault's Pendulum",
        "d": "Foucault, 1851 — a pendulum in a Paris church proved Earth actually rotates"
      },
      {
        "w": "Ultimatum Game",
        "d": "Güth, 1982 — people reject unfair cash splits to punish greed; so irrational"
      },
      {
        "w": "Fizeau Light Speed",
        "d": "Fizeau, 1849 — first lab measurement of light speed with a spinning gear wheel"
      },
      {
        "w": "Harlow's Monkeys",
        "d": "Harlow, 1958 — baby monkeys chose a soft cloth mother over a wire one with milk"
      },
      {
        "w": "Piaget's Conservation",
        "d": "Piaget, 1940s — young kids think a tall glass holds more water than a wide one"
      },
      {
        "w": "Learned Helplessness",
        "d": "Seligman, 1967 — shocked dogs stopped trying to escape even when they could"
      },
      {
        "w": "Turing Test",
        "d": "Alan Turing's 1950 test for machine intelligence; still debated in the AI era"
      },
      {
        "w": "Tyndall Heat Rays",
        "d": "1859 experiment proving CO2 traps heat; first experimental evidence for climate change"
      },
      {
        "w": "Bell's Inequality Test",
        "d": "John Bell's quantum entanglement experiment proved Einstein's spooky action was real"
      },
      {
        "w": "Franklin's Kite",
        "d": "Benjamin Franklin proved lightning was electricity; electrocution risk was very real"
      },
      {
        "w": "Stroop Effect",
        "d": "Brain interference when ink colour and colour-word clash; takes longer to name the ink"
      },
      {
        "w": "Phantom Limb Study",
        "d": "Ramachandran's mirror box eliminated phantom pain by fooling the brain with reflection"
      },
      {
        "w": "Penfield Brain Mapping",
        "d": "Electrically stimulating conscious brains to map which cortex areas control which body parts"
      },
      {
        "w": "Prisoner's Dilemma Lab",
        "d": "Game theory experiment showing why rational self-interest leads to collective worse outcome"
      },
      {
        "w": "Obedience to Authority",
        "d": "Milgram follow-up confirming 65% of people will shock strangers on command from authority"
      },
      {
        "w": "Little Albert",
        "d": "Watson conditioned infant fear of white rat; unethical landmark of behaviourist psychology"
      }
    ]
  },
  {
    "name": "mind-bending paradoxes",
    "tags": {
      "a": "geek",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Trolley Problem",
        "d": "Pull the lever? Kill one to save five — ethics in crisis mode."
      },
      {
        "w": "Zeno's Paradox",
        "d": "Achilles can never catch a tortoise — movement is impossible, kinda."
      },
      {
        "w": "Liar's Paradox",
        "d": "'This statement is false' — true or false? Logic explodes either way."
      },
      {
        "w": "Ship of Theseus",
        "d": "Every plank replaced — is it still the same ship? Ancient identity crisis."
      },
      {
        "w": "Bootstrap Paradox",
        "d": "A time traveler brings a book back — who wrote it originally?"
      },
      {
        "w": "Grandfather Paradox",
        "d": "You kill your grandfather in the past. Now you can't be born to do it."
      },
      {
        "w": "Fermi Paradox",
        "d": "If aliens exist everywhere, why has no one called? Space is too quiet."
      },
      {
        "w": "Sorites Paradox",
        "d": "Remove one grain from a heap — when does it stop being a heap?"
      },
      {
        "w": "Raven Paradox",
        "d": "Seeing a red apple is evidence all ravens are black. Technically."
      },
      {
        "w": "Newcomb's Problem",
        "d": "A superpredictor offers two boxes — trust the oracle or grab them all?"
      },
      {
        "w": "Barber Paradox",
        "d": "The barber shaves all who don't shave themselves. Who shaves the barber?"
      },
      {
        "w": "Omnipotence Paradox",
        "d": "Can God create a rock so heavy even God can't lift it?"
      },
      {
        "w": "Predestination Paradox",
        "d": "You go back in time and cause the very event you tried to prevent."
      },
      {
        "w": "Paradox of Tolerance",
        "d": "Tolerating intolerance destroys tolerance itself — Popper's unsettling warning."
      },
      {
        "w": "Buridan's Ass",
        "d": "A hungry donkey between two equal haystacks can't choose — and starves."
      },
      {
        "w": "Surprise Exam Paradox",
        "d": "Teacher promises a surprise test — students prove it's logically impossible."
      },
      {
        "w": "Banach-Tarski",
        "d": "Theoretically slice a sphere, rearrange pieces, get two identical spheres. Math is wild."
      },
      {
        "w": "Russell's Paradox",
        "d": "The set of all sets that don't contain themselves — does it contain itself?"
      },
      {
        "w": "Hilbert's Hotel",
        "d": "Infinite hotel, fully booked, always room for one more guest."
      },
      {
        "w": "Monty Hall",
        "d": "Switch doors or stay? Probability says switch — most people refuse to believe it."
      },
      {
        "w": "Simpson's Paradox",
        "d": "A trend appears in groups but reverses when groups are combined."
      },
      {
        "w": "Cantor's Diagonal",
        "d": "Some infinities are bigger than others — Cantor's shocking proof."
      },
      {
        "w": "Birthday Problem",
        "d": "In a room of 23 people, 50% chance two share a birthday. Wild, right?"
      },
      {
        "w": "Braess's Paradox",
        "d": "Adding a road to a network can make everyone's commute slower."
      },
      {
        "w": "Thomson's Lamp",
        "d": "Switch flicked infinitely fast — is the lamp on or off at the end?"
      },
      {
        "w": "Coastline Paradox",
        "d": "The smaller your measuring unit, the longer a coastline becomes. Endlessly."
      },
      {
        "w": "Galileo's Paradox",
        "d": "There are as many squares as whole numbers — even though squares are fewer."
      },
      {
        "w": "Arrow's Impossibility",
        "d": "No voting system can fairly satisfy all reasonable democratic criteria at once."
      },
      {
        "w": "Two Envelopes",
        "d": "Switch envelopes or keep yours? Math seems to say always switch — forever."
      },
      {
        "w": "Missing Dollar",
        "d": "Three guests, a refund, a tip — one dollar vanishes from the accounting."
      },
      {
        "w": "Potato Paradox",
        "d": "Potatoes lose water weight: 99% to 98% water makes them half as heavy."
      },
      {
        "w": "Unexpected Hanging",
        "d": "Judge promises a surprise execution — prisoner reasons it can never happen."
      },
      {
        "w": "Kavka's Toxin",
        "d": "Paid to intend to drink a poison — do you genuinely intend it?"
      },
      {
        "w": "Infinite Regress",
        "d": "Every explanation needs explaining — turtles all the way down."
      },
      {
        "w": "Parrondo's Paradox",
        "d": "Two losing strategies, combined randomly, become a winning strategy."
      }
    ]
  },
  {
    "name": "deep-sea creatures",
    "tags": {
      "a": "geek",
      "b": "nature",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Anglerfish",
        "d": "Deep-sea predator with a bioluminescent lure dangling from its forehead."
      },
      {
        "w": "Giant Squid",
        "d": "Legendary tentacled colossus of the deep, inspiring sea monster myths for centuries."
      },
      {
        "w": "Goblin Shark",
        "d": "Pink deep-water shark with a protruding snout and slingshot jaws."
      },
      {
        "w": "Dumbo Octopus",
        "d": "Adorable deep-sea octopus that flaps ear-like fins to glide through darkness."
      },
      {
        "w": "Vampire Squid",
        "d": "Not a true squid, cloaks itself in a dark web of webbed arms."
      },
      {
        "w": "Barreleye",
        "d": "Transparent-headed fish with tubular eyes that rotate to spot prey above."
      },
      {
        "w": "Fangtooth",
        "d": "Tiny fish with proportionally the largest teeth of any ocean creature."
      },
      {
        "w": "Blobfish",
        "d": "Deep-pressure fish that looks depressingly saggy when hauled to the surface."
      },
      {
        "w": "Giant Isopod",
        "d": "Pill-bug of the abyss, grows to terrifying size in frigid deep water."
      },
      {
        "w": "Viperfish",
        "d": "Silvery deep-sea predator with needle fangs too long to fit in its mouth."
      },
      {
        "w": "Siphonophore",
        "d": "Colonial organism made of thousands of clones — can stretch 45 meters long."
      },
      {
        "w": "Dragonfish",
        "d": "Bioluminescent deep-sea predator with a chin barbel that glows red to lure prey."
      },
      {
        "w": "Frilled Shark",
        "d": "Ancient shark species with a snake-like body and frilled, prehistoric gills."
      },
      {
        "w": "Sea Cucumber",
        "d": "Squishy bottom-dweller that breathes through its rear and ejects organs as defense."
      },
      {
        "w": "Comb Jelly",
        "d": "Iridescent gelatinous creature that pulses with rainbow light as it swims."
      },
      {
        "w": "Coffinfish",
        "d": "Chubby deep-sea fish that can inflate like a balloon and walks on fins."
      },
      {
        "w": "Hatchetfish",
        "d": "Silver deep-sea fish shaped like a hatchet with downward-pointing light organs."
      },
      {
        "w": "Zombie Worm",
        "d": "Drills into whale bones on the ocean floor to feed on lipids inside."
      },
      {
        "w": "Black Dragonfish",
        "d": "Slender deep-sea predator whose black body absorbs nearly all light."
      },
      {
        "w": "Pelican Eel",
        "d": "Deep-sea eel with a hinged jaw that opens wide as a pelican's pouch."
      },
      {
        "w": "Yeti Crab",
        "d": "White hairy crab discovered in 2005 that farms bacteria on its own claws."
      },
      {
        "w": "Grenadier Fish",
        "d": "Long-tailed deep-sea fish that dominates cold abyssal plains worldwide."
      },
      {
        "w": "Glass Squid",
        "d": "Nearly transparent squid with light organs to hide its shadow from predators below."
      },
      {
        "w": "Stoplight Loosejaw",
        "d": "Deep-sea fish that produces red light invisible to prey — a biological sniper."
      },
      {
        "w": "Colossal Squid",
        "d": "Bigger than a giant squid, with rotating hooks on its tentacles."
      },
      {
        "w": "Sea Angel",
        "d": "Tiny translucent mollusk that swims through frigid deep water like a drifting ghost."
      },
      {
        "w": "Oarfish",
        "d": "World's longest bony fish, a silver ribbon up to 11 meters, rarely seen."
      },
      {
        "w": "Hydrothermal Vent Worm",
        "d": "Tube worm clustering around boiling volcanic vents miles beneath the surface."
      },
      {
        "w": "Sixgill Shark",
        "d": "Ancient blunt-nosed shark unchanged for 200 million years, lurking in the deep."
      },
      {
        "w": "Psychrolutes",
        "d": "Genus of blobby fish including the infamous blobfish, built for crushing pressure."
      },
      {
        "w": "Flamingo Tongue Snail",
        "d": "Spotted sea snail draped in a colorful mantle over its shell."
      },
      {
        "w": "Firefly Squid",
        "d": "Small Japanese squid that glows bright blue, lighting up bays in spring."
      },
      {
        "w": "Deep-sea Dragonet",
        "d": "Ornate scaled fish lurking near the seafloor with elaborate patterned fins."
      },
      {
        "w": "Whalefish",
        "d": "Bizarre deep-sea fish whose male and female look so different they were named separately."
      },
      {
        "w": "Giant Pacific Octopus",
        "d": "Largest octopus on Earth, supremely intelligent problem-solver of the deep."
      }
    ]
  },
  {
    "name": "forgotten empires",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Khmer Empire",
        "d": "Southeast Asian empire that built Angkor Wat and ruled for six centuries."
      },
      {
        "w": "Parthia",
        "d": "Iranian empire that repelled Rome repeatedly and ruled the Silk Road for 500 years."
      },
      {
        "w": "Axum",
        "d": "Powerful East African empire, early Christian kingdom that minted gold coins."
      },
      {
        "w": "Majapahit",
        "d": "Mighty Javanese empire whose influence stretched across most of Southeast Asia."
      },
      {
        "w": "Srivijaya",
        "d": "Maritime Buddhist empire dominating Malay straits trade for 600 years."
      },
      {
        "w": "Timurids",
        "d": "Central Asian dynasty of Tamerlane's descendants, patrons of stunning Persian art."
      },
      {
        "w": "Kingdom of Kush",
        "d": "Nubian kingdom that conquered Egypt and produced its own pharaohs."
      },
      {
        "w": "Tartessians",
        "d": "Mysterious Iberian civilization possibly linked to the legend of Atlantis."
      },
      {
        "w": "Great Zimbabwe",
        "d": "Enigmatic stone-walled civilization that controlled southern African gold trade."
      },
      {
        "w": "Nabataeans",
        "d": "Arab kingdom that carved Petra from rose-red cliffs and mastered desert trade."
      },
      {
        "w": "Champa",
        "d": "Hindu-Buddhist coastal kingdom of Vietnam, skilled sailors and fierce fighters."
      },
      {
        "w": "Dilmun",
        "d": "Ancient Persian Gulf civilization, possibly the Garden of Eden of Sumerian myth."
      },
      {
        "w": "Elam",
        "d": "Ancient Iranian civilization that rivaled Mesopotamia for three thousand years."
      },
      {
        "w": "Urartu",
        "d": "Iron-Age Armenian highland kingdom, rival of Assyria, master of metalwork."
      },
      {
        "w": "Pyu City-States",
        "d": "Early Buddhist civilization of Burma, precursor to the great kingdoms of Myanmar."
      },
      {
        "w": "Göktürks",
        "d": "First Turkic empire spanning Central Asia, ancestors of dozens of nations."
      },
      {
        "w": "Kerma",
        "d": "Africa's oldest urban civilization south of the Sahara, predating Kush."
      },
      {
        "w": "Xiongnu",
        "d": "Steppe nomad confederation that forced China to build the Great Wall."
      },
      {
        "w": "Tiwanaku",
        "d": "Andean empire that thrived at 4,000 meters altitude without any writing system."
      },
      {
        "w": "Wari Empire",
        "d": "Pre-Inca Andean state that pioneered administrative roads and textile record-keeping."
      },
      {
        "w": "Colchis",
        "d": "Ancient kingdom on the Black Sea coast — destination of Jason and the Argonauts."
      },
      {
        "w": "Dvaravati",
        "d": "Mon Buddhist kingdom in mainland Southeast Asia, forerunner of Thai culture."
      },
      {
        "w": "Kanem-Bornu",
        "d": "Long-lived Central African empire controlling trans-Saharan trade for a millennium."
      },
      {
        "w": "Bactria",
        "d": "Hellenistic kingdom in Central Asia where Greek culture blended with Buddhism."
      },
      {
        "w": "Benin Empire",
        "d": "West African kingdom famous for stunning bronze plaques looted by Britain in 1897."
      },
      {
        "w": "Kushan Empire",
        "d": "Central Asian empire bridging Rome, China, and India along the Silk Road."
      },
      {
        "w": "Lydia",
        "d": "Anatolian kingdom credited with inventing coined money, famously ruled by Croesus."
      },
      {
        "w": "Mitanni",
        "d": "Mysterious Hurrian kingdom in Mesopotamia that rivaled Egypt for centuries."
      },
      {
        "w": "Sankoré",
        "d": "West African scholarly empire centered on Timbuktu, home to 25,000 students."
      },
      {
        "w": "Funan",
        "d": "First major Southeast Asian empire, controlling the Mekong Delta trade routes."
      },
      {
        "w": "Chimú",
        "d": "Pre-Inca coastal Peruvian empire that built the vast adobe city of Chan Chan."
      },
      {
        "w": "Pontus",
        "d": "Black Sea Anatolian kingdom whose king Mithridates nearly brought Rome to its knees."
      },
      {
        "w": "Nri Kingdom",
        "d": "Igbo theocratic state in Nigeria, one of Africa's oldest continuously inhabited regions."
      },
      {
        "w": "Gandhara",
        "d": "Ancient civilization in modern Pakistan that produced stunning Greco-Buddhist sculpture."
      },
      {
        "w": "Pallava Dynasty",
        "d": "South Indian empire that created Dravidian temple architecture and spread culture to Southeast Asia."
      }
    ]
  },
  {
    "name": "typefaces & fonts",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Helvetica",
        "d": "Switzerland's gift to modernism — the world's most neutral, ubiquitous sans-serif."
      },
      {
        "w": "Garamond",
        "d": "Elegant Renaissance serif named after French punchcutter Claude Garamond."
      },
      {
        "w": "Futura",
        "d": "Geometric Bauhaus typeface built from circles and lines, used on the Moon plaque."
      },
      {
        "w": "Comic Sans",
        "d": "Playful 1990s font everyone loves to hate but can't stop seeing everywhere."
      },
      {
        "w": "Times New Roman",
        "d": "Workhorse newspaper serif, designed for The Times of London in 1931."
      },
      {
        "w": "Baskerville",
        "d": "Transitional serif renowned for its crispness — famously said to cause unease."
      },
      {
        "w": "Bodoni",
        "d": "High-contrast Italian serif with razor-thin strokes — fashion magazine royalty."
      },
      {
        "w": "Gill Sans",
        "d": "British humanist sans-serif found on every BBC logo and railway sign."
      },
      {
        "w": "Palatino",
        "d": "Hermann Zapf's calligraphic serif inspired by Italian Renaissance letterforms."
      },
      {
        "w": "Didot",
        "d": "Ultra-high contrast French serif — the face of Vogue and haute couture."
      },
      {
        "w": "Frutiger",
        "d": "Airport signage typeface designed for Charles de Gaulle — supremely legible."
      },
      {
        "w": "Caslon",
        "d": "\"Old Style\" serif considered the first great English typeface, c. 1722."
      },
      {
        "w": "Trajan",
        "d": "All-caps Roman serif carved from Trajan's Column — Hollywood's go-to movie poster font."
      },
      {
        "w": "Optima",
        "d": "Elegant sans-serif with flared strokes — used on the Vietnam Veterans Memorial."
      },
      {
        "w": "Akzidenz-Grotesk",
        "d": "The 1896 Swiss grotesque that inspired Helvetica — early modernism in type form."
      },
      {
        "w": "Rockwell",
        "d": "Bold geometric slab-serif with thick rectangular serifs, perfect for headlines."
      },
      {
        "w": "Univers",
        "d": "Adrian Frutiger's rigorously systematic sans-serif family with 21 weights."
      },
      {
        "w": "Century Gothic",
        "d": "Geometric sans-serif popular in the 1990s, built on perfect circular shapes."
      },
      {
        "w": "Copperplate",
        "d": "All-caps typeface with tiny serifs, evoking engraved business cards and prestige."
      },
      {
        "w": "DIN",
        "d": "German industrial sans-serif standardized for engineering and signage."
      },
      {
        "w": "Sabon",
        "d": "Jan Tschichold's refined Garamond revival, designed for simultaneous hot-metal typesetting."
      },
      {
        "w": "Clarendon",
        "d": "Victorian slab-serif revival, bold and authoritative, popular on wanted posters."
      },
      {
        "w": "Myriad",
        "d": "Adobe's humanist sans-serif, famous as Apple's corporate typeface for over a decade."
      },
      {
        "w": "Eurostile",
        "d": "Squarish 1960s sans-serif that defined the look of sci-fi and space-age design."
      },
      {
        "w": "Minion",
        "d": "Robert Slimbach's Renaissance-inspired serif, the default body text of Adobe InDesign."
      },
      {
        "w": "Gotham",
        "d": "Geometric sans-serif used on Obama's \"Hope\" poster and the 9/11 memorial."
      },
      {
        "w": "ITC Avant Garde",
        "d": "Circular logo font from the 1970s counterculture magazine, notoriously hard to space."
      },
      {
        "w": "Zapf Chancery",
        "d": "Flowing calligraphic italic based on chancery script, often mistaken for handwriting."
      },
      {
        "w": "Franklin Gothic",
        "d": "Bold American sans-serif workhorse, mainstay of newspaper headlines since 1902."
      },
      {
        "w": "Charter",
        "d": "Matthew Carter's robust serif designed to survive fax machine degradation beautifully."
      },
      {
        "w": "Neue Haas Grotesk",
        "d": "The original 1957 design that became Helvetica — recently revived to full glory."
      },
      {
        "w": "Roboto",
        "d": "Google's default Android typeface blending geometric and humanist qualities."
      },
      {
        "w": "Open Sans",
        "d": "Clean, friendly sans-serif designed for Google, one of the web's most-used fonts."
      },
      {
        "w": "Brandon Grotesque",
        "d": "Geometric sans-serif with a warm, modern feel popular in contemporary branding."
      },
      {
        "w": "Proxima Nova",
        "d": "Versatile geometric-humanist hybrid — possibly the internet's most-licensed typeface."
      }
    ]
  },
  {
    "name": "particle physics",
    "tags": {
      "a": "geek",
      "b": "geek",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Quark",
        "d": "Fundamental building block of protons and neutrons, never found alone."
      },
      {
        "w": "Higgs Boson",
        "d": "The 'God particle' discovered in 2012 that gives other particles their mass."
      },
      {
        "w": "Neutrino",
        "d": "Ghost-like particle with almost no mass that passes through everything unimpeded."
      },
      {
        "w": "Muon",
        "d": "Heavier cousin of the electron, lives for just 2.2 microseconds before decaying."
      },
      {
        "w": "Photon",
        "d": "Massless particle of light and all electromagnetic radiation, always at lightspeed."
      },
      {
        "w": "Gluon",
        "d": "Force carrier that glues quarks together inside protons via the strong nuclear force."
      },
      {
        "w": "Lepton",
        "d": "Family of elementary particles including electrons, muons, and neutrinos."
      },
      {
        "w": "Positron",
        "d": "Antimatter twin of the electron — same mass, opposite charge."
      },
      {
        "w": "Tau",
        "d": "Heaviest lepton, 3,500 times heavier than an electron, decays almost instantly."
      },
      {
        "w": "W Boson",
        "d": "Carrier of the weak nuclear force responsible for radioactive beta decay."
      },
      {
        "w": "Z Boson",
        "d": "Neutral carrier of the weak force, discovered at CERN in 1983."
      },
      {
        "w": "Pion",
        "d": "Lightest meson, mediates the residual strong force holding atomic nuclei together."
      },
      {
        "w": "Kaon",
        "d": "Strange meson that was first evidence of CP symmetry violation in physics."
      },
      {
        "w": "Graviton",
        "d": "Hypothetical quantum particle mediating gravity — still undetected."
      },
      {
        "w": "Hadron",
        "d": "Any particle made of quarks held by the strong force — protons are hadrons."
      },
      {
        "w": "Boson",
        "d": "Force-carrying particles with integer spin — named for Satyendra Nath Bose."
      },
      {
        "w": "Fermion",
        "d": "Matter particles with half-integer spin that obey the Pauli exclusion principle."
      },
      {
        "w": "Dark Matter",
        "d": "Invisible substance making up 27% of the universe, detectable only by gravity."
      },
      {
        "w": "Axion",
        "d": "Hypothetical ultralight particle proposed to solve the strong CP problem."
      },
      {
        "w": "Sparticle",
        "d": "Supersymmetric partner particle predicted by SUSY — none found yet."
      },
      {
        "w": "Meson",
        "d": "Quark-antiquark pair, unstable particles that helped crack the nuclear force."
      },
      {
        "w": "Baryon",
        "d": "Particle made of three quarks — protons and neutrons are the most famous baryons."
      },
      {
        "w": "Charm Quark",
        "d": "Third quark discovered in 1974, triggering the 'November Revolution' in physics."
      },
      {
        "w": "Top Quark",
        "d": "Heaviest known particle, about as heavy as a gold atom, discovered in 1995."
      },
      {
        "w": "Strange Quark",
        "d": "Second quark discovered, found in 'strange' particles with unusually long lifetimes."
      },
      {
        "w": "Bottom Quark",
        "d": "Heavy quark discovered in 1977, partnered with the top quark."
      },
      {
        "w": "Tachyon",
        "d": "Hypothetical particle that travels faster than light and has imaginary mass."
      },
      {
        "w": "Electron",
        "d": "Negatively charged lepton orbiting atoms — foundation of all chemistry and electronics."
      },
      {
        "w": "Proton",
        "d": "Positively charged baryon made of three quarks, defines each chemical element."
      },
      {
        "w": "Antiproton",
        "d": "Antimatter counterpart of the proton, annihilates instantly on contact with matter."
      },
      {
        "w": "Gravitino",
        "d": "Supersymmetric partner of the graviton, a dark matter candidate in SUSY theories."
      },
      {
        "w": "Majorana Fermion",
        "d": "Exotic particle that is its own antiparticle — being hunted in quantum materials."
      },
      {
        "w": "Preon",
        "d": "Hypothetical substructure inside quarks and leptons — if quarks aren't fundamental."
      },
      {
        "w": "Magnetic Monopole",
        "d": "Predicted solitary magnetic pole — north without south — never observed."
      },
      {
        "w": "Technicolor",
        "d": "Proposed alternative to the Higgs mechanism using new strong interactions."
      }
    ]
  },
  {
    "name": "sieges & battles",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Stalingrad",
        "d": "Turning point of WWII — brutal urban battle where Nazi Germany's advance broke."
      },
      {
        "w": "Thermopylae",
        "d": "300 Spartans held a narrow pass against a Persian army of thousands."
      },
      {
        "w": "Gettysburg",
        "d": "Bloodiest battle of the American Civil War, pivotal Union victory in 1863."
      },
      {
        "w": "Normandy",
        "d": "D-Day — largest amphibious invasion in history cracked Hitler's Atlantic Wall."
      },
      {
        "w": "Agincourt",
        "d": "English longbowmen slaughtered French knights, immortalized by Shakespeare's Henry V."
      },
      {
        "w": "Cannae",
        "d": "Hannibal's masterpiece — encirclement destroyed 50,000 Romans in a single day."
      },
      {
        "w": "Midway",
        "d": "Naval ambush where the US sank four Japanese carriers, turning the Pacific War."
      },
      {
        "w": "The Alamo",
        "d": "185 Texans held a mission for 13 days against thousands of Mexican troops."
      },
      {
        "w": "Verdun",
        "d": "Ten-month WWI meat grinder that killed over 700,000 with almost no territorial gain."
      },
      {
        "w": "Siege of Troy",
        "d": "Ten-year Greek siege ended by a famous wooden horse of pure deception."
      },
      {
        "w": "Marathon",
        "d": "Athenian hoplites crushed a Persian invasion force, inspiring the modern marathon run."
      },
      {
        "w": "Battle of Tours",
        "d": "Charles Martel stopped the Umayyad advance into Europe in 732 AD."
      },
      {
        "w": "Siege of Vienna",
        "d": "Ottoman attempt to take Vienna in 1683 was repelled by a massive cavalry charge."
      },
      {
        "w": "Hastings",
        "d": "Norman arrow killed Harold II — England changed forever in one October day."
      },
      {
        "w": "Gaugamela",
        "d": "Alexander the Great outwitted Darius III, destroying the Persian Empire decisively."
      },
      {
        "w": "Dien Bien Phu",
        "d": "Viet Minh siege ended French colonialism in Indochina in just 56 days."
      },
      {
        "w": "Siege of Leningrad",
        "d": "900-day Nazi blockade of the city — a million civilians died of starvation."
      },
      {
        "w": "Tet Offensive",
        "d": "Surprise Viet Cong attack across South Vietnam shattered American public support."
      },
      {
        "w": "El Alamein",
        "d": "Montgomery defeated Rommel in North Africa — the hinge of WWII fate."
      },
      {
        "w": "Zama",
        "d": "Scipio crushed Hannibal in 202 BC, ending the Second Punic War for Rome."
      },
      {
        "w": "Gallipoli",
        "d": "Allied disaster in WWI — failed Ottoman invasion forged Australian and New Zealand identity."
      },
      {
        "w": "Adrianople",
        "d": "Visigoths annihilated a Roman army in 378 AD — twilight of the Western Empire."
      },
      {
        "w": "Chancellorsville",
        "d": "Lee's greatest tactical victory, overshadowed by Stonewall Jackson's friendly-fire death."
      },
      {
        "w": "Arbela",
        "d": "Alternative name for Gaugamela, Alexander's decisive knockout blow to Persia."
      },
      {
        "w": "Siege of Masada",
        "d": "960 Jewish rebels chose mass suicide over Roman capture atop a desert mesa."
      },
      {
        "w": "Waterloo",
        "d": "Napoleon's final defeat in 1815 ended 23 years of European revolutionary warfare."
      },
      {
        "w": "Tsushima",
        "d": "Japan annihilated Russia's Baltic Fleet in 1905, shocking the entire world."
      },
      {
        "w": "Salamis",
        "d": "Greek triremes crushed the Persian fleet in a narrow strait — Europe was saved."
      },
      {
        "w": "Battle of the Bulge",
        "d": "Hitler's last desperate offensive in the Ardennes was stopped by freezing GIs."
      },
      {
        "w": "Lepanto",
        "d": "1571 Christian naval victory halted Ottoman expansion into the western Mediterranean."
      },
      {
        "w": "Kursk",
        "d": "Largest tank battle ever — Soviet armored forces absorbed and shattered Germany's last offensive."
      },
      {
        "w": "Siege of Constantinople",
        "d": "Mehmed II's cannons breached 1,000-year-old walls, ending the Byzantine Empire in 1453."
      },
      {
        "w": "Austerlitz",
        "d": "Napoleon's greatest tactical masterpiece — three emperors met, only one left victorious."
      },
      {
        "w": "Wounded Knee",
        "d": "US 7th Cavalry massacred 300 Lakota Sioux, final act of the Indian Wars."
      },
      {
        "w": "Iwo Jima",
        "d": "Marines raised the flag on a volcanic island after 36 days of savage fighting."
      }
    ]
  },
  {
    "name": "pandemics in history",
    "tags": {
      "a": "geek",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Black Death",
        "d": "Bubonic plague killed a third of Europe's population in the 14th century."
      },
      {
        "w": "Spanish Flu",
        "d": "1918 influenza pandemic killed 50–100 million people in just two years."
      },
      {
        "w": "COVID-19",
        "d": "Coronavirus pandemic that shut down the entire world starting in 2020."
      },
      {
        "w": "Smallpox",
        "d": "Devastating viral disease that killed 300 million in the 20th century alone."
      },
      {
        "w": "Cholera",
        "d": "Waterborne bacterium that triggered seven global pandemics over two centuries."
      },
      {
        "w": "Plague of Justinian",
        "d": "Byzantine Empire's catastrophic bubonic plague killed 25–50 million in the 6th century."
      },
      {
        "w": "HIV/AIDS",
        "d": "Retrovirus pandemic that has claimed over 40 million lives since the 1980s."
      },
      {
        "w": "Antonine Plague",
        "d": "Roman Empire pandemic of 165 AD, possibly measles or smallpox, killing five million."
      },
      {
        "w": "SARS",
        "d": "2003 coronavirus outbreak that killed 774 people and foreshadowed COVID-19."
      },
      {
        "w": "Ebola",
        "d": "Hemorrhagic fever with terrifying fatality rates, sparked by Central African outbreaks."
      },
      {
        "w": "Typhus",
        "d": "Louse-borne disease that devastated armies and prisons for centuries of warfare."
      },
      {
        "w": "Yellow Fever",
        "d": "Mosquito-borne viral plague that killed millions and halted early canal construction."
      },
      {
        "w": "Polio",
        "d": "Paralytic virus that crippled millions before Salk's vaccine nearly eradicated it."
      },
      {
        "w": "Measles",
        "d": "Viral disease that devastated Indigenous populations with no prior immunity."
      },
      {
        "w": "Typhoid",
        "d": "Waterborne bacterial fever spread by Typhoid Mary and filthy Victorian infrastructure."
      },
      {
        "w": "Plague of Athens",
        "d": "Mysterious disease killed a quarter of Athens including Pericles in 430 BC."
      },
      {
        "w": "Russian Flu",
        "d": "1889–1890 pandemic possibly caused by a coronavirus, not influenza."
      },
      {
        "w": "Asian Flu",
        "d": "1957 H2N2 influenza pandemic that killed over a million people worldwide."
      },
      {
        "w": "MERS",
        "d": "Middle East Respiratory Syndrome coronavirus with a 35% fatality rate."
      },
      {
        "w": "Bubonic Plague",
        "d": "Yersinia pestis carried by fleas on rats — the medieval world's worst nightmare."
      },
      {
        "w": "Swine Flu",
        "d": "2009 H1N1 pandemic declared a global emergency, milder than feared but widespread."
      },
      {
        "w": "Dengue",
        "d": "Mosquito-borne tropical fever infecting 400 million people every year globally."
      },
      {
        "w": "Sleeping Sickness",
        "d": "African tsetse fly disease that caused lethal epidemics across Central Africa."
      },
      {
        "w": "Leprosy",
        "d": "Ancient bacterial disease that disfigured victims and cast them out of society."
      },
      {
        "w": "Scarlet Fever",
        "d": "Streptococcal disease that ravaged 19th-century children and inspired medical reform."
      },
      {
        "w": "Zika Virus",
        "d": "Mosquito-borne virus linked to devastating microcephaly in newborns, 2015–2016 crisis."
      },
      {
        "w": "Hong Kong Flu",
        "d": "1968 H3N2 influenza pandemic that killed a million people worldwide."
      },
      {
        "w": "Rinderpest",
        "d": "Cattle plague that devastated African herds, causing human famine on a massive scale."
      },
      {
        "w": "Monkeypox",
        "d": "Poxvirus that declared a global emergency in 2022, spreading through close contact."
      },
      {
        "w": "Malaria",
        "d": "Parasitic mosquito disease that has killed more humans throughout history than any other."
      },
      {
        "w": "Tuberculosis",
        "d": "Bacterial lung disease called 'the white plague' that ravaged 19th-century cities."
      },
      {
        "w": "Influenza 1957",
        "d": "Asian flu wave swept the globe within months, predating modern pandemic responses."
      },
      {
        "w": "Third Plague Pandemic",
        "d": "1855 bubonic plague originated in China, spread globally via steamships."
      },
      {
        "w": "Cocoliztli",
        "d": "Mysterious hemorrhagic epidemic that killed 15 million Aztecs in the 16th century."
      },
      {
        "w": "Great Plague of London",
        "d": "1665 bubonic plague killed 100,000 Londoners before the Great Fire ended it."
      }
    ]
  },
  {
    "name": "propaganda techniques",
    "tags": {
      "a": "human",
      "b": "geek",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Bandwagon",
        "d": "Everyone's doing it — join the winning side before you're left behind!"
      },
      {
        "w": "Scapegoating",
        "d": "Blame a minority group for all of society's problems — redirect public anger."
      },
      {
        "w": "Dog Whistle",
        "d": "Code words that mean one thing to the public, another to the in-group."
      },
      {
        "w": "Gaslighting",
        "d": "Making targets doubt their own memory and perception of reality."
      },
      {
        "w": "Whataboutism",
        "d": "Counter any criticism by pointing to someone else's wrongdoing instead."
      },
      {
        "w": "Appeal to Fear",
        "d": "Create panic about threats (real or imagined) to demand obedience or action."
      },
      {
        "w": "Cherry Picking",
        "d": "Present only the data supporting your conclusion, ignore everything else."
      },
      {
        "w": "False Flag",
        "d": "Stage an attack on yourself to justify aggression against an enemy."
      },
      {
        "w": "Astroturfing",
        "d": "Fake grassroots movement funded by corporations or governments to seem organic."
      },
      {
        "w": "Straw Man",
        "d": "Misrepresent your opponent's argument to demolish the version you invented."
      },
      {
        "w": "Big Lie",
        "d": "Repeat an audacious falsehood so often people assume no one would dare make it up."
      },
      {
        "w": "Firehose of Falsehood",
        "d": "Overwhelm the public with so many lies fact-checkers can't keep up."
      },
      {
        "w": "Ad Hominem",
        "d": "Attack the person making the argument instead of the argument itself."
      },
      {
        "w": "Gish Gallop",
        "d": "Flood a debate with numerous weak arguments faster than anyone can rebut them."
      },
      {
        "w": "False Dichotomy",
        "d": "Present only two extreme options when many alternatives exist."
      },
      {
        "w": "Card Stacking",
        "d": "Stack evidence heavily on one side, present it as if balanced reporting."
      },
      {
        "w": "Transfer",
        "d": "Associate a cause with a respected authority or revered symbol to gain legitimacy."
      },
      {
        "w": "Glittering Generalities",
        "d": "Use emotionally powerful words like 'freedom' and 'family' that mean everything and nothing."
      },
      {
        "w": "Plain Folks",
        "d": "Leader poses as an ordinary person of the people, just like you."
      },
      {
        "w": "Testimonial",
        "d": "Celebrity or authority endorses a product or political position they know nothing about."
      },
      {
        "w": "Name-Calling",
        "d": "Label opponents with negative terms to trigger contempt without debate."
      },
      {
        "w": "Manufactured Consent",
        "d": "Media shapes public opinion so people think their manufactured views are their own."
      },
      {
        "w": "Euphemism",
        "d": "Sanitize horrors with soft language — 'collateral damage' instead of 'civilian deaths.'"
      },
      {
        "w": "Repetition",
        "d": "Repeat a message often enough and people will assume it must be true."
      },
      {
        "w": "Appeal to Nature",
        "d": "Claim something is good because it's 'natural' — ignoring that arsenic is too."
      },
      {
        "w": "Dehumanization",
        "d": "Describe enemies as animals, vermin, or disease to lower barriers to violence."
      },
      {
        "w": "Cult of Personality",
        "d": "Elevate a leader to godlike status through art, media, and public ritual."
      },
      {
        "w": "Disinformation",
        "d": "Deliberately spread false information to confuse, destabilize, or manipulate enemies."
      },
      {
        "w": "Useful Idiot",
        "d": "Sincere sympathizer who unknowingly spreads propaganda for a foreign power."
      },
      {
        "w": "Fear and Smear",
        "d": "Pair fear of an enemy with personal attacks to demolish political opponents."
      },
      {
        "w": "Sloganeering",
        "d": "Reduce complex policy to catchy slogans that bypass critical thinking."
      },
      {
        "w": "Black Propaganda",
        "d": "False information disguised as coming from a trusted or enemy source."
      },
      {
        "w": "Controlled Opposition",
        "d": "Secretly fund and direct your critics to steer opposition into harmless channels."
      },
      {
        "w": "Framing",
        "d": "Choose how to present facts so the audience draws the conclusion you want."
      },
      {
        "w": "Appeal to Tradition",
        "d": "Claim a practice must be good because it's always been done that way."
      }
    ]
  },
  {
    "name": "ancient scripts",
    "tags": {
      "a": "human",
      "b": "geek",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Cuneiform",
        "d": "Sumerian wedge-shaped impressions on clay tablets — world's oldest writing system."
      },
      {
        "w": "Hieroglyphs",
        "d": "Ancient Egyptian picture-symbols carved on temple walls and deciphered via the Rosetta Stone."
      },
      {
        "w": "Linear B",
        "d": "Mycenaean Greek syllabary deciphered in 1952 — the earliest form of written Greek."
      },
      {
        "w": "Phoenician",
        "d": "Ancient alphabet that became the ancestor of Greek, Latin, and Arabic scripts."
      },
      {
        "w": "Rongorongo",
        "d": "Undeciphered wooden tablet script from Easter Island — still a complete mystery."
      },
      {
        "w": "Ogham",
        "d": "Irish alphabet carved in notches along stone edges, used in early medieval Ireland."
      },
      {
        "w": "Runic",
        "d": "Germanic alphabet carved in stone and bone, with both alphabetic and magical uses."
      },
      {
        "w": "Demotic",
        "d": "Simplified Egyptian cursive script used for everyday documents for 1,000 years."
      },
      {
        "w": "Maya Glyphs",
        "d": "Complex logosyllabic script decoded in the 20th century, recording epic royal histories."
      },
      {
        "w": "Proto-Sinaitic",
        "d": "Semitic script from Sinai desert — possibly the ancestor of all alphabets."
      },
      {
        "w": "Linear A",
        "d": "Minoan script from Crete, older than Linear B — completely undeciphered to this day."
      },
      {
        "w": "Indus Script",
        "d": "Mysterious 4,500-year-old seal inscriptions from the Indus Valley — still unread."
      },
      {
        "w": "Nabataean",
        "d": "Arabic ancestor script of the Nabataeans, evolved into modern Arabic writing."
      },
      {
        "w": "Ugaritic",
        "d": "Early Semitic cuneiform alphabet, ancestor of Phoenician, discovered in Syria in 1929."
      },
      {
        "w": "Etruscan",
        "d": "Script of the Etruscans — we can read it but mostly can't understand the language."
      },
      {
        "w": "Brahmi",
        "d": "Ancient Indian script that is the ancestor of all South and Southeast Asian scripts."
      },
      {
        "w": "Glagolitic",
        "d": "First script created for Slavic language, invented by Saints Cyril and Methodius."
      },
      {
        "w": "Kharosthi",
        "d": "Right-to-left script of ancient Gandhara, used on the Silk Road for centuries."
      },
      {
        "w": "Coptic",
        "d": "Last stage of ancient Egyptian written in Greek letters — still used in Coptic liturgy."
      },
      {
        "w": "Meroitic",
        "d": "Undeciphered script of the Nubian Kushite kingdom — letters known, words unknown."
      },
      {
        "w": "Paleo-Hebrew",
        "d": "Ancient form of Hebrew alphabet predating the square Aramaic script still used today."
      },
      {
        "w": "Avestan",
        "d": "Sacred script invented specifically to preserve Zoroastrian hymns in perfect phonetic detail."
      },
      {
        "w": "Phaistos Disc",
        "d": "Fired clay disc from Minoan Crete stamped with 241 mysterious symbols, undeciphered."
      },
      {
        "w": "Tifinagh",
        "d": "Ancient Berber script still written by Tuareg people of the Sahara today."
      },
      {
        "w": "Sinhala",
        "d": "Curvilinear script of Sri Lanka, descended from Brahmi, used for over 2,000 years."
      },
      {
        "w": "Byblos Syllabary",
        "d": "Bronze Age Phoenician syllabic script from Lebanon, only 10 inscriptions survive."
      },
      {
        "w": "Oracle Bone Script",
        "d": "Earliest Chinese writing, carved on turtle shells for royal divination 3,300 years ago."
      },
      {
        "w": "Old Persian",
        "d": "Royal cuneiform script of the Achaemenid Empire, used in monumental inscriptions."
      },
      {
        "w": "Hieratic",
        "d": "Cursive priestly Egyptian script used alongside hieroglyphs for papyrus documents."
      },
      {
        "w": "Elder Futhark",
        "d": "Oldest complete runic alphabet of 24 characters used by Germanic peoples 200–700 AD."
      },
      {
        "w": "Ge'ez",
        "d": "Semitic script of ancient Axum, still the liturgical script of Ethiopian Christianity."
      },
      {
        "w": "Tangut",
        "d": "Complex logographic script of the Western Xia kingdom in China — 6,000 characters."
      },
      {
        "w": "Khitan Script",
        "d": "Two-script system of the Khitan Liao dynasty in China, mostly undeciphered."
      },
      {
        "w": "Naxi Dongba",
        "d": "World's only living pictographic script, used by the Naxi people of Yunnan province."
      },
      {
        "w": "Vai Syllabary",
        "d": "West African syllabic script invented spontaneously around 1830 — still in use."
      }
    ]
  },
  {
    "name": "constructed languages",
    "tags": {
      "a": "geek",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Esperanto",
        "d": "Most successful constructed language — 2 million speakers, designed for world peace."
      },
      {
        "w": "Klingon",
        "d": "Guttural Star Trek warrior language, complete with its own institute and Bible translation."
      },
      {
        "w": "Quenya",
        "d": "Tolkien's high elvish — a full grammar, dictionary, and beautiful calligraphy system."
      },
      {
        "w": "Dothraki",
        "d": "Language of Game of Thrones horse lords, created by linguist David J. Peterson."
      },
      {
        "w": "Na'vi",
        "d": "Avatar's alien language, developed to sound organic and phonologically alien."
      },
      {
        "w": "Volapük",
        "d": "19th-century international language with 1 million speakers before Esperanto crushed it."
      },
      {
        "w": "Lojban",
        "d": "Logical language designed to remove ambiguity — every sentence has one exact meaning."
      },
      {
        "w": "Toki Pona",
        "d": "Minimalist language of only 137 words — forces radical simplicity of thought."
      },
      {
        "w": "Interlingua",
        "d": "Pan-Romance language readable by millions of Europeans without any study."
      },
      {
        "w": "Newspeak",
        "d": "Orwell's 1984 dystopian language designed to make thoughtcrime literally unthinkable."
      },
      {
        "w": "Ithkuil",
        "d": "Most complex constructed language ever built — compresses paragraphs into single words."
      },
      {
        "w": "Sindarin",
        "d": "Tolkien's everyday elvish, spoken by the Grey Elves, inspired by Welsh phonology."
      },
      {
        "w": "High Valyrian",
        "d": "Game of Thrones ancient language of Valyrian dragonlords, spoken by Daenerys."
      },
      {
        "w": "Blissymbols",
        "d": "Symbol-based language designed for cross-language communication using simple icons."
      },
      {
        "w": "Solresol",
        "d": "Musical language built on seven musical notes — can be sung, played, or signed."
      },
      {
        "w": "Lingua Ignota",
        "d": "12th-century mystical language invented by Hildegard of Bingen — possibly the first conlang."
      },
      {
        "w": "Enochian",
        "d": "Angelic occult language claimed to be revealed by spirits to John Dee in the 1580s."
      },
      {
        "w": "Ido",
        "d": "Reformed version of Esperanto designed to fix its flaws — split the community permanently."
      },
      {
        "w": "Nadsat",
        "d": "Alex's slang in A Clockwork Orange, blending Russian and English to disorient readers."
      },
      {
        "w": "Láadan",
        "d": "Feminist science fiction language designed to express female experiences lacking in English."
      },
      {
        "w": "Slovio",
        "d": "Slavic auxiliary language designed to be understood by all 400 million Slavic speakers."
      },
      {
        "w": "Galach",
        "d": "Dune's future lingua franca of humanity — minimally developed but referenced throughout."
      },
      {
        "w": "Newlandic",
        "d": "Artistic personal language — an example of a private 'naturalistic' conlang project."
      },
      {
        "w": "Ideosol",
        "d": "Constructed philosophical language exploring new conceptual frameworks for thought."
      },
      {
        "w": "Kēlen",
        "d": "Artistic conlang with no verbs — uses four relational particles instead."
      },
      {
        "w": "Atlaans",
        "d": "South African sci-fi conlang mixing Afrikaans and futuristic elements."
      },
      {
        "w": "Heptapod B",
        "d": "Arrival film's non-linear alien writing where time is perceived all at once."
      },
      {
        "w": "Khuzdul",
        "d": "Tolkien's secret Dwarvish language — agglutinative, harsh, never taught to outsiders."
      },
      {
        "w": "Interslavic",
        "d": "Zonal constructed language intelligible to most Slavic speakers without study."
      },
      {
        "w": "Sambahsa",
        "d": "Reconstructed Proto-Indo-European conlang built by Olivier Simon for Indo-European speakers."
      },
      {
        "w": "Spoken Latin",
        "d": "Revivalists teach Latin as a living spoken language in immersion communities."
      },
      {
        "w": "AUI",
        "d": "W.J. Whalen's philosophical language built entirely from primitive semantic elements."
      },
      {
        "w": "Glosa",
        "d": "Minimal auxiliary language derived from Latin and Greek — just 1,000 root words."
      },
      {
        "w": "Teonaht",
        "d": "Sally Caves personal language blending Celtic roots with entirely invented grammar."
      },
      {
        "w": "Talossan",
        "d": "Micro-nation language invented by a 14-year-old Milwaukee boy, now spoken by real citizens."
      }
    ]
  },
  {
    "name": "poetic forms",
    "tags": {
      "a": "human",
      "b": "geek",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Sonnet",
        "d": "14-line poem of love and argument — Shakespeare wrote 154 of them."
      },
      {
        "w": "Haiku",
        "d": "Japanese 5-7-5 syllable snapshot of a fleeting natural moment in time."
      },
      {
        "w": "Limerick",
        "d": "Bawdy 5-line AABBA poem that always ends with a comic punchline."
      },
      {
        "w": "Villanelle",
        "d": "19-line poem with two repeating refrains — Dylan Thomas' 'Do not go gentle.'"
      },
      {
        "w": "Ode",
        "d": "Lyric poem of elevated praise — Keats wrote them to autumn and a Grecian urn."
      },
      {
        "w": "Ballad",
        "d": "Narrative poem set to music, telling tales of love, loss, and adventure."
      },
      {
        "w": "Free Verse",
        "d": "Poetry without fixed rhyme or meter — liberated by Walt Whitman in the 19th century."
      },
      {
        "w": "Ghazal",
        "d": "Arabic-Persian form of longing couplets, each ending with the poet's own name."
      },
      {
        "w": "Sestina",
        "d": "39-line poem that rotates six end-words through six stanzas in a fixed pattern."
      },
      {
        "w": "Pantoum",
        "d": "Malaysian verse form where alternate lines from one stanza repeat in the next."
      },
      {
        "w": "Tanka",
        "d": "Japanese 5-line poem older than haiku, with a reflective turn in the final lines."
      },
      {
        "w": "Terza Rima",
        "d": "Dante's interlocking rhyme scheme ABA BCB CDC — chains stanzas together endlessly."
      },
      {
        "w": "Elegy",
        "d": "Poem of mourning and lament — Milton's Lycidas, Tennyson's In Memoriam."
      },
      {
        "w": "Epigram",
        "d": "Brief, witty poem with a sharp twist — Oscar Wilde mastered it in prose too."
      },
      {
        "w": "Couplet",
        "d": "Two consecutive rhyming lines — the building block of heroic verse in English."
      },
      {
        "w": "Concrete Poem",
        "d": "Poem whose shape on the page visually mirrors its subject matter."
      },
      {
        "w": "Acrostic",
        "d": "First letters of each line spell a hidden word or message vertically."
      },
      {
        "w": "Cinquain",
        "d": "5-line poem with a specific syllable pattern (2-4-6-8-2) invented by Adelaide Crapsey."
      },
      {
        "w": "Rondel",
        "d": "Medieval French form with two quatrains and a closing couplet, reusing opening lines."
      },
      {
        "w": "Sapphic",
        "d": "Ancient Greek meter invented by Sappho of Lesbos — three long lines and a short."
      },
      {
        "w": "Prose Poem",
        "d": "Blurs the line between poetry and prose — has rhythm without line breaks."
      },
      {
        "w": "Ekphrasis",
        "d": "Poem describing a visual artwork — Keats on a Grecian urn is the masterclass."
      },
      {
        "w": "Ottava Rima",
        "d": "8-line Italian stanza form used by Ariosto, Tasso, and Byron's Don Juan."
      },
      {
        "w": "Erasure Poem",
        "d": "Created by blacking out words in a printed text to reveal a hidden poem."
      },
      {
        "w": "Alexandrine",
        "d": "12-syllable French verse line — the standard meter of Molière and Racine."
      },
      {
        "w": "Triolet",
        "d": "8-line French poem where the first line returns four times in a tight pattern."
      },
      {
        "w": "Spenserian Sonnet",
        "d": "Edmund Spenser's linked sonnet variant — ABAB BCBC CDCD EE rhyme scheme."
      },
      {
        "w": "Carmina Figurata",
        "d": "Latin poems shaped into objects — crosses, eggs, altars — from Late Antiquity."
      },
      {
        "w": "Found Poem",
        "d": "Poetry assembled from existing non-poetic texts like newspapers or instruction manuals."
      },
      {
        "w": "Pastoral",
        "d": "Idealized poem of rural life and shepherds — from ancient Theocritus to Milton."
      },
      {
        "w": "Heroic Couplet",
        "d": "Paired iambic pentameter lines — Pope's devastating weapon of satirical wit."
      },
      {
        "w": "Choka",
        "d": "Long Japanese poem with alternating 5-7 syllable lines, used for epic subjects."
      },
      {
        "w": "Praise Poem",
        "d": "African oral form glorifying ancestors or chiefs — the Zulu izibongo tradition."
      },
      {
        "w": "Tritina",
        "d": "Compact 10-line version of the sestina, rotating three end-words through three stanzas."
      },
      {
        "w": "Trochaic Tetrameter",
        "d": "Longfellow used this galloping meter in Hiawatha — strong-weak, four beats per line."
      }
    ]
  },
  {
    "name": "assassination attempts that changed history",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Franz Ferdinand",
        "d": "Archduke's murder in Sarajevo 1914 triggered the cascade of alliances into WWI."
      },
      {
        "w": "Abraham Lincoln",
        "d": "Shot by John Wilkes Booth at Ford's Theatre, died the next morning in 1865."
      },
      {
        "w": "Julius Caesar",
        "d": "Stabbed 23 times by senators on the Ides of March — Et tu, Brute?"
      },
      {
        "w": "Yitzhak Rabin",
        "d": "Israeli PM killed in 1995 by a nationalist — derailed the Oslo peace process."
      },
      {
        "w": "Mahatma Gandhi",
        "d": "Architect of Indian independence shot three times by a Hindu nationalist in 1948."
      },
      {
        "w": "Martin Luther King",
        "d": "Civil rights leader shot on a Memphis motel balcony in April 1968."
      },
      {
        "w": "Rasputin",
        "d": "Romanov mystic poisoned, shot, beaten, and drowned — refused to die easily in 1916."
      },
      {
        "w": "Indira Gandhi",
        "d": "Indian PM assassinated by her own Sikh bodyguards following the Golden Temple siege."
      },
      {
        "w": "Trotsky",
        "d": "Bolshevik revolutionary killed in Mexican exile by Stalin's agent with an ice axe."
      },
      {
        "w": "Anwar Sadat",
        "d": "Egyptian president who made peace with Israel was shot by soldiers during a parade."
      },
      {
        "w": "RFK",
        "d": "Robert Kennedy shot in a California hotel moments after winning the 1968 primary."
      },
      {
        "w": "Malcolm X",
        "d": "Black nationalist leader shot by Nation of Islam members at a Manhattan rally."
      },
      {
        "w": "Benazir Bhutto",
        "d": "Pakistan's first female PM killed by a suicide bomb at a rally in 2007."
      },
      {
        "w": "Park Chung-hee",
        "d": "South Korean dictator shot by his own intelligence chief during a dinner in 1979."
      },
      {
        "w": "Patrice Lumumba",
        "d": "Congo's first PM executed with Western backing — symbol of Cold War betrayal."
      },
      {
        "w": "Georgi Markov",
        "d": "Bulgarian dissident assassinated with a ricin-tipped umbrella on Waterloo Bridge."
      },
      {
        "w": "Louis Mountbatten",
        "d": "Queen's cousin killed by an IRA bomb on his fishing boat in Ireland, 1979."
      },
      {
        "w": "Benigno Aquino",
        "d": "Philippine opposition leader shot on the airport tarmac returning from US exile."
      },
      {
        "w": "Inejiro Asanuma",
        "d": "Japanese socialist leader stabbed on live TV by an ultranationalist in 1960."
      },
      {
        "w": "Alexander II",
        "d": "Russian tsar who freed the serfs was blown up by a bomb in St. Petersburg."
      },
      {
        "w": "Reinhard Heydrich",
        "d": "Architect of the Holocaust mortally wounded by Czech paratroopers in Prague."
      },
      {
        "w": "Olof Palme",
        "d": "Swedish PM shot walking home from the cinema — murder unsolved for 34 years."
      },
      {
        "w": "James Garfield",
        "d": "US president shot in 1881 — doctors' unhygienic probing of the wound actually killed him."
      },
      {
        "w": "Aldo Moro",
        "d": "Italian PM kidnapped and murdered by Red Brigades, shaking Western democracy in 1978."
      },
      {
        "w": "Archduke Maximilian",
        "d": "Habsburg emperor of Mexico captured and shot by Juárez's republican forces in 1867."
      },
      {
        "w": "JFK",
        "d": "John F. Kennedy shot in Dallas motorcade in 1963 — most debated murder in history."
      },
      {
        "w": "Archduke Francis Ferdinand",
        "d": "Second attempt on June 28 succeeded when Gavrilo Princip found him stopped near a deli."
      },
      {
        "w": "Thomas Becket",
        "d": "Archbishop of Canterbury murdered in his cathedral by knights loyal to Henry II."
      },
      {
        "w": "Narendar Modi",
        "d": "Multiple plots against India's PM foiled by Indian security agencies in recent years."
      },
      {
        "w": "Park Geun-hye",
        "d": "South Korean president survived multiple threats before her eventual political downfall."
      },
      {
        "w": "Mahmoud Abbas",
        "d": "Palestinian Authority president reportedly targeted in multiple foiled assassination plots."
      },
      {
        "w": "Alexander Hamilton",
        "d": "Founding Father shot in a duel by political rival Aaron Burr in 1804."
      },
      {
        "w": "Robert Ford",
        "d": "Shot Jesse James in the back for reward money — America's most famous betrayal."
      },
      {
        "w": "Sophie Choubar",
        "d": "Duchess of Hohenberg, killed alongside Franz Ferdinand — often forgotten victim of 1914."
      },
      {
        "w": "Shaka Zulu",
        "d": "Founder of the Zulu Kingdom stabbed by his own half-brothers in 1828."
      }
    ]
  },
  {
    "name": "cults & infamous leaders",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Jonestown",
        "d": "Jim Jones led 900+ followers to mass cyanide suicide in Guyana jungle, 1978."
      },
      {
        "w": "Aum Shinrikyo",
        "d": "Japanese doomsday cult released sarin on Tokyo subway, killing 13 people in 1995."
      },
      {
        "w": "Branch Davidians",
        "d": "David Koresh's sect ended in a fiery FBI standoff at Waco, Texas in 1993."
      },
      {
        "w": "Heaven's Gate",
        "d": "39 members wore Nike shoes and took their lives to board a spacecraft behind Hale-Bopp."
      },
      {
        "w": "Manson Family",
        "d": "Charles Manson's followers committed the Tate-LaBianca murders to start a race war."
      },
      {
        "w": "Rajneeshees",
        "d": "Osho's Oregon commune orchestrated the first bioterror attack on US soil in 1984."
      },
      {
        "w": "NXIVM",
        "d": "Self-help empire hiding a secret sex-slave hierarchy — leader Raniere convicted in 2019."
      },
      {
        "w": "Order Solar Temple",
        "d": "Swiss-Canadian cult whose members died in coordinated arson and suicides across three countries."
      },
      {
        "w": "People's Temple",
        "d": "Jim Jones's church preaching socialism and racial equality — ended at Jonestown."
      },
      {
        "w": "Children of God",
        "d": "Radical evangelical cult that used sex to recruit — later renamed The Family."
      },
      {
        "w": "Unification Church",
        "d": "Sun Myung Moon's 'Moonies' performed mass arranged weddings for thousands of followers."
      },
      {
        "w": "Westboro Baptist",
        "d": "Virulently homophobic Phelps family church, infamous for picketing military funerals."
      },
      {
        "w": "Scientology",
        "d": "L. Ron Hubbard's sci-fi-based religion with celebrity followers and aggressive legal tactics."
      },
      {
        "w": "Ant Hill Kids",
        "d": "Canadian cult where Roch Thériault tortured and mutilated followers while playing messiah."
      },
      {
        "w": "Love Has Won",
        "d": "Cult led by a woman calling herself 'Mother God' whose mummified body was found glittered."
      },
      {
        "w": "Synanon",
        "d": "Drug rehab turned violent cult that put a rattlesnake in a lawyer's mailbox."
      },
      {
        "w": "The Source Family",
        "d": "1970s Hollywood health food cult led by Father Yod — rock band included."
      },
      {
        "w": "Twelve Tribes",
        "d": "Communal Christian sect accused of child abuse and homophobia living off the grid."
      },
      {
        "w": "The Family",
        "d": "Reclusive Anne Hamilton-Byrne's group that dyed children's hair blonde and abused them."
      },
      {
        "w": "Fundamentalist LDS",
        "d": "Polygamist Mormon splinter group led by Warren Jeffs, now serving life in prison."
      },
      {
        "w": "Breatharianism",
        "d": "Cult claiming human beings can survive on sunlight and air alone — followers have died."
      },
      {
        "w": "The Way International",
        "d": "Bible study cult founded by Victor Paul Wierwille, accused of covering up sexual abuse."
      },
      {
        "w": "Freedomites",
        "d": "Canadian Doukhobor extremists who burned schools and marched naked in protest."
      },
      {
        "w": "Aggressive Christianity",
        "d": "American militant cult that had followers legally change their names to soldier ranks."
      },
      {
        "w": "The Process Church",
        "d": "UK satanic-influenced group fascinated Manson — worshipped both Christ and Satan."
      },
      {
        "w": "Order of the Solar Temple",
        "d": "Rosicrucian cult believed they were transitioning to a higher spiritual dimension."
      },
      {
        "w": "Concerned Christians",
        "d": "Denver cult whose leader predicted his 1998 death as a prophet — he didn't die."
      },
      {
        "w": "Movement for Restoration of Ten Commandments",
        "d": "Ugandan cult whose 2000 mass death killed over 900 — possibly more than Jonestown."
      },
      {
        "w": "Lev Tahor",
        "d": "Ultra-Orthodox extremist Jewish sect that fled Canada over child abuse allegations."
      },
      {
        "w": "The Family International",
        "d": "Radical free-love Christian cult that sent members to seduce outsiders for Jesus."
      },
      {
        "w": "Society of St. Pius X",
        "d": "Traditionalist Catholic breakaway rejecting Vatican II — 600,000 members worldwide."
      },
      {
        "w": "Church of Bible Understanding",
        "d": "Stewart Traill's authoritarian Bible study group that exploited young poor recruits."
      },
      {
        "w": "Exclusive Brethren",
        "d": "Christian sect so insular members cannot eat with non-members, even family."
      },
      {
        "w": "Kashi Ashram",
        "d": "Florida spiritual community led by 'Ma' Joyce Green who claimed to be a divine avatar."
      },
      {
        "w": "Church Universal",
        "d": "Elizabeth Clare Prophet led her Montana cult to stockpile weapons for nuclear Armageddon."
      }
    ]
  },
  {
    "name": "underworld slang & criminal jargon",
    "tags": {
      "a": "human",
      "b": "geek",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Snitch",
        "d": "Informant who betrays associates to law enforcement — the lowest form of life in prison."
      },
      {
        "w": "Fence",
        "d": "Criminal middleman who buys stolen goods and resells them for a profit."
      },
      {
        "w": "Speakeasy",
        "d": "Illegal bar operating during Prohibition where you spoke easy about the password."
      },
      {
        "w": "Made Man",
        "d": "Fully initiated member of the Italian-American Mafia — untouchable by outsiders."
      },
      {
        "w": "Racket",
        "d": "Criminal enterprise disguised as legitimate business, usually backed by intimidation."
      },
      {
        "w": "Heist",
        "d": "Carefully planned robbery of a bank, vault, or high-value target."
      },
      {
        "w": "Shakedown",
        "d": "Extorting money from someone using threats — the oldest mob business model."
      },
      {
        "w": "Capo",
        "d": "Mafia captain who runs a crew of soldiers and reports to the underboss."
      },
      {
        "w": "Money Laundering",
        "d": "Process of making dirty criminal cash appear as legitimate income."
      },
      {
        "w": "Bootlegger",
        "d": "Prohibition-era smuggler of illegal alcohol — named for hiding flasks in boot legs."
      },
      {
        "w": "Omertà",
        "d": "Mafia code of silence — talk to police and your life expectancy drops sharply."
      },
      {
        "w": "Soldato",
        "d": "Foot soldier of the Italian Mafia — the lowest rank of 'made' member."
      },
      {
        "w": "Consigliere",
        "d": "Mafia advisor who counsels the boss on strategy — like a criminal chief of staff."
      },
      {
        "w": "Numbers Game",
        "d": "Illegal street lottery also called the policy game — ran by mob in every city."
      },
      {
        "w": "Whack",
        "d": "Mafia slang for murder — as in, they had him whacked behind the restaurant."
      },
      {
        "w": "Inside Man",
        "d": "Criminal confederate working within the target organization to enable a theft."
      },
      {
        "w": "Bagman",
        "d": "Person who collects bribe money and delivers it — the mob's walking bank transfer."
      },
      {
        "w": "Loan Shark",
        "d": "Illegal moneylender charging sky-high interest, backed by violence for late payers."
      },
      {
        "w": "Kite",
        "d": "Forged check or prison contraband letter — flying a kite means smuggling word out."
      },
      {
        "w": "Wiseguy",
        "d": "Mafia insider — a connected guy who's in the life, like Henry Hill in Goodfellas."
      },
      {
        "w": "Skimming",
        "d": "Stealing a percentage off the top before recording revenue — classic casino fraud."
      },
      {
        "w": "Drop House",
        "d": "Safe house used to hold smuggled people or drugs while awaiting distribution."
      },
      {
        "w": "Ghost",
        "d": "Criminal who lives under a completely false identity — invisible to authorities."
      },
      {
        "w": "Burn Notice",
        "d": "Intelligence message that marks an operative as unreliable — cut off from networks."
      },
      {
        "w": "Perjury Trap",
        "d": "Legal maneuver where investigators ask questions hoping witnesses will lie under oath."
      },
      {
        "w": "Fixer",
        "d": "Person who makes problems disappear — legal, logistical, or criminal problems."
      },
      {
        "w": "Boss of Bosses",
        "d": "Capo di tutti capi — supreme Mafia boss who commands all the crime families."
      },
      {
        "w": "Plant",
        "d": "Undercover cop embedded in a criminal organization to gather intelligence."
      },
      {
        "w": "Hot Car",
        "d": "Stolen vehicle — either being driven for a crime or awaiting chop-shop processing."
      },
      {
        "w": "Running Wild",
        "d": "Criminal operating without mob sanction — extremely dangerous and often fatal."
      },
      {
        "w": "Front",
        "d": "Legitimate business used to launder money or provide cover for criminal operations."
      },
      {
        "w": "Sit-down",
        "d": "Formal Mafia meeting to resolve disputes between crime family members."
      },
      {
        "w": "Flipping",
        "d": "When a criminal agrees to cooperate with prosecutors in exchange for a lighter sentence."
      },
      {
        "w": "Green Light",
        "d": "Gang or prison authorization to attack or kill a specific person."
      },
      {
        "w": "Dirty Money",
        "d": "Cash obtained through criminal activity that hasn't been laundered yet."
      }
    ]
  },
  {
    "name": "doomsday scenarios (science-based)",
    "tags": {
      "a": "geek",
      "b": "geek",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Asteroid Impact",
        "d": "A Chicxulub-scale rock impact would trigger mass extinction within months."
      },
      {
        "w": "Supervolcano",
        "d": "Yellowstone eruption would bury North America in ash and trigger volcanic winter."
      },
      {
        "w": "Gamma-ray Burst",
        "d": "A nearby stellar explosion would strip Earth's ozone layer and sterilize the surface."
      },
      {
        "w": "AI Singularity",
        "d": "Superintelligent AI optimizes for its own goals — humans become an obstacle."
      },
      {
        "w": "Nuclear Winter",
        "d": "Soot from nuclear explosions blocks sunlight, freezing crops worldwide for years."
      },
      {
        "w": "Vacuum Decay",
        "d": "A bubble of lower-energy quantum vacuum expands at lightspeed, erasing all physics."
      },
      {
        "w": "Solar Flare",
        "d": "A Carrington-level event would fry every grid and satellite, collapsing modern civilization."
      },
      {
        "w": "Grey Goo",
        "d": "Self-replicating nanobots consume all matter on Earth converting it to copies of themselves."
      },
      {
        "w": "Heat Death",
        "d": "Universe reaches maximum entropy — no energy gradients left, everything uniformly cold."
      },
      {
        "w": "Pole Reversal",
        "d": "Earth's magnetic field collapses during reversal, exposing life to lethal solar radiation."
      },
      {
        "w": "Pandemic X",
        "d": "A pathogen combining COVID transmissibility with Ebola lethality — WHO's nightmare scenario."
      },
      {
        "w": "Ocean Acidification",
        "d": "CO₂ absorption acidifies oceans, collapsing marine food chains from the base up."
      },
      {
        "w": "Runaway Greenhouse",
        "d": "Positive feedback loops evaporate all water and cook Earth like Venus."
      },
      {
        "w": "Mega-tsunami",
        "d": "Canary Islands volcanic collapse could send 500-meter waves across the Atlantic."
      },
      {
        "w": "Antibiotic Resistance",
        "d": "Superbugs render all antibiotics useless — routine surgery becomes fatal again."
      },
      {
        "w": "Coronal Mass Ejection",
        "d": "A massive solar plasma burst overwhelms Earth's magnetic field and fries electronics."
      },
      {
        "w": "Ecosystem Collapse",
        "d": "Biodiversity loss cascades until food webs unravel and agriculture becomes impossible."
      },
      {
        "w": "Hypercane",
        "d": "Theoretical mega-hurricane with 800 kph winds triggered by catastrophically warm oceans."
      },
      {
        "w": "Solar Expansion",
        "d": "Sun's red giant phase will vaporize Earth in about 5 billion years."
      },
      {
        "w": "Strangelets",
        "d": "Hypothetical strange matter that converts normal matter on contact — could eat the planet."
      },
      {
        "w": "Massive Methane Release",
        "d": "Arctic permafrost thaw releases methane, massively accelerating runaway climate change."
      },
      {
        "w": "Big Rip",
        "d": "Dark energy accelerates until it tears apart galaxies, atoms, and spacetime itself."
      },
      {
        "w": "Rogue AI Bioweapon",
        "d": "AI-designed pathogen optimized to evade every immune system and vaccine platform."
      },
      {
        "w": "Geomagnetic Storm",
        "d": "Extreme solar storm collapses power grids for months, killing billions through system failure."
      },
      {
        "w": "Bioprinted Pandemic",
        "d": "Synthetic biology lowers bioweapon creation threshold — any PhD could end civilization."
      },
      {
        "w": "Nanotech Grey Goo",
        "d": "Eric Drexler's nightmare — molecular assemblers replicate uncontrollably, consuming the biosphere."
      },
      {
        "w": "Superplague",
        "d": "Engineered bacterium combining extreme lethality and airborne transmission rates."
      },
      {
        "w": "Orbital Debris Cascade",
        "d": "Kessler Syndrome — chain-reaction satellite collisions render Earth orbit unusable forever."
      },
      {
        "w": "Resource War",
        "d": "Water and food scarcity triggers global nuclear conflict as nations fight to survive."
      },
      {
        "w": "Magnetic Monopole",
        "d": "A single monopole particle could catalyze proton decay, causing all matter to dissolve."
      },
      {
        "w": "Coronal Hole Stream",
        "d": "A persistent solar wind stream erodes the magnetosphere over decades, increasing radiation."
      },
      {
        "w": "Technological Unemployment",
        "d": "Automation eliminates all meaningful employment faster than society can adapt."
      },
      {
        "w": "Population Crash",
        "d": "Fertility collapse below 1.0 triggers irreversible demographic spiral of civilizational decline."
      },
      {
        "w": "Subduction Megaquake",
        "d": "Cascadia Subduction Zone rupture triggers Pacific Northwest mega-disaster scientists predict."
      },
      {
        "w": "Global Crop Failure",
        "d": "Three simultaneous breadbasket droughts collapse global food supply within a single year."
      }
    ]
  },
  {
    "name": "notorious prisons",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Alcatraz",
        "d": "Island fortress in San Francisco Bay — America's most famous inescapable prison."
      },
      {
        "w": "Bastille",
        "d": "Parisian royal prison stormed in 1789 — symbol of tyranny, held only 7 prisoners."
      },
      {
        "w": "Robben Island",
        "d": "South African prison where Nelson Mandela spent 18 of his 27 years behind bars."
      },
      {
        "w": "Lubyanka",
        "d": "KGB headquarters and prison in Moscow — going in was easy, coming out was not."
      },
      {
        "w": "Sing Sing",
        "d": "New York maximum security prison on the Hudson — source of 'sent up the river.'"
      },
      {
        "w": "Devil's Island",
        "d": "French Guiana penal colony where Dreyfus was exiled — hot, humid, and inescapable."
      },
      {
        "w": "Tower of London",
        "d": "Medieval fortress-prison that held Anne Boleyn, Guy Fawkes, and countless others."
      },
      {
        "w": "Guantánamo",
        "d": "US detention facility in Cuba for terrorism suspects, infamous for legal limbo."
      },
      {
        "w": "ADX Florence",
        "d": "America's only Supermax — solitary confinement for the most dangerous prisoners on Earth."
      },
      {
        "w": "Château d'If",
        "d": "Island fortress near Marseille, real prison made immortal by The Count of Monte Cristo."
      },
      {
        "w": "Spandau Prison",
        "d": "Berlin fortress where the last Nazi war criminals served life sentences."
      },
      {
        "w": "Andersonville",
        "d": "Confederate POW camp where 13,000 Union soldiers died of disease and starvation."
      },
      {
        "w": "Black Dolphin",
        "d": "Russia's harshest prison in Siberia, housing murderers and terrorists in extreme isolation."
      },
      {
        "w": "Rikers Island",
        "d": "New York City's infamous jail complex on an island in the East River."
      },
      {
        "w": "Newgate",
        "d": "London's most notorious prison for 700 years — public hangings drew huge crowds."
      },
      {
        "w": "Carandiru",
        "d": "São Paulo prison where 111 inmates were massacred by police in 1992."
      },
      {
        "w": "Abu Ghraib",
        "d": "Iraqi prison notorious for prisoner abuse scandals that shocked the world in 2004."
      },
      {
        "w": "San Quentin",
        "d": "California's oldest prison — Death Row home to hundreds awaiting execution."
      },
      {
        "w": "Eastern State",
        "d": "Philadelphia penitentiary that invented solitary confinement as 'humane' punishment."
      },
      {
        "w": "Tadmor",
        "d": "Syrian desert prison where inmates endure one of Earth's most brutal regimes."
      },
      {
        "w": "Auschwitz",
        "d": "Nazi concentration and extermination camp where 1.1 million people were murdered."
      },
      {
        "w": "Pul-e-Charkhi",
        "d": "Afghan prison east of Kabul, site of mass executions under the Communist regime."
      },
      {
        "w": "Hoa Lo Prison",
        "d": "Hanoi Hilton — Vietnamese prison where American POWs including John McCain were held."
      },
      {
        "w": "Elmina Castle",
        "d": "Ghanaian slave-holding fortress where millions of Africans were imprisoned before transport."
      },
      {
        "w": "Petak Island",
        "d": "Russia's most isolated prison on an island in Lake White — escape truly impossible."
      },
      {
        "w": "La Santé",
        "d": "Paris's central prison where famous inmates included Landru and Guillaume Apollinaire."
      },
      {
        "w": "Pitești Prison",
        "d": "Romanian prison famous for the Pitești Experiment — re-education through extreme torture."
      },
      {
        "w": "Camp 14",
        "d": "North Korean political prison camp where Shin Dong-hyuk was born and tortured."
      },
      {
        "w": "Pollsmoor",
        "d": "South African prison where Mandela was later moved — notorious overcrowding and gangs."
      },
      {
        "w": "Port Arthur",
        "d": "Australian convict settlement where 1,000 prisoners were worked to death in Tasmania."
      },
      {
        "w": "Gulags",
        "d": "Soviet forced labor camps spread across Siberia — Solzhenitsyn documented their horror."
      },
      {
        "w": "Maze Prison",
        "d": "Northern Irish prison where IRA hunger strikers including Bobby Sands died in 1981."
      },
      {
        "w": "Saydnaya",
        "d": "Syrian prison north of Damascus — Amnesty International called it a human slaughterhouse."
      },
      {
        "w": "Diyarbakır Prison",
        "d": "Turkish prison with a brutal record — site of systematic torture after the 1980 coup."
      },
      {
        "w": "Peter and Paul Fortress",
        "d": "Tsarist St. Petersburg citadel that imprisoned Dostoyevsky and generations of dissidents."
      }
    ]
  },
  {
    "name": "weapons that changed warfare",
    "tags": {
      "a": "human",
      "b": "geek",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Longbow",
        "d": "English archers with longbows shredded French knights at Agincourt — range and rate mattered."
      },
      {
        "w": "Gunpowder",
        "d": "Chinese invention that rendered stone walls obsolete and ended the age of the knight."
      },
      {
        "w": "Gatling Gun",
        "d": "First multi-barrel rapid-fire weapon, ancestor of all modern machine guns."
      },
      {
        "w": "Atomic Bomb",
        "d": "Fat Man and Little Boy instantly killed 200,000 people and ended WWII in the Pacific."
      },
      {
        "w": "Trebuchet",
        "d": "Medieval counterweight siege engine that could hurl 200kg rocks over 300 meters."
      },
      {
        "w": "Greek Fire",
        "d": "Byzantine incendiary weapon that burned even on water — formula forever lost."
      },
      {
        "w": "AK-47",
        "d": "Kalashnikov's 1947 design — most produced weapon ever, conflicts on every continent."
      },
      {
        "w": "Dynamite",
        "d": "Nobel's invention made mining possible and warfare more lethal, funding the peace prize."
      },
      {
        "w": "Crossbow",
        "d": "Mechanical bow that could pierce armor — made military skill less important than technology."
      },
      {
        "w": "Napalm",
        "d": "Jellied gasoline that sticks and burns — Vietnam War's most infamous weapon."
      },
      {
        "w": "Tank",
        "d": "WWI British secret weapon that ended the stalemate of trench warfare."
      },
      {
        "w": "Drone",
        "d": "Unmanned aircraft revolutionizes war — targeted strikes from operators thousands of miles away."
      },
      {
        "w": "Poison Gas",
        "d": "WWI chemical weapons killed 90,000 and caused a million casualties of mustard gas terror."
      },
      {
        "w": "Submarine",
        "d": "Silent hunter beneath the waves — WWI U-boats nearly starved Britain into submission."
      },
      {
        "w": "ICBM",
        "d": "Intercontinental ballistic missile — delivers nuclear warheads across continents in 30 minutes."
      },
      {
        "w": "Aircraft Carrier",
        "d": "Floating airbase that made naval war three-dimensional — Midway proved its supremacy."
      },
      {
        "w": "Landmine",
        "d": "Buried explosive — over 100 million still kill civilians long after wars end."
      },
      {
        "w": "Flamethrower",
        "d": "WWI German weapon that panicked soldiers — cleared bunkers and terrified enemies."
      },
      {
        "w": "Hydrogen Bomb",
        "d": "Fusion weapon 1,000 times more powerful than the atomic bombs dropped on Japan."
      },
      {
        "w": "Stirrup",
        "d": "Simple invention gave mounted warriors stability — created the armored knight."
      },
      {
        "w": "Radar",
        "d": "Britain's secret Chain Home radar network won the Battle of Britain in 1940."
      },
      {
        "w": "Barbed Wire",
        "d": "Cheap fencing transformed battlefields into killing grounds in WWI."
      },
      {
        "w": "Stealth Bomber",
        "d": "B-2 Spirit's radar-absorbing shape makes a 172-foot wing effectively invisible to radar."
      },
      {
        "w": "Cluster Bomb",
        "d": "Scatters hundreds of submunitions over wide areas — banned by 110 nations."
      },
      {
        "w": "Anti-tank Missile",
        "d": "Shoulder-fired missiles made expensive tanks vulnerable to infantry — changing land warfare."
      },
      {
        "w": "Catapult",
        "d": "Ancient tension-powered siege engine that terrorized city defenders for millennia."
      },
      {
        "w": "Explosive Shell",
        "d": "Hollow cannon ball filled with black powder — transformed artillery from push to explosion."
      },
      {
        "w": "Machine Gun",
        "d": "Maxim's 1884 invention made frontal infantry attacks suicidal against any defender."
      },
      {
        "w": "Biological Weapon",
        "d": "Catapulting plague-infected corpses over walls — medieval germ warfare with real results."
      },
      {
        "w": "Nuke Submarine",
        "d": "Nuclear-powered SSBN provides hidden second-strike deterrence that guarantees mutually assured destruction."
      },
      {
        "w": "Spear",
        "d": "Humanity's first true weapon of war — Greek hoplite phalanx made it civilization-defining."
      },
      {
        "w": "Javelin Missile",
        "d": "US fire-and-forget anti-tank system — devastated Russian armor in Ukraine."
      },
      {
        "w": "Nerve Agent",
        "d": "VX and Sarin disrupt nervous systems — a teaspoon of VX can kill thousands."
      },
      {
        "w": "RPG",
        "d": "Rocket-propelled grenade gives guerrillas armor-piercing capability for under $1,000."
      },
      {
        "w": "Precision Bomb",
        "d": "GPS-guided munitions hit within meters — surgical strikes replaced carpet bombing."
      }
    ]
  },
  {
    "name": "dictators' bizarre habits",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Gaddafi",
        "d": "Libyan dictator who refused to sleep under a roof, traveled with a Bedouin tent."
      },
      {
        "w": "Turkmenbashi",
        "d": "Renamed months after his family members and banned lip-syncing across Turkmenistan."
      },
      {
        "w": "Kim Jong-il",
        "d": "North Korean leader who claimed to have invented the hamburger and shot 18 holes-in-one."
      },
      {
        "w": "Idi Amin",
        "d": "Ugandan dictator who gave himself titles including 'Conqueror of the British Empire.'"
      },
      {
        "w": "Caligula",
        "d": "Roman emperor allegedly made his horse a senator — history's benchmark for unhinged rulers."
      },
      {
        "w": "Nero",
        "d": "Roman emperor who performed on stage while Rome burned, blaming it on Christians."
      },
      {
        "w": "Bokassa",
        "d": "Central African emperor who may have fed his enemies to his pet crocodiles."
      },
      {
        "w": "Mobutu",
        "d": "Wore a leopard-skin hat, banned Western suits, renamed the Congo after himself."
      },
      {
        "w": "Ceaușescu",
        "d": "Romanian dictator who had all typewriters registered, and his wife claimed his discoveries."
      },
      {
        "w": "Kim Jong-un",
        "d": "North Korean leader who executed an uncle by feeding him to hungry dogs, allegedly."
      },
      {
        "w": "Hussein",
        "d": "Saddam had 78 palaces, tested food with biotoxin detectors, and rewrote history textbooks."
      },
      {
        "w": "Franco",
        "d": "Spanish dictator who kept the mummified hand of Saint Teresa in his bedroom."
      },
      {
        "w": "Pol Pot",
        "d": "Khmer Rouge leader who ordered evacuation of cities and abolished money overnight."
      },
      {
        "w": "Papa Doc Duvalier",
        "d": "Haitian dictator who modeled his appearance on Baron Samedi, the voodoo deity of death."
      },
      {
        "w": "Enver Hoxha",
        "d": "Albanian paranoid who built 700,000 bunkers — one for every four Albanian citizens."
      },
      {
        "w": "Mussolini",
        "d": "Italian dictator who wore platform shoes and controlled his own press clippings obsessively."
      },
      {
        "w": "Trujillo",
        "d": "Dominican dictator who required all citizens to display his portrait in their homes."
      },
      {
        "w": "Saparmurat Niyazov",
        "d": "Commissioned a golden rotating statue of himself in the desert, renamed the months."
      },
      {
        "w": "Vlad the Impaler",
        "d": "Romanian prince who impaled thousands of enemies on stakes and dined among them."
      },
      {
        "w": "Ivan the Terrible",
        "d": "Russian tsar killed his own son in rage then repented by becoming a monk."
      },
      {
        "w": "Qin Shi Huang",
        "d": "China's first emperor took mercury pills for immortality — the mercury likely killed him."
      },
      {
        "w": "Francisco Macías",
        "d": "Equatorial Guinea dictator who banned glasses as a sign of Western intelligence."
      },
      {
        "w": "Amin Dada",
        "d": "Awarded himself a Victoria Cross, claimed to be 'King of Scotland,' and ate human flesh."
      },
      {
        "w": "Rafael Trujillo",
        "d": "Dominican dictator who required his name to appear on all churches above God's name."
      },
      {
        "w": "Papa Doc",
        "d": "François Duvalier modeled his secret police Tonton Macoutes on actual voodoo spirits."
      },
      {
        "w": "Kim Il-sung",
        "d": "North Korea's 'Eternal President' remained head of state even after death."
      },
      {
        "w": "Mao Zedong",
        "d": "Never brushed his teeth — green-filmed and unbothered, claiming tea was sufficient cleaning."
      },
      {
        "w": "Hitler",
        "d": "Was terrified of being touched and had extreme food anxieties and hypochondriac obsessions."
      },
      {
        "w": "Stalin",
        "d": "Stalin had his colleagues' phones tapped and personally reviewed execution lists with breakfast."
      },
      {
        "w": "Turkmenbashy",
        "d": "Ordered the Karakum Desert planted with wheat despite agricultural impossibility."
      },
      {
        "w": "Bashar al-Assad",
        "d": "Trained as an ophthalmologist and enjoyed collecting Phil Collins albums while bombing Syria."
      },
      {
        "w": "Enver Pasha",
        "d": "Young Turk leader who launched WWI campaigns fantasizing about a pan-Turkic empire."
      },
      {
        "w": "Muammar al-Gaddafi",
        "d": "Demanded female virgin bodyguards, and required world leaders to meet him only in a tent."
      },
      {
        "w": "Lukashenko",
        "d": "Belarusian dictator who still personally drives tractors and harvests potatoes for state TV."
      },
      {
        "w": "Bokassa Coronation",
        "d": "Central African emperor spent one-third of national GDP on his absurd self-crowning ceremony."
      }
    ]
  },
  {
    "name": "infamous scientific frauds",
    "tags": {
      "a": "geek",
      "b": "geek",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Piltdown Man",
        "d": "Fake fossil 'missing link' fooled scientists for 41 years — human skull, orangutan jaw."
      },
      {
        "w": "Theranos",
        "d": "Elizabeth Holmes's blood-testing fraud claimed one drop could run 200 tests. It couldn't."
      },
      {
        "w": "Hwang Woo-suk",
        "d": "Korean stem cell scientist who fabricated cloning breakthroughs — faked data on a massive scale."
      },
      {
        "w": "Andrew Wakefield",
        "d": "Falsified data linking MMR vaccine to autism — sparked anti-vax movement killing thousands."
      },
      {
        "w": "Lysenko",
        "d": "Soviet biologist who rejected Mendelian genetics and caused massive crop failures in the USSR."
      },
      {
        "w": "N-rays",
        "d": "French scientist Blondlot 'discovered' a new radiation form — it existed only in his mind."
      },
      {
        "w": "Cold Fusion",
        "d": "Fleischmann and Pons claimed room-temperature nuclear fusion in 1989 — never replicated."
      },
      {
        "w": "Jan Hendrik Schön",
        "d": "Bell Labs physicist fabricated data in 16 papers — mass fraud in superconductor research."
      },
      {
        "w": "Diederik Stapel",
        "d": "Dutch social psychologist who invented entire experiments and datasets for years."
      },
      {
        "w": "Shinichi Fujimura",
        "d": "Japanese archaeologist who buried artifacts he then 'discovered' — filmed doing so."
      },
      {
        "w": "Paolo Macchiarini",
        "d": "Surgeon implanted synthetic tracheas in patients who didn't need them — most died."
      },
      {
        "w": "Marc Hauser",
        "d": "Harvard monkey cognition researcher found guilty of eight counts of scientific misconduct."
      },
      {
        "w": "Alan Sokal Hoax",
        "d": "Physicist submitted nonsense postmodern paper to a cultural studies journal — it was accepted."
      },
      {
        "w": "Fleischmann-Pons",
        "d": "Cold fusion announcement at press conference without peer review — celebrated then demolished."
      },
      {
        "w": "Memory Water",
        "d": "Jacques Benveniste claimed water remembers molecules — Nature published it, embarrassingly."
      },
      {
        "w": "Replication Crisis",
        "d": "Over half of published psychology studies fail to replicate — systemic science failure."
      },
      {
        "w": "Bogdanov Affair",
        "d": "Twin French TV hosts published gibberish physics papers in peer-reviewed journals."
      },
      {
        "w": "Séralini GMO Study",
        "d": "Retracted study used photos of rats with natural tumors to imply GMO caused cancer."
      },
      {
        "w": "Opioid Sackler Data",
        "d": "Purdue Pharma suppressed and distorted data on OxyContin addiction risk — killing thousands."
      },
      {
        "w": "Schön Superconductor",
        "d": "Jan Schön's superconductor papers contained same noise graphs copied between experiments."
      },
      {
        "w": "Trofim Lysenko",
        "d": "Politically backed pseudoscientist whose crop theories directly caused Soviet famines."
      },
      {
        "w": "Woo-Suk scandal",
        "d": "Hwang's 2005 Science paper on human embryonic stem cell lines was entirely fabricated."
      },
      {
        "w": "Eric Poehlman",
        "d": "Menopause researcher who falsified data in 15 grant applications — first US scientist jailed."
      },
      {
        "w": "Vipul Bhrigu",
        "d": "Grad student who manipulated lab mice experiments — part of supervisor's fraud investigation."
      },
      {
        "w": "Johann Bessler",
        "d": "18th-century inventor who claimed perpetual motion machine — possibly had hidden helpers."
      },
      {
        "w": "Midgley's Leaded Gasoline",
        "d": "GM chemist knowingly hid lead poisoning evidence to keep profitable additive on market."
      },
      {
        "w": "Great Vaccine Debate",
        "d": "Merck whistleblowers alleged mumps vaccine efficacy data was statistically manipulated."
      },
      {
        "w": "Stem Cell Lines",
        "d": "Multiple labs fabricated stem cell data in the 2000s as the field raced for funding."
      },
      {
        "w": "Elsevier Fake Journals",
        "d": "Publisher created seven fake medical journals paid for by Merck to publish favorable studies."
      },
      {
        "w": "Tobacco Research Fraud",
        "d": "Tobacco companies funded research designed to create doubt about smoking-cancer links."
      },
      {
        "w": "Burt IQ Twins Study",
        "d": "Cyril Burt's identical twin IQ data had suspiciously perfect correlations — likely fabricated."
      },
      {
        "w": "Pruitt Research Suppression",
        "d": "EPA chief systematically suppressed climate and pollution data to benefit industry."
      },
      {
        "w": "Protein Data Fabrication",
        "d": "Prominent crystallographers found to have fabricated protein structure data in journals."
      },
      {
        "w": "Stanford Prison Experiment",
        "d": "Philip Zimbardo's famous study had scripted behavior — guards were coached to be brutal."
      },
      {
        "w": "Surgeon's Loch Ness Photo",
        "d": "1934 Nessie photo was a toy submarine with a sculpted neck."
      }
    ]
  },
  {
    "name": "viral dances",
    "tags": {
      "a": "human",
      "b": "pop",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Floss",
        "d": "Backpack Kid's hip-swinging arm-flapping move conquered Fortnite and playgrounds worldwide."
      },
      {
        "w": "Moonwalk",
        "d": "Michael Jackson's illusion of gliding backward while walking forward — still unmatched."
      },
      {
        "w": "Gangnam Style",
        "d": "Psy's horse-riding dance became the first YouTube video to hit one billion views."
      },
      {
        "w": "Twerk",
        "d": "Low squat booty-bounce that went from strip clubs to global mainstream via Miley Cyrus."
      },
      {
        "w": "Running Man",
        "d": "90s hip-hop footwork move revived by Seinfeld episode and K-pop groups."
      },
      {
        "w": "Cha-Cha Slide",
        "d": "DJ Casper's instructional line dance that commands you to cha-cha real smooth."
      },
      {
        "w": "Electric Slide",
        "d": "Four-count line dance born in 1976 that appears at every wedding without fail."
      },
      {
        "w": "Dougie",
        "d": "Lean and sway shoulder dip immortalized by Cali Swag District in 2010."
      },
      {
        "w": "Robot",
        "d": "Jerky mechanical body-popping dance that turned humans into machines on the disco floor."
      },
      {
        "w": "Renegade",
        "d": "TikTok's defining arm-sequence choreography by Jalaiah Harmon, stolen by Charli D'Amelio."
      },
      {
        "w": "Wobble",
        "d": "V.I.C.'s booty-drop line dance that rules at Southern weddings and block parties."
      },
      {
        "w": "Worm",
        "d": "Lying on the floor and undulating from chest to hips — breakdancing's most crowd-pleasing move."
      },
      {
        "w": "Hammer Dance",
        "d": "MC Hammer's wide-leg shuffle in parachute pants — U Can't Touch This."
      },
      {
        "w": "Sprinkler",
        "d": "White dad special — arm outstretched rotating like a garden sprinkler while awkwardly swaying."
      },
      {
        "w": "Griddy",
        "d": "NFL touchdown celebration invented by Justin Jefferson — knees bent, arms swinging back."
      },
      {
        "w": "Shmoney Dance",
        "d": "Bobby Shmurda's sideways shuffle that became a viral hit from a prison-recorded video."
      },
      {
        "w": "Twist",
        "d": "Chubby Checker's 1960 hip-rotating dance craze that scandalized a generation of parents."
      },
      {
        "w": "Dab",
        "d": "Head-in-elbow salute — Cam Newton and Migos put it on every field and stage."
      },
      {
        "w": "Break Dance",
        "d": "South Bronx street dance combining acrobatic freezes, power moves, and footwork battles."
      },
      {
        "w": "Vogue",
        "d": "NYC ball culture's runway-pose-battle dance made global by Madonna and Paris Is Burning."
      },
      {
        "w": "Harlem Shake",
        "d": "One dancer alone, bass drops, everyone erupts into chaos — 2013 meme that peaked fast."
      },
      {
        "w": "Stanky Legg",
        "d": "GS Boyz knee-bending side-to-side leg move that swept high school hallways in 2009."
      },
      {
        "w": "Whip",
        "d": "Silentó's driving-wheel arm rotation that paired with the Nae Nae in 2015."
      },
      {
        "w": "Nae Nae",
        "d": "Single-arm raise and hip sway combined with the Whip — Watch Me (Whip/Nae Nae)."
      },
      {
        "w": "Stanky Leg",
        "d": "GS Boyz loose-legged shuffle that shows up at every 2000s nostalgia playlist."
      },
      {
        "w": "Macarena",
        "d": "Los Del Río's sequential arm move that conquered the 1996 Democratic National Convention."
      },
      {
        "w": "YMCA",
        "d": "Village People's arm-spelling anthem turned every stadium crowd into a living typewriter."
      },
      {
        "w": "Orange Justice",
        "d": "Fortnite emote based on a kid's Battle Bus dance audition submission that became iconic."
      },
      {
        "w": "Chicken Dance",
        "d": "Beak, flap, wiggle, clap — the polka-inspired party staple at weddings since 1981."
      },
      {
        "w": "Shoot",
        "d": "BlocBoy JB's kick-and-drop arm move made famous by Drake in God's Plan video."
      },
      {
        "w": "Whoa",
        "d": "Lean back and pause at the exact beat drop — TikTok's signature freeze move."
      },
      {
        "w": "Woah",
        "d": "Fist-pump forward on the beat — a viral TikTok challenge that spread through NFL celebrations."
      },
      {
        "w": "Hit Dem Folks",
        "d": "Atlanta's side-stepping arm-swinging dance popularized on Vine before TikTok existed."
      },
      {
        "w": "Milly Rock",
        "d": "2 Milly's shoulder-shimmy arm rotation — later turned into a Fortnite emote and lawsuit."
      },
      {
        "w": "Hot Girl Walk",
        "d": "Megan Thee Stallion's confident strut turned a TikTok trend into a fitness lifestyle brand."
      }
    ]
  },
  {
    "name": "candy & chocolate bars",
    "tags": {
      "a": "human",
      "b": "pop",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Snickers",
        "d": "Peanut, caramel, nougat, chocolate — the world's best-selling candy bar since 1930."
      },
      {
        "w": "KitKat",
        "d": "Have a break — crispy wafer fingers in milk chocolate beloved in 80 countries."
      },
      {
        "w": "M&M's",
        "d": "Colorful candy-coated chocolate drops — 'melts in your mouth, not in your hands.'"
      },
      {
        "w": "Skittles",
        "d": "Taste the rainbow — fruity chewy candies in a bright assorted bag."
      },
      {
        "w": "Twix",
        "d": "Caramel biscuit finger in chocolate — left vs. right Twix debate still unresolved."
      },
      {
        "w": "Reese's",
        "d": "Peanut butter cups in chocolate — America's best-selling Halloween candy."
      },
      {
        "w": "Toblerone",
        "d": "Swiss triangular milk chocolate with honey-almond nougat in its iconic mountain box."
      },
      {
        "w": "Haribo",
        "d": "German gummy bear pioneers — kids and grown-ups love it so in the ads."
      },
      {
        "w": "Milky Way",
        "d": "Fluffy nougat and caramel in chocolate — lighter than Snickers for good reason."
      },
      {
        "w": "Twizzlers",
        "d": "Red licorice twists perfect for movie theaters and holiday stockings."
      },
      {
        "w": "Starburst",
        "d": "Juicy square fruit chews — pink is universally agreed to be the best flavor."
      },
      {
        "w": "Nerds",
        "d": "Tiny crunchy tangy candy pebbles — two flavors separated in a split box."
      },
      {
        "w": "Sour Patch Kids",
        "d": "Sour first, then sweet — the gummy candy that attacks your mouth in two waves."
      },
      {
        "w": "Butterfinger",
        "d": "Crunchy peanut butter flake covered in chocolate — nobody better lay a finger on it."
      },
      {
        "w": "Ferrero Rocher",
        "d": "Gold-wrapped hazelnut chocolate sphere — the fancy box passed around at Christmas."
      },
      {
        "w": "Jolly Rancher",
        "d": "Super-intense fruit hard candy that stains your tongue and glues your teeth together."
      },
      {
        "w": "Crunch Bar",
        "d": "Nestlé's milk chocolate bar with puffed rice crackle in every bite."
      },
      {
        "w": "Pez",
        "d": "Brick-shaped fruit candy dispensed from character heads — the toy is the point."
      },
      {
        "w": "Cadbury Egg",
        "d": "Easter staple with fondant 'yolk' inside chocolate shell — only available for two months."
      },
      {
        "w": "Airheads",
        "d": "Stretchy chewy taffy in neon flavors — the white mystery flavor still confounds everyone."
      },
      {
        "w": "Gummy Bears",
        "d": "Haribo's little gelatin bears — the O.G. gummy candy since 1922."
      },
      {
        "w": "Pop Rocks",
        "d": "Carbon-dioxide-loaded candy crystals that crackle and pop on your tongue."
      },
      {
        "w": "Ring Pop",
        "d": "Wearable lollipop ring — every 90s kid's edible jewelry accessory."
      },
      {
        "w": "Smarties",
        "d": "Colorful candy-coated chocolate discs from Nestlé — bigger and crunchier than M&Ms."
      },
      {
        "w": "Licorice",
        "d": "Aniseed-flavored chewy candy dividing humanity since ancient Egypt."
      },
      {
        "w": "Kinder Bueno",
        "d": "Crispy hazelnut cream wafer in milk chocolate — Italy's gift to snack civilization."
      },
      {
        "w": "Hershey's Kiss",
        "d": "Teardrop milk chocolate with a paper flag — American chocolate at its most iconic."
      },
      {
        "w": "Twirl",
        "d": "British Cadbury flake-style chocolate bar with a rippled cylindrical core."
      },
      {
        "w": "Bounty",
        "d": "Coconut filling wrapped in milk or dark chocolate — paradise in a bar."
      },
      {
        "w": "Maltesers",
        "d": "Crunchy malt honeycomb balls covered in milk chocolate — light yet impossible to stop eating."
      },
      {
        "w": "After Eight",
        "d": "Thin dark chocolate mint fondant squares in individual envelopes — posh dinner parties."
      },
      {
        "w": "Warheads",
        "d": "Extreme sour hard candy that makes children weep and adults question their choices."
      },
      {
        "w": "PayDay",
        "d": "Salted peanuts rolled around caramel nougat — America's savory-sweet exception."
      },
      {
        "w": "Swedish Fish",
        "d": "Red fish-shaped chewy candy from Sweden that became a US cult favorite."
      },
      {
        "w": "Werther's Original",
        "d": "Buttery caramel hard candy your grandparents kept in a bowl — mysteriously addictive."
      }
    ]
  },
  {
    "name": "theme parks & rides",
    "tags": {
      "a": "human",
      "b": "pop",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Disneyland",
        "d": "Walt Disney's original magic kingdom in Anaheim — the happiest place on Earth since 1955."
      },
      {
        "w": "Six Flags",
        "d": "American thrill-ride chain known for record-breaking roller coasters and long queues."
      },
      {
        "w": "Space Mountain",
        "d": "Disney's iconic indoor roller coaster through simulated deep space darkness."
      },
      {
        "w": "Ferris Wheel",
        "d": "Giant rotating wheel with gondola cars — invented for Chicago World's Fair 1893."
      },
      {
        "w": "Roller Coaster",
        "d": "Gravity-powered steel scream machine — the defining symbol of amusement park thrills."
      },
      {
        "w": "Universal Studios",
        "d": "Movie-themed park where Hogwarts, Springfield, and Jurassic Park are all real places."
      },
      {
        "w": "Walt Disney World",
        "d": "Florida's massive resort with four parks, two water parks, and a fake downtown."
      },
      {
        "w": "Cedar Point",
        "d": "Ohio thrill capital with 18 roller coasters — the most of any park on Earth."
      },
      {
        "w": "Merry-Go-Round",
        "d": "Spinning platform with painted horses that children ride in eternal circles."
      },
      {
        "w": "Log Flume",
        "d": "Water ride in a hollow log-shaped boat culminating in a soaking splashdown."
      },
      {
        "w": "Haunted Mansion",
        "d": "Disney's spooky dark ride with 999 happy haunts always room for one more."
      },
      {
        "w": "Bumper Cars",
        "d": "Electric dodgem cars in an arena — crash into strangers with full societal permission."
      },
      {
        "w": "Drop Tower",
        "d": "Hoist you 100 meters up, pause for maximum dread, then let gravity do its work."
      },
      {
        "w": "Water Slide",
        "d": "Plastic chute delivering you into a pool at alarming speed — swimwear gets tested."
      },
      {
        "w": "Legoland",
        "d": "Theme park entirely built of and themed around plastic interlocking Lego bricks."
      },
      {
        "w": "Pirate Ship",
        "d": "Giant pendulum ride swinging passengers back and forth in a galleon-shaped gondola."
      },
      {
        "w": "Tilt-A-Whirl",
        "d": "Spinning teacup-style platform where carriages rotate unpredictably as the platform curves."
      },
      {
        "w": "Harry Potter World",
        "d": "Universal's Wizarding World where Butterbeer is real and wands choose the wizard."
      },
      {
        "w": "Star Wars Land",
        "d": "Galaxy's Edge at Disney — fly the Millennium Falcon and drink blue milk with Chewie."
      },
      {
        "w": "Monorail",
        "d": "Elevated single-rail transit that makes every theme park feel like the 21st century."
      },
      {
        "w": "Busch Gardens",
        "d": "Wildlife-themed parks combining roller coasters with zoological experiences."
      },
      {
        "w": "Hall of Mirrors",
        "d": "Funhouse corridor of distorting mirrors — skinny, fat, wavy — since fairground beginnings."
      },
      {
        "w": "Bungee Jump",
        "d": "Leap from a platform attached to an elastic cord — madness commercially packaged."
      },
      {
        "w": "Zip Line",
        "d": "Steel cable from high to low — harness up and fly between platforms through treetops."
      },
      {
        "w": "PortAventura",
        "d": "Spain's biggest theme park near Tarragona with Ferrari Land and a Dragon Khan coaster."
      },
      {
        "w": "Splash Mountain",
        "d": "Disney's beloved log flume with a five-story final drop through the Briar Patch."
      },
      {
        "w": "Alton Towers",
        "d": "Britain's top theme park hiding terrifying rides in a Victorian stately home estate."
      },
      {
        "w": "Europa-Park",
        "d": "Germany's largest theme park with themed areas for every European country."
      },
      {
        "w": "Fuji-Q Highland",
        "d": "Japanese park at the foot of Mt. Fuji with some of the world's scariest coasters."
      },
      {
        "w": "Knott's Berry Farm",
        "d": "California's oldest theme park, predating Disneyland, built around a ghost town."
      },
      {
        "w": "Carowinds",
        "d": "Straddling the Carolina border with the Fury 325 — one of the world's tallest coasters."
      },
      {
        "w": "Dollywood",
        "d": "Dolly Parton's Tennessee theme park mixing rides with Appalachian culture and crafts."
      },
      {
        "w": "Hersheypark",
        "d": "Pennsylvania park built by the chocolate company — chocolate-themed rides included."
      },
      {
        "w": "Liseberg",
        "d": "Sweden's most visited attraction, a classic Gothenburg park since 1923 with stellar coasters."
      },
      {
        "w": "Thorpe Park",
        "d": "Britain's most intense thrill park with Stealth launching 0-80mph in 1.9 seconds."
      }
    ]
  },
  {
    "name": "superstar athletes right now",
    "tags": {
      "a": "human",
      "b": "sport",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Kylian Mbappé",
        "d": "France's lightning striker, signed by Real Madrid for a record-breaking fee."
      },
      {
        "w": "Shohei Ohtani",
        "d": "Baseball's unicorn — elite pitcher AND home run slugger, $700M contract with Dodgers."
      },
      {
        "w": "Max Verstappen",
        "d": "Red Bull's dominant Dutch driver, three consecutive F1 world championships."
      },
      {
        "w": "Steph Curry",
        "d": "Revolutionized basketball by making the 30-foot three-pointer a routine weapon."
      },
      {
        "w": "Erling Haaland",
        "d": "Norwegian goal machine who broke the Premier League scoring record in his first season."
      },
      {
        "w": "Iga Świątek",
        "d": "Polish tennis queen dominating clay courts, multiple French Open titles."
      },
      {
        "w": "Patrick Mahomes",
        "d": "Kansas City Chiefs QB with two Super Bowl MVPs and a sidearm throw defying physics."
      },
      {
        "w": "Carlos Alcaraz",
        "d": "Spanish teenage prodigy who won Wimbledon and the US Open before turning 21."
      },
      {
        "w": "Giannis",
        "d": "Milwaukee's Greek Freak — 7-foot power forward who became the NBA's MVP benchmark."
      },
      {
        "w": "Caitlin Clark",
        "d": "Iowa's scoring queen who broke NCAA records and supercharged the WNBA's popularity."
      },
      {
        "w": "Mondo Duplantis",
        "d": "Swedish pole vaulter who keeps breaking his own world record as if bored by it."
      },
      {
        "w": "Vinicius Jr",
        "d": "Real Madrid's Brazilian winger whose dribbles and goals define modern attacking play."
      },
      {
        "w": "Katie Ledecky",
        "d": "American swimmer who dominates long-distance freestyle like no one before her."
      },
      {
        "w": "Luka Dončić",
        "d": "Slovenian basketball genius who does things with a basketball that shouldn't be possible."
      },
      {
        "w": "Sydney McLaughlin",
        "d": "400m hurdles world record holder who makes the event look almost casual."
      },
      {
        "w": "Travis Kelce",
        "d": "NFL's greatest tight end, Taylor Swift's boyfriend, three Super Bowl rings."
      },
      {
        "w": "Scottie Scheffler",
        "d": "World's No. 1 golfer, 2024 Masters champion, dominant force on the PGA Tour."
      },
      {
        "w": "Tadej Pogačar",
        "d": "Slovenian cyclist who attacked Tour de France like a video game on God Mode."
      },
      {
        "w": "Jon Jones",
        "d": "UFC's greatest heavyweight champion, unbeaten in title fights across two weight classes."
      },
      {
        "w": "Noah Lyles",
        "d": "World and Olympic 100m champion who brought charisma back to track and field."
      },
      {
        "w": "Naomi Osaka",
        "d": "Four-time Grand Slam champion who sparked mental health conversations in sport."
      },
      {
        "w": "Virat Kohli",
        "d": "India's batting king, most run-scorer in ODI history, cricket's global ambassador."
      },
      {
        "w": "Victor Wembanyama",
        "d": "7-foot-4 San Antonio Spurs phenomenon combining guard skills with rim-protecting."
      },
      {
        "w": "Lamine Yamal",
        "d": "Barcelona's 16-year-old who scored at Euro 2024 — football's most exciting new star."
      },
      {
        "w": "Nikola Jokić",
        "d": "Serbia's Joker — three-time NBA MVP who makes center position look like performance art."
      },
      {
        "w": "Novak Djokovic",
        "d": "Serbia's tennis titan with 24 Grand Slam titles — the GOAT debate's third side."
      },
      {
        "w": "Simone Biles",
        "d": "American gymnast who returned to win four more Olympic medals after mental health break."
      },
      {
        "w": "Léon Marchand",
        "d": "French swimming prodigy who won four individual gold medals at the Paris Olympics."
      },
      {
        "w": "Jannik Sinner",
        "d": "Italian tennis No. 1 who won the Australian Open and US Open in 2024."
      },
      {
        "w": "Armand Duplantis",
        "d": "Mondo's American-Swedish double identity — raised in Louisiana, competes for Sweden."
      },
      {
        "w": "Anthony Joshua",
        "d": "British heavyweight champion with devastating knockout power and Olympic gold."
      },
      {
        "w": "Gianmarco Tamberi",
        "d": "Italy's flamboyant high jump champion who shared his 2020 Olympic gold with a friend."
      },
      {
        "w": "Cecé Telfer",
        "d": "Breaking barriers for transgender athletes in collegiate track competition in the US."
      },
      {
        "w": "Sam Kerr",
        "d": "Australia's all-time top scorer who captained the Matildas to a historic World Cup run."
      },
      {
        "w": "Ben Stokes",
        "d": "England cricket captain who transformed Test cricket with fearless attacking Bazball strategy."
      }
    ]
  },
  {
    "name": "famous movie villains",
    "tags": {
      "a": "human",
      "b": "pop",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Joker",
        "d": "Batman's chaos-obsessed nemesis — 'Why so serious?' remains cinema's greatest threat."
      },
      {
        "w": "Voldemort",
        "d": "He Who Must Not Be Named — split his soul seven ways to cheat death."
      },
      {
        "w": "Thanos",
        "d": "Purple cosmic titan who snapped his fingers and erased half of all living things."
      },
      {
        "w": "Jafar",
        "d": "Aladdin's scheming grand vizier who wished to become the most powerful being alive."
      },
      {
        "w": "Hans Gruber",
        "d": "Alan Rickman's suave Nakatomi Plaza robber — the gold standard of action movie villains."
      },
      {
        "w": "Loki",
        "d": "Norse god of mischief — MCU's most charming and unpredictable antagonist."
      },
      {
        "w": "Maleficent",
        "d": "Sleeping Beauty's iconic horned witch who cursed a princess over a party slight."
      },
      {
        "w": "Anton Chigurh",
        "d": "No Country for Old Men's coin-flipping killer with a bolt gun — pure philosophical evil."
      },
      {
        "w": "Nurse Ratched",
        "d": "One Flew Over the Cuckoo's Nest's terrifying passive-aggressive psychiatric control freak."
      },
      {
        "w": "Magneto",
        "d": "X-Men's magnetic extremist who survived the Holocaust and decided humans can't be trusted."
      },
      {
        "w": "The Wicked Witch",
        "d": "Oz's green-skinned flying-monkey commander — 'I'll get you, my pretty.'"
      },
      {
        "w": "Goldfinger",
        "d": "Bond villain who plotted to irradiate Fort Knox gold and expected Bond to die."
      },
      {
        "w": "Lex Luthor",
        "d": "Superman's genius billionaire nemesis who proves intellect can hate a god."
      },
      {
        "w": "Cruella de Vil",
        "d": "Fashion-obsessed villain who wanted to skin 101 Dalmatian puppies for a coat."
      },
      {
        "w": "Amy Dunne",
        "d": "Gone Girl's calculating wife who engineered her own disappearance as the perfect revenge."
      },
      {
        "w": "Hans Landa",
        "d": "Inglourious Basterds' 'Jew Hunter' — Christoph Waltz's Oscar-winning menace."
      },
      {
        "w": "Roy Batty",
        "d": "Blade Runner's replicant villain whose tears-in-rain death speech outshone the hero."
      },
      {
        "w": "Norman Bates",
        "d": "Psycho's motel manager with a mother complex and a knife in the shower."
      },
      {
        "w": "Agent Smith",
        "d": "The Matrix's rogue program who multiplied endlessly and loathed humanity's smell."
      },
      {
        "w": "T-1000",
        "d": "Terminator 2's liquid metal shape-shifter — the most terrifying movie machine ever made."
      },
      {
        "w": "Bane",
        "d": "Dark Knight Rises' masked mercenary who broke Batman's back and took Gotham hostage."
      },
      {
        "w": "Keyser Söze",
        "d": "The Usual Suspects' mythical crime lord whose identity twist rewired viewers' brains."
      },
      {
        "w": "Colonel Kurtz",
        "d": "Apocalypse Now's rogue Green Beret living as a god in a Cambodian jungle."
      },
      {
        "w": "Silva",
        "d": "Javier Bardem's Skyfall villain — bleach-blond, theatrical, and psychologically devastating."
      },
      {
        "w": "Doctor Octopus",
        "d": "Spider-Man's tentacled scientist whose mechanical arms took control of his mind."
      },
      {
        "w": "Hannibal Lecter",
        "d": "Cannibal psychiatrist who ate people with 'fava beans and a nice Chianti.'"
      },
      {
        "w": "Darth Vader",
        "d": "Asthmatic Sith Lord who was secretly Luke's father — cinema's greatest reveal."
      },
      {
        "w": "Pennywise",
        "d": "Stephen King's shape-shifting clown who hunts children every 27 years in Derry."
      },
      {
        "w": "Sauron",
        "d": "Dark Lord whose one Ring dominates all — manifests as a burning lidless eye."
      },
      {
        "w": "Patrick Bateman",
        "d": "American Psycho's Wall Street yuppie killer who definitely did or didn't murder people."
      },
      {
        "w": "Annie Wilkes",
        "d": "Misery's obsessive fan who trapped her favorite author and shattered his ankles with a sledgehammer."
      },
      {
        "w": "Alex DeLarge",
        "d": "A Clockwork Orange's sadistic teenage ultra-violent leader of the droogs."
      },
      {
        "w": "The Xenomorph",
        "d": "Alien's H.R. Giger biomechanical nightmare — acid blood and a mouth inside a mouth."
      },
      {
        "w": "Buffalo Bill",
        "d": "Silence of the Lambs' serial killer who sewed a suit from his victims' skin."
      },
      {
        "w": "Michael Myers",
        "d": "Halloween's silent white-masked boogeyman who walks slowly and still catches everyone."
      }
    ]
  },
  {
    "name": "olympic sports everyone watches",
    "tags": {
      "a": "human",
      "b": "sport",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Gymnastics",
        "d": "Acrobatic floor, beam, bar routines judged to the millimeter — Biles redefined possible."
      },
      {
        "w": "Swimming",
        "d": "Phelps made 23 gold medals look routine in the chlorinated Olympic pool."
      },
      {
        "w": "100m Sprint",
        "d": "9.58 seconds of Usain Bolt's pure electricity — the glamour event of every Games."
      },
      {
        "w": "Figure Skating",
        "d": "Blade artistry on ice combining athletic jumps with theatrical performance."
      },
      {
        "w": "Diving",
        "d": "Perfect form from 10 meters up — judges punish every tuck and splash mercilessly."
      },
      {
        "w": "Basketball",
        "d": "Dream Team basketball made this the spectacle sport of the 1992 Barcelona Olympics."
      },
      {
        "w": "Weightlifting",
        "d": "Athletes clean-and-jerk three times their bodyweight in dramatic all-or-nothing lifts."
      },
      {
        "w": "Archery",
        "d": "Korean dominance in arrow precision makes this ancient weapon sport a modern obsession."
      },
      {
        "w": "Pole Vault",
        "d": "Armand Duplantis keeps raising the bar — literally — breaking his own world record."
      },
      {
        "w": "High Jump",
        "d": "The Fosbury Flop revolutionized a simple event — land on your back, clear the bar."
      },
      {
        "w": "Rowing",
        "d": "Eight synchronized giants pulling carbon blades through glassy water in perfect unison."
      },
      {
        "w": "Cycling",
        "d": "Track cycling's velodrome sprint and road races deliver completely different drama."
      },
      {
        "w": "Tennis",
        "d": "Wimbledon on Olympic grass — Grand Slam champions competing for a different kind of glory."
      },
      {
        "w": "Volleyball",
        "d": "Beach volleyball on Copacabana sand — the most photogenic event in Summer Olympics."
      },
      {
        "w": "Water Polo",
        "d": "Rugby played in a swimming pool — brutal, exhausting, and dramatically underappreciated."
      },
      {
        "w": "Fencing",
        "d": "Three weapons, three disciplines — épée, foil, sabre — electronic touches determine glory."
      },
      {
        "w": "Shooting",
        "d": "Korean and Chinese shooters dominate the 10m air pistol — extreme stillness wins medals."
      },
      {
        "w": "Long Jump",
        "d": "Bob Beamon's 1968 jump stood as the world record for 23 years — still astounding."
      },
      {
        "w": "Hammer Throw",
        "d": "Spinning and hurling a 7kg steel ball — 80 meters of pure momentum and physics."
      },
      {
        "w": "Triathlon",
        "d": "Swim 1.5km, cycle 40km, run 10km — one race that eliminates all specialists."
      },
      {
        "w": "Synchronized Swimming",
        "d": "Artistic swimming requires breath control, strength, and teamwork while upside-down."
      },
      {
        "w": "Decathlon",
        "d": "Ten events over two days — 100m, hurdles, javelin, discus, the whole heroic package."
      },
      {
        "w": "BMX Racing",
        "d": "Dirt track obstacle course on tiny bikes — fastest down the ramp wins chaos."
      },
      {
        "w": "Speed Climbing",
        "d": "Race vertically up a 15-meter wall in under 5 seconds — sport's most explosive event."
      },
      {
        "w": "Kayaking",
        "d": "Slalom through white-water gates and flatwater sprint — two completely different sports."
      },
      {
        "w": "Judo",
        "d": "Japanese throwing art — clean ippon pins an opponent in a single explosive hip throw."
      },
      {
        "w": "Taekwondo",
        "d": "Korean kicking art where spinning head kicks score points and crowds erupt."
      },
      {
        "w": "Wrestling",
        "d": "Ancient Olympic sport where freestyle and Greco-Roman remain core Games events."
      },
      {
        "w": "Marathon",
        "d": "42.195km through city streets — every Olympics final hours of the running schedule."
      },
      {
        "w": "Boxing",
        "d": "Amateur format with headgear — Cuba and the US traded dominance for decades."
      },
      {
        "w": "Shot Put",
        "d": "Glide or spin to hurl a 7kg iron ball as far as physically possible."
      },
      {
        "w": "Skateboarding",
        "d": "Added at Tokyo 2020 — teenage prodigies redefined what an Olympic champion looks like."
      },
      {
        "w": "Surfing",
        "d": "Tahiti's Teahupo'o reef break turned Paris 2024 surfing into the most dramatic event."
      },
      {
        "w": "Breaking",
        "d": "B-boys and B-girls brought breakdancing to Paris 2024 — then immediately got dropped."
      },
      {
        "w": "3x3 Basketball",
        "d": "Half-court streetball form added at Tokyo 2020 — faster, louder, more chaotic than 5v5."
      }
    ]
  },
  {
    "name": "legendary tv shows",
    "tags": {
      "a": "human",
      "b": "pop",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "West Wing",
        "d": "Aaron Sorkin's walk-and-talk ideal of presidential democracy — still holds up."
      },
      {
        "w": "Veep",
        "d": "Julia Louis-Dreyfus's profanity-laced political satire that got more accurate every season."
      },
      {
        "w": "Billions",
        "d": "Hedge fund titan vs. prosecutor — power, money, and sexual dynamics in New York."
      },
      {
        "w": "Ozark",
        "d": "Accountant launders cartel money in the Missouri Ozarks — everyone becomes ruthless."
      },
      {
        "w": "Shogun",
        "d": "2024 FX masterpiece of feudal Japan — Mariko's arc left viewers speechless."
      },
      {
        "w": "Silicon Valley",
        "d": "Mike Judge's HBO comedy about startup culture perfectly skewered tech industry ego."
      },
      {
        "w": "Sex Education",
        "d": "British teen comedy about a therapist's son running a sex advice clinic at school."
      },
      {
        "w": "Mrs. Maisel",
        "d": "1950s housewife discovers stand-up comedy — the most exquisitely designed period show."
      },
      {
        "w": "House of Cards",
        "d": "Ruthless Machiavellian politician murders his way to the US presidency."
      },
      {
        "w": "Narcos",
        "d": "Pablo Escobar's rise and fall told with terrifying real-life archival footage woven in."
      },
      {
        "w": "Mindhunter",
        "d": "FBI agents interview serial killers to develop criminal profiling — tense and brilliant."
      },
      {
        "w": "The Boys",
        "d": "Satire of superhero corporatism — what if Superman was actually a fascist PR product?"
      },
      {
        "w": "Yellowstone",
        "d": "Dutton ranch drama — Kevin Costner's empire bleeds across Montana's political landscape."
      },
      {
        "w": "The Last of Us",
        "d": "Fungal zombie apocalypse road trip that made gamers cry and non-gamers equally broken."
      },
      {
        "w": "Mare of Easttown",
        "d": "Kate Winslet's working-class Pennsylvania detective — a masterclass in slow-burn crime."
      },
      {
        "w": "Euphoria",
        "d": "Zendaya's Emmy-winning portrayal of Gen Z addiction, trauma, and beautiful cinematography."
      },
      {
        "w": "X-Files",
        "d": "Mulder and Scully investigating monsters and alien conspiracies — I want to believe."
      },
      {
        "w": "Hannibal",
        "d": "NBC's gorgeous serial killer drama — food as art, murder as aesthetic, deeply unsettling."
      },
      {
        "w": "Penny Dreadful",
        "d": "Victorian gothic horror mashup where Frankenstein, Dracula, and Dorian Gray all meet."
      },
      {
        "w": "Bodyguard",
        "d": "Richard Madden's PTSD-scarred protection officer guarding the Home Secretary — edge-of-seat."
      },
      {
        "w": "The Night Manager",
        "d": "Tom Hiddleston's spy thriller based on John le Carré — luxurious and lethal."
      },
      {
        "w": "The Knick",
        "d": "Clive Owen's cocaine-addicted surgeon at a 1900s New York hospital — Soderbergh at his best."
      },
      {
        "w": "True Blood",
        "d": "Louisiana vampires wanting legal rights — HBO's Southern Gothic horror allegory."
      },
      {
        "w": "Boss",
        "d": "Kelsey Grammer's Chicago mayor hiding degenerative disease while wielding absolute power."
      },
      {
        "w": "Wheel of Time",
        "d": "Amazon's epic fantasy based on Robert Jordan's 14-book saga of prophecy and magic."
      },
      {
        "w": "Breaking Bad",
        "d": "Chemistry teacher cooks meth, becomes empire-building drug lord — TV's greatest transformation."
      },
      {
        "w": "The Sopranos",
        "d": "New Jersey mob boss balancing family therapy and organized crime — invented prestige TV."
      },
      {
        "w": "Game of Thrones",
        "d": "Dragons, betrayal, and winter — eight seasons that redefined television ambition."
      },
      {
        "w": "The Wire",
        "d": "Baltimore's drug war told from every side — police, dealers, schools, docks, politics."
      },
      {
        "w": "Mad Men",
        "d": "1960s advertising world where Don Draper sold the American dream while hiding his identity."
      },
      {
        "w": "Succession",
        "d": "Roy family battles for media empire — 'Kendall, you are not a good person.'"
      },
      {
        "w": "Chernobyl",
        "d": "HBO miniseries about the 1986 nuclear disaster — harrowing, factual, and essential viewing."
      },
      {
        "w": "Fleabag",
        "d": "Phoebe Waller-Bridge's fourth-wall-breaking comedy about grief, sex, and a hot priest."
      },
      {
        "w": "Atlanta",
        "d": "Donald Glover's surrealist comedy-drama about the rap music scene — unlike anything else."
      },
      {
        "w": "Peaky Blinders",
        "d": "Birmingham gang in the 1920s — Cillian Murphy's Tommy Shelby made flat caps intimidating."
      }
    ]
  },
  {
    "name": "breakfast foods worldwide",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Croissant",
        "d": "Buttery laminated pastry that defines the Parisian morning — best warm from the oven."
      },
      {
        "w": "Pancake",
        "d": "Fluffy American stack with maple syrup — every diner's weekend centerpiece."
      },
      {
        "w": "Full English",
        "d": "Bacon, eggs, sausage, beans, toast, black pudding — the comprehensive British breakfast."
      },
      {
        "w": "Shakshuka",
        "d": "Eggs poached in spiced tomato sauce — Middle Eastern and North African morning staple."
      },
      {
        "w": "Congee",
        "d": "Silky rice porridge topped with ginger, scallion, and preserved egg across East Asia."
      },
      {
        "w": "Avocado Toast",
        "d": "Millennial brunch icon — smashed avo, poached egg, chili flakes, on sourdough."
      },
      {
        "w": "Bagel",
        "d": "Boiled then baked ring of New York Jewish heritage, best with lox and cream cheese."
      },
      {
        "w": "Açaí Bowl",
        "d": "Brazilian frozen açaí blended thick and topped with granola and tropical fruits."
      },
      {
        "w": "Huevos Rancheros",
        "d": "Mexican ranch eggs on corn tortillas in ranchero tomato-chili sauce."
      },
      {
        "w": "Ful Medames",
        "d": "Egyptian slow-cooked fava beans with garlic and lemon — breakfast of pharaohs."
      },
      {
        "w": "Nasi Lemak",
        "d": "Malaysian coconut rice with sambal, anchovies, peanuts, and egg — national dish."
      },
      {
        "w": "Idli",
        "d": "South Indian steamed rice-lentil cakes served with sambar and coconut chutney."
      },
      {
        "w": "Miso Soup",
        "d": "Japanese fermented soybean broth with tofu and seaweed — clarity in a bowl."
      },
      {
        "w": "Granola",
        "d": "Toasted oats with nuts and honey — the California health breakfast since the 1970s."
      },
      {
        "w": "French Toast",
        "d": "Bread soaked in egg and milk, fried golden — called pain perdu in France."
      },
      {
        "w": "Waffle",
        "d": "Grid-pressed batter cooked crispy outside, fluffy inside — Belgian or American, both perfect."
      },
      {
        "w": "Porridge",
        "d": "Scottish oat slurry eaten with salt or golden syrup — Goldilocks' contested meal."
      },
      {
        "w": "Tamales",
        "d": "Mexican masa dough stuffed with filling, steamed in corn husks — Christmas morning tradition."
      },
      {
        "w": "Börek",
        "d": "Turkish filo pastry stuffed with cheese, spinach, or meat — bakeries open at dawn."
      },
      {
        "w": "English Muffin",
        "d": "Nooks-and-crannies toasted flat yeast bread — essential for Eggs Benedict."
      },
      {
        "w": "Ackee & Saltfish",
        "d": "Jamaica's national dish — creamy ackee fruit sautéed with salt cod and peppers."
      },
      {
        "w": "Dosa",
        "d": "Crispy fermented rice-lentil crepe — South Indian breakfast rolled around potato masala."
      },
      {
        "w": "Chilaquiles",
        "d": "Mexican fried tortilla chips simmered in salsa, topped with cream and cheese."
      },
      {
        "w": "Baguette",
        "d": "French stick bread eaten with butter and jam — UNESCO-protected morning ritual."
      },
      {
        "w": "Smoked Salmon",
        "d": "Cured cold-smoked Atlantic salmon on cream cheese and capers — Scandinavian luxury."
      },
      {
        "w": "Dim Sum",
        "d": "Cantonese steamer baskets of dumplings, bao, and har gow at Sunday morning yum cha."
      },
      {
        "w": "Churros",
        "d": "Spanish fried dough sticks dipped in hot chocolate sauce — Sunday market staple."
      },
      {
        "w": "Menemen",
        "d": "Turkish scrambled eggs with tomatoes and green peppers in a cast iron pan."
      },
      {
        "w": "Pho",
        "d": "Vietnamese beef noodle broth eaten at dawn — bone broth simmered overnight."
      },
      {
        "w": "Arepas",
        "d": "Colombian and Venezuelan cornmeal griddle cakes stuffed with cheese or black beans."
      },
      {
        "w": "Khachapuri",
        "d": "Georgian cheese-filled bread boat with an egg cracked on top — molten morning perfection."
      },
      {
        "w": "Beans on Toast",
        "d": "Britain's most accessible breakfast — Heinz baked beans on white toast. Perfection or sin."
      },
      {
        "w": "Smørrebrød",
        "d": "Danish open-faced rye bread sandwich topped with herring, egg, or smoked meats."
      },
      {
        "w": "Poha",
        "d": "Indian flattened rice sautéed with mustard seeds, turmeric, onion, and lemon juice."
      },
      {
        "w": "Crepe",
        "d": "Paper-thin French pancake filled with Nutella, jam, or ham and cheese at morning markets."
      }
    ]
  },
  {
    "name": "sports nicknames",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "The Mamba",
        "d": "Kobe Bryant — Black Mamba, adopted from the deadly snake for its killer instinct."
      },
      {
        "w": "The Great One",
        "d": "Wayne Gretzky — no hockey number needed, 'The Great One' says everything."
      },
      {
        "w": "Air Jordan",
        "d": "Michael Jordan — gravity-defying leaps that made Nike, basketball, and a generation."
      },
      {
        "w": "The King",
        "d": "LeBron James — self-proclaimed royalty that his four championships confirmed."
      },
      {
        "w": "El Pibe de Oro",
        "d": "Diego Maradona — the Golden Boy whose left foot was divine, literally."
      },
      {
        "w": "The Shark",
        "d": "Greg Norman — Australian golf's great white with the most unlucky major record."
      },
      {
        "w": "The Beast",
        "d": "Jadeveon Clowney — raw defensive power that made the Beast Mode tackle iconic."
      },
      {
        "w": "Fedex",
        "d": "Roger Federer — delivers elegance, precision, and grace, reliably, every time."
      },
      {
        "w": "The Rocket",
        "d": "Roger Clemens — power pitcher with rocket velocity, or Ronnie O'Sullivan at the snooker table."
      },
      {
        "w": "Tiger",
        "d": "Tiger Woods — a name that became synonymous with golfing dominance."
      },
      {
        "w": "The Diesel",
        "d": "Shaquille O'Neal — 350-pound diesel engine you couldn't guard, couldn't stop."
      },
      {
        "w": "La Pulga",
        "d": "Lionel Messi — The Flea, dismissed as too small, became football's greatest player."
      },
      {
        "w": "The Iceman",
        "d": "Gerrit Thomas or Bjorn Borg — cold-blooded composure under maximum pressure."
      },
      {
        "w": "Broadway Joe",
        "d": "Joe Namath — NFL quarterback who guaranteed a Super Bowl upset and delivered."
      },
      {
        "w": "The Predator",
        "d": "Ronaldo Nazário — R9, terrifyingly complete striker with the body of a predator."
      },
      {
        "w": "Magic",
        "d": "Magic Johnson — Showtime Laker whose no-look passes defied physics and imagination."
      },
      {
        "w": "The Flash",
        "d": "Tyreek Hill — NFL's fastest man, touchdowns on screens before defenders could react."
      },
      {
        "w": "Canelo",
        "d": "Saúl Álvarez — Mexican boxing champion named for his red hair, cinnamon."
      },
      {
        "w": "The Viper",
        "d": "Mark Selby — snooker's grinding champion who coils and strikes with lethal precision."
      },
      {
        "w": "Golden Bear",
        "d": "Jack Nicklaus — 18 major titles and the most dominant golfer in history."
      },
      {
        "w": "The Answer",
        "d": "Allen Iverson — crossed Michael Jordan, answered every doubter, played at 160 lbs."
      },
      {
        "w": "Boom Boom",
        "d": "Boris Becker — serve as explosive as his nickname, won Wimbledon at 17."
      },
      {
        "w": "The Albanian",
        "d": "Ingemar Johansson's nickname, or Mikel Arteta's squad nickname — context is everything."
      },
      {
        "w": "Swiss Miss",
        "d": "Martina Hingis — teenage Swiss prodigy who won five Grand Slams and dazzled Wimbledon."
      },
      {
        "w": "The Spiderman",
        "d": "Insane climbing ability — climber Alex Honnold or point guard who goes everywhere on court."
      },
      {
        "w": "The Undertaker",
        "d": "Mark Calaway's wrestling persona — Dead Man Walking, 21-0 at WrestleMania."
      },
      {
        "w": "The Express",
        "d": "Ernie Davis — first Black Heisman winner, or Nolan Ryan's fastball nickname."
      },
      {
        "w": "The Dream",
        "d": "Hakeem Olajuwon — unstoppable Dream Shake post move from Houston's twin towers."
      },
      {
        "w": "Pistol Pete",
        "d": "Pete Maravich — basketball wizard who averaged 44 points per game in college, pre-3-pointer."
      },
      {
        "w": "The Bus",
        "d": "Jerome Bettis — Pittsburgh Steelers fullback who ran over people rather than around them."
      },
      {
        "w": "Night Train",
        "d": "Dick Lane — NFL Hall of Fame cornerback who terrorized receivers on every play."
      },
      {
        "w": "The Natural",
        "d": "Archie Griffin — two-time Heisman winner, or Robert Redford's baseball movie character made real."
      },
      {
        "w": "Sweetness",
        "d": "Walter Payton — Chicago Bears' running back, most graceful and determined carrier ever."
      },
      {
        "w": "The Mailman",
        "d": "Karl Malone — always delivered for the Utah Jazz, except in two NBA Finals."
      },
      {
        "w": "The Glove",
        "d": "Gary Payton — Seattle SuperSonics defender whose defensive grip was unbreakable."
      }
    ]
  },
  {
    "name": "cocktails & drinks everyone knows",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Piña Colada",
        "d": "If you like Piña Coladas — rum, coconut cream, pineapple juice, Puerto Rico's gift."
      },
      {
        "w": "Espresso Martini",
        "d": "Vodka, espresso, coffee liqueur shaken cold — the cocktail that conquered the 2020s."
      },
      {
        "w": "Tequila Sunrise",
        "d": "Orange juice and tequila with grenadine sinking like a sunrise — it's beautiful."
      },
      {
        "w": "Long Island Iced Tea",
        "d": "Five spirits with cola that tastes like iced tea but hits like a freight train."
      },
      {
        "w": "Sangria",
        "d": "Spanish red wine punch with fruit and brandy, poured cold over ice all summer."
      },
      {
        "w": "Gin & Tonic",
        "d": "Quinine-bitter tonic with gin and lime — invented by the British in colonial India."
      },
      {
        "w": "Bloody Mary",
        "d": "Vodka, tomato juice, Worcestershire, Tabasco — the hangover cure masquerading as a drink."
      },
      {
        "w": "Sex on the Beach",
        "d": "Peach schnapps, vodka, cranberry, orange juice — the poolside classic with a memorable name."
      },
      {
        "w": "White Russian",
        "d": "The Dude's drink — vodka, Kahlúa, cream over ice, courtesy of The Big Lebowski."
      },
      {
        "w": "Rum & Coke",
        "d": "Cuba Libre with a lime squeeze — the simplest great cocktail on any bar menu."
      },
      {
        "w": "Harvey Wallbanger",
        "d": "Screwdriver with Galliano floated on top — 1970s disco bar staple with a silly name."
      },
      {
        "w": "Moscow Mule",
        "d": "Vodka, ginger beer, lime in copper mug — created to sell two struggling products."
      },
      {
        "w": "Paloma",
        "d": "Tequila and grapefruit soda with salt rim — Mexico's most popular tequila drink."
      },
      {
        "w": "Amaretto Sour",
        "d": "Almond liqueur with lemon juice and egg white — sweet, tart, and silky."
      },
      {
        "w": "Blue Lagoon",
        "d": "Vodka, blue curaçao, lemonade — impossibly blue, alarmingly sweet, undeniably fun."
      },
      {
        "w": "Bellini",
        "d": "Prosecco and white peach purée — invented at Harry's Bar Venice in the 1940s."
      },
      {
        "w": "Lychee Martini",
        "d": "Vodka, lychee juice, and rose water — Asian fusion bar's most elegant weapon."
      },
      {
        "w": "Zombie",
        "d": "Three rums, absinthe, fruit juice — Trader Vic's tiki classic limited to two per customer."
      },
      {
        "w": "Mai Tai",
        "d": "Trader Vic's rum, orgeat, and citrus creation — the definitive tiki cocktail."
      },
      {
        "w": "Caipirinha",
        "d": "Brazil's national cocktail — cachaça, sugar, lime, muddled and poured over crushed ice."
      },
      {
        "w": "Irish Coffee",
        "d": "Hot coffee, Irish whiskey, sugar, and cream — invented at Shannon Airport in 1943."
      },
      {
        "w": "Spritz Veneziano",
        "d": "Aperol or Campari with prosecco and a splash of soda — Italy's eternal aperitivo."
      },
      {
        "w": "French 75",
        "d": "Gin and lemon juice topped with Champagne — hits like a 75mm artillery shell."
      },
      {
        "w": "Vesper",
        "d": "James Bond's martini — three parts gin, one part vodka, half Lillet, shaken."
      },
      {
        "w": "Clover Club",
        "d": "Pre-Prohibition pink cocktail of gin, raspberry, lemon, and egg white — back in fashion."
      },
      {
        "w": "Margarita",
        "d": "Tequila, lime, triple sec on the rocks with salt rim — the world's best-selling cocktail."
      },
      {
        "w": "Mojito",
        "d": "Cuban rum with fresh mint, lime, sugar, and soda — Hemingway's Havana staple."
      },
      {
        "w": "Old Fashioned",
        "d": "Bourbon, sugar, bitters, orange peel — the cocktail that started everything, from 1806."
      },
      {
        "w": "Negroni",
        "d": "Gin, sweet vermouth, Campari in equal parts — the bitter aperitivo that conquered the world."
      },
      {
        "w": "Daiquiri",
        "d": "Rum, lime, sugar — Hemingway's favorite and the foundation of every frozen cocktail."
      },
      {
        "w": "Manhattan",
        "d": "Rye whiskey, sweet vermouth, Angostura bitters, cherry — New York in one elegant glass."
      },
      {
        "w": "Aperol Spritz",
        "d": "Three parts prosecco, two parts Aperol, splash of soda — summer afternoon in Venice."
      },
      {
        "w": "Tom Collins",
        "d": "Gin, lemon, sugar, soda in a tall glass — Victorian summer refresher still going strong."
      },
      {
        "w": "Singapore Sling",
        "d": "Gin-based colonial Singapore cocktail from Raffles Hotel Long Bar, 1915."
      },
      {
        "w": "Cosmopolitan",
        "d": "Vodka, triple sec, cranberry, lime — Sex and the City made this pink drink aspirational."
      }
    ]
  }
,
  {
  "name": "famous ancient empires",
  "tags": {
    "a": "human",
    "b": "hist",
    "difficulty": "easy"
  },
  "words": [
    {
      "w": "Persian Empire",
      "d": "From Cyrus to Darius — the first true superpower stretching from Egypt to India."
    },
    {
      "w": "Greek Empire",
      "d": "Athens, Sparta, philosophy, democracy — the cradle of Western civilization."
    },
    {
      "w": "Srivijaya Empire",
      "d": "Maritime Southeast Asian empire that controlled the spice trade for centuries."
    },
    {
      "w": "Chinese Dynasty",
      "d": "Thousands of years of imperial rule — from Shang bronzes to Qing silks."
    },
    {
      "w": "Viking Age",
      "d": "Norse raiders and traders who reached Baghdad, Iceland, and North America."
    },
    {
      "w": "Spartan Warriors",
      "d": "300 at Thermopylae — the ultimate warrior culture of ancient Greece."
    },
    {
      "w": "Nebuchadnezzar",
      "d": "Babylonian king who built the Hanging Gardens and destroyed Solomon's Temple."
    },
    {
      "w": "Leonidas",
      "d": "Spartan king who led the legendary last stand at Thermopylae."
    },
    {
      "w": "Boudicca",
      "d": "Celtic queen who torched Roman London in a furious rebellion."
    },
    {
      "w": "Sun Tzu",
      "d": "Chinese strategist whose Art of War is still studied in business schools."
    },
    {
      "w": "Tokugawa",
      "d": "Shogunate that unified Japan and ruled 250 years of enforced peace."
    },
    {
      "w": "Attila the Hun",
      "d": "The Scourge of God who terrified the Roman Empire into paying tribute."
    },
    {
      "w": "Charlemagne",
      "d": "Father of Europe — united most of Western Europe under one crown."
    },
    {
      "w": "Montezuma",
      "d": "Aztec emperor who mistook Cortés for a returning god."
    },
    {
      "w": "Kublai Khan",
      "d": "Mongol emperor of China who hosted Marco Polo at his court."
    },
    {
      "w": "Saladin",
      "d": "Muslim sultan who retook Jerusalem with chivalry that impressed even Crusaders."
    },
    {
      "w": "Cyrus the Great",
      "d": "Founded the Persian Empire and wrote history's first human rights charter."
    },
    {
      "w": "Ramesses II",
      "d": "Egypt's greatest pharaoh — built Abu Simbel and outlived most of his 100+ children."
    },
    {
      "w": "Hammurabi",
      "d": "Babylonian king whose law code — eye for an eye — is carved in stone."
    },
    {
      "w": "Ashoka",
      "d": "Indian emperor who converted to Buddhism after a bloody war and spread peace."
    },
    {
      "w": "Suleiman",
      "d": "Ottoman sultan called \"the Magnificent\" in Europe, \"the Lawgiver\" at home."
    },
    {
      "w": "Pericles",
      "d": "Athenian leader who built the Parthenon and made democracy golden."
    },
    {
      "w": "Hannibal Barca",
      "d": "Carthaginian general who crossed the Alps with elephants to attack Rome."
    },
    {
      "w": "Constantine",
      "d": "Roman emperor who legalized Christianity and moved the capital to Byzantium."
    },
    {
      "w": "Tamerlane",
      "d": "Central Asian conqueror who built towers of skulls and a dazzling capital in Samarkand."
    },
    {
      "w": "Richard the Lionheart",
      "d": "English king who spent most of his reign crusading, not ruling England."
    },
    {
      "w": "Akbar the Great",
      "d": "Mughal emperor who promoted religious tolerance in 16th-century India."
    },
    {
      "w": "Mansa Musa",
      "d": "Malian emperor so rich his Cairo spending spree crashed the gold market."
    },
    {
      "w": "Hatshepsut",
      "d": "Female pharaoh who ruled Egypt in a fake beard for two decades."
    },
    {
      "w": "Nefertiti",
      "d": "Egyptian queen whose painted bust is the icon of ancient beauty."
    },
    {
      "w": "Xerxes",
      "d": "Persian king who whipped the sea and threw a million soldiers at Greece."
    },
    {
      "w": "Darius",
      "d": "Persian king who built the Royal Road and organized history's first postal system."
    },
    {
      "w": "Justinian",
      "d": "Byzantine emperor who codified Roman law and built Hagia Sophia."
    },
    {
      "w": "Augustus",
      "d": "First Roman emperor — found Rome in brick, left it in marble."
    },
    {
      "w": "Marcus Aurelius",
      "d": "Philosopher-emperor whose Meditations is the ultimate Stoic self-help book."
    }
  ]
},
  {
  "name": "pirates & treasure legends",
  "tags": {
    "a": "human",
    "b": "hist",
    "difficulty": "easy"
  },
  "words": [
    {
      "w": "Blackbeard",
      "d": "Edward Teach lit fuses in his beard to look like a demon in battle."
    },
    {
      "w": "Jolly Roger",
      "d": "The skull-and-crossbones flag that meant \"surrender or die.\""
    },
    {
      "w": "Treasure Map",
      "d": "X marks the spot — the dream of every pirate story ever told."
    },
    {
      "w": "Cutlass",
      "d": "Short curved sword perfect for fighting in tight ship corridors."
    },
    {
      "w": "Galleon",
      "d": "Massive Spanish treasure ship — the ultimate pirate target."
    },
    {
      "w": "Parrot",
      "d": "Every fictional pirate's shoulder companion since Treasure Island."
    },
    {
      "w": "Walking the Plank",
      "d": "Classic punishment — blindfolded stroll into shark-infested water."
    },
    {
      "w": "Cannon",
      "d": "A pirate ship's main argument in any negotiation."
    },
    {
      "w": "Doubloon",
      "d": "Spanish gold coin — pirate treasure's basic unit of currency."
    },
    {
      "w": "Buccaneer",
      "d": "Caribbean pirates who started as wild-meat smokers on Hispaniola."
    },
    {
      "w": "Privateer",
      "d": "Government-licensed pirate — legal robbery on the high seas."
    },
    {
      "w": "Schooner",
      "d": "Fast two-masted ship that could outrun anything in the Caribbean."
    },
    {
      "w": "Skull and Crossbones",
      "d": "Universal pirate symbol — still used on poison labels today."
    },
    {
      "w": "Davy Jones",
      "d": "His locker is the ocean floor — where drowned sailors rest forever."
    },
    {
      "w": "Captain Hook",
      "d": "Peter Pan's nemesis with a crocodile-clock phobia and a sharp fashion sense."
    },
    {
      "w": "Marooned",
      "d": "Left alone on a desert island with a pistol and one bullet."
    },
    {
      "w": "Mutiny",
      "d": "When the crew decides the captain's voyage is over."
    },
    {
      "w": "Corsair",
      "d": "Mediterranean pirate — Barbary corsairs terrorized European coasts for centuries."
    },
    {
      "w": "Eye Patch",
      "d": "One theory: kept one eye adapted to darkness below deck."
    },
    {
      "w": "Rum",
      "d": "The pirate's drink of choice — \"why is the rum always gone?\""
    },
    {
      "w": "Compass",
      "d": "Jack Sparrow's pointed to what you wanted most, not north."
    },
    {
      "w": "Shipwreck",
      "d": "Thousands of treasure-laden wrecks still lie undiscovered on the ocean floor."
    },
    {
      "w": "Booty",
      "d": "Pirate loot — divided according to strict articles everyone signed."
    },
    {
      "w": "Swashbuckler",
      "d": "Dashing sword fighter — from \"swash\" (clash) and \"buckler\" (shield)."
    },
    {
      "w": "Broadside",
      "d": "Firing all cannons on one side simultaneously — devastating naval tactic."
    },
    {
      "w": "Peg Leg",
      "d": "Wooden replacement after a cannonball took the original."
    },
    {
      "w": "Port Royal",
      "d": "Jamaica's pirate capital — \"the wickedest city on Earth\" before the earthquake."
    },
    {
      "w": "Treasure Chest",
      "d": "Locked wooden box of gold, gems, and stolen jewelry."
    },
    {
      "w": "Crow Nest",
      "d": "Lookout platform at the top of the mast — first to spot land or prey."
    },
    {
      "w": "Flagship",
      "d": "The captain's main vessel — biggest, best armed, most feared."
    },
    {
      "w": "Pirate Flag",
      "d": "Each captain designed their own — Blackbeard's showed a skeleton stabbing a heart."
    },
    {
      "w": "Cannonball",
      "d": "Iron sphere that could punch through a ship's hull at close range."
    },
    {
      "w": "First Mate",
      "d": "Captain's right hand — ran the ship when the captain was drunk or dead."
    },
    {
      "w": "Buried Gold",
      "d": "Only Captain Kidd actually buried treasure — but the legend stuck forever."
    },
    {
      "w": "Plunder",
      "d": "To raid and rob — a pirate's primary business model."
    }
  ]
},
  {
  "name": "ancient egyptian icons",
  "tags": {
    "a": "human",
    "b": "hist",
    "difficulty": "easy"
  },
  "words": [
    {
      "w": "Pharaoh",
      "d": "God-king of Egypt — living deity who owned everything and everyone."
    },
    {
      "w": "Pyramid",
      "d": "Massive stone tombs built to launch pharaohs into the afterlife."
    },
    {
      "w": "Great Sphinx",
      "d": "Lion body, human head — guarding the Giza pyramids for 4,500 years."
    },
    {
      "w": "Tutankhamun",
      "d": "Boy king whose untouched tomb made him the most famous pharaoh ever."
    },
    {
      "w": "Queen Nefertiti",
      "d": "Iconic beauty whose painted bust is Berlin's most visited artwork."
    },
    {
      "w": "Mummy",
      "d": "Preserved body wrapped in linen — organs stored separately in jars."
    },
    {
      "w": "Sacred Scarab",
      "d": "Dung beetle worshipped as symbol of the sun god's daily rebirth."
    },
    {
      "w": "Anubis",
      "d": "Jackal-headed god who guided the dead and weighed their hearts."
    },
    {
      "w": "Sun God Ra",
      "d": "Supreme deity who sailed across the sky in a golden boat each day."
    },
    {
      "w": "Osiris",
      "d": "God of the dead — murdered by his brother, resurrected by his wife."
    },
    {
      "w": "Isis",
      "d": "Goddess of magic who reassembled Osiris and became the ideal mother."
    },
    {
      "w": "Papyrus",
      "d": "Paper made from river reeds — Egypt's medium for everything from math to myths."
    },
    {
      "w": "Sarcophagus",
      "d": "Stone coffin — often nested inside multiple decorated layers."
    },
    {
      "w": "Obelisk",
      "d": "Tall pointed stone pillar — several now stand in Paris, London, and New York."
    },
    {
      "w": "Ramesses",
      "d": "Egypt's greatest warrior pharaoh who built Abu Simbel's colossal statues."
    },
    {
      "w": "Nile River",
      "d": "Egypt's lifeline — annual floods made the desert bloom with crops."
    },
    {
      "w": "Ankh",
      "d": "Cross with a loop — the hieroglyphic symbol for eternal life."
    },
    {
      "w": "Horus",
      "d": "Falcon-headed sky god — every pharaoh was considered his living form."
    },
    {
      "w": "Thoth",
      "d": "Ibis-headed god of wisdom who invented writing and kept cosmic records."
    },
    {
      "w": "Golden Mask",
      "d": "Tutankhamun's 11-kg solid gold death mask — archaeology's greatest treasure."
    },
    {
      "w": "Royal Tomb",
      "d": "Hidden underground chambers in the Valley of Kings, painted wall to wall."
    },
    {
      "w": "War Chariot",
      "d": "Egypt's fearsome military vehicle — fast, light, and deadly with archers."
    },
    {
      "w": "Amulet",
      "d": "Magical charm tucked between mummy wrappings for protection in the afterlife."
    },
    {
      "w": "Crocodile God Sobek",
      "d": "Feared deity of the Nile — temples kept live sacred crocodiles."
    },
    {
      "w": "Sacred Ibis",
      "d": "White bird sacred to Thoth — millions were mummified as offerings."
    },
    {
      "w": "Blue Lotus",
      "d": "Psychoactive flower used in rituals — appears in almost every tomb painting."
    },
    {
      "w": "Cartouche",
      "d": "Oval frame enclosing a pharaoh's name in hieroglyphs."
    },
    {
      "w": "Canopic Jar",
      "d": "Four jars for four organs — lungs, liver, stomach, intestines."
    },
    {
      "w": "Cat Goddess Bastet",
      "d": "Killing a cat in ancient Egypt was punishable by death."
    },
    {
      "w": "Desert God Seth",
      "d": "Chaos god who murdered Osiris — villain of Egyptian mythology."
    },
    {
      "w": "Ptolemy Dynasty",
      "d": "Greek rulers of Egypt after Alexander — Cleopatra was the last one."
    },
    {
      "w": "Rosetta Stone",
      "d": "Three-language tablet that finally cracked the hieroglyphic code in 1822."
    },
    {
      "w": "Giza Plateau",
      "d": "Three great pyramids and the Sphinx — last surviving ancient wonder."
    },
    {
      "w": "Valley of Kings",
      "d": "Remote desert canyon hiding 63 royal tombs on the Nile's west bank."
    },
    {
      "w": "Book of Dead",
      "d": "Illustrated papyrus scroll — the ultimate cheat sheet for the afterlife."
    }
  ]
},
  {
  "name": "board games & party games",
  "tags": {
    "a": "geek",
    "b": "culture",
    "difficulty": "easy"
  },
  "words": [
    {
      "w": "Twister",
      "d": "Right hand red — the game that turns your living room into a pretzel factory."
    },
    {
      "w": "Charades",
      "d": "Act it out, no talking — the original party game since the 1700s."
    },
    {
      "w": "Pictionary",
      "d": "Draw fast, guess faster — artistic talent absolutely not required."
    },
    {
      "w": "Cranium",
      "d": "Sculpt, hum, spell backwards, act — tests every talent you didn't know you had."
    },
    {
      "w": "Operation",
      "d": "Remove the funny bone without the buzzer going off — steady hands required."
    },
    {
      "w": "Sorry!",
      "d": "Send opponents back to start — apologize while grinning."
    },
    {
      "w": "Mousetrap",
      "d": "Build a Rube Goldberg machine to catch a plastic mouse — setup takes longer than playing."
    },
    {
      "w": "Hungry Hippos",
      "d": "Smash the lever, eat the marbles — pure chaos for ages 4 and up."
    },
    {
      "w": "Guess Who",
      "d": "\"Does your person have glasses?\" — the original face-filter game."
    },
    {
      "w": "Apples to Apples",
      "d": "Match nouns to adjectives — the family-friendly Cards Against Humanity."
    },
    {
      "w": "Boggle",
      "d": "Shake the letter dice, find words before the timer runs out."
    },
    {
      "w": "Ludo",
      "d": "Race four tokens home — known worldwide under different names."
    },
    {
      "w": "Snakes and Ladders",
      "d": "Climb ladders, slide down snakes — ancient Indian game of karma."
    },
    {
      "w": "Tic-Tac-Toe",
      "d": "Three in a row — the game every kid masters in five minutes."
    },
    {
      "w": "Yahtzee",
      "d": "Roll five dice, chase the full house — pure luck with just enough strategy."
    },
    {
      "w": "Rummy",
      "d": "Match sets and runs — the card game grandma always wins."
    },
    {
      "w": "Blackjack",
      "d": "Get to 21 without going over — the only casino game where skill matters."
    },
    {
      "w": "Spades",
      "d": "Trick-taking partnership card game — trash talk is half the strategy."
    },
    {
      "w": "Hearts",
      "d": "Avoid hearts, dodge the Queen of Spades — or shoot the moon."
    },
    {
      "w": "Mancala",
      "d": "Ancient stone-counting game — scooping and dropping since 5000 BC."
    },
    {
      "w": "Othello",
      "d": "A minute to learn, a lifetime to master — black and white disc flipping."
    },
    {
      "w": "KerPlunk",
      "d": "Pull sticks without dropping marbles — gravity is the enemy."
    },
    {
      "w": "Simon Says",
      "d": "Follow commands only when Simon says — tests listening and reflexes."
    },
    {
      "w": "Rock Paper Scissors",
      "d": "Three-way tie-breaker used to settle every playground dispute."
    },
    {
      "w": "Truth or Dare",
      "d": "Reveal a secret or do something embarrassing — no good options."
    },
    {
      "w": "Musical Chairs",
      "d": "When the music stops, someone's out — birthday party elimination."
    },
    {
      "w": "Bingo Night",
      "d": "B-12! — the social game that fills church halls and retirement homes."
    },
    {
      "w": "Shuffleboard",
      "d": "Slide pucks down a long table — bar game and cruise ship classic."
    },
    {
      "w": "Darts",
      "d": "Throw pointy things at a board — aiming for triple twenty."
    },
    {
      "w": "Foosball",
      "d": "Table soccer — spin the rods and score miniature goals."
    },
    {
      "w": "Pin the Tail",
      "d": "Blindfolded donkey decoration — the birthday party staple since 1899."
    },
    {
      "w": "Hot Potato",
      "d": "Pass it fast before the music stops — don't be the one holding it."
    },
    {
      "w": "Tag",
      "d": "You're it! — the most universal children's game on Earth."
    },
    {
      "w": "Hide and Seek",
      "d": "Ready or not, here I come — played in every culture since forever."
    },
    {
      "w": "Sardines",
      "d": "Reverse hide and seek — one hides, everyone squeezes in when they find them."
    }
  ]
},
  {
  "name": "harry potter universe",
  "tags": {
    "a": "geek",
    "b": "culture",
    "difficulty": "easy"
  },
  "words": [
    {
      "w": "Hogwarts",
      "d": "School of Witchcraft and Wizardry — a Scottish castle you can't find on any map."
    },
    {
      "w": "Quidditch",
      "d": "Wizard sport on broomsticks — catch the Golden Snitch to win 150 points."
    },
    {
      "w": "Muggle",
      "d": "Non-magical person — you, probably."
    },
    {
      "w": "Dumbledore",
      "d": "Headmaster with a long beard, half-moon glasses, and a weakness for lemon drops."
    },
    {
      "w": "Lord Voldemort",
      "d": "He-Who-Must-Not-Be-Named — the Dark Lord who split his soul seven ways."
    },
    {
      "w": "Patronus",
      "d": "Silver guardian animal conjured from your happiest memory to fight Dementors."
    },
    {
      "w": "Horcrux",
      "d": "Object containing a piece of soul — destroy all seven to kill Voldemort."
    },
    {
      "w": "Slytherin",
      "d": "The ambitious house — green and silver, snake emblem, bad reputation."
    },
    {
      "w": "Gryffindor",
      "d": "The brave house — red and gold, lion emblem, Harry's house."
    },
    {
      "w": "Hufflepuff",
      "d": "The loyal house — yellow and black, badger emblem, underrated."
    },
    {
      "w": "Ravenclaw",
      "d": "The clever house — blue and bronze, eagle emblem, Luna Lovegood's house."
    },
    {
      "w": "House Elf Dobby",
      "d": "Free elf who died saving Harry — \"such a beautiful place to be with friends.\""
    },
    {
      "w": "Giant Hagrid",
      "d": "Half-giant gamekeeper who collects dangerous creatures and can't keep secrets."
    },
    {
      "w": "Professor Snape",
      "d": "The potions master everyone hated until the final reveal — \"Always.\""
    },
    {
      "w": "Hermione Granger",
      "d": "Brightest witch of her age — saved Harry and Ron approximately every Tuesday."
    },
    {
      "w": "Magic Wand",
      "d": "The wand chooses the wizard — Holly and phoenix feather for Harry."
    },
    {
      "w": "Nimbus 2000",
      "d": "Harry's first broomstick — top racing broom before the Firebolt."
    },
    {
      "w": "Sorting Hat",
      "d": "Sentient hat that reads your mind and picks your house on day one."
    },
    {
      "w": "Dementor",
      "d": "Soul-sucking creature in a black cloak — guards of Azkaban prison."
    },
    {
      "w": "Azkaban Prison",
      "d": "Wizard jail on a North Sea island — Sirius Black escaped it once."
    },
    {
      "w": "Diagon Alley",
      "d": "Hidden London shopping street for wizards — tap the right brick to enter."
    },
    {
      "w": "Butterbeer",
      "d": "Sweet wizarding drink served at the Three Broomsticks in Hogsmeade."
    },
    {
      "w": "Mandrake Root",
      "d": "Screaming baby plant whose cry can knock you unconscious or kill you."
    },
    {
      "w": "Hippogriff",
      "d": "Half eagle, half horse — bow first or lose a limb. Ask Malfoy."
    },
    {
      "w": "Thestral",
      "d": "Skeletal winged horse visible only to those who have witnessed death."
    },
    {
      "w": "Pensieve",
      "d": "Stone basin for storing and reviewing silver memory threads."
    },
    {
      "w": "Marauders Map",
      "d": "\"I solemnly swear I am up to no good\" — shows everyone's location at Hogwarts."
    },
    {
      "w": "Invisibility Cloak",
      "d": "One of the three Deathly Hallows — passed down from Ignotus Peverell."
    },
    {
      "w": "Expelliarmus",
      "d": "Harry's signature disarming spell — used it even against Voldemort."
    },
    {
      "w": "Accio",
      "d": "Summoning charm — \"Accio Firebolt!\" saved Harry from a dragon."
    },
    {
      "w": "Lumos Spell",
      "d": "Lights up your wand tip — the wizarding world's flashlight."
    },
    {
      "w": "Floo Powder",
      "d": "Throw it in the fireplace, shout your destination, spin through green flames."
    },
    {
      "w": "Elder Wand",
      "d": "Most powerful wand ever made — one of the three Deathly Hallows."
    },
    {
      "w": "Golden Snitch",
      "d": "Tiny winged gold ball worth 150 points — catching it ends the match."
    },
    {
      "w": "Triwizard Cup",
      "d": "Goblet of Fire chose champions — turned out to be a portkey to a graveyard."
    }
  ]
}
];