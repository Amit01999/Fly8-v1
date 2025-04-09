const mockCountries = [
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
  // {
  //   id: 'china',
  //   code: 'cn',
  //   name: 'China',
  //   flag: 'cn',
  //   summary:
  //     'Largest education system in Asia with many government-funded scholarships for internationals.',
  //   backgroundImage:
  //     'https://images.unsplash.com/photo-1575443322822-eda25bdfb63d?auto=format&fit=crop&q=80&w=1200&h=800',
  //   universities: 1200,
  //   ranking: '1 in Asia',
  //   stats: {
  //     intlStudents: '500K+',
  //     avgTuition: 'CNY 30,000/year',
  //     workVisa: 'Job-seeking visa allowed',
  //   },
  // },
  // {
  //   id: 'ireland',
  //   code: 'ie',
  //   name: 'Ireland',
  //   flag: 'ie',
  //   summary:
  //     'Fast-growing study destination with strong ties to the tech and pharmaceutical industries.',
  //   backgroundImage:
  //     'https://images.unsplash.com/photo-1605555999132-f9a1237ab5d4?auto=format&fit=crop&q=80&w=1200&h=800',
  //   universities: 9,
  //   ranking: '7 in EU',
  //   stats: {
  //     intlStudents: '35K+',
  //     avgTuition: '€12,000/year',
  //     workVisa: '2-year stay back',
  //   },
  // },
  // {
  //   id: 'italy',
  //   code: 'it',
  //   name: 'Italy',
  //   flag: 'it',
  //   summary:
  //     'Offers affordable tuition and living costs, along with rich culture and history.',
  //   backgroundImage:
  //     'https://images.unsplash.com/photo-1589463682738-e29b77bcd4f0?auto=format&fit=crop&q=80&w=1200&h=800',
  //   universities: 90,
  //   ranking: '8 in EU',
  //   stats: {
  //     intlStudents: '32K+',
  //     avgTuition: '€2,500/year',
  //     workVisa: '1-year stay back',
  //   },
  // },
  // {
  //   id: 'norway',
  //   code: 'no',
  //   name: 'Norway',
  //   flag: 'no',
  //   summary:
  //     'Provides tuition-free education for all students, including internationals, at public universities.',
  //   backgroundImage:
  //     'https://images.unsplash.com/photo-1508614854097-0b0cd1142439?auto=format&fit=crop&q=80&w=1200&h=800',
  //   universities: 22,
  //   ranking: '10 in EU',
  //   stats: {
  //     intlStudents: '15K+',
  //     avgTuition: 'Free',
  //     workVisa: '1-year post-study',
  //   },
  // },
  // {
  //   id: 'finland',
  //   code: 'fi',
  //   name: 'Finland',
  //   flag: 'fi',
  //   summary:
  //     'Focuses on student-centered education with high-quality teaching and modern campuses.',
  //   backgroundImage:
  //     'https://images.unsplash.com/photo-1518546305927-b86b3661a7fa?auto=format&fit=crop&q=80&w=1200&h=800',
  //   universities: 35,
  //   ranking: '9 in EU',
  //   stats: {
  //     intlStudents: '20K+',
  //     avgTuition: '€8,000/year',
  //     workVisa: '1-year stay back',
  //   },
  // },
  // {
  //   id: 'switzerland',
  //   code: 'ch',
  //   name: 'Switzerland',
  //   flag: 'ch',
  //   summary:
  //     'Hosts some of the world’s best research institutes and universities, especially in STEM.',
  //   backgroundImage:
  //     'https://images.unsplash.com/photo-1549921296-3a18e08f1e10?auto=format&fit=crop&q=80&w=1200&h=800',
  //   universities: 20,
  //   ranking: '4 in EU',
  //   stats: {
  //     intlStudents: '50K+',
  //     avgTuition: 'CHF 1,500/year',
  //     workVisa: '6 months job-seeker visa',
  //   },
  // },
  // {
  //   id: 'malaysia',
  //   code: 'my',
  //   name: 'Malaysia',
  //   flag: 'my',
  //   summary:
  //     'Affordable destination with English-taught degrees and branch campuses of global universities.',
  //   backgroundImage:
  //     'https://images.unsplash.com/photo-1542978706-1a0f5d92f3f6?auto=format&fit=crop&q=80&w=1200&h=800',
  //   universities: 100,
  //   ranking: '7 in Asia',
  //   stats: {
  //     intlStudents: '130K+',
  //     avgTuition: 'MYR 20,000/year',
  //     workVisa: '6-month post-study',
  //   },
  // },
];
export default mockCountries;
