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
        "w": "Jackie Joyner-Kersee",
        "d": "American heptathlon and long-jump legend, among the greatest Olympians"
      },
      {
        "w": "Pelé",
        "d": "Brazilian king of football who won three World Cups"
      },
      {
        "w": "Mia Hamm",
        "d": "American soccer icon who helped define the women's game globally"
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
        "w": "Serena Williams",
        "d": "Tennis champion who dominated Grand Slam singles for more than two decades"
      },
      {
        "w": "LeBron James",
        "d": "King James — four titles, four teams, still competing past 40"
      },
      {
        "w": "Usain Bolt",
        "d": "Jamaican sprinter and Olympic legend, world-record holder in the 100m and 200m"
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
        "w": "The Conjuring Universe",
        "d": "Horror franchise built around paranormal cases and demonic artifacts"
      },
      {
        "w": "Indiana Jones",
        "d": "Archaeologist professor who punches Nazis and hates snakes"
      },
      {
        "w": "Bourne",
        "d": "Action spy franchise about an amnesiac CIA assassin"
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
        "w": "Minions",
        "d": "Animated comedy franchise spun out of Despicable Me"
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
        "w": "Godzilla",
        "d": "Long-running monster franchise centered on the giant kaiju"
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
        "w": "Twilight",
        "d": "Vampire romance franchise adapted from Stephenie Meyer novels"
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
        "w": "Mad Max",
        "d": "Post-apocalyptic action franchise created by George Miller"
      },
      {
        "w": "Top Gun",
        "d": "Fighter pilots, aviator shades, and volleyball — 80s cinema peak"
      },
      {
        "w": "The Fast Saga",
        "d": "Car-chase blockbuster series built around family and heists"
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
        "w": "Like a Prayer",
        "d": "Madonna hit that fused pop spectacle, gospel energy, and controversy"
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
        "w": "Respect",
        "d": "Aretha Franklin anthem that turned a soul song into a demand for dignity"
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
        "w": "Billie Jean",
        "d": "Michael Jackson hit with an instantly recognizable bassline and moonwalk-era aura"
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
        "w": "Baalbek",
        "d": "Ancient temple complex in Lebanon with some of the Roman world's largest stones"
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
        "w": "Sigiriya",
        "d": "Ancient rock fortress in Sri Lanka with gardens, frescoes and palace ruins"
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
        "w": "Ellora Caves",
        "d": "Indian rock-cut cave complex with Buddhist, Hindu and Jain monuments"
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
        "w": "The Tinderbox",
        "d": "Andersen tale about a soldier, a magic box, and powerful dogs"
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
        "w": "The Brave Little Tailor",
        "d": "Grimm tale about a tailor whose boast turns into unlikely heroism"
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
        "w": "Little Red Riding Hood",
        "d": "Classic tale of a girl, a wolf, and a dangerous shortcut through the woods"
      },
      {
        "w": "Puss in Boots",
        "d": "Clever cat from European fairy tale tradition who wins status for his master"
      },
      {
        "w": "The Snow Queen",
        "d": "Andersen fairy tale about Gerda, Kai, and an icy enchantress"
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
        "w": "Parker Solar Probe",
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
        "w": "Kelpie",
        "d": "Shape-shifting water spirit from Scottish folklore, often appearing as a horse"
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
        "w": "Simurgh",
        "d": "Mythic Persian bird associated with wisdom and healing"
      },
      {
        "w": "Manticore",
        "d": "Man-eating creature with a human head, lion body, and scorpion tail"
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
        "w": "Wyvern",
        "d": "Two-legged dragon-like creature in European heraldry and fantasy"
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
        "w": "Hippogriff",
        "d": "Winged hybrid of horse and griffin, later made famous again by fantasy"
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
        "w": "Villa Savoye",
        "d": "Le Corbusier house that became a manifesto of modernist architecture"
      },
      {
        "w": "Ronchamp Chapel",
        "d": "Le Corbusier chapel in France with sculptural modernist forms"
      },
      {
        "w": "Pantheon",
        "d": "Rome's 2,000-year-old dome with a hole in the top — perfect proportions"
      },
      {
        "w": "Centre Pompidou",
        "d": "Paris cultural center famous for putting services and structure outside"
      },
      {
        "w": "Casa Mila",
        "d": "Gaudi apartment building in Barcelona with a rippling stone facade"
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
        "w": "Kimbell Art Museum",
        "d": "Louis Kahn museum in Texas celebrated for its vaulted daylight"
      },
      {
        "w": "Farnsworth House",
        "d": "Mies van der Rohe glass house, a landmark of minimal modernism"
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
        "w": "Seagram Building",
        "d": "Mies van der Rohe skyscraper that shaped modern corporate architecture"
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
        "w": "The Shard",
        "d": "London skyscraper by Renzo Piano with a sharp glass silhouette"
      },
      {
        "w": "Sydney Opera House",
        "d": "Iconic sail-like performing arts complex on Sydney Harbour"
      },
      {
        "w": "Burj Khalifa",
        "d": "Dubai skyscraper, currently the world's tallest building"
      },
      {
        "w": "Fallingwater",
        "d": "Frank Lloyd Wright house built dramatically over a waterfall"
      },
      {
        "w": "Heydar Aliyev Center",
        "d": "Zaha Hadid cultural center known for its flowing white shell"
      },
      {
        "w": "Guggenheim Bilbao",
        "d": "Frank Gehry museum whose titanium curves reshaped Bilbao's image"
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
        "w": "Taos Hum",
        "d": "Low-frequency hum reported in New Mexico; source remains disputed"
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
        "w": "Samara Morgan",
        "d": "Ghostly girl from The Ring, tied to a cursed videotape"
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
        "w": "Freddy Krueger",
        "d": "Nightmare on Elm Street killer who attacks victims in dreams"
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
        "w": "Hephthalites",
        "d": "Central Asian confederation sometimes called the White Huns"
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
        "w": "WIMP",
        "d": "Hypothetical weakly interacting massive particle once favored as dark-matter candidate"
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
        "w": "Methane Clathrate Release",
        "d": "Runaway release of trapped methane from ocean sediments, worsening climate feedbacks"
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
        "w": "Vacuum Decay",
        "d": "Hypothetical transition to a lower-energy vacuum state that could rewrite physics"
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
        "w": "Jean-Bedel Bokassa",
        "d": "Central African dictator who crowned himself emperor in extravagant ceremony"
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
        "w": "Saparmurat Niyazov",
        "d": "Turkmen dictator whose cult of personality included renaming months and monuments"
      },
      {
        "w": "Kim Jong Il",
        "d": "North Korean ruler surrounded by mythmaking, film obsession, and curated eccentricity"
      },
      {
        "w": "Muammar Gaddafi",
        "d": "Libyan ruler known for theatrical uniforms, tents, and erratic spectacle"
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
        "d": "One dancer alone, bass drops, everyone erupts into chaos — 2013 viral dance trend that peaked fast."
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
        "w": "Keyser Soze",
        "d": "Mythic criminal mastermind at the center of The Usual Suspects"
      },
      {
        "w": "Amon Goeth",
        "d": "Schindler's List commandant, a human villain drawn from historical atrocity"
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
        "w": "Anton Chigurh",
        "d": "Unsettling assassin from No Country for Old Men, defined by a coin toss"
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
        "w": "Buffy the Vampire Slayer",
        "d": "Teen horror series that turned monster-hunting into a cult TV language"
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
        "w": "NYPD Blue",
        "d": "Police drama that pushed network TV toward grittier adult storytelling"
      },
      {
        "w": "Narcos",
        "d": "Pablo Escobar's rise and fall told with terrifying real-life archival footage woven in."
      },
      {
        "w": "Hill Street Blues",
        "d": "Police drama that helped create modern ensemble television"
      },
      {
        "w": "All in the Family",
        "d": "Sitcom that pushed American TV into sharper social argument"
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
        "w": "M*A*S*H",
        "d": "Korean War medical comedy-drama that became one of US television's defining shows"
      },
      {
        "w": "The Mary Tyler Moore Show",
        "d": "Workplace sitcom that helped redefine women on American television"
      },
      {
        "w": "I Love Lucy",
        "d": "Foundational sitcom starring Lucille Ball, a blueprint for TV comedy"
      },
      {
        "w": "The Twilight Zone",
        "d": "Anthology series of eerie science-fiction and moral twists"
      },
      {
        "w": "Six Feet Under",
        "d": "Family drama about a funeral home, grief, and mortality"
      },
      {
        "w": "The West Wing",
        "d": "Political drama about an idealized White House staff"
      },
      {
        "w": "ER",
        "d": "Medical drama that helped define fast, ensemble network television"
      },
      {
        "w": "The X-Files",
        "d": "Paranormal investigation series that made Mulder and Scully pop-culture icons"
      },
      {
        "w": "Cheers",
        "d": "Bar-set sitcom built around regulars, timing, and a famous theme song"
      },
      {
        "w": "Mad Men",
        "d": "Prestige drama about advertising, identity, and America in the 1960s"
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
        "w": "Tamagoyaki",
        "d": "Japanese rolled omelet often eaten at breakfast or in bento"
      },
      {
        "w": "Shakshuka",
        "d": "Eggs poached in spiced tomato sauce — Middle Eastern and North African morning staple."
      },
      {
        "w": "Jianbing",
        "d": "Chinese breakfast crepe folded around egg, sauce, herbs, and crisp wonton"
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
        "w": "Kaya Toast",
        "d": "Singaporean and Malaysian toast with coconut jam, butter, soft eggs, and coffee."
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
        "w": "Congee",
        "d": "Rice porridge eaten for breakfast across East and Southeast Asia"
      },
      {
        "w": "Full English",
        "d": "Hearty British breakfast plate with eggs, beans, sausage, and toast"
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
        "w": "Idli",
        "d": "Steamed rice-and-lentil cakes, a classic South Indian breakfast"
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
        "w": "Bengals",
        "d": "Cincinnati NFL team nickname, big-cat branding without duplicating the animal card"
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
  },
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
        "w": "Dendera Zodiac",
        "d": "Egyptian temple relief showing a famous ancient star map"
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
  },
  {
    "name": "fashion: silhouettes, runway & icons",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Little black dress",
        "d": "Chanel-linked evening basic designed to look simple, sharp and endlessly reusable"
      },
      {
        "w": "Pencil skirt",
        "d": "Narrow skirt shape that follows the hips and tapers toward the knees"
      },
      {
        "w": "New Look",
        "d": "Dior silhouette of 1947 with a tiny waist and a full skirt"
      },
      {
        "w": "Miniskirt",
        "d": "Short 1960s fashion symbol associated with youth culture and Mary Quant"
      },
      {
        "w": "Wrap dress",
        "d": "Diane von Furstenberg staple tied around the body with a crossing front"
      },
      {
        "w": "Power suit",
        "d": "Tailored suit used as a symbol of corporate authority and 1980s dressing"
      },
      {
        "w": "Pret-a-porter",
        "d": "Ready-to-wear fashion produced in standard sizes, not custom couture"
      },
      {
        "w": "Haute couture",
        "d": "Made-to-measure high fashion under strict Parisian rules and craft standards"
      },
      {
        "w": "Capsule wardrobe",
        "d": "Small coordinated wardrobe built from a limited set of versatile pieces"
      },
      {
        "w": "Color blocking",
        "d": "Outfit or garment built from bold, separate blocks of color"
      },
      {
        "w": "Paris Fashion Week",
        "d": "Major runway week and one of the central events of the fashion calendar"
      },
      {
        "w": "Milan Fashion Week",
        "d": "Italian fashion week tied to luxury houses, tailoring and accessories"
      },
      {
        "w": "New York Fashion Week",
        "d": "American runway week tied to ready-to-wear and commercial fashion"
      },
      {
        "w": "London Fashion Week",
        "d": "British fashion week known for young designers and experimental style"
      },
      {
        "w": "Bias cut",
        "d": "Cutting fabric diagonally so it drapes and clings more fluidly"
      },
      {
        "w": "Slip dress",
        "d": "Dress inspired by lingerie, often cut from silk or satin"
      },
      {
        "w": "Baby doll dress",
        "d": "Short loose dress with a high waist and youthful proportions"
      },
      {
        "w": "Trench coat",
        "d": "Military-derived raincoat with belt, storm flap and double-breasted front"
      },
      {
        "w": "Stiletto heel",
        "d": "Thin high heel that became a signature of mid-century glamour"
      },
      {
        "w": "Platform shoe",
        "d": "Shoe raised by a thick sole under both toe and heel"
      },
      {
        "w": "Shoulder pads",
        "d": "Structured padding used to broaden the silhouette of jackets and dresses"
      },
      {
        "w": "A-line dress",
        "d": "Dress silhouette that narrows at the shoulders and widens toward the hem"
      },
      {
        "w": "Chanel suit",
        "d": "Boxy jacket and skirt ensemble associated with Coco Chanel"
      },
      {
        "w": "Le Smoking",
        "d": "Yves Saint Laurent tuxedo suit for women, introduced in the 1960s"
      },
      {
        "w": "Birkin bag",
        "d": "Hermes handbag turned into a global luxury status symbol"
      },
      {
        "w": "Streetwear",
        "d": "Casual style rooted in skate, hip-hop and sneaker culture"
      },
      {
        "w": "Twiggy",
        "d": "British model whose androgynous look defined the 1960s mod image"
      },
      {
        "w": "Naomi Campbell",
        "d": "British supermodel and one of the most visible runway figures of the 1990s"
      },
      {
        "w": "Kate Moss",
        "d": "British model linked to waif style and 1990s fashion photography"
      },
      {
        "w": "Cindy Crawford",
        "d": "American supermodel known for commercial glamour and a signature beauty mark"
      },
      {
        "w": "Linda Evangelista",
        "d": "Canadian supermodel famous for dramatic transformations on the runway"
      },
      {
        "w": "Claudia Schiffer",
        "d": "German supermodel associated with 1990s luxury campaigns"
      },
      {
        "w": "Gisele Bundchen",
        "d": "Brazilian model who became one of the highest-paid runway stars"
      },
      {
        "w": "Iman",
        "d": "Somali-American model and cosmetics entrepreneur"
      },
      {
        "w": "Veruschka",
        "d": "German model of the 1960s known for theatrical poses and body art"
      }
    ]
  },
  {
    "name": "scammers & famous frauds",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Charles Ponzi",
        "d": "Name behind the Ponzi scheme, built on paying old investors with new money"
      },
      {
        "w": "Bernie Madoff",
        "d": "Wall Street fraudster behind a massive decades-long investment scheme"
      },
      {
        "w": "Cassie Chadwick",
        "d": "Impostor who posed as Andrew Carnegies illegitimate daughter to obtain loans"
      },
      {
        "w": "Barry Minkow",
        "d": "Teen entrepreneur whose carpet-cleaning company became a fraud case"
      },
      {
        "w": "Anna Delvey",
        "d": "Fake heiress who infiltrated New York social and art circles"
      },
      {
        "w": "Elizabeth Holmes",
        "d": "Theranos founder convicted after misleading investors about blood testing"
      },
      {
        "w": "Sam Bankman-Fried",
        "d": "FTX founder convicted after the collapse of his crypto exchange"
      },
      {
        "w": "Gregor MacGregor",
        "d": "Sold imaginary land in a fake Central American colony called Poyais"
      },
      {
        "w": "Stephen Jay Russell",
        "d": "American impostor and escape artist known for repeated frauds"
      },
      {
        "w": "William Thompson",
        "d": "Nineteenth-century swindler tied to the phrase confidence man"
      },
      {
        "w": "Joseph Weil",
        "d": "American con artist nicknamed Yellow Kid"
      },
      {
        "w": "Ferdinand Demara",
        "d": "Serial impostor who worked under false identities in several professions"
      },
      {
        "w": "Christophe Rocancourt",
        "d": "French impostor who posed as wealthy or well-connected figures"
      },
      {
        "w": "John Brinkley",
        "d": "Fake doctor who sold goat-gland cures by radio advertising"
      },
      {
        "w": "Robert Hendy-Freegard",
        "d": "British con man who posed as a spy handler"
      },
      {
        "w": "Martin Frankel",
        "d": "Financial fraudster who looted insurance companies in the 1990s"
      },
      {
        "w": "George Parker",
        "d": "Con man who repeatedly claimed to sell New York landmarks"
      },
      {
        "w": "South Sea Bubble",
        "d": "Eighteenth-century investment mania around the South Sea Company"
      },
      {
        "w": "Tulip mania",
        "d": "Dutch speculative bubble around rare tulip bulbs"
      },
      {
        "w": "Nigerian prince scam",
        "d": "Advance-fee fraud promising huge rewards after a small payment"
      },
      {
        "w": "Advance-fee fraud",
        "d": "Scheme that asks for upfront money before a promised fortune appears"
      },
      {
        "w": "Pyramid scheme",
        "d": "Recruitment-based scheme that collapses when new participants run out"
      },
      {
        "w": "Ponzi scheme",
        "d": "Investment fraud using new deposits to pay fake returns"
      },
      {
        "w": "Pump and dump",
        "d": "Market manipulation that inflates a security before insiders sell"
      },
      {
        "w": "Boiler room",
        "d": "High-pressure sales operation pushing dubious investments by phone"
      },
      {
        "w": "Affinity fraud",
        "d": "Fraud that exploits trust inside a community or identity group"
      },
      {
        "w": "Phishing",
        "d": "Fraudulent message designed to steal credentials or payment data"
      },
      {
        "w": "Romance scam",
        "d": "Online relationship fraud used to extract money from a victim"
      },
      {
        "w": "Fake charity",
        "d": "Fundraising fraud built around a false cause or disaster appeal"
      },
      {
        "w": "Check kiting",
        "d": "Fraud exploiting the delay between depositing and clearing checks"
      },
      {
        "w": "Forged provenance",
        "d": "Fake ownership history used to sell art or antiquities"
      },
      {
        "w": "Art forgery",
        "d": "Fake artwork passed off as an original by a known artist"
      },
      {
        "w": "Psychic fraud",
        "d": "Con that sells supernatural help or curse removal for money"
      },
      {
        "w": "MLM scheme",
        "d": "Multi-level sales model that can function mainly through recruitment"
      },
      {
        "w": "Exit scam",
        "d": "Fraud where operators vanish after collecting customers money"
      }
    ]
  },
  {
    "name": "renaissance people & ideas",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Lorenzo de Medici",
        "d": "Florentine patron whose court helped shape Renaissance culture"
      },
      {
        "w": "Savonarola",
        "d": "Preacher who briefly dominated Florence with moral and political reform"
      },
      {
        "w": "Machiavelli",
        "d": "Florentine political thinker and author of The Prince"
      },
      {
        "w": "Baldassare Castiglione",
        "d": "Author of The Book of the Courtier, a guide to elite conduct"
      },
      {
        "w": "Petrarch",
        "d": "Humanist poet often treated as a starting point for Renaissance letters"
      },
      {
        "w": "Boccaccio",
        "d": "Author of The Decameron and key figure in early Italian humanism"
      },
      {
        "w": "Erasmus",
        "d": "Northern humanist who used scholarship and satire to criticize church abuses"
      },
      {
        "w": "Pico della Mirandola",
        "d": "Thinker associated with the dignity and potential of human beings"
      },
      {
        "w": "Marsilio Ficino",
        "d": "Florentine scholar who translated Plato and shaped Renaissance Platonism"
      },
      {
        "w": "Lorenzo Valla",
        "d": "Humanist philologist who exposed the Donation of Constantine as a forgery"
      },
      {
        "w": "Guicciardini",
        "d": "Florentine historian and statesman of Renaissance Italy"
      },
      {
        "w": "Christine de Pizan",
        "d": "Writer who defended womens learning and moral worth before the Renaissance peak"
      },
      {
        "w": "Aldus Manutius",
        "d": "Venetian printer whose editions helped circulate classical learning"
      },
      {
        "w": "Isabella d Este",
        "d": "Mantuan patron and political figure of Renaissance court culture"
      },
      {
        "w": "Niccolo Niccoli",
        "d": "Collector and humanist linked to manuscript recovery and book culture"
      },
      {
        "w": "Humanism",
        "d": "Intellectual movement centered on classical texts and human capacities"
      },
      {
        "w": "Linear perspective",
        "d": "Mathematical technique for representing depth on a flat surface"
      },
      {
        "w": "Civic humanism",
        "d": "Idea that classical learning should serve active public life"
      },
      {
        "w": "Courtier ideal",
        "d": "Model of polished manners, education and social performance at court"
      },
      {
        "w": "Patronage",
        "d": "Support system through which rulers and elites funded artists and scholars"
      },
      {
        "w": "Quattrocento",
        "d": "Italian fifteenth century, especially early Renaissance culture"
      },
      {
        "w": "Cinquecento",
        "d": "Italian sixteenth century, including High Renaissance and Mannerist phases"
      },
      {
        "w": "Studia humanitatis",
        "d": "Humanist curriculum of grammar, rhetoric, poetry, history and moral philosophy"
      },
      {
        "w": "Universal man",
        "d": "Ideal of broad mastery across arts, science, letters and practical skill"
      },
      {
        "w": "Ad fontes",
        "d": "Humanist call to return to original sources and ancient texts"
      },
      {
        "w": "Platonic Academy",
        "d": "Florentine circle associated with Ficino and renewed Plato studies"
      },
      {
        "w": "Printing revolution",
        "d": "Expansion of printed books that accelerated the spread of new ideas"
      },
      {
        "w": "Textual criticism",
        "d": "Scholarly comparison of manuscripts to restore reliable texts"
      },
      {
        "w": "Antiquarianism",
        "d": "Study and collecting of ancient objects, inscriptions and ruins"
      },
      {
        "w": "Mannerism",
        "d": "Late Renaissance style with artificial poses and complex elegance"
      },
      {
        "w": "Studiolo",
        "d": "Private study or cabinet for books, art and learned display"
      },
      {
        "w": "Humanist correspondence",
        "d": "Scholarly letter exchange that linked Renaissance readers and writers"
      },
      {
        "w": "Anatomical drawing",
        "d": "Visual study of the body linking art, medicine and observation"
      },
      {
        "w": "Vitruvian revival",
        "d": "Renewed use of ancient architectural theory in Renaissance design"
      },
      {
        "w": "Medici bank",
        "d": "Financial power base that supported Florentine politics and patronage"
      }
    ]
  },
  {
    "name": "enlightenment ideas & salons",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Diderot",
        "d": "French editor of the Encyclopedie and central Enlightenment organizer"
      },
      {
        "w": "d Alembert",
        "d": "Mathematician and co-editor of the Encyclopedie"
      },
      {
        "w": "Voltaire",
        "d": "Writer and polemicist associated with tolerance and attacks on fanaticism"
      },
      {
        "w": "Rousseau",
        "d": "Thinker of the social contract, education and popular sovereignty"
      },
      {
        "w": "Montesquieu",
        "d": "Political writer known for separation of powers"
      },
      {
        "w": "Beccaria",
        "d": "Author who argued against torture and the death penalty"
      },
      {
        "w": "Kant",
        "d": "Philosopher who defined Enlightenment as emergence from self-imposed immaturity"
      },
      {
        "w": "Hume",
        "d": "Scottish philosopher of empiricism, skepticism and human nature"
      },
      {
        "w": "Adam Smith",
        "d": "Scottish moral philosopher and economist of market society"
      },
      {
        "w": "Mary Wollstonecraft",
        "d": "Author of a foundational defense of womens rights and education"
      },
      {
        "w": "Emilie du Chatelet",
        "d": "Mathematician and translator of Newton into French"
      },
      {
        "w": "Benjamin Franklin",
        "d": "Printer, scientist and diplomat of the Atlantic Enlightenment"
      },
      {
        "w": "Thomas Paine",
        "d": "Pamphleteer of rights, revolution and republican politics"
      },
      {
        "w": "Encyclopedie",
        "d": "French reference project meant to organize and spread useful knowledge"
      },
      {
        "w": "Salon",
        "d": "Elite gathering where writers, nobles and patrons debated ideas"
      },
      {
        "w": "Coffeehouse",
        "d": "Urban meeting place for newspapers, conversation and political opinion"
      },
      {
        "w": "Republic of Letters",
        "d": "International network of scholars exchanging books and correspondence"
      },
      {
        "w": "Natural rights",
        "d": "Idea that people possess rights not granted by rulers"
      },
      {
        "w": "Separation of powers",
        "d": "Division of political authority among branches of government"
      },
      {
        "w": "Social contract",
        "d": "Theory that political authority rests on an agreement among people"
      },
      {
        "w": "Religious toleration",
        "d": "Demand that states stop punishing dissenting belief"
      },
      {
        "w": "Public sphere",
        "d": "Space of debate created by print, clubs, salons and coffeehouses"
      },
      {
        "w": "Physiocracy",
        "d": "Economic school that treated agriculture as the source of wealth"
      },
      {
        "w": "Laissez-faire",
        "d": "Economic principle favoring minimal state interference in markets"
      },
      {
        "w": "Enlightened absolutism",
        "d": "Monarchical reform justified by reason and administrative improvement"
      },
      {
        "w": "Freethought",
        "d": "Intellectual stance rejecting authority in matters of belief"
      },
      {
        "w": "Deism",
        "d": "Belief in a creator understood through reason rather than revelation"
      },
      {
        "w": "Empiricism",
        "d": "View that knowledge depends on experience and observation"
      },
      {
        "w": "Rationalism",
        "d": "View that reason can discover important truths about the world"
      },
      {
        "w": "Progress",
        "d": "Belief that knowledge and institutions can improve human life"
      },
      {
        "w": "Useful knowledge",
        "d": "Practical learning aimed at agriculture, industry, health and reform"
      },
      {
        "w": "Masonic lodge",
        "d": "Association where elites discussed morality, fraternity and reform"
      },
      {
        "w": "Reading society",
        "d": "Subscription club organized around shared books and periodicals"
      },
      {
        "w": "Pamphlet culture",
        "d": "Political world of short printed arguments and polemics"
      },
      {
        "w": "Civil society",
        "d": "Sphere of associations and debate outside the formal state"
      }
    ]
  },
  {
    "name": "sports scandals & controversies",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Calciopoli",
        "d": "Italian football scandal involving referee influence and club punishments"
      },
      {
        "w": "Black Sox scandal",
        "d": "Baseball scandal in which players were accused of throwing the 1919 World Series"
      },
      {
        "w": "FIFA Gate",
        "d": "Corruption investigation into football officials and marketing deals"
      },
      {
        "w": "Deflategate",
        "d": "NFL controversy over football air pressure in a Patriots playoff game"
      },
      {
        "w": "Spygate",
        "d": "NFL scandal over filming opponents signals"
      },
      {
        "w": "Bloodgate",
        "d": "Rugby scandal involving a fake blood injury to create a substitution"
      },
      {
        "w": "Sandpapergate",
        "d": "Cricket ball-tampering scandal involving the Australian team"
      },
      {
        "w": "Astros sign-stealing",
        "d": "Baseball scandal over illegal electronic sign stealing"
      },
      {
        "w": "Salt Lake City 2002",
        "d": "Olympic figure-skating judging scandal and shared gold medals"
      },
      {
        "w": "Super League",
        "d": "Breakaway football project that triggered a backlash from fans and leagues"
      },
      {
        "w": "Rosie Ruiz",
        "d": "Runner who appeared to win Boston after skipping much of the marathon"
      },
      {
        "w": "Tonya Harding case",
        "d": "Figure-skating scandal surrounding the attack on Nancy Kerrigan"
      },
      {
        "w": "Materazzi incident",
        "d": "World Cup final clash that ended with Zidanes red card"
      },
      {
        "w": "Malice at the Palace",
        "d": "NBA brawl between players and spectators in Detroit"
      },
      {
        "w": "Bite Fight",
        "d": "Boxing match in which Mike Tyson bit Evander Holyfields ear"
      },
      {
        "w": "Spygate McLaren",
        "d": "Formula One scandal over Ferrari technical documents found at McLaren"
      },
      {
        "w": "Crashgate",
        "d": "Formula One scandal involving a deliberate Renault crash in Singapore"
      },
      {
        "w": "Biogenesis scandal",
        "d": "Baseball doping case tied to a Florida anti-aging clinic"
      },
      {
        "w": "BALCO scandal",
        "d": "Steroid distribution case that implicated elite track and baseball athletes"
      },
      {
        "w": "Operation Puerto",
        "d": "Spanish blood-doping investigation centered on professional cycling"
      },
      {
        "w": "Lance Armstrong case",
        "d": "Cycling scandal ending with stripped Tour de France titles"
      },
      {
        "w": "Ben Johnson Seoul",
        "d": "Olympic sprint doping case after the 1988 100 meters final"
      },
      {
        "w": "Marion Jones confession",
        "d": "Olympic medals returned after admission of steroid use"
      },
      {
        "w": "Russian doping scandal",
        "d": "State-linked doping system exposed around the Sochi Olympics"
      },
      {
        "w": "Tim Donaghy case",
        "d": "NBA referee scandal involving betting and inside information"
      },
      {
        "w": "Hansie Cronje case",
        "d": "Cricket match-fixing scandal around the South African captain"
      },
      {
        "w": "Pakistan spot-fixing",
        "d": "Cricket scandal involving deliberate no-balls for betting markets"
      },
      {
        "w": "Totonero",
        "d": "Italian football betting scandal of 1980"
      },
      {
        "w": "Korean World Cup refereeing",
        "d": "Controversial 2002 match between Italy and South Korea"
      },
      {
        "w": "Wembley goal",
        "d": "Disputed 1966 World Cup final goal that still fuels debate"
      },
      {
        "w": "Pine Tar Game",
        "d": "Baseball controversy over George Bretts bat and too much pine tar"
      },
      {
        "w": "Salary cap scandal",
        "d": "Team punishment for secretly breaking league spending limits"
      },
      {
        "w": "Age falsification",
        "d": "Controversy over athletes competing with disputed birth records"
      },
      {
        "w": "Hidden motor",
        "d": "Cycling cheating case involving a motor concealed inside a bike"
      },
      {
        "w": "Bottlegate",
        "d": "NFL game where fans threw bottles after a disputed reversal"
      }
    ]
  },
  {
    "name": "architectural details & elements",
    "tags": {
      "a": "human",
      "b": "architecture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Doric order",
        "d": "Greek column order with plain capital and heavy proportions"
      },
      {
        "w": "Ionic order",
        "d": "Classical order recognized by scroll-shaped volutes on the capital"
      },
      {
        "w": "Corinthian order",
        "d": "Classical order with ornate acanthus-leaf capitals"
      },
      {
        "w": "Tuscan order",
        "d": "Simple Roman order with plain shaft and capital"
      },
      {
        "w": "Composite order",
        "d": "Roman order combining Ionic volutes and Corinthian foliage"
      },
      {
        "w": "Architrave",
        "d": "Lowest horizontal band of an entablature above columns"
      },
      {
        "w": "Frieze",
        "d": "Middle band of an entablature, often decorated with relief sculpture"
      },
      {
        "w": "Cornice",
        "d": "Projecting upper molding that crowns a wall or entablature"
      },
      {
        "w": "Entablature",
        "d": "Horizontal structure carried by columns in classical architecture"
      },
      {
        "w": "Pediment",
        "d": "Triangular gable above a portico or classical facade"
      },
      {
        "w": "Tympanum",
        "d": "Recessed triangular or arched area inside a pediment or portal"
      },
      {
        "w": "Pilaster",
        "d": "Flat rectangular column attached to a wall"
      },
      {
        "w": "Buttress",
        "d": "External support built to resist outward pressure from a wall"
      },
      {
        "w": "Flying buttress",
        "d": "Arched exterior support carrying vault thrust away from a wall"
      },
      {
        "w": "Rib vault",
        "d": "Vault whose load is carried by projecting stone ribs"
      },
      {
        "w": "Groin vault",
        "d": "Vault made by the intersection of two barrel vaults"
      },
      {
        "w": "Barrel vault",
        "d": "Continuous half-cylinder vault over a space"
      },
      {
        "w": "Pendentive",
        "d": "Curved triangular support that lets a dome sit over a square room"
      },
      {
        "w": "Squinch",
        "d": "Corner arch or niche that transitions from square space to dome"
      },
      {
        "w": "Clerestory",
        "d": "High window zone bringing light into a tall interior"
      },
      {
        "w": "Nave",
        "d": "Main central space of a church, usually for the congregation"
      },
      {
        "w": "Transept",
        "d": "Cross arm of a church plan, forming a cruciform layout"
      },
      {
        "w": "Apse",
        "d": "Semicircular or polygonal end of a church behind the altar"
      },
      {
        "w": "Ambulatory",
        "d": "Passage around the choir or apse of a church"
      },
      {
        "w": "Cloister",
        "d": "Covered walkway around a monastery courtyard"
      },
      {
        "w": "Arcade",
        "d": "Series of arches carried by columns or piers"
      },
      {
        "w": "Loggia",
        "d": "Covered gallery open on one or more sides"
      },
      {
        "w": "Cupola",
        "d": "Small dome or dome-like roof element"
      },
      {
        "w": "Oculus",
        "d": "Round opening, often at the top of a dome"
      },
      {
        "w": "Portico",
        "d": "Columned porch or entrance structure"
      },
      {
        "w": "Colonnade",
        "d": "Row or sequence of columns supporting an entablature or roof"
      },
      {
        "w": "Coffered ceiling",
        "d": "Ceiling divided into sunken decorative panels"
      },
      {
        "w": "Rustication",
        "d": "Masonry treatment with rough or strongly emphasized stone blocks"
      },
      {
        "w": "Mansard roof",
        "d": "Double-sloped roof associated with French architecture"
      },
      {
        "w": "Curtain wall",
        "d": "Non-load-bearing exterior wall hung from a structural frame"
      }
    ]
  },
  {
    "name": "video game platforms & services",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Atari 2600",
        "d": "Early home console that made cartridge gaming a mass market"
      },
      {
        "w": "Famicom",
        "d": "Nintendo console released in Japan before its Western NES version"
      },
      {
        "w": "NES",
        "d": "Western Nintendo console that revived home gaming after the 1983 crash"
      },
      {
        "w": "Super Nintendo",
        "d": "Sixteen-bit Nintendo console associated with Mario, Zelda and Donkey Kong"
      },
      {
        "w": "Sega Mega Drive",
        "d": "Sixteen-bit Sega console known as Genesis in North America"
      },
      {
        "w": "PlayStation",
        "d": "Sony console that made disc-based 3D gaming mainstream"
      },
      {
        "w": "PlayStation 2",
        "d": "Best-selling home console and a major DVD playback device"
      },
      {
        "w": "Xbox",
        "d": "Microsofts first console, launched with Halo and network ambitions"
      },
      {
        "w": "Xbox Live",
        "d": "Online service that standardized console accounts and matchmaking"
      },
      {
        "w": "Nintendo Switch",
        "d": "Hybrid console that works as both handheld and home system"
      },
      {
        "w": "Game Boy",
        "d": "Nintendo handheld that turned portable gaming into a global market"
      },
      {
        "w": "Game Boy Advance",
        "d": "Thirty-two-bit handheld successor to the Game Boy line"
      },
      {
        "w": "Nintendo DS",
        "d": "Dual-screen handheld with a touchscreen and huge casual audience"
      },
      {
        "w": "PSP",
        "d": "Sony handheld using UMD discs and multimedia features"
      },
      {
        "w": "Wii",
        "d": "Nintendo console built around motion controls and broad family appeal"
      },
      {
        "w": "Dreamcast",
        "d": "Final Sega console, ahead of its time with online features"
      },
      {
        "w": "Sega Saturn",
        "d": "Sega console that struggled against the PlayStation"
      },
      {
        "w": "Nintendo 64",
        "d": "Cartridge-based console with analog stick and early 3D classics"
      },
      {
        "w": "Neo Geo",
        "d": "Expensive SNK arcade-style home system with premium cartridges"
      },
      {
        "w": "ZX Spectrum",
        "d": "British home computer central to early European game culture"
      },
      {
        "w": "Commodore 64",
        "d": "Home computer with a huge game library and strong sound chip"
      },
      {
        "w": "Amiga",
        "d": "Commodore computer known for graphics, sound and creative software"
      },
      {
        "w": "Apple II",
        "d": "Early personal computer with important educational and game titles"
      },
      {
        "w": "MS-DOS",
        "d": "PC operating environment where many 1980s and 1990s games ran"
      },
      {
        "w": "Windows 95",
        "d": "Platform that accelerated DirectX and mainstream PC gaming"
      },
      {
        "w": "Steam",
        "d": "Valve digital storefront that reshaped PC game distribution"
      },
      {
        "w": "Steam Deck",
        "d": "Valve handheld PC tied to the Steam library"
      },
      {
        "w": "Epic Games Store",
        "d": "Digital storefront competing with Steam through exclusives and giveaways"
      },
      {
        "w": "itch.io",
        "d": "Indie-friendly platform for experimental, small and self-published games"
      },
      {
        "w": "Battle.net",
        "d": "Blizzard online service for multiplayer and digital distribution"
      },
      {
        "w": "PlayStation Network",
        "d": "Sony online infrastructure for purchases, subscriptions and play"
      },
      {
        "w": "Xbox Game Pass",
        "d": "Microsoft subscription library for console, PC and cloud gaming"
      },
      {
        "w": "GeForce Now",
        "d": "Cloud gaming service that streams PC games from remote hardware"
      },
      {
        "w": "Stadia",
        "d": "Google cloud gaming platform remembered as a failed launch"
      },
      {
        "w": "Oculus Quest",
        "d": "Standalone Meta VR platform that made headset gaming more accessible"
      }
    ]
  },
  {
    "name": "video game studios & publishers",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Nintendo",
        "d": "Japanese company behind Mario, Zelda, Pokemon and major consoles"
      },
      {
        "w": "Sega",
        "d": "Japanese company that challenged Nintendo and created Sonic"
      },
      {
        "w": "Atari",
        "d": "Company tied to Pong, arcade culture and the Atari 2600"
      },
      {
        "w": "Namco",
        "d": "Japanese studio behind Pac-Man, Galaga and Tekken"
      },
      {
        "w": "Capcom",
        "d": "Publisher of Street Fighter, Mega Man, Resident Evil and Devil May Cry"
      },
      {
        "w": "Konami",
        "d": "Company behind Metal Gear, Castlevania, Contra and Silent Hill"
      },
      {
        "w": "Square Enix",
        "d": "Japanese publisher of Final Fantasy, Dragon Quest and Kingdom Hearts"
      },
      {
        "w": "Blizzard",
        "d": "Studio behind Warcraft, Diablo, StarCraft and World of Warcraft"
      },
      {
        "w": "Valve",
        "d": "Studio behind Half-Life, Portal, Dota 2 and the Steam platform"
      },
      {
        "w": "id Software",
        "d": "Creators of Doom, Quake and foundational shooter technology"
      },
      {
        "w": "Epic Games",
        "d": "Company behind Unreal, Fortnite and Unreal Engine"
      },
      {
        "w": "Electronic Arts",
        "d": "Major publisher of sports series, The Sims and Battlefield"
      },
      {
        "w": "Ubisoft",
        "d": "French publisher of Assassins Creed, Far Cry and Prince of Persia"
      },
      {
        "w": "Rockstar Games",
        "d": "Studio behind Grand Theft Auto and Red Dead Redemption"
      },
      {
        "w": "FromSoftware",
        "d": "Japanese studio known for Dark Souls, Bloodborne, Sekiro and Elden Ring"
      },
      {
        "w": "BioWare",
        "d": "Studio behind Baldurs Gate, Mass Effect and Dragon Age"
      },
      {
        "w": "Bethesda",
        "d": "Publisher and studio associated with The Elder Scrolls and Fallout"
      },
      {
        "w": "Maxis",
        "d": "Studio behind SimCity and The Sims"
      },
      {
        "w": "Naughty Dog",
        "d": "Studio behind Crash Bandicoot, Uncharted and The Last of Us"
      },
      {
        "w": "Insomniac Games",
        "d": "Studio behind Spyro, Ratchet and Clank and Spider-Man games"
      },
      {
        "w": "Bungie",
        "d": "Studio behind Marathon, Halo and Destiny"
      },
      {
        "w": "Rare",
        "d": "British studio behind GoldenEye, Banjo-Kazooie and Donkey Kong Country"
      },
      {
        "w": "LucasArts",
        "d": "Adventure and Star Wars game studio behind Monkey Island and Grim Fandango"
      },
      {
        "w": "Sierra",
        "d": "Company behind Kings Quest and early graphical adventure games"
      },
      {
        "w": "Origin Systems",
        "d": "Studio behind Ultima and Wing Commander"
      },
      {
        "w": "Westwood",
        "d": "Studio behind Command and Conquer and Dune II"
      },
      {
        "w": "CD Projekt RED",
        "d": "Polish studio behind The Witcher and Cyberpunk 2077"
      },
      {
        "w": "Larian Studios",
        "d": "Belgian studio behind Divinity and Baldurs Gate 3"
      },
      {
        "w": "Mojang",
        "d": "Swedish studio behind Minecraft, later bought by Microsoft"
      },
      {
        "w": "Supergiant Games",
        "d": "Indie studio behind Bastion, Transistor, Pyre and Hades"
      },
      {
        "w": "Telltale Games",
        "d": "Studio known for episodic interactive stories"
      },
      {
        "w": "Riot Games",
        "d": "Company behind League of Legends and Valorant"
      },
      {
        "w": "Tencent Games",
        "d": "Chinese gaming giant with stakes in many major studios"
      },
      {
        "w": "Zynga",
        "d": "Social-game company known for FarmVille and Facebook-era games"
      },
      {
        "w": "Pixonic",
        "d": "Mobile game studio known for War Robots"
      }
    ]
  },
  {
    "name": "game designers & creators",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Shigeru Miyamoto",
        "d": "Nintendo creator of Mario, Zelda and Donkey Kong"
      },
      {
        "w": "Hideo Kojima",
        "d": "Creator of Metal Gear and Death Stranding"
      },
      {
        "w": "John Carmack",
        "d": "Programmer behind Doom and Quake engine technology"
      },
      {
        "w": "John Romero",
        "d": "Designer associated with Doom, Quake and id Softwares early image"
      },
      {
        "w": "Richard Garriott",
        "d": "Creator of Ultima and the Lord British persona"
      },
      {
        "w": "Warren Spector",
        "d": "Designer tied to Deus Ex, System Shock and immersive design"
      },
      {
        "w": "Sid Meier",
        "d": "Creator of Civilization and Pirates"
      },
      {
        "w": "Will Wright",
        "d": "Creator of SimCity, The Sims and Spore"
      },
      {
        "w": "Gabe Newell",
        "d": "Valve cofounder tied to Half-Life, Steam and PC distribution"
      },
      {
        "w": "Roberta Williams",
        "d": "Co-creator of Kings Quest and a key adventure-game figure"
      },
      {
        "w": "Ken Williams",
        "d": "Sierra cofounder and producer of early graphical adventures"
      },
      {
        "w": "Tim Schafer",
        "d": "Designer of Grim Fandango, Psychonauts and comic adventures"
      },
      {
        "w": "Ron Gilbert",
        "d": "Creator of Maniac Mansion and Monkey Island"
      },
      {
        "w": "Jane Jensen",
        "d": "Writer and designer behind Gabriel Knight"
      },
      {
        "w": "Amy Hennig",
        "d": "Writer and creative lead associated with Uncharted"
      },
      {
        "w": "Todd Howard",
        "d": "Producer and director tied to The Elder Scrolls, Fallout and Starfield"
      },
      {
        "w": "Ken Levine",
        "d": "Creator of BioShock and System Shock 2"
      },
      {
        "w": "Hidetaka Miyazaki",
        "d": "FromSoftware director behind Dark Souls and Elden Ring"
      },
      {
        "w": "Peter Molyneux",
        "d": "Designer of Populous, Fable and Black and White"
      },
      {
        "w": "Jonathan Blow",
        "d": "Independent designer behind Braid and The Witness"
      },
      {
        "w": "Edmund McMillen",
        "d": "Indie creator of Super Meat Boy and The Binding of Isaac"
      },
      {
        "w": "Markus Persson",
        "d": "Original creator of Minecraft"
      },
      {
        "w": "Toby Fox",
        "d": "Creator of Undertale and Deltarune"
      },
      {
        "w": "Derek Yu",
        "d": "Creator of Spelunky"
      },
      {
        "w": "Raphael Colantonio",
        "d": "Arkane founder tied to Arx Fatalis, Dishonored and Prey"
      },
      {
        "w": "Yoko Taro",
        "d": "Designer known for Drakengard and NieR"
      },
      {
        "w": "Fumito Ueda",
        "d": "Creator of Ico, Shadow of the Colossus and The Last Guardian"
      },
      {
        "w": "Hironobu Sakaguchi",
        "d": "Creator of Final Fantasy"
      },
      {
        "w": "Yu Suzuki",
        "d": "Designer of Out Run, Virtua Fighter and Shenmue"
      },
      {
        "w": "Toru Iwatani",
        "d": "Creator of Pac-Man"
      },
      {
        "w": "Alexey Pajitnov",
        "d": "Creator of Tetris"
      },
      {
        "w": "Julian Gollop",
        "d": "Designer of X-COM: UFO Defense"
      },
      {
        "w": "David Braben",
        "d": "Co-creator of Elite"
      },
      {
        "w": "Jordan Mechner",
        "d": "Creator of Karateka and Prince of Persia"
      },
      {
        "w": "Neil Druckmann",
        "d": "Creative director associated with The Last of Us and Uncharted 4"
      },
      {
        "w": "Sam Lake",
        "d": "Writer behind Max Payne, Alan Wake and Control"
      },
      {
        "w": "Hideki Kamiya",
        "d": "Designer associated with Resident Evil 2, Devil May Cry and Bayonetta"
      },
      {
        "w": "Shinji Mikami",
        "d": "Creator of Resident Evil and The Evil Within"
      }
    ]
  },
  {
    "name": "game design terms",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Roguelike",
        "d": "Game style with procedural levels, permadeath and roots in Rogue"
      },
      {
        "w": "Battle royale",
        "d": "Last-player-standing multiplayer format on a shrinking map"
      },
      {
        "w": "Soulslike",
        "d": "Games inspired by Dark Souls difficulty, checkpoints and resource risk"
      },
      {
        "w": "Speedrun",
        "d": "Attempt to finish a game as fast as possible"
      },
      {
        "w": "Loot box",
        "d": "Randomized reward container often tied to monetization"
      },
      {
        "w": "PvP",
        "d": "Player-versus-player competition"
      },
      {
        "w": "PvE",
        "d": "Player-versus-environment play against game-controlled challenges"
      },
      {
        "w": "Bullet hell",
        "d": "Shooter style with dense patterns of projectiles"
      },
      {
        "w": "Cooldown",
        "d": "Waiting period before an ability can be used again"
      },
      {
        "w": "Level design",
        "d": "Craft of building spaces, routes, challenges and pacing"
      },
      {
        "w": "Open world",
        "d": "Large explorable game space with freedom of movement"
      },
      {
        "w": "Procedural generation",
        "d": "Algorithmic creation of levels, maps or content"
      },
      {
        "w": "Permadeath",
        "d": "Rule where a character or run ends permanently after death"
      },
      {
        "w": "Skill tree",
        "d": "Branching upgrade structure for abilities"
      },
      {
        "w": "Tech tree",
        "d": "Progression map of technologies or unlocks"
      },
      {
        "w": "Side-scroller",
        "d": "Game viewed from the side while movement runs horizontally"
      },
      {
        "w": "Metagame",
        "d": "Strategies and expectations around the game beyond one match"
      },
      {
        "w": "Sandbox",
        "d": "Game structure that gives players tools and freedom to experiment"
      },
      {
        "w": "Quick time event",
        "d": "Timed button prompt embedded in an action scene"
      },
      {
        "w": "Hitbox",
        "d": "Invisible shape used to determine whether an attack or collision connects"
      },
      {
        "w": "Boss fight",
        "d": "Major battle against a powerful enemy or final challenge"
      },
      {
        "w": "Quest marker",
        "d": "Interface indicator showing where an objective is located"
      },
      {
        "w": "Dialogue tree",
        "d": "Branching conversation structure with player choices"
      },
      {
        "w": "Fog of war",
        "d": "Hidden map information revealed through exploration or scouting"
      },
      {
        "w": "Save point",
        "d": "Designated place or moment where progress can be stored"
      },
      {
        "w": "Checkpoint",
        "d": "Automatic restart point after failure"
      },
      {
        "w": "Respawn",
        "d": "Return of a player, enemy or item after removal"
      },
      {
        "w": "Nerf",
        "d": "Update that weakens an ability, character or strategy"
      },
      {
        "w": "Buff",
        "d": "Update or effect that strengthens an ability or character"
      },
      {
        "w": "Patch",
        "d": "Software update that fixes or changes a game"
      },
      {
        "w": "Modding",
        "d": "Player modification of a game with new content or rules"
      },
      {
        "w": "Crafting",
        "d": "System for making items from gathered ingredients"
      },
      {
        "w": "Grind",
        "d": "Repeated play for resources, experience or rare rewards"
      },
      {
        "w": "Endgame",
        "d": "Activities designed for players after the main progression is complete"
      },
      {
        "w": "Matchmaking",
        "d": "System that places players into games with suitable opponents"
      },
      {
        "w": "Gacha",
        "d": "Random character or item draw system often tied to spending"
      }
    ]
  },
  {
    "name": "scientific revolution",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Heliocentrism",
        "d": "Model placing the Sun rather than Earth at the center of planetary motion"
      },
      {
        "w": "Copernican Revolution",
        "d": "Shift from geocentric astronomy toward a Sun-centered system"
      },
      {
        "w": "Galileo Galilei",
        "d": "Astronomer whose telescope observations supported new cosmology"
      },
      {
        "w": "Keplers laws",
        "d": "Mathematical laws describing elliptical planetary motion"
      },
      {
        "w": "Newtons Principia",
        "d": "Book that unified mechanics and gravitation in mathematical form"
      },
      {
        "w": "Royal Society",
        "d": "English scientific society founded in the seventeenth century"
      },
      {
        "w": "Francis Bacon",
        "d": "Thinker associated with empirical method and organized knowledge"
      },
      {
        "w": "Robert Boyle",
        "d": "Natural philosopher linked to air pressure and experimental chemistry"
      },
      {
        "w": "Robert Hooke",
        "d": "Experimentalist, microscopist and author of Micrographia"
      },
      {
        "w": "Christiaan Huygens",
        "d": "Scientist of pendulums, optics and planetary observation"
      },
      {
        "w": "Tycho Brahe",
        "d": "Astronomer whose precise observations helped Kepler build his laws"
      },
      {
        "w": "Vesalius",
        "d": "Anatomist whose work challenged older medical authority"
      },
      {
        "w": "Telescope",
        "d": "Instrument that transformed astronomy through direct observation"
      },
      {
        "w": "Microscope",
        "d": "Instrument that opened the world of cells and tiny structures"
      },
      {
        "w": "Air pump",
        "d": "Experimental device used to study vacuum and pressure"
      },
      {
        "w": "Barometer",
        "d": "Instrument measuring atmospheric pressure"
      },
      {
        "w": "Experimental method",
        "d": "Knowledge practice built around controlled observation and repeatable tests"
      },
      {
        "w": "Mechanical philosophy",
        "d": "View of nature as matter in motion governed by laws"
      },
      {
        "w": "Natural philosophy",
        "d": "Early modern field that later split into modern sciences"
      },
      {
        "w": "Invisible college",
        "d": "Informal network of experimenters before formal scientific societies"
      },
      {
        "w": "Scientific journal",
        "d": "Periodical form that spread observations, claims and disputes"
      },
      {
        "w": "Mathematization of nature",
        "d": "Use of mathematics to describe physical processes"
      },
      {
        "w": "Elliptical orbit",
        "d": "Planetary path shape central to Keplers astronomy"
      },
      {
        "w": "Anatomical theater",
        "d": "Public or teaching space for dissection and anatomy"
      },
      {
        "w": "Magdeburg hemispheres",
        "d": "Vacuum demonstration showing atmospheric pressure"
      },
      {
        "w": "Philosophical Transactions",
        "d": "Royal Society journal and early scientific periodical"
      },
      {
        "w": "Micrographia",
        "d": "Hookes illustrated book of microscopic observations"
      },
      {
        "w": "Sidereus Nuncius",
        "d": "Galileos report of telescopic discoveries"
      },
      {
        "w": "Dialogue concerning two systems",
        "d": "Galileos comparison of geocentric and heliocentric worldviews"
      },
      {
        "w": "Nova methodus",
        "d": "Mathematical style of the calculus era"
      },
      {
        "w": "Calculus",
        "d": "Mathematical tool developed by Newton and Leibniz"
      },
      {
        "w": "Law of inertia",
        "d": "Principle that motion continues unless acted on by force"
      },
      {
        "w": "Universal gravitation",
        "d": "Newtonian principle connecting falling bodies and planetary motion"
      },
      {
        "w": "Boyles law",
        "d": "Gas law relating pressure and volume"
      },
      {
        "w": "Scientific instrument",
        "d": "Purpose-built device that made observation more precise and public"
      }
    ]
  },
  {
    "name": "industrial revolution",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Spinning jenny",
        "d": "Multi-spindle spinning frame invented by James Hargreaves"
      },
      {
        "w": "Water frame",
        "d": "Water-powered spinning machine associated with Richard Arkwright"
      },
      {
        "w": "Spinning mule",
        "d": "Crompton machine combining features of earlier spinning devices"
      },
      {
        "w": "Power loom",
        "d": "Mechanized loom that transformed textile production"
      },
      {
        "w": "Steam engine",
        "d": "Power source that drove factories, mines and transport"
      },
      {
        "w": "James Watt",
        "d": "Engineer whose improvements made steam engines more efficient"
      },
      {
        "w": "Bessemer process",
        "d": "Industrial method for making steel more cheaply"
      },
      {
        "w": "Coke smelting",
        "d": "Use of coke instead of charcoal in iron production"
      },
      {
        "w": "Puddling",
        "d": "Iron-refining process important before modern steelmaking"
      },
      {
        "w": "Steam hammer",
        "d": "Powerful forging machine used in heavy industry"
      },
      {
        "w": "Railway",
        "d": "Transport system that moved coal, goods and people at new speed"
      },
      {
        "w": "Bridgewater Canal",
        "d": "English canal linked to cheaper coal transport"
      },
      {
        "w": "Factory system",
        "d": "Concentrated production using machines, wage labor and discipline"
      },
      {
        "w": "Textile mill",
        "d": "Factory where spinning and weaving were mechanized"
      },
      {
        "w": "Manchester",
        "d": "Industrial city strongly associated with cotton manufacturing"
      },
      {
        "w": "Lowell mills",
        "d": "American textile mills using planned factory towns and female labor"
      },
      {
        "w": "Cotton gin",
        "d": "Machine that separated cotton fibers from seeds"
      },
      {
        "w": "Interchangeable parts",
        "d": "Standardized components that could be replaced without custom fitting"
      },
      {
        "w": "Assembly line",
        "d": "Sequential production system later central to mass manufacturing"
      },
      {
        "w": "Factory whistle",
        "d": "Signal regulating shifts and industrial time discipline"
      },
      {
        "w": "Shift work",
        "d": "Labor schedule organized around continuous or extended production"
      },
      {
        "w": "Working class",
        "d": "Industrial social group formed around wage labor"
      },
      {
        "w": "Luddite movement",
        "d": "Worker protest movement against machinery and wage pressure"
      },
      {
        "w": "Enclosure",
        "d": "Land reform that changed rural labor and ownership patterns"
      },
      {
        "w": "Iron bridge",
        "d": "Symbol of new iron construction in eighteenth-century Britain"
      },
      {
        "w": "Blast furnace",
        "d": "Industrial furnace for smelting iron ore"
      },
      {
        "w": "Coalfield",
        "d": "Region where coal extraction supplied factories and transport"
      },
      {
        "w": "Mechanization",
        "d": "Replacement or amplification of labor through machines"
      },
      {
        "w": "Urbanization",
        "d": "Growth of industrial cities around factories and transport"
      },
      {
        "w": "Child factory labor",
        "d": "Use of children in mills and mines under harsh conditions"
      },
      {
        "w": "Mill town",
        "d": "Settlement organized around a factory or group of factories"
      },
      {
        "w": "Canal mania",
        "d": "Burst of canal investment before the railway boom"
      },
      {
        "w": "Patent system",
        "d": "Legal framework that encouraged invention and industrial competition"
      },
      {
        "w": "Steam locomotive",
        "d": "Rail vehicle powered by a steam engine"
      },
      {
        "w": "Industrial capitalism",
        "d": "Economic order built around factories, capital investment and wage labor"
      }
    ]
  },
  {
    "name": "transport & urban mobility",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Horse tram",
        "d": "Street railway vehicle pulled by horses before electrification"
      },
      {
        "w": "Electric tram",
        "d": "Urban rail vehicle powered by overhead or street-level electricity"
      },
      {
        "w": "Subway",
        "d": "Underground urban railway for high-capacity city travel"
      },
      {
        "w": "Elevated railway",
        "d": "Urban railway built above streets on a raised structure"
      },
      {
        "w": "Commuter rail",
        "d": "Rail service carrying passengers between suburbs and a central city"
      },
      {
        "w": "Cable car",
        "d": "Vehicle moved by a continuously running cable"
      },
      {
        "w": "Trolleybus",
        "d": "Electric bus drawing power from overhead wires"
      },
      {
        "w": "Light rail",
        "d": "Urban rail mode lighter and more street-integrated than metro systems"
      },
      {
        "w": "Maglev",
        "d": "Train technology using magnetic levitation instead of wheel contact"
      },
      {
        "w": "High-speed rail",
        "d": "Rail service designed for sustained very fast travel"
      },
      {
        "w": "Funicular",
        "d": "Cable railway for steep slopes with counterbalanced cars"
      },
      {
        "w": "Gondola lift",
        "d": "Cable-suspended cabins used in mountains or urban transit"
      },
      {
        "w": "Bus rapid transit",
        "d": "Bus system with dedicated lanes and station-like stops"
      },
      {
        "w": "Park and ride",
        "d": "Facility where drivers transfer to public transport"
      },
      {
        "w": "Bike share",
        "d": "Short-term public bicycle rental network"
      },
      {
        "w": "E-scooter",
        "d": "Small electric scooter used for short urban trips"
      },
      {
        "w": "Ride-hailing",
        "d": "App-based car service connecting riders and drivers"
      },
      {
        "w": "Carsharing",
        "d": "Short-term access to shared cars without owning one"
      },
      {
        "w": "Congestion pricing",
        "d": "Fee system meant to reduce traffic in crowded areas"
      },
      {
        "w": "Low-floor tram",
        "d": "Tram with floor height designed for easier boarding"
      },
      {
        "w": "Transit hub",
        "d": "Place where several transport modes connect"
      },
      {
        "w": "Intermodal transfer",
        "d": "Change between different transport modes during a trip"
      },
      {
        "w": "Roundabout",
        "d": "Circular intersection designed to keep traffic moving"
      },
      {
        "w": "Express bus",
        "d": "Bus route with limited stops for faster travel"
      },
      {
        "w": "Tuk-tuk",
        "d": "Small three-wheeled vehicle common in many Asian cities"
      },
      {
        "w": "Rickshaw",
        "d": "Passenger vehicle pulled, pedaled or motorized in urban service"
      },
      {
        "w": "Water taxi",
        "d": "Small passenger boat used for point-to-point urban travel"
      },
      {
        "w": "Hovercraft",
        "d": "Vehicle riding on a cushion of air over land or water"
      },
      {
        "w": "Ferry",
        "d": "Boat service carrying passengers or vehicles across water"
      },
      {
        "w": "People mover",
        "d": "Automated small-scale transit system for airports or campuses"
      },
      {
        "w": "Mobility as a service",
        "d": "Integrated app-based access to multiple transport options"
      },
      {
        "w": "Last mile",
        "d": "Final short segment of a trip between transit and destination"
      },
      {
        "w": "Traffic calming",
        "d": "Street design that slows vehicles and improves safety"
      },
      {
        "w": "Protected bike lane",
        "d": "Cycling lane separated from motor traffic by barriers or space"
      },
      {
        "w": "Pedestrian zone",
        "d": "Area where walking is prioritized and cars are restricted"
      }
    ]
  },
  {
    "name": "maps, navigation & exploration",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Mercator projection",
        "d": "Map projection preserving angles while enlarging high latitudes"
      },
      {
        "w": "Portolan chart",
        "d": "Medieval nautical chart focused on coastlines and sailing routes"
      },
      {
        "w": "Compass rose",
        "d": "Diagram showing directions on a map or nautical chart"
      },
      {
        "w": "Magnetic declination",
        "d": "Angle between magnetic north and true north"
      },
      {
        "w": "Dead reckoning",
        "d": "Navigation by estimating position from course, speed and time"
      },
      {
        "w": "Marine chronometer",
        "d": "Clock precise enough to calculate longitude at sea"
      },
      {
        "w": "Sextant",
        "d": "Instrument measuring angles between celestial bodies and the horizon"
      },
      {
        "w": "Astrolabe",
        "d": "Historical instrument used for astronomy and navigation"
      },
      {
        "w": "Latitude",
        "d": "North-south position measured in degrees from the equator"
      },
      {
        "w": "Longitude",
        "d": "East-west position measured in degrees from a prime meridian"
      },
      {
        "w": "Prime meridian",
        "d": "Reference line for zero degrees longitude"
      },
      {
        "w": "Rhumb line",
        "d": "Path crossing meridians at a constant angle"
      },
      {
        "w": "Great circle",
        "d": "Shortest route between two points on a sphere"
      },
      {
        "w": "Contour line",
        "d": "Map line connecting points of equal elevation"
      },
      {
        "w": "Topographic map",
        "d": "Map showing terrain, elevation and physical features"
      },
      {
        "w": "Triangulation",
        "d": "Surveying method using triangles to determine positions"
      },
      {
        "w": "Geodesy",
        "d": "Science of measuring Earths shape, gravity field and position"
      },
      {
        "w": "GPS",
        "d": "Satellite navigation system giving position and time"
      },
      {
        "w": "Nautical chart",
        "d": "Map designed for marine navigation"
      },
      {
        "w": "Inset map",
        "d": "Small secondary map placed inside a larger map for detail or context"
      },
      {
        "w": "Map scale",
        "d": "Ratio between distance on a map and distance on the ground"
      },
      {
        "w": "Legend",
        "d": "Map key explaining symbols and colors"
      },
      {
        "w": "Atlas",
        "d": "Collection of maps bound or presented together"
      },
      {
        "w": "Bathymetry",
        "d": "Mapping of underwater depth and seafloor shape"
      },
      {
        "w": "Sounding",
        "d": "Measurement of water depth"
      },
      {
        "w": "Wayfinding",
        "d": "Process of navigating through spaces using signs and cues"
      },
      {
        "w": "Survey marker",
        "d": "Fixed point used as a reference in mapping and surveying"
      },
      {
        "w": "Graticule",
        "d": "Network of latitude and longitude lines"
      },
      {
        "w": "Isoline",
        "d": "Line connecting equal values on a map"
      },
      {
        "w": "Cartographic generalization",
        "d": "Simplifying map detail for scale and readability"
      },
      {
        "w": "Georeferencing",
        "d": "Assigning real-world coordinates to a map or image"
      },
      {
        "w": "Remote sensing",
        "d": "Gathering information from satellites or aircraft"
      },
      {
        "w": "Landsat",
        "d": "Satellite program central to long-term Earth observation"
      },
      {
        "w": "Transit of Venus",
        "d": "Astronomical event once used to estimate solar system scale"
      },
      {
        "w": "Northwest Passage",
        "d": "Sought-after sea route through the Arctic"
      }
    ]
  },
  {
    "name": "book history & printing",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Codex",
        "d": "Book form made of bound pages, replacing the scroll in many uses"
      },
      {
        "w": "Scroll",
        "d": "Long rolled writing support used before bound books became dominant"
      },
      {
        "w": "Incunabulum",
        "d": "Book printed in Europe before 1501"
      },
      {
        "w": "Gutenberg Bible",
        "d": "Early major printed book made with movable type"
      },
      {
        "w": "Movable type",
        "d": "Reusable individual letters or characters used for printing"
      },
      {
        "w": "Type case",
        "d": "Tray holding pieces of metal type for hand composition"
      },
      {
        "w": "Compositor",
        "d": "Worker who arranged type for printing"
      },
      {
        "w": "Printing forme",
        "d": "Locked arrangement of type ready for printing"
      },
      {
        "w": "Folio",
        "d": "Book format made by folding a sheet once"
      },
      {
        "w": "Quarto",
        "d": "Book format made by folding a sheet twice"
      },
      {
        "w": "Octavo",
        "d": "Book format made by folding a sheet three times"
      },
      {
        "w": "Colophon",
        "d": "Publication note often placed at the end of a book"
      },
      {
        "w": "Frontispiece",
        "d": "Illustration facing a title page"
      },
      {
        "w": "Title page",
        "d": "Page giving the books title and publication details"
      },
      {
        "w": "Catchword",
        "d": "Word printed at a page bottom to guide binding order"
      },
      {
        "w": "Signature mark",
        "d": "Mark helping printers and binders arrange gatherings correctly"
      },
      {
        "w": "Gathering",
        "d": "Group of folded leaves nested together in a book"
      },
      {
        "w": "Quire",
        "d": "Set of leaves folded or gathered for binding"
      },
      {
        "w": "Book block",
        "d": "Stack of pages before covers are attached"
      },
      {
        "w": "Sewn binding",
        "d": "Binding method using thread through folded gatherings"
      },
      {
        "w": "Vellum",
        "d": "Fine prepared animal skin used for manuscripts"
      },
      {
        "w": "Parchment",
        "d": "Prepared animal skin used as a writing material"
      },
      {
        "w": "Palimpsest",
        "d": "Manuscript page reused after earlier writing was scraped or washed off"
      },
      {
        "w": "Illuminated manuscript",
        "d": "Handwritten book decorated with color, gold or elaborate initials"
      },
      {
        "w": "Scriptorium",
        "d": "Writing room where manuscripts were copied"
      },
      {
        "w": "Woodblock printing",
        "d": "Printing from carved wooden blocks"
      },
      {
        "w": "Lithography",
        "d": "Printing process based on oil and water repulsion on a flat surface"
      },
      {
        "w": "Letterpress",
        "d": "Relief printing from raised type or plates"
      },
      {
        "w": "Linotype",
        "d": "Machine that cast whole lines of metal type"
      },
      {
        "w": "Offset printing",
        "d": "Printing method transferring ink from plate to rubber blanket to paper"
      },
      {
        "w": "Dust jacket",
        "d": "Paper cover wrapped around a hardback book"
      },
      {
        "w": "ISBN",
        "d": "International identifier assigned to a book edition"
      },
      {
        "w": "Copyright page",
        "d": "Page listing rights, edition and publication metadata"
      },
      {
        "w": "Errata slip",
        "d": "Inserted list correcting mistakes after printing"
      },
      {
        "w": "Marginalia",
        "d": "Notes written in the margins of a book"
      }
    ]
  },
  {
    "name": "reformation & religious wars",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Martin Luther",
        "d": "German reformer whose theses challenged indulgences and church authority"
      },
      {
        "w": "John Calvin",
        "d": "Reformer associated with Geneva and predestination"
      },
      {
        "w": "Huldrych Zwingli",
        "d": "Swiss reformer active in Zurich"
      },
      {
        "w": "Indulgences",
        "d": "Church remissions whose sale helped trigger reform protest"
      },
      {
        "w": "Ninety-five Theses",
        "d": "Luthers 1517 critique of indulgence practices"
      },
      {
        "w": "Diet of Worms",
        "d": "Imperial assembly where Luther refused to recant"
      },
      {
        "w": "Sola scriptura",
        "d": "Doctrine that scripture alone is the highest religious authority"
      },
      {
        "w": "Sola fide",
        "d": "Doctrine of justification by faith alone"
      },
      {
        "w": "Protestantism",
        "d": "Broad movement of churches breaking with Roman Catholic authority"
      },
      {
        "w": "Counter-Reformation",
        "d": "Catholic reform and renewal in response to Protestantism"
      },
      {
        "w": "Council of Trent",
        "d": "Catholic council defining doctrine and reform from 1545 to 1563"
      },
      {
        "w": "Jesuits",
        "d": "Catholic order central to education, missions and Counter-Reformation work"
      },
      {
        "w": "Huguenots",
        "d": "French Protestants often caught in religious conflict"
      },
      {
        "w": "Edict of Nantes",
        "d": "French decree granting limited rights to Huguenots"
      },
      {
        "w": "St Bartholomews Day massacre",
        "d": "Mass killing of Huguenots in France in 1572"
      },
      {
        "w": "Thirty Years War",
        "d": "Devastating Central European conflict tied to religion and power politics"
      },
      {
        "w": "Peace of Augsburg",
        "d": "Settlement allowing rulers in the empire to choose Lutheranism or Catholicism"
      },
      {
        "w": "Peace of Westphalia",
        "d": "Treaties ending the Thirty Years War and reshaping European politics"
      },
      {
        "w": "Anabaptists",
        "d": "Radical reform movement emphasizing adult baptism"
      },
      {
        "w": "Munster Rebellion",
        "d": "Anabaptist takeover and siege in a German city"
      },
      {
        "w": "Anglicanism",
        "d": "English church tradition formed through royal and parliamentary reform"
      },
      {
        "w": "Act of Supremacy",
        "d": "English law making the monarch head of the Church of England"
      },
      {
        "w": "Book of Common Prayer",
        "d": "Central prayer book of English Protestant worship"
      },
      {
        "w": "Puritans",
        "d": "English Protestants seeking further reform of church practice"
      },
      {
        "w": "Genevan Consistory",
        "d": "Church court enforcing moral discipline in Calvinist Geneva"
      },
      {
        "w": "Schmalkaldic League",
        "d": "Alliance of Lutheran princes in the Holy Roman Empire"
      },
      {
        "w": "Iconoclasm",
        "d": "Destruction or rejection of religious images"
      },
      {
        "w": "Catechism",
        "d": "Instructional summary of doctrine in question-and-answer form"
      },
      {
        "w": "Predestination",
        "d": "Doctrine that salvation is determined by divine choice"
      },
      {
        "w": "Confessionalization",
        "d": "Formation of disciplined religious identities and institutions"
      },
      {
        "w": "Confessional peace",
        "d": "Settlement allowing coexistence between rival Christian confessions"
      },
      {
        "w": "Bohemian Revolt",
        "d": "Uprising that helped ignite the Thirty Years War"
      },
      {
        "w": "Defenestration of Prague",
        "d": "Throwing officials from a window, triggering Bohemian revolt"
      },
      {
        "w": "Augsburg Confession",
        "d": "Foundational statement of Lutheran belief"
      },
      {
        "w": "Wars of Religion",
        "d": "Series of conflicts in France between Catholics and Huguenots"
      }
    ]
  },
  {
    "name": "baroque & rococo",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Bernini",
        "d": "Sculptor and architect who shaped Roman Baroque spectacle"
      },
      {
        "w": "Borromini",
        "d": "Roman Baroque architect known for inventive curves and geometry"
      },
      {
        "w": "Caravaggism",
        "d": "Baroque painting current shaped by dramatic realism and sharp light"
      },
      {
        "w": "Rubens",
        "d": "Flemish painter of dynamic figures, color and courtly grandeur"
      },
      {
        "w": "Velazquez",
        "d": "Spanish court painter of Las Meninas and royal portraits"
      },
      {
        "w": "Rembrandt",
        "d": "Dutch painter known for psychological depth and light"
      },
      {
        "w": "Versailles",
        "d": "Royal palace that embodied French absolutist display"
      },
      {
        "w": "Louis XIV",
        "d": "French monarch whose court culture shaped Baroque politics"
      },
      {
        "w": "Versailles gardens",
        "d": "Formal landscape of axes, parterres and royal spectacle"
      },
      {
        "w": "Chiaroscuro",
        "d": "Strong contrast of light and dark used for volume and drama"
      },
      {
        "w": "Tenebrism",
        "d": "Extreme dark-light contrast associated with Caravaggesque painting"
      },
      {
        "w": "Trompe l oeil",
        "d": "Illusionistic painting that tricks the eye"
      },
      {
        "w": "Quadratura",
        "d": "Ceiling painting that extends architecture into illusionistic space"
      },
      {
        "w": "Bel composto",
        "d": "Baroque unity of architecture, sculpture and painting"
      },
      {
        "w": "Absolutist spectacle",
        "d": "Artistic staging of royal power and hierarchy"
      },
      {
        "w": "Counter-Reformation art",
        "d": "Catholic art designed for persuasion, emotion and doctrine"
      },
      {
        "w": "Cabinet of curiosities",
        "d": "Collection of rare objects, specimens and marvels"
      },
      {
        "w": "Rocaille",
        "d": "Shell-like ornament central to Rococo decoration"
      },
      {
        "w": "Watteau",
        "d": "Painter of elegant outdoor entertainments called fetes galantes"
      },
      {
        "w": "Fragonard",
        "d": "Rococo painter of playful erotic and aristocratic scenes"
      },
      {
        "w": "Boucher",
        "d": "French Rococo painter favored by court patrons"
      },
      {
        "w": "Meissen porcelain",
        "d": "Early European hard-paste porcelain associated with luxury display"
      },
      {
        "w": "Fete galante",
        "d": "Rococo scene of refined leisure and flirtation"
      },
      {
        "w": "Pastoral idyll",
        "d": "Idealized rural scene used in courtly art"
      },
      {
        "w": "Grand manner",
        "d": "Elevated style of painting for noble or historical subjects"
      },
      {
        "w": "Ceiling fresco",
        "d": "Large painted ceiling opening space to drama or heaven"
      },
      {
        "w": "Oval salon",
        "d": "Curved room form favored in Rococo interiors"
      },
      {
        "w": "Salon culture",
        "d": "Aristocratic and literary social world of conversation and taste"
      },
      {
        "w": "Rameau",
        "d": "French composer associated with late Baroque opera and theory"
      },
      {
        "w": "Basso continuo",
        "d": "Continuous bass accompaniment central to Baroque music"
      },
      {
        "w": "Tiepolo",
        "d": "Painter of luminous frescoes and grand decorative cycles"
      },
      {
        "w": "Guarini",
        "d": "Baroque architect known for complex domes and geometry"
      },
      {
        "w": "Zwinger Palace",
        "d": "Dresden palace complex associated with Baroque display"
      },
      {
        "w": "Rococo asymmetry",
        "d": "Decorative preference for playful irregular curves and shells"
      },
      {
        "w": "Theater machinery",
        "d": "Stage technology used for dramatic Baroque spectacle"
      }
    ]
  },
  {
    "name": "history of photography",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Camera obscura",
        "d": "Optical device projecting an outside scene into a darkened space"
      },
      {
        "w": "Daguerreotype",
        "d": "Early photographic process producing a unique image on metal"
      },
      {
        "w": "Calotype",
        "d": "Talbot process using paper negatives to make multiple prints"
      },
      {
        "w": "Wet collodion",
        "d": "Nineteenth-century process requiring plates prepared and developed while wet"
      },
      {
        "w": "Dry plate",
        "d": "Glass negative technology easier to store and use than wet plates"
      },
      {
        "w": "Gelatin silver print",
        "d": "Dominant black-and-white photographic print process"
      },
      {
        "w": "Glass negative",
        "d": "Transparent plate negative used before flexible film became dominant"
      },
      {
        "w": "Contact print",
        "d": "Print made by placing negative directly against photographic paper"
      },
      {
        "w": "Albumen print",
        "d": "Photographic print process using egg white binder"
      },
      {
        "w": "Carte de visite",
        "d": "Small photographic portrait format popular in the nineteenth century"
      },
      {
        "w": "Tintype",
        "d": "Direct positive photograph made on a thin metal sheet"
      },
      {
        "w": "Brownie camera",
        "d": "Kodak camera that made snapshot photography cheap and popular"
      },
      {
        "w": "Leica",
        "d": "Compact 35 mm camera important to photojournalism and street photography"
      },
      {
        "w": "Kodak",
        "d": "Company that popularized roll film and consumer photography"
      },
      {
        "w": "Polaroid",
        "d": "Instant photography system producing prints without separate processing"
      },
      {
        "w": "Instant photo",
        "d": "Photograph developed inside the camera or film pack"
      },
      {
        "w": "Autochrome",
        "d": "Early color photography process using dyed starch grains"
      },
      {
        "w": "Color slide",
        "d": "Positive transparency meant for projection or viewing"
      },
      {
        "w": "Photojournalism",
        "d": "Use of photography to report news and public events"
      },
      {
        "w": "Magnum Photos",
        "d": "Photographer-owned agency founded after World War II"
      },
      {
        "w": "Robert Capa",
        "d": "War photographer and cofounder of Magnum Photos"
      },
      {
        "w": "Dorothea Lange",
        "d": "Documentary photographer of Depression-era America"
      },
      {
        "w": "Ansel Adams",
        "d": "Landscape photographer known for the zone system and Western views"
      },
      {
        "w": "Eadweard Muybridge",
        "d": "Photographer whose motion studies prefigured cinema"
      },
      {
        "w": "Nadar",
        "d": "French portraitist and aerial photography pioneer"
      },
      {
        "w": "Mathew Brady",
        "d": "Photographer associated with the American Civil War"
      },
      {
        "w": "Straight photography",
        "d": "Modernist approach emphasizing sharp detail and camera qualities"
      },
      {
        "w": "Pictorialism",
        "d": "Photography movement imitating painterly softness and atmosphere"
      },
      {
        "w": "Zone system",
        "d": "Exposure and development method associated with Ansel Adams"
      },
      {
        "w": "Depth of field",
        "d": "Range of distance that appears acceptably sharp"
      },
      {
        "w": "Shutter speed",
        "d": "Length of time the camera sensor or film is exposed"
      },
      {
        "w": "Aperture",
        "d": "Lens opening controlling light and depth of field"
      },
      {
        "w": "Contact sheet",
        "d": "Sheet showing many small frames from a roll of film"
      },
      {
        "w": "Street photography",
        "d": "Unposed photography of public urban life"
      },
      {
        "w": "Cindy Sherman",
        "d": "Artist known for staged photographic self-portraits"
      }
    ]
  },
  {
    "name": "film production & movie technology",
    "tags": {
      "a": "human",
      "b": "movies",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Cinematograph",
        "d": "Lumiere device combining camera, printer and projector"
      },
      {
        "w": "Storyboard",
        "d": "Sequence of drawings planning shots before filming"
      },
      {
        "w": "Shooting script",
        "d": "Script version prepared for production with scene details"
      },
      {
        "w": "Call sheet",
        "d": "Daily production document listing schedule, cast and locations"
      },
      {
        "w": "Clapperboard",
        "d": "Slate used to sync picture and sound at the start of a take"
      },
      {
        "w": "Crane shot",
        "d": "Camera shot made from a rising or moving crane"
      },
      {
        "w": "Dolly shot",
        "d": "Camera movement on a wheeled platform or track"
      },
      {
        "w": "Tracking shot",
        "d": "Shot in which the camera moves through space with the action"
      },
      {
        "w": "Steadicam",
        "d": "Stabilizing rig allowing smooth handheld camera movement"
      },
      {
        "w": "Matte painting",
        "d": "Painted or digital background used to extend a scene"
      },
      {
        "w": "Practical effect",
        "d": "Physical effect made on set rather than only in postproduction"
      },
      {
        "w": "Visual effects",
        "d": "Imagery created or altered after filming"
      },
      {
        "w": "Motion capture",
        "d": "Recording human movement to animate digital characters"
      },
      {
        "w": "Green screen",
        "d": "Colored background removed and replaced in compositing"
      },
      {
        "w": "Blue screen",
        "d": "Older or alternative chroma-key background for compositing"
      },
      {
        "w": "Rear projection",
        "d": "Technique projecting background footage behind actors"
      },
      {
        "w": "Three-point lighting",
        "d": "Lighting setup using key, fill and back lights"
      },
      {
        "w": "Key light",
        "d": "Main light source defining the subject"
      },
      {
        "w": "Fill light",
        "d": "Light used to soften shadows from the key light"
      },
      {
        "w": "Gaffer",
        "d": "Chief lighting technician on a film set"
      },
      {
        "w": "Grip",
        "d": "Crew member handling rigging, supports and camera movement equipment"
      },
      {
        "w": "Cinematographer",
        "d": "Director of photography responsible for the image"
      },
      {
        "w": "Focus puller",
        "d": "Camera assistant who keeps the subject sharply focused"
      },
      {
        "w": "Color grading",
        "d": "Postproduction adjustment of color, contrast and mood"
      },
      {
        "w": "Sound mix",
        "d": "Balancing dialogue, effects and music for the final soundtrack"
      },
      {
        "w": "ADR",
        "d": "Postproduction rerecording of dialogue"
      },
      {
        "w": "Foley",
        "d": "Custom performance and recording of everyday sound effects"
      },
      {
        "w": "Continuity",
        "d": "Consistency of details across shots and scenes"
      },
      {
        "w": "Jump cut",
        "d": "Edit that creates a visible leap within continuous action"
      },
      {
        "w": "Match cut",
        "d": "Edit linking shots through similar shape, motion or meaning"
      },
      {
        "w": "Parallel editing",
        "d": "Cutting between simultaneous lines of action"
      },
      {
        "w": "Montage",
        "d": "Editing sequence compressing time or building meaning through images"
      },
      {
        "w": "Aspect ratio",
        "d": "Proportional relationship between image width and height"
      },
      {
        "w": "Anamorphic lens",
        "d": "Lens system squeezing wide image onto standard frame"
      },
      {
        "w": "Digital cinema package",
        "d": "Standard digital file bundle for theatrical projection"
      }
    ]
  },
  {
    "name": "cities, infrastructure & urbanism",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Zoning",
        "d": "Legal control over land use and building types"
      },
      {
        "w": "Mixed-use development",
        "d": "Project combining housing, shops, offices or services"
      },
      {
        "w": "Transit-oriented development",
        "d": "Dense planning around public transport stops"
      },
      {
        "w": "Urban sprawl",
        "d": "Low-density expansion of a city into surrounding land"
      },
      {
        "w": "Green belt",
        "d": "Protected ring of open land limiting urban growth"
      },
      {
        "w": "Density",
        "d": "Number of people, homes or floor area in a given urban space"
      },
      {
        "w": "Floor area ratio",
        "d": "Measure comparing building floor area with plot size"
      },
      {
        "w": "Superblock",
        "d": "Large urban block that limits through traffic inside it"
      },
      {
        "w": "Cul-de-sac",
        "d": "Dead-end street with only one vehicle access point"
      },
      {
        "w": "Complete street",
        "d": "Street designed for pedestrians, cyclists, transit and cars"
      },
      {
        "w": "Road diet",
        "d": "Reduction of car lanes to calm traffic or add other uses"
      },
      {
        "w": "School street",
        "d": "Street restricted near a school to improve safety and walking"
      },
      {
        "w": "Raised crosswalk",
        "d": "Pedestrian crossing lifted to sidewalk level"
      },
      {
        "w": "Bollard",
        "d": "Short post controlling or blocking vehicle access"
      },
      {
        "w": "Bus lane",
        "d": "Traffic lane reserved for buses"
      },
      {
        "w": "Cycle track",
        "d": "Separated cycling path built as part of street infrastructure"
      },
      {
        "w": "Mobility hub",
        "d": "Urban node combining transit, bikes, scooters or shared vehicles"
      },
      {
        "w": "Parklet",
        "d": "Small public seating area converted from curbside parking"
      },
      {
        "w": "Tactical urbanism",
        "d": "Low-cost temporary interventions to test urban change"
      },
      {
        "w": "Placemaking",
        "d": "Design and programming that makes public spaces more usable"
      },
      {
        "w": "Public realm",
        "d": "Streets, squares and spaces shared by the public"
      },
      {
        "w": "Storm drain",
        "d": "Drainage system carrying rainwater away from streets"
      },
      {
        "w": "Water main",
        "d": "Large pipe distributing treated water"
      },
      {
        "w": "Sewer system",
        "d": "Network carrying wastewater away from buildings"
      },
      {
        "w": "District heating",
        "d": "Centralized heat supply distributed through pipes"
      },
      {
        "w": "Substation",
        "d": "Electrical facility transforming voltage for distribution"
      },
      {
        "w": "Landfill",
        "d": "Engineered site for disposing of waste"
      },
      {
        "w": "Recycling center",
        "d": "Facility sorting or processing recyclable materials"
      },
      {
        "w": "Wastewater plant",
        "d": "Facility treating sewage before release or reuse"
      },
      {
        "w": "Parking minimums",
        "d": "Rules requiring a set amount of off-street parking"
      },
      {
        "w": "Congestion charge",
        "d": "Fee for driving into crowded urban zones"
      },
      {
        "w": "Car-free center",
        "d": "Urban area where private cars are restricted or banned"
      },
      {
        "w": "Livable street",
        "d": "Street designed for safety, access and everyday social life"
      },
      {
        "w": "Fifteen-minute city",
        "d": "Planning idea where daily needs are close to home"
      },
      {
        "w": "Urban heat island",
        "d": "City warming effect caused by surfaces, density and low vegetation"
      }
    ]
  },
  {
    "name": "advertising & PR",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Brand strategy",
        "d": "Long-term plan for how a brand should be perceived"
      },
      {
        "w": "Target audience",
        "d": "Specific group a campaign is designed to reach"
      },
      {
        "w": "Focus group",
        "d": "Small moderated group used to test reactions and ideas"
      },
      {
        "w": "Brand awareness",
        "d": "Measure of how many people recognize or recall a brand"
      },
      {
        "w": "Positioning",
        "d": "Place a brand or product tries to occupy in consumers minds"
      },
      {
        "w": "Slogan",
        "d": "Short memorable phrase attached to a campaign or brand"
      },
      {
        "w": "Jingle",
        "d": "Short musical phrase used in advertising"
      },
      {
        "w": "Logo",
        "d": "Graphic mark representing a brand or organization"
      },
      {
        "w": "Tagline",
        "d": "Brief line expressing a brands promise or personality"
      },
      {
        "w": "Creative brief",
        "d": "Document defining goals, audience, message and constraints"
      },
      {
        "w": "Media buying",
        "d": "Purchasing advertising space or time across channels"
      },
      {
        "w": "Product placement",
        "d": "Paid or arranged appearance of a product inside media content"
      },
      {
        "w": "Influencer marketing",
        "d": "Promotion through people with online audiences"
      },
      {
        "w": "Brand ambassador",
        "d": "Person who publicly represents and promotes a brand"
      },
      {
        "w": "Press release",
        "d": "Official text sent to journalists with news or announcements"
      },
      {
        "w": "Media kit",
        "d": "Package of facts, images and background for journalists"
      },
      {
        "w": "Crisis communications",
        "d": "Messaging used when an organization faces public trouble"
      },
      {
        "w": "Spin doctor",
        "d": "Advisor who frames events to influence public interpretation"
      },
      {
        "w": "Earned media",
        "d": "Coverage gained through publicity rather than paid placement"
      },
      {
        "w": "Owned media",
        "d": "Channels controlled by a brand, such as its site or newsletter"
      },
      {
        "w": "Paid media",
        "d": "Exposure bought through advertising placements"
      },
      {
        "w": "Call to action",
        "d": "Prompt telling an audience what to do next"
      },
      {
        "w": "Conversion funnel",
        "d": "Model of steps from awareness to purchase or action"
      },
      {
        "w": "A/B test",
        "d": "Experiment comparing two message or design variants"
      },
      {
        "w": "Click-through rate",
        "d": "Share of viewers who click an ad or link"
      },
      {
        "w": "Impressions",
        "d": "Number of times an ad or item is displayed"
      },
      {
        "w": "Reach",
        "d": "Number of distinct people exposed to a message"
      },
      {
        "w": "Frequency",
        "d": "Average number of exposures per person"
      },
      {
        "w": "GRP",
        "d": "Gross rating points used to summarize campaign weight"
      },
      {
        "w": "Teaser campaign",
        "d": "Campaign that hints before revealing the full product or message"
      },
      {
        "w": "Guerrilla marketing",
        "d": "Unconventional low-cost promotion in public or unexpected spaces"
      },
      {
        "w": "Viral video",
        "d": "Video designed or lucky enough to spread rapidly online"
      },
      {
        "w": "Rebranding",
        "d": "Changing the name, identity or perception of a brand"
      },
      {
        "w": "Reputation management",
        "d": "Work to shape public trust and response to criticism"
      },
      {
        "w": "Tone of voice",
        "d": "Consistent style and personality of brand communication"
      }
    ]
  },
  {
    "name": "technological disasters & accidents",
    "tags": {
      "a": "geek",
      "b": "tech",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Chernobyl reactor 4",
        "d": "Reactor unit whose explosion caused the 1986 nuclear disaster"
      },
      {
        "w": "Fukushima Daiichi",
        "d": "Japanese nuclear accident triggered by earthquake and tsunami in 2011"
      },
      {
        "w": "Three Mile Island",
        "d": "Partial nuclear meltdown in Pennsylvania in 1979"
      },
      {
        "w": "Kyshtym disaster",
        "d": "Soviet nuclear waste accident in the Urals in 1957"
      },
      {
        "w": "Windscale fire",
        "d": "British nuclear reactor fire in 1957"
      },
      {
        "w": "Bhopal",
        "d": "Industrial gas leak in India involving Union Carbide in 1984"
      },
      {
        "w": "Seveso",
        "d": "Italian chemical accident that gave its name to EU safety rules"
      },
      {
        "w": "Minamata disease",
        "d": "Mercury poisoning disaster linked to industrial discharge in Japan"
      },
      {
        "w": "Sayano-Shushenskaya",
        "d": "Russian hydroelectric plant accident in 2009"
      },
      {
        "w": "Kursk submarine",
        "d": "Russian submarine disaster in the Barents Sea in 2000"
      },
      {
        "w": "Apollo 1",
        "d": "Launch-pad fire that killed three astronauts during a ground test"
      },
      {
        "w": "Soyuz 11",
        "d": "Spaceflight disaster after cabin depressurization on reentry"
      },
      {
        "w": "Hindenburg",
        "d": "Airship fire that ended the era of passenger zeppelins"
      },
      {
        "w": "Lac-Megantic",
        "d": "Runaway oil train explosion in Quebec in 2013"
      },
      {
        "w": "Beirut explosion",
        "d": "Ammonium nitrate blast at the port of Beirut in 2020"
      },
      {
        "w": "Rana Plaza",
        "d": "Factory collapse in Bangladesh tied to garment supply chains"
      },
      {
        "w": "Baia Mare spill",
        "d": "Cyanide spill from gold mining that polluted rivers in 2000"
      },
      {
        "w": "Sandoz spill",
        "d": "Chemical warehouse fire that polluted the Rhine in 1986"
      },
      {
        "w": "Buncefield fire",
        "d": "Oil storage explosion in England in 2005"
      },
      {
        "w": "Flixborough",
        "d": "British chemical plant explosion in 1974"
      },
      {
        "w": "Tenerife airport disaster",
        "d": "Runway collision of two Boeing 747 aircraft in 1977"
      },
      {
        "w": "Hyatt Regency walkway",
        "d": "Kansas City hotel walkway collapse in 1981"
      },
      {
        "w": "Deepwater Horizon",
        "d": "Offshore drilling disaster and oil spill in the Gulf of Mexico"
      },
      {
        "w": "Exxon Valdez",
        "d": "Oil tanker spill off Alaska in 1989"
      },
      {
        "w": "Piper Alpha",
        "d": "North Sea oil platform disaster in 1988"
      },
      {
        "w": "Texas City refinery",
        "d": "Refinery explosion in 2005 after safety failures"
      },
      {
        "w": "Space Shuttle Challenger",
        "d": "Shuttle breakup after launch in 1986"
      },
      {
        "w": "Space Shuttle Columbia",
        "d": "Shuttle breakup during reentry in 2003"
      },
      {
        "w": "Herald of Free Enterprise",
        "d": "Ferry capsizing after sailing with bow doors open"
      },
      {
        "w": "Eschede disaster",
        "d": "High-speed train derailment in Germany in 1998"
      },
      {
        "w": "AZF Toulouse",
        "d": "Fertilizer plant explosion in France in 2001"
      },
      {
        "w": "Love Canal",
        "d": "Toxic waste neighborhood scandal in New York State"
      },
      {
        "w": "Banqiao Dam",
        "d": "Chinese dam failure after Typhoon Nina in 1975"
      },
      {
        "w": "Vajont Dam",
        "d": "Italian reservoir disaster caused by a landslide wave"
      },
      {
        "w": "Aberfan disaster",
        "d": "Welsh coal-tip collapse that buried a school and village homes"
      }
    ]
  },
  {
    "name": "libraries, bookcraft & binding",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Library of Congress",
        "d": "Largest library in the United States and a national research institution"
      },
      {
        "w": "Library of Alexandria",
        "d": "Ancient library that became a symbol of lost knowledge"
      },
      {
        "w": "British Library",
        "d": "National library of the United Kingdom"
      },
      {
        "w": "Bodleian Library",
        "d": "Historic Oxford library with major manuscript holdings"
      },
      {
        "w": "Vatican Library",
        "d": "Papal library preserving manuscripts, archives and rare books"
      },
      {
        "w": "Bibliotheque nationale",
        "d": "National library of France"
      },
      {
        "w": "New York Public Library",
        "d": "Major public research library known for its main reading room"
      },
      {
        "w": "Celsus Library",
        "d": "Ancient Roman library facade preserved at Ephesus"
      },
      {
        "w": "Ashurbanipal library",
        "d": "Ancient Assyrian collection of cuneiform tablets"
      },
      {
        "w": "St Catherine monastery library",
        "d": "Sinai monastery library with major manuscript holdings"
      },
      {
        "w": "Library card",
        "d": "User credential allowing borrowing or access"
      },
      {
        "w": "Call number",
        "d": "Shelf code locating a book within a classification system"
      },
      {
        "w": "Dewey Decimal",
        "d": "Library classification system using numbered subject classes"
      },
      {
        "w": "Library of Congress Classification",
        "d": "Subject classification system common in academic libraries"
      },
      {
        "w": "Catalog record",
        "d": "Bibliographic description used to find and identify an item"
      },
      {
        "w": "Interlibrary loan",
        "d": "Service borrowing material from another library for a user"
      },
      {
        "w": "Reading room",
        "d": "Supervised space for consulting books, manuscripts or archives"
      },
      {
        "w": "Rare book room",
        "d": "Controlled library space for valuable or fragile printed works"
      },
      {
        "w": "Reference desk",
        "d": "Service point for research help and information questions"
      },
      {
        "w": "Archive",
        "d": "Institution or collection preserving records and documents"
      },
      {
        "w": "Stacks",
        "d": "Shelving area where library books are stored"
      },
      {
        "w": "Closed stacks",
        "d": "Storage area where staff retrieve books for readers"
      },
      {
        "w": "Legal deposit",
        "d": "Requirement to submit copies of publications to designated libraries"
      },
      {
        "w": "Accession number",
        "d": "Unique number assigned when an item enters a collection"
      },
      {
        "w": "Provenance",
        "d": "Ownership and custody history of a book or object"
      },
      {
        "w": "Ex libris",
        "d": "Bookplate or mark showing ownership"
      },
      {
        "w": "Spine",
        "d": "Bound edge of a book visible on a shelf"
      },
      {
        "w": "Cover board",
        "d": "Rigid board forming the front or back of a hard cover"
      },
      {
        "w": "Endpaper",
        "d": "Paper sheet connecting book block and cover"
      },
      {
        "w": "Headband",
        "d": "Small decorative or strengthening band at the top of a spine"
      },
      {
        "w": "Flyleaf",
        "d": "Blank leaf near the front or back of a book"
      },
      {
        "w": "Book clasp",
        "d": "Fastener used to keep a manuscript or binding closed"
      },
      {
        "w": "Fore-edge",
        "d": "Outer edge of the pages opposite the spine"
      },
      {
        "w": "Conservation box",
        "d": "Protective container made for storing fragile books"
      },
      {
        "w": "Book cradle",
        "d": "Support used to hold a fragile book open safely"
      }
    ]
  },
  {
    "name": "futures & utopian projects",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Utopia",
        "d": "Thomas Mores imagined island society and source of the genre name"
      },
      {
        "w": "New Atlantis",
        "d": "Francis Bacons vision of a society organized around knowledge"
      },
      {
        "w": "City of the Sun",
        "d": "Campanellas philosophical utopia ruled by reason and shared life"
      },
      {
        "w": "Looking Backward",
        "d": "Bellamy novel imagining a cooperative future America"
      },
      {
        "w": "News from Nowhere",
        "d": "William Morris socialist utopia of craft and communal life"
      },
      {
        "w": "Icarie",
        "d": "Utopian socialist community imagined by Etienne Cabet"
      },
      {
        "w": "Phalanstery",
        "d": "Fourierist communal building for cooperative living and labor"
      },
      {
        "w": "Brook Farm",
        "d": "American communal experiment inspired by reform ideals"
      },
      {
        "w": "Oneida Community",
        "d": "Nineteenth-century American utopian religious community"
      },
      {
        "w": "Garden City",
        "d": "Ebenezer Howards planned city combining town and country"
      },
      {
        "w": "Radiant City",
        "d": "Le Corbusiers modernist vision of towers, order and open space"
      },
      {
        "w": "Broadacre City",
        "d": "Frank Lloyd Wrights decentralized car-based urban vision"
      },
      {
        "w": "Linear City",
        "d": "Urban concept organized along a long infrastructure axis"
      },
      {
        "w": "New Babylon",
        "d": "Constant Nieuwenhuys vision of nomadic creative urban life"
      },
      {
        "w": "Project Cybersyn",
        "d": "Chilean cybernetic planning experiment under Allende"
      },
      {
        "w": "Technocracy movement",
        "d": "Movement imagining rule by engineers and technical experts"
      },
      {
        "w": "Whole Earth Catalog",
        "d": "Counterculture publication linking tools, systems and alternative futures"
      },
      {
        "w": "Buckminster Fuller",
        "d": "Designer of geodesic domes and whole-systems future thinking"
      },
      {
        "w": "Arcology",
        "d": "Fusion of architecture and ecology in dense self-contained structures"
      },
      {
        "w": "O Neill cylinder",
        "d": "Rotating space habitat concept for artificial gravity"
      },
      {
        "w": "Generation ship",
        "d": "Starship designed for a voyage lasting many human generations"
      },
      {
        "w": "Terraforming Mars",
        "d": "Concept of transforming Mars into a more Earth-like environment"
      },
      {
        "w": "Undersea city",
        "d": "Future settlement imagined beneath the ocean surface"
      },
      {
        "w": "Post-scarcity",
        "d": "Imagined economy where basic material goods are abundant"
      },
      {
        "w": "Universal basic income",
        "d": "Policy idea of regular cash payments to all citizens"
      },
      {
        "w": "Four-day week",
        "d": "Work-time reform imagining shorter labor without lost productivity"
      },
      {
        "w": "Automated luxury communism",
        "d": "Political slogan for abundance through automation"
      },
      {
        "w": "Solarpunk",
        "d": "Optimistic ecological future aesthetic and fiction mode"
      },
      {
        "w": "Cybernetic society",
        "d": "Future image built around feedback, computation and governance"
      },
      {
        "w": "Smart city",
        "d": "Urban future model using sensors, data and networked services"
      },
      {
        "w": "Seasteading",
        "d": "Proposal for autonomous communities built on floating ocean platforms"
      },
      {
        "w": "Vertical farm",
        "d": "Indoor stacked agriculture imagined for dense cities"
      },
      {
        "w": "Lab-grown meat",
        "d": "Cultured meat proposed as a future food system"
      },
      {
        "w": "Fusion power",
        "d": "Long-promised energy source based on nuclear fusion"
      },
      {
        "w": "World government",
        "d": "Political dream of a unified global authority"
      }
    ]
  },
  {
    "name": "mafias, cartels & crime syndicates",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Cosa Nostra",
        "d": "Sicilian mafia network with ritual membership and family structures"
      },
      {
        "w": "Ndrangheta",
        "d": "Calabrian organized crime group with global cocaine trafficking power"
      },
      {
        "w": "Camorra",
        "d": "Organized crime network rooted in Naples and Campania"
      },
      {
        "w": "Sacra Corona Unita",
        "d": "Apulian mafia organization from southern Italy"
      },
      {
        "w": "Five Families",
        "d": "New York mafia families central to American organized crime"
      },
      {
        "w": "Gambino family",
        "d": "One of the major New York mafia families"
      },
      {
        "w": "Genovese family",
        "d": "Powerful New York mafia family known for secrecy and influence"
      },
      {
        "w": "Bonanno family",
        "d": "New York mafia family tied to internal wars and federal cases"
      },
      {
        "w": "Lucky Luciano",
        "d": "Mobster associated with the modern American mafia structure"
      },
      {
        "w": "Al Capone",
        "d": "Chicago gangster linked to Prohibition-era bootlegging"
      },
      {
        "w": "Meyer Lansky",
        "d": "Organized crime financier tied to gambling and syndicate networks"
      },
      {
        "w": "Bugsy Siegel",
        "d": "Mobster associated with Las Vegas casino development"
      },
      {
        "w": "Yakuza",
        "d": "Japanese organized crime groups with formalized hierarchies"
      },
      {
        "w": "Triads",
        "d": "Chinese secret-society-derived criminal networks"
      },
      {
        "w": "Medellin Cartel",
        "d": "Colombian cocaine cartel associated with Pablo Escobar"
      },
      {
        "w": "Cali Cartel",
        "d": "Colombian cartel that rivaled and outlasted Medellin"
      },
      {
        "w": "Sinaloa Cartel",
        "d": "Mexican cartel with major international trafficking networks"
      },
      {
        "w": "Los Zetas",
        "d": "Mexican cartel formed by former special-forces members"
      },
      {
        "w": "El Chapo",
        "d": "Joaquin Guzman, leader of the Sinaloa Cartel"
      },
      {
        "w": "Pablo Escobar",
        "d": "Medellin Cartel leader and symbol of narco power"
      },
      {
        "w": "MS-13",
        "d": "Gang founded by Salvadoran migrants in Los Angeles"
      },
      {
        "w": "Primeiro Comando da Capital",
        "d": "Brazilian prison-born criminal organization"
      },
      {
        "w": "Red Command",
        "d": "Brazilian criminal organization rooted in Rio de Janeiro prisons"
      },
      {
        "w": "Bratva",
        "d": "Loose term for Russian organized crime networks"
      },
      {
        "w": "Vory v zakone",
        "d": "Soviet and post-Soviet criminal elite known as thieves-in-law"
      },
      {
        "w": "RICO Act",
        "d": "American law used against organized criminal enterprises"
      },
      {
        "w": "Omerta",
        "d": "Code of silence associated with mafia culture"
      },
      {
        "w": "Money laundering",
        "d": "Process of disguising criminal proceeds as legitimate funds"
      },
      {
        "w": "Protection racket",
        "d": "Extortion scheme selling protection from harm often caused by the seller"
      },
      {
        "w": "Bootlegging",
        "d": "Illegal production or distribution of alcohol during prohibition"
      },
      {
        "w": "Witness protection",
        "d": "Program relocating witnesses threatened by criminal groups"
      },
      {
        "w": "Anti-mafia pool",
        "d": "Italian team of magistrates coordinating mafia prosecutions"
      },
      {
        "w": "Giovanni Falcone",
        "d": "Italian judge and symbol of anti-mafia investigations"
      },
      {
        "w": "Paolo Borsellino",
        "d": "Italian judge murdered after pursuing Cosa Nostra cases"
      },
      {
        "w": "Black Hand",
        "d": "Early extortion network associated with Italian-American crime"
      }
    ]
  },
  {
    "name": "archaeology: monuments, finds & methods",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Tomb of Tutankhamun",
        "d": "Nearly intact Egyptian royal tomb opened by Howard Carter"
      },
      {
        "w": "Schliemanns Troy",
        "d": "Excavated site in Turkey identified with ancient Troy"
      },
      {
        "w": "Dead Sea Scrolls",
        "d": "Ancient Jewish manuscripts found near Qumran"
      },
      {
        "w": "Nazca geoglyphs",
        "d": "Huge desert figures in Peru visible from above"
      },
      {
        "w": "Mausoleum of Qin Shi Huang",
        "d": "Imperial tomb complex guarded by thousands of clay soldiers"
      },
      {
        "w": "Lascaux Cave",
        "d": "French cave famous for Paleolithic animal paintings"
      },
      {
        "w": "Otzi",
        "d": "Copper Age ice mummy found in the Alps"
      },
      {
        "w": "Knossos",
        "d": "Minoan palace center on Crete excavated by Arthur Evans"
      },
      {
        "w": "Akrotiri",
        "d": "Bronze Age settlement on Santorini preserved by volcanic ash"
      },
      {
        "w": "Gobekli Tepe",
        "d": "Neolithic ritual site in Anatolia with carved stone pillars"
      },
      {
        "w": "Nebra sky disk",
        "d": "Bronze Age artifact with gold celestial symbols"
      },
      {
        "w": "Scythian kurgans",
        "d": "Burial mounds of steppe nomads with rich grave goods"
      },
      {
        "w": "Pazyryk burials",
        "d": "Frozen Altai tombs preserving textiles, tattoos and horses"
      },
      {
        "w": "Antikythera device",
        "d": "Ancient Greek geared object for astronomical calculation"
      },
      {
        "w": "Herculaneum",
        "d": "Roman town preserved by the eruption of Vesuvius"
      },
      {
        "w": "Nag Hammadi find",
        "d": "Manuscript cache important for the study of Gnostic texts"
      },
      {
        "w": "Catalhoyuk",
        "d": "Neolithic settlement in Anatolia with dense mudbrick houses"
      },
      {
        "w": "Vindolanda tablets",
        "d": "Roman writing tablets from northern Britain"
      },
      {
        "w": "Bog bodies",
        "d": "Human remains preserved in peat wetlands"
      },
      {
        "w": "Sutton Hoo",
        "d": "Anglo-Saxon ship burial in eastern England"
      },
      {
        "w": "Staffordshire Hoard",
        "d": "Large Anglo-Saxon gold and garnet treasure find"
      },
      {
        "w": "Altamira",
        "d": "Spanish cave with famous Paleolithic paintings"
      },
      {
        "w": "Avebury",
        "d": "Large Neolithic henge and stone circle in England"
      },
      {
        "w": "Skara Brae",
        "d": "Stone-built Neolithic village in Orkney"
      },
      {
        "w": "Archaeological stratigraphy",
        "d": "Layer analysis used to establish relative sequence at a site"
      },
      {
        "w": "Excavation grid",
        "d": "Square system used to control archaeological digging"
      },
      {
        "w": "Cultural layer",
        "d": "Deposit containing human activity and material remains"
      },
      {
        "w": "Field notebook",
        "d": "Primary record of observations made during excavation"
      },
      {
        "w": "Radiocarbon dating",
        "d": "Dating method based on radioactive carbon decay"
      },
      {
        "w": "Thermoluminescence",
        "d": "Dating method for heated minerals and ceramics"
      },
      {
        "w": "Typology",
        "d": "Classification of artifacts by form, style or function"
      },
      {
        "w": "Archaeological context",
        "d": "Relationship between a find, its layer and nearby material"
      },
      {
        "w": "Post-depositional process",
        "d": "Natural or human process changing a site after deposition"
      },
      {
        "w": "Ground-penetrating radar",
        "d": "Remote-sensing method for detecting buried features"
      },
      {
        "w": "Rescue archaeology",
        "d": "Rapid excavation before construction or destruction"
      }
    ]
  },
  {
    "name": "state symbols & signs of power",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Union Jack",
        "d": "Flag combining crosses associated with the United Kingdom"
      },
      {
        "w": "Stars and Stripes",
        "d": "Common name for the flag of the United States"
      },
      {
        "w": "Tricolour",
        "d": "Three-color flag form used by many modern states"
      },
      {
        "w": "Maple Leaf",
        "d": "Canadian national symbol centered on the flag"
      },
      {
        "w": "Rising Sun flag",
        "d": "Japanese military flag with radiating red rays"
      },
      {
        "w": "Double-headed eagle",
        "d": "Imperial heraldic bird looking in two directions"
      },
      {
        "w": "Fleur-de-lis",
        "d": "Stylized lily associated with French monarchy and heraldry"
      },
      {
        "w": "Red star",
        "d": "Symbol of revolution, armies and communist movements"
      },
      {
        "w": "Hammer and sickle",
        "d": "Soviet symbol of workers and peasants"
      },
      {
        "w": "Ashoka Chakra",
        "d": "Wheel symbol at the center of the Indian flag"
      },
      {
        "w": "Chrysanthemum Seal",
        "d": "Japanese imperial emblem"
      },
      {
        "w": "Royal Standard",
        "d": "Flag used to indicate the presence of a monarch"
      },
      {
        "w": "Great Seal",
        "d": "Official emblem used to authenticate acts of state"
      },
      {
        "w": "Coat of arms",
        "d": "Heraldic design identifying a person, family or state"
      },
      {
        "w": "Heraldic shield",
        "d": "Shield-shaped field carrying heraldic charges"
      },
      {
        "w": "Crown jewels",
        "d": "Ceremonial regalia used to display royal authority"
      },
      {
        "w": "Orb",
        "d": "Royal regalia symbolizing Christian sovereignty over the world"
      },
      {
        "w": "Sceptre",
        "d": "Ceremonial staff representing authority"
      },
      {
        "w": "Coronation mantle",
        "d": "Robe worn during a coronation ceremony"
      },
      {
        "w": "Order chain",
        "d": "Ceremonial collar of an order of chivalry or state honor"
      },
      {
        "w": "State anthem",
        "d": "Official song representing a nation or state"
      },
      {
        "w": "National motto",
        "d": "Short phrase expressing state identity or values"
      },
      {
        "w": "Presidential seal",
        "d": "Official emblem of a presidency"
      },
      {
        "w": "Fasces",
        "d": "Bundle of rods used as a symbol of authority"
      },
      {
        "w": "Phrygian cap",
        "d": "Cap associated with liberty and revolution"
      },
      {
        "w": "Laurel wreath",
        "d": "Classical symbol of victory and honor"
      },
      {
        "w": "White Eagle",
        "d": "Polish state symbol and heraldic emblem"
      },
      {
        "w": "Lion of Saint Mark",
        "d": "Winged lion symbol associated with Venice"
      },
      {
        "w": "Eagle of Saladin",
        "d": "Heraldic eagle used by several Arab states"
      },
      {
        "w": "Black eagle",
        "d": "Heraldic eagle associated with Prussia and other states"
      },
      {
        "w": "Royal cypher",
        "d": "Monogram of a reigning monarch"
      },
      {
        "w": "Imperial seal",
        "d": "Official seal connected with imperial authority"
      },
      {
        "w": "Dragon standard",
        "d": "Dragon emblem used in royal or military symbolism"
      },
      {
        "w": "National emblem",
        "d": "Official visual symbol of a state"
      },
      {
        "w": "State flag protocol",
        "d": "Rules governing display and use of national flags"
      }
    ]
  },
  {
    "name": "censorship & underground culture",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Samizdat",
        "d": "Self-published dissident texts copied outside official channels"
      },
      {
        "w": "Tamizdat",
        "d": "Banned or unofficial texts published abroad and smuggled back"
      },
      {
        "w": "Index Librorum Prohibitorum",
        "d": "Catholic list of prohibited books"
      },
      {
        "w": "Banned book",
        "d": "Book removed or forbidden by authorities or institutions"
      },
      {
        "w": "Book burning",
        "d": "Public destruction of books as political or moral theater"
      },
      {
        "w": "Redacted text",
        "d": "Text with parts blacked out or removed"
      },
      {
        "w": "Bowdlerization",
        "d": "Removal of supposedly offensive material from a work"
      },
      {
        "w": "Expurgation",
        "d": "Cleaning a text by deleting unacceptable passages"
      },
      {
        "w": "Blue pencil",
        "d": "Editorial or censorial deletion mark"
      },
      {
        "w": "Censors stamp",
        "d": "Official mark approving or restricting publication"
      },
      {
        "w": "Underground press",
        "d": "Unofficial publishing network outside mainstream control"
      },
      {
        "w": "Zine",
        "d": "Small self-published magazine often tied to subcultures"
      },
      {
        "w": "Mimeograph",
        "d": "Duplicating machine widely used for unofficial printed material"
      },
      {
        "w": "Carbon copy",
        "d": "Duplicate made with carbon paper in typewritten circulation"
      },
      {
        "w": "Typewriter copy",
        "d": "Typed reproduction used before easy photocopying"
      },
      {
        "w": "Pirate radio",
        "d": "Unlicensed radio broadcasting outside official systems"
      },
      {
        "w": "Radio Free Europe",
        "d": "Cold War broadcaster aimed at audiences behind the Iron Curtain"
      },
      {
        "w": "Voice of America",
        "d": "US international broadcaster heard across closed media systems"
      },
      {
        "w": "Banned film",
        "d": "Film denied release or public screening"
      },
      {
        "w": "Shelf film",
        "d": "Completed film withheld from release by authorities or studios"
      },
      {
        "w": "Salon des Refuses",
        "d": "Exhibition of works rejected by the official Paris Salon"
      },
      {
        "w": "Degenerate art",
        "d": "Nazi label for modern art condemned by the regime"
      },
      {
        "w": "Banned jazz",
        "d": "Jazz restricted or stigmatized under some authoritarian regimes"
      },
      {
        "w": "Rock on bones",
        "d": "Soviet bootleg records cut onto discarded X-ray film"
      },
      {
        "w": "Dissident publishing",
        "d": "Publishing tied to political opposition under repression"
      },
      {
        "w": "Blacklist",
        "d": "List excluding people from work, publication or public life"
      },
      {
        "w": "Forbidden list",
        "d": "Index of works or people subject to censorship"
      },
      {
        "w": "Banned author",
        "d": "Writer blocked from publication or circulation"
      },
      {
        "w": "Obscenity trial",
        "d": "Court case over allegedly indecent art or literature"
      },
      {
        "w": "Prior restraint",
        "d": "Government action blocking publication before release"
      },
      {
        "w": "Chilling effect",
        "d": "Self-censorship caused by fear of punishment"
      },
      {
        "w": "Coded language",
        "d": "Indirect phrasing used to evade censorship"
      },
      {
        "w": "Contraband book",
        "d": "Book smuggled or possessed despite prohibition"
      },
      {
        "w": "Customs seizure",
        "d": "Border confiscation of prohibited printed material"
      },
      {
        "w": "Banned exhibition",
        "d": "Art show closed or forbidden by authorities"
      }
    ]
  },
  {
    "name": "musicals",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "The Phantom of the Opera",
        "d": "Andrew Lloyd Webber musical about a masked figure in the Paris Opera"
      },
      {
        "w": "Les Miserables",
        "d": "Stage musical based on Victor Hugos novel of revolution and redemption"
      },
      {
        "w": "Hamilton musical",
        "d": "Hip-hop-influenced stage show about Alexander Hamilton"
      },
      {
        "w": "West Side Story",
        "d": "Leonard Bernstein musical retelling Romeo and Juliet in New York gangs"
      },
      {
        "w": "Cats",
        "d": "Andrew Lloyd Webber musical based on T. S. Eliots cat poems"
      },
      {
        "w": "Chicago",
        "d": "Kander and Ebb musical about murder, celebrity and media spectacle"
      },
      {
        "w": "Cabaret",
        "d": "Musical set in Weimar Berlin around the Kit Kat Club"
      },
      {
        "w": "Rent",
        "d": "Rock musical inspired by La Boheme and set in New Yorks East Village"
      },
      {
        "w": "Wicked",
        "d": "Musical reimagining the witches of Oz before Dorothy arrives"
      },
      {
        "w": "The Lion King",
        "d": "Disney stage musical known for masks, puppetry and African-inspired staging"
      },
      {
        "w": "Mamma Mia!",
        "d": "ABBA jukebox musical built around a wedding and family mystery"
      },
      {
        "w": "Evita",
        "d": "Andrew Lloyd Webber and Tim Rice musical about Eva Peron"
      },
      {
        "w": "Jesus Christ Superstar",
        "d": "Rock opera about the final days of Jesus"
      },
      {
        "w": "Fiddler on the Roof",
        "d": "Musical about Tevye, family tradition and change in a Jewish village"
      },
      {
        "w": "Oklahoma!",
        "d": "Rodgers and Hammerstein musical that helped define the integrated book musical"
      },
      {
        "w": "The Sound of Music",
        "d": "Rodgers and Hammerstein musical about the von Trapp family"
      },
      {
        "w": "My Fair Lady",
        "d": "Musical adaptation of Pygmalion with Eliza Doolittle"
      },
      {
        "w": "A Chorus Line",
        "d": "Backstage musical about dancers auditioning for a show"
      },
      {
        "w": "Sweeney Todd",
        "d": "Sondheim musical about a murderous barber and revenge"
      },
      {
        "w": "Into the Woods",
        "d": "Sondheim musical weaving fairy tales into darker consequences"
      },
      {
        "w": "Company",
        "d": "Sondheim musical about relationships and urban adulthood"
      },
      {
        "w": "Sunday in the Park with George",
        "d": "Sondheim musical inspired by Seurats painting"
      },
      {
        "w": "Hair",
        "d": "Counterculture rock musical of the 1960s"
      },
      {
        "w": "Hairspray",
        "d": "Musical about dance television, race and 1960s Baltimore"
      },
      {
        "w": "The Book of Mormon",
        "d": "Satirical musical by Trey Parker, Matt Stone and Robert Lopez"
      },
      {
        "w": "Dear Evan Hansen",
        "d": "Contemporary musical about loneliness, lies and online grief"
      },
      {
        "w": "Hadestown",
        "d": "Folk-jazz musical retelling Orpheus and Eurydice"
      },
      {
        "w": "Moulin Rouge!",
        "d": "Jukebox stage musical adapted from the Baz Luhrmann film"
      },
      {
        "w": "Six",
        "d": "Pop concert-style musical about the wives of Henry VIII"
      },
      {
        "w": "Miss Saigon",
        "d": "Musical inspired by Madame Butterfly and the Vietnam War"
      },
      {
        "w": "The Producers",
        "d": "Mel Brooks musical about staging a deliberately terrible show"
      },
      {
        "w": "Little Shop of Horrors",
        "d": "Dark comic musical about a carnivorous plant"
      },
      {
        "w": "Guys and Dolls",
        "d": "Classic musical about gamblers, romance and Broadway nightlife"
      },
      {
        "w": "Carousel",
        "d": "Rodgers and Hammerstein musical with a darker romantic plot"
      },
      {
        "w": "South Pacific",
        "d": "Rodgers and Hammerstein musical about war and prejudice"
      }
    ]
  },
  {
    "name": "classic film directors",
    "tags": {
      "a": "human",
      "b": "movies",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Alfred Hitchcock",
        "d": "British suspense master behind Psycho, Vertigo and Rear Window"
      },
      {
        "w": "Stanley Kubrick",
        "d": "Director of 2001, Dr. Strangelove, The Shining and Barry Lyndon"
      },
      {
        "w": "Federico Fellini",
        "d": "Italian auteur of La Dolce Vita, 8½ and Amarcord"
      },
      {
        "w": "Ingmar Bergman",
        "d": "Swedish director of Persona, Wild Strawberries and The Seventh Seal"
      },
      {
        "w": "Akira Kurosawa",
        "d": "Japanese master whose samurai films reshaped world cinema"
      },
      {
        "w": "Andrei Tarkovsky",
        "d": "Russian director of Solaris, Stalker and Mirror"
      },
      {
        "w": "Jean-Luc Godard",
        "d": "French New Wave radical behind Breathless and Weekend"
      },
      {
        "w": "François Truffaut",
        "d": "French New Wave director of The 400 Blows and Jules and Jim"
      },
      {
        "w": "Michelangelo Antonioni",
        "d": "Italian modernist of L’Avventura, Blow-Up and Red Desert"
      },
      {
        "w": "Luis Buñuel",
        "d": "Surrealist filmmaker of Un Chien Andalou and The Discreet Charm of the Bourgeoisie"
      },
      {
        "w": "Billy Wilder",
        "d": "Writer-director of Some Like It Hot, Sunset Boulevard and The Apartment"
      },
      {
        "w": "John Ford",
        "d": "American director famous for westerns such as Stagecoach and The Searchers"
      },
      {
        "w": "Fritz Lang",
        "d": "German-American director of Metropolis and M"
      },
      {
        "w": "Carl Theodor Dreyer",
        "d": "Danish director of The Passion of Joan of Arc and Ordet"
      },
      {
        "w": "Sergei Eisenstein",
        "d": "Soviet montage theorist and director of Battleship Potemkin"
      },
      {
        "w": "Dziga Vertov",
        "d": "Soviet documentarian behind Man with a Movie Camera"
      },
      {
        "w": "Charlie Chaplin",
        "d": "Silent-era comic genius behind City Lights and Modern Times"
      },
      {
        "w": "Orson Welles",
        "d": "Director-star of Citizen Kane and Touch of Evil"
      },
      {
        "w": "Luchino Visconti",
        "d": "Italian director of The Leopard, Rocco and His Brothers and Death in Venice"
      },
      {
        "w": "Pier Paolo Pasolini",
        "d": "Italian poet-filmmaker of The Gospel According to St. Matthew and Salò"
      },
      {
        "w": "Vittorio De Sica",
        "d": "Neorealist director of Bicycle Thieves and Umberto D."
      },
      {
        "w": "Roberto Rossellini",
        "d": "Italian neorealist director of Rome, Open City"
      },
      {
        "w": "Robert Bresson",
        "d": "French minimalist director of Pickpocket and A Man Escaped"
      },
      {
        "w": "Alain Resnais",
        "d": "French modernist of Hiroshima mon amour and Last Year at Marienbad"
      },
      {
        "w": "Bernardo Bertolucci",
        "d": "Italian director of The Conformist and Last Tango in Paris"
      },
      {
        "w": "Sergei Parajanov",
        "d": "Armenian-Georgian visionary behind The Color of Pomegranates"
      },
      {
        "w": "Andrzej Wajda",
        "d": "Polish director of Ashes and Diamonds and Man of Iron"
      },
      {
        "w": "Martin Scorsese",
        "d": "American director of Taxi Driver, Goodfellas and Raging Bull"
      },
      {
        "w": "Francis Ford Coppola",
        "d": "American director of The Godfather trilogy and Apocalypse Now"
      },
      {
        "w": "F. W. Murnau",
        "d": "German silent-film director of Nosferatu and Sunrise"
      },
      {
        "w": "Jean Renoir",
        "d": "French director of Grand Illusion and The Rules of the Game"
      },
      {
        "w": "Buster Keaton",
        "d": "Silent comic filmmaker behind The General and Sherlock Jr."
      },
      {
        "w": "Werner Herzog",
        "d": "German director of Aguirre, Fitzcarraldo and Grizzly Man"
      },
      {
        "w": "Yasujiro Ozu",
        "d": "Japanese director of Tokyo Story and Late Spring"
      },
      {
        "w": "Satyajit Ray",
        "d": "Indian director of the Apu Trilogy and The Music Room"
      }
    ]
  },
  {
    "name": "impressionists & post-impressionists",
    "tags": {
      "a": "human",
      "b": "art",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Claude Monet",
        "d": "French impressionist whose water lilies and haystacks studied light"
      },
      {
        "w": "Édouard Manet",
        "d": "Painter whose Olympia and Luncheon on the Grass shocked Paris"
      },
      {
        "w": "Pierre-Auguste Renoir",
        "d": "Impressionist known for luminous social scenes and portraits"
      },
      {
        "w": "Edgar Degas",
        "d": "Painter of ballet dancers, racecourses and modern Paris interiors"
      },
      {
        "w": "Camille Pissarro",
        "d": "Impressionist elder who painted rural and urban scenes"
      },
      {
        "w": "Alfred Sisley",
        "d": "Landscape impressionist focused on rivers, snow and sky"
      },
      {
        "w": "Berthe Morisot",
        "d": "Impressionist painter of domestic life and luminous brushwork"
      },
      {
        "w": "Gustave Caillebotte",
        "d": "Painter of Paris streets and modern urban perspectives"
      },
      {
        "w": "Frédéric Bazille",
        "d": "Early impressionist killed young during the Franco-Prussian War"
      },
      {
        "w": "Paul Cézanne",
        "d": "Post-impressionist whose forms helped lead toward cubism"
      },
      {
        "w": "Vincent van Gogh",
        "d": "Dutch post-impressionist of Starry Night, sunflowers and intense color"
      },
      {
        "w": "Paul Gauguin",
        "d": "Post-impressionist associated with Tahiti and symbolic color"
      },
      {
        "w": "Georges Seurat",
        "d": "Pointillist painter of A Sunday Afternoon on La Grande Jatte"
      },
      {
        "w": "Paul Signac",
        "d": "Neo-impressionist who developed pointillism after Seurat"
      },
      {
        "w": "Henri de Toulouse-Lautrec",
        "d": "Painter and poster artist of Montmartre nightlife"
      },
      {
        "w": "Pierre Bonnard",
        "d": "Post-impressionist Nabi painter of interiors and color"
      },
      {
        "w": "Édouard Vuillard",
        "d": "Nabi artist known for patterned rooms and intimate scenes"
      },
      {
        "w": "Maurice Denis",
        "d": "Nabi theorist who stressed painting as a flat colored surface"
      },
      {
        "w": "Henri-Edmond Cross",
        "d": "Neo-impressionist painter of Mediterranean light"
      },
      {
        "w": "Maximilien Luce",
        "d": "Neo-impressionist known for workers, factories and Paris scenes"
      },
      {
        "w": "Armand Guillaumin",
        "d": "Impressionist painter of landscapes and bright color"
      },
      {
        "w": "Mary Cassatt",
        "d": "American impressionist known for mothers, children and prints"
      },
      {
        "w": "Eugène Boudin",
        "d": "Marine painter who influenced Monet with plein-air practice"
      },
      {
        "w": "Paul Sérusier",
        "d": "Nabi painter of The Talisman and synthetic color"
      },
      {
        "w": "Félix Vallotton",
        "d": "Swiss-French Nabi painter and printmaker"
      },
      {
        "w": "Odilon Redon",
        "d": "Symbolist painter linked to post-impressionist color experiments"
      },
      {
        "w": "Louis Anquetin",
        "d": "Painter associated with cloisonnism and bold outlines"
      },
      {
        "w": "Théo van Rysselberghe",
        "d": "Belgian neo-impressionist and pointillist portraitist"
      },
      {
        "w": "Joaquín Sorolla",
        "d": "Spanish painter of sunlit beaches and loose luminous brushwork"
      },
      {
        "w": "Henri Martin",
        "d": "French painter who adapted pointillism to murals and landscapes"
      },
      {
        "w": "Georges Lemmen",
        "d": "Belgian neo-impressionist painter and designer"
      },
      {
        "w": "Ker-Xavier Roussel",
        "d": "Nabi painter of mythological and decorative landscapes"
      },
      {
        "w": "Suzanne Valadon",
        "d": "French painter of figures and still lifes in post-impressionist circles"
      },
      {
        "w": "Charles Angrand",
        "d": "French neo-impressionist known for subtle pointillist drawings"
      },
      {
        "w": "Albert Dubois-Pillet",
        "d": "Neo-impressionist painter and early supporter of Seurat"
      }
    ]
  },
  {
    "name": "fashion designers",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Gabrielle Chanel",
        "d": "Designer who made jersey suits, perfume and the little black dress iconic"
      },
      {
        "w": "Christian Dior",
        "d": "Creator of the postwar New Look silhouette in 1947"
      },
      {
        "w": "Yves Henri Saint Laurent",
        "d": "Designer behind Le Smoking and modern ready-to-wear luxury"
      },
      {
        "w": "Gianni Versace",
        "d": "Italian designer known for baroque glamour and bold prints"
      },
      {
        "w": "Giorgio Armani",
        "d": "Italian designer associated with soft tailoring and power suits"
      },
      {
        "w": "Karl Lagerfeld",
        "d": "Longtime creative force at Chanel, Fendi and his own label"
      },
      {
        "w": "Yohji Yamamoto",
        "d": "Japanese designer known for black, asymmetry and deconstruction"
      },
      {
        "w": "Lee Alexander McQueen",
        "d": "British designer famous for theatrical runway shows and sharp tailoring"
      },
      {
        "w": "Rei Kawakubo",
        "d": "Comme des Garçons founder known for radical anti-fashion forms"
      },
      {
        "w": "Cristóbal Balenciaga",
        "d": "Spanish couturier revered for sculptural silhouettes"
      },
      {
        "w": "Jean-Paul Gaultier",
        "d": "French designer known for corsets, sailor stripes and pop spectacle"
      },
      {
        "w": "Vivienne Westwood",
        "d": "British designer who brought punk into fashion"
      },
      {
        "w": "John Galliano",
        "d": "Gibraltar-born designer known for theatrical couture narratives"
      },
      {
        "w": "Thierry Mugler",
        "d": "French designer of exaggerated shoulders, corsetry and perfume"
      },
      {
        "w": "Pierre Cardin",
        "d": "Designer who popularized space-age fashion and licensing"
      },
      {
        "w": "Christian Lacroix",
        "d": "French couturier known for exuberant color and historicism"
      },
      {
        "w": "Oscar de la Renta",
        "d": "Designer of polished eveningwear and First Lady wardrobes"
      },
      {
        "w": "Salvatore Ferragamo",
        "d": "Italian shoemaker whose craft became a luxury house"
      },
      {
        "w": "Calvin Richard Klein",
        "d": "American designer of minimalist sportswear and denim branding"
      },
      {
        "w": "Gianfranco Ferré",
        "d": "Italian architect-designer once called the architect of fashion"
      },
      {
        "w": "Emilio Pucci",
        "d": "Italian designer known for swirling colorful prints"
      },
      {
        "w": "Paco Rabanne",
        "d": "Designer famous for metal dresses and futuristic materials"
      },
      {
        "w": "Charles Frederick Worth",
        "d": "English designer in Paris often called the father of haute couture"
      },
      {
        "w": "Tom Ford",
        "d": "Designer who revived Gucci before launching his own brand"
      },
      {
        "w": "Mary Quant",
        "d": "British designer associated with the miniskirt and Swinging London"
      },
      {
        "w": "Donna Karan",
        "d": "American designer behind the Seven Easy Pieces wardrobe idea"
      },
      {
        "w": "Riccardo Tisci",
        "d": "Italian designer known for Gothic Givenchy and street-luxury hybrids"
      },
      {
        "w": "Helmut Lang",
        "d": "Austrian designer of minimalist 1990s tailoring"
      },
      {
        "w": "Demna Gvasalia",
        "d": "Georgian designer behind Vetements and Balenciaga revivals"
      },
      {
        "w": "Manolo Blahnik",
        "d": "Shoe designer whose stilettos became pop-cultural icons"
      },
      {
        "w": "Nicolas Ghesquière",
        "d": "French designer known for futuristic Balenciaga and Louis Vuitton work"
      },
      {
        "w": "Alexander Wang",
        "d": "American designer known for downtown streetwear and sportswear"
      },
      {
        "w": "Iris van Herpen",
        "d": "Dutch designer using 3D printing and biomorphic couture"
      },
      {
        "w": "Azzedine Alaïa",
        "d": "Tunisian couturier famed for sculptural body-conscious dresses"
      },
      {
        "w": "Miuccia Prada",
        "d": "Designer who turned Prada into an intellectual fashion powerhouse"
      }
    ]
  },
  {
    "name": "Russian classic novels",
    "tags": {
      "a": "human",
      "b": "books",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "War and Peace",
        "d": "Tolstoy epic of families, Napoleon and Russian society"
      },
      {
        "w": "Anna Karenina",
        "d": "Tolstoy novel about love, marriage and social judgment"
      },
      {
        "w": "Crime and Punishment",
        "d": "Dostoevsky novel about Raskolnikov, guilt and moral reckoning"
      },
      {
        "w": "The Brothers Karamazov",
        "d": "Dostoevsky family novel of faith, murder and freedom"
      },
      {
        "w": "The Idiot",
        "d": "Dostoevsky novel centered on Prince Myshkin"
      },
      {
        "w": "Demons",
        "d": "Dostoevsky political novel about radicalism and spiritual collapse"
      },
      {
        "w": "Dead Souls",
        "d": "Gogol satire about Chichikov buying names of dead serfs"
      },
      {
        "w": "Oblomov",
        "d": "Goncharov novel whose hero became a symbol of inertia"
      },
      {
        "w": "Fathers and Sons",
        "d": "Turgenev novel that popularized the figure of the nihilist"
      },
      {
        "w": "A Hero of Our Time",
        "d": "Lermontov novel built around the Byronic Pechorin"
      },
      {
        "w": "The Captain’s Daughter",
        "d": "Pushkin historical novella set during Pugachev’s rebellion"
      },
      {
        "w": "The Overcoat",
        "d": "Gogol story about Akaky Akakievich and a stolen coat"
      },
      {
        "w": "The Nose",
        "d": "Gogol absurd story about a runaway nose with official rank"
      },
      {
        "w": "The Cherry Orchard",
        "d": "Chekhov play about a family estate and social change"
      },
      {
        "w": "Uncle Vanya",
        "d": "Chekhov play of wasted lives, work and provincial frustration"
      },
      {
        "w": "The Seagull",
        "d": "Chekhov play about art, love and failed performance"
      },
      {
        "w": "Three Sisters",
        "d": "Chekhov play about longing for Moscow and a different life"
      },
      {
        "w": "The Storm",
        "d": "Ostrovsky drama about Katerina and provincial tyranny"
      },
      {
        "w": "Lady Macbeth of Mtsensk",
        "d": "Leskov novella of crime, passion and merchant-class violence"
      },
      {
        "w": "The Enchanted Wanderer",
        "d": "Leskov tale of a wandering Russian adventurer"
      },
      {
        "w": "Resurrection",
        "d": "Tolstoy late novel about guilt, courts and moral reform"
      },
      {
        "w": "What Is to Be Done?",
        "d": "Chernyshevsky novel of radical plans and social dreams"
      },
      {
        "w": "Poor Folk",
        "d": "Dostoevsky epistolary debut about poverty and tenderness"
      },
      {
        "w": "The Adolescent",
        "d": "Dostoevsky novel about ambition, illegitimacy and money"
      },
      {
        "w": "The Raw Youth",
        "d": "Alternate English title for Dostoevsky’s The Adolescent"
      },
      {
        "w": "The Golovlyov Family",
        "d": "Saltykov-Shchedrin dark satire of a decaying gentry family"
      },
      {
        "w": "Virgin Soil",
        "d": "Turgenev novel about populists and failed revolutionary hope"
      },
      {
        "w": "Smoke",
        "d": "Turgenev novel about love and politics among Russians abroad"
      },
      {
        "w": "Rudin",
        "d": "Turgenev novel about an eloquent but ineffective intellectual"
      },
      {
        "w": "Home of the Gentry",
        "d": "Turgenev novel of love, duty and a ruined estate"
      },
      {
        "w": "On the Eve",
        "d": "Turgenev novel about idealism before the Crimean War era"
      },
      {
        "w": "Doctor Zhivago",
        "d": "Pasternak novel of revolution, poetry and private fate"
      },
      {
        "w": "Hadji Murat",
        "d": "Tolstoy late novella set in the Caucasian War"
      },
      {
        "w": "The Steppe",
        "d": "Chekhov novella about a boy’s journey across the steppe"
      },
      {
        "w": "The Lower Depths",
        "d": "Gorky play about people living in a lodging house"
      }
    ]
  },
  {
    "name": "20th-century classic novels",
    "tags": {
      "a": "human",
      "b": "books",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Ulysses",
        "d": "Joyce novel that follows one day in Dublin through radical style"
      },
      {
        "w": "In Search of Lost Time",
        "d": "Proust cycle about memory, time and society"
      },
      {
        "w": "The Castle",
        "d": "Kafka novel about bureaucracy and unreachable authority"
      },
      {
        "w": "The Magic Mountain",
        "d": "Thomas Mann novel set in a Swiss sanatorium before World War I"
      },
      {
        "w": "The Master and Margarita",
        "d": "Bulgakov novel mixing Soviet satire, Pilate and the devil in Moscow"
      },
      {
        "w": "Steppenwolf",
        "d": "Hesse novel about a divided man and modern alienation"
      },
      {
        "w": "The Stranger",
        "d": "Camus novel of absurdism, murder and emotional detachment"
      },
      {
        "w": "To the Lighthouse",
        "d": "Virginia Woolf novel of memory, perception and family life"
      },
      {
        "w": "Doctor Faustus",
        "d": "Thomas Mann novel about music, genius and Germany’s catastrophe"
      },
      {
        "w": "Pale Fire",
        "d": "Nabokov novel built as a poem with obsessive commentary"
      },
      {
        "w": "Under the Volcano",
        "d": "Lowry novel set during the Day of the Dead in Mexico"
      },
      {
        "w": "Journey to the End of the Night",
        "d": "Céline novel of war, colonialism and bitter modernity"
      },
      {
        "w": "Berlin Alexanderplatz",
        "d": "Döblin modernist novel about Franz Biberkopf in Weimar Berlin"
      },
      {
        "w": "The Grapes of Wrath",
        "d": "Steinbeck novel about Dust Bowl migrants and labor struggle"
      },
      {
        "w": "For Whom the Bell Tolls",
        "d": "Hemingway novel set in the Spanish Civil War"
      },
      {
        "w": "One Day in the Life of Ivan Denisovich",
        "d": "Solzhenitsyn novella about survival in a Soviet labor camp"
      },
      {
        "w": "The Name of the Rose",
        "d": "Eco novel mixing medieval murder mystery, theology and books"
      },
      {
        "w": "Lolita",
        "d": "Nabokov novel infamous for its unreliable narrator and style"
      },
      {
        "w": "The Sound and the Fury",
        "d": "Faulkner novel using fractured time and multiple voices"
      },
      {
        "w": "Froth on the Daydream",
        "d": "Boris Vian novel of surreal romance and illness"
      },
      {
        "w": "The Plague",
        "d": "Camus novel about an epidemic and moral endurance"
      },
      {
        "w": "The Catcher in the Rye",
        "d": "Salinger novel narrated by Holden Caulfield"
      },
      {
        "w": "To Kill a Mockingbird",
        "d": "Harper Lee novel about racism, childhood and justice"
      },
      {
        "w": "The Great Gatsby",
        "d": "Fitzgerald novel of wealth, longing and American illusion"
      },
      {
        "w": "The French Lieutenant’s Woman",
        "d": "Fowles novel that plays with Victorian fiction and endings"
      },
      {
        "w": "The Glass Bead Game",
        "d": "Hesse novel about an elite intellectual order"
      },
      {
        "w": "Infinite Jest",
        "d": "David Foster Wallace novel of addiction, entertainment and systems"
      },
      {
        "w": "Heart of Darkness",
        "d": "Conrad novella about imperial violence and moral darkness"
      },
      {
        "w": "Midnight’s Children",
        "d": "Rushdie novel linking India’s independence to magical realism"
      },
      {
        "w": "The Tin Drum",
        "d": "Grass novel of memory, guilt and a boy who refuses to grow"
      },
      {
        "w": "A Bend in the River",
        "d": "Naipaul novel about postcolonial Africa and displacement"
      },
      {
        "w": "The Unbearable Lightness of Being",
        "d": "Kundera novel about love, politics and the Prague Spring"
      },
      {
        "w": "The Leopard",
        "d": "Lampedusa novel about aristocratic decline during Italian unification"
      },
      {
        "w": "The Alexandria Quartet",
        "d": "Durrell four-novel sequence set in Alexandria"
      },
      {
        "w": "The Man Without Qualities",
        "d": "Musil modernist novel about prewar Austria and ideas"
      }
    ]
  },
  {
    "name": "gothic literature & horror",
    "tags": {
      "a": "human",
      "b": "books",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Frankenstein",
        "d": "Mary Shelley novel about creation, responsibility and a made being"
      },
      {
        "w": "Bram Stoker’s Dracula",
        "d": "Victorian vampire novel that shaped modern vampire lore"
      },
      {
        "w": "The Mysteries of Udolpho",
        "d": "Ann Radcliffe gothic novel of castles, fear and sensibility"
      },
      {
        "w": "Shirley Jackson’s Hill House",
        "d": "Shirley Jackson novel about a house that may be alive"
      },
      {
        "w": "Henry James’s Turn of the Screw",
        "d": "Henry James ghost story full of ambiguity and dread"
      },
      {
        "w": "Jekyll and Hyde",
        "d": "Stevenson novella about a divided self and hidden violence"
      },
      {
        "w": "The Fall of the House of Usher",
        "d": "Poe story of a collapsing house and family line"
      },
      {
        "w": "The Shining",
        "d": "Stephen King novel about isolation, alcoholism and a haunted hotel"
      },
      {
        "w": "The Monk",
        "d": "Matthew Lewis scandalous gothic novel of temptation and horror"
      },
      {
        "w": "The Castle of Otranto",
        "d": "Horace Walpole novel often called the first gothic novel"
      },
      {
        "w": "The Sandman",
        "d": "Hoffmann uncanny tale about eyes, childhood fear and obsession"
      },
      {
        "w": "The Woman in White",
        "d": "Wilkie Collins sensation novel of secrets and identity"
      },
      {
        "w": "The Picture of Dorian Gray",
        "d": "Oscar Wilde novel about beauty, corruption and a hidden portrait"
      },
      {
        "w": "The Call of Cthulhu",
        "d": "Lovecraft story that launched a cosmic-horror mythos"
      },
      {
        "w": "Rosemary’s Baby",
        "d": "Ira Levin novel of pregnancy, paranoia and satanic neighbors"
      },
      {
        "w": "House of Leaves",
        "d": "Experimental horror novel built from documents and impossible architecture"
      },
      {
        "w": "The Legend of Sleepy Hollow",
        "d": "Irving tale of Ichabod Crane and the Headless Horseman"
      },
      {
        "w": "The Great God Pan",
        "d": "Arthur Machen novella of occult experiment and terror"
      },
      {
        "w": "The Italian",
        "d": "Ann Radcliffe gothic novel of imprisonment and pursuit"
      },
      {
        "w": "Viy",
        "d": "Gogol tale of a student, a witch and a terrifying church vigil"
      },
      {
        "w": "Interview with the Vampire",
        "d": "Anne Rice novel narrated by the vampire Louis"
      },
      {
        "w": "At the Mountains of Madness",
        "d": "Lovecraft novella of Antarctic ruins and ancient beings"
      },
      {
        "w": "Carmilla",
        "d": "Sheridan Le Fanu vampire novella predating Dracula"
      },
      {
        "w": "The Yellow Wallpaper",
        "d": "Charlotte Perkins Gilman story of confinement and mental collapse"
      },
      {
        "w": "Melmoth the Wanderer",
        "d": "Maturin gothic novel about a damned wanderer"
      },
      {
        "w": "The Black Cat",
        "d": "Poe tale of guilt, violence and a hidden corpse"
      },
      {
        "w": "The Oval Portrait",
        "d": "Poe story of art draining life from its subject"
      },
      {
        "w": "Rebecca",
        "d": "Daphne du Maurier gothic novel haunted by an absent first wife"
      },
      {
        "w": "The Willows",
        "d": "Algernon Blackwood story of cosmic dread on the Danube"
      },
      {
        "w": "The House on the Borderland",
        "d": "Hodgson novel of a house facing cosmic invasion"
      },
      {
        "w": "The King in Yellow",
        "d": "Chambers collection linked by a forbidden play"
      },
      {
        "w": "Something Wicked This Way Comes",
        "d": "Bradbury dark fantasy about a sinister carnival"
      },
      {
        "w": "The Exorcist",
        "d": "Blatty novel about possession and Catholic ritual"
      },
      {
        "w": "Hellbound Heart",
        "d": "Clive Barker novella that introduced the Cenobites"
      },
      {
        "w": "Mexican Gothic",
        "d": "Silvia Moreno-Garcia novel of a decaying house and family secret"
      }
    ]
  },
  {
    "name": "cult films & sci-fi classics",
    "tags": {
      "a": "human",
      "b": "movies",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "The Godfather",
        "d": "Coppola crime saga about the Corleone family and American power"
      },
      {
        "w": "Fight Club",
        "d": "Fincher film about masculinity, consumer culture and an underground club"
      },
      {
        "w": "The Shawshank Redemption",
        "d": "Prison drama about friendship, patience and hope"
      },
      {
        "w": "The Silence of the Lambs",
        "d": "Thriller about Clarice Starling and Hannibal Lecter"
      },
      {
        "w": "Forrest Gump",
        "d": "Zemeckis film placing one man inside decades of American history"
      },
      {
        "w": "Taxi Driver",
        "d": "Scorsese portrait of alienation and violence in 1970s New York"
      },
      {
        "w": "Citizen Kane",
        "d": "Orson Welles film built around the mystery of Rosebud"
      },
      {
        "w": "Psycho",
        "d": "Hitchcock thriller that changed screen suspense and horror"
      },
      {
        "w": "2001: A Space Odyssey",
        "d": "Kubrick science-fiction epic about evolution, AI and a monolith"
      },
      {
        "w": "Gattaca",
        "d": "Genetic-selection dystopia about identity and ambition"
      },
      {
        "w": "Django Unchained",
        "d": "Tarantino western about slavery, revenge and spectacle"
      },
      {
        "w": "Reservoir Dogs",
        "d": "Tarantino debut about a failed robbery and mistrust"
      },
      {
        "w": "The Big Lebowski",
        "d": "Coen brothers cult comedy about the Dude and a mistaken rug"
      },
      {
        "w": "Fargo film",
        "d": "Coen crime film mixing bleak violence and deadpan comedy"
      },
      {
        "w": "No Country for Old Men",
        "d": "Coen neo-western centered on Anton Chigurh and chance"
      },
      {
        "w": "Mulholland Drive",
        "d": "David Lynch dreamlike noir about Hollywood identity"
      },
      {
        "w": "Inception",
        "d": "Nolan science-fiction thriller about shared dreams and heists"
      },
      {
        "w": "The Social Network",
        "d": "Fincher film about Facebook, ambition and betrayal"
      },
      {
        "w": "Snatch",
        "d": "Guy Ritchie crime comedy with diamonds, boxing and tangled schemes"
      },
      {
        "w": "Catch Me If You Can",
        "d": "Spielberg film about con artist Frank Abagnale"
      },
      {
        "w": "Traffic",
        "d": "Soderbergh mosaic about the drug trade and its systems"
      },
      {
        "w": "Home Alone",
        "d": "Holiday comedy about a boy defending his house from burglars"
      },
      {
        "w": "Rain Man",
        "d": "Road drama about two brothers and autism"
      },
      {
        "w": "Apocalypse Now",
        "d": "Coppola Vietnam War epic inspired by Heart of Darkness"
      },
      {
        "w": "Twelve Monkeys",
        "d": "Gilliam time-travel film about memory, plague and causality"
      },
      {
        "w": "The Matrix",
        "d": "Wachowski cyberpunk film about simulation and the red pill"
      },
      {
        "w": "Dark City",
        "d": "Noir science-fiction film about memory and a manipulated city"
      },
      {
        "w": "Pulp Fiction",
        "d": "Tarantino nonlinear crime film of hitmen, boxers and diners"
      },
      {
        "w": "Once Upon a Time in America",
        "d": "Leone gangster epic about memory and betrayal"
      },
      {
        "w": "Casablanca",
        "d": "Hollywood classic about love, exile and wartime choices"
      },
      {
        "w": "Blade Runner",
        "d": "Ridley Scott film about replicants, memory and noir futurism"
      },
      {
        "w": "Back to the Future",
        "d": "Time-travel comedy about Marty McFly and the DeLorean"
      },
      {
        "w": "Jaws",
        "d": "Spielberg thriller that helped create the summer blockbuster"
      },
      {
        "w": "Arrival",
        "d": "Villeneuve film about language, time and first contact"
      },
      {
        "w": "Dune",
        "d": "Epic adaptation of Frank Herbert’s desert-planet saga"
      },
      {
        "w": "Alien",
        "d": "Ridley Scott space horror about the Nostromo and a xenomorph"
      },
      {
        "w": "Terminator",
        "d": "Cameron film about a cyborg assassin from the future"
      },
      {
        "w": "Interstellar",
        "d": "Nolan film about gravity, survival and a journey through a wormhole"
      },
      {
        "w": "A New Hope",
        "d": "Original Star Wars film about Luke Skywalker and the Rebel Alliance"
      },
      {
        "w": "Solaris",
        "d": "Tarkovsky adaptation of Lem’s novel about memory and an alien ocean"
      }
    ]
  },
  {
    "name": "classic painting masterpieces",
    "tags": {
      "a": "human",
      "b": "art",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Mona Lisa",
        "d": "Leonardo portrait famous for its ambiguous smile"
      },
      {
        "w": "The Last Supper",
        "d": "Leonardo mural of Christ and the apostles at the moment of betrayal"
      },
      {
        "w": "The Creation of Adam",
        "d": "Michelangelo ceiling fresco in the Sistine Chapel"
      },
      {
        "w": "The Birth of Venus",
        "d": "Botticelli painting of Venus arriving on a shell"
      },
      {
        "w": "Primavera",
        "d": "Botticelli mythological painting of spring and courtly symbolism"
      },
      {
        "w": "The School of Athens",
        "d": "Raphael fresco gathering philosophers in an ideal classical space"
      },
      {
        "w": "Sistine Madonna",
        "d": "Raphael painting famous for its two cherubs below"
      },
      {
        "w": "Girl with a Pearl Earring",
        "d": "Vermeer portrait often called the Dutch Mona Lisa"
      },
      {
        "w": "The Night Watch",
        "d": "Rembrandt militia portrait with dramatic light and motion"
      },
      {
        "w": "Las Meninas",
        "d": "Velázquez painting that turns portraiture into a puzzle of looking"
      },
      {
        "w": "The Garden of Earthly Delights",
        "d": "Bosch triptych of paradise, pleasure and punishment"
      },
      {
        "w": "The Carrying of the Cross",
        "d": "Bosch or follower image of Christ amid grotesque faces"
      },
      {
        "w": "The Anatomy Lesson",
        "d": "Rembrandt group portrait of Dr. Tulp and a public dissection"
      },
      {
        "w": "Luncheon on the Grass",
        "d": "Manet painting that scandalized Paris in 1863"
      },
      {
        "w": "Olympia by Manet",
        "d": "Manet painting that confronted viewers with a modern nude"
      },
      {
        "w": "Liberty Leading the People",
        "d": "Delacroix revolutionary allegory of 1830 France"
      },
      {
        "w": "The Raft of the Medusa",
        "d": "Géricault painting of shipwreck, survival and political scandal"
      },
      {
        "w": "Grande Odalisque",
        "d": "Ingres reclining nude with elongated proportions"
      },
      {
        "w": "Impression, Sunrise",
        "d": "Monet painting that gave Impressionism its name"
      },
      {
        "w": "Water Lilies",
        "d": "Monet series of ponds, reflections and late abstraction"
      },
      {
        "w": "Dance at Le Moulin de la Galette",
        "d": "Renoir painting of a crowded Montmartre dance garden"
      },
      {
        "w": "The Starry Night",
        "d": "Van Gogh night landscape of swirling sky and village"
      },
      {
        "w": "Sunflowers",
        "d": "Van Gogh still-life series of yellow flowers"
      },
      {
        "w": "The Potato Eaters",
        "d": "Van Gogh painting of peasants sharing a dark meal"
      },
      {
        "w": "Where Do We Come From?",
        "d": "Gauguin Tahitian canvas posing questions about life"
      },
      {
        "w": "The Large Bathers",
        "d": "Cézanne composition of figures and landscape structure"
      },
      {
        "w": "The Kiss",
        "d": "Klimt gold-period painting of lovers embraced"
      },
      {
        "w": "Judith I",
        "d": "Klimt painting of Judith with the head of Holofernes"
      },
      {
        "w": "Dance",
        "d": "Matisse painting of red figures in a circular rhythm"
      },
      {
        "w": "The Sower",
        "d": "Millet rural painting of labor and dignity"
      },
      {
        "w": "The Third of May 1808",
        "d": "Goya painting of execution and resistance in Madrid"
      },
      {
        "w": "The Triumph of Death",
        "d": "Bruegel vision of death overwhelming the world"
      },
      {
        "w": "The Hay Wain",
        "d": "Constable rural English landscape with a wagon in water"
      },
      {
        "w": "The Fighting Temeraire",
        "d": "Turner painting of an old warship towed to be broken up"
      },
      {
        "w": "Wanderer above the Sea of Fog",
        "d": "Friedrich icon of Romantic solitude and sublime landscape"
      }
    ]
  },
  {
    "name": "modern painting masterpieces",
    "tags": {
      "a": "human",
      "b": "art",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Guernica",
        "d": "Picasso mural against the bombing of a Basque town"
      },
      {
        "w": "Les Demoiselles d’Avignon",
        "d": "Picasso painting that broke bodies into proto-cubist forms"
      },
      {
        "w": "Black Square",
        "d": "Malevich suprematist icon of radical abstraction"
      },
      {
        "w": "Red Square",
        "d": "Malevich abstract square subtitled painterly realism of a peasant woman"
      },
      {
        "w": "Composition VIII",
        "d": "Kandinsky abstract work of circles, lines and geometry"
      },
      {
        "w": "Yellow-Red-Blue",
        "d": "Kandinsky painting balancing color, line and abstraction"
      },
      {
        "w": "Fountain",
        "d": "Duchamp readymade urinal that challenged the definition of art"
      },
      {
        "w": "Violin and Candlestick",
        "d": "Braque cubist still life of fragmented planes"
      },
      {
        "w": "Marilyn Diptych",
        "d": "Warhol silkscreen linking celebrity, repetition and death"
      },
      {
        "w": "Campbell’s Soup Cans",
        "d": "Warhol pop-art grid of supermarket imagery"
      },
      {
        "w": "Number 31",
        "d": "Pollock drip painting of large-scale action abstraction"
      },
      {
        "w": "Blue Nudes",
        "d": "Matisse cut-out series reducing bodies to blue paper shapes"
      },
      {
        "w": "The Sick Child",
        "d": "Munch painting of grief, illness and memory"
      },
      {
        "w": "Madonna",
        "d": "Munch image of eroticism, fertility and anxiety"
      },
      {
        "w": "Girl with Balloon",
        "d": "Banksy stencil image of a child reaching for a red balloon"
      },
      {
        "w": "Flowers",
        "d": "Warhol pop-art series based on hibiscus photographs"
      },
      {
        "w": "The Two Fridas",
        "d": "Kahlo double self-portrait of identity and pain"
      },
      {
        "w": "The Acrobats",
        "d": "Picasso rose-period image of circus performers"
      },
      {
        "w": "Woman with a Fan",
        "d": "Picasso portrait built from angular planes"
      },
      {
        "w": "The Tower of Blue Horses",
        "d": "Franz Marc expressionist animal painting"
      },
      {
        "w": "Cross in the Mountains",
        "d": "Friedrich altarpiece merging landscape and devotion"
      },
      {
        "w": "I and the Village",
        "d": "Chagall painting of memory, folklore and village life"
      },
      {
        "w": "Suprematist Composition",
        "d": "Malevich arrangement of floating geometric forms"
      },
      {
        "w": "The Red Room",
        "d": "Matisse decorative interior of intense flat color"
      },
      {
        "w": "Sky and Water I",
        "d": "Escher tessellation shifting birds into fish"
      },
      {
        "w": "Portrait of Dora Maar",
        "d": "Picasso portrait of the artist and photographer"
      },
      {
        "w": "The Red Tower",
        "d": "de Chirico metaphysical cityscape with a looming tower"
      },
      {
        "w": "Three Musicians",
        "d": "Picasso synthetic cubist scene of masked performers"
      },
      {
        "w": "Portrait of Ambroise Vollard",
        "d": "Picasso cubist portrait of the art dealer"
      },
      {
        "w": "Broadway Boogie Woogie",
        "d": "Mondrian abstract grid inspired by New York rhythm"
      },
      {
        "w": "Nighthawks",
        "d": "Hopper painting of a late-night diner and urban loneliness"
      },
      {
        "w": "American Gothic",
        "d": "Grant Wood image of a farmer and daughter before a house"
      },
      {
        "w": "The Persistence of Memory",
        "d": "Dalí surreal landscape with melting clocks"
      },
      {
        "w": "The Treachery of Images",
        "d": "Magritte painting declaring that a pipe is not a pipe"
      },
      {
        "w": "No. 5, 1948",
        "d": "Pollock drip painting known for dense layered abstraction"
      }
    ]
  },
  {
    "name": "famous sculptures & statues",
    "tags": {
      "a": "human",
      "b": "art",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "David",
        "d": "Michelangelo marble hero standing before battle with Goliath"
      },
      {
        "w": "Venus de Milo",
        "d": "Ancient Greek marble Aphrodite discovered on Milos without arms"
      },
      {
        "w": "The Thinker",
        "d": "Rodin bronze figure absorbed in muscular contemplation"
      },
      {
        "w": "Rodin’s The Kiss",
        "d": "Rodin marble group of lovers in an embrace"
      },
      {
        "w": "Laocoon and His Sons",
        "d": "Ancient group of a Trojan priest and sons attacked by serpents"
      },
      {
        "w": "Discobolus",
        "d": "Greek statue of a discus thrower known through Roman copies"
      },
      {
        "w": "Pieta",
        "d": "Michelangelo sculpture of Mary holding the dead Christ"
      },
      {
        "w": "Moses",
        "d": "Michelangelo statue for the tomb of Pope Julius II"
      },
      {
        "w": "Gattamelata",
        "d": "Donatello equestrian statue of the condottiere in Padua"
      },
      {
        "w": "Athena Parthenos",
        "d": "Lost chryselephantine statue by Phidias once inside the Parthenon"
      },
      {
        "w": "Head of Nefertiti",
        "d": "Painted bust of the Egyptian queen from Amarna"
      },
      {
        "w": "Michelangelo’s Slaves",
        "d": "Unfinished figures that seem to struggle out of marble"
      },
      {
        "w": "Balzac by Rodin",
        "d": "Rodin monument to the novelist, controversial for its abstraction"
      },
      {
        "w": "Brancusi’s The Kiss",
        "d": "Compact limestone couple reduced to simple geometric forms"
      },
      {
        "w": "Bird in Space",
        "d": "Brancusi polished form suggesting flight rather than anatomy"
      },
      {
        "w": "Riace Bronzes",
        "d": "Two Greek bronze warriors recovered from the sea near Calabria"
      },
      {
        "w": "Equestrian Marcus Aurelius",
        "d": "Ancient Roman bronze emperor on horseback"
      },
      {
        "w": "Ecstasy of Saint Teresa",
        "d": "Bernini chapel group of mystical vision and theatrical light"
      },
      {
        "w": "Apollo and Daphne",
        "d": "Bernini marble moment of Daphne turning into a laurel tree"
      },
      {
        "w": "Donatello’s David",
        "d": "Early Renaissance bronze nude of David after victory"
      },
      {
        "w": "Winged Victory of Samothrace",
        "d": "Hellenistic Nike statue displayed at the Louvre"
      },
      {
        "w": "Unique Forms of Continuity in Space",
        "d": "Boccioni futurist figure striding through motion"
      },
      {
        "w": "Sleeping Muse",
        "d": "Brancusi bronze head reduced to an oval dream form"
      },
      {
        "w": "Little Dancer Aged Fourteen",
        "d": "Degas sculpture of a young ballet student"
      },
      {
        "w": "Minin and Pozharsky Monument",
        "d": "Moscow sculptural monument to the leaders of the 1612 militia"
      },
      {
        "w": "Dying Gaul",
        "d": "Ancient statue of a wounded warrior in defeat"
      },
      {
        "w": "Aphrodite of Knidos",
        "d": "Praxiteles statue famous as a landmark of Greek nude sculpture"
      },
      {
        "w": "Perseus with the Head of Medusa",
        "d": "Cellini bronze in Florence showing Perseus after the killing"
      },
      {
        "w": "Rape of Proserpina",
        "d": "Bernini marble group with dramatic flesh and motion"
      },
      {
        "w": "The Burghers of Calais",
        "d": "Rodin group honoring citizens who surrendered to save their city"
      },
      {
        "w": "Walking Man",
        "d": "Giacometti elongated bronze figure of existential movement"
      },
      {
        "w": "Maman",
        "d": "Louise Bourgeois giant spider sculpture about motherhood and fear"
      },
      {
        "w": "Cloud Gate",
        "d": "Anish Kapoor mirrored public sculpture in Chicago"
      },
      {
        "w": "Balloon Dog",
        "d": "Jeff Koons polished steel sculpture mimicking an inflated toy"
      },
      {
        "w": "The Gates of Hell",
        "d": "Rodin monumental portal inspired by Dante"
      }
    ]
  },
  {
    "name": "monumental statues & public memorials",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Christ the Redeemer",
        "d": "Art Deco statue of Christ overlooking Rio de Janeiro"
      },
      {
        "w": "Statue of Liberty",
        "d": "New York Harbor monument symbolizing liberty and immigration"
      },
      {
        "w": "Great Sphinx of Giza",
        "d": "Colossal reclining guardian with human head and lion body"
      },
      {
        "w": "Moai",
        "d": "Large stone ancestor figures carved on Easter Island"
      },
      {
        "w": "Terracotta Army",
        "d": "Thousands of clay soldiers buried with Qin Shi Huang"
      },
      {
        "w": "Motherland Calls",
        "d": "Huge Volgograd monument of a woman raising a sword"
      },
      {
        "w": "Mount Rushmore",
        "d": "South Dakota mountain carving of four U.S. presidents"
      },
      {
        "w": "Manneken Pis",
        "d": "Small Brussels fountain statue of a urinating boy"
      },
      {
        "w": "Copenhagen Little Mermaid",
        "d": "Copenhagen bronze inspired by Hans Christian Andersen"
      },
      {
        "w": "Nelson’s Column",
        "d": "London Trafalgar Square monument to Admiral Nelson"
      },
      {
        "w": "Arc de Triomphe",
        "d": "Paris monument honoring French military victories"
      },
      {
        "w": "Brandenburg Gate",
        "d": "Berlin neoclassical gate turned national symbol"
      },
      {
        "w": "Gateway Arch",
        "d": "St. Louis stainless-steel arch memorializing westward expansion"
      },
      {
        "w": "Crazy Horse Memorial",
        "d": "Unfinished South Dakota mountain carving of the Lakota leader"
      },
      {
        "w": "African Renaissance Monument",
        "d": "Dakar bronze monument to African renewal"
      },
      {
        "w": "Mamayev Kurgan",
        "d": "Volgograd memorial complex around the Battle of Stalingrad"
      },
      {
        "w": "Marine Corps War Memorial",
        "d": "Iwo Jima flag-raising monument near Washington, D.C."
      },
      {
        "w": "Lincoln Memorial",
        "d": "Washington monument with a seated statue of Abraham Lincoln"
      },
      {
        "w": "Jefferson Memorial",
        "d": "Washington rotunda honoring Thomas Jefferson"
      },
      {
        "w": "Mao Zedong Mausoleum",
        "d": "Beijing memorial hall containing Mao’s preserved body"
      },
      {
        "w": "Atatürk Mausoleum",
        "d": "Ankara memorial complex for Mustafa Kemal Atatürk"
      },
      {
        "w": "Lenin Mausoleum",
        "d": "Red Square tomb containing Lenin’s embalmed body"
      },
      {
        "w": "Valley of the Fallen",
        "d": "Spanish monument complex tied to Franco-era memory"
      },
      {
        "w": "Mother Armenia",
        "d": "Yerevan statue replacing a former Stalin monument"
      },
      {
        "w": "Freedom Monument Riga",
        "d": "Riga monument of a woman holding three stars"
      },
      {
        "w": "Buzludzha Monument",
        "d": "Bulgarian communist-era monument shaped like a flying saucer"
      },
      {
        "w": "Monument to the Discoveries",
        "d": "Lisbon riverside monument to Portuguese exploration"
      },
      {
        "w": "Tugu Negara",
        "d": "Malaysian national monument honoring fallen soldiers"
      },
      {
        "w": "Statue of Unity",
        "d": "India’s colossal statue of Vallabhbhai Patel"
      },
      {
        "w": "Ushiku Daibutsu",
        "d": "Japanese giant Buddha statue in Ibaraki Prefecture"
      },
      {
        "w": "Laykyun Sekkya",
        "d": "Myanmar standing Buddha among the world’s tallest statues"
      },
      {
        "w": "Spring Temple Buddha",
        "d": "Chinese colossal Vairocana Buddha statue"
      },
      {
        "w": "The Motherland Monument Kyiv",
        "d": "Kyiv stainless-steel statue holding sword and shield"
      },
      {
        "w": "Korean War Veterans Memorial",
        "d": "Washington memorial with stainless-steel soldiers on patrol"
      },
      {
        "w": "Vietnam Veterans Memorial",
        "d": "Washington wall listing names of U.S. war dead"
      }
    ]
  },
  {
    "name": "fashion houses & luxury brands",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Chanel",
        "d": "French house associated with tweed suits, No. 5 and the double C logo"
      },
      {
        "w": "Dior",
        "d": "Paris house founded by Christian Dior and the New Look"
      },
      {
        "w": "Hermès",
        "d": "Luxury house known for leather goods, scarves and equestrian roots"
      },
      {
        "w": "Valentino",
        "d": "Italian couture house known for red gowns and romantic glamour"
      },
      {
        "w": "Prada",
        "d": "Milan house famous for intellectual minimalism and nylon bags"
      },
      {
        "w": "Givenchy",
        "d": "French house linked to Audrey Hepburn and refined couture"
      },
      {
        "w": "Saint Laurent house",
        "d": "Paris fashion house known for Le Smoking and modern luxury"
      },
      {
        "w": "Louis Vuitton",
        "d": "French luxury house built from trunks, monograms and leather goods"
      },
      {
        "w": "Gucci",
        "d": "Italian brand known for horsebit loafers and maximalist revivals"
      },
      {
        "w": "Burberry",
        "d": "British house associated with trench coats and check pattern"
      },
      {
        "w": "Cartier",
        "d": "French jewelry house known for watches, panthers and royal clients"
      },
      {
        "w": "Tiffany & Co.",
        "d": "American jewelry house famous for its blue box"
      },
      {
        "w": "Bulgari",
        "d": "Roman jewelry house known for colored stones and serpents"
      },
      {
        "w": "Fendi",
        "d": "Italian house known for fur, bags and the Baguette"
      },
      {
        "w": "Bottega Veneta",
        "d": "Italian house famous for intrecciato woven leather"
      },
      {
        "w": "Alexander McQueen",
        "d": "British house known for dramatic tailoring and runway theater"
      },
      {
        "w": "Celine",
        "d": "French house associated with clean luxury and leather goods"
      },
      {
        "w": "Loewe",
        "d": "Spanish house famous for leather craft and sculptural fashion"
      },
      {
        "w": "Miu Miu",
        "d": "Prada’s younger sister label with playful styling"
      },
      {
        "w": "Lacoste",
        "d": "French brand built around the crocodile polo shirt"
      },
      {
        "w": "Ralph Lauren",
        "d": "American brand built around preppy and western imagery"
      },
      {
        "w": "Calvin Klein",
        "d": "American brand famous for minimalism, denim and underwear"
      },
      {
        "w": "Tommy Hilfiger",
        "d": "American brand built around red-white-blue sportswear"
      },
      {
        "w": "Moncler",
        "d": "Luxury outerwear brand known for down jackets"
      },
      {
        "w": "Stone Island",
        "d": "Italian technical sportswear brand known for fabric research"
      },
      {
        "w": "Off-White",
        "d": "Streetwear-luxury label founded by Virgil Abloh"
      },
      {
        "w": "Massimo Dutti",
        "d": "Spanish Inditex label focused on polished basics"
      },
      {
        "w": "Mango",
        "d": "Spanish high-street fashion brand"
      },
      {
        "w": "Jil Sander",
        "d": "German house associated with severe minimalism"
      },
      {
        "w": "Versace",
        "d": "Italian house known for Medusa logo and bold glamour"
      },
      {
        "w": "Balenciaga",
        "d": "House known for Cristóbal Balenciaga and later avant-garde street luxury"
      },
      {
        "w": "Armani",
        "d": "Italian house famous for soft tailoring and restrained elegance"
      },
      {
        "w": "Gaultier Paris",
        "d": "French fashion house known for corsets, stripes and theatrical perfume bottles"
      },
      {
        "w": "Comme des Garçons",
        "d": "Rei Kawakubo label known for conceptual black forms"
      },
      {
        "w": "Maison Margiela",
        "d": "Paris house associated with deconstruction and anonymous white labels"
      }
    ]
  },
  {
    "name": "jewelry craft & famous jewels",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Hope Diamond",
        "d": "Deep-blue diamond in the Smithsonian with a legendary curse"
      },
      {
        "w": "Koh-i-Noor",
        "d": "Historic diamond now set in the British Crown Jewels"
      },
      {
        "w": "Cullinan Diamond",
        "d": "Largest gem-quality rough diamond ever found"
      },
      {
        "w": "Tiffany setting",
        "d": "Six-prong ring setting that lifts a stone above the band"
      },
      {
        "w": "Cabochon",
        "d": "Smooth rounded gem cut without facets"
      },
      {
        "w": "Marquise cut",
        "d": "Elongated pointed oval cut named for courtly legend"
      },
      {
        "w": "Emerald cut",
        "d": "Rectangular step cut with clipped corners"
      },
      {
        "w": "Asscher cut",
        "d": "Square step cut associated with Art Deco jewelry"
      },
      {
        "w": "Pavé setting",
        "d": "Setting where many small stones cover a surface like pavement"
      },
      {
        "w": "Filigree",
        "d": "Delicate jewelry work made from twisted metal threads"
      },
      {
        "w": "Cloisonné enamel",
        "d": "Enamel technique using metal partitions to hold colored glass"
      },
      {
        "w": "Guilloché enamel",
        "d": "Engine-turned pattern covered with translucent enamel"
      },
      {
        "w": "Cameo",
        "d": "Relief carving in layered stone or shell"
      },
      {
        "w": "Intaglio",
        "d": "Carved design cut into a gem or seal surface"
      },
      {
        "w": "Signet ring",
        "d": "Ring engraved with a family crest or identifying seal"
      },
      {
        "w": "Tiara",
        "d": "Formal jeweled head ornament worn on ceremonial occasions"
      },
      {
        "w": "Diadem",
        "d": "Crown-like headband associated with royalty"
      },
      {
        "w": "Brooch",
        "d": "Decorative pin worn on clothing"
      },
      {
        "w": "Tennis bracelet",
        "d": "Flexible line bracelet popularized by Chris Evert"
      },
      {
        "w": "Lavalier necklace",
        "d": "Pendant necklace hanging from a fine chain"
      },
      {
        "w": "Rivière necklace",
        "d": "Necklace made from a continuous line of graduated stones"
      },
      {
        "w": "Art Deco jewelry",
        "d": "Geometric jewelry style of the 1920s and 1930s"
      },
      {
        "w": "Fabergé egg",
        "d": "Jeweled imperial Easter egg made by the House of Fabergé"
      },
      {
        "w": "Cartier panther",
        "d": "Feline motif that became a Cartier signature"
      },
      {
        "w": "Bulgari Serpenti",
        "d": "Snake-shaped jewelry and watches from Bulgari"
      },
      {
        "w": "Van Cleef Alhambra",
        "d": "Four-leaf clover jewelry motif by Van Cleef & Arpels"
      },
      {
        "w": "Mikimoto pearls",
        "d": "Cultured pearls associated with Kokichi Mikimoto"
      },
      {
        "w": "Black opal",
        "d": "Dark-bodied opal prized for flashes of color"
      },
      {
        "w": "Paraiba tourmaline",
        "d": "Vivid blue-green copper-bearing tourmaline"
      },
      {
        "w": "Alexandrite effect",
        "d": "Gem color change from greenish daylight to reddish incandescent light"
      },
      {
        "w": "Rhodium plating",
        "d": "Thin rhodium layer used to brighten white gold"
      },
      {
        "w": "Hallmarking",
        "d": "Official marking of precious-metal purity"
      },
      {
        "w": "Lost-wax casting",
        "d": "Jewelry casting method using a wax model"
      },
      {
        "w": "Mokume-gane",
        "d": "Japanese metalworking pattern resembling wood grain"
      },
      {
        "w": "Granulation",
        "d": "Ancient technique of soldering tiny metal spheres onto a surface"
      }
    ]
  },
  {
    "name": "flowers & gardening",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Peony",
        "d": "Showy garden flower prized for large fragrant blooms"
      },
      {
        "w": "Hydrangea",
        "d": "Shrub with ball-shaped flower clusters that can change color by soil"
      },
      {
        "w": "Orchid",
        "d": "Large plant family with elaborate flowers and specialized pollination"
      },
      {
        "w": "Lavender",
        "d": "Aromatic purple plant used in gardens, perfumes and cooking"
      },
      {
        "w": "Rose",
        "d": "Classic flowering shrub with thorns and many cultivated varieties"
      },
      {
        "w": "Tulip",
        "d": "Spring bulb flower famously traded during Dutch tulip mania"
      },
      {
        "w": "Magnolia",
        "d": "Tree or shrub with large waxy blossoms"
      },
      {
        "w": "Jasmine",
        "d": "Fragrant flowering vine or shrub used in tea and perfume"
      },
      {
        "w": "Camellia",
        "d": "Glossy-leaved shrub with formal winter or spring flowers"
      },
      {
        "w": "Chrysanthemum",
        "d": "Autumn flower important in East Asian and European gardening"
      },
      {
        "w": "Iris",
        "d": "Flower named for the rainbow, with sword-like leaves"
      },
      {
        "w": "Lily",
        "d": "Bulb flower with large trumpet-shaped blooms"
      },
      {
        "w": "Dahlia",
        "d": "Tuberous flower with many forms and bright colors"
      },
      {
        "w": "Violet",
        "d": "Small purple flower also used as a scent and flavor"
      },
      {
        "w": "Daffodil",
        "d": "Spring narcissus flower with a central trumpet"
      },
      {
        "w": "Gladiolus",
        "d": "Tall spike flower named for a small sword"
      },
      {
        "w": "Azalea",
        "d": "Rhododendron relative grown for masses of spring flowers"
      },
      {
        "w": "Begonia",
        "d": "Shade-loving plant with colorful flowers or foliage"
      },
      {
        "w": "Clematis",
        "d": "Climbing vine with large star-like flowers"
      },
      {
        "w": "Wisteria",
        "d": "Woody vine with hanging clusters of purple flowers"
      },
      {
        "w": "Ikebana",
        "d": "Japanese art of arranging flowers and branches"
      },
      {
        "w": "Topiary",
        "d": "Training shrubs into geometric or figurative shapes"
      },
      {
        "w": "Greenhouse",
        "d": "Glass or plastic structure for controlled plant growing"
      },
      {
        "w": "Herbarium",
        "d": "Preserved plant collection used for study"
      },
      {
        "w": "Bonsai",
        "d": "Japanese art of growing miniature shaped trees"
      },
      {
        "w": "Hyacinth",
        "d": "Fragrant spring bulb with dense flower spikes"
      },
      {
        "w": "Lilac",
        "d": "Fragrant spring shrub with purple, white or pink flowers"
      },
      {
        "w": "Rhododendron",
        "d": "Evergreen shrub with large clusters of flowers"
      },
      {
        "w": "Freesia",
        "d": "Fragrant cut flower with funnel-shaped blossoms"
      },
      {
        "w": "Anemone",
        "d": "Flower whose name means windflower"
      },
      {
        "w": "Lisianthus",
        "d": "Elegant cut flower also called eustoma"
      },
      {
        "w": "Ranunculus",
        "d": "Layered spring flower resembling a small peony"
      },
      {
        "w": "Poppy",
        "d": "Papery flower associated with remembrance and opium species"
      },
      {
        "w": "Alstroemeria",
        "d": "Cut flower also called Peruvian lily"
      },
      {
        "w": "Amaryllis",
        "d": "Large winter bulb flower often grown indoors"
      }
    ]
  },
  {
    "name": "colonies & decolonization",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "British Raj",
        "d": "British rule in India from 1858 to 1947"
      },
      {
        "w": "French Algeria",
        "d": "French colony and settler society that fought a brutal war of independence"
      },
      {
        "w": "Belgian Congo",
        "d": "Central African colony notorious for forced labor and extraction"
      },
      {
        "w": "Portuguese Brazil",
        "d": "Major Portuguese colony that became independent in 1822"
      },
      {
        "w": "Dutch East Indies",
        "d": "Netherlands colony that became Indonesia after a war of independence"
      },
      {
        "w": "French Indochina",
        "d": "French colonial federation including Vietnam, Laos and Cambodia"
      },
      {
        "w": "German South West Africa",
        "d": "German colony in present-day Namibia, site of the Herero and Nama genocide"
      },
      {
        "w": "Italian Libya",
        "d": "North African colony conquered and ruled by Italy"
      },
      {
        "w": "Portuguese Angola",
        "d": "African colony that fought a long liberation war"
      },
      {
        "w": "British Mandate",
        "d": "League of Nations mandate system administered by Britain"
      },
      {
        "w": "Conquista",
        "d": "Spanish conquest of Indigenous polities in the Americas"
      },
      {
        "w": "Dutch East India Company",
        "d": "Chartered company that ruled trade posts and colonies in Asia"
      },
      {
        "w": "Encomienda",
        "d": "Spanish colonial labor and tribute system in the Americas"
      },
      {
        "w": "Direct rule",
        "d": "Colonial administration through officials from the imperial power"
      },
      {
        "w": "Protectorate",
        "d": "Colonial arrangement preserving local rulers under foreign control"
      },
      {
        "w": "Cape Colony",
        "d": "British and Dutch colony at the southern tip of Africa"
      },
      {
        "w": "Berlin Conference",
        "d": "1884-85 meeting that formalized the Scramble for Africa"
      },
      {
        "w": "Settler colony",
        "d": "Colony where incoming settlers became a dominant political force"
      },
      {
        "w": "Trading post",
        "d": "Commercial outpost used as a foothold for empire"
      },
      {
        "w": "French Madagascar",
        "d": "French colony on the island of Madagascar"
      },
      {
        "w": "Opium Wars",
        "d": "Wars that forced China into unequal treaties with Britain and France"
      },
      {
        "w": "Rhodesia",
        "d": "White-minority state that later became Zimbabwe"
      },
      {
        "w": "East India Company",
        "d": "British company that became a territorial power in India"
      },
      {
        "w": "Gold Coast",
        "d": "British West African colony that became Ghana"
      },
      {
        "w": "French West Africa",
        "d": "Federation of French colonies across West Africa"
      },
      {
        "w": "Balfour Declaration",
        "d": "1917 British statement supporting a Jewish national home in Palestine"
      },
      {
        "w": "Bandung Conference",
        "d": "1955 Afro-Asian conference symbolizing anti-colonial solidarity"
      },
      {
        "w": "Year of Africa",
        "d": "1960, when many African colonies became independent"
      },
      {
        "w": "Viet Minh",
        "d": "Vietnamese anti-colonial movement led by Ho Chi Minh"
      },
      {
        "w": "Sukarno",
        "d": "First president of Indonesia and anti-colonial leader"
      },
      {
        "w": "Algerian War",
        "d": "War of independence against France from 1954 to 1962"
      },
      {
        "w": "Timor-Leste",
        "d": "Former Portuguese colony later occupied by Indonesia before independence"
      },
      {
        "w": "Mau Mau uprising",
        "d": "Kenyan anti-colonial rebellion against British rule"
      },
      {
        "w": "Simon Bolívar",
        "d": "Leader of independence movements in northern South America"
      },
      {
        "w": "Frantz Fanon",
        "d": "Anti-colonial thinker and author of The Wretched of the Earth"
      }
    ]
  },
  {
    "name": "pharaohs of ancient Egypt",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Narmer",
        "d": "Early king often linked to the unification of Upper and Lower Egypt"
      },
      {
        "w": "Djoser",
        "d": "Old Kingdom pharaoh associated with the Step Pyramid at Saqqara"
      },
      {
        "w": "Sneferu",
        "d": "Pharaoh who built major pyramids at Meidum and Dahshur"
      },
      {
        "w": "Khufu",
        "d": "Old Kingdom ruler traditionally credited with the Great Pyramid"
      },
      {
        "w": "Khafre",
        "d": "Fourth Dynasty pharaoh linked to the second pyramid at Giza"
      },
      {
        "w": "Menkaure",
        "d": "Pharaoh associated with the smallest of the three main Giza pyramids"
      },
      {
        "w": "Mentuhotep II",
        "d": "Ruler who reunified Egypt and began the Middle Kingdom"
      },
      {
        "w": "Senusret I",
        "d": "Middle Kingdom pharaoh known for building and administrative strength"
      },
      {
        "w": "Senusret III",
        "d": "Powerful Middle Kingdom ruler remembered for Nubian campaigns"
      },
      {
        "w": "Amenemhat III",
        "d": "Middle Kingdom pharaoh associated with major irrigation and building works"
      },
      {
        "w": "Ahmose I",
        "d": "Founder of the Eighteenth Dynasty who expelled the Hyksos"
      },
      {
        "w": "Hatshepsut pharaoh",
        "d": "Female pharaoh known for trade expeditions and Deir el-Bahri temple"
      },
      {
        "w": "Thutmose I",
        "d": "Eighteenth Dynasty ruler who campaigned into Nubia and Syria"
      },
      {
        "w": "Thutmose III",
        "d": "Warrior pharaoh whose campaigns expanded Egypt’s empire"
      },
      {
        "w": "Amenhotep III",
        "d": "Wealthy New Kingdom ruler known for diplomacy and monument building"
      },
      {
        "w": "Akhenaten",
        "d": "Pharaoh who promoted the worship of Aten and founded Amarna"
      },
      {
        "w": "Smenkhkare",
        "d": "Obscure Amarna-period ruler with debated identity"
      },
      {
        "w": "Ay",
        "d": "Successor after Tutankhamun and a senior official of the Amarna age"
      },
      {
        "w": "Horemheb",
        "d": "General who became pharaoh and restored traditional order"
      },
      {
        "w": "Seti I",
        "d": "Nineteenth Dynasty pharaoh known for military campaigns and fine reliefs"
      },
      {
        "w": "Ramesses the Great",
        "d": "Long-reigning pharaoh associated with Kadesh and Abu Simbel"
      },
      {
        "w": "Merneptah",
        "d": "Pharaoh whose victory stele contains an early reference to Israel"
      },
      {
        "w": "Ramesses III",
        "d": "New Kingdom ruler who fought the Sea Peoples"
      },
      {
        "w": "Psusennes I",
        "d": "Tanis ruler whose intact silver coffin became a major discovery"
      },
      {
        "w": "Shoshenq I",
        "d": "Libyan-origin pharaoh often linked with biblical Shishak"
      },
      {
        "w": "Taharqa",
        "d": "Kushite pharaoh of the Twenty-fifth Dynasty"
      },
      {
        "w": "Necho II",
        "d": "Saite ruler who sponsored naval and canal projects"
      },
      {
        "w": "Psamtik I",
        "d": "Saite pharaoh who reunified Egypt after Assyrian domination"
      },
      {
        "w": "Amasis II",
        "d": "Late Period pharaoh known for prosperity and Greek contacts"
      },
      {
        "w": "Nectanebo II",
        "d": "Last native Egyptian pharaoh before Persian conquest"
      },
      {
        "w": "Ptolemy I Soter",
        "d": "Macedonian general who founded the Ptolemaic dynasty"
      },
      {
        "w": "Ptolemy II Philadelphus",
        "d": "Ptolemaic ruler linked to Alexandria’s cultural power"
      },
      {
        "w": "Ptolemy V Epiphanes",
        "d": "Ruler named in the Rosetta Stone decree"
      },
      {
        "w": "Cleopatra as pharaoh",
        "d": "Last active ruler of Ptolemaic Egypt"
      },
      {
        "w": "Twosret",
        "d": "Female ruler at the end of the Nineteenth Dynasty"
      }
    ]
  },
  {
    "name": "Cold War events & symbols",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Berlin Wall",
        "d": "Concrete barrier dividing East and West Berlin from 1961 to 1989"
      },
      {
        "w": "Iron Curtain",
        "d": "Churchill phrase for the division between Soviet and Western blocs"
      },
      {
        "w": "Truman Doctrine",
        "d": "U.S. policy of containing communism after 1947"
      },
      {
        "w": "Marshall Plan",
        "d": "American reconstruction aid program for postwar Western Europe"
      },
      {
        "w": "Warsaw Pact",
        "d": "Soviet-led military alliance created in 1955"
      },
      {
        "w": "Arms race",
        "d": "U.S.-Soviet competition to build larger and better weapons arsenals"
      },
      {
        "w": "Space race",
        "d": "Competition for prestige through satellites, humans in orbit and Moon landings"
      },
      {
        "w": "Gagarin’s flight",
        "d": "1961 orbital flight that made Yuri Gagarin the first human in space"
      },
      {
        "w": "McCarthyism",
        "d": "American anti-communist investigations and accusations of the early Cold War"
      },
      {
        "w": "Berlin Airlift",
        "d": "Western supply operation during the Soviet blockade of West Berlin"
      },
      {
        "w": "Prague Spring",
        "d": "1968 reform movement in Czechoslovakia crushed by Warsaw Pact troops"
      },
      {
        "w": "Brezhnev Doctrine",
        "d": "Soviet claim of the right to intervene in socialist countries"
      },
      {
        "w": "Strategic Defense Initiative",
        "d": "Reagan missile-defense plan nicknamed Star Wars"
      },
      {
        "w": "Korean War",
        "d": "1950-53 war that hardened Cold War divisions in Asia"
      },
      {
        "w": "Vietnam War",
        "d": "Conflict that became a central Cold War proxy war"
      },
      {
        "w": "Cominform",
        "d": "Soviet-led organization coordinating communist parties"
      },
      {
        "w": "Red Scare",
        "d": "Fear-driven anti-communist politics in the United States"
      },
      {
        "w": "Fall of the Wall",
        "d": "1989 opening and collapse of the Berlin Wall"
      },
      {
        "w": "Reaganomics",
        "d": "Market-oriented policies of Ronald Reagan in the 1980s"
      },
      {
        "w": "Budapest 1956",
        "d": "Hungarian uprising crushed by Soviet forces"
      },
      {
        "w": "Suez Crisis",
        "d": "1956 crisis revealing the limits of old European empires"
      },
      {
        "w": "Fulton speech",
        "d": "Churchill speech popularizing the Iron Curtain metaphor"
      },
      {
        "w": "Afghan War",
        "d": "Soviet intervention in Afghanistan from 1979 to 1989"
      },
      {
        "w": "Cuban Missile Crisis",
        "d": "1962 nuclear standoff over Soviet missiles in Cuba"
      },
      {
        "w": "VOA broadcasts",
        "d": "U.S. broadcasts aimed partly at audiences behind the Iron Curtain"
      },
      {
        "w": "Détente",
        "d": "Period of reduced U.S.-Soviet tensions in the 1970s"
      },
      {
        "w": "Nuclear parity",
        "d": "Strategic balance that made nuclear war mutually catastrophic"
      },
      {
        "w": "Non-Aligned Movement",
        "d": "States trying to avoid formal alignment with either Cold War bloc"
      },
      {
        "w": "Checkpoint Charlie",
        "d": "Berlin crossing point and symbol of Cold War confrontation"
      },
      {
        "w": "SALT I",
        "d": "Arms-control agreement limiting strategic nuclear weapons"
      },
      {
        "w": "Helsinki Final Act",
        "d": "1975 agreement linking borders, cooperation and human rights"
      },
      {
        "w": "Polish Solidarity",
        "d": "Trade-union movement that challenged communist rule in Poland"
      },
      {
        "w": "Soviet dissidents",
        "d": "Activists and writers opposing repression within the USSR"
      },
      {
        "w": "Kitchen Debate",
        "d": "1959 Nixon-Khrushchev debate staged in a model kitchen"
      },
      {
        "w": "Able Archer 83",
        "d": "NATO exercise that heightened fears of nuclear escalation"
      }
    ]
  },
  {
    "name": "Cold War operations & secret missions",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Operation Ajax",
        "d": "1953 CIA-MI6 operation against Iranian prime minister Mohammad Mossadegh"
      },
      {
        "w": "Project MKUltra",
        "d": "CIA program of illegal experiments on mind control and drugs"
      },
      {
        "w": "Operation Cobra Mist",
        "d": "British-American over-the-horizon radar project in England"
      },
      {
        "w": "Operation Mongoose",
        "d": "U.S. covert program against Fidel Castro’s Cuba"
      },
      {
        "w": "Operation Gold",
        "d": "CIA and MI6 tunnel operation to tap Soviet communications in Berlin"
      },
      {
        "w": "Operation Gladio",
        "d": "Secret stay-behind networks prepared in Western Europe"
      },
      {
        "w": "ECHELON",
        "d": "Signals-intelligence collection network associated with Five Eyes"
      },
      {
        "w": "U-2 incident",
        "d": "1960 shootdown of Francis Gary Powers over the Soviet Union"
      },
      {
        "w": "Phoenix Program",
        "d": "CIA-linked counterinsurgency program during the Vietnam War"
      },
      {
        "w": "Operation Infektion",
        "d": "Soviet disinformation campaign claiming AIDS was made by the U.S."
      },
      {
        "w": "Operation Condor",
        "d": "South American campaign of repression coordinated by dictatorships"
      },
      {
        "w": "Operation Cyclone",
        "d": "CIA support for Afghan mujahideen against Soviet forces"
      },
      {
        "w": "Cambridge Five",
        "d": "British spy ring that passed secrets to the Soviet Union"
      },
      {
        "w": "Project Rainbow",
        "d": "Experimental U.S. naval camouflage and radar-avoidance project legend"
      },
      {
        "w": "Operation Northwoods",
        "d": "Rejected U.S. plan proposing false-flag pretexts against Cuba"
      },
      {
        "w": "Drop Shot",
        "d": "U.S. war plan for possible conflict with the Soviet Union"
      },
      {
        "w": "COINTELPRO",
        "d": "FBI covert program targeting domestic political groups"
      },
      {
        "w": "Operation Charly",
        "d": "Argentine support operation for anti-communist forces in Central America"
      },
      {
        "w": "Operation Anadyr",
        "d": "Soviet deployment of missiles to Cuba in 1962"
      },
      {
        "w": "Operation Paperclip",
        "d": "U.S. recruitment of German scientists after World War II"
      },
      {
        "w": "VENONA",
        "d": "U.S. program decrypting Soviet intelligence messages"
      },
      {
        "w": "Rosenberg case",
        "d": "Espionage trial of Julius and Ethel Rosenberg"
      },
      {
        "w": "Berlin Tunnel",
        "d": "Western tunnel used to intercept Soviet communications"
      },
      {
        "w": "Operation Ivy Bells",
        "d": "U.S. tapping of Soviet undersea communication cables"
      },
      {
        "w": "Farewell Dossier",
        "d": "French-sourced intelligence on Soviet technology theft networks"
      },
      {
        "w": "Operation Neptune",
        "d": "Czechoslovak disinformation operation involving forged Nazi documents"
      },
      {
        "w": "Operation CHAOS",
        "d": "CIA domestic surveillance program during the Vietnam era"
      },
      {
        "w": "Operation Washtub",
        "d": "U.S. stay-behind plan prepared for Alaska"
      },
      {
        "w": "Operation Sunrise",
        "d": "Secret World War II contacts that shaped early Cold War distrust"
      },
      {
        "w": "Operation Valuable",
        "d": "Western attempt to infiltrate agents into communist Albania"
      },
      {
        "w": "Project Azorian",
        "d": "CIA attempt to recover a sunken Soviet submarine"
      },
      {
        "w": "Operation Mockingbird",
        "d": "Alleged CIA influence operations involving journalists and media"
      },
      {
        "w": "Operation RYAN",
        "d": "Soviet intelligence effort to detect a surprise nuclear attack"
      },
      {
        "w": "Operation Vula",
        "d": "ANC covert network during the late apartheid Cold War context"
      },
      {
        "w": "Operation Menu",
        "d": "Secret U.S. bombing campaign in Cambodia"
      }
    ]
  },
  {
    "name": "natural disasters",
    "tags": {
      "a": "geek",
      "b": "nature",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Spitak earthquake",
        "d": "1988 Armenian earthquake that devastated Spitak and Leninakan"
      },
      {
        "w": "Indian Ocean tsunami",
        "d": "2004 tsunami that killed more than 200,000 people across many countries"
      },
      {
        "w": "Tohoku earthquake",
        "d": "2011 Japanese megathrust quake that triggered a tsunami"
      },
      {
        "w": "Tangshan earthquake",
        "d": "1976 Chinese earthquake among the deadliest of the twentieth century"
      },
      {
        "w": "Haiti earthquake",
        "d": "2010 earthquake that devastated Port-au-Prince"
      },
      {
        "w": "Lisbon earthquake",
        "d": "1755 quake and tsunami that shook European thought"
      },
      {
        "w": "Krakatoa eruption",
        "d": "1883 volcanic eruption heard across the Indian Ocean"
      },
      {
        "w": "Tambora eruption",
        "d": "1815 eruption that helped cause the Year Without a Summer"
      },
      {
        "w": "Vesuvius eruption",
        "d": "AD 79 eruption that buried Pompeii and Herculaneum"
      },
      {
        "w": "Mount St. Helens",
        "d": "1980 explosive eruption in Washington State"
      },
      {
        "w": "Nevado del Ruiz",
        "d": "1985 eruption whose lahars destroyed Armero"
      },
      {
        "w": "Hurricane Katrina",
        "d": "2005 hurricane and flood disaster in New Orleans"
      },
      {
        "w": "Galveston hurricane",
        "d": "1900 hurricane, the deadliest natural disaster in U.S. history"
      },
      {
        "w": "Bhola cyclone",
        "d": "1970 cyclone in East Pakistan that killed hundreds of thousands"
      },
      {
        "w": "Cyclone Nargis",
        "d": "2008 cyclone that devastated Myanmar"
      },
      {
        "w": "Typhoon Haiyan",
        "d": "2013 super typhoon that struck the Philippines"
      },
      {
        "w": "Great Kanto earthquake",
        "d": "1923 earthquake that devastated Tokyo and Yokohama"
      },
      {
        "w": "Sichuan earthquake",
        "d": "2008 earthquake centered in Wenchuan, China"
      },
      {
        "w": "Pakistan floods",
        "d": "2010 floods affecting millions along the Indus basin"
      },
      {
        "w": "Yellow River flood",
        "d": "1887 flood considered one of history’s deadliest natural disasters"
      },
      {
        "w": "Dust Bowl",
        "d": "1930s drought and dust storms across the U.S. Great Plains"
      },
      {
        "w": "Sahel drought",
        "d": "Long drought and famine crisis in West Africa"
      },
      {
        "w": "Black Saturday bushfires",
        "d": "2009 Australian fires in Victoria"
      },
      {
        "w": "Camp Fire",
        "d": "2018 California wildfire that destroyed Paradise"
      },
      {
        "w": "Laki eruption",
        "d": "1783 Icelandic eruption causing climate and famine effects"
      },
      {
        "w": "Eyjafjallajökull eruption",
        "d": "2010 Icelandic eruption that disrupted European air travel"
      },
      {
        "w": "Valdivia earthquake",
        "d": "1960 Chile quake, the largest instrumentally recorded earthquake"
      },
      {
        "w": "Aleppo earthquake",
        "d": "1138 earthquake often listed among the deadliest in history"
      },
      {
        "w": "Daulatpur-Saturia tornado",
        "d": "1989 Bangladesh tornado with catastrophic casualties"
      },
      {
        "w": "Lake Nyos disaster",
        "d": "1986 limnic eruption of carbon dioxide in Cameroon"
      },
      {
        "w": "Armero tragedy",
        "d": "Colombian lahar disaster after the Nevado del Ruiz eruption"
      },
      {
        "w": "Boxing Day tsunami",
        "d": "Another name for the 2004 Indian Ocean tsunami"
      },
      {
        "w": "Hurricane Mitch",
        "d": "1998 hurricane that devastated Central America"
      },
      {
        "w": "Great Chilean earthquake",
        "d": "Common name for the 1960 Valdivia megathrust event"
      },
      {
        "w": "Aegean Sea earthquake",
        "d": "2020 quake affecting İzmir and Samos"
      }
    ]
  },
  {
    "name": "spies & double agents",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "hard"
    },
    "words": [
      {
        "w": "Kim Philby",
        "d": "British intelligence officer and Soviet agent in the Cambridge Five"
      },
      {
        "w": "Guy Burgess",
        "d": "British diplomat and Soviet spy who defected in 1951"
      },
      {
        "w": "Donald Maclean",
        "d": "British diplomat who passed atomic and diplomatic secrets to Moscow"
      },
      {
        "w": "Anthony Blunt",
        "d": "Art historian and Surveyor of the Queen’s Pictures exposed as a Soviet spy"
      },
      {
        "w": "John Cairncross",
        "d": "British civil servant and fifth Cambridge spy"
      },
      {
        "w": "Oleg Gordievsky",
        "d": "KGB officer who secretly worked for Britain and escaped to the West"
      },
      {
        "w": "Aldrich Ames",
        "d": "CIA officer who spied for the Soviet Union and Russia"
      },
      {
        "w": "Robert Hanssen",
        "d": "FBI agent who spied for Moscow for years"
      },
      {
        "w": "Mata Hari",
        "d": "Dutch dancer executed by France as a spy in World War I"
      },
      {
        "w": "Richard Sorge",
        "d": "Soviet intelligence officer active in Tokyo before World War II"
      },
      {
        "w": "Klaus Fuchs",
        "d": "Physicist who passed atomic secrets to the Soviet Union"
      },
      {
        "w": "Rudolf Abel",
        "d": "Soviet illegal intelligence officer arrested in the United States"
      },
      {
        "w": "Francis Gary Powers",
        "d": "U-2 pilot shot down over the Soviet Union in 1960"
      },
      {
        "w": "Sidney Reilly",
        "d": "Adventurer-spy later mythologized as an ace of spies"
      },
      {
        "w": "Virginia Hall",
        "d": "American spy in occupied France known for evading the Gestapo"
      },
      {
        "w": "Noor Inayat Khan",
        "d": "SOE radio operator captured and killed by the Nazis"
      },
      {
        "w": "Nancy Wake",
        "d": "Allied agent and resistance courier in occupied France"
      },
      {
        "w": "Eli Cohen",
        "d": "Israeli spy who penetrated Syrian leadership circles"
      },
      {
        "w": "Markus Wolf",
        "d": "East German intelligence chief nicknamed the man without a face"
      },
      {
        "w": "Hede Massing",
        "d": "Soviet agent involved in prewar espionage networks"
      },
      {
        "w": "Whittaker Chambers",
        "d": "Former Soviet courier who accused Alger Hiss"
      },
      {
        "w": "Alger Hiss",
        "d": "American official convicted of perjury amid espionage accusations"
      },
      {
        "w": "Julius Rosenberg",
        "d": "American executed for conspiracy to commit espionage"
      },
      {
        "w": "Ethel Rosenberg",
        "d": "American executed with Julius Rosenberg in the atomic-spy case"
      },
      {
        "w": "Anna Chapman",
        "d": "Russian sleeper agent arrested in the United States in 2010"
      },
      {
        "w": "Christopher Steele",
        "d": "Former MI6 officer later known for the Trump-Russia dossier"
      },
      {
        "w": "Melita Norwood",
        "d": "British civil servant who passed atomic information to the USSR"
      },
      {
        "w": "George Blake",
        "d": "MI6 officer who became a Soviet double agent"
      },
      {
        "w": "Alexander Litvinenko",
        "d": "Former Russian security officer poisoned in London after defection"
      },
      {
        "w": "Gouzenko",
        "d": "Soviet cipher clerk whose defection exposed espionage in Canada"
      },
      {
        "w": "Jona von Ustinov",
        "d": "German-born agent who worked for British intelligence"
      },
      {
        "w": "Fritz Kolbe",
        "d": "German diplomat who secretly passed Nazi documents to the Allies"
      },
      {
        "w": "Juan Pujol Garcia",
        "d": "Double agent Garbo who misled Germany before D-Day"
      },
      {
        "w": "Dusko Popov",
        "d": "Double agent Tricycle who inspired later spy fiction"
      },
      {
        "w": "Violette Szabo",
        "d": "SOE agent in occupied France, executed at Ravensbrück"
      }
    ]
  },
  {
    "name": "ancient Greece: civilization",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Polis",
        "d": "Self-governing Greek city-state such as Athens or Sparta"
      },
      {
        "w": "Agora",
        "d": "Public marketplace and civic center of a Greek city"
      },
      {
        "w": "Pnyx",
        "d": "Hill in Athens where the democratic citizen assembly met"
      },
      {
        "w": "Areopagus",
        "d": "Athenian council and court associated with an ancient hill"
      },
      {
        "w": "Ostracism",
        "d": "Athenian vote to exile a citizen for ten years"
      },
      {
        "w": "Deme",
        "d": "Local district and unit of Athenian citizenship"
      },
      {
        "w": "Strategos",
        "d": "Elected Athenian military general"
      },
      {
        "w": "Archon",
        "d": "Magistrate title in several Greek city-states"
      },
      {
        "w": "Hoplite",
        "d": "Citizen-soldier infantryman with spear and shield"
      },
      {
        "w": "Phalanx",
        "d": "Dense infantry formation with overlapping shields"
      },
      {
        "w": "Trireme",
        "d": "Greek warship rowed by three banks of oars"
      },
      {
        "w": "Delian League",
        "d": "Athenian-led alliance that became an empire"
      },
      {
        "w": "Peloponnesian League",
        "d": "Spartan-led alliance opposed to Athens"
      },
      {
        "w": "Panhellenic games",
        "d": "Athletic festivals open to Greeks from many city-states"
      },
      {
        "w": "Oracle of Delphi",
        "d": "Sanctuary where Apollo’s priestess delivered prophecies"
      },
      {
        "w": "Symposium",
        "d": "Drinking party with conversation, poetry and music"
      },
      {
        "w": "Oikos",
        "d": "Household as a basic economic and social unit"
      },
      {
        "w": "Metic",
        "d": "Resident foreigner in Athens without citizen rights"
      },
      {
        "w": "Helot",
        "d": "State-owned serf population under Spartan control"
      },
      {
        "w": "Gerousia",
        "d": "Spartan council of elders"
      },
      {
        "w": "Ephor",
        "d": "Spartan magistrate supervising kings and public life"
      },
      {
        "w": "Boule",
        "d": "Council that prepared business for the Athenian assembly"
      },
      {
        "w": "Ecclesia",
        "d": "Citizen assembly of democratic Athens"
      },
      {
        "w": "Sophist",
        "d": "Professional teacher of rhetoric and argument"
      },
      {
        "w": "Socratic method",
        "d": "Questioning technique associated with Socrates"
      },
      {
        "w": "Academy",
        "d": "Plato’s philosophical school outside Athens"
      },
      {
        "w": "Lyceum",
        "d": "Aristotle’s school and research community"
      },
      {
        "w": "Stoa",
        "d": "Covered walkway linked to Stoic philosophy"
      },
      {
        "w": "Mystery cult",
        "d": "Religious rites promising special initiation and secrecy"
      },
      {
        "w": "Eleusinian Mysteries",
        "d": "Major initiation rites connected to Demeter and Persephone"
      },
      {
        "w": "Koiné Greek",
        "d": "Common Greek language spread after Alexander"
      },
      {
        "w": "Macedonian phalanx",
        "d": "Formation using long sarissa pikes under Philip and Alexander"
      },
      {
        "w": "Sacred Band of Thebes",
        "d": "Elite Theban military unit of paired soldiers"
      },
      {
        "w": "Athenian democracy",
        "d": "Direct citizen government developed in classical Athens"
      },
      {
        "w": "Cleisthenes",
        "d": "Athenian reformer often called a founder of democracy"
      }
    ]
  },
  {
    "name": "ancient Rome: civilization",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Mos maiorum",
        "d": "Ancestral custom and moral code valued by Roman elites"
      },
      {
        "w": "Patrician",
        "d": "Member of Rome’s hereditary aristocratic class"
      },
      {
        "w": "Plebeian",
        "d": "Common citizen class that fought for political rights"
      },
      {
        "w": "Tribune of the plebs",
        "d": "Official elected to defend plebeian interests"
      },
      {
        "w": "Consul",
        "d": "One of two annually elected chief magistrates"
      },
      {
        "w": "Praetor",
        "d": "Roman magistrate often responsible for courts and command"
      },
      {
        "w": "Censor",
        "d": "Official conducting census and supervising public morals"
      },
      {
        "w": "Quaestor",
        "d": "Financial magistrate and entry-level political office"
      },
      {
        "w": "Aedile",
        "d": "Magistrate responsible for markets, games and public works"
      },
      {
        "w": "Senate",
        "d": "Council of elite men guiding Roman policy"
      },
      {
        "w": "Comitia centuriata",
        "d": "Assembly organized by military and wealth classes"
      },
      {
        "w": "Twelve Tables",
        "d": "Early written code of Roman law"
      },
      {
        "w": "Paterfamilias",
        "d": "Male head of a Roman household with legal authority"
      },
      {
        "w": "Clientela",
        "d": "Patron-client network central to Roman social life"
      },
      {
        "w": "Roman patronage",
        "d": "Powerful protector relationship central to Roman social life"
      },
      {
        "w": "Equites",
        "d": "Wealthy order below senators, often tied to business and administration"
      },
      {
        "w": "Latifundium",
        "d": "Large agricultural estate worked by slaves or tenants"
      },
      {
        "w": "Manumission",
        "d": "Legal freeing of an enslaved person"
      },
      {
        "w": "Freedman",
        "d": "Former slave with limited but real social opportunities"
      },
      {
        "w": "Legion",
        "d": "Main Roman military unit of heavy infantry"
      },
      {
        "w": "Centurion",
        "d": "Professional officer commanding a century"
      },
      {
        "w": "Cohort",
        "d": "Tactical subdivision of a Roman legion"
      },
      {
        "w": "Auxilia",
        "d": "Non-citizen troops serving alongside Roman legions"
      },
      {
        "w": "Testudo",
        "d": "Shield-roof formation used by Roman soldiers"
      },
      {
        "w": "Triumph",
        "d": "Public victory procession granted to a successful commander"
      },
      {
        "w": "Imperium",
        "d": "Legal power to command armies and hold high office"
      },
      {
        "w": "Princeps",
        "d": "First citizen title used by early emperors"
      },
      {
        "w": "Pax Romana",
        "d": "Long period of relative imperial peace and stability"
      },
      {
        "w": "Edict of Caracalla",
        "d": "Law granting Roman citizenship to free inhabitants of the empire"
      },
      {
        "w": "Bread and circuses",
        "d": "Phrase for food distributions and entertainment as political control"
      },
      {
        "w": "Forum Romanum",
        "d": "Civic and political heart of ancient Rome"
      },
      {
        "w": "Cursus honorum",
        "d": "Sequence of offices in a Roman political career"
      },
      {
        "w": "Pontifex Maximus",
        "d": "Chief priestly title later held by emperors"
      },
      {
        "w": "Auctoritas",
        "d": "Prestige and moral authority in Roman public life"
      },
      {
        "w": "Cato the Younger",
        "d": "Stoic politician famous for opposition to Caesar and defense of the republic"
      }
    ]
  },
  {
    "name": "iconic bands",
    "tags": {
      "a": "human",
      "b": "music",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "The Beatles",
        "d": "Liverpool band that transformed pop music in the 1960s"
      },
      {
        "w": "The Rolling Stones",
        "d": "British rock band built around blues, riffs and swagger"
      },
      {
        "w": "Led Zeppelin",
        "d": "Hard-rock band known for heavy riffs and epic concerts"
      },
      {
        "w": "Queen",
        "d": "British band with theatrical rock and Freddie Mercury vocals"
      },
      {
        "w": "Pink Floyd",
        "d": "Progressive rock band known for concept albums and soundscapes"
      },
      {
        "w": "The Who",
        "d": "British rock band famous for rock operas and explosive shows"
      },
      {
        "w": "Nirvana",
        "d": "Seattle grunge band that brought alternative rock mainstream"
      },
      {
        "w": "Radiohead",
        "d": "British band known for art rock and electronic experimentation"
      },
      {
        "w": "U2",
        "d": "Irish band with arena anthems and political themes"
      },
      {
        "w": "ABBA",
        "d": "Swedish pop group with global disco-era hits"
      },
      {
        "w": "Fleetwood Mac",
        "d": "British-American band whose Rumours became a classic album"
      },
      {
        "w": "The Clash",
        "d": "British punk band mixing politics, reggae and rock"
      },
      {
        "w": "Ramones",
        "d": "New York punk band built on speed, simplicity and hooks"
      },
      {
        "w": "Sex Pistols",
        "d": "British punk band that became a symbol of rebellion"
      },
      {
        "w": "Metallica",
        "d": "Thrash-metal band that became a global stadium act"
      },
      {
        "w": "Black Sabbath",
        "d": "Birmingham band often credited with inventing heavy metal"
      },
      {
        "w": "Deep Purple",
        "d": "Hard-rock band famous for riffs and organ-heavy sound"
      },
      {
        "w": "The Doors",
        "d": "Los Angeles band fronted by Jim Morrison"
      },
      {
        "w": "R.E.M.",
        "d": "American alternative-rock band from Athens, Georgia"
      },
      {
        "w": "Oasis",
        "d": "Britpop band known for rivalry and huge 1990s anthems"
      },
      {
        "w": "Blur",
        "d": "Britpop band that later moved into art rock and experimentation"
      },
      {
        "w": "Depeche Mode",
        "d": "Electronic band that brought synth darkness to stadiums"
      },
      {
        "w": "Kraftwerk",
        "d": "German group whose electronic minimalism shaped modern pop"
      },
      {
        "w": "Talking Heads",
        "d": "New York art-rock band led by David Byrne"
      },
      {
        "w": "The Smiths",
        "d": "Manchester band known for jangly guitars and Morrissey lyrics"
      },
      {
        "w": "The Cure",
        "d": "British post-punk band associated with gothic pop"
      },
      {
        "w": "Pearl Jam",
        "d": "Seattle band and major grunge-era survivor"
      },
      {
        "w": "Red Hot Chili Peppers",
        "d": "Funk-rock band from Los Angeles"
      },
      {
        "w": "Guns N’ Roses",
        "d": "Hard-rock band behind Appetite for Destruction"
      },
      {
        "w": "Aerosmith",
        "d": "American rock band fronted by Steven Tyler"
      },
      {
        "w": "The Beach Boys",
        "d": "California group famous for harmonies and studio innovation"
      },
      {
        "w": "Bee Gees",
        "d": "Pop group central to disco-era sound"
      },
      {
        "w": "The Supremes",
        "d": "Motown vocal group with a string of 1960s hits"
      },
      {
        "w": "The Velvet Underground",
        "d": "New York band influential far beyond its original sales"
      },
      {
        "w": "Joy Division",
        "d": "Manchester post-punk band with a brief, intense legacy"
      }
    ]
  },
  {
    "name": "legendary albums",
    "tags": {
      "a": "human",
      "b": "music",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Abbey Road",
        "d": "Beatles album with the famous zebra-crossing cover"
      },
      {
        "w": "Sgt. Pepper’s Lonely Hearts Club Band",
        "d": "Beatles concept album that became a 1960s landmark"
      },
      {
        "w": "Revolver",
        "d": "Beatles album of studio experimentation and sharp songwriting"
      },
      {
        "w": "The Dark Side of the Moon",
        "d": "Pink Floyd album about time, money and madness"
      },
      {
        "w": "Wish You Were Here",
        "d": "Pink Floyd album reflecting absence and music-industry alienation"
      },
      {
        "w": "Rumours",
        "d": "Fleetwood Mac album made amid romantic breakups"
      },
      {
        "w": "Nevermind",
        "d": "Nirvana album that brought grunge into the mainstream"
      },
      {
        "w": "Pet Sounds",
        "d": "Beach Boys album admired for harmonies and studio craft"
      },
      {
        "w": "Thriller album",
        "d": "Michael Jackson album that became a global pop phenomenon"
      },
      {
        "w": "Purple Rain album",
        "d": "Prince album and film soundtrack of rock, funk and pop"
      },
      {
        "w": "Blue",
        "d": "Joni Mitchell album of intimate singer-songwriter confession"
      },
      {
        "w": "Kind of Blue",
        "d": "Miles Davis modal jazz album and all-time classic"
      },
      {
        "w": "A Love Supreme",
        "d": "John Coltrane spiritual jazz suite"
      },
      {
        "w": "London Calling",
        "d": "The Clash double album mixing punk, reggae and rock"
      },
      {
        "w": "OK Computer",
        "d": "Radiohead album of alienation, technology and art rock"
      },
      {
        "w": "Kid A",
        "d": "Radiohead album that embraced electronics and abstraction"
      },
      {
        "w": "The Joshua Tree",
        "d": "U2 album of American landscapes and anthemic rock"
      },
      {
        "w": "Born to Run album",
        "d": "Bruce Springsteen breakthrough album of escape and yearning"
      },
      {
        "w": "Blood on the Tracks",
        "d": "Bob Dylan album often read as a breakup masterpiece"
      },
      {
        "w": "Highway 61 Revisited",
        "d": "Bob Dylan album with Like a Rolling Stone"
      },
      {
        "w": "What’s Going On",
        "d": "Marvin Gaye soul album about war, poverty and ecology"
      },
      {
        "w": "Songs in the Key of Life",
        "d": "Stevie Wonder double album of soul, pop and social vision"
      },
      {
        "w": "Back to Black",
        "d": "Amy Winehouse album of retro soul and heartbreak"
      },
      {
        "w": "The Miseducation of Lauryn Hill",
        "d": "Lauryn Hill album blending hip-hop, soul and personal testimony"
      },
      {
        "w": "Illmatic",
        "d": "Nas debut album revered as a hip-hop classic"
      },
      {
        "w": "The Chronic",
        "d": "Dr. Dre album that defined G-funk"
      },
      {
        "w": "Enter the Wu-Tang",
        "d": "Wu-Tang Clan debut with raw group mythology"
      },
      {
        "w": "The Velvet Underground & Nico",
        "d": "Experimental rock album with the banana cover"
      },
      {
        "w": "Horses",
        "d": "Patti Smith debut linking punk energy and poetry"
      },
      {
        "w": "Unknown Pleasures",
        "d": "Joy Division debut with the pulsar cover"
      },
      {
        "w": "Remain in Light",
        "d": "Talking Heads album of polyrhythms and anxious funk"
      },
      {
        "w": "Led Zeppelin IV",
        "d": "Rock album containing Stairway to Heaven"
      },
      {
        "w": "Appetite for Destruction",
        "d": "Guns N’ Roses debut of hard rock excess"
      },
      {
        "w": "Never Mind the Bollocks",
        "d": "Sex Pistols album that defined British punk shock"
      },
      {
        "w": "Discovery",
        "d": "Daft Punk album of glossy French house and pop hooks"
      }
    ]
  },
  {
    "name": "perfume: scents & icons",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Chanel No. 5",
        "d": "Aldehydic floral perfume launched in 1921 and made globally iconic"
      },
      {
        "w": "L’Eau par Kenzo",
        "d": "Fresh aquatic-floral fragrance associated with water and transparency"
      },
      {
        "w": "Shalimar",
        "d": "Guerlain oriental perfume inspired by Mughal gardens"
      },
      {
        "w": "Mitsouko",
        "d": "Guerlain chypre with peach and oakmoss character"
      },
      {
        "w": "Jicky",
        "d": "Guerlain fragrance often called a bridge to modern perfumery"
      },
      {
        "w": "Opium",
        "d": "Yves Saint Laurent spicy oriental fragrance launched in 1977"
      },
      {
        "w": "Poison",
        "d": "Dior perfume famous for intense 1980s tuberose drama"
      },
      {
        "w": "Angel",
        "d": "Thierry Mugler gourmand fragrance built around patchouli and sweet notes"
      },
      {
        "w": "CK One",
        "d": "Calvin Klein unisex fragrance of the 1990s"
      },
      {
        "w": "Light Blue",
        "d": "Dolce & Gabbana citrus-woody fragrance associated with summer"
      },
      {
        "w": "Acqua di Gio",
        "d": "Giorgio Armani aquatic fragrance inspired by the sea"
      },
      {
        "w": "Terre d’Hermès",
        "d": "Hermès woody-mineral fragrance by Jean-Claude Ellena"
      },
      {
        "w": "Black Orchid",
        "d": "Tom Ford dark floral fragrance with luxury-gothic styling"
      },
      {
        "w": "Noir de Noir",
        "d": "Tom Ford rose, patchouli and truffle scent"
      },
      {
        "w": "Santal 33",
        "d": "Le Labo sandalwood fragrance that became a niche-perfume phenomenon"
      },
      {
        "w": "Baccarat Rouge 540",
        "d": "Maison Francis Kurkdjian amber-woody perfume with huge projection"
      },
      {
        "w": "Aventus",
        "d": "Creed fragrance associated with pineapple, smoke and status"
      },
      {
        "w": "Portrait of a Lady",
        "d": "Frédéric Malle rose-patchouli perfume by Dominique Ropion"
      },
      {
        "w": "L’Air du Temps",
        "d": "Nina Ricci floral fragrance with dove-shaped bottle"
      },
      {
        "w": "Eau de Cologne",
        "d": "Classic citrus aromatic fragrance family from Cologne tradition"
      },
      {
        "w": "Chypre",
        "d": "Perfume family built around citrus, labdanum and oakmoss"
      },
      {
        "w": "Fougère",
        "d": "Perfume family based on lavender, coumarin and mossy notes"
      },
      {
        "w": "Aldehydes",
        "d": "Sparkling synthetic notes that made Chanel No. 5 famous"
      },
      {
        "w": "Amber accord",
        "d": "Warm resinous accord often using labdanum, vanilla and benzoin"
      },
      {
        "w": "Oud",
        "d": "Resinous agarwood note prized in Middle Eastern perfumery"
      },
      {
        "w": "Vetiver",
        "d": "Dry grassy root note used in masculine and unisex fragrances"
      },
      {
        "w": "Iris butter",
        "d": "Luxurious orris-root material with powdery elegance"
      },
      {
        "w": "Iso E Super",
        "d": "Woody-amber aroma molecule known for a transparent aura"
      },
      {
        "w": "Calone",
        "d": "Marine aroma molecule associated with aquatic 1990s perfumes"
      },
      {
        "w": "Sillage",
        "d": "Trail of scent left by a fragrance in the air"
      },
      {
        "w": "Drydown",
        "d": "Later stage of a perfume after volatile top notes fade"
      },
      {
        "w": "Top notes",
        "d": "First impression of a fragrance after application"
      },
      {
        "w": "Heart notes",
        "d": "Middle stage that defines a fragrance’s main character"
      },
      {
        "w": "Base notes",
        "d": "Long-lasting foundation of a perfume"
      },
      {
        "w": "Flanker",
        "d": "Variation released under the name of an existing perfume"
      }
    ]
  },
  {
    "name": "Korea: history, culture & modernization",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Gojoseon",
        "d": "Legendary early Korean kingdom associated with Dangun"
      },
      {
        "w": "Silla",
        "d": "Korean kingdom that helped unify much of the peninsula"
      },
      {
        "w": "Goguryeo",
        "d": "Northern Korean kingdom known for military power and murals"
      },
      {
        "w": "Baekje",
        "d": "Southwestern kingdom that transmitted culture to Japan"
      },
      {
        "w": "Goryeo",
        "d": "Dynasty that gave Korea its Western name"
      },
      {
        "w": "Joseon",
        "d": "Long-lived dynasty that ruled Korea from 1392 to 1897"
      },
      {
        "w": "King Sejong",
        "d": "Joseon ruler credited with creating Hangul"
      },
      {
        "w": "Hangul",
        "d": "Korean alphabet designed in the fifteenth century"
      },
      {
        "w": "Yi Sun-sin",
        "d": "Admiral famous for victories against Japanese invasions"
      },
      {
        "w": "Turtle ship",
        "d": "Armored Korean warship associated with Yi Sun-sin"
      },
      {
        "w": "Hwacha",
        "d": "Korean multiple-rocket launcher of the Joseon era"
      },
      {
        "w": "Hwarang",
        "d": "Silla youth elite associated with training and aristocratic culture"
      },
      {
        "w": "Yangban",
        "d": "Joseon scholar-official aristocracy"
      },
      {
        "w": "Gisaeng",
        "d": "Female entertainers trained in music, poetry and performance"
      },
      {
        "w": "Pansori",
        "d": "Korean musical storytelling tradition"
      },
      {
        "w": "Talchum",
        "d": "Korean mask dance drama"
      },
      {
        "w": "Chuseok",
        "d": "Korean harvest holiday and family festival"
      },
      {
        "w": "Hanbok",
        "d": "Traditional Korean clothing"
      },
      {
        "w": "Hanok",
        "d": "Traditional Korean house form"
      },
      {
        "w": "Ondol",
        "d": "Korean underfloor heating system"
      },
      {
        "w": "Kimchi",
        "d": "Fermented vegetable dish central to Korean cuisine"
      },
      {
        "w": "Chaebol",
        "d": "Family-controlled South Korean conglomerate"
      },
      {
        "w": "Samsung",
        "d": "South Korean conglomerate central to electronics and industry"
      },
      {
        "w": "Hyundai chaebol",
        "d": "South Korean conglomerate known for cars, ships and construction"
      },
      {
        "w": "POSCO",
        "d": "South Korean steel company central to industrialization"
      },
      {
        "w": "Korean Wave",
        "d": "Global spread of South Korean pop culture"
      },
      {
        "w": "Manhwa",
        "d": "Korean comics and graphic storytelling"
      },
      {
        "w": "K-drama",
        "d": "Television drama format exported globally from South Korea"
      },
      {
        "w": "38th parallel",
        "d": "Latitude line tied to Korea’s division after World War II"
      },
      {
        "w": "DMZ",
        "d": "Demilitarized zone separating North and South Korea"
      },
      {
        "w": "Pusan Perimeter",
        "d": "Defensive line during the Korean War in 1950"
      },
      {
        "w": "Incheon landing",
        "d": "MacArthur’s amphibious operation during the Korean War"
      },
      {
        "w": "Gwangju uprising",
        "d": "1980 democratic uprising and massacre in South Korea"
      },
      {
        "w": "Miracle on the Han River",
        "d": "Phrase for South Korea’s rapid economic growth"
      },
      {
        "w": "Juche",
        "d": "North Korean ideology of self-reliance"
      }
    ]
  },
  {
    "name": "dog breeds",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Labrador Retriever",
        "d": "Friendly retrieving breed often used as a guide and family dog"
      },
      {
        "w": "German Shepherd",
        "d": "Versatile herding breed widely used in police and service work"
      },
      {
        "w": "Golden Retriever",
        "d": "Gentle retrieving breed with a golden coat"
      },
      {
        "w": "English Bulldog",
        "d": "Stocky companion breed with a pushed-in face and wrinkled skin"
      },
      {
        "w": "Beagle",
        "d": "Small scent hound with strong nose and merry temperament"
      },
      {
        "w": "Poodle",
        "d": "Curly-coated breed found in toy, miniature and standard sizes"
      },
      {
        "w": "Rottweiler",
        "d": "Powerful working breed descended from cattle-driving dogs"
      },
      {
        "w": "Doberman Pinscher",
        "d": "Sleek guard and companion breed developed in Germany"
      },
      {
        "w": "Boxer",
        "d": "Energetic German working breed with a square muzzle"
      },
      {
        "w": "Siberian Husky",
        "d": "Northern sled dog known for endurance and thick coat"
      },
      {
        "w": "Dalmatian",
        "d": "Spotted breed historically linked to carriage work"
      },
      {
        "w": "Shar Pei",
        "d": "Chinese breed known for deep wrinkles and blue-black tongue"
      },
      {
        "w": "Chow Chow",
        "d": "Fluffy Chinese breed with lion-like mane and blue-black tongue"
      },
      {
        "w": "Akita Inu",
        "d": "Japanese spitz breed known for loyalty and dignity"
      },
      {
        "w": "Shiba Inu",
        "d": "Small Japanese spitz breed with foxlike expression"
      },
      {
        "w": "Welsh Corgi",
        "d": "Short-legged herding dog associated with Wales and royal pets"
      },
      {
        "w": "Dachshund",
        "d": "Long-bodied German badger-hunting breed"
      },
      {
        "w": "Pug",
        "d": "Small companion dog with wrinkled face and curled tail"
      },
      {
        "w": "Chihuahua",
        "d": "Tiny Mexican companion breed"
      },
      {
        "w": "Yorkshire Terrier",
        "d": "Small silky-coated terrier from northern England"
      },
      {
        "w": "Pomeranian",
        "d": "Small spitz breed with a fluffy coat"
      },
      {
        "w": "Samoyed",
        "d": "White Arctic spitz breed with a smiling expression"
      },
      {
        "w": "Alaskan Malamute",
        "d": "Large sled dog bred for hauling heavy loads"
      },
      {
        "w": "Border Collie",
        "d": "Highly intelligent sheepdog famous for herding skill"
      },
      {
        "w": "Cocker Spaniel",
        "d": "Sporting breed with long ears and merry temperament"
      },
      {
        "w": "Bernese Mountain Dog",
        "d": "Large Swiss working dog with tri-color coat"
      },
      {
        "w": "Irish Setter",
        "d": "Red-coated gundog known for elegance and energy"
      },
      {
        "w": "Weimaraner",
        "d": "Gray German hunting dog sometimes called the gray ghost"
      },
      {
        "w": "German Shorthaired Pointer",
        "d": "Versatile hunting breed with short coat"
      },
      {
        "w": "German Wirehaired Pointer",
        "d": "Rough-coated hunting breed developed in Germany"
      },
      {
        "w": "Giant Schnauzer",
        "d": "Large working schnauzer breed originally used for driving cattle"
      },
      {
        "w": "Maltese",
        "d": "Small white toy breed from the Mediterranean"
      },
      {
        "w": "Rhodesian Ridgeback",
        "d": "African hound with a ridge of hair along the back"
      },
      {
        "w": "Miniature Schnauzer",
        "d": "Small bearded terrier-like schnauzer breed"
      },
      {
        "w": "Afghan Hound",
        "d": "Elegant sighthound with long silky coat"
      }
    ]
  },
  {
    "name": "Greek & Roman gods",
    "tags": {
      "a": "human",
      "b": "mythology",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Zeus",
        "d": "Greek king of the gods, thunder and sky"
      },
      {
        "w": "Hera",
        "d": "Greek goddess of marriage and queen of Olympus"
      },
      {
        "w": "Poseidon",
        "d": "Greek god of the sea, earthquakes and horses"
      },
      {
        "w": "Hades of the underworld",
        "d": "Greek ruler of the underworld"
      },
      {
        "w": "Athena",
        "d": "Greek goddess of wisdom, war strategy and crafts"
      },
      {
        "w": "Apollo",
        "d": "Greek god of music, prophecy, healing and the sun"
      },
      {
        "w": "Artemis",
        "d": "Greek goddess of hunting, wilderness and the moon"
      },
      {
        "w": "Ares",
        "d": "Greek god of war and bloodlust"
      },
      {
        "w": "Aphrodite",
        "d": "Greek goddess of love and beauty"
      },
      {
        "w": "Hephaestus",
        "d": "Greek god of smiths, fire and metalwork"
      },
      {
        "w": "Hermes",
        "d": "Greek messenger god of travelers, trade and thieves"
      },
      {
        "w": "Dionysus",
        "d": "Greek god of wine, theater and ecstatic ritual"
      },
      {
        "w": "Demeter",
        "d": "Greek goddess of agriculture and grain"
      },
      {
        "w": "Hestia",
        "d": "Greek goddess of the hearth and household fire"
      },
      {
        "w": "Persephone",
        "d": "Greek queen of the underworld and spring return"
      },
      {
        "w": "Eros",
        "d": "Greek god of desire and erotic love"
      },
      {
        "w": "Pan",
        "d": "Rustic Greek god of shepherds, flocks and wild music"
      },
      {
        "w": "Nike goddess",
        "d": "Greek goddess of victory"
      },
      {
        "w": "Nemesis",
        "d": "Greek goddess of retribution against hubris"
      },
      {
        "w": "Tyche",
        "d": "Greek goddess of fortune and city luck"
      },
      {
        "w": "Helios",
        "d": "Greek sun god who drives a solar chariot"
      },
      {
        "w": "Selene",
        "d": "Greek moon goddess"
      },
      {
        "w": "Eos",
        "d": "Greek dawn goddess"
      },
      {
        "w": "Prometheus",
        "d": "Titan who stole fire for humanity"
      },
      {
        "w": "Titan Atlas",
        "d": "Titan condemned to hold up the sky"
      },
      {
        "w": "Cronus",
        "d": "Titan father of Zeus and ruler of the Golden Age"
      },
      {
        "w": "Rhea",
        "d": "Titan mother of the Olympian gods"
      },
      {
        "w": "Uranus",
        "d": "Primordial sky god and father of the Titans"
      },
      {
        "w": "Gaia",
        "d": "Primordial earth goddess"
      },
      {
        "w": "Hypnos",
        "d": "Greek god of sleep"
      },
      {
        "w": "Thanatos",
        "d": "Greek personification of death"
      },
      {
        "w": "Asclepius",
        "d": "God of medicine and healing"
      },
      {
        "w": "Janus",
        "d": "Roman god of doorways, beginnings and transitions"
      },
      {
        "w": "Vesta",
        "d": "Roman goddess of the hearth"
      },
      {
        "w": "Mars",
        "d": "Roman god of war and father of Romulus"
      }
    ]
  },
  {
    "name": "music genres",
    "tags": {
      "a": "human",
      "b": "music",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Blues",
        "d": "Genre rooted in African American song forms and blue notes"
      },
      {
        "w": "Jazz",
        "d": "Improvised music tradition born from blues, ragtime and brass bands"
      },
      {
        "w": "Rock and roll",
        "d": "1950s popular music built from rhythm and blues and country"
      },
      {
        "w": "Punk rock",
        "d": "Fast, raw rock style built around simplicity and rebellion"
      },
      {
        "w": "Heavy metal",
        "d": "Loud guitar-driven genre descended from hard rock"
      },
      {
        "w": "Reggae",
        "d": "Jamaican genre with offbeat rhythm and bass emphasis"
      },
      {
        "w": "Hip-hop",
        "d": "Culture and music built around rapping, DJing and beats"
      },
      {
        "w": "Electronic dance music",
        "d": "Club-oriented music made with electronic instruments"
      },
      {
        "w": "Techno",
        "d": "Electronic dance genre associated with Detroit and machine rhythm"
      },
      {
        "w": "House music",
        "d": "Dance genre born in Chicago clubs with four-on-the-floor beats"
      },
      {
        "w": "Trance",
        "d": "Electronic dance music with long builds and hypnotic melodies"
      },
      {
        "w": "Ambient",
        "d": "Atmospheric music focused on texture rather than song structure"
      },
      {
        "w": "Funk",
        "d": "Groove-centered genre with syncopated bass and rhythm guitar"
      },
      {
        "w": "Soul",
        "d": "Vocal music blending gospel, rhythm and blues"
      },
      {
        "w": "R&B",
        "d": "Rhythm-and-blues family of groove-based popular music"
      },
      {
        "w": "Country",
        "d": "American popular genre rooted in folk, fiddle and storytelling"
      },
      {
        "w": "Folk",
        "d": "Traditional or acoustic song-based music tied to communities"
      },
      {
        "w": "Gospel",
        "d": "Christian vocal music with roots in Black church traditions"
      },
      {
        "w": "Grunge",
        "d": "Alternative rock style associated with Seattle in the early 1990s"
      },
      {
        "w": "Indie rock",
        "d": "Guitar music associated with independent labels and aesthetics"
      },
      {
        "w": "Post-punk",
        "d": "Experimental music that followed punk’s first explosion"
      },
      {
        "w": "New wave",
        "d": "Pop-leaning post-punk style with synths and sharp visuals"
      },
      {
        "w": "Synth-pop",
        "d": "Pop music built around synthesizers and drum machines"
      },
      {
        "w": "Dubstep",
        "d": "Bass-heavy electronic genre with syncopated drops"
      },
      {
        "w": "Drum and bass",
        "d": "Fast breakbeat electronic genre with heavy basslines"
      },
      {
        "w": "Ska",
        "d": "Jamaican upbeat genre that influenced reggae and punk revivals"
      },
      {
        "w": "Bossa nova",
        "d": "Brazilian style mixing samba rhythm and cool jazz harmony"
      },
      {
        "w": "Grime",
        "d": "British electronic rap style born in London"
      },
      {
        "w": "Ragtime",
        "d": "Piano style with syncopated rhythm, popular before jazz"
      },
      {
        "w": "Bebop",
        "d": "Fast, complex jazz style associated with Parker and Gillespie"
      },
      {
        "w": "Jazz fusion",
        "d": "Blend of jazz improvisation with rock, funk or electronics"
      },
      {
        "w": "Afrobeat",
        "d": "West African style associated with Fela Kuti and political groove"
      },
      {
        "w": "Lo-fi hip-hop",
        "d": "Relaxed beat style with warm, imperfect textures"
      },
      {
        "w": "Trap",
        "d": "Hip-hop style with hi-hats, booming bass and Southern roots"
      },
      {
        "w": "K-pop",
        "d": "South Korean pop industry known for groups, choreography and fandoms"
      }
    ]
  },
  {
    "name": "jazz legends",
    "tags": {
      "a": "human",
      "b": "music",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Louis Armstrong",
        "d": "Trumpeter and singer who transformed early jazz soloing"
      },
      {
        "w": "Duke Ellington",
        "d": "Bandleader and composer of sophisticated jazz suites"
      },
      {
        "w": "Charlie Parker",
        "d": "Alto saxophonist and central creator of bebop"
      },
      {
        "w": "Dizzy Gillespie",
        "d": "Trumpeter who helped invent bebop and Afro-Cuban jazz"
      },
      {
        "w": "Miles Davis",
        "d": "Trumpeter who shaped cool jazz, modal jazz and fusion"
      },
      {
        "w": "John Coltrane",
        "d": "Saxophonist known for Giant Steps and A Love Supreme"
      },
      {
        "w": "Thelonious Monk",
        "d": "Pianist-composer with angular melodies and percussive touch"
      },
      {
        "w": "Ella Fitzgerald",
        "d": "Singer famed for scat improvisation and songbook recordings"
      },
      {
        "w": "Billie Holiday",
        "d": "Singer whose phrasing made songs sound newly personal"
      },
      {
        "w": "Oscar Peterson",
        "d": "Virtuosic Canadian jazz pianist"
      },
      {
        "w": "Charles Mingus",
        "d": "Bassist-composer mixing swing, blues and modernism"
      },
      {
        "w": "Sonny Rollins",
        "d": "Tenor saxophonist known for thematic improvisation"
      },
      {
        "w": "Herbie Hancock",
        "d": "Pianist who moved from hard bop to funk and fusion"
      },
      {
        "w": "Dave Brubeck",
        "d": "Pianist associated with unusual meters and Take Five"
      },
      {
        "w": "Benny Goodman",
        "d": "Clarinetist and Swing Era bandleader"
      },
      {
        "w": "Count Basie",
        "d": "Bandleader known for Kansas City swing and spare piano"
      },
      {
        "w": "Art Tatum",
        "d": "Pianist admired for dazzling technique and harmonic imagination"
      },
      {
        "w": "Lionel Hampton",
        "d": "Vibraphonist and bandleader of the swing era"
      },
      {
        "w": "Erroll Garner",
        "d": "Pianist known for Misty and orchestral swing feel"
      },
      {
        "w": "Art Blakey",
        "d": "Drummer and leader of the Jazz Messengers"
      },
      {
        "w": "Horace Silver",
        "d": "Pianist-composer associated with hard bop and funky themes"
      },
      {
        "w": "Keith Jarrett",
        "d": "Pianist known for solo improvisations and the Köln Concert"
      },
      {
        "w": "Max Roach",
        "d": "Drummer who helped define bebop rhythm"
      },
      {
        "w": "Wayne Shorter",
        "d": "Saxophonist-composer in Miles Davis’s quintet and Weather Report"
      },
      {
        "w": "Chet Baker",
        "d": "Trumpeter and singer known for cool-jazz lyricism"
      },
      {
        "w": "Chick Corea",
        "d": "Keyboardist central to fusion and modern jazz"
      },
      {
        "w": "McCoy Tyner",
        "d": "Pianist whose quartal harmonies powered Coltrane’s classic group"
      },
      {
        "w": "Clifford Brown",
        "d": "Trumpeter whose brief career shaped hard bop"
      },
      {
        "w": "Ornette Coleman",
        "d": "Alto saxophonist who launched free jazz"
      },
      {
        "w": "Sarah Vaughan",
        "d": "Singer with operatic range and harmonic daring"
      },
      {
        "w": "Nina Simone",
        "d": "Singer-pianist blending jazz, soul and civil-rights protest"
      },
      {
        "w": "Stan Getz",
        "d": "Tenor saxophonist who popularized bossa nova in the United States"
      },
      {
        "w": "Wynton Marsalis",
        "d": "Trumpeter and public advocate for jazz tradition"
      },
      {
        "w": "Cannonball Adderley",
        "d": "Alto saxophonist known for soulful hard bop"
      },
      {
        "w": "Bill Evans",
        "d": "Pianist whose trio style reshaped modern jazz harmony"
      }
    ]
  },
  {
    "name": "rock frontmen",
    "tags": {
      "a": "human",
      "b": "music",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Mick Jagger",
        "d": "Rolling Stones singer famous for swagger and stage presence"
      },
      {
        "w": "Robert Plant",
        "d": "Led Zeppelin vocalist with high blues-rock power"
      },
      {
        "w": "Freddie Mercury",
        "d": "Queen singer known for range, theatricality and Live Aid"
      },
      {
        "w": "David Bowie",
        "d": "Rock chameleon of Ziggy Stardust, Berlin and art-pop reinvention"
      },
      {
        "w": "Kurt Cobain",
        "d": "Nirvana singer-songwriter and reluctant grunge icon"
      },
      {
        "w": "Jim Morrison",
        "d": "Doors frontman known for poetry, danger and baritone voice"
      },
      {
        "w": "Bruce Springsteen",
        "d": "American songwriter-performer nicknamed the Boss"
      },
      {
        "w": "Jimi Hendrix",
        "d": "Guitar revolutionary who also fronted his own Experience"
      },
      {
        "w": "Frank Zappa",
        "d": "Composer-guitarist leading Mothers of Invention and solo bands"
      },
      {
        "w": "Eddie Vedder",
        "d": "Pearl Jam singer with a distinctive baritone"
      },
      {
        "w": "Peter Gabriel",
        "d": "Original Genesis singer later known for theatrical solo work"
      },
      {
        "w": "Roger Waters",
        "d": "Pink Floyd bassist, lyricist and conceptual force"
      },
      {
        "w": "James Hetfield",
        "d": "Metallica vocalist and rhythm guitarist"
      },
      {
        "w": "Ozzy Osbourne",
        "d": "Black Sabbath singer and solo heavy-metal personality"
      },
      {
        "w": "Steven Tyler",
        "d": "Aerosmith singer known for scarves, screams and showmanship"
      },
      {
        "w": "Lemmy Kilmister",
        "d": "Motörhead bassist-singer and gravel-voiced rock icon"
      },
      {
        "w": "Bryan Ferry",
        "d": "Roxy Music singer and elegant art-rock frontman"
      },
      {
        "w": "Ronnie James Dio",
        "d": "Heavy-metal singer known for powerful fantasy vocals"
      },
      {
        "w": "Lou Reed",
        "d": "Velvet Underground singer-songwriter and later solo rock figure"
      },
      {
        "w": "John Lennon",
        "d": "Beatles singer-songwriter and later solo activist"
      },
      {
        "w": "Chris Cornell",
        "d": "Soundgarden and Audioslave singer with huge vocal range"
      },
      {
        "w": "Thom Yorke",
        "d": "Radiohead singer known for anxious falsetto and experimentation"
      },
      {
        "w": "Iggy Pop",
        "d": "Stooges frontman and prototype of punk performance"
      },
      {
        "w": "Marc Bolan",
        "d": "T. Rex singer and glam-rock star"
      },
      {
        "w": "Neil Young",
        "d": "Singer-guitarist spanning folk rock, country rock and noise"
      },
      {
        "w": "Axl Rose",
        "d": "Guns N’ Roses singer known for range and volatility"
      },
      {
        "w": "Alice Cooper",
        "d": "Shock-rock performer whose name became a band and persona"
      },
      {
        "w": "Anthony Kiedis",
        "d": "Red Hot Chili Peppers vocalist blending rap and funk rock"
      },
      {
        "w": "Dave Grohl",
        "d": "Foo Fighters frontman and former Nirvana drummer"
      },
      {
        "w": "Bono",
        "d": "U2 singer known for arena anthems and activism"
      },
      {
        "w": "Morrissey",
        "d": "Smiths singer with mordant lyrics and cult following"
      },
      {
        "w": "Ian Curtis",
        "d": "Joy Division singer whose brief career shaped post-punk"
      },
      {
        "w": "Robert Smith",
        "d": "The Cure singer-guitarist with iconic gothic look"
      },
      {
        "w": "Debbie Harry",
        "d": "Blondie singer who bridged punk, pop and new wave"
      },
      {
        "w": "Siouxsie Sioux",
        "d": "Siouxsie and the Banshees singer central to post-punk and goth"
      }
    ]
  },
  {
    "name": "world megacities",
    "tags": {
      "a": "human",
      "b": "geography",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Shanghai",
        "d": "Chinese megacity and global port at the Yangtze River delta"
      },
      {
        "w": "Mumbai",
        "d": "Indian financial capital and enormous Arabian Sea metropolis"
      },
      {
        "w": "São Paulo",
        "d": "Brazilian megacity and economic powerhouse"
      },
      {
        "w": "Lagos",
        "d": "Nigeria’s largest city and one of Africa’s biggest urban areas"
      },
      {
        "w": "Istanbul",
        "d": "Transcontinental Turkish metropolis linking Europe and Asia"
      },
      {
        "w": "Karachi",
        "d": "Pakistan’s largest city and major Arabian Sea port"
      },
      {
        "w": "Chongqing",
        "d": "Vast Chinese municipality on the upper Yangtze"
      },
      {
        "w": "Guangzhou",
        "d": "Pearl River Delta megacity and manufacturing hub"
      },
      {
        "w": "Shenzhen",
        "d": "Chinese tech megacity grown from a special economic zone"
      },
      {
        "w": "Tianjin",
        "d": "Northern Chinese port city near Beijing"
      },
      {
        "w": "Bangalore",
        "d": "Indian technology hub also known as Bengaluru"
      },
      {
        "w": "Chennai",
        "d": "South Indian metropolis on the Bay of Bengal"
      },
      {
        "w": "Hyderabad",
        "d": "Indian city known for tech, film and historic monuments"
      },
      {
        "w": "Kolkata",
        "d": "Indian metropolis on the Hooghly River"
      },
      {
        "w": "Lahore",
        "d": "Pakistani cultural capital in Punjab"
      },
      {
        "w": "Pune",
        "d": "Indian education and automotive center"
      },
      {
        "w": "Surat",
        "d": "Indian diamond and textile city"
      },
      {
        "w": "Chengdu",
        "d": "Sichuan megacity famous for pandas and spicy food"
      },
      {
        "w": "Zhengzhou",
        "d": "Chinese transport hub in Henan province"
      },
      {
        "w": "Kinshasa",
        "d": "Capital of DR Congo and one of Africa’s largest cities"
      },
      {
        "w": "Luanda",
        "d": "Angolan coastal metropolis shaped by oil wealth"
      },
      {
        "w": "Dar es Salaam",
        "d": "Tanzanian port city and commercial center"
      },
      {
        "w": "Khartoum",
        "d": "Sudanese city at the meeting of the Niles"
      },
      {
        "w": "Accra",
        "d": "Ghanaian coastal capital and fast-growing metropolis"
      },
      {
        "w": "Alexandria",
        "d": "Egyptian Mediterranean city founded by Alexander the Great"
      },
      {
        "w": "Yangon",
        "d": "Myanmar’s largest city and former capital"
      },
      {
        "w": "Jakarta",
        "d": "Indonesian megacity facing flooding and subsidence"
      },
      {
        "w": "Lima",
        "d": "Peruvian coastal capital and Andean-Pacific metropolis"
      },
      {
        "w": "Abidjan",
        "d": "Ivorian economic capital and one of West Africa’s largest cities"
      },
      {
        "w": "Bogotá",
        "d": "High-altitude Colombian capital and huge Andean city"
      },
      {
        "w": "Ahmedabad",
        "d": "Major city in Gujarat known for textiles and industry"
      },
      {
        "w": "Ho Chi Minh City",
        "d": "Vietnamese metropolis formerly called Saigon"
      },
      {
        "w": "Osaka",
        "d": "Japanese urban region with commerce and food culture"
      },
      {
        "w": "Nagoya",
        "d": "Japanese industrial metropolis tied to automobiles"
      },
      {
        "w": "Medellín",
        "d": "Colombian city known for urban transformation and metro cableways"
      }
    ]
  },
  {
    "name": "great rivers of the world",
    "tags": {
      "a": "human",
      "b": "geography",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Amazon River",
        "d": "South American river with the world’s largest discharge"
      },
      {
        "w": "Nile",
        "d": "African river traditionally called the world’s longest"
      },
      {
        "w": "Congo River",
        "d": "Central African river crossing the equator twice"
      },
      {
        "w": "Mekong",
        "d": "Southeast Asian river flowing through six countries"
      },
      {
        "w": "Ob River",
        "d": "Major Siberian river flowing into the Arctic Ocean"
      },
      {
        "w": "Paraná",
        "d": "South American river running through Brazil, Paraguay and Argentina"
      },
      {
        "w": "Lena River",
        "d": "Siberian river flowing north into the Laptev Sea"
      },
      {
        "w": "Irtysh",
        "d": "Long tributary system of the Ob"
      },
      {
        "w": "Yangtze",
        "d": "China’s longest river and site of the Three Gorges Dam"
      },
      {
        "w": "Niger River",
        "d": "West African river bending through Mali, Niger and Nigeria"
      },
      {
        "w": "Mississippi",
        "d": "Great river system of the central United States"
      },
      {
        "w": "Amur",
        "d": "River forming part of the Russia-China border"
      },
      {
        "w": "Murray River",
        "d": "Australia’s longest river"
      },
      {
        "w": "Volga",
        "d": "Europe’s longest river, flowing through Russia to the Caspian Sea"
      },
      {
        "w": "Zambezi",
        "d": "African river famous for Victoria Falls"
      },
      {
        "w": "Mackenzie River",
        "d": "Major Canadian river flowing to the Arctic Ocean"
      },
      {
        "w": "Tigris",
        "d": "Mesopotamian river paired with the Euphrates"
      },
      {
        "w": "Euphrates",
        "d": "River central to ancient Mesopotamia"
      },
      {
        "w": "Missouri River",
        "d": "Longest river in the United States by source-to-mouth length"
      },
      {
        "w": "Indus",
        "d": "River central to Pakistan and the ancient Indus civilization"
      },
      {
        "w": "Danube",
        "d": "European river flowing from Germany to the Black Sea"
      },
      {
        "w": "Columbia River",
        "d": "Pacific Northwest river with major hydroelectric dams"
      },
      {
        "w": "Rhine",
        "d": "European river linking Alpine regions to the North Sea"
      },
      {
        "w": "Senegal River",
        "d": "West African river forming parts of national borders"
      },
      {
        "w": "Colorado River",
        "d": "River that carved the Grand Canyon"
      },
      {
        "w": "Ganges",
        "d": "Sacred Indian river flowing to the Bay of Bengal"
      },
      {
        "w": "Brahmaputra",
        "d": "Himalayan river joining the Ganges delta system"
      },
      {
        "w": "Blue Nile",
        "d": "Ethiopian tributary that carries much Nile floodwater"
      },
      {
        "w": "Orinoco",
        "d": "Venezuelan and Colombian river with a vast delta"
      },
      {
        "w": "Yellow River",
        "d": "Chinese river also called Huang He"
      },
      {
        "w": "Don River",
        "d": "Russian river flowing to the Sea of Azov"
      },
      {
        "w": "Seine",
        "d": "French river running through Paris"
      },
      {
        "w": "Limpopo",
        "d": "Southern African river flowing to the Indian Ocean"
      },
      {
        "w": "Orange River",
        "d": "Major river of southern Africa"
      },
      {
        "w": "Tobol",
        "d": "Siberian river and tributary of the Irtysh"
      }
    ]
  },
  {
    "name": "big novels & literary cycles",
    "tags": {
      "a": "human",
      "b": "books",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "And Quiet Flows the Don",
        "d": "Sholokhov epic of Cossacks, revolution and civil war"
      },
      {
        "w": "Buddenbrooks",
        "d": "Thomas Mann family chronicle of a declining merchant dynasty"
      },
      {
        "w": "Jean-Christophe",
        "d": "Romain Rolland multi-volume novel about a musician’s life"
      },
      {
        "w": "The Thibaults",
        "d": "Roger Martin du Gard cycle about a French family before World War I"
      },
      {
        "w": "The Life of Klim Samgin",
        "d": "Gorky four-volume chronicle of Russian intelligentsia life"
      },
      {
        "w": "The Forsyte Saga",
        "d": "Galsworthy family saga about property, marriage and class"
      },
      {
        "w": "Finnegans Wake",
        "d": "Joyce’s notoriously difficult dream-language novel"
      },
      {
        "w": "American Pastoral",
        "d": "Philip Roth novel about a family and American upheaval"
      },
      {
        "w": "Les Rougon-Macquart",
        "d": "Zola cycle tracing a family under the Second Empire"
      },
      {
        "w": "Vanity Fair",
        "d": "Thackeray novel subtitled a novel without a hero"
      },
      {
        "w": "The Human Comedy",
        "d": "Balzac’s vast connected world of French society"
      },
      {
        "w": "Gargantua and Pantagruel",
        "d": "Rabelais comic Renaissance cycle of giants and satire"
      },
      {
        "w": "David Copperfield",
        "d": "Dickens Bildungsroman based partly on his own life"
      },
      {
        "w": "The Red and the Black",
        "d": "Stendhal novel of ambition, class and Restoration France"
      },
      {
        "w": "Tom Jones",
        "d": "Fielding comic novel of foundlings, desire and society"
      },
      {
        "w": "Children of the Arbat",
        "d": "Rybakov cycle about Stalinism and Soviet youth"
      },
      {
        "w": "Clarissa",
        "d": "Richardson epistolary novel of virtue, coercion and tragedy"
      },
      {
        "w": "The Count of Monte Cristo",
        "d": "Dumas adventure novel of betrayal, prison and revenge"
      },
      {
        "w": "The Three Musketeers",
        "d": "Dumas swashbuckling novel of friendship and intrigue"
      },
      {
        "w": "Joseph and His Brothers",
        "d": "Thomas Mann tetralogy reworking the biblical Joseph story"
      },
      {
        "w": "Kristin Lavransdatter",
        "d": "Sigrid Undset trilogy about medieval Norway"
      },
      {
        "w": "Middlemarch",
        "d": "George Eliot panoramic novel of provincial English life"
      },
      {
        "w": "Palliser novels",
        "d": "Trollope political cycle centered on Parliament and marriage"
      },
      {
        "w": "Manhattan Transfer",
        "d": "Dos Passos modernist portrait of New York City"
      },
      {
        "w": "U.S.A. Trilogy",
        "d": "Dos Passos trilogy of American lives, headlines and montage"
      },
      {
        "w": "Fortunata and Jacinta",
        "d": "Galdós Spanish realist novel of marriage and class"
      },
      {
        "w": "Absalom, Absalom!",
        "d": "Faulkner novel of Southern memory and family doom"
      },
      {
        "w": "Rabbit Tetralogy",
        "d": "Updike cycle following Harry Rabbit Angstrom across decades"
      },
      {
        "w": "The Way of All Flesh",
        "d": "Samuel Butler family novel attacking Victorian hypocrisy"
      },
      {
        "w": "Men of Good Will",
        "d": "Jules Romains vast cycle about French society"
      },
      {
        "w": "The Charterhouse of Parma",
        "d": "Stendhal novel of politics, love and Italian intrigue"
      },
      {
        "w": "The Cairo Trilogy",
        "d": "Naguib Mahfouz family saga set in twentieth-century Cairo"
      },
      {
        "w": "A Dance to the Music of Time",
        "d": "Anthony Powell twelve-novel cycle of British society"
      },
      {
        "w": "The Balkan Trilogy",
        "d": "Olivia Manning wartime sequence about expatriates in Europe"
      },
      {
        "w": "Parade’s End",
        "d": "Ford Madox Ford tetralogy about war, marriage and old England"
      }
    ]
  },
  {
    "name": "World War II novels",
    "tags": {
      "a": "human",
      "b": "books",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Life and Fate",
        "d": "Grossman novel often compared to War and Peace for World War II"
      },
      {
        "w": "A Time to Love and a Time to Die",
        "d": "Remarque novel about a German soldier on leave"
      },
      {
        "w": "If This Is a Man",
        "d": "Primo Levi account of survival in Auschwitz"
      },
      {
        "w": "Naked Among Wolves",
        "d": "Bruno Apitz novel set in Buchenwald"
      },
      {
        "w": "The Pianist",
        "d": "Władysław Szpilman memoir of survival in occupied Warsaw"
      },
      {
        "w": "Catch-22",
        "d": "Heller satirical novel about absurdity in the U.S. air war"
      },
      {
        "w": "Hiroshima",
        "d": "John Hersey reportage about survivors of the atomic bombing"
      },
      {
        "w": "The Thin Red Line",
        "d": "James Jones novel about combat on Guadalcanal"
      },
      {
        "w": "Night",
        "d": "Elie Wiesel memoir of deportation and Auschwitz"
      },
      {
        "w": "The Tin Drum WWII",
        "d": "Grass novel marked by Nazism, war and German memory"
      },
      {
        "w": "The Bridge on the Drina",
        "d": "Andrić chronicle spanning Balkan history and occupation"
      },
      {
        "w": "The Diary of Anne Frank",
        "d": "Diary of a Jewish girl hiding in Amsterdam"
      },
      {
        "w": "Kaputt",
        "d": "Malaparte wartime reportage-novel from European fronts"
      },
      {
        "w": "The Naked and the Dead",
        "d": "Mailer novel about U.S. soldiers in the Pacific"
      },
      {
        "w": "In the Trenches of Stalingrad",
        "d": "Nekrasov novel based on front-line experience"
      },
      {
        "w": "The Moment of Truth",
        "d": "Bogomolov novel about Soviet counterintelligence in 1944"
      },
      {
        "w": "The Notebook",
        "d": "Ágota Kristóf novel of wartime childhood and brutality"
      },
      {
        "w": "Hot Snow",
        "d": "Bondarev novel centered on the Battle of Stalingrad"
      },
      {
        "w": "The Unwomanly Face of War",
        "d": "Alexievich oral history of Soviet women in World War II"
      },
      {
        "w": "The Bridge on the River Kwai",
        "d": "Boulle novel about prisoners building a railway bridge"
      },
      {
        "w": "Night in Lisbon",
        "d": "Remarque novel about refugees escaping Nazi Europe"
      },
      {
        "w": "The Last of the Just",
        "d": "Schwarz-Bart novel about Jewish suffering and memory"
      },
      {
        "w": "Slaughterhouse-Five",
        "d": "Vonnegut novel linking Dresden, trauma and time travel"
      },
      {
        "w": "Band of Brothers book",
        "d": "Ambrose account of Easy Company in Europe"
      },
      {
        "w": "Schindler’s List",
        "d": "Keneally novel about Oskar Schindler saving Jews"
      },
      {
        "w": "Tomorrow Was the War",
        "d": "Vasiliev story of Soviet youth before the war"
      },
      {
        "w": "The Periodic Table",
        "d": "Primo Levi book where war memory enters chemical autobiography"
      },
      {
        "w": "The Book Thief",
        "d": "Zusak novel narrated by Death in Nazi Germany"
      },
      {
        "w": "Mother Night",
        "d": "Vonnegut novel about propaganda, identity and guilt"
      },
      {
        "w": "The Fox of the Desert",
        "d": "Book title associated with Rommel and the North African war"
      },
      {
        "w": "All the Light We Cannot See",
        "d": "Doerr novel about a blind French girl and a German boy"
      },
      {
        "w": "The Kindly Ones",
        "d": "Littell novel narrated by an SS officer"
      },
      {
        "w": "Suite Française",
        "d": "Némirovsky novel of France under German occupation"
      },
      {
        "w": "The Caine Mutiny",
        "d": "Wouk novel about a U.S. Navy ship during World War II"
      },
      {
        "w": "From Here to Eternity",
        "d": "James Jones novel set around Pearl Harbor"
      }
    ]
  },
  {
    "name": "queens & women rulers",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Zenobia",
        "d": "Palmyrene queen who challenged Roman power in the third century"
      },
      {
        "w": "Tomyris",
        "d": "Massagetae queen said to have defeated Cyrus the Great"
      },
      {
        "w": "Thatcher premiership",
        "d": "British premiership associated with privatization and the Falklands War"
      },
      {
        "w": "Angela Merkel",
        "d": "German chancellor who dominated European politics for sixteen years"
      },
      {
        "w": "Indira Gandhi premiership",
        "d": "Indian prime minister and central figure of Indian politics"
      },
      {
        "w": "Golda Meir",
        "d": "Israeli prime minister during the Yom Kippur War"
      },
      {
        "w": "Corazon Aquino",
        "d": "Philippine president who came to power after the People Power Revolution"
      },
      {
        "w": "Ellen Johnson Sirleaf",
        "d": "Liberian president and Nobel Peace Prize winner"
      },
      {
        "w": "Boudica",
        "d": "Iceni queen who led a revolt against Rome"
      },
      {
        "w": "Elizabeth Tudor",
        "d": "Tudor queen whose reign saw England’s Elizabethan age"
      },
      {
        "w": "Queen Victoria",
        "d": "British monarch whose reign defined the Victorian era"
      },
      {
        "w": "Catherine the Great",
        "d": "Russian empress who expanded and westernized the empire"
      },
      {
        "w": "Maria Theresa",
        "d": "Habsburg ruler and mother of Joseph II and Marie Antoinette"
      },
      {
        "w": "Isabella of Castile",
        "d": "Queen who sponsored Columbus and helped unify Spain"
      },
      {
        "w": "Sirimavo Bandaranaike",
        "d": "Sri Lankan politician, the world’s first female prime minister"
      },
      {
        "w": "Vigdís Finnbogadóttir",
        "d": "Icelandic president and first woman directly elected as head of state"
      },
      {
        "w": "Michelle Bachelet",
        "d": "Chilean president and former UN human-rights commissioner"
      },
      {
        "w": "Jacinda Ardern",
        "d": "New Zealand prime minister known for crisis leadership"
      },
      {
        "w": "Sheikh Hasina",
        "d": "Long-serving Bangladeshi prime minister"
      },
      {
        "w": "Cristina Fernández de Kirchner",
        "d": "Argentine president and influential Peronist leader"
      },
      {
        "w": "Dilma Rousseff",
        "d": "Brazilian president and former guerrilla activist"
      },
      {
        "w": "Sanna Marin",
        "d": "Finnish prime minister associated with a young coalition government"
      },
      {
        "w": "Jóhanna Sigurðardóttir",
        "d": "Icelandic prime minister and prominent LGBTQ political leader"
      },
      {
        "w": "Pratibha Patil",
        "d": "First woman president of India"
      },
      {
        "w": "Tamar the Great",
        "d": "Medieval Georgian queen during a golden age"
      },
      {
        "w": "Nzinga Mbande",
        "d": "Queen of Ndongo and Matamba resisting Portuguese power"
      },
      {
        "w": "Empress Theodora",
        "d": "Byzantine empress and powerful partner of Justinian"
      },
      {
        "w": "Rani Lakshmibai",
        "d": "Queen of Jhansi and symbol of the 1857 uprising"
      },
      {
        "w": "Arwa al-Sulayhi",
        "d": "Yemeni queen who ruled in her own name"
      },
      {
        "w": "Empress Matilda",
        "d": "English claimant whose civil war shaped the Plantagenet succession"
      },
      {
        "w": "Queen Liliʻuokalani",
        "d": "Last sovereign monarch of Hawaii"
      },
      {
        "w": "Eleanor of Aquitaine",
        "d": "Queen of France and England, major medieval political figure"
      },
      {
        "w": "Roxelana",
        "d": "Ottoman imperial consort and political actor as Hürrem Sultan"
      },
      {
        "w": "Wu Zetian",
        "d": "Only woman to rule China as emperor in her own name"
      },
      {
        "w": "Amina of Zazzau",
        "d": "Hausa warrior queen remembered in legends of Zazzau"
      }
    ]
  },
  {
    "name": "women writers",
    "tags": {
      "a": "human",
      "b": "books",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Jane Austen",
        "d": "English novelist of irony, courtship and social observation"
      },
      {
        "w": "Charlotte Brontë",
        "d": "Author of Jane Eyre and major Victorian novelist"
      },
      {
        "w": "Virginia Woolf",
        "d": "Modernist writer of Mrs Dalloway and To the Lighthouse"
      },
      {
        "w": "Anna Akhmatova",
        "d": "Russian poet of Acmeism, grief and Soviet terror"
      },
      {
        "w": "Marina Tsvetaeva",
        "d": "Russian poet known for intensity and exile"
      },
      {
        "w": "Agatha Christie",
        "d": "Crime writer who created Poirot and Miss Marple"
      },
      {
        "w": "Doris May Lessing",
        "d": "Nobel-winning author of The Golden Notebook"
      },
      {
        "w": "Alice Munro",
        "d": "Canadian master of the short story"
      },
      {
        "w": "Margaret Atwood",
        "d": "Canadian author of The Handmaid’s Tale and many novels"
      },
      {
        "w": "Sappho",
        "d": "Ancient Greek lyric poet from Lesbos"
      },
      {
        "w": "George Eliot",
        "d": "Pen name of Mary Ann Evans, author of Middlemarch"
      },
      {
        "w": "Sylvia Plath",
        "d": "Poet and novelist of Ariel and The Bell Jar"
      },
      {
        "w": "Marguerite Duras",
        "d": "French writer and filmmaker of The Lover"
      },
      {
        "w": "Emily Dickinson",
        "d": "American poet of compressed, elliptical verse"
      },
      {
        "w": "Ursula K. Le Guin",
        "d": "Science-fiction and fantasy author of Earthsea and The Left Hand of Darkness"
      },
      {
        "w": "Anaïs Nin",
        "d": "Writer known for diaries and literary erotica"
      },
      {
        "w": "Mary Oliver",
        "d": "American poet of nature and attention"
      },
      {
        "w": "Zora Neale Hurston",
        "d": "Harlem Renaissance writer of Their Eyes Were Watching God"
      },
      {
        "w": "Mary Shelley",
        "d": "Author of Frankenstein"
      },
      {
        "w": "Audre Lorde",
        "d": "Poet and essayist of Black feminism and identity"
      },
      {
        "w": "Chimamanda Ngozi Adichie",
        "d": "Nigerian novelist of Half of a Yellow Sun and Americanah"
      },
      {
        "w": "Maya Angelou",
        "d": "Poet and memoirist of I Know Why the Caged Bird Sings"
      },
      {
        "w": "Harper Lee",
        "d": "Author of To Kill a Mockingbird"
      },
      {
        "w": "Svetlana Alexievich",
        "d": "Belarusian Nobel laureate known for documentary oral histories"
      },
      {
        "w": "Teffi",
        "d": "Russian émigré writer and humorist"
      },
      {
        "w": "Toni Morrison novels",
        "d": "Nobel-winning body of work including Beloved and Song of Solomon"
      },
      {
        "w": "J. K. Rowling",
        "d": "Author of the Harry Potter series"
      },
      {
        "w": "Annie Ernaux",
        "d": "French Nobel laureate known for autobiographical social writing"
      },
      {
        "w": "Clarice Lispector",
        "d": "Brazilian modernist novelist of inner life and language"
      },
      {
        "w": "Zadie Smith",
        "d": "British novelist of White Teeth and NW"
      },
      {
        "w": "Isabel Allende",
        "d": "Chilean writer of The House of the Spirits"
      },
      {
        "w": "Herta Müller",
        "d": "Nobel-winning Romanian-German writer of dictatorship and exile"
      },
      {
        "w": "Elena Ferrante",
        "d": "Italian novelist known for the Neapolitan Quartet"
      },
      {
        "w": "Flannery O’Connor",
        "d": "American writer of Southern Gothic stories"
      },
      {
        "w": "Octavia Butler",
        "d": "Speculative-fiction author of Kindred and Parable of the Sower"
      }
    ]
  },
  {
    "name": "U.S. states",
    "tags": {
      "a": "human",
      "b": "geography",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Alabama",
        "d": "Southern U.S. state with capital Montgomery"
      },
      {
        "w": "Alaska",
        "d": "Largest U.S. state by area, separated from the mainland"
      },
      {
        "w": "Arizona",
        "d": "Southwestern state containing much of the Grand Canyon"
      },
      {
        "w": "Arkansas",
        "d": "Southern state crossed by the Ozarks and Mississippi lowlands"
      },
      {
        "w": "Colorado",
        "d": "Mountain state known for the Rockies"
      },
      {
        "w": "Connecticut",
        "d": "New England state between New York and Rhode Island"
      },
      {
        "w": "Delaware",
        "d": "Small Mid-Atlantic state, first to ratify the Constitution"
      },
      {
        "w": "Florida",
        "d": "Peninsula state known for beaches, wetlands and Miami"
      },
      {
        "w": "Georgia",
        "d": "Southern state with Atlanta as capital"
      },
      {
        "w": "Hawaii",
        "d": "Pacific island state and former kingdom"
      },
      {
        "w": "Idaho",
        "d": "Mountain West state known for potatoes and wilderness"
      },
      {
        "w": "Illinois",
        "d": "Midwestern state with Chicago as its largest city"
      },
      {
        "w": "Indiana",
        "d": "Midwestern state known for Indianapolis and auto racing"
      },
      {
        "w": "Iowa",
        "d": "Midwestern farming state and early presidential caucuses"
      },
      {
        "w": "Kansas",
        "d": "Great Plains state associated with wheat and prairie"
      },
      {
        "w": "Kentucky",
        "d": "State known for bourbon, horses and bluegrass"
      },
      {
        "w": "Louisiana",
        "d": "Gulf Coast state with French, Spanish and Creole heritage"
      },
      {
        "w": "Maine",
        "d": "Northeastern state known for coastline and lobster"
      },
      {
        "w": "Maryland",
        "d": "Mid-Atlantic state around Chesapeake Bay"
      },
      {
        "w": "Massachusetts",
        "d": "New England state central to colonial and revolutionary history"
      },
      {
        "w": "Michigan",
        "d": "Great Lakes state shaped by automobiles"
      },
      {
        "w": "Minnesota",
        "d": "Northern state known as the Land of 10,000 Lakes"
      },
      {
        "w": "State of Mississippi",
        "d": "Southern state named for the Mississippi River"
      },
      {
        "w": "Missouri",
        "d": "State where the Midwest meets the South"
      },
      {
        "w": "Montana",
        "d": "Big Sky Country in the northern Rockies"
      },
      {
        "w": "Nebraska",
        "d": "Great Plains state with capital Lincoln"
      },
      {
        "w": "Nevada",
        "d": "Desert state known for Las Vegas and mining"
      },
      {
        "w": "New Hampshire",
        "d": "New England state with the White Mountains"
      },
      {
        "w": "New Mexico",
        "d": "Southwestern state with Pueblo, Hispanic and desert cultures"
      },
      {
        "w": "North Carolina",
        "d": "Atlantic state from Outer Banks to Blue Ridge"
      },
      {
        "w": "Ohio",
        "d": "Midwestern state with major cities on Lake Erie and the Ohio River"
      },
      {
        "w": "Oregon",
        "d": "Pacific Northwest state of forests, coast and high desert"
      },
      {
        "w": "Pennsylvania",
        "d": "State central to early U.S. history and industry"
      },
      {
        "w": "Texas",
        "d": "Large southern state with distinct former-republic identity"
      },
      {
        "w": "Washington State",
        "d": "Pacific Northwest state with Seattle and the Cascades"
      }
    ]
  },
  {
    "name": "U.S. national parks",
    "tags": {
      "a": "human",
      "b": "geography",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Yellowstone National Park",
        "d": "First U.S. national park, famous for geysers and wildlife"
      },
      {
        "w": "Yosemite",
        "d": "Sierra Nevada park known for granite cliffs and waterfalls"
      },
      {
        "w": "Grand Canyon",
        "d": "Arizona park centered on the vast Colorado River canyon"
      },
      {
        "w": "Zion",
        "d": "Utah canyon park with red cliffs and narrow hikes"
      },
      {
        "w": "Glacier",
        "d": "Montana park with alpine scenery and shrinking glaciers"
      },
      {
        "w": "Everglades",
        "d": "Florida wetland park of sawgrass, mangroves and alligators"
      },
      {
        "w": "Sequoia",
        "d": "California park protecting giant sequoia groves"
      },
      {
        "w": "Olympic",
        "d": "Washington park combining rainforest, mountains and coast"
      },
      {
        "w": "Acadia",
        "d": "Maine coastal park with granite peaks and Atlantic views"
      },
      {
        "w": "Joshua Tree",
        "d": "Desert park where Mojave and Colorado ecosystems meet"
      },
      {
        "w": "Denali",
        "d": "Alaska park containing North America’s highest mountain"
      },
      {
        "w": "Mount Rainier",
        "d": "Washington volcano park centered on a glaciated peak"
      },
      {
        "w": "Crater Lake",
        "d": "Oregon park built around a deep blue volcanic lake"
      },
      {
        "w": "Bryce Canyon",
        "d": "Utah park famous for hoodoo rock formations"
      },
      {
        "w": "Arches",
        "d": "Utah park with thousands of natural stone arches"
      },
      {
        "w": "Badlands",
        "d": "South Dakota park of eroded buttes and fossil beds"
      },
      {
        "w": "Big Bend",
        "d": "Texas park along the Rio Grande and Chisos Mountains"
      },
      {
        "w": "Great Smoky Mountains",
        "d": "Appalachian park known for biodiversity and misty ridges"
      },
      {
        "w": "Hawaiʻi Volcanoes",
        "d": "Park protecting active volcanic landscapes on Hawaii Island"
      },
      {
        "w": "Saguaro",
        "d": "Arizona park named for giant cactus forests"
      },
      {
        "w": "Wind Cave",
        "d": "South Dakota park with a complex cave and prairie wildlife"
      },
      {
        "w": "Petrified Forest",
        "d": "Arizona park with fossilized trees and painted desert"
      },
      {
        "w": "Mammoth Cave",
        "d": "Kentucky park containing the world’s longest known cave system"
      },
      {
        "w": "Redwood National Park",
        "d": "Northern California park protecting coast redwoods"
      },
      {
        "w": "Shenandoah",
        "d": "Virginia park along the Blue Ridge Mountains"
      },
      {
        "w": "Rocky Mountain",
        "d": "Colorado park of alpine tundra and high peaks"
      },
      {
        "w": "Grand Teton",
        "d": "Wyoming park with dramatic mountain skyline"
      },
      {
        "w": "Mesa Verde National Park",
        "d": "Colorado park protecting Ancestral Pueblo cliff dwellings"
      },
      {
        "w": "Lassen Volcanic",
        "d": "California park with volcanic domes, fumaroles and hot springs"
      },
      {
        "w": "Congaree",
        "d": "South Carolina park preserving old-growth floodplain forest"
      },
      {
        "w": "Canyonlands",
        "d": "Utah park of canyons carved by the Colorado and Green rivers"
      },
      {
        "w": "Hot Springs",
        "d": "Arkansas park built around historic thermal baths"
      },
      {
        "w": "Pinnacles",
        "d": "California park of volcanic spires and condor habitat"
      },
      {
        "w": "Indiana Dunes",
        "d": "Lake Michigan park of beaches, dunes and wetlands"
      },
      {
        "w": "Death Valley",
        "d": "Desert park with extreme heat, salt flats and mountains"
      }
    ]
  },
  {
    "name": "American brands",
    "tags": {
      "a": "geek",
      "b": "business",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Coca-Cola",
        "d": "Atlanta soft-drink brand and global advertising icon"
      },
      {
        "w": "Boeing",
        "d": "American aerospace company known for commercial jets"
      },
      {
        "w": "Harley-Davidson",
        "d": "Motorcycle brand associated with cruisers and biker culture"
      },
      {
        "w": "Levi’s",
        "d": "Denim brand famous for blue jeans"
      },
      {
        "w": "Zippo",
        "d": "Pennsylvania lighter brand with a windproof metal case"
      },
      {
        "w": "Colt",
        "d": "Firearms maker associated with revolvers and frontier mythology"
      },
      {
        "w": "Winchester",
        "d": "Firearms brand tied to lever-action rifles"
      },
      {
        "w": "Budweiser",
        "d": "American beer brand with Clydesdale advertising"
      },
      {
        "w": "Jack Daniel’s",
        "d": "Tennessee whiskey brand from Lynchburg"
      },
      {
        "w": "Nike Inc.",
        "d": "Sportswear giant built around the swoosh logo"
      },
      {
        "w": "Marlboro",
        "d": "Cigarette brand famous for cowboy advertising"
      },
      {
        "w": "McDonald’s",
        "d": "Fast-food chain symbolized by the Golden Arches"
      },
      {
        "w": "Apple",
        "d": "California technology company behind iPhone and Mac"
      },
      {
        "w": "Walmart",
        "d": "Retail giant founded by Sam Walton"
      },
      {
        "w": "Pepsi",
        "d": "Soft-drink brand and Coca-Cola rival"
      },
      {
        "w": "Amazon",
        "d": "E-commerce and cloud-computing company founded by Jeff Bezos"
      },
      {
        "w": "Intel",
        "d": "American semiconductor company central to microprocessor history"
      },
      {
        "w": "Gillette",
        "d": "Razor and shaving-products brand"
      },
      {
        "w": "Heinz",
        "d": "Food brand famous for ketchup"
      },
      {
        "w": "Tabasco",
        "d": "Hot sauce brand from Avery Island, Louisiana"
      },
      {
        "w": "IBM",
        "d": "American technology company central to mainframes and enterprise computing"
      },
      {
        "w": "Colgate",
        "d": "Oral-care brand known for toothpaste"
      },
      {
        "w": "Google",
        "d": "Search and advertising company from Silicon Valley"
      },
      {
        "w": "Microsoft",
        "d": "Software company behind Windows and Office"
      },
      {
        "w": "Starbucks",
        "d": "Coffee chain founded in Seattle"
      },
      {
        "w": "3M",
        "d": "Industrial company known for Post-it Notes and materials"
      },
      {
        "w": "Pfizer",
        "d": "Pharmaceutical company known for major vaccines and medicines"
      },
      {
        "w": "New Balance",
        "d": "American athletic-footwear brand based in Boston"
      },
      {
        "w": "Ray-Ban",
        "d": "Eyewear brand famous for Aviator and Wayfarer frames"
      },
      {
        "w": "Motorola",
        "d": "Telecommunications brand linked to early mobile phones"
      },
      {
        "w": "Wrigley’s",
        "d": "Chewing-gum brand founded in Chicago"
      },
      {
        "w": "FedEx Corporation",
        "d": "Delivery company known for overnight shipping"
      },
      {
        "w": "Disney Company",
        "d": "Entertainment company built around films, parks and media"
      },
      {
        "w": "Procter & Gamble",
        "d": "Consumer-goods company behind many household brands"
      },
      {
        "w": "Blue Origin",
        "d": "American space company founded by Jeff Bezos"
      }
    ]
  },
  {
    "name": "American music genres",
    "tags": {
      "a": "human",
      "b": "music",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Delta blues",
        "d": "Acoustic blues style associated with the Mississippi Delta"
      },
      {
        "w": "Chicago blues",
        "d": "Electric urban blues shaped by migration to Chicago"
      },
      {
        "w": "New Orleans jazz",
        "d": "Early jazz style rooted in brass bands and collective improvisation"
      },
      {
        "w": "Motown sound",
        "d": "Polished Detroit soul-pop style from Motown Records"
      },
      {
        "w": "Doo-wop",
        "d": "Vocal-harmony style with nonsense syllables and street-corner roots"
      },
      {
        "w": "Bluegrass",
        "d": "Fast acoustic string-band music linked to Appalachia"
      },
      {
        "w": "Cajun music",
        "d": "Louisiana French dance music with fiddle and accordion"
      },
      {
        "w": "Louisiana zydeco",
        "d": "Creole dance music from Louisiana with accordion and washboard"
      },
      {
        "w": "Honky-tonk",
        "d": "Country-bar style with steel guitar and heartbreak lyrics"
      },
      {
        "w": "Nashville sound",
        "d": "Smooth country-pop production style of the late 1950s onward"
      },
      {
        "w": "Western swing",
        "d": "Dance music blending country fiddles and big-band swing"
      },
      {
        "w": "Surf rock",
        "d": "Guitar-driven style associated with California beaches"
      },
      {
        "w": "Folk rock",
        "d": "Electric folk style popularized in the 1960s"
      },
      {
        "w": "Psychedelic rock",
        "d": "1960s rock linked to acid culture and extended sound"
      },
      {
        "w": "Detroit techno",
        "d": "Electronic dance style created by Detroit producers"
      },
      {
        "w": "Philadelphia soul",
        "d": "Smooth orchestrated soul style from Philadelphia"
      },
      {
        "w": "Southern soul",
        "d": "Gritty soul style associated with Memphis and Muscle Shoals"
      },
      {
        "w": "G-funk",
        "d": "West Coast hip-hop style with synths and laid-back grooves"
      },
      {
        "w": "Crunk",
        "d": "Southern hip-hop club style with shouted hooks"
      },
      {
        "w": "Atlanta trap",
        "d": "Trap style rooted in Atlanta hip-hop production"
      },
      {
        "w": "Drill music",
        "d": "Dark rap style that developed in Chicago and later spread"
      },
      {
        "w": "Old-school hip-hop",
        "d": "Early hip-hop style before the genre’s commercial explosion"
      },
      {
        "w": "Rockabilly",
        "d": "Early rock style mixing country twang and rhythm-and-blues drive"
      },
      {
        "w": "Hardcore punk",
        "d": "Fast aggressive punk style that grew in U.S. scenes"
      },
      {
        "w": "No wave",
        "d": "Experimental downtown New York reaction against new wave polish"
      },
      {
        "w": "Math rock",
        "d": "Guitar music using odd meters and intricate rhythms"
      },
      {
        "w": "Emo",
        "d": "Rock style focused on emotional intensity and confessional lyrics"
      },
      {
        "w": "Skate punk",
        "d": "Fast punk style tied to skateboarding culture"
      },
      {
        "w": "Americana",
        "d": "Roots-music umbrella mixing folk, country, blues and rock"
      },
      {
        "w": "Neo-soul",
        "d": "Modern soul style with jazz, hip-hop and R&B influences"
      },
      {
        "w": "Boom bap",
        "d": "Hip-hop production style with hard drums and chopped samples"
      },
      {
        "w": "Hyphy",
        "d": "Bay Area hip-hop style of energetic beats and slang"
      },
      {
        "w": "Chopped and screwed",
        "d": "Houston remix style slowing tracks into woozy textures"
      },
      {
        "w": "Minimal techno",
        "d": "Stripped-down electronic dance style with repetitive structures"
      },
      {
        "w": "Garage rock revival",
        "d": "Raw early-2000s guitar-rock wave with retro energy"
      }
    ]
  },
  {
    "name": "NHL teams",
    "tags": {
      "a": "human",
      "b": "sport",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Montreal Canadiens",
        "d": "Historic NHL team with the league’s most Stanley Cups"
      },
      {
        "w": "Toronto Maple Leafs",
        "d": "Original Six team and Toronto hockey institution"
      },
      {
        "w": "Boston Bruins",
        "d": "Original Six team known for black-and-gold colors"
      },
      {
        "w": "Chicago Blackhawks",
        "d": "Original Six franchise from Chicago"
      },
      {
        "w": "Detroit Red Wings",
        "d": "Original Six team nicknamed Hockeytown’s club"
      },
      {
        "w": "New York Rangers",
        "d": "Original Six franchise playing at Madison Square Garden"
      },
      {
        "w": "Pittsburgh Penguins",
        "d": "NHL team associated with Lemieux and Crosby"
      },
      {
        "w": "Tampa Bay Lightning",
        "d": "Florida team with recent Stanley Cup success"
      },
      {
        "w": "Edmonton Oilers",
        "d": "Alberta franchise associated with Wayne Gretzky and Connor McDavid"
      },
      {
        "w": "Colorado Avalanche",
        "d": "Denver team that relocated from Quebec"
      },
      {
        "w": "Washington Capitals",
        "d": "D.C. franchise long led by Alex Ovechkin"
      },
      {
        "w": "Vegas Golden Knights",
        "d": "Expansion team that won a Cup quickly"
      },
      {
        "w": "Florida Panthers",
        "d": "South Florida team based in Sunrise"
      },
      {
        "w": "Carolina Hurricanes",
        "d": "Raleigh team formerly known as the Hartford Whalers"
      },
      {
        "w": "Dallas Stars",
        "d": "Texas franchise that moved from Minnesota"
      },
      {
        "w": "St. Louis Blues",
        "d": "Missouri team named for the city’s music heritage"
      },
      {
        "w": "Minnesota Wild",
        "d": "Twin Cities team replacing the departed North Stars"
      },
      {
        "w": "Nashville Predators",
        "d": "Tennessee franchise with a saber-toothed cat logo"
      },
      {
        "w": "Vancouver Canucks",
        "d": "British Columbia team with a long-suffering fan base"
      },
      {
        "w": "Calgary Flames",
        "d": "Alberta team that moved from Atlanta"
      },
      {
        "w": "Winnipeg Jets",
        "d": "Manitoba franchise name revived after the Thrashers moved"
      },
      {
        "w": "Ottawa Senators",
        "d": "Canadian capital team named for an older franchise"
      },
      {
        "w": "Seattle Kraken",
        "d": "Pacific Northwest expansion team with nautical branding"
      },
      {
        "w": "New Jersey Devils",
        "d": "Franchise named for a local folklore creature"
      },
      {
        "w": "Anaheim Ducks",
        "d": "California team born from a Disney movie brand"
      },
      {
        "w": "New York Islanders",
        "d": "Long Island team with a 1980s dynasty"
      },
      {
        "w": "Philadelphia Flyers",
        "d": "Pennsylvania team known for Broad Street Bullies history"
      },
      {
        "w": "San Jose Sharks",
        "d": "Bay Area team with teal colors"
      },
      {
        "w": "Buffalo Sabres",
        "d": "Upstate New York team with crossed-swords logo"
      },
      {
        "w": "Los Angeles Kings",
        "d": "California team with Gretzky-era glamour and later Cups"
      },
      {
        "w": "Columbus Blue Jackets",
        "d": "Ohio team named for Civil War history"
      },
      {
        "w": "Utah Mammoth",
        "d": "Utah NHL franchise name adopted after relocation"
      },
      {
        "w": "Quebec Nordiques",
        "d": "Former NHL team that became the Colorado Avalanche"
      },
      {
        "w": "Hartford Whalers",
        "d": "Former NHL team remembered for its logo and Brass Bonanza"
      },
      {
        "w": "Atlanta Thrashers",
        "d": "Former NHL franchise that became the Winnipeg Jets"
      }
    ]
  },
  {
    "name": "San Francisco",
    "tags": {
      "a": "human",
      "b": "geography",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Alcatraz Island",
        "d": "Former prison island in San Francisco Bay"
      },
      {
        "w": "Chinatown SF",
        "d": "Historic Chinese-American neighborhood near downtown"
      },
      {
        "w": "Fisherman’s Wharf",
        "d": "Waterfront tourist district with seafood and piers"
      },
      {
        "w": "Haight-Ashbury",
        "d": "Neighborhood tied to 1960s counterculture and hippies"
      },
      {
        "w": "Mission District",
        "d": "Neighborhood known for murals, burritos and Latino culture"
      },
      {
        "w": "San Francisco cable car",
        "d": "Historic hill-climbing transit symbol of San Francisco"
      },
      {
        "w": "Lombard Street",
        "d": "Crooked street famous for tight hairpin turns"
      },
      {
        "w": "Painted Ladies",
        "d": "Victorian houses facing Alamo Square"
      },
      {
        "w": "Karl the Fog",
        "d": "Nickname for San Francisco’s recurring fog"
      },
      {
        "w": "Twin Peaks hills",
        "d": "Hilltop viewpoint over the city"
      },
      {
        "w": "Coit Tower",
        "d": "Art Deco tower with murals on Telegraph Hill"
      },
      {
        "w": "Dolores Park",
        "d": "Popular Mission District park with skyline views"
      },
      {
        "w": "Presidio",
        "d": "Former military post turned national park site"
      },
      {
        "w": "Pier 39",
        "d": "Tourist pier known for sea lions"
      },
      {
        "w": "Mission Dolores",
        "d": "Historic Spanish mission that gave the Mission District its name"
      },
      {
        "w": "Sourdough bread",
        "d": "Tangy bread strongly associated with San Francisco bakeries"
      },
      {
        "w": "Duboce Triangle",
        "d": "Small neighborhood near Castro and Lower Haight"
      },
      {
        "w": "Castro District",
        "d": "Historic LGBTQ neighborhood"
      },
      {
        "w": "Noe Valley",
        "d": "Residential neighborhood known for Victorian homes and hills"
      },
      {
        "w": "SoMa",
        "d": "South of Market district of tech offices, clubs and warehouses"
      },
      {
        "w": "Civic Center SF",
        "d": "District containing city hall and major cultural institutions"
      },
      {
        "w": "Embarcadero",
        "d": "Waterfront boulevard along the eastern edge of the city"
      },
      {
        "w": "Golden Gate Bridge",
        "d": "Suspension bridge and defining symbol of San Francisco"
      },
      {
        "w": "Bay Bridge",
        "d": "Bridge connecting San Francisco and Oakland"
      },
      {
        "w": "Cesar Chavez Street",
        "d": "Major east-west street named for the labor leader"
      },
      {
        "w": "Mission murals",
        "d": "Public mural tradition on walls and alleys in the Mission"
      },
      {
        "w": "Tenderloin",
        "d": "Dense central neighborhood with nightlife and social challenges"
      },
      {
        "w": "Glen Park",
        "d": "Neighborhood near a canyon park and transit hub"
      },
      {
        "w": "Sutro Tower",
        "d": "Tall red-and-white broadcast tower visible across the city"
      },
      {
        "w": "Sutro Baths",
        "d": "Ruins of a nineteenth-century bathhouse by the ocean"
      },
      {
        "w": "Outer Sunset",
        "d": "Foggy neighborhood by Ocean Beach"
      },
      {
        "w": "Clipper Card",
        "d": "Bay Area transit payment card"
      },
      {
        "w": "Dogpatch",
        "d": "Former industrial waterfront neighborhood turned mixed-use district"
      },
      {
        "w": "Hayes Valley",
        "d": "Central neighborhood known for shops and restaurants"
      },
      {
        "w": "Golden Gate Park",
        "d": "Large urban park stretching toward the Pacific"
      }
    ]
  },
  {
    "name": "California",
    "tags": {
      "a": "human",
      "b": "geography",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Giant sequoia",
        "d": "Massive Sierra Nevada tree species among the world’s largest organisms"
      },
      {
        "w": "Yosemite Valley",
        "d": "Granite valley with cliffs, waterfalls and meadows"
      },
      {
        "w": "Mojave Desert",
        "d": "Arid desert region shaping much of Southern California"
      },
      {
        "w": "Big Sur",
        "d": "Dramatic coastline along California Highway 1"
      },
      {
        "w": "Venice Beach",
        "d": "Los Angeles beach district with boardwalk culture"
      },
      {
        "w": "Malibu",
        "d": "Coastal city associated with beaches and celebrity homes"
      },
      {
        "w": "Hollywood",
        "d": "Los Angeles district and symbol of the film industry"
      },
      {
        "w": "Hayward Fault",
        "d": "Bay Area fault considered a major earthquake risk"
      },
      {
        "w": "Gold Rush",
        "d": "1848-49 rush that transformed California’s population and economy"
      },
      {
        "w": "California grizzly",
        "d": "Extinct state-symbol bear shown on the state flag"
      },
      {
        "w": "Joshua Tree landscape",
        "d": "Mojave desert landscape of yucca trees and boulders"
      },
      {
        "w": "Lake Tahoe",
        "d": "Alpine lake on the California-Nevada border"
      },
      {
        "w": "Mount Shasta",
        "d": "Volcanic peak in Northern California"
      },
      {
        "w": "Sierra Nevada",
        "d": "Mountain range containing Yosemite and high granite peaks"
      },
      {
        "w": "Napa Valley",
        "d": "Famous wine region north of San Francisco Bay"
      },
      {
        "w": "Freeway culture",
        "d": "Car-centered transportation pattern associated with Southern California"
      },
      {
        "w": "Griffith Observatory",
        "d": "Los Angeles landmark overlooking the city"
      },
      {
        "w": "Ballot initiative",
        "d": "California direct-democracy mechanism for voter propositions"
      },
      {
        "w": "Coast redwood forests",
        "d": "Tall coastal forests of Northern California"
      },
      {
        "w": "Monterey Bay",
        "d": "Central Coast bay known for marine life"
      },
      {
        "w": "Carpinteria",
        "d": "Small coastal city near Santa Barbara"
      },
      {
        "w": "Santa Barbara",
        "d": "Coastal city with Spanish Colonial Revival architecture"
      },
      {
        "w": "Bodega Bay",
        "d": "Northern California coastal town linked to Hitchcock’s The Birds"
      },
      {
        "w": "Point Reyes",
        "d": "Windy peninsula and national seashore north of San Francisco"
      },
      {
        "w": "Longboard culture",
        "d": "Surf and skate style tied to California beaches"
      },
      {
        "w": "Wildfires",
        "d": "Recurring fire risk shaping California landscapes and policy"
      },
      {
        "w": "California Aqueduct",
        "d": "Water system moving water through the state"
      },
      {
        "w": "Proposition 13",
        "d": "1978 property-tax initiative that reshaped California finance"
      },
      {
        "w": "Chavez Ravine",
        "d": "Los Angeles area transformed by Dodger Stadium"
      },
      {
        "w": "Pacific Coast Highway",
        "d": "Scenic coastal highway along much of California"
      },
      {
        "w": "Disney Concert Hall",
        "d": "Frank Gehry building in downtown Los Angeles"
      },
      {
        "w": "Santa Clara Valley",
        "d": "Bay Area valley whose tech cluster became globally famous"
      },
      {
        "w": "Central Valley",
        "d": "Agricultural heartland between coastal ranges and Sierra Nevada"
      },
      {
        "w": "Salton Sea",
        "d": "Shrinking inland lake with environmental problems"
      },
      {
        "w": "Channel Islands",
        "d": "Island chain and national park off Southern California"
      }
    ]
  },
  {
    "name": "California food, wine & cafe culture",
    "tags": {
      "a": "human",
      "b": "culture",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "Napa Valley wine",
        "d": "Wine culture centered on Cabernet Sauvignon and tasting rooms"
      },
      {
        "w": "Sonoma wine country",
        "d": "Wine region north of San Francisco with a relaxed reputation"
      },
      {
        "w": "Cabernet Sauvignon",
        "d": "Flagship red grape of Napa Valley"
      },
      {
        "w": "Zinfandel",
        "d": "Red grape strongly associated with California wine history"
      },
      {
        "w": "Pinot Noir",
        "d": "Cool-climate red grape grown in Sonoma and Santa Barbara"
      },
      {
        "w": "Chardonnay",
        "d": "Major California white wine often aged in oak"
      },
      {
        "w": "In-N-Out Burger",
        "d": "California burger chain with a cult following"
      },
      {
        "w": "Animal Style",
        "d": "In-N-Out secret-menu preparation with mustard, onions and sauce"
      },
      {
        "w": "Cioppino",
        "d": "San Francisco seafood stew with Italian immigrant roots"
      },
      {
        "w": "Dungeness crab",
        "d": "Pacific crab central to winter seafood in Northern California"
      },
      {
        "w": "Sourdough loaf",
        "d": "Tangy bread associated with San Francisco bakeries"
      },
      {
        "w": "California roll",
        "d": "Sushi roll popularized on the West Coast"
      },
      {
        "w": "Cobb salad",
        "d": "Los Angeles salad with chicken, avocado, bacon and blue cheese"
      },
      {
        "w": "Fish taco",
        "d": "Baja-influenced taco popular in Southern California"
      },
      {
        "w": "Santa Maria tri-tip",
        "d": "Central Coast barbecue style built around beef tri-tip"
      },
      {
        "w": "Garlic fries",
        "d": "Ballpark fries strongly associated with Bay Area food culture"
      },
      {
        "w": "Date shake",
        "d": "Palm Springs desert milkshake made with dates"
      },
      {
        "w": "Meyer lemon",
        "d": "Fragrant citrus often used in California cooking"
      },
      {
        "w": "Castroville artichoke",
        "d": "Central Coast crop celebrated in a town festival"
      },
      {
        "w": "Ghirardelli Chocolate",
        "d": "San Francisco chocolate brand and tourist landmark"
      },
      {
        "w": "Tartine Bakery",
        "d": "Mission District bakery famous for bread and pastries"
      },
      {
        "w": "Chez Panisse",
        "d": "Berkeley restaurant that defined California cuisine"
      },
      {
        "w": "Blue Bottle Coffee",
        "d": "Oakland-born coffee company tied to third-wave coffee culture"
      },
      {
        "w": "Peet’s Coffee",
        "d": "Berkeley coffee company that influenced American specialty coffee"
      },
      {
        "w": "Mission burrito",
        "d": "Large foil-wrapped burrito style from San Francisco"
      },
      {
        "w": "Farm-to-table",
        "d": "Restaurant philosophy of local sourcing and seasonal produce"
      },
      {
        "w": "Kombucha",
        "d": "Fermented tea drink embraced by California wellness culture"
      },
      {
        "w": "Craft beer",
        "d": "Small-brewery culture strong in San Diego and the Bay Area"
      },
      {
        "w": "Orange wine",
        "d": "Skin-contact white wine embraced by natural-wine bars"
      },
      {
        "w": "Biodynamic wine",
        "d": "Winegrowing approach using ecological and ritualized farming ideas"
      },
      {
        "w": "Rosé season",
        "d": "Summer pink-wine culture in California wine country"
      },
      {
        "w": "Santa Maria barbecue",
        "d": "Central Coast grilling tradition with oak smoke"
      },
      {
        "w": "Green Goddess dressing",
        "d": "Herb-heavy dressing created at San Francisco’s Palace Hotel"
      },
      {
        "w": "Ranch dressing",
        "d": "California-born buttermilk herb dressing turned national staple"
      },
      {
        "w": "Almond milk latte",
        "d": "Cafe drink tied to California wellness and coffee culture"
      }
    ]
  },
  {
    "name": "Canada",
    "tags": {
      "a": "human",
      "b": "geography",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Maple syrup",
        "d": "Canadian food symbol made from sugar maple sap"
      },
      {
        "w": "Ice hockey",
        "d": "Winter sport deeply tied to Canadian identity"
      },
      {
        "w": "Quebec City",
        "d": "Historic French-speaking city and capital of Quebec province"
      },
      {
        "w": "Niagara Falls",
        "d": "Huge waterfall system on the Canada-U.S. border"
      },
      {
        "w": "Banff",
        "d": "Rocky Mountain town and national park in Alberta"
      },
      {
        "w": "Inuit",
        "d": "Indigenous peoples of Arctic Canada and Greenland"
      },
      {
        "w": "Quebec",
        "d": "French-speaking province with distinct culture and politics"
      },
      {
        "w": "Toronto",
        "d": "Canada’s largest city and financial center"
      },
      {
        "w": "Vancouver",
        "d": "Pacific coastal city between mountains and ocean"
      },
      {
        "w": "Montreal",
        "d": "Quebec metropolis known for bilingual culture and festivals"
      },
      {
        "w": "Mountie",
        "d": "Member of the Royal Canadian Mounted Police"
      },
      {
        "w": "Kayak",
        "d": "Arctic boat term borrowed from Inuit languages"
      },
      {
        "w": "Yukon",
        "d": "Northern territory associated with gold rush history"
      },
      {
        "w": "Canadian Rockies",
        "d": "Mountain range spanning Alberta and British Columbia"
      },
      {
        "w": "Totem pole",
        "d": "Monumental carved pole of Indigenous peoples of the Pacific Northwest"
      },
      {
        "w": "Baffin Island",
        "d": "Huge Arctic island in Nunavut"
      },
      {
        "w": "Tim Hortons",
        "d": "Coffee-and-doughnut chain treated as a Canadian icon"
      },
      {
        "w": "Lacrosse",
        "d": "Sport officially recognized as Canada’s summer national game"
      },
      {
        "w": "First Nations",
        "d": "Indigenous peoples of Canada excluding Inuit and Métis"
      },
      {
        "w": "Nunavut",
        "d": "Inuit-majority Canadian territory created in 1999"
      },
      {
        "w": "Permafrost",
        "d": "Permanently frozen ground across northern Canada"
      },
      {
        "w": "Great Lakes",
        "d": "Freshwater lake system shared by Canada and the United States"
      },
      {
        "w": "Dominion of Canada",
        "d": "Historic term for Canada’s status within the British Empire"
      },
      {
        "w": "Louisbourg",
        "d": "French fortress site in Nova Scotia"
      },
      {
        "w": "Métis",
        "d": "Indigenous people of mixed First Nations and European ancestry"
      },
      {
        "w": "Justin Trudeau",
        "d": "Canadian prime minister and son of Pierre Trudeau"
      },
      {
        "w": "Group of Seven",
        "d": "Canadian painters associated with national landscape art"
      },
      {
        "w": "Alberta",
        "d": "Prairie province known for oil, cattle and mountains"
      },
      {
        "w": "NAFTA",
        "d": "North American free-trade agreement including Canada"
      },
      {
        "w": "Anne of Green Gables",
        "d": "Prince Edward Island literary icon by Lucy Maud Montgomery"
      },
      {
        "w": "Trans-Canada Highway",
        "d": "Road network crossing the country from coast to coast"
      },
      {
        "w": "Curling",
        "d": "Ice sport with stones, brooms and strategy"
      },
      {
        "w": "Hudson Bay",
        "d": "Large inland sea central to fur-trade history"
      },
      {
        "w": "RCMP",
        "d": "Federal police force known for red serge uniforms"
      },
      {
        "w": "Canadian Shield",
        "d": "Ancient rock region covering much of eastern and central Canada"
      }
    ]
  },
  {
    "name": "literary genres & forms",
    "tags": {
      "a": "human",
      "b": "books",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Novel",
        "d": "Long prose fiction with sustained plot and characters"
      },
      {
        "w": "Novella",
        "d": "Prose fiction shorter than a novel but longer than a short story"
      },
      {
        "w": "Short story",
        "d": "Brief prose fiction focused on a compact situation or turn"
      },
      {
        "w": "Essay",
        "d": "Prose form developing an argument, reflection or experiment"
      },
      {
        "w": "Drama",
        "d": "Literary work written for performance by actors"
      },
      {
        "w": "Tragedy",
        "d": "Drama form ending in catastrophe or irreversible loss"
      },
      {
        "w": "Comedy",
        "d": "Dramatic or narrative form built toward comic resolution"
      },
      {
        "w": "Memoir",
        "d": "First-person prose account of remembered life experience"
      },
      {
        "w": "Autobiography",
        "d": "Life story written by its own subject"
      },
      {
        "w": "Diary",
        "d": "Dated personal record of events and thoughts"
      },
      {
        "w": "Chronicle",
        "d": "Narrative record arranged by time order"
      },
      {
        "w": "Fable",
        "d": "Brief story using animals or figures to teach a lesson"
      },
      {
        "w": "Parable",
        "d": "Short narrative illustrating a moral or spiritual point"
      },
      {
        "w": "Satire",
        "d": "Work using ridicule to expose vice, folly or power"
      },
      {
        "w": "Pamphlet",
        "d": "Short polemical publication on a public issue"
      },
      {
        "w": "Feuilleton",
        "d": "Light literary or journalistic piece in a newspaper tradition"
      },
      {
        "w": "Sketch",
        "d": "Short descriptive or comic prose piece"
      },
      {
        "w": "Libretto",
        "d": "Text of an opera or musical stage work"
      },
      {
        "w": "Farce",
        "d": "Comic dramatic form based on absurd situations and speed"
      },
      {
        "w": "Vaudeville",
        "d": "Light theatrical entertainment with songs, jokes or sketches"
      },
      {
        "w": "Detective fiction",
        "d": "Genre centered on solving a crime or mystery"
      },
      {
        "w": "Suspense fiction",
        "d": "Genre built around danger, pursuit and tension"
      },
      {
        "w": "Picaresque novel",
        "d": "Episodic story of a roguish outsider moving through society"
      },
      {
        "w": "Bildungsroman",
        "d": "Coming-of-age novel of education and formation"
      },
      {
        "w": "Epistolary novel",
        "d": "Novel told through letters or documents"
      },
      {
        "w": "Frame narrative",
        "d": "Story structure containing another story inside it"
      },
      {
        "w": "Roman-fleuve",
        "d": "Long novel sequence following many characters or generations"
      },
      {
        "w": "Family saga",
        "d": "Narrative following a family across time"
      },
      {
        "w": "Historical novel",
        "d": "Fiction set in a past era with historical detail"
      },
      {
        "w": "Campus novel",
        "d": "Fiction set in academic institutions"
      },
      {
        "w": "Travelogue",
        "d": "Literary account of travel and places"
      },
      {
        "w": "Pastoral prose",
        "d": "Literary mode idealizing rural life"
      },
      {
        "w": "Confession",
        "d": "First-person form organized around admission and self-examination"
      },
      {
        "w": "Manifesto",
        "d": "Public declaration of artistic, political or literary principles"
      },
      {
        "w": "Prose miniature",
        "d": "Very short literary prose piece with concentrated effect"
      }
    ]
  },
  {
    "name": "famous actresses",
    "tags": {
      "a": "human",
      "b": "movies",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Meryl Streep",
        "d": "American actress known for range and multiple Oscars"
      },
      {
        "w": "Audrey Hepburn",
        "d": "Actress and style icon of Roman Holiday and Breakfast at Tiffany’s"
      },
      {
        "w": "Cate Blanchett",
        "d": "Australian actress known for Elizabeth, Carol and Tár"
      },
      {
        "w": "Vivien Leigh",
        "d": "British actress who played Scarlett O’Hara and Blanche DuBois"
      },
      {
        "w": "Marlene Dietrich",
        "d": "German-American star of The Blue Angel and Hollywood glamour"
      },
      {
        "w": "Sophia Loren",
        "d": "Italian actress and international film icon"
      },
      {
        "w": "Isabelle Huppert",
        "d": "French actress known for daring psychological roles"
      },
      {
        "w": "Judi Dench",
        "d": "British stage and screen actress also known as M in Bond films"
      },
      {
        "w": "Nicole Kidman",
        "d": "Australian-American actress of Moulin Rouge! and The Hours"
      },
      {
        "w": "Kate Winslet",
        "d": "British actress of Titanic, Sense and Sensibility and more"
      },
      {
        "w": "Fanny Ardant",
        "d": "French actress associated with Truffaut and European cinema"
      },
      {
        "w": "Monica Bellucci",
        "d": "Italian actress and model with international film roles"
      },
      {
        "w": "Greta Garbo",
        "d": "Swedish Hollywood star famous for mystery and restraint"
      },
      {
        "w": "Ingrid Bergman",
        "d": "Swedish actress of Casablanca and Notorious"
      },
      {
        "w": "Bette Davis",
        "d": "Hollywood star known for fierce roles and sharp delivery"
      },
      {
        "w": "Elizabeth Taylor",
        "d": "Hollywood icon of Cleopatra and Who’s Afraid of Virginia Woolf?"
      },
      {
        "w": "Tilda Swinton",
        "d": "British actress known for androgynous style and art cinema"
      },
      {
        "w": "Jeanne Moreau",
        "d": "French New Wave actress of Jules and Jim"
      },
      {
        "w": "Faye Dunaway",
        "d": "American actress of Bonnie and Clyde and Network"
      },
      {
        "w": "Gina Lollobrigida",
        "d": "Italian star of postwar European cinema"
      },
      {
        "w": "Catherine Deneuve",
        "d": "French actress of Belle de Jour and The Umbrellas of Cherbourg"
      },
      {
        "w": "Angelina Jolie",
        "d": "American actress and director known for action and drama roles"
      },
      {
        "w": "Natalie Portman",
        "d": "Actress of Black Swan, Jackie and Star Wars prequels"
      },
      {
        "w": "Halle Berry",
        "d": "Oscar-winning actress of Monster’s Ball and action roles"
      },
      {
        "w": "Charlize Theron",
        "d": "South African-American actress of Monster and Mad Max: Fury Road"
      },
      {
        "w": "Penélope Cruz",
        "d": "Spanish actress associated with Almodóvar and international cinema"
      },
      {
        "w": "Salma Hayek",
        "d": "Mexican-American actress of Frida and many Hollywood roles"
      },
      {
        "w": "Emma Thompson",
        "d": "British actress and screenwriter known for wit and period drama"
      },
      {
        "w": "Helen Mirren",
        "d": "British actress known for The Queen and stage work"
      },
      {
        "w": "Audrey Tautou",
        "d": "French actress of Amélie"
      },
      {
        "w": "Rita Moreno",
        "d": "Puerto Rican EGOT winner of West Side Story"
      },
      {
        "w": "Sigourney Weaver",
        "d": "American actress of Alien and science-fiction cinema"
      },
      {
        "w": "Marilyn Monroe",
        "d": "Hollywood star and enduring pop-cultural icon"
      },
      {
        "w": "Brigitte Bardot",
        "d": "French actress and sex symbol of 1950s cinema"
      },
      {
        "w": "Shirley MacLaine",
        "d": "American actress of The Apartment and Terms of Endearment"
      }
    ]
  },
  {
    "name": "desserts & pastries",
    "tags": {
      "a": "human",
      "b": "food",
      "difficulty": "easy"
    },
    "words": [
      {
        "w": "Macaron",
        "d": "French almond meringue sandwich cookie with filling"
      },
      {
        "w": "Tiramisu",
        "d": "Italian coffee-soaked dessert with mascarpone"
      },
      {
        "w": "Chocolate fondant",
        "d": "Warm cake with a molten chocolate center"
      },
      {
        "w": "Meringue",
        "d": "Sweet foam of whipped egg whites and sugar"
      },
      {
        "w": "Soufflé",
        "d": "Light baked dish that rises dramatically in the oven"
      },
      {
        "w": "Crème brûlée",
        "d": "Custard dessert with a crisp caramelized sugar top"
      },
      {
        "w": "Profiterole",
        "d": "Small choux pastry filled with cream or ice cream"
      },
      {
        "w": "Éclair",
        "d": "Long choux pastry filled with cream and glazed"
      },
      {
        "w": "Apple strudel",
        "d": "Layered pastry associated with Austria and Central Europe"
      },
      {
        "w": "Cheesecake",
        "d": "Cream-cheese dessert with a crumb crust"
      },
      {
        "w": "Panna cotta",
        "d": "Italian set cream dessert"
      },
      {
        "w": "Cannoli",
        "d": "Sicilian pastry tubes filled with sweet ricotta"
      },
      {
        "w": "Brioche",
        "d": "Rich buttery French bread used in sweet baking"
      },
      {
        "w": "Mille-feuille",
        "d": "Layered puff-pastry dessert with cream"
      },
      {
        "w": "Baklava",
        "d": "Layered pastry with nuts and syrup"
      },
      {
        "w": "Mochi",
        "d": "Japanese rice cake with chewy texture"
      },
      {
        "w": "Brownie",
        "d": "Dense chocolate bar dessert"
      },
      {
        "w": "Cupcake",
        "d": "Small individual cake with frosting"
      },
      {
        "w": "Galette",
        "d": "Rustic flat pastry or cake"
      },
      {
        "w": "Clafoutis",
        "d": "French baked fruit custard dessert"
      },
      {
        "w": "Sachertorte",
        "d": "Viennese chocolate cake with apricot jam"
      },
      {
        "w": "Opera cake",
        "d": "Layered French cake with coffee and chocolate"
      },
      {
        "w": "Medovik",
        "d": "Russian honey layer cake"
      },
      {
        "w": "Bird’s milk cake",
        "d": "Eastern European soufflé-like cake and candy style"
      },
      {
        "w": "Turkish delight",
        "d": "Gelatinous sweet flavored with rose, citrus or nuts"
      },
      {
        "w": "Halva",
        "d": "Dense sweet made from sesame, sunflower seed or semolina"
      },
      {
        "w": "Canelé",
        "d": "Small Bordeaux pastry with caramelized crust and custardy center"
      },
      {
        "w": "Madeleine",
        "d": "Small shell-shaped French sponge cake"
      },
      {
        "w": "Tarte Tatin",
        "d": "Upside-down caramelized apple tart"
      },
      {
        "w": "Dacquoise",
        "d": "Layered dessert using nut meringue"
      },
      {
        "w": "Financier",
        "d": "Small almond cake shaped like a gold bar"
      },
      {
        "w": "Pastel de nata",
        "d": "Portuguese custard tart"
      },
      {
        "w": "Pavlova",
        "d": "Meringue dessert with cream and fruit"
      },
      {
        "w": "Basbousa",
        "d": "Semolina syrup cake popular in the Middle East"
      },
      {
        "w": "Gulab jamun",
        "d": "Indian milk-solid dumplings soaked in syrup"
      }
    ]
  },
  {
    "name": "international organizations & alliances",
    "tags": {
      "a": "human",
      "b": "history",
      "difficulty": "medium"
    },
    "words": [
      {
        "w": "United Nations",
        "d": "Global organization founded in 1945 after World War II"
      },
      {
        "w": "NATO",
        "d": "North Atlantic military alliance created in 1949"
      },
      {
        "w": "European Union",
        "d": "Political and economic union of European states"
      },
      {
        "w": "African Union",
        "d": "Continental organization of African countries"
      },
      {
        "w": "ASEAN",
        "d": "Association of Southeast Asian Nations"
      },
      {
        "w": "OPEC",
        "d": "Oil-producing countries organization coordinating petroleum policy"
      },
      {
        "w": "G7",
        "d": "Forum of major advanced economies"
      },
      {
        "w": "G20",
        "d": "Forum of major economies including developed and emerging powers"
      },
      {
        "w": "World Trade Organization",
        "d": "Organization governing global trade rules"
      },
      {
        "w": "World Health Organization",
        "d": "UN agency coordinating international public health"
      },
      {
        "w": "Interpol",
        "d": "International criminal-police cooperation organization"
      },
      {
        "w": "OSCE",
        "d": "Security organization rooted in the Helsinki process"
      },
      {
        "w": "Council of Europe",
        "d": "Human-rights organization separate from the European Union"
      },
      {
        "w": "Commonwealth of Nations",
        "d": "Association of states, many formerly in the British Empire"
      },
      {
        "w": "Arab League",
        "d": "Regional organization of Arab states"
      },
      {
        "w": "Organization of American States",
        "d": "Regional organization of states in the Americas"
      },
      {
        "w": "Mercosur",
        "d": "South American trade bloc centered on Brazil, Argentina, Paraguay and Uruguay"
      },
      {
        "w": "BRICS",
        "d": "Grouping of major emerging economies originally Brazil, Russia, India, China and South Africa"
      },
      {
        "w": "Shanghai Cooperation Organisation",
        "d": "Eurasian security and political organization led by China and Russia"
      },
      {
        "w": "World Bank",
        "d": "International development lender based in Washington"
      },
      {
        "w": "International Monetary Fund",
        "d": "Institution lending to states and monitoring financial stability"
      },
      {
        "w": "International Labour Organization",
        "d": "UN agency focused on labor standards"
      },
      {
        "w": "UNESCO",
        "d": "UN agency for education, science and culture"
      },
      {
        "w": "UNICEF",
        "d": "UN agency focused on children and humanitarian support"
      },
      {
        "w": "UNHCR",
        "d": "UN refugee agency"
      },
      {
        "w": "IAEA",
        "d": "International Atomic Energy Agency monitoring nuclear activity"
      },
      {
        "w": "WIPO",
        "d": "UN agency for intellectual property"
      },
      {
        "w": "WMO",
        "d": "UN agency for weather, climate and water"
      },
      {
        "w": "OECD",
        "d": "Organization of mostly high-income democracies focused on policy analysis"
      },
      {
        "w": "Eurasian Economic Union",
        "d": "Post-Soviet economic bloc led by Russia"
      },
      {
        "w": "Pacific Islands Forum",
        "d": "Regional organization of Pacific island states"
      },
      {
        "w": "Nordic Council",
        "d": "Cooperation body for Nordic countries"
      },
      {
        "w": "Benelux Union",
        "d": "Cooperation union of Belgium, Netherlands and Luxembourg"
      },
      {
        "w": "SADC",
        "d": "Southern African Development Community"
      },
      {
        "w": "ECOWAS",
        "d": "Economic Community of West African States"
      }
    ]
  }
];
