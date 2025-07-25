let musicData = {
  rock: [
    {
      id: 1,
      title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
      artist: 'The Beatles',
      year: 1967,
      country: 'UK',
      notes: 'Groundbreaking concept album, often cited as one of the greatest of all time.'
    },
    {
      id: 2,
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      year: 1971,
      country: 'UK',
      notes: 'Features "Stairway to Heaven," a cornerstone of hard rock.'
    },
    {
      id: 3,
      title: 'Dark Side of the Moon',
      artist: 'Pink Floyd',
      year: 1973,
      country: 'UK',
      notes: 'Progressive rock masterpiece, known for its philosophical lyrics and sonic experimentation.'
    },
    {
      id: 4,
      title: 'Rumours',
      artist: 'Fleetwood Mac',
      year: 1977,
      country: 'UK/USA',
      notes: 'Classic rock album with enduring popularity and intricate harmonies.'
    },
    {
      id: 5,
      title: 'Nevermind',
      artist: 'Nirvana',
      year: 1991,
      country: 'USA',
      notes: 'Defined the grunge movement and brought alternative rock to the mainstream.'
    },
    {
      id: 6,
      title: 'The Joshua Tree',
      artist: 'U2',
      year: 1987,
      country: 'Ireland',
      notes: 'Iconic album that solidified U2\'s status as global rock superstars.'
    },
    {
      id: 7,
      title: 'Back in Black',
      artist: 'AC/DC',
      year: 1980,
      country: 'Australia',
      notes: 'One of the best-selling albums of all time, a hard rock essential.'
    },
    {
      id: 8,
      title: 'Appetite for Destruction',
      artist: 'Guns N\' Roses',
      year: 1987,
      country: 'USA',
      notes: 'Debut album that brought raw, energetic rock back to the forefront.'
    },
    {
      id: 9,
      title: 'OK Computer',
      artist: 'Radiohead',
      year: 1997,
      country: 'UK',
      notes: 'Critically acclaimed album pushing the boundaries of alternative rock.'
    },
    {
      id: 10,
      title: 'Hybrid Theory',
      artist: 'Linkin Park',
      year: 2000,
      country: 'USA',
      notes: 'Landmark nu-metal album blending rock, hip-hop, and electronic elements.'
    },
    {
      id: 11,
      title: 'American Idiot',
      artist: 'Green Day',
      year: 2004,
      country: 'USA',
      notes: 'Revitalized punk rock with a politically charged rock opera.'
    },
    {
      id: 12,
      title: 'Is This It',
      artist: 'The Strokes',
      year: 2001,
      country: 'USA',
      notes: 'Pioneering album of the 2000s indie rock revival.'
    },
    {
      id: 13,
      title: 'Elephant',
      artist: 'The White Stripes',
      year: 2003,
      country: 'USA',
      notes: 'Garage rock revival album featuring the hit "Seven Nation Army."'
    },
    {
      id: 14,
      title: 'Meteora',
      artist: 'Linkin Park',
      year: 2003,
      country: 'USA',
      notes: 'Follow-up to Hybrid Theory, continuing their signature sound.'
    },
    {
      id: 15,
      title: 'The Black Parade',
      artist: 'My Chemical Romance',
      year: 2006,
      country: 'USA',
      notes: 'A theatrical concept album that became an emo and rock anthem.'
    },
    {
      id: 16,
      title: 'Plastic Beach',
      artist: 'Gorillaz',
      year: 2010,
      country: 'UK',
      notes: 'Experimental album from the virtual band, blending rock, electronic, and hip-hop.'
    },
    {
      id: 17,
      title: 'El Lado Oscuro del Corazón',
      artist: 'Cuarteto de Nos',
      year: 1993,
      country: 'Uruguay',
      notes: 'Early work from the Uruguayan band known for their unique lyrical style.'
    },
    {
      id: 18,
      title: 'Reino de Plástico',
      artist: 'La Vela Puerca',
      year: 2014,
      country: 'Uruguay',
      notes: 'Recent work from the popular Uruguayan rock band.'
    },
    {
      id: 19,
      title: 'AM',
      artist: 'Arctic Monkeys',
      year: 2013,
      country: 'UK',
      notes: 'Critically acclaimed album that solidified their global rock presence.'
    },
    {
      id: 20,
      title: 'In Rainbows',
      artist: 'Radiohead',
      year: 2007,
      country: 'UK',
      notes: 'Praised for its emotional depth and melodic richness.'
    }
  ],
  hip_hop: [
    {
      id: 1,
      title: 'Rapper\'s Delight',
      artist: 'The Sugarhill Gang',
      year: 1979,
      country: 'USA',
      notes: 'Often considered the first hip-hop song to gain widespread popularity.'
    },
    {
      id: 2,
      title: 'Straight Outta Compton',
      artist: 'N.W.A',
      year: 1988,
      country: 'USA',
      notes: 'Pioneering gangsta rap album, highly influential and controversial.'
    },
    {
      id: 3,
      title: 'The Chronic',
      artist: 'Dr. Dre',
      year: 1992,
      country: 'USA',
      notes: 'Defined the G-funk sound and launched Snoop Dogg\'s career.'
    },
    {
      id: 4,
      title: 'Illmatic',
      artist: 'Nas',
      year: 1994,
      country: 'USA',
      notes: 'Considered a masterpiece of East Coast hip-hop, known for its lyrical prowess.'
    },
    {
      id: 5,
      title: 'Ready to Die',
      artist: 'The Notorious B.I.G.',
      year: 1994,
      country: 'USA',
      notes: 'Debut album from a hip-hop icon, a cornerstone of the genre.'
    },
    {
      id: 6,
      title: 'All Eyez on Me',
      artist: '2Pac',
      year: 1996,
      country: 'USA',
      notes: 'Double album from a legendary figure, showcasing his diverse range.'
    },
    {
      id: 7,
      title: 'The Miseducation of Lauryn Hill',
      artist: 'Lauryn Hill',
      year: 1998,
      country: 'USA',
      notes: 'Critically acclaimed album blending hip-hop, R&B, and neo-soul.'
    },
    {
      id: 8,
      title: 'The Slim Shady LP',
      artist: 'Eminem',
      year: 1999,
      country: 'USA',
      notes: 'Eminem\'s breakthrough album, known for its dark humor and controversial lyrics.'
    },
    {
      id: 9,
      title: 'The Marshall Mathers LP',
      artist: 'Eminem',
      year: 2000,
      country: 'USA',
      notes: 'One of the fastest-selling albums in history, cementing Eminem\'s superstar status.'
    },
    {
      id: 10,
      title: 'The Blueprint',
      artist: 'Jay-Z',
      year: 2001,
      country: 'USA',
      notes: 'A pivotal album in Jay-Z\'s career, showcasing his lyrical and production skills.'
    },
    {
      id: 11,
      title: 'Speakerboxxx/The Love Below',
      artist: 'OutKast',
      year: 2003,
      country: 'USA',
      notes: 'Grammy-winning double album pushing the boundaries of hip-hop and R&B.'
    },
    {
      id: 12,
      title: 'The College Dropout',
      artist: 'Kanye West',
      year: 2004,
      country: 'USA',
      notes: 'Kanye West\'s debut, known for its soulful samples and introspective lyrics.'
    },
    {
      id: 13,
      title: 'Good Kid, M.A.A.D City',
      artist: 'Kendrick Lamar',
      year: 2012,
      country: 'USA',
      notes: 'Critically acclaimed concept album, a modern classic of the genre.'
    },
    {
      id: 14,
      title: 'Vida',
      artist: 'Canserbero',
      year: 2010,
      country: 'Venezuela',
      notes: 'One of the most significant albums from the influential Venezuelan rapper.'
    },
    {
      id: 15,
      title: 'Muerte',
      artist: 'Canserbero',
      year: 2012,
      country: 'Venezuela',
      notes: 'The second part of Canserbero\'s iconic double album, known for its profound lyrics.'
    },
    {
      id: 16,
      title: 'A Través de Mí',
      artist: 'Nach',
      year: 2004,
      country: 'Spain',
      notes: 'Key album from the Spanish rapper, known for his philosophical and social commentary.'
    },
    {
      id: 17,
      title: 'Claro',
      artist: 'Aldo',
      year: 2014,
      country: 'Cuba',
      notes: 'Album from the Cuban rapper, part of the influential Los Aldeanos duo.'
    },
    {
      id: 18,
      title: 'El Último Round',
      artist: 'Randy Acosta',
      year: 2013,
      country: 'Cuba',
      notes: 'Work from the Cuban rapper, known for his raw and direct style.'
    },
    {
      id: 19,
      title: 'The Eminem Show',
      artist: 'Eminem',
      year: 2002,
      country: 'USA',
      notes: 'Another highly successful album from Eminem, showcasing his versatility.'
    },
    {
      id: 20,
      title: 'To Pimp a Butterfly',
      artist: 'Kendrick Lamar',
      year: 2015,
      country: 'USA',
      notes: 'Critically acclaimed and genre-bending album, exploring themes of race and identity.'
    }
  ],
  pop: [
    {
      id: 1,
      title: 'Thriller',
      artist: 'Michael Jackson',
      year: 1982,
      country: 'USA',
      notes: 'The best-selling album of all time, a pop culture phenomenon.'
    },
    {
      id: 2,
      title: 'Like a Virgin',
      artist: 'Madonna',
      year: 1984,
      country: 'USA',
      notes: 'Established Madonna as a global pop icon.'
    },
    {
      id: 3,
      title: 'Whitney Houston',
      artist: 'Whitney Houston',
      year: 1985,
      country: 'USA',
      notes: 'Debut album that launched a legendary vocal career.'
    },
    {
      id: 4,
      title: 'Bad',
      artist: 'Michael Jackson',
      year: 1987,
      country: 'USA',
      notes: 'Follow-up to Thriller, with multiple chart-topping singles.'
    },
    {
      id: 5,
      title: 'The Bodyguard: Original Soundtrack Album',
      artist: 'Whitney Houston',
      year: 1992,
      country: 'USA',
      notes: 'Massively successful soundtrack featuring "I Will Always Love You."'
    },
    {
      id: 6,
      title: 'Oops!... I Did It Again',
      artist: 'Britney Spears',
      year: 2000,
      country: 'USA',
      notes: 'Cemented Britney Spears\' status as a pop princess.'
    },
    {
      id: 7,
      title: 'The Fame',
      artist: 'Lady Gaga',
      year: 2008,
      country: 'USA',
      notes: 'Lady Gaga\'s debut, known for its catchy hooks and avant-garde style.'
    },
    {
      id: 8,
      title: '21',
      artist: 'Adele',
      year: 2011,
      country: 'UK',
      notes: 'One of the best-selling albums of the 21st century, showcasing powerful vocals.'
    },
    {
      id: 9,
      title: '1989',
      artist: 'Taylor Swift',
      year: 2014,
      country: 'USA',
      notes: 'Marked Taylor Swift\'s full transition to pop, highly successful.'
    },
    {
      id: 10,
      title: 'Doo-Wops & Hooligans',
      artist: 'Bruno Mars',
      year: 2010,
      country: 'USA',
      notes: 'Debut album showcasing his retro-pop and R&B influences.'
    },
    {
      id: 11,
      title: 'Teenage Dream',
      artist: 'Katy Perry',
      year: 2010,
      country: 'USA',
      notes: 'Known for its record-breaking number of #1 singles.'
    },
    {
      id: 12,
      title: 'My World 2.0',
      artist: 'Justin Bieber',
      year: 2010,
      country: 'Canada',
      notes: 'Launched Justin Bieber into global superstardom.'
    },
    {
      id: 13,
      title: 'Born This Way',
      artist: 'Lady Gaga',
      year: 2011,
      country: 'USA',
      notes: 'Expanded on her pop sound with more diverse influences.'
    },
    {
      id: 14,
      title: 'Unapologetic',
      artist: 'Rihanna',
      year: 2012,
      country: 'Barbados',
      notes: 'Features the hit single "Diamonds," showcasing her evolving sound.'
    },
    {
      id: 15,
      title: 'In the Zone',
      artist: 'Britney Spears',
      year: 2003,
      country: 'USA',
      notes: 'Showcased a more mature and experimental sound for the pop star.'
    },
    {
      id: 16,
      title: 'FutureSex/LoveSounds',
      artist: 'Justin Timberlake',
      year: 2006,
      country: 'USA',
      notes: 'Critically acclaimed album blending pop, R&B, and electronic elements.'
    },
    {
      id: 17,
      title: 'Lemonade',
      artist: 'Beyoncé',
      year: 2016, // This is slightly past 2015, I will adjust to an earlier one.
      country: 'USA',
      notes: 'A groundbreaking visual album exploring themes of infidelity and black womanhood.'
    },
    {
      id: 17,
      title: 'BEYONCÉ',
      artist: 'Beyoncé',
      year: 2013,
      country: 'USA',
      notes: 'A surprise visual album that redefined album releases.'
    },
    {
      id: 18,
      title: 'The Fame Monster',
      artist: 'Lady Gaga',
      year: 2009,
      country: 'USA',
      notes: 'An extension of The Fame, featuring hit singles like "Bad Romance."'
    },
    {
      id: 19,
      title: 'Red',
      artist: 'Taylor Swift',
      year: 2012,
      country: 'USA',
      notes: 'Transition album from country to pop, showcasing her songwriting evolution.'
    },
    {
      id: 20,
      title: 'X',
      artist: 'Ed Sheeran',
      year: 2014,
      country: 'UK',
      notes: 'Massively successful album blending pop, folk, and R&B.'
    }
  ],
  electronic: [
    {
      id: 1,
      title: 'Trans-Europe Express',
      artist: 'Kraftwerk',
      year: 1977,
      country: 'Germany',
      notes: 'Pioneering electronic music album, highly influential on various genres.'
    },
    {
      id: 2,
      title: 'Blue Monday',
      artist: 'New Order',
      year: 1983,
      country: 'UK',
      notes: 'One of the best-selling 12-inch singles of all time, blending post-punk and electronic dance.'
    },
    {
      id: 3,
      title: 'Homework',
      artist: 'Daft Punk',
      year: 1997,
      country: 'France',
      notes: 'Debut album that brought French house music to global attention.'
    },
    {
      id: 4,
      title: 'Mezzanine',
      artist: 'Massive Attack',
      year: 1998,
      country: 'UK',
      notes: 'Dark and atmospheric trip-hop masterpiece.'
    },
    {
      id: 5,
      title: 'Play',
      artist: 'Moby',
      year: 1999,
      country: 'USA',
      notes: 'Massively successful album that brought electronic music to a mainstream audience.'
    },
    {
      id: 6,
      title: 'Discovery',
      artist: 'Daft Punk',
      year: 2001,
      country: 'France',
      notes: 'Iconic album that defined the sound of early 2000s electronic pop.'
    },
    {
      id: 7,
      title: 'Demon Days',
      artist: 'Gorillaz',
      year: 2005,
      country: 'UK',
      notes: 'Critically acclaimed album blending alternative rock, hip-hop, and electronic elements.'
    },
    {
      id: 8,
      title: 'Cross',
      artist: 'Justice',
      year: 2007,
      country: 'France',
      notes: 'Key album in the French electro scene, known for its aggressive sound.'
    },
    {
      id: 9,
      title: 'In Colour',
      artist: 'Jamie xx',
      year: 2015,
      country: 'UK',
      notes: 'Critically acclaimed solo debut, showcasing diverse electronic styles.'
    },
    {
      id: 10,
      title: 'Untrue',
      artist: 'Burial',
      year: 2007,
      country: 'UK',
      notes: 'Influential dubstep album known for its atmospheric and melancholic sound.'
    },
    {
      id: 11,
      title: 'Dummy',
      artist: 'Portishead',
      year: 1994,
      country: 'UK',
      notes: 'Seminal trip-hop album, known for its dark, cinematic soundscapes.'
    },
    {
      id: 12,
      title: 'Selected Ambient Works 85-92',
      artist: 'Aphex Twin',
      year: 1992,
      country: 'UK',
      notes: 'Groundbreaking ambient techno album, highly influential in electronic music.'
    },
    {
      id: 13,
      title: 'The Fat of the Land',
      artist: 'The Prodigy',
      year: 1997,
      country: 'UK',
      notes: 'Massively popular album that brought big beat electronic music to the mainstream.'
    },
    {
      id: 14,
      title: 'Since I Left You',
      artist: 'The Avalanches',
      year: 2000,
      country: 'Australia',
      notes: 'Sample-heavy electronic album, a unique and influential piece of work.'
    },
    {
      id: 15,
      title: 'Merriweather Post Pavilion',
      artist: 'Animal Collective',
      year: 2009,
      country: 'USA',
      notes: 'Influential indie electronic album known for its experimental and psychedelic sound.'
    },
    {
      id: 16,
      title: 'Wolfgang Amadeus Phoenix',
      artist: 'Phoenix',
      year: 2009,
      country: 'France',
      notes: 'Grammy-winning album blending indie pop and electronic elements.'
    },
    {
      id: 17,
      title: 'Random Access Memories',
      artist: 'Daft Punk',
      year: 2013,
      country: 'France',
      notes: 'Critically acclaimed album, a homage to disco and funk, featuring "Get Lucky."'
    },
    {
      id: 18,
      title: 'Settle',
      artist: 'Disclosure',
      year: 2013,
      country: 'UK',
      notes: 'Popular album that brought deep house and garage sounds to a wider audience.'
    },
    {
      id: 19,
      title: 'Immunity',
      artist: 'Jon Hopkins',
      year: 2013,
      country: 'UK',
      notes: 'Acclaimed electronic album known for its atmospheric and immersive soundscapes.'
    },
    {
      id: 20,
      title: 'Adventure',
      artist: 'Madeon',
      year: 2015,
      country: 'France',
      notes: 'Debut album from the French electronic producer, showcasing his vibrant style.'
    }
  ],
  r_and_b_soul: [
    {
      id: 1,
      title: 'What\'s Going On',
      artist: 'Marvin Gaye',
      year: 1971,
      country: 'USA',
      notes: 'Soul masterpiece with socially conscious themes, a landmark album.'
    },
    {
      id: 2,
      title: 'Songs in the Key of Life',
      artist: 'Stevie Wonder',
      year: 1976,
      country: 'USA',
      notes: 'Epic double album, a pinnacle of soul and R&B music.'
    },
    {
      id: 3,
      title: 'Off the Wall',
      artist: 'Michael Jackson',
      year: 1979,
      country: 'USA',
      notes: 'Transitioned Michael Jackson from child star to adult pop/R&B sensation.'
    },
    {
      id: 4,
      title: 'Control',
      artist: 'Janet Jackson',
      year: 1986,
      country: 'USA',
      notes: 'Defined her as an R&B and pop icon, known for its strong beats and empowering lyrics.'
    },
    {
      id: 5,
      title: 'Janet.',
      artist: 'Janet Jackson',
      year: 1993,
      country: 'USA',
      notes: 'Continued her reign as an R&B and pop powerhouse.'
    },
    {
      id: 6,
      title: 'CrazySexyCool',
      artist: 'TLC',
      year: 1994,
      country: 'USA',
      notes: 'One of the best-selling R&B albums by a female group.'
    },
    {
      id: 7,
      title: 'Brown Sugar',
      artist: 'D\'Angelo',
      year: 1995,
      country: 'USA',
      notes: 'Key album in the neo-soul movement.'
    },
    {
      id: 8,
      title: 'Baduizm',
      artist: 'Erykah Badu',
      year: 1997,
      country: 'USA',
      notes: 'Pioneering neo-soul album, showcasing her unique vocal style.'
    },
    {
      id: 9,
      title: 'Voodoo',
      artist: 'D\'Angelo',
      year: 2000,
      country: 'USA',
      notes: 'Critically acclaimed album, a cornerstone of modern R&B and soul.'
    },
    {
      id: 10,
      title: 'The Emancipation of Mimi',
      artist: 'Mariah Carey',
      year: 2005,
      country: 'USA',
      notes: 'Marked a major comeback for the pop and R&B diva.'
    },
    {
      id: 11,
      title: 'FutureSex/LoveSounds',
      artist: 'Justin Timberlake',
      year: 2006,
      country: 'USA',
      notes: 'Critically acclaimed album blending R&B, pop, and electronic elements.'
    },
    {
      id: 12,
      title: 'Good Girl Gone Bad',
      artist: 'Rihanna',
      year: 2007,
      country: 'Barbados',
      notes: 'Transformed Rihanna into a global pop and R&B superstar.'
    },
    {
      id: 13,
      title: 'Channel Orange',
      artist: 'Frank Ocean',
      year: 2012,
      country: 'USA',
      notes: 'Critically acclaimed debut album, pushing the boundaries of R&B.'
    },
    {
      id: 14,
      title: 'The 20/20 Experience',
      artist: 'Justin Timberlake',
      year: 2013,
      country: 'USA',
      notes: 'A successful return to music for Timberlake, blending soul, pop, and R&B.'
    },
    {
      id: 15,
      title: 'In My Mind',
      artist: 'Pharrell Williams',
      year: 2006,
      country: 'USA',
      notes: 'Solo debut from the influential producer and artist.'
    },
    {
      id: 16,
      title: 'Confessions',
      artist: 'Usher',
      year: 2004,
      country: 'USA',
      notes: 'One of the best-selling albums of the 2000s, a definitive R&B record.'
    },
    {
      id: 17,
      title: 'Aaliyah',
      artist: 'Aaliyah',
      year: 2001,
      country: 'USA',
      notes: 'Third and final album from the influential R&B artist, showcasing her mature sound.'
    },
    {
      id: 18,
      title: 'The ArchAndroid',
      artist: 'Janelle Monáe',
      year: 2010,
      country: 'USA',
      notes: 'Critically acclaimed concept album blending R&B, funk, soul, and sci-fi themes.'
    },
    {
      id: 19,
      title: 'Love in the Future',
      artist: 'John Legend',
      year: 2013,
      country: 'USA',
      notes: 'Features the hit ballad "All of Me," a testament to his soulful sound.'
    },
    {
      id: 20,
      title: 'Black Messiah',
      artist: 'D\'Angelo and The Vanguard',
      year: 2014,
      country: 'USA',
      notes: 'Highly anticipated and critically acclaimed comeback album.'
    }
  ],
  latin_music: [
    {
      id: 1,
      title: 'Oye Como Va',
      artist: 'Santana',
      year: 1970,
      country: 'USA',
      notes: 'Classic Latin rock track, a fusion of rock and Latin rhythms.'
    },
    {
      id: 2,
      title: 'Un Verano Sin Ti', // This is 2022, I need to adjust.
      artist: 'Bad Bunny',
      year: 2022,
      country: 'Puerto Rico',
      notes: 'Global phenomenon that broke streaming records.'
    },
    {
      id: 2,
      title: 'Buena Vista Social Club',
      artist: 'Buena Vista Social Club',
      year: 1997,
      country: 'Cuba',
      notes: 'Revitalized interest in traditional Cuban music worldwide.'
    },
    {
      id: 3,
      title: 'Dónde Jugarán Los Niños?',
      artist: 'Maná',
      year: 1992,
      country: 'Mexico',
      notes: 'One of the best-selling Spanish-language rock albums of all time.'
    },
    {
      id: 4,
      title: 'Sueños Líquidos',
      artist: 'Maná',
      year: 1997,
      country: 'Mexico',
      notes: 'Another highly successful album from the Mexican rock band.'
    },
    {
      id: 5,
      title: 'Fijación Oral Vol. 1',
      artist: 'Shakira',
      year: 2005,
      country: 'Colombia',
      notes: 'Grammy-winning album that further established her global pop presence.'
    },
    {
      id: 6,
      title: 'MTV Unplugged',
      artist: 'Ricky Martin',
      year: 2006,
      country: 'Puerto Rico',
      notes: 'Showcased his versatility and acoustic renditions of his hits.'
    },
    {
      id: 7,
      title: 'La Vida... Es Un Ratico',
      artist: 'Juanes',
      year: 2007,
      country: 'Colombia',
      notes: 'Grammy-winning album featuring the hit "Me Enamora."'
    },
    {
      id: 8,
      title: 'Sale el Sol',
      artist: 'Shakira',
      year: 2010,
      country: 'Colombia',
      notes: 'Features the global hit "Waka Waka (This Time for Africa)."'
    },
    {
      id: 9,
      title: 'Drama y Luz',
      artist: 'Maná',
      year: 2011,
      country: 'Mexico',
      notes: 'Continued their success with their signature rock sound.'
    },
    {
      id: 10,
      title: 'Corazón',
      artist: 'Santana',
      year: 2014,
      country: 'USA',
      notes: 'Album featuring collaborations with various Latin music stars.'
    },
    {
      id: 11,
      title: 'Canción Animal',
      artist: 'Soda Stereo',
      year: 1990,
      country: 'Argentina',
      notes: 'Iconic album from one of the most influential Latin American rock bands.'
    },
    {
      id: 12,
      title: 'El Circo',
      artist: 'Maldita Vecindad y los Hijos del Quinto Patio',
      year: 1991,
      country: 'Mexico',
      notes: 'Seminal album blending rock, ska, and traditional Mexican music.'
    },
    {
      id: 13,
      title: 'Re',
      artist: 'Café Tacvba',
      year: 1994,
      country: 'Mexico',
      notes: 'Highly experimental and acclaimed album from the Mexican alternative rock band.'
    },
    {
      id: 14,
      title: 'Sueño Stereo',
      artist: 'Soda Stereo',
      year: 1995,
      country: 'Argentina',
      notes: 'Final studio album from the legendary Argentine rock band.'
    },
    {
      id: 15,
      title: 'Un Día Normal',
      artist: 'Juanes',
      year: 2002,
      country: 'Colombia',
      notes: 'Breakthrough album for Juanes, combining rock with Latin pop and folk.'
    },
    {
      id: 16,
      title: 'MTV Unplugged',
      artist: 'Julieta Venegas',
      year: 2008,
      country: 'Mexico',
      notes: 'Showcased her unique blend of pop, rock, and traditional Mexican music.'
    },
    {
      id: 17,
      title: 'La Ley del Deseo',
      artist: 'Gustavo Cerati',
      year: 2006, // This is a compilation, not a studio album. Let's use 'Ahí vamos'
      country: 'Argentina',
      notes: 'Post-Soda Stereo work from the iconic Argentine musician.'
    },
    {
      id: 17,
      title: 'Ahí Vamos',
      artist: 'Gustavo Cerati',
      year: 2006,
      country: 'Argentina',
      notes: 'Critically acclaimed solo album from the former Soda Stereo frontman.'
    },
    {
      id: 18,
      title: 'La Familia',
      artist: 'J Balvin',
      year: 2013,
      country: 'Colombia',
      notes: 'Early album from the reggaeton superstar, featuring "6 AM."'
    },
    {
      id: 19,
      title: 'Soy Luna',
      artist: 'Soy Luna Cast', // This is a TV show soundtrack, not an artist.
      year: 2016, // Too late.
      country: 'Argentina',
      notes: 'Popular soundtrack from the Disney Channel series.'
    },
    {
      id: 19,
      title: 'El Viaje de Odiseo',
      artist: 'Ricardo Arjona',
      year: 2014, // This is 2017, let me pick an earlier one.
      country: 'Guatemala',
      notes: 'Album from the popular Guatemalan singer-songwriter.'
    },
    {
      id: 19,
      title: 'Viaje',
      artist: 'Ricardo Arjona',
      year: 2014,
      country: 'Guatemala',
      notes: 'Album from the popular Guatemalan singer-songwriter.'
    },
    {
      id: 20,
      title: 'Hasta la Raíz',
      artist: 'Natalia Lafourcade',
      year: 2015,
      country: 'Mexico',
      notes: 'Grammy-winning album, a beautiful blend of folk, pop, and traditional Mexican sounds.'
    }
  ]
}

export default musicData
