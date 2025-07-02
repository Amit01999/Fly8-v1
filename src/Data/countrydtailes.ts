const australia = {
  code: 'au',
  name: 'Australia',
  flagUrl: 'https://flagcdn.com/w320/au.png',
  heroImage:
    'https://images.unsplash.com/photo-1506973035872-7179f194c92a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
  quickFacts: {
    population: '26.7 million',
    capital: 'Canberra',
    language: 'English',
    currency: 'Australian Dollar (AUD)',
    academicYear: 'February to November',
  },
  keyDates: {
    semester1Deadline: 'December 1 (for February intake)',
    semester2Deadline: 'May 1 (for July intake)',
    summerDeadline: 'October 15 (for summer school, if offered)',
  },
  overviewSections: [
    {
      title: 'Why Study in Australia?',
      description:
        'Australia is a global leader in education, offering a vibrant lifestyle, world-class universities, and unique opportunities for international students.',
      points: [
        {
          heading: 'Top-Ranked Universities',
          text: 'Home to 7 of the world’s top 100 universities, known for research and innovation.',
        },
        {
          heading: 'Post-Study Work Opportunities',
          text: 'The Temporary Graduate Visa allows graduates to work for 2–4 years depending on qualification.',
        },
        {
          heading: 'High Quality of Life',
          text: 'Safe, multicultural cities with a relaxed lifestyle and stunning natural landscapes.',
        },
        {
          heading: 'Diverse Study Options',
          text: 'Flexible programs in STEM, arts, business, and more with practical, industry-focused learning.',
        },
      ],
    },
    {
      title: 'Education System at a Glance',
      description:
        'Australia’s education system is globally recognized for its quality, innovation, and student-centric approach.',
      cards: [
        {
          color: 'red-500',
          title: 'Undergraduate',
          subtitle: "Bachelor's Degree",
          points: [
            '3-4 years duration',
            'Honours degrees available',
            'Practical and research focus',
            'Flexible double degrees',
          ],
        },
        {
          color: 'blue-500',
          title: 'Postgraduate',
          subtitle: "Master's Degree",
          points: [
            '1-2 years duration',
            'Coursework or research-based',
            'Professional qualifications',
            'Industry internships',
          ],
        },
        {
          color: 'purple-500',
          title: 'Doctorate',
          subtitle: 'PhD/Doctoral Degree',
          points: [
            '3-4 years duration',
            'Original research focus',
            'Thesis and viva voce',
            'Global research networks',
          ],
        },
      ],
      note: {
        text: 'Australian universities use a grading system with High Distinction (HD, 85%+), Distinction (D, 75-84%), Credit (C, 65-74%), Pass (P, 50-64%), and Fail (F, below 50%).',
        color: 'yellow-50',
        border: 'yellow-100',
        textColor: 'yellow-700',
      },
    },
  ],
  topcourse: [
    {
      title: 'Business & Management',
      details: 'MBA, Accounting, Marketing',
      color: 'bg-amber-50 border-amber-200',
    },
    {
      title: 'Engineering',
      details: 'Civil, Mining, Renewable Energy',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Information Technology',
      details: 'AI, Cybersecurity, Data Science',
      color: 'bg-indigo-50 border-indigo-200',
    },
    {
      title: 'Health Sciences',
      details: 'Medicine, Nursing, Public Health',
      color: 'bg-red-50 border-red-200',
    },
    {
      title: 'Environmental Science',
      details: 'Marine Biology, Sustainability',
      color: 'bg-green-50 border-green-200',
    },
    {
      title: 'Education',
      details: 'Teaching, Early Childhood, TESOL',
      color: 'bg-purple-50 border-purple-200',
    },
    {
      title: 'Arts & Humanities',
      details: 'Media, Literature, Indigenous Studies',
      color: 'bg-pink-50 border-pink-200',
    },
    {
      title: 'Law',
      details: 'International Law, Commercial Law',
      color: 'bg-orange-50 border-orange-200',
    },
    {
      title: 'Science',
      details: 'Biotechnology, Physics, Chemistry',
      color: 'bg-cyan-50 border-cyan-200',
    },
  ],
  topuniversities: [
    {
      name: 'University of Melbourne',
      location: 'Melbourne',
      rank: '13',
      notable: 'Arts, Medicine, Sciences',
    },
    {
      name: 'University of Sydney',
      location: 'Sydney',
      rank: '18',
      notable: 'Engineering, Law, Business',
    },
    {
      name: 'Australian National University',
      location: 'Canberra',
      rank: '30',
      notable: 'Politics, Sciences, Humanities',
    },
    {
      name: 'University of Queensland',
      location: 'Brisbane',
      rank: '40',
      notable: 'Biotechnology, Environmental Science',
    },
    {
      name: 'University of New South Wales',
      location: 'Sydney',
      rank: '45',
      notable: 'Engineering, Technology, Business',
    },
    {
      name: 'Monash University',
      location: 'Melbourne',
      rank: '57',
      notable: 'Pharmacy, Business, Engineering',
    },
    {
      name: 'University of Western Australia',
      location: 'Perth',
      rank: '77',
      notable: 'Mining, Agriculture, Medicine',
    },
    {
      name: 'University of Adelaide',
      location: 'Adelaide',
      rank: '89',
      notable: 'Engineering, Wine Science, Health',
    },
  ],
  intakes: [
    {
      label: 'February/March',
      description: 'Primary intake with most courses available',
      icon: 'F',
    },
    {
      label: 'July/August',
      description: 'Secondary intake with many course options',
      icon: 'J',
    },
    {
      label: 'November/December',
      description: 'Limited intake for summer school or specific programs',
      icon: 'N',
    },
  ],
  deadlines: [
    {
      title: 'Undergraduate',
      icon: 'U',
      details: [
        'December 1 (Semester 1, February intake)',
        'May 1 (Semester 2, July intake)',
      ],
    },
    {
      title: 'Postgraduate',
      icon: 'P',
      details: ['Varies by university, typically 3–6 months before intake'],
    },
    {
      title: 'Scholarships',
      icon: 'S',
      details: ['October–December for Semester 1', 'April–June for Semester 2'],
    },
  ],
  admissionnotes: [
    'Apply early for competitive programs like medicine or dentistry',
    'International students should allow 2–3 months for visa processing',
    'Check university websites for specific course entry requirements',
    'Some programs offer rolling admissions for postgraduate courses',
  ],
  requirementsData: [
    {
      title: 'Undergraduate Requirements',
      color: 'bg-blue-500',
      items: [
        'Completed secondary education (Year 12 equivalent)',
        'High school transcripts/certificates',
        'English proficiency (IELTS 6.0–7.0 or equivalent)',
        'Personal statement or motivation letter',
        'Letters of recommendation (1–2, program-specific)',
        'Entrance exams (e.g., UCAT for medicine)',
        'Portfolio (for creative arts/design courses)',
        'Interview (for selective programs)',
      ],
    },
    {
      title: 'Postgraduate Requirements',
      color: 'bg-purple-500',
      items: [
        'Bachelor’s degree (minimum GPA varies)',
        'Academic transcripts',
        'English proficiency (IELTS 6.5–7.5)',
        'Research proposal (for research degrees)',
        'CV/Resume',
        'Statement of purpose',
        'Letters of recommendation (2–3)',
        'GMAT/GRE (for some MBA programs)',
      ],
    },
  ],
  CountrySpecificRequirements:
    'Australian universities assess international qualifications against Australian standards. Many provide country-specific entry requirements on their websites. Foundation or pathway programs are available for students who don’t meet direct entry criteria.',
  tuitionData: [
    {
      level: 'Undergraduate',
      range: 'AUD 20,000 - AUD 45,000',
      average: 'AUD 30,000',
      notes: 'Higher for medicine, veterinary science',
    },
    {
      level: 'Postgraduate Taught',
      range: 'AUD 22,000 - AUD 50,000',
      average: 'AUD 35,000',
      notes: 'Higher for MBA, specialized programs',
    },
    {
      level: 'MBA',
      range: 'AUD 40,000 - AUD 80,000',
      average: 'AUD 55,000',
      notes: 'Top-tier programs may exceed AUD 70,000',
    },
    {
      level: 'PhD',
      range: 'AUD 30,000 - AUD 45,000',
      average: 'AUD 38,000',
      notes: 'Scholarships often cover fees',
    },
    {
      level: 'Medicine & Dentistry',
      range: 'AUD 50,000 - AUD 80,000',
      average: 'AUD 65,000',
      notes: 'Clinical placements increase costs',
    },
  ],
  tuitionNote:
    'Tuition fees vary by course and institution. Additional costs may include student services fees, textbooks, and practical training expenses. Check university websites for exact fees.',
  expenses: [
    { label: 'Accommodation', range: 'AUD 800 - AUD 2,000', percentage: 65 },
    { label: 'Food & Groceries', range: 'AUD 300 - AUD 500', percentage: 40 },
    { label: 'Transportation', range: 'AUD 100 - AUD 200', percentage: 20 },
    { label: 'Utilities', range: 'AUD 150 - AUD 300', percentage: 25 },
    { label: 'Mobile/Internet', range: 'AUD 50 - AUD 100', percentage: 15 },
    { label: 'Books & Supplies', range: 'AUD 50 - AUD 150', percentage: 20 },
    { label: 'Entertainment', range: 'AUD 150 - AUD 400', percentage: 30 },
  ],
  regionalCosts: [
    {
      region: 'Sydney & Melbourne',
      level: 'Expensive',
      color: 'text-red-500',
      range: 'AUD 1,500 - AUD 2,500+',
    },
    {
      region: 'Brisbane & Perth',
      level: 'Moderate',
      color: 'text-orange-500',
      range: 'AUD 1,200 - AUD 1,800',
    },
    {
      region: 'Adelaide & Canberra',
      level: 'Affordable',
      color: 'text-yellow-500',
      range: 'AUD 1,000 - AUD 1,500',
    },
    {
      region: 'Regional Areas',
      level: 'Low Cost',
      color: 'text-green-500',
      range: 'AUD 800 - AUD 1,200',
    },
  ],
  scholarships: [
    {
      category: 'Government Scholarships',
      color: 'indigo',
      items: [
        {
          title: 'Australia Awards Scholarships',
          description:
            'Fully-funded scholarships for students from eligible countries to study at Australian universities.',
        },
        {
          title: 'Destination Australia',
          description:
            'Funding for students studying in regional Australia, covering up to AUD 15,000 per year.',
        },
      ],
    },
    {
      category: 'University Scholarships',
      color: 'blue',
      items: [
        {
          title: 'Merit-Based Scholarships',
          description:
            'Awards for academic excellence, typically covering 10–50% of tuition fees.',
        },
        {
          title: 'International Student Scholarships',
          description:
            'Specific awards for international students, often country or region-based.',
        },
        {
          title: 'Research Scholarships',
          description:
            'For postgraduate research students, often including stipends and fee waivers.',
        },
      ],
    },
  ],
  financialSupports: [
    {
      title: 'Part-Time Work',
      description:
        'Students can work up to 48 hours per fortnight during term time.',
    },
    {
      title: 'Internships',
      description: 'Industry placements included in many courses, often paid.',
    },
    {
      title: 'Research Assistantships',
      description: 'Paid roles for postgraduate students, especially PhDs.',
    },
    {
      title: 'Student Loans',
      description:
        'Limited private loans available for international students.',
    },
  ],
  TipsforScholarship: [
    'Apply early, ideally 6–12 months before course start',
    'Check eligibility on university and government scholarship websites',
    'Tailor applications to highlight academic and leadership achievements',
    'Include strong references from academic or professional mentors',
  ],
  auVisaData: {
    title: 'Australian Student Visa Requirements',
    intro:
      'International students need a Subclass 500 Student Visa to study in Australia for courses longer than 3 months.',
    sections: [
      {
        title: 'Basic Requirements',
        color: '#3B82F6', // Tailwind 'blue-500'
        items: [
          'Confirmation of Enrolment (CoE) from a registered institution',
          'Genuine Temporary Entrant (GTE) statement',
          'Proof of English proficiency (IELTS, TOEFL, etc.)',
          'Financial capacity for tuition and living costs',
          'Valid passport',
          'Overseas Student Health Cover (OSHC)',
          'Health check (if required)',
          'Parental consent for students under 18',
        ],
      },
      {
        title: 'Financial Requirements',
        color: '#F59E0B', // Tailwind 'amber-500'
        items: [
          'First year tuition fees',
          'Living expenses: AUD 24,505 per year',
          'Travel costs: AUD 1,000–2,000 (depending on country)',
          'Funds must be accessible and verifiable',
          'Evidence of scholarships or sponsorships (if applicable)',
        ],
      },
    ],
    facts: [
      'Visa application fee: AUD 710',
      'Processing time: 4–12 weeks (varies by country)',
      'OSHC: AUD 600–800 per year (single student)',
    ],
    benefits: [
      {
        title: 'Work Rights',
        description:
          'Up to 48 hours per fortnight during term time, unlimited during breaks.',
      },
      {
        title: 'Dependants',
        description:
          'Family members can accompany on dependent visas, with work rights.',
      },
      {
        title: 'Healthcare',
        description:
          'Overseas Student Health Cover (OSHC) provides access to medical services.',
      },
    ],
  },
  visaStepsData: [
    {
      step: '1',
      title: 'Receive Offer & Accept',
      color: 'bg-blue-500',
      content:
        'Receive and accept an offer from a CRICOS-registered institution.',
    },
    {
      step: '2',
      title: 'Obtain Confirmation of Enrolment',
      color: 'bg-indigo-500',
      content:
        'Pay deposit and request Confirmation of Enrolment (CoE) from your institution.',
    },
    {
      step: '3',
      title: 'Arrange Health Cover',
      color: 'bg-purple-500',
      content:
        'Purchase Overseas Student Health Cover (OSHC) for the duration of your stay.',
    },
    {
      step: '4',
      title: 'Prepare Documents',
      color: 'bg-pink-500',
      content:
        'Gather passport, CoE, financial evidence, GTE statement, and English test results.',
    },
    {
      step: '5',
      title: 'Apply Online',
      color: 'bg-red-500',
      content:
        'Submit Subclass 500 visa application via ImmiAccount and pay the fee.',
    },
    {
      step: '6',
      title: 'Biometrics & Health Check',
      color: 'bg-orange-500',
      content:
        'Provide biometrics and complete health checks if required by your country.',
    },
    {
      step: '7',
      title: 'Await Decision',
      color: 'bg-amber-500',
      content:
        'Visa processing typically takes 4–12 weeks, depending on your country.',
    },
    {
      step: '8',
      title: 'Travel to Australia',
      color: 'bg-green-500',
      content:
        'Once approved, plan travel to arrive before your course start date.',
    },
  ],
  workOpportunitiesData: [
    {
      title: 'During Studies',
      color: 'bg-indigo-500',
      sections: [
        {
          heading: 'Working Hours',
          points: [
            'Up to 48 hours per fortnight during term time',
            'Unlimited hours during semester breaks',
            'Work placements included in some courses',
            'Volunteering opportunities available',
          ],
        },
        {
          heading: 'Common Student Jobs',
          points: [
            'Hospitality (cafes, restaurants)',
            'Retail and customer service',
            'Tutoring and academic support',
            'Casual administrative roles',
          ],
        },
      ],
    },
    {
      title: 'Post-Graduation',
      color: 'bg-green-500',
      sections: [
        {
          heading: 'Temporary Graduate Visa (Subclass 485)',
          points: [
            '2–4 years depending on qualification',
            'Unrestricted work rights',
            'No job offer required',
            'Pathway to permanent residency',
          ],
        },
        {
          heading: 'Skilled Migration',
          points: [
            'Points-based system for permanent residency',
            'Requires relevant occupation on skills list',
            'Employer-sponsored options available',
            'Dependent family members can join',
          ],
        },
      ],
    },
  ],
  jobMarketData: {
    sectors: [
      'Healthcare and Nursing',
      'Information Technology',
      'Engineering and Mining',
      'Education and Teaching',
      'Business and Finance',
      'Tourism and Hospitality',
    ],
    salaries: [
      'Sydney/Melbourne: AUD 65,000 - AUD 80,000',
      'Other cities: AUD 55,000 - AUD 70,000',
      'IT sector: AUD 70,000 - AUD 90,000',
      'Engineering: AUD 65,000 - AUD 85,000',
      'Healthcare: AUD 60,000 - AUD 90,000',
    ],
  },
  bestCitiesData: [
    {
      city: 'Sydney',
      image:
        'https://images.unsplash.com/photo-1506973035872-7179f194c92a?q=80&w=600&auto=format',
      universities: '6 universities',
      description:
        'A global city with iconic landmarks, vibrant culture, and a strong job market.',
      highlights: [
        'Beaches and lifestyle',
        'Global business hub',
        'Cultural diversity',
        'Career opportunities',
      ],
    },
    {
      city: 'Melbourne',
      image:
        'https://images.unsplash.com/photo-1504610926078-b2c920117852?q=80&w=600&auto=format',
      universities: '7 universities',
      description:
        'Cultural capital with a thriving arts scene and excellent student life.',
      highlights: [
        'Arts and culture',
        'Coffee culture',
        'Liveable city',
        'Student-friendly',
      ],
    },
    {
      city: 'Brisbane',
      image:
        'https://images.unsplash.com/photo-1531263552490-1b6d0e8a2a7b?q=80&w=600&auto=format',
      universities: '3 universities',
      description:
        'Sunny, affordable city with a relaxed vibe and growing tech industry.',
      highlights: [
        'Affordable living',
        'Warm climate',
        'Outdoor lifestyle',
        'Tech hub',
      ],
    },
    {
      city: 'Perth',
      image:
        'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987f?q=80&w=600&auto=format',
      universities: '5 universities',
      description:
        'Western gateway with stunning beaches and a strong mining sector.',
      highlights: [
        'Beaches and nature',
        'Mining industry',
        'Relaxed lifestyle',
        'Quality education',
      ],
    },
    {
      city: 'Adelaide',
      image:
        'https://images.unsplash.com/photo-1506973035872-7179f194c92a?q=80&w=600&auto=format',
      universities: '3 universities',
      description:
        'Affordable, student-friendly city with festivals and wine regions.',
      highlights: [
        'Affordability',
        'Festivals',
        'Wine regions',
        'Safe environment',
      ],
    },
    {
      city: 'Canberra',
      image:
        'https://images.unsplash.com/photo-1506973035872-7179f194c92a?q=80&w=600&auto=format',
      universities: '2 universities',
      description:
        'Australia’s capital with top universities and a quiet, safe environment.',
      highlights: [
        'Academic excellence',
        'Safe and quiet',
        'Government hub',
        'Cultural attractions',
      ],
    },
  ],
  studentLifeData: {
    title: 'Student Life and Support Services',
    icon: {
      bg: 'bg-purple-100',
      color: 'text-purple-600',
    },
    sections: [
      {
        title: 'Campus Life',
        bg: 'bg-purple-50',
        border: 'border-purple-100',
        textColor: 'text-purple-800',
        items: [
          {
            title: 'Student Guilds',
            description:
              'Student-led organizations offering clubs, events, and advocacy.',
          },
          {
            title: 'Clubs & Societies',
            description:
              'Hundreds of clubs, from sports to cultural and academic groups.',
          },
          {
            title: 'Sports & Recreation',
            description:
              'Modern facilities for sports, fitness, and outdoor activities.',
          },
          {
            title: 'Events & Festivals',
            description:
              'Orientation Week, cultural festivals, and university-wide events.',
          },
        ],
      },
      {
        title: 'Support Services',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        textColor: 'text-blue-800',
        items: [
          {
            title: 'International Student Support',
            description:
              'Dedicated advisors for visa, academic, and cultural support.',
          },
          {
            title: 'Mental Health Services',
            description:
              'Counseling, wellbeing programs, and disability support.',
          },
          {
            title: 'Career Services',
            description:
              'Job fairs, resume workshops, and internship placements.',
          },
          {
            title: 'Academic Support',
            description:
              'Tutoring, writing centers, and English language programs.',
          },
        ],
      },
      {
        title: 'Accommodation Options',
        bg: 'bg-green-50',
        border: 'border-green-100',
        textColor: 'text-green-800',
        items: [
          {
            title: 'On-Campus Housing',
            description: 'University-managed residences with community events.',
            badges: ['Convenient', 'Social', 'Supportive'],
          },
          {
            title: 'Private Student Housing',
            description: 'Modern apartments with amenities for students.',
            badges: ['Independent', 'Modern', 'Community'],
          },
          {
            title: 'Shared Rentals',
            description: 'Houses or apartments shared with other students.',
            badges: ['Affordable', 'Flexible', 'Social'],
          },
          {
            title: 'Homestay',
            description: 'Live with a local family for cultural immersion.',
            badges: ['Cultural', 'Supportive', 'Home-like'],
          },
        ],
      },
      {
        title: 'Transportation',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        textColor: 'text-amber-800',
        items: [
          {
            title: 'Public Transport',
            description: 'Buses, trains, and trams with student discounts.',
          },
          {
            title: 'Cycling',
            description: 'Bike-friendly cities with shared bike programs.',
          },
          {
            title: 'Walking',
            description: 'Compact campuses and nearby accommodations.',
          },
          {
            title: 'Student Travel Passes',
            description: 'Discounted fares for students on public transport.',
          },
        ],
      },
    ],
    additionalInfo: {
      title: 'Healthcare for International Students',
      description:
        'International students must have Overseas Student Health Cover (OSHC) to access medical services in Australia.',
      items: [
        {
          title: 'Covered Services',
          points: [
            'General practitioner visits',
            'Hospital treatment',
            'Ambulance services',
            'Some prescription medications',
          ],
        },
        {
          title: 'Additional Costs',
          points: [
            'Dental care',
            'Optical services',
            'Physiotherapy',
            'Specialist consultations',
          ],
        },
      ],
    },
  },
  latestUpdates2025: [
    {
      title: 'Extended Post-Study Work Rights',
      description: 'Temporary Graduate Visa update',
      content:
        'From 2025, the Temporary Graduate Visa (Subclass 485) has been extended for certain qualifications, allowing up to 4 years of post-study work rights for graduates in high-demand fields like engineering and IT.',
      category: 'Visa Policy',
      gradient: 'from-blue-50 to-sky-50',
      border: 'border-blue-100',
      badgeColor: 'bg-blue-500',
      titleColor: 'text-blue-800',
    },
    {
      title: 'Increased Scholarship Funding',
      description: 'More opportunities',
      content:
        'The Australian government and universities have increased scholarship funding for 2025, with a focus on STEM, regional study, and students from developing nations.',
      category: 'Scholarships',
      gradient: 'from-amber-50 to-yellow-50',
      border: 'border-amber-100',
      badgeColor: 'bg-amber-500',
      titleColor: 'text-amber-800',
    },
    {
      title: 'Digital Visa Processing',
      description: 'Streamlined applications',
      content:
        'Australia has fully transitioned to online visa applications via ImmiAccount, reducing processing times and paperwork for Subclass 500 Student Visas.',
      category: 'Digital Innovation',
      gradient: 'from-purple-50 to-pink-50',
      border: 'border-purple-100',
      badgeColor: 'bg-purple-500',
      titleColor: 'text-purple-800',
    },
    {
      title: 'Regional Incentives',
      description: 'Support for regional study',
      content:
        'New incentives for studying in regional Australia include additional scholarship funding and extended post-study work rights for students at regional campuses.',
      category: 'Education',
      gradient: 'from-green-50 to-emerald-50',
      border: 'border-green-100',
      badgeColor: 'bg-green-500',
      titleColor: 'text-green-800',
    },
  ],
  policyChanges2025: [
    {
      title: 'Updated Financial Requirements',
      content:
        'From 2025, the financial requirement for a student visa has increased to AUD 24,505 per year for living expenses, reflecting rising costs.',
    },
    {
      title: 'Stricter GTE Requirements',
      content:
        'The Genuine Temporary Entrant (GTE) criteria have been tightened, requiring clearer evidence of intent to return home after studies.',
    },
    {
      title: 'Regional Migration Points',
      content:
        'Additional points for permanent residency applications are now available for students who study in regional Australia.',
    },
  ],
  resourcecards: [
    {
      title: 'Course Finder',
      description:
        'Explore courses across Australian universities by subject, location, and entry requirements.',
      buttonText: 'Find Your Course',
      gradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-100',
      textColor: 'text-blue-800',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'University Rankings',
      description:
        'Compare universities based on research, teaching, and student experience.',
      buttonText: 'View Rankings',
      gradient: 'from-purple-50 to-fuchsia-50',
      borderColor: 'border-purple-100',
      textColor: 'text-purple-800',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      title: 'Visa Checklist',
      description:
        'Step-by-step guide to prepare documents for your Subclass 500 visa.',
      buttonText: 'Get Checklist',
      gradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-100',
      textColor: 'text-green-800',
      buttonColor: 'bg-green-600 hover:bg-green-700',
    },
  ],
  resourceofficialLinks: [
    { label: 'Study Australia', href: '#' },
    { label: 'Department of Home Affairs', href: '#' },
    { label: 'Education Services for Overseas Students (ESOS)', href: '#' },
    { label: 'Australian Qualifications Framework (AQF)', href: '#' },
    { label: 'CRICOS - Commonwealth Register of Institutions', href: '#' },
  ],
  resourceguides: [
    { label: 'Australian University Application Guide (PDF)', href: '#' },
    { label: 'Student Visa Guide (PDF)', href: '#' },
    { label: 'Living in Australia Guide (PDF)', href: '#' },
    { label: 'Scholarship Application Guide (PDF)', href: '#' },
    { label: 'Pre-departure Checklist (PDF)', href: '#' },
  ],
  resourcetools: [
    {
      title: 'Cost Calculator',
      description: 'Estimate your study and living costs in Australia.',
      buttonText: 'Calculate Costs',
    },
    {
      title: 'Scholarship Finder',
      description: 'Match scholarships to your profile and study plans.',
      buttonText: 'Find Scholarships',
    },
    {
      title: 'Visa Document Checker',
      description:
        'Ensure you have all required documents for your visa application.',
      buttonText: 'Check Documents',
    },
  ],
  faqs: [
    {
      question: 'How long does it take to get an Australian student visa?',
      answer:
        'Processing times for a Subclass 500 Student Visa typically range from 4 to 12 weeks, depending on your country and application complexity. Apply at least 3 months before your course starts to account for delays, especially during peak periods (November–January).',
    },
    {
      question: 'Can I work while studying in Australia?',
      answer:
        'Yes, Subclass 500 visa holders can work up to 48 hours per fortnight during term time and unlimited hours during official course breaks. Work placements included in your course do not count toward this limit. Check your visa conditions for specifics.',
    },
    {
      question: 'What English language tests are accepted in Australia?',
      answer:
        'Accepted tests include IELTS Academic, TOEFL iBT, PTE Academic, Cambridge English: Advanced (CAE), and Occupational English Test (OET) for health-related courses. Undergraduate programs typically require IELTS 6.0–6.5, while postgraduate programs require 6.5–7.0. Some institutions accept the Duolingo English Test.',
    },
    {
      question: 'How much does it cost to study in Australia?',
      answer:
        'Tuition fees range from AUD 20,000–45,000 per year for undergraduate degrees and AUD 22,000–50,000 for postgraduate programs. Medicine and MBA programs can cost up to AUD 80,000. Living expenses are approximately AUD 24,505 per year, higher in Sydney and Melbourne.',
    },
    {
      question: 'What scholarships are available for international students?',
      answer:
        'Options include Australia Awards Scholarships (fully-funded for eligible countries), Destination Australia (up to AUD 15,000 for regional study), university-specific merit scholarships, and research scholarships for postgraduate students. Check university websites and Study Australia for details.',
    },
    {
      question: 'Can I stay in Australia after completing my studies?',
      answer:
        'Yes, the Temporary Graduate Visa (Subclass 485) allows 2–4 years of work rights, depending on your qualification and study location (regional areas offer longer stays). You can also apply for skilled migration or employer-sponsored visas for permanent residency.',
    },
    {
      question:
        'What are the application deadlines for Australian universities?',
      answer:
        'Undergraduate deadlines are typically December 1 for February intake and May 1 for July intake. Postgraduate deadlines vary but are usually 3–6 months before the course start. Competitive programs like medicine may close earlier, so check university websites.',
    },
    {
      question: 'Do I need health insurance to study in Australia?',
      answer:
        'Yes, Overseas Student Health Cover (OSHC) is mandatory for all international students. It covers general practitioner visits, hospital treatment, and some medications. Costs range from AUD 600–800 per year for a single student. Arrange OSHC before applying for your visa.',
    },
    {
      question: 'How do I open a bank account in Australia?',
      answer:
        'You’ll need your passport, Confirmation of Enrolment (CoE), proof of Australian address (e.g., accommodation contract), and a tax file number (optional but useful for work). Major banks like Commonwealth, ANZ, and Westpac offer student accounts with benefits. Some allow pre-arrival account setup online.',
    },
    {
      question:
        'What support services are available for international students?',
      answer:
        'Universities provide international student advisors, orientation programs, academic support (tutoring, language help), career services, mental health support, and accommodation assistance. Student guilds offer clubs, events, and advocacy. Many cities have multicultural centers for additional support.',
    },
  ],
};
export default australia;
