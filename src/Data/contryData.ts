const mockCountries = [
  {
    id: 'uk',
    code: 'gb',
    name: 'United Kingdom',
    flag: 'gb',
    summary:
      'A global education hub with prestigious universities and a rich academic tradition spanning centuries.',
    backgroundImage:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200&h=800',
    universities: 89,
    ranking: '4 in Top 10',
    stats: {
      intlStudents: '600K+',
      avgTuition: '£20,000/year',
      workVisa: 'Graduate Route 2 years',
    },
  },
  {
    id: 'usa',
    code: 'us',
    name: 'United States',
    flag: 'us',
    summary:
      'Home to world-renowned universities offering a wide range of programs with cutting-edge research facilities.',
    backgroundImage:
      'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200&h=800',
    universities: 130,
    ranking: '8 in Top 10',
    stats: {
      intlStudents: '1.1M+',
      avgTuition: '$25,000/year',
      workVisa: 'OPT up to 3 years',
    },
  },
  {
    id: 'canada',
    code: 'ca',
    name: 'Canada',
    flag: 'ca',
    summary:
      'Known for its welcoming atmosphere, quality education, and post-graduation work opportunities.',
    backgroundImage:
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=1200&h=800',
    universities: 62,
    ranking: '3 in Top 50',
    stats: {
      intlStudents: '500K+',
      avgTuition: 'CAD 30,000/year',
      workVisa: 'PGWP up to 3 years',
    },
  },
  {
    id: 'australia',
    code: 'au',
    name: 'Australia',
    flag: 'au',
    summary:
      'Offers a vibrant lifestyle and world-class education with strong support for international students.',
    backgroundImage:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200&h=800',
    universities: 43,
    ranking: '6 in Top 100',
    stats: {
      intlStudents: '600K+',
      avgTuition: 'AUD 28,000/year',
      workVisa: '485 Visa up to 4 years',
    },
  },
  {
    id: 'germany',
    code: 'de',
    name: 'Germany',
    flag: 'de',
    summary:
      'Provides high-quality, low-cost education with numerous programs taught in English.',
    backgroundImage:
      'https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 110,
    ranking: '5 in Top 100',
    stats: {
      intlStudents: '400K+',
      avgTuition: 'Free or €1,000/year',
      workVisa: '18-month job-seeking visa',
    },
  },
  {
    id: 'france',
    code: 'fr',
    name: 'France',
    flag: 'fr',
    summary:
      'Combines rich culture with top-tier education, offering many English-taught programs.',
    backgroundImage:
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 75,
    ranking: '8 in Top 100',
    stats: {
      intlStudents: '370K+',
      avgTuition: '€3,000/year',
      workVisa: '1-year stay back',
    },
  },
  {
    id: 'netherlands',
    code: 'nl',
    name: 'Netherlands',
    flag: 'nl',
    summary:
      'Innovative education system with a wide range of English-taught degrees and welcoming culture.',
    backgroundImage:
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0aGVybGFuZHN8ZW58MHx8MHx8fDA%3D',
    universities: 50,
    ranking: '7 in Top 100',
    stats: {
      intlStudents: '112K+',
      avgTuition: '€8,000/year',
      workVisa: 'Orientation Year (1 year)',
    },
  },
  {
    id: 'sweden',
    code: 'se',
    name: 'Sweden',
    flag: 'se',
    summary:
      'Renowned for sustainability, innovation, and high academic standards in education.',
    backgroundImage:
      'https://images.unsplash.com/photo-1526644253653-a411eaafdfe6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3dlZGVufGVufDB8fDB8fHww',
    universities: 40,
    ranking: '10 in Top 100',
    stats: {
      intlStudents: '38K+',
      avgTuition: 'SEK 100,000/year',
      workVisa: '1-year post-study',
    },
  },
  {
    id: 'new-zealand',
    code: 'nz',
    name: 'New Zealand',
    flag: 'nz',
    summary:
      'Offers a safe environment, quality education, and post-study work opportunities.',
    backgroundImage:
      'https://media.istockphoto.com/id/898280184/photo/panoramic-view-nature-landscape-in-south-island-new-zealand.webp?a=1&b=1&s=612x612&w=0&k=20&c=pWXf8YYF1xIKmFaL1XdHdGms7VAYo_afXsHJprZ9nEw=',
    universities: 8,
    ranking: '5 in Top 500',
    stats: {
      intlStudents: '50K+',
      avgTuition: 'NZD 27,000/year',
      workVisa: 'Up to 3 years',
    },
  },
  {
    id: 'japan',
    code: 'jp',
    name: 'Japan',
    flag: 'jp',
    summary:
      'Blends tradition with technology, offering modern campuses and strong research programs.',
    backgroundImage:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D',
    universities: 780,
    ranking: '3 in Asia',
    stats: {
      intlStudents: '280K+',
      avgTuition: 'JPY 500,000/year',
      workVisa: 'Job-seeker visa available',
    },
  },
  {
    id: 'south-korea',
    code: 'kr',
    name: 'South Korea',
    flag: 'kr',
    summary:
      'Rising educational powerhouse in Asia, with tech-forward campuses and global programs.',
    backgroundImage:
      'https://images.unsplash.com/photo-1538670178144-b8db27bad945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBrb3JlYXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 430,
    ranking: '6 in Asia',
    stats: {
      intlStudents: '160K+',
      avgTuition: 'KRW 6M/year',
      workVisa: 'D-10 job-seeking visa',
    },
  },
  {
    id: 'singapore',
    code: 'sg',
    name: 'Singapore',
    flag: 'sg',
    summary:
      'Hosts top global universities with cutting-edge research and English-medium instruction.',
    backgroundImage:
      'https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
    universities: 6,
    ranking: '2 in Asia',
    stats: {
      intlStudents: '70K+',
      avgTuition: 'SGD 35,000/year',
      workVisa: '1-year stay back',
    },
  },
  {
    id: 'austria',
    code: 'at',
    name: 'Austria',
    flag: 'at',
    summary:
      'Known for high-quality education and low tuition fees, Austria offers a rich cultural experience in the heart of Europe.',
    backgroundImage:
      'https://images.unsplash.com/photo-1597086831879-756db15e81d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVzdHJpYXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 22,
    ranking: '2 in Top 300',
    stats: {
      intlStudents: '85K+',
      avgTuition: '€1,500/year',
      workVisa: '12 months post-study',
    },
  },
  {
    id: 'hungary',
    code: 'hu',
    name: 'Hungary',
    flag: 'hu',
    summary:
      'A growing study destination in Europe, Hungary is known for affordable education and historic universities.',
    backgroundImage:
      'https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SHVuZ2FyeXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 28,
    ranking: '1 in Top 500',
    stats: {
      intlStudents: '38K+',
      avgTuition: '€4,000/year',
      workVisa: '9 months post-study',
    },
  },
  {
    id: 'denmark',
    code: 'dk',
    name: 'Denmark',
    flag: 'dk',
    summary:
      'Denmark offers world-class education with an emphasis on innovation, sustainability, and student well-being.',
    backgroundImage:
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVubWFya3xlbnwwfHwwfHx8MA%3D%3D',
    universities: 8,
    ranking: '1 in Top 100',
    stats: {
      intlStudents: '30K+',
      avgTuition: '€8,000/year',
      workVisa: '3 years post-study',
    },
  },
  {
    id: 'malaysia',
    code: 'my',
    name: 'Malaysia',
    flag: 'my',
    summary:
      'An affordable and diverse study destination in Asia, Malaysia combines quality education with cultural richness.',
    backgroundImage:
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsYXlzaWF8ZW58MHx8MHx8fDA%3D',
    universities: 26,
    ranking: '2 in Top 200',
    stats: {
      intlStudents: '130K+',
      avgTuition: '$4,000/year',
      workVisa: 'Allowed during studies only',
    },
  },
  {
    id: 'malta',
    code: 'mt',
    name: 'Malta',
    flag: 'mt',
    summary:
      'A small island nation offering English-taught programs, a Mediterranean lifestyle, and EU-level education.',
    backgroundImage:
      'https://plus.unsplash.com/premium_photo-1661963984279-1b0fa1b3ac0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsdGF8ZW58MHx8MHx8fDA%3D',
    universities: 3,
    ranking: '1 in Top 800',
    stats: {
      intlStudents: '3K+',
      avgTuition: '€7,000/year',
      workVisa: '6 months post-study',
    },
  },
  {
    id: 'poland',
    code: 'pl',
    name: 'Poland',
    flag: 'pl',
    summary:
      'An emerging hub for international students, Poland offers affordable tuition and a rich European heritage.',
    backgroundImage:
      'https://images.unsplash.com/photo-1563177978-4c5ffc081b2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9sYW5kfGVufDB8fDB8fHww',
    universities: 40,
    ranking: '3 in Top 500',
    stats: {
      intlStudents: '90K+',
      avgTuition: '€3,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'cyprus',
    code: 'cy',
    name: 'Cyprus',
    flag: 'cy',
    summary:
      'A Mediterranean gem offering affordable education, warm climate, and English-taught degrees.',
    backgroundImage:
      'https://images.unsplash.com/photo-1534264556392-40fde544a5fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3lwcnVzfGVufDB8fDB8fHww',
    universities: 10,
    ranking: '1 in Top 1000',
    stats: {
      intlStudents: '25K+',
      avgTuition: '€6,000/year',
      workVisa: 'Allowed during studies only',
    },
  },
  {
    id: 'spain',
    code: 'es',
    name: 'Spain',
    flag: 'es',
    summary:
      'Spain combines high-quality education with a rich cultural and linguistic heritage, attracting students worldwide.',
    backgroundImage:
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhaW58ZW58MHx8MHx8fDA%3D',
    universities: 76,
    ranking: '2 in Top 200',
    stats: {
      intlStudents: '60K+',
      avgTuition: '€2,500/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'uae',
    code: 'ae',
    name: 'United Arab Emirates',
    flag: 'ae',
    summary:
      'A modern education destination with global campuses, tax-free living, and strong regional opportunities.',
    backgroundImage:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWFlfGVufDB8fDB8fHww',
    universities: 20,
    ranking: '2 in Top 500',
    stats: {
      intlStudents: '80K+',
      avgTuition: '$10,000/year',
      workVisa: '1 year post-study (Golden Visa optional)',
    },
  },
  {
    id: 'finland',
    code: 'fi',
    name: 'Finland',
    flag: 'fi',
    summary:
      'A global leader in education innovation, Finland offers top-tier programs with a strong focus on research and creativity.',
    backgroundImage:
      'https://images.unsplash.com/photo-1528155124528-06c125d81e89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlubGFuZHxlbnwwfHwwfHx8MA%3D%3D',
    universities: 14,
    ranking: '1 in Top 150',
    stats: {
      intlStudents: '25K+',
      avgTuition: '€8,000/year',
      workVisa: '2 years post-study',
    },
  },
  {
    id: 'italy',
    code: 'it',
    name: 'Italy',
    flag: 'it',
    summary:
      'A historic destination with world-renowned universities and a blend of rich culture and academic excellence.',
    backgroundImage:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200&h=800',
    universities: 90,
    ranking: '3 in Top 200',
    stats: {
      intlStudents: '35K+',
      avgTuition: '€3,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'czech-republic',
    code: 'cz',
    name: 'Czech Republic',
    flag: 'cz',
    summary:
      'A central European country offering affordable, high-quality education and vibrant student life.',
    backgroundImage:
      'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3plY2glMjByZXB1YmxpY3xlbnwwfHwwfHx8MA%3D%3D',
    universities: 26,
    ranking: '2 in Top 500',
    stats: {
      intlStudents: '50K+',
      avgTuition: '€4,000/year',
      workVisa: '9 months post-study',
    },
  },
  {
    id: 'lithuania',
    code: 'lt',
    name: 'Lithuania',
    flag: 'lt',
    summary:
      'A growing destination for international students with affordable programs and modern universities.',
    backgroundImage:
      'https://images.unsplash.com/photo-1549891472-991e6bc75d1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl0aHVhbmlhfGVufDB8fDB8fHww',
    universities: 16,
    ranking: '1 in Top 800',
    stats: {
      intlStudents: '7K+',
      avgTuition: '€3,000/year',
      workVisa: '12 months post-study',
    },
  },
  {
    id: 'ireland',
    code: 'ie',
    name: 'Ireland',
    flag: 'ie',
    summary:
      'An English-speaking country with strong ties to global tech and pharma industries, offering excellent education.',
    backgroundImage:
      'https://images.unsplash.com/photo-1557843961-b589ce207737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlyZWxhbmR8ZW58MHx8MHx8fDA%3D',
    universities: 20,
    ranking: '1 in Top 100',
    stats: {
      intlStudents: '35K+',
      avgTuition: '€10,000/year',
      workVisa: '2 years post-study',
    },
  },
  {
    id: 'switzerland',
    code: 'ch',
    name: 'Switzerland',
    flag: 'ch',
    summary:
      'A premium destination for research and innovation with globally top-ranked institutions and multilingual programs.',
    backgroundImage:
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D',
    universities: 12,
    ranking: '2 in Top 100',
    stats: {
      intlStudents: '55K+',
      avgTuition: 'CHF 1,500–4,000/year',
      workVisa: '6 months post-study',
    },
  },
  {
    id: 'belgium',
    code: 'be',
    name: 'Belgium',
    flag: 'be',
    summary:
      'Located in the heart of Europe, Belgium offers multilingual education and strong academic traditions.',
    backgroundImage:
      'https://images.unsplash.com/photo-1547057951-61fcf322bb1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVsZ2l1bXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 30,
    ranking: '2 in Top 200',
    stats: {
      intlStudents: '45K+',
      avgTuition: '€4,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'china',
    code: 'cn',
    name: 'China',
    flag: 'cn',
    summary:
      'A rising global education power with cutting-edge research and thousands of English-taught programs.',
    backgroundImage:
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaW5hfGVufDB8fDB8fHww',
    universities: 300,
    ranking: '3 in Top 100',
    stats: {
      intlStudents: '500K+',
      avgTuition: '¥25,000/year',
      workVisa: 'Work visa sponsorship post-study required',
    },
  },
  {
    id: 'croatia',
    code: 'hr',
    name: 'Croatia',
    flag: 'hr',
    summary:
      'A scenic destination offering affordable education, modern campuses, and a peaceful student life.',
    backgroundImage:
      'https://images.unsplash.com/photo-1575540291670-8d3b26f7d327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvYXRpYXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 8,
    ranking: '1 in Top 1000',
    stats: {
      intlStudents: '4K+',
      avgTuition: '€3,500/year',
      workVisa: '6 months post-study',
    },
  },
  {
    id: 'norway',
    code: 'no',
    name: 'Norway',
    flag: 'no',
    summary:
      'Offers tuition-free education for EU/EEA students and is known for its innovation and natural beauty.',
    backgroundImage:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9yd2F5fGVufDB8fDB8fHww',
    universities: 10,
    ranking: '2 in Top 200',
    stats: {
      intlStudents: '25K+',
      avgTuition: 'Free for EU/EEA, €9,000/year for others',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'portugal',
    code: 'pt',
    name: 'Portugal',
    flag: 'pt',
    summary:
      'An affordable European destination with warm weather, rich culture, and reputable universities.',
    backgroundImage:
      'https://images.unsplash.com/photo-1555881400-69a2384edcd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnR1Z2FsfGVufDB8fDB8fHww',
    universities: 20,
    ranking: '2 in Top 300',
    stats: {
      intlStudents: '35K+',
      avgTuition: '€3,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'turkey',
    code: 'tr',
    name: 'Turkey',
    flag: 'tr',
    summary:
      'A bridge between East and West, Turkey offers a rich cultural heritage and affordable education in both English and Turkish.',
    backgroundImage:
      'https://images.unsplash.com/photo-1605581810011-c6d684e7ca22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cmtleXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 207,
    ranking: '3 in Top 500',
    stats: {
      intlStudents: '200K+',
      avgTuition: '$3,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'greece',
    code: 'gr',
    name: 'Greece',
    flag: 'gr',
    summary:
      'Known for its ancient history and beautiful landscapes, Greece offers affordable education and a vibrant student life.',
    backgroundImage:
      'https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8fDB8fHww',
    universities: 24,
    ranking: '1 in Top 500',
    stats: {
      intlStudents: '30K+',
      avgTuition: '€1,500/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'hong-kong',
    code: 'hk',
    name: 'Hong Kong',
    flag: 'hk',
    summary:
      'A global financial hub offering world-class education with a blend of Eastern and Western cultures.',
    backgroundImage:
      'https://images.unsplash.com/photo-1554208786-6776fa9e7df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZyUyMGtvbmd8ZW58MHx8MHx8fDA%3D',
    universities: 22,
    ranking: '3 in Top 100',
    stats: {
      intlStudents: '20K+',
      avgTuition: '$15,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'georgia',
    code: 'ge',
    name: 'Georgia',
    flag: 'ge',
    summary:
      'An emerging destination for international students, Georgia offers affordable education and a welcoming environment.',
    backgroundImage:
      'https://images.unsplash.com/photo-1594766722982-fb4cd139ee7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdlb3JnaWF8ZW58MHx8MHx8fDA%3D',
    universities: 60,
    ranking: '1 in Top 1000',
    stats: {
      intlStudents: '10K+',
      avgTuition: '$3,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'slovenia',
    code: 'si',
    name: 'Slovenia',
    flag: 'si',
    summary:
      'A picturesque country in Central Europe, Slovenia offers quality education and a peaceful environment for students.',
    backgroundImage:
      'https://images.unsplash.com/photo-1520900828798-002c1800f31a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2xvdmVuaWF8ZW58MHx8MHx8fDA%3D',
    universities: 5,
    ranking: '1 in Top 800',
    stats: {
      intlStudents: '5K+',
      avgTuition: '€3,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'thailand',
    code: 'th',
    name: 'Thailand',
    flag: 'th',
    summary:
      'A vibrant country known for its rich culture and affordable education, attracting students from around the world.',
    backgroundImage:
      'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
    universities: 170,
    ranking: '2 in Top 500',
    stats: {
      intlStudents: '30K+',
      avgTuition: '$2,500/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'ukraine',
    code: 'ua',
    name: 'Ukraine',
    flag: 'ua',
    summary:
      'Known for its strong academic programs in medicine and engineering, Ukraine offers affordable education in Eastern Europe.',
    backgroundImage:
      'https://plus.unsplash.com/premium_photo-1679328729747-38895d99999d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dWtyYWluZXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 200,
    ranking: '3 in Top 1000',
    stats: {
      intlStudents: '75K+',
      avgTuition: '$3,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'india',
    code: 'in',
    name: 'India',
    flag: 'in',
    summary:
      'A diverse country with a vast array of educational institutions, India offers affordable education and a rich cultural experience.',
    backgroundImage:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHx8MHx8fDA%3D',
    universities: 1000,
    ranking: '5 in Top 500',
    stats: {
      intlStudents: '50K+',
      avgTuition: '$2,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'indonesia',
    code: 'id',
    name: 'Indonesia',
    flag: 'id',
    summary:
      'An archipelago nation offering diverse educational opportunities and a unique cultural experience.',
    backgroundImage:
      'https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb25lc2lhfGVufDB8fDB8fHww',
    universities: 300,
    ranking: '2 in Top 500',
    stats: {
      intlStudents: '10K+',
      avgTuition: '$2,500/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'azerbaijan',
    code: 'az',
    name: 'Azerbaijan',
    flag: 'az',
    summary:
      'A country at the crossroads of Eastern Europe and Western Asia, Azerbaijan offers affordable education and a rich cultural heritage.',
    backgroundImage:
      'https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXplcmJhaWphbnxlbnwwfHwwfHx8MA%3D%3D',
    universities: 51,
    ranking: '1 in Top 1000',
    stats: {
      intlStudents: '5K+',
      avgTuition: '$2,500/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'egypt',
    code: 'eg',
    name: 'Egypt',
    flag: 'eg',
    summary:
      'A land of ancient history and modern education, Egypt offers affordable programs in diverse fields.',
    backgroundImage:
      'https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHR8ZW58MHx8MHx8fDA%3D',
    universities: 60,
    ranking: '2 in Top 500',
    stats: {
      intlStudents: '50K+',
      avgTuition: '$3,800–$5,150/semester',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'qatar',
    code: 'qa',
    name: 'Qatar',
    flag: 'qa',
    summary:
      'A rapidly developing nation with world-class universities and a multicultural environment.',
    backgroundImage:
      'https://images.unsplash.com/photo-1604433203862-93bc73b0f1e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cWF0YXJ8ZW58MHx8MHx8fDA%3D',
    universities: 8,
    ranking: '1 in Top 200',
    stats: {
      intlStudents: '10K+',
      avgTuition: '$5,500–$20,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'vietnam',
    code: 'vn',
    name: 'Vietnam',
    flag: 'vn',
    summary:
      'An emerging destination offering affordable education and a rich cultural experience.',
    backgroundImage:
      'https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 150,
    ranking: '2 in Top 500',
    stats: {
      intlStudents: '20K+',
      avgTuition: '$2,000–$5,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'estonia',
    code: 'ee',
    name: 'Estonia',
    flag: 'ee',
    summary:
      'A digital society offering innovative education and opportunities in technology and entrepreneurship.',
    backgroundImage:
      'https://images.unsplash.com/photo-1709862366377-54b16f3e51f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXN0b25pYXxlbnwwfHwwfHx8MA%3D%3D',
    universities: 15,
    ranking: '1 in Top 500',
    stats: {
      intlStudents: '5K+',
      avgTuition: '€1,660–€7,500/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'kazakhstan',
    code: 'kz',
    name: 'Kazakhstan',
    flag: 'kz',
    summary:
      'A Central Asian country offering affordable education and growing opportunities in various fields.',
    backgroundImage:
      'https://images.unsplash.com/photo-1604269949318-10589797d025?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2F6YWtoc3RhbnxlbnwwfHwwfHx8MA%3D%3D',
    universities: 125,
    ranking: '2 in Top 500',
    stats: {
      intlStudents: '20K+',
      avgTuition: '$3,700–$30,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'uzbekistan',
    code: 'uz',
    name: 'Uzbekistan',
    flag: 'uz',
    summary:
      'A country rich in history, offering affordable education and a welcoming environment for students.',
    backgroundImage:
      'https://images.unsplash.com/photo-1671054522980-206498bf4ed6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXpiZWtpc3RhbnxlbnwwfHwwfHx8MA%3D%3D',
    universities: 50,
    ranking: '1 in Top 1000',
    stats: {
      intlStudents: '5K+',
      avgTuition: '$800–$4,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'kyrgyzstan',
    code: 'kg',
    name: 'Kyrgyzstan',
    flag: 'kg',
    summary:
      'An affordable destination for students, especially in medical and technical fields.',
    backgroundImage:
      'https://images.unsplash.com/photo-1608497735578-11912e18ed9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a3lyZ3l6c3RhbnxlbnwwfHwwfHx8MA%3D%3D',
    universities: 40,
    ranking: '1 in Top 1000',
    stats: {
      intlStudents: '10K+',
      avgTuition: '$2,500–$4,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'latvia',
    code: 'lv',
    name: 'Latvia',
    flag: 'lv',
    summary:
      'A Baltic nation offering quality education and vibrant student life at affordable costs.',
    backgroundImage:
      'https://images.unsplash.com/photo-1614887259709-fe2c3aa56022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF0dmlhfGVufDB8fDB8fHww',
    universities: 20,
    ranking: '1 in Top 500',
    stats: {
      intlStudents: '10K+',
      avgTuition: '€2,000–€8,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'russia',
    code: 'ru',
    name: 'Russia',
    flag: 'ru',
    summary:
      'A vast country with a strong academic tradition, offering diverse programs for international students.',
    backgroundImage:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhfGVufDB8fDB8fHww',
    universities: 800,
    ranking: '5 in Top 500',
    stats: {
      intlStudents: '300K+',
      avgTuition: '$2,000–$5,000/year',
      workVisa: '1 year post-study',
    },
  },
  {
    id: 'bangladesh',
    code: 'bd',
    name: 'Bangladesh',
    flag: 'bd',
    summary:
      'Known for its affordable education, growing number of private universities, and strong cultural heritage.',
    backgroundImage:
      'https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg',
    universities: 160,
    ranking: 'Several in Top 1000',
    stats: {
      intlStudents: '3K+',
      avgTuition: 'USD 1,500–3,000/year',
      workVisa: 'Limited post-study options',
    },
  },
];
export default mockCountries;
