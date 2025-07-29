const universities = [
  {
    universitycode: 'berkeleycollege',
    universityName: 'Berkeley College',
    country: 'usa',
    location: 'New York City, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80',
    campusName: 'NYC Campus',
    tagline: 'Career-Focused Education in the Heart of New York City',
    stats: ['Est. 1931', 'MSCHE Accredited', 'NYC, NJ, Online'],
    description:
      'Berkeley College has been preparing students for successful careers for over 90 years...',
    overviewData: [
      { label: 'Institution Type', value: 'Private, For-Profit' },
      { label: 'Established', value: '1931' },
      { label: 'Accreditation', value: 'MSCHE' },
      { label: 'Locations', value: 'NYC, NJ, Online' },
      { label: 'Focus Areas', value: 'Business, Health, Professional Studies' },
      { label: 'Student Body', value: '5,000+ Students' },
    ],
    generalInfo:
      'Admission requirements for international students at Berkeley College generally include academic qualifications, English language proficiency, and proof of financial capability.',
    applicationFee: 50,
    financialRequirement: 42000,
    tuitionDeposit: 300,
    processingFee: 100,
    generalRequirements: [
      'Complete the Berkeley College International Application',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Official document of financial support demonstrating minimum funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '61 iBT / 500 PBT' },
        { name: 'IELTS', score: '5.5 or higher' },
        { name: 'Duolingo', score: '90 or above' },
        { name: 'PTE Academic', score: '43 or higher' },
      ],
      otherTests: [
        'Rennert International (Level 6)',
        'DreamIT ESL (Level B2)',
        'Kaplan (High Intermediate)',
        'ELS (Level 112)',
        'Oxford ELLT (Level 5)',
        'Cambridge English (B2 First, C1 Advanced)',
      ],
      additionalRequirements: [
        'Statement of Purpose',
        'Letter of Recommendation',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '105 or above' },
      ],
      additionalRequirements: [
        'Resume (minimum of two years professional employment preferred)',
        'Two letters of recommendation',
        'Personal statement',
        'Application for transfer credit (if seeking transfer credit)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        "Students who do not meet English language proficiency requirements can be granted conditional admission to study English as a Second Language (ESL) full-time with Berkeley's on-campus partner, Rennert International, before beginning their degree program.",
      benefits: [
        'SEVIS I-20 sponsorship available',
        'F-1 student visa sponsorship',
        'Pathway to degree program',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$23,200 - $28,600',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$25,800 - $31,200',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$600' },
      { name: 'Administrative Fee', amount: '$300' },
      { name: 'International Student Fee', amount: '$500' },
      { name: 'Student Activities Fee', amount: '$200' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$12,000 - $16,000' },
      { category: 'Meals', range: '$3,500 - $4,500' },
      { category: 'Books & Supplies', range: '$1,200 - $1,800' },
      { category: 'Personal Expenses', range: '$1,300 - $2,700' },
    ],
    scholarships: [
      {
        name: 'International Student Scholarship',
        amount: '10% - 25%',
        type: 'Tuition Reduction',
        eligibility: 'Minimum 3.0 GPA',
        renewable: true,
        popular: true,
      },
      {
        name: 'Academic Excellence Award',
        amount: 'Up to $5,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, Leadership',
        renewable: true,
        popular: false,
      },
      {
        name: 'International Transfer Scholarship',
        amount: '15% - 20%',
        type: 'Transfer Students',
        eligibility: '3.2+ GPA, 24+ Credits',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships and co-op programs related to your field of study',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80',
        alt: 'Modern campus building',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus study areas',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities',
      },
    ],
    campusFeatures: [
      {
        title: 'Prime NYC Location',
        description:
          'Located in Midtown Manhattan with easy access to internships, cultural attractions, and networking opportunities.',
      },
      {
        title: 'Diverse Community',
        description:
          'Join a vibrant community of students from over 50 countries, creating a truly international experience.',
      },
      {
        title: 'Modern Facilities',
        description:
          'State-of-the-art classrooms, computer labs, library, and student lounges designed for collaborative learning.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BBA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Palette',
        title: 'Fashion Management',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Information Technology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Palette',
        title: 'BFA in Graphic Design',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Shield',
        title: 'BS in Criminal Justice',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],

    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'MSN with Specializations',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
    ],
  },
  {
    universitycode: 'yeshivauniversity',
    universityName: 'Yeshiva University',
    country: 'usa',
    location: 'New York City, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Wilf Campus, Beren Campus, Brookdale Center, Resnick Campus',
    tagline: 'Torah Umadda: Blending Jewish Values with Academic Excellence',
    stats: ['Est. 1886', 'MSCHE Accredited', 'NYC, Bronx, Israel'],
    description:
      'Yeshiva University, founded in 1886, is a private Orthodox Jewish university in New York City, offering a unique dual curriculum that combines rigorous academics with Jewish studies, preparing students for impactful careers.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1886' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Locations', value: 'Manhattan, Bronx, Israel' },
      {
        label: 'Focus Areas',
        value: 'Business, Law, Medicine, Jewish Studies, STEM',
      },
      { label: 'Student Body', value: '6,800+ Students' },
    ],
    generalInfo:
      'Yeshiva University welcomes international students from over 50 countries, requiring academic transcripts, English proficiency, financial documentation, and a holistic application review including essays and recommendations.',
    applicationFee: 65,
    financialRequirement: 65000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the Yeshiva University Online Application',
      'Official high school or post-secondary transcripts (translated into English if needed, evaluated by a NACES-approved agency)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '80 or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo English Test', score: '110 or higher' },
        { name: 'PTE Academic', score: '58 or higher' },
      ],
      otherTests: [
        'SAT or ACT (optional, but recommended for merit scholarships)',
        'Cambridge English (B2 First, C1 Advanced)',
      ],
      additionalRequirements: [
        'Two letters of recommendation (one preferably from a clergyman)',
        'Personal essay (750 words)',
        'Optional interview with Admissions Office',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '85 or higher' },
        { name: 'IELTS', score: '7.0 or higher' },
        { name: 'Duolingo English Test', score: '120 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV (professional experience preferred for some programs)',
        'Two letters of recommendation',
        'Personal statement or essay (program-specific)',
        'Official transcripts from all post-secondary institutions',
        'GRE or GMAT (required for some programs, e.g., MBA, STEM)',
      ],
    },
    conditionalAdmission: {
      available: false,
      description:
        'Yeshiva University does not offer conditional admission for English language proficiency. Applicants must meet English proficiency requirements prior to admission.',
      benefits: [],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$46,000 - $51,800',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$23,000 - $55,935',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$450' },
      { name: 'Student Activities Fee', amount: '$200' },
      {
        name: 'Health Insurance Fee',
        amount: '$2,500 (mandatory unless waived)',
      },
      { name: 'Registration Fee', amount: '$100' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$9,250 - $15,000' },
      { category: 'Meals', range: '$4,000 - $5,500' },
      { category: 'Books & Supplies', range: '$1,200 - $1,800' },
      { category: 'Personal Expenses', range: '$2,000 - $3,500' },
    ],
    scholarships: [
      {
        name: 'Honors Scholarship',
        amount: 'Up to $25,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, strong academic record',
        renewable: true,
        popular: true,
      },
      {
        name: "Dean's Scholarship",
        amount: 'Up to $15,000',
        type: 'Merit-Based',
        eligibility: '3.3+ GPA, leadership qualities',
        renewable: true,
        popular: false,
      },
      {
        name: 'JFEW Science Fellowship',
        amount: 'Varies (includes stipends, internships)',
        type: 'Program-Specific',
        eligibility: 'Stern College for Women, STEM focus',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate of eligibility after admission and tuition deposit',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Wilf Campus academic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Beren Campus student lounge',
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-74c5a21b26a0?auto=format&fit=crop&w=800&q=80',
        alt: 'Library and study spaces',
      },
    ],
    campusFeatures: [
      {
        title: 'New York City Campuses',
        description:
          'Four campuses in Manhattan and the Bronx, offering access to internships, cultural hubs, and networking in a global city.',
      },
      {
        title: 'Diverse Student Body',
        description:
          'Over 6,800 students, including international students from 50+ countries, fostering a vibrant, inclusive community.',
      },
      {
        title: 'Modern Facilities',
        description:
          'State-of-the-art libraries, kosher dining, fitness centers, and student organizations supporting academic and cultural life.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BBA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Jewish Studies',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Microscope',
        title: 'BS in Biology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Scales',
        title: 'JD at Cardozo School of Law',
        duration: '3 Years',
        type: 'Doctoral',
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MD at Albert Einstein College of Medicine',
        duration: '4 Years',
        type: 'Doctoral',
        popular: false,
      },
      {
        icon: 'Users',
        title: 'MSW in Social Work',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'uticauniversity',
    universityName: 'Utica University',
    country: 'usa',
    location: 'Utica, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Utica Campus',
    tagline: 'A Future Beyond Your Imagining',
    stats: [
      'Est. 1946',
      'MSCHE Accredited',
      'Utica, NY; Syracuse, NY; Latham, NY; St. Petersburg, FL',
    ],
    description:
      'Utica University, a private institution founded in 1946, offers a personalized approach to higher education with a focus on innovation, affordability, and diversity, preparing students for successful careers through hands-on learning and cutting-edge programs.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1946' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      {
        label: 'Locations',
        value: 'Utica, NY; Syracuse, NY; Latham, NY; St. Petersburg, FL',
      },
      {
        label: 'Focus Areas',
        value:
          'Business, Health Professions, Cybersecurity, Education, Arts and Sciences',
      },
      { label: 'Student Body', value: '3,500+ Students' },
    ],
    generalInfo:
      'Admission requirements for international students at Utica University include academic transcripts, English language proficiency, proof of financial support, and a valid passport. The university offers a test-optional admissions policy for most programs.',
    applicationFee: 40,
    financialRequirement: 40000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the Utica University International Application',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Official document of financial support demonstrating minimum funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT / 550 PBT' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo', score: '100 or above' },
        { name: 'PTE Academic', score: '53 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Cambridge English (B2 First, C1 Advanced)',
        'iTEP (3.8 or higher)',
      ],
      additionalRequirements: [
        'Personal Statement (optional for some programs)',
        'One Letter of Recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '90 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation',
        'Personal Statement',
        'Application for transfer credit (if applicable)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English language proficiency requirements may be eligible for conditional admission through Utica University’s ESL pathway program, offered in partnership with local language schools, allowing students to improve their English skills before starting their degree program.',
      benefits: [
        'SEVIS I-20 sponsorship available',
        'F-1 student visa sponsorship',
        'Seamless transition to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$26,930',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$22,000 - $27,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$200' },
      { name: 'Student Activities Fee', amount: '$150' },
      { name: 'Health and Wellness Fee', amount: '$250' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$8,600 - $12,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'International Merit Scholarship',
        amount: 'Up to $12,000',
        type: 'Merit-Based',
        eligibility: '2.5+ GPA, Academic Excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'Pioneer Scholarship',
        amount: 'Up to $10,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, Leadership or Community Involvement',
        renewable: true,
        popular: false,
      },
      {
        name: 'Transfer Achievement Award',
        amount: 'Up to $8,000',
        type: 'Transfer Students',
        eligibility: '2.7+ GPA, 24+ Credits',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships and co-op programs related to your field of study, such as cybersecurity or nursing',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Utica University main campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus library and study areas',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities and events',
      },
    ],
    campusFeatures: [
      {
        title: 'Central New York Location',
        description:
          'Located in Utica, NY, with access to internships and networking opportunities in nearby Syracuse and Albany.',
      },
      {
        title: 'Supportive Community',
        description:
          'Small class sizes and dedicated faculty foster a close-knit, supportive academic environment.',
      },
      {
        title: 'Specialized Facilities',
        description:
          'State-of-the-art cybersecurity labs, nursing simulation centers, and athletic facilities including Gaetano Stadium.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Shield',
        title: 'BS in Cybersecurity',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BBA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Gavel',
        title: 'BS in Criminal Justice',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Brain',
        title: 'BS in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MS in Nursing (Family Nurse Practitioner)',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Shield',
        title: 'MS in Cybersecurity',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'umsv',
    universityName: 'University of Mount Saint Vincent',
    country: 'usa',
    location: 'Bronx, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Riverdale Campus',
    tagline: 'Transforming Lives Through Academic Excellence and Service',
    stats: ['Est. 1847', 'MSCHE Accredited', 'NYC-Based'],
    description:
      'The University of Mount Saint Vincent, founded in 1847 by the Sisters of Charity, offers a transformative liberal arts education with a focus on professional preparation and community engagement on a scenic campus overlooking the Hudson River.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1847' },
      { label: 'Accreditation', value: 'MSCHE, CCNE, AAQEP' },
      { label: 'Location', value: 'Riverdale, Bronx, NYC' },
      {
        label: 'Focus Areas',
        value: 'Liberal Arts, Nursing, Education, Business',
      },
      { label: 'Student Body', value: '2,398+ Undergraduates, 350+ Graduates' },
    ],
    generalInfo:
      'Admission to the University of Mount Saint Vincent requires academic transcripts, proof of English proficiency for international students, and financial documentation. The university emphasizes holistic education and offers robust support for international students.',
    applicationFee: 35,
    financialRequirement: 42000,
    tuitionDeposit: 500,
    processingFee: 100,
    generalRequirements: [
      'Complete the Common Application or UMSV Application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of graduation from secondary school or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '61 iBT / 500 PBT' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo', score: '90 or above' },
        { name: 'PTE Academic', score: '44 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'One letter of recommendation',
        'Personal essay or statement of purpose',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '105 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement',
        'Relevant work experience (program-specific)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in an intensive English program through UMSV’s partner language schools to prepare for degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Academic advising and support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$42,740',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$15,570 - $18,900',
        period: 'per year',
      },
      {
        category: 'Accelerated BS in Nursing',
        amount: '$16,900',
        period: 'per term',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$450' },
      { name: 'Student Activity Fee', amount: '$250' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,500 (waivable with proof of coverage)',
      },
      { name: 'Orientation Fee', amount: '$200 (first-year students)' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$9,000 - $12,000' },
      { category: 'Meals', range: '$4,000 - $5,500' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Merit-Based Scholarships',
        amount: '$17,000 - $30,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, academic achievement',
        renewable: true,
        popular: true,
      },
      {
        name: 'Seton Scholars Program',
        amount: 'Up to full tuition',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, leadership qualities',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $10,000',
        type: 'Need/Merit-Based',
        eligibility: 'International status, 3.0+ GPA',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description: 'Up to 12 months of work authorization post-graduation',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Hudson River view from campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus academic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b96d7a6d79a7?auto=format&fit=crop&w=800&q=80',
        alt: 'Student life activities',
      },
    ],
    campusFeatures: [
      {
        title: 'Scenic Riverdale Campus',
        description:
          'A 70-acre campus overlooking the Hudson River, offering a serene environment with easy access to Manhattan.',
      },
      {
        title: 'Small Class Sizes',
        description:
          'A 15:1 student-to-faculty ratio ensures personalized attention and strong professor-student relationships.',
      },
      {
        title: 'Vibrant Community',
        description:
          'Engage in over 30 student clubs, NCAA Division III sports, and community service opportunities.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BS in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Flask',
        title: 'BS in Biology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Pen',
        title: 'BA in English',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'MS in Nursing',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'MA in Education',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'sunycobleskill',
    universityName:
      'State University of New York College of Agriculture and Technology at Cobleskill',
    country: 'usa',
    location: 'Cobleskill, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Learn by Doing: Experiential Education for a Sustainable Future',
    stats: ['Est. 1911', 'MSCHE Accredited', '902-Acre Campus'],
    description:
      'SUNY Cobleskill, founded in 1911, is a public college within the SUNY system, renowned for its hands-on learning approach in agriculture, technology, and liberal arts, preparing students for careers and advanced studies across 59 programs.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1911' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Cobleskill, NY' },
      {
        label: 'Focus Areas',
        value:
          'Agriculture, Natural Resources, Business, Culinary Arts, Technology',
      },
      { label: 'Student Body', value: '2,200+ Students' },
    ],
    generalInfo:
      'SUNY Cobleskill accepts international students with a streamlined admissions process, requiring academic transcripts, English proficiency, and financial documentation. The college emphasizes applied learning, ensuring real-world experience for all students.',
    applicationFee: 50,
    financialRequirement: 30000,
    tuitionDeposit: 100,
    processingFee: 0,
    generalRequirements: [
      'Complete the SUNY Application or Common Application',
      'Official high school or post-secondary transcripts (translated into English, evaluated by a NACES-approved agency)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '65 or higher' },
        { name: 'IELTS', score: '5.5 or higher' },
        { name: 'Duolingo English Test', score: '95 or higher' },
        { name: 'PTE Academic', score: '44 or higher' },
      ],
      otherTests: [
        'SAT or ACT (optional, recommended for scholarships)',
        'Cambridge English (B2 First)',
      ],
      additionalRequirements: [
        'One letter of recommendation (optional but encouraged)',
        'Personal essay (optional, 250-500 words)',
      ],
    },
    graduate: {
      englishTests: [],
      additionalRequirements: [],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in an intensive English program through a SUNY partner institution before starting their degree program.',
      benefits: [
        'Pathway to degree program',
        'F-1 student visa sponsorship',
        'Support for language skill development',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (In-State)',
        amount: '$8,676',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (Out-of-State/International)',
        amount: '$18,586',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$400' },
      { name: 'Student Activity Fee', amount: '$200' },
      { name: 'Health Services Fee', amount: '$350' },
      { name: 'International Student Fee', amount: '$300' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$8,500 - $10,500' },
      { category: 'Meals', range: '$4,500 - $5,500' },
      { category: 'Books & Supplies', range: '$1,200 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'AmeriCorps Scholarship',
        amount: '$1,000',
        type: 'Merit-Based',
        eligibility: 'AmeriCorps alumni, first-year full-time enrollment',
        renewable: false,
        popular: true,
      },
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $5,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, strong academic record',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: 'Up to $2,000',
        type: 'Transfer Students',
        eligibility: '2.5+ GPA, 24+ credits',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Main campus academic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e84f23?auto=format&fit=crop&w=800&q=80',
        alt: 'Agricultural facilities',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Student recreational spaces',
      },
    ],
    campusFeatures: [
      {
        title: '902-Acre Campus',
        description:
          'Features a contiguous farm, equestrian center, 200-cow dairy facility, and the Northeast’s largest cold-water fish hatchery.',
      },
      {
        title: 'Hands-On Learning',
        description:
          'Students engage in real-world experiences through a student-run restaurant, USDA-certified meat processing facility, and more.',
      },
      {
        title: 'Vibrant Community',
        description:
          'Over 50 student clubs, NCAA Division III athletics, and a diverse study-abroad program foster a dynamic student life.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Leaf',
        title: 'BS in Animal Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BT in Agricultural Business Management',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Fish',
        title: 'BS in Fisheries and Aquaculture',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Utensils',
        title: 'BS in Culinary Arts',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Tree',
        title: 'BS in Plant Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [],
  },
  {
    universitycode: 'daveschool',
    universityName:
      'The DAVE School (Digital Animation & Visual Effects School)',
    country: 'usa',
    location: 'Orlando, Florida, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Universal Studios Campus',
    tagline: 'Career-Ready Artists for Film, Television, and Gaming',
    stats: ['Est. 2000', 'MSCHE Accredited', 'Orlando, FL'],
    description:
      'The DAVE School, located on the backlot of Universal Studios Florida, has been training industry-ready artists in visual effects, game production, and virtual production since 2000, with a focus on hands-on learning and real-world experience.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, For-Profit' },
      { label: 'Established', value: '2000' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Orlando, FL (Universal Studios Backlot)' },
      {
        label: 'Focus Areas',
        value: 'Visual Effects, Game Production, Virtual Production',
      },
      { label: 'Student Body', value: '1,000+ Students' },
    ],
    generalInfo:
      'Admission to The DAVE School requires a portfolio review showcasing creativity and aptitude, academic transcripts, and English proficiency for international students. The school is part of NUC University and offers specialized diploma and bachelor’s programs.',
    applicationFee: 75,
    financialRequirement: 35000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the DAVE School Application via the Official Application Portal',
      'Portfolio submission showcasing creative work',
      'Official secondary or post-secondary transcripts (with certified English translations if applicable)',
      'Certified financial affidavit or official bank statement for proof of funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '61 iBT / 500 PBT' },
        { name: 'IELTS', score: '5.5 or higher' },
        { name: 'Duolingo', score: '90 or above' },
        { name: 'PTE Academic', score: '43 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Cambridge English (B2 First, C1 Advanced)',
        'iTEP (3.7 or higher)',
      ],
      additionalRequirements: [
        'Portfolio demonstrating creative and technical skills',
        'Personal Statement (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT or higher' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo', score: '100 or above' },
      ],
      additionalRequirements: [
        'Resume showcasing relevant experience',
        'Portfolio review',
        'Letter of Recommendation (optional)',
      ],
    },
    conditionalAdmission: {
      available: false,
      description:
        'The DAVE School does not currently offer conditional admission for English language proficiency. Applicants must meet English proficiency requirements prior to enrollment.',
      benefits: [],
    },
    tuitionData: [
      {
        category: 'Diploma Programs (VFX/Game Production)',
        amount: '$30,000 - $32,000',
        period: 'per program (12 months)',
      },
      {
        category: 'Virtual Production Diploma',
        amount: '$45,000 - $48,000',
        period: 'per program (18 months)',
      },
      {
        category: 'Bachelor’s Programs',
        amount: '$60,000 - $65,000',
        period: 'per program (30 months)',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$500' },
      { name: 'Student Services Fee', amount: '$300' },
    ],
    livingCosts: [
      { category: 'Housing (off-campus)', range: '$10,000 - $15,000' },
      { category: 'Meals', range: '$3,000 - $5,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$2,000 - $3,500' },
    ],
    scholarships: [
      {
        name: 'Merit-Based Scholarship',
        amount: 'Up to $5,000',
        type: 'Merit-Based',
        eligibility: 'Strong portfolio and academic record',
        renewable: false,
        popular: true,
      },
      {
        name: 'Industry Partner Scholarship',
        amount: 'Up to $3,000',
        type: 'Industry-Sponsored',
        eligibility: 'Enrollment in VFX or Virtual Production programs',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships related to visual effects or game production during studies',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Universal Studios backlot',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Motion capture studio',
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-6012e9e37b3e?auto=format&fit=crop&w=800&q=80',
        alt: 'Digital arts lab',
      },
    ],
    campusFeatures: [
      {
        title: 'Universal Studios Backlot',
        description:
          'Located on a 36,055 sq. ft. facility at Universal Studios Florida, featuring a 65’x25’ green screen and motion capture stage.',
      },
      {
        title: 'Industry-Driven Faculty',
        description:
          'Learn from award-winning professionals with experience on projects like Avengers, Rogue One, and The Mandalorian.',
      },
      {
        title: 'Cutting-Edge Facilities',
        description:
          'Access to 3D printing, VR/AR labs, Vicon motion capture systems, and a virtual production stage.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Film',
        title: 'BS in Visual Effects Production',
        duration: '30 Months',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Gamepad',
        title: 'BS in Game Production',
        duration: '30 Months',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brush',
        title: 'BS in Motion Graphics',
        duration: '30 Months',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Code',
        title: 'BS in Production Programming',
        duration: '30 Months',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Video',
        title: 'Diploma in Visual Effects Production',
        duration: '12 Months',
        type: 'Diploma',
        popular: true,
      },
      {
        icon: 'Gamepad',
        title: 'Diploma in Game Production',
        duration: '12 Months',
        type: 'Diploma',
        popular: true,
      },
      {
        icon: 'Camera',
        title: 'Diploma in Virtual Production',
        duration: '18 Months',
        type: 'Diploma',
        popular: false,
      },
    ],
    graduatePrograms: [],
  },
  {
    universitycode: 'utampa',
    universityName: 'The University of Tampa',
    country: 'usa',
    location: 'Tampa, Florida, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Downtown Tampa Campus',
    tagline: 'Academic Excellence in a Vibrant Urban Oasis',
    stats: ['Est. 1931', 'SACS Accredited', 'Tampa, FL'],
    description:
      'The University of Tampa, founded in 1931, is a private institution known for its picturesque campus along the Hillsborough River, featuring the historic Plant Hall. UTampa offers over 200 programs, blending liberal arts with professional preparation in a dynamic urban setting.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1931' },
      {
        label: 'Accreditation',
        value: 'Southern Association of Colleges and Schools (SACS)',
      },
      { label: 'Location', value: 'Downtown Tampa, FL' },
      {
        label: 'Focus Areas',
        value: 'Business, Marine Science, Nursing, Arts',
      },
      { label: 'Student Body', value: '11,054 Students (Fall 2023)' },
    ],
    generalInfo:
      'International students at The University of Tampa must submit academic transcripts, proof of English proficiency, and financial documentation. The university provides a supportive environment with access to career services, internships, and a vibrant campus life.',
    applicationFee: 40,
    financialRequirement: 50000,
    tuitionDeposit: 500,
    processingFee: 100,
    generalRequirements: [
      'Complete the Common Application or UT Application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school graduation or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT / 550 PBT' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '105 or above' },
        { name: 'PTE Academic', score: '58 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'One letter of recommendation (optional)',
        'Personal essay (optional for test-optional applicants)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '90 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement',
        'Program-specific requirements (e.g., GMAT/GRE for some programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in an intensive English program through UT’s partner language schools, such as ELS Language Centers, to prepare for degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Academic and career advising',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$34,408',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$20,000 - $24,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$550' },
      { name: 'Student Service Fee', amount: '$500' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,600 (waivable with proof of coverage)',
      },
      { name: 'Orientation Fee', amount: '$150 (first-year students)' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$10,000 - $13,000' },
      { category: 'Meals', range: '$4,000 - $5,500' },
      { category: 'Books & Supplies', range: '$1,500 - $2,000' },
      { category: 'Personal Expenses', range: '$2,000 - $3,000' },
    ],
    scholarships: [
      {
        name: 'International Student Scholarship',
        amount: '$6,000 - $12,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, strong academic performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $15,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, leadership qualities',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: 'Up to $7,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, 24+ transfer credits',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Plant Hall with minarets',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus riverside view',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities on campus',
      },
    ],
    campusFeatures: [
      {
        title: 'Historic Plant Hall',
        description:
          'A National Historic Landmark with iconic Moorish minarets, housing classrooms, offices, and the Henry B. Plant Museum.',
      },
      {
        title: 'Downtown Tampa Location',
        description:
          'Located in the heart of Tampa, offering access to internships, cultural attractions, and a vibrant urban lifestyle.',
      },
      {
        title: 'Modern Facilities',
        description:
          'Over $1 billion invested in new facilities since 1998, including the Ferman Center for the Arts and Jenkins Health and Technology Building.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BS in Marketing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Bank',
        title: 'BS in Finance',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Shield',
        title: 'BS in Criminology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Flask',
        title: 'BS in Marine Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Cybersecurity',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'MA in Professional Communication',
        duration: '1-2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'simpsonuniversity',
    universityName: 'Simpson University',
    country: 'usa',
    location: 'Redding, California, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-74c5a21b26a0?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Faith-Based Education for a Lifetime of Service',
    stats: ['Est. 1921', 'WSCUC Accredited', '92-Acre Campus'],
    description:
      'Simpson University, founded in 1921, is a private Christian liberal arts college in Redding, California, affiliated with the Christian and Missionary Alliance, offering a transformative education that integrates faith, academics, and service.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1921' },
      {
        label: 'Accreditation',
        value: 'WASC Senior College and University Commission (WSCUC)',
      },
      { label: 'Location', value: 'Redding, CA' },
      {
        label: 'Focus Areas',
        value: 'Nursing, Psychology, Business, Theology, Education',
      },
      { label: 'Student Body', value: '1,250+ Students' },
    ],
    generalInfo:
      'Simpson University welcomes international students, requiring high school or post-secondary transcripts, English proficiency, and financial documentation. The university supports a diverse, faith-centered community with a focus on personalized education.',
    applicationFee: 0,
    financialRequirement: 35000,
    tuitionDeposit: 200,
    processingFee: 0,
    generalRequirements: [
      'Complete the Simpson University Online Application or Common Application',
      'Official high school or post-secondary transcripts (translated into English, evaluated by a NACES-approved agency if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '80 or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo English Test', score: '105 or higher' },
        { name: 'PTE Academic', score: '55 or higher' },
      ],
      otherTests: [
        'SAT or ACT (optional, recommended for scholarships)',
        'Cambridge English (B2 First, C1 Advanced)',
      ],
      additionalRequirements: [
        'One letter of recommendation (optional but encouraged)',
        'Personal essay (250-500 words, required for applicants with GPA below 2.1)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '85 or higher' },
        { name: 'IELTS', score: '7.0 or higher' },
        { name: 'Duolingo English Test', score: '115 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement (program-specific)',
        'Official transcripts from all post-secondary institutions',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in an intensive English program through a partner institution before starting their degree program.',
      benefits: [
        'Pathway to degree program',
        'F-1 student visa sponsorship',
        'Support for language skill development',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$39,706',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$14,400 - $20,250',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$400' },
      { name: 'Student Services Fee', amount: '$250' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (mandatory unless waived)',
      },
      { name: 'Activity Fee', amount: '$150' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$8,500 - $10,500' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $15,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, strong academic record',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $10,000',
        type: 'Merit-Based',
        eligibility: '2.5+ GPA, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: 'Up to $8,000',
        type: 'Transfer Students',
        eligibility: '2.5+ GPA, 12+ transferable credits',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Main campus academic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Student study areas',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus recreational spaces',
      },
    ],
    campusFeatures: [
      {
        title: '92-Acre Campus',
        description:
          'Located in Redding, CA, with proximity to Shasta Lake, Mt. Lassen, and other outdoor attractions, fostering a vibrant student life.',
      },
      {
        title: 'Faith-Centered Community',
        description:
          'A diverse student body from over 30 denominations, united by Christian values and a commitment to service.',
      },
      {
        title: 'Modern Facilities',
        description:
          'Includes a 9,200-square-foot library, athletic facilities for NAIA sports, and spaces for student research and engagement.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Liberal Studies',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Running',
        title: 'BS in Exercise Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'MA in Counseling Psychology',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Cross',
        title: 'MA in Ministry Leadership',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Cross',
        title: 'Master of Divinity',
        duration: '3 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'sunyoswego',
    universityName: 'State University of New York at Oswego',
    country: 'usa',
    location: 'Oswego, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Lakeside Campus',
    tagline: 'Success by the Lake',
    stats: ['Est. 1861', 'MSCHE Accredited', 'Oswego, NY; Syracuse, NY'],
    description:
      'Founded in 1861, SUNY Oswego is a public university on the shores of Lake Ontario, offering over 110 academic programs across four colleges. Known for its vibrant community, hands-on learning, and affordable education, it prepares students for global success with a strong focus on career readiness and innovation.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1861' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Locations', value: 'Oswego, NY; Syracuse, NY (Metro Center)' },
      {
        label: 'Focus Areas',
        value: 'Business, Education, Liberal Arts, Communication, Media & Arts',
      },
      { label: 'Student Body', value: '7,000+ Students' },
    ],
    generalInfo:
      'SUNY Oswego welcomes international students with a test-optional admissions policy, requiring academic transcripts, English proficiency, and proof of financial support. The university provides robust support services to ensure a seamless transition for international students.',
    applicationFee: 50,
    financialRequirement: 35000,
    tuitionDeposit: 200,
    processingFee: 0,
    generalRequirements: [
      'Complete the SUNY Application or Common Application',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'SUNY International Student Financial Statement for proof of funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT / 550 PBT' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo', score: '100 or above' },
        { name: 'PTE Academic', score: '55 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Cambridge English (B2 First, C1 Advanced)',
        'iTEP (3.8 or higher)',
      ],
      additionalRequirements: [
        'Personal Statement (optional)',
        'One Letter of Recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '83 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation',
        'Personal Statement',
        'GRE/GMAT (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in the English Language Institute (ELI) pathway program to improve their skills before beginning their degree program at SUNY Oswego.',
      benefits: [
        'SEVIS I-20 sponsorship available',
        'F-1 student visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (In-State)',
        amount: '$8,769',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (Out-of-State/International)',
        amount: '$19,019',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '$19,033 - $24,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$400' },
      { name: 'Student Activity Fee', amount: '$200' },
      { name: 'Health Service Fee', amount: '$350' },
      { name: 'International Student Fee', amount: '$100' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$8,500 - $10,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $20,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, Academic Excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $8,000',
        type: 'Merit-Based',
        eligibility: '2.5+ GPA, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Destination Oswego Scholarship',
        amount: 'Up to $9,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, Out-of-State/International Students',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships and co-ops related to your field of study, such as business or media',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Lakeside campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Penfield Library',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Marano Campus Center',
      },
    ],
    campusFeatures: [
      {
        title: 'Lake Ontario Location',
        description:
          'Located on a 696-acre campus with 1.5 miles of Lake Ontario shoreline, offering scenic views and recreational activities like sailing and hiking.',
      },
      {
        title: 'Vibrant Student Life',
        description:
          'Over 200 clubs, NCAA Division III sports, and events like OzFest create a lively community.',
      },
      {
        title: 'Modern Facilities',
        description:
          'Features the Shineman Center for Science, Engineering, and Innovation, Marano Campus Center, and a waterfront recreation center.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BS in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Shield',
        title: 'BS in Criminal Justice',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BS in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Microphone',
        title: 'BA in Broadcasting and Mass Communication',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Cloud',
        title: 'BS in Meteorology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Human-Computer Interaction',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Flask',
        title: 'MS in Chemistry',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'stonybrook',
    universityName: 'Stony Brook University',
    country: 'usa',
    location: 'Stony Brook, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'A World-Class Education in a Dynamic Research Environment',
    stats: ['Est. 1957', 'MSCHE Accredited', 'Long Island, NY'],
    description:
      'Founded in 1957, Stony Brook University is a flagship institution of the State University of New York (SUNY) system and a member of the prestigious Association of American Universities. Known for its cutting-edge research and diverse academic programs, SBU offers over 200 undergraduate and 140 graduate programs on a scenic 1,454-acre campus.',
    overviewData: [
      { label: 'Institution Type', value: 'Public, Research University' },
      { label: 'Established', value: '1957' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Stony Brook, Long Island, NY' },
      {
        label: 'Focus Areas',
        value: 'STEM, Health Sciences, Business, Arts & Sciences',
      },
      { label: 'Student Body', value: '26,782 Students (Fall 2023)' },
    ],
    generalInfo:
      'International students at Stony Brook University must provide academic transcripts, proof of English proficiency, and financial documentation. The university offers robust support services, including career advising, internship opportunities, and a vibrant campus life with access to New York City via an on-campus train station.',
    applicationFee: 50,
    financialRequirement: 45000,
    tuitionDeposit: 500,
    processingFee: 100,
    generalRequirements: [
      'Complete the Common Application or SUNY Application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school graduation or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '105 or above' },
        { name: 'PTE Academic', score: '53 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'One letter of recommendation',
        'Personal essay',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '90 iBT or higher' },
        { name: 'IELTS', score: '7.0 or higher' },
        { name: 'Duolingo', score: '120 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two to three letters of recommendation',
        'Personal statement',
        'GRE/GMAT scores (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in Stony Brook’s Intensive English Center (IEC) to improve their skills before starting degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Personalized academic support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (In-State)',
        amount: '$10,644',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (Out-of-State/International)',
        amount: '$32,454',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$13,000 - $25,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$650' },
      { name: 'Student Activity Fee', amount: '$200' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (waivable with proof of coverage)',
      },
      { name: 'International Student Fee', amount: '$300' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$10,000 - $14,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$900 - $1,500' },
      { category: 'Personal Expenses', range: '$2,000 - $3,000' },
    ],
    scholarships: [
      {
        name: 'Global Excellence Scholarship',
        amount: '$2,000 - $10,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, strong academic performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'Valedictorian Scholarship',
        amount: 'Up to $4,000',
        type: 'Merit-Based',
        eligibility: 'Top 10% of high school class',
        renewable: true,
        popular: true,
      },
      {
        name: 'STEM Scholars Program',
        amount: 'Up to full tuition',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, STEM focus',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Frank Melville Jr. Memorial Library',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus academic quad',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities center',
      },
    ],
    campusFeatures: [
      {
        title: 'Research Excellence',
        description:
          'Home to Brookhaven National Laboratory and the Center of Excellence in Wireless and Information Technology, with over 2,500 inventions and 800+ patents.',
      },
      {
        title: 'NYC Accessibility',
        description:
          'On-campus Long Island Rail Road station provides direct access to New York City, 60 miles away, for internships and cultural experiences.',
      },
      {
        title: 'Vibrant Campus Life',
        description:
          'Over 300 student organizations, NCAA Division I athletics, and events like the Roth Pond Regatta and Strawberry Fest.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Brain',
        title: 'BS in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Flask',
        title: 'BS in Biology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BS in Business Management',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'HeartPulse',
        title: 'BS in Health Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MS in Computer Science',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MS in Nursing',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '1-2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'queenscollegecuny',
    universityName: 'Queens College, City University of New York',
    country: 'usa',
    location: 'Flushing, Queens, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'We Learn So That We May Serve',
    stats: ['Est. 1937', 'MSCHE Accredited', '80-Acre Campus'],
    description:
      'Queens College, founded in 1937, is a public college within the City University of New York system, located in Flushing, Queens. Known for its diverse student body and affordable education, it offers over 180 undergraduate and graduate programs, fostering academic excellence and social mobility.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1937' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Flushing, Queens, NY' },
      {
        label: 'Focus Areas',
        value: 'Arts, Business, Computer Science, Education, Sciences',
      },
      { label: 'Student Body', value: '18,900+ Students' },
    ],
    generalInfo:
      'Queens College welcomes international students from over 145 countries, requiring academic transcripts, English proficiency, and financial documentation. The college offers a supportive environment with a 14:1 student-faculty ratio and extensive career services.',
    applicationFee: 65,
    financialRequirement: 35000,
    tuitionDeposit: 250,
    processingFee: 0,
    generalRequirements: [
      'Complete the CUNY Application or Common Application',
      'Official high school or post-secondary transcripts (translated into English, evaluated by a NACES-approved agency if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '61 or higher' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo English Test', score: '95 or higher' },
        { name: 'PTE Academic', score: '44 or higher' },
      ],
      otherTests: [
        'SAT or ACT (optional, recommended for scholarships)',
        'Cambridge English (B2 First, C1 Advanced)',
      ],
      additionalRequirements: [
        'Personal essay (optional, recommended for holistic review)',
        'One letter of recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '80 or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo English Test', score: '105 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement (program-specific)',
        'Official transcripts from all post-secondary institutions',
        'GRE or GMAT (required for some programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in the CUNY Language Immersion Program (CLIP) or other partner programs to improve language skills before starting their degree.',
      benefits: [
        'Pathway to degree program',
        'F-1 student visa sponsorship',
        'Support for language and academic preparation',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (In-State)',
        amount: '$7,538',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (Out-of-State/International)',
        amount: '$19,208',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (In-State)',
        amount: '$11,612',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (Out-of-State/International)',
        amount: '$21,692',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$250' },
      { name: 'Student Activity Fee', amount: '$100' },
      { name: 'Consolidated Service Fee', amount: '$15' },
      { name: 'University Student Senate Fee', amount: '$1.45' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$12,000 - $15,102' },
      { category: 'Meals', range: '$3,500 - $5,000' },
      { category: 'Books & Supplies', range: '$1,200 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Macaulay Honors College Scholarship',
        amount: 'Full tuition',
        type: 'Merit-Based',
        eligibility:
          'High academic achievement, admitted to Macaulay Honors College',
        renewable: true,
        popular: true,
      },
      {
        name: 'Queens College Scholars',
        amount: '$250 - $2,500 per semester',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, full-time enrollment',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: 'Up to $1,500',
        type: 'Transfer Students',
        eligibility: '3.0+ GPA, 24+ transferable credits',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Powdermaker Hall academic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Benjamin Rosenthal Library',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Summit Apartments residence hall',
      },
    ],
    campusFeatures: [
      {
        title: '80-Acre Campus',
        description:
          'Located in Flushing, Queens, with a tree-lined quad, Olympic-size pool, and modern facilities like Powdermaker Hall and the Benjamin Rosenthal Library.',
      },
      {
        title: 'Diverse Community',
        description:
          'Hosts students from 145 countries speaking 87 languages, fostering a vibrant, inclusive environment.',
      },
      {
        title: 'Tech Incubator',
        description:
          'The only tech incubator in Queens, supporting startups and fostering innovation among students.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Brain',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BBA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Music',
        title: 'BMus in Music Performance',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Education',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Music',
        title: 'MA in Music',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'MSEd in Education',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Computer Science',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Library',
        title: 'MLS in Library Science',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'rit',
    universityName: 'Rochester Institute of Technology',
    country: 'usa',
    location: 'Henrietta, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Where Creativity Meets Technology',
    stats: ['Est. 1829', 'MSCHE Accredited', 'Rochester, NY; Global Campuses'],
    description:
      'Founded in 1829, Rochester Institute of Technology (RIT) is a private research university known for its innovative blend of technology, arts, and design. With a strong emphasis on experiential learning, including one of the world’s largest co-op programs, RIT prepares students for careers in diverse fields through hands-on experiences and cutting-edge facilities.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1829' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      {
        label: 'Locations',
        value: 'Rochester, NY; China; Croatia; Dubai; Kosovo',
      },
      {
        label: 'Focus Areas',
        value: 'Engineering, Computing, Arts, Design, Business',
      },
      { label: 'Student Body', value: '19,000+ Students' },
    ],
    generalInfo:
      'RIT’s admissions process is test-optional, requiring academic transcripts, English proficiency for international students, and proof of financial support. The university supports over 2,400 international students from 100+ countries with comprehensive services, including the English Language Center for non-native speakers.',
    applicationFee: 65,
    financialRequirement: 75000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the Common Application or RIT Application',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
      'Art portfolio (for BFA programs in School of Art, Design, or Film and Animation)',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT / 550 PBT' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '120 or above' },
        { name: 'PTE Academic', score: '58 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Cambridge English (B2 First, C1 Advanced)',
        'iTEP (4.0 or higher)',
      ],
      additionalRequirements: [
        'Personal Statement (recommended)',
        'One Letter of Recommendation (optional)',
        'Portfolio (for art, design, or film programs)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '88 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '120 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation',
        'Personal Statement',
        'GRE/GMAT (program-specific, optional for some)',
        'Portfolio (for art, design, or film programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements can enroll in RIT’s English Language Center for intensive English instruction, providing a pathway to degree programs upon successful completion.',
      benefits: [
        'SEVIS I-20 sponsorship available',
        'F-1 student visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$59,274',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$56,884 - $62,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$400' },
      { name: 'Student Activity Fee', amount: '$350' },
      { name: 'Health Service Fee', amount: '$500' },
      { name: 'International Student Fee', amount: '$200' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$8,500 - $12,000' },
      { category: 'Meals', range: '$5,000 - $7,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$2,000 - $3,000' },
    ],
    scholarships: [
      {
        name: 'RIT Presidential Scholarship',
        amount: 'Up to $20,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, Academic Excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $15,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'NTID Merit Scholarship',
        amount: 'Up to $10,000',
        type: 'Merit-Based',
        eligibility: 'Deaf or hard-of-hearing students, 3.0+ GPA',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for co-ops and internships related to your field of study, with over 4,500 students placed annually',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'RIT main campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Student Hall for Exploration and Development (SHED)',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus quad and student activities',
      },
    ],
    campusFeatures: [
      {
        title: 'Innovative Facilities',
        description:
          'Home to the Student Hall for Exploration and Development (SHED), with makerspaces for 3D printing, textiles, and robotics, and the Global Cybersecurity Institute.',
      },
      {
        title: 'National Technical Institute for the Deaf (NTID)',
        description:
          'The world’s largest technological college for deaf and hard-of-hearing students, supporting over 1,100 students with specialized services.',
      },
      {
        title: 'Vibrant Location',
        description:
          'Located in suburban Rochester, NY, near downtown’s cultural and tech hubs, with access to the Finger Lakes and outdoor activities.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Gear',
        title: 'BS in Mechanical Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Palette',
        title: 'BFA in Film and Animation',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Shield',
        title: 'BS in Cybersecurity',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BS in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Computer Science',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Flask',
        title: 'MS in Data Science',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'sdsu',
    universityName: 'San Diego State University',
    country: 'usa',
    location: 'San Diego, California, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Leadership Starts Here',
    stats: ['Est. 1897', 'WSCUC Accredited', 'San Diego, CA'],
    description:
      'Founded in 1897, San Diego State University is the oldest and largest higher education institution in the San Diego region. A public research university and a federally-designated Hispanic-Serving Institution (HSI), SDSU offers over 200 degree programs and fosters a vibrant campus life with over 400 student organizations.',
    overviewData: [
      { label: 'Institution Type', value: 'Public, Research University' },
      { label: 'Established', value: '1897' },
      {
        label: 'Accreditation',
        value: 'WASC Senior College and University Commission (WSCUC)',
      },
      { label: 'Location', value: 'San Diego, CA' },
      {
        label: 'Focus Areas',
        value: 'Business, Engineering, Health Sciences, Social Sciences',
      },
      { label: 'Student Body', value: '38,000+ Students (Fall 2024)' },
    ],
    generalInfo:
      'International students at San Diego State University must submit academic transcripts, proof of English proficiency, and financial documentation. SDSU provides extensive support through its International Student Center, offering visa assistance, academic advising, and career services.',
    applicationFee: 70,
    financialRequirement: 45000,
    tuitionDeposit: 400,
    processingFee: 100,
    generalRequirements: [
      'Complete the Cal State Apply application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school graduation or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo', score: '105 or above' },
        { name: 'PTE Academic', score: '49 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'Personal statement (optional)',
        'One letter of recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Statement of purpose',
        'GRE/GMAT scores (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in SDSU’s American Language Institute (ALI) to improve their English skills before starting degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Academic and cultural support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (In-State)',
        amount: '$8,728',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (Out-of-State/International)',
        amount: '$21,328',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '$17,187 - $20,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$500' },
      { name: 'Student Activity Fee', amount: '$300' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (waivable with proof of coverage)',
      },
      { name: 'International Student Fee', amount: '$250' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$12,000 - $15,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$2,000 - $3,000' },
    ],
    scholarships: [
      {
        name: 'International Student Scholarship',
        amount: '$2,000 - $10,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, academic excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'Aztec Scholarship',
        amount: 'Up to $8,000',
        type: 'Merit/Need-Based',
        eligibility: '3.5+ GPA, demonstrated need',
        renewable: true,
        popular: true,
      },
      {
        name: 'Global Diversity Scholarship',
        amount: 'Up to $5,000',
        type: 'Diversity-Based',
        eligibility: 'International status, 3.0+ GPA',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Hepner Hall and campus quad',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus student center',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Aztec Nights event',
      },
    ],
    campusFeatures: [
      {
        title: 'Hispanic-Serving Institution',
        description:
          'As a federally-designated HSI, SDSU fosters an inclusive environment with robust support for diverse student populations.',
      },
      {
        title: 'Snapdragon Stadium',
        description:
          'A state-of-the-art 35,000-seat stadium hosting SDSU football games, concerts, and community events.',
      },
      {
        title: 'Vibrant Campus Life',
        description:
          'Over 400 student organizations, Aztec Nights events, and NCAA Division I athletics create a dynamic student experience.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BS in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BS in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Shield',
        title: 'BS in Criminal Justice',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Gear',
        title: 'BS in Mechanical Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Microphone',
        title: 'BA in Journalism',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Big Data Analytics',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MS in Public Health',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'nyit',
    universityName: 'New York Institute of Technology',
    country: 'usa',
    location: 'Old Westbury and Manhattan, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Old Westbury Campus, Manhattan Campus',
    tagline: 'Reinvent the Future with Technology and Innovation',
    stats: ['Est. 1955', 'MSCHE Accredited', '1050-Acre Old Westbury Campus'],
    description:
      'New York Institute of Technology (NYIT), founded in 1955, is a private, non-profit research university with campuses in Old Westbury and Manhattan, New York. Renowned for its career-oriented, technology-focused education, NYIT offers over 90 programs across fields like engineering, health professions, and architecture, preparing students for global careers.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1955' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      {
        label: 'Locations',
        value: 'Old Westbury, Manhattan, Arkansas, China, Canada, UAE',
      },
      {
        label: 'Focus Areas',
        value:
          'Engineering, Computing Sciences, Health Professions, Architecture, Management',
      },
      { label: 'Student Body', value: '6,757 Students (2023)' },
    ],
    generalInfo:
      'NYIT welcomes international students from over 76 countries, requiring academic transcripts, English proficiency, and financial documentation. With a 13:1 student-faculty ratio and a 76% acceptance rate, NYIT offers a supportive, tech-driven environment.',
    applicationFee: 50,
    financialRequirement: 65000,
    tuitionDeposit: 400,
    processingFee: 0,
    generalRequirements: [
      'Complete the NYIT Online Application or Common Application',
      'Official high school or post-secondary transcripts (translated into English, evaluated by a NACES-approved agency)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '79 or higher' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo English Test', score: '105 or higher' },
        { name: 'PTE Academic', score: '53 or higher' },
      ],
      otherTests: [
        'SAT or ACT (optional, recommended for scholarships)',
        'Cambridge English (B2 First, C1 Advanced)',
      ],
      additionalRequirements: [
        'One letter of recommendation (optional)',
        'Personal essay (250-650 words, optional but recommended)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '80 or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo English Test', score: '110 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation (program-specific)',
        'Personal statement (program-specific)',
        'Official transcripts from all post-secondary institutions',
        'GRE or GMAT (required for some programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in NYIT’s English Language Institute (ELI) for intensive English courses to prepare for academic study.',
      benefits: [
        'Pathway to degree program',
        'F-1 student visa sponsorship',
        'Support for academic and professional English skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$41,960',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$27,000 - $46,260',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$600' },
      { name: 'Student Activity Fee', amount: '$250' },
      {
        name: 'Health Insurance Fee',
        amount: '$2,000 (mandatory unless waived)',
      },
      { name: 'Program Fee (varies by major)', amount: '$500 - $1,000' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$10,000 - $16,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$1,200 - $1,800' },
      { category: 'Personal Expenses', range: '$2,000 - $3,500' },
    ],
    scholarships: [
      {
        name: 'First-Year Academic Scholarship',
        amount: 'Up to $16,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, strong academic record',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: 'Up to $15,000',
        type: 'Transfer Students',
        eligibility: '2.5+ GPA, 24+ transferable credits',
        renewable: true,
        popular: true,
      },
      {
        name: 'Graduate Scholarship',
        amount: 'Up to $3,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, program-specific criteria',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Old Westbury campus academic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Manhattan campus near Central Park',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities center',
      },
    ],
    campusFeatures: [
      {
        title: 'Dual New York Locations',
        description:
          'Campuses in Old Westbury’s wooded 1050-acre estate and Manhattan’s vibrant Upper West Side, near Central Park, offering urban and suburban experiences.',
      },
      {
        title: 'Cutting-Edge Facilities',
        description:
          'Includes a cybersecurity lab, 3D motion capture lab, and Nassau County’s first Class 10,000 clean room for nanoengineering.',
      },
      {
        title: 'Diverse Community',
        description:
          'Students from 76 countries and 44 states, fostering a global, inclusive environment with a 95% placement rate within 6 months of graduation.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Building',
        title: 'BArch in Architecture',
        duration: '5 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BBA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Microchip',
        title: 'BS in Electrical and Computer Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Computer Science',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'DO in Osteopathic Medicine',
        duration: '4 Years',
        type: 'Doctoral',
        popular: false,
      },
      {
        icon: 'Microchip',
        title: 'MS in Cybersecurity',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'niagarauniversity',
    universityName: 'Niagara University',
    country: 'usa',
    location: 'Lewiston, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Educating Minds, Enriching Lives',
    stats: ['Est. 1856', 'MSCHE Accredited', 'Lewiston, NY; Vaughan, ON'],
    description:
      'Founded in 1856 by the Vincentian Community, Niagara University is a private Catholic institution rooted in liberal arts and the Vincentian tradition. Located near Niagara Falls, it offers over 80 academic programs with a strong focus on service learning, career preparation, and global engagement, preparing students for professional success and societal impact.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1856' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Locations', value: 'Lewiston, NY; Vaughan, ON (Canada)' },
      {
        label: 'Focus Areas',
        value: 'Business, Education, Nursing, Hospitality, Arts & Sciences',
      },
      { label: 'Student Body', value: '4,000+ Students' },
    ],
    generalInfo:
      'Niagara University uses a test-optional admissions policy and evaluates international applicants based on academic transcripts, English proficiency, and financial documentation. The Office of International Relations provides dedicated support for visa processes and cultural adjustment.',
    applicationFee: 50,
    financialRequirement: 49000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the Niagara University Application or Common Application',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT / 550 PBT' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo', score: '110 or above' },
        { name: 'PTE Academic', score: '52 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Cambridge English (B2 First, C1 Advanced)',
        'iTEP (3.8 or higher)',
      ],
      additionalRequirements: [
        'Personal Statement (recommended)',
        'One Letter of Recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '100 iBT or higher' },
        { name: 'IELTS', score: '7.0 or higher' },
        { name: 'Duolingo', score: '120 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation',
        'Personal Statement',
        'GRE/GMAT (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in Niagara University’s English Language Institute (ELI) for intensive English instruction, providing a pathway to degree programs upon successful completion.',
      benefits: [
        'SEVIS I-20 sponsorship available',
        'F-1 student visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$38,340',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$800 - $1,000',
        period: 'per credit hour',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$400' },
      { name: 'Student Activity Fee', amount: '$200' },
      { name: 'Health Service Fee', amount: '$350' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$8,000 - $12,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$400 - $1,000' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $20,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, Academic Excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $15,000',
        type: 'Merit-Based',
        eligibility: '2.5+ GPA, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Visit Scholarship',
        amount: '$1,250',
        type: 'Merit-Based',
        eligibility: 'Campus visit and application by deadline',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships and co-ops related to your field of study, such as hospitality or education',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Niagara University campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Castellani Art Museum',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities center',
      },
    ],
    campusFeatures: [
      {
        title: 'Niagara Falls Proximity',
        description:
          'Located just 4 miles from Niagara Falls, offering students access to a world-famous natural wonder and nearby Buffalo’s cultural and entertainment hubs.',
      },
      {
        title: 'Vincentian Tradition',
        description:
          'Rooted in service to the community, all students participate in service-learning programs, fostering a commitment to social good.',
      },
      {
        title: 'Castellani Art Museum',
        description:
          'A unique on-campus museum showcasing contemporary and folk art, enhancing the cultural experience for students.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'BS in Education',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BS in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Shield',
        title: 'BA in Criminology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Globe',
        title: 'BA in International Studies',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Shield',
        title: 'MS in Criminal Justice Administration',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Information Security and Digital Forensics',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'pace',
    universityName: 'Pace University',
    country: 'usa',
    location: 'New York City, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'New York City Campus',
    tagline: 'Opportunitas: Where Opportunity Meets Success',
    stats: ['Est. 1906', 'MSCHE Accredited', 'NYC, Westchester'],
    description:
      'Founded in 1906, Pace University is a private institution with campuses in New York City and Westchester County, offering over 100 undergraduate and graduate programs. Renowned for its experiential learning model, Pace combines rigorous academics with real-world opportunities through internships, research, and industry partnerships in the heart of NYC.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1906' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Locations', value: 'New York City, Westchester' },
      {
        label: 'Focus Areas',
        value: 'Business, Arts, Computer Science, Health Professions',
      },
      { label: 'Student Body', value: '13,479 Students (Fall 2023)' },
    ],
    generalInfo:
      'International students at Pace University must submit academic transcripts, proof of English proficiency, and financial documentation. Pace offers extensive support through its International Student Office, including visa assistance, academic advising, and career services with access to over 8,000 internships in the NYC area.',
    applicationFee: 50,
    financialRequirement: 60000,
    tuitionDeposit: 500,
    processingFee: 100,
    generalRequirements: [
      'Complete the Common Application or Pace Application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school graduation or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '105 or above' },
        { name: 'PTE Academic', score: '54 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'Personal statement (optional)',
        'One letter of recommendation (optional but encouraged)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '88 iBT or higher' },
        { name: 'IELTS', score: '7.0 or higher' },
        { name: 'Duolingo', score: '115 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement',
        'GRE/GMAT scores (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in Pace’s English Language Institute (ELI) to improve their skills before starting degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Academic and cultural support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$53,290',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$30,000 - $40,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$600' },
      { name: 'Student Activity Fee', amount: '$350' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (waivable with proof of coverage)',
      },
      { name: 'International Student Fee', amount: '$300' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$14,000 - $18,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$800 - $1,200' },
      { category: 'Personal Expenses', range: '$2,000 - $3,500' },
    ],
    scholarships: [
      {
        name: 'International Student Scholarship',
        amount: '$5,000 - $15,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, strong academic performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'President’s Scholarship',
        amount: 'Up to $22,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, leadership qualities',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: '$8,000 - $12,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, 24+ transfer credits',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'One Pace Plaza in NYC',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus student center',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities at Pace',
      },
    ],
    campusFeatures: [
      {
        title: 'NYC Location',
        description:
          'Located in Lower Manhattan near Wall Street and the Brooklyn Bridge, offering unparalleled access to internships and cultural experiences.',
      },
      {
        title: 'Experiential Learning',
        description:
          'Over 8,000 internships and co-op opportunities annually, with partnerships at top companies like Google, Deloitte, and NBCUniversal.',
      },
      {
        title: 'Diverse Community',
        description:
          'A vibrant student body with nearly 13,500 students, including 12% international students from over 100 countries.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BBA in Business Analytics',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Palette',
        title: 'BFA in Acting',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Information Systems',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Bank',
        title: 'BS in Business Economics',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Pen',
        title: 'BA in Communications',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MS in Data Science',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MS in Nursing',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'manhattanvillecollege',
    universityName: 'Manhattanville University',
    country: 'usa',
    location: 'Purchase, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Transformative Education for a Global Community',
    stats: ['Est. 1841', 'MSCHE Accredited', '100-Acre Campus'],
    description:
      'Manhattanville University, founded in 1841, is a private liberal arts institution in Purchase, New York, offering a diverse, inclusive education with a focus on social justice and career preparation. Located 30 miles from NYC, it provides access to internships and cultural opportunities, serving students from over 40 countries.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1841' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Purchase, NY' },
      {
        label: 'Focus Areas',
        value: 'Nursing, Business, Education, Arts, Sciences',
      },
      { label: 'Student Body', value: '2,379 Students (2023)' },
    ],
    generalInfo:
      'Manhattanville University welcomes international students from over 40 countries, requiring academic transcripts, English proficiency, and financial documentation. With a 9:1 student-faculty ratio and a commitment to social mobility, the university emphasizes experiential learning and civic engagement.',
    applicationFee: 50,
    financialRequirement: 60000,
    tuitionDeposit: 400,
    processingFee: 0,
    generalRequirements: [
      'Complete the Common Application or Manhattanville Application',
      'Official high school or post-secondary transcripts (translated into English, evaluated by a NACES-approved agency)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '80 or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo English Test', score: '105 or higher' },
        { name: 'PTE Academic', score: '53 or higher' },
      ],
      otherTests: [
        'SAT or ACT (optional, test-optional policy)',
        'Cambridge English (B2 First, C1 Advanced)',
      ],
      additionalRequirements: [
        'One letter of recommendation (optional)',
        'Personal essay (250-650 words, optional but recommended)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '85 or higher' },
        { name: 'IELTS', score: '7.0 or higher' },
        { name: 'Duolingo English Test', score: '110 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement (program-specific)',
        'Official transcripts from all post-secondary institutions',
        'GRE or GMAT (optional for most programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in Manhattanville’s English Language Institute (ELI) for intensive English training before starting their degree program.',
      benefits: [
        'Pathway to degree program',
        'F-1 student visa sponsorship',
        'Support for academic and professional English skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$40,850',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$17,670 - $31,320',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$400' },
      { name: 'Student Activity Fee', amount: '$200' },
      {
        name: 'Health Insurance Fee',
        amount: '$2,000 (mandatory unless waived)',
      },
      { name: 'Orientation Fee (first-year)', amount: '$250' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$9,260 - $11,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$800 - $1,200' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $27,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, strong academic record',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $20,000',
        type: 'Merit-Based',
        eligibility: '2.5+ GPA, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: 'Up to $15,000',
        type: 'Transfer Students',
        eligibility: '2.8+ GPA, 24+ transferable credits',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Reid Castle academic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus library and study areas',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Student residential halls',
      },
    ],
    campusFeatures: [
      {
        title: '100-Acre Suburban Campus',
        description:
          'Located in Purchase, NY, 30 miles from NYC, with historic Reid Castle and modern facilities for a vibrant student experience.',
      },
      {
        title: 'Global Community',
        description:
          'Students from over 40 countries engage in over 30,000 hours of community service annually through the Clark Center.',
      },
      {
        title: 'Experiential Learning',
        description:
          'All undergraduates complete at least one internship or clinical experience, with access to NYC’s professional opportunities.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Running',
        title: 'BA in Sports Studies',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Palette',
        title: 'BFA in Dance',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Brain',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'MEd in Education',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Pen',
        title: 'MFA in Creative Writing',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Running',
        title: 'MS in Sport Business and Entertainment Management',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'maristcollege',
    universityName: 'Marist College',
    country: 'usa',
    location: 'Poughkeepsie, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Excellence in Education, Commitment to Service',
    stats: [
      'Est. 1929',
      'MSCHE Accredited',
      'Poughkeepsie, NY; Florence, Italy',
    ],
    description:
      'Founded in 1929 by the Marist Brothers, Marist College is a private liberal arts institution in Poughkeepsie, NY, offering over 50 undergraduate and graduate programs. With a focus on experiential learning, technology, and global engagement, Marist provides students with opportunities like the Marist Poll, IBM partnerships, and a unique branch campus in Florence, Italy, fostering a vibrant community dedicated to academic excellence and service.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1929' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Locations', value: 'Poughkeepsie, NY; Florence, Italy' },
      {
        label: 'Focus Areas',
        value:
          'Business, Communications, Computer Science, Liberal Arts, Psychology',
      },
      { label: 'Student Body', value: '6,500+ Students' },
    ],
    generalInfo:
      'Marist College uses a test-optional admissions policy and evaluates international applicants based on academic transcripts, English proficiency, and financial documentation. The Office of International Student Services provides support for visa processes, cultural integration, and academic advising.',
    applicationFee: 50,
    financialRequirement: 65000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the Common Application or Marist Application',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT / 550 PBT' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '115 or above' },
        { name: 'PTE Academic', score: '58 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Cambridge English (B2 First, C1 Advanced)',
        'iTEP (4.0 or higher)',
      ],
      additionalRequirements: [
        'Personal Essay (recommended)',
        'One Letter of Recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '88 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '120 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation',
        'Personal Statement',
        'GRE/GMAT (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in Marist’s English Language Services (ELS) pathway program to improve their English skills before beginning their degree program.',
      benefits: [
        'SEVIS I-20 sponsorship available',
        'F-1 student visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$48,800',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$920 - $1,000',
        period: 'per credit hour',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$600' },
      { name: 'Student Activity Fee', amount: '$270' },
      { name: 'Health Service Fee', amount: '$400' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$11,710 - $14,460' },
      { category: 'Meals', range: '$6,000 - $7,500' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $25,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, Academic Excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $15,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Hudson Valley Scholarship',
        amount: 'Up to $10,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, Regional Residents',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships and co-ops related to your field of study, such as business, communications, or data science',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Hudson River campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Marist College library',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities center',
      },
    ],
    campusFeatures: [
      {
        title: 'Hudson River Location',
        description:
          'Situated on a 210-acre campus along the Hudson River, 90 minutes from NYC, offering scenic views and proximity to cultural and professional hubs.',
      },
      {
        title: 'IBM Partnership',
        description:
          'A unique collaboration with IBM provides access to cutting-edge technology, including the IBM LinuxONE III and SmartCloud solutions.',
      },
      {
        title: 'Florence, Italy Campus',
        description:
          'Marist’s branch campus in Florence offers a full four-year bachelor’s degree program, ranked #1 for study abroad by Open Doors Report.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BS in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Microphone',
        title: 'BA in Communication',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Data Science and Analytics',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Palette',
        title: 'BA in Fashion Merchandising',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Information Systems',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'MA in Integrated Marketing Communication',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'nazareth',
    universityName: 'Nazareth University',
    country: 'usa',
    location: 'Rochester, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Pittsford Campus',
    tagline: 'Inspired Learners, Courageous Changemakers',
    stats: ['Est. 1924', 'MSCHE Accredited', 'Rochester, NY'],
    description:
      'Founded in 1924 by the Sisters of St. Joseph, Nazareth University is a private, coeducational institution in Rochester, NY, offering over 60 undergraduate majors and 36 graduate programs. Known for its commitment to experiential learning, civic engagement, and social justice, Nazareth fosters a supportive community on a 150-acre suburban campus.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1924' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Pittsford, Rochester, NY' },
      {
        label: 'Focus Areas',
        value: 'Education, Health Sciences, Arts, Social Work',
      },
      { label: 'Student Body', value: '2,761 Students (Fall 2023)' },
    ],
    generalInfo:
      'International students at Nazareth University must submit academic transcripts, proof of English proficiency, and financial documentation. The university supports international students through its Office of International Education, offering visa assistance, academic advising, and career services, with a focus on experiential learning and community engagement.',
    applicationFee: 45,
    financialRequirement: 55000,
    tuitionDeposit: 500,
    processingFee: 100,
    generalRequirements: [
      'Complete the Common Application or Nazareth Application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school graduation or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '105 or above' },
        { name: 'PTE Academic', score: '53 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'Personal statement',
        'One letter of recommendation',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement',
        'Program-specific requirements (e.g., GRE for some programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in Nazareth’s English Language Institute (ELI) to improve their skills before starting degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Personalized academic and cultural support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$42,450',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$20,000 - $30,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$500' },
      { name: 'Student Activity Fee', amount: '$250' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (waivable with proof of coverage)',
      },
      { name: 'Orientation Fee', amount: '$200 (first-year students)' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$9,000 - $11,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Merit Scholarship',
        amount: '$10,000 - $20,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, strong academic performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'SPARK Grant',
        amount: 'Up to $5,000',
        type: 'Experiential Learning',
        eligibility: 'Research, internship, or study abroad proposal',
        renewable: false,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: '$5,000 - $15,000',
        type: 'Merit-Based',
        eligibility: 'International status, 3.0+ GPA',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Golisano Academic Center',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus arts center',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student life activities',
      },
    ],
    campusFeatures: [
      {
        title: 'Experiential Learning',
        description:
          'Students complete an average of four career experiences, supported by the Center for Life’s Work, including internships, research, and study abroad.',
      },
      {
        title: 'Community Engagement',
        description:
          '95% of students participate in community service, supported by the Weider Community Engagement Office and partnerships with over 100 organizations.',
      },
      {
        title: 'Campus Connectivity',
        description:
          'Climate-controlled underground tunnels connect buildings, ensuring comfort during Rochester’s cold winters.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Brain',
        title: 'BS in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'BS in Education',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Palette',
        title: 'BFA in Musical Theatre',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'People',
        title: 'BSW in Social Work',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'MEd in Education',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'People',
        title: 'MSW in Social Work',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MS in Art Therapy',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'elmiracollege',
    universityName: 'Elmira College',
    country: 'usa',
    location: 'Elmira, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Soar Higher with a Liberal Arts Education',
    stats: ['Est. 1855', 'MSCHE Accredited', '55-Acre Campus'],
    description:
      'Elmira College, founded in 1855, is a private liberal arts college in Elmira, New York. Originally a women’s college offering rigorous academics equivalent to men’s colleges, it became coeducational in 1969. Known for its Center for Mark Twain Studies and a commitment to community service, Elmira provides a personalized education with small class sizes.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1855' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Elmira, NY' },
      {
        label: 'Focus Areas',
        value: 'Nursing, Business, Psychology, Education, Sciences',
      },
      { label: 'Student Body', value: '657 Students (2023)' },
    ],
    generalInfo:
      'Elmira College welcomes international students from over 20 countries, requiring academic transcripts, English proficiency, and financial documentation. With a 9:1 student-faculty ratio and a test-optional admissions policy, the college emphasizes hands-on learning and global engagement.',
    applicationFee: 0,
    financialRequirement: 55000,
    tuitionDeposit: 300,
    processingFee: 0,
    generalRequirements: [
      'Complete the Common Application or Elmira College Application',
      'Official high school or post-secondary transcripts (translated into English, evaluated by a NACES-approved agency)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '70 or higher' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo English Test', score: '100 or higher' },
        { name: 'PTE Academic', score: '50 or higher' },
      ],
      otherTests: [
        'SAT or ACT (optional, test-optional policy)',
        'Cambridge English (B2 First, C1 Advanced)',
      ],
      additionalRequirements: [
        'One letter of recommendation (optional)',
        'Personal essay (250-500 words, optional but recommended)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '80 or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo English Test', score: '105 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement (program-specific)',
        'Official transcripts from all post-secondary institutions',
      ],
    },
    conditionalAdmission: {
      available: false,
      description:
        'Elmira College does not offer conditional admission for English language proficiency. Applicants must meet English proficiency requirements prior to admission.',
      benefits: [],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$37,056',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$16,080',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$600' },
      { name: 'Student Activity Fee', amount: '$200' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (mandatory unless waived)',
      },
      { name: 'Campus Fee', amount: '$1,120' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$7,788 - $9,000' },
      { category: 'Meals', range: '$4,500 - $6,762' },
      { category: 'Books & Supplies', range: '$600 - $1,000' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $22,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, strong academic record',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $15,000',
        type: 'Merit-Based',
        eligibility: '2.5+ GPA, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: 'Up to $12,000',
        type: 'Transfer Students',
        eligibility: '2.8+ GPA, 24+ transferable credits',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Cowles Hall historic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Mark Twain Study',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus quad and student life',
      },
    ],
    campusFeatures: [
      {
        title: '55-Acre Historic Campus',
        description:
          'Located in Elmira, NY, featuring Victorian and Collegiate Gothic architecture, including Cowles Hall and the Mark Twain Study, a National Historic Landmark.',
      },
      {
        title: 'Center for Mark Twain Studies',
        description:
          'Home to the Mark Twain Study and Quarry Farm, attracting global scholars and recognized as one of four major Twain heritage sites.',
      },
      {
        title: 'Vibrant Community',
        description:
          'Over 70 student clubs, 18 NCAA Division III teams, and traditions like Mountain Day foster a close-knit, engaged student body.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BS in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Education',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Microscope',
        title: 'BS in Biochemistry',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'MSEd in Education',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MS in Management',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Emergency',
        title: 'MS in Emergency and Disaster Management',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'hofstrauniversity',
    universityName: 'Hofstra University',
    country: 'usa',
    location: 'Hempstead, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Pride and Purpose',
    stats: ['Est. 1935', 'MSCHE Accredited', 'Hempstead, NY'],
    description:
      'Founded in 1935, Hofstra University is a private institution located in Hempstead, Long Island, just 25 miles from New York City. Offering over 300 academic programs, Hofstra emphasizes experiential learning through internships, research, and study abroad opportunities, preparing students for global careers in a diverse and dynamic community.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1935' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Hempstead, NY' },
      {
        label: 'Focus Areas',
        value:
          'Business, Communication, Engineering, Health Sciences, Liberal Arts',
      },
      { label: 'Student Body', value: '10,500+ Students' },
    ],
    generalInfo:
      'Hofstra University employs a test-optional admissions policy for most programs and requires international students to submit academic transcripts, proof of English proficiency, and financial documentation. The Center for University Advising and International Student Services offers comprehensive support for visa processes and academic success.',
    applicationFee: 70,
    financialRequirement: 70000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the Common Application or Hofstra Application',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT / 550 PBT' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '120 or above' },
        { name: 'PTE Academic', score: '53 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Cambridge English (B2 First, C1 Advanced)',
        'iTEP (3.9 or higher)',
      ],
      additionalRequirements: [
        'Personal Essay',
        'One Letter of Recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '88 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '120 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation',
        'Personal Statement',
        'GRE/GMAT (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in Hofstra’s English Language Program (ELP) to improve their skills, providing a pathway to degree programs upon successful completion.',
      benefits: [
        'SEVIS I-20 sponsorship available',
        'F-1 student visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$55,450 Ascending to $55,450',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$1,500 - $2,000',
        period: 'per credit hour',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$350' },
      { ' dbl': 'Student Activity Fee', amount: '$250' },
      { name: 'Health Service Fee', amount: '$400' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$10,000 - $14,000' },
      { category: 'Meals', range: '$4,500 - $6,500' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $25,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, Academic Excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: 'Up to $15,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Achievement Award',
        amount: 'Up to $12,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, Transfer Students',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships and co-ops related to your field of study, such as business, engineering, or communication',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Hofstra University campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Hofstra University library',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities center',
      },
    ],
    campusFeatures: [
      {
        title: 'Proximity to NYC',
        description:
          'Located just 25 miles from New York City, providing access to internships, cultural events, and professional opportunities in a global hub.',
      },
      {
        title: 'State-of-the-Art Facilities',
        description:
          'Features the Mack Sports and Exhibition Complex, the David S. Mack Student Center, and advanced labs for engineering and health sciences.',
      },
      {
        title: 'Hofstra University Museum of Art',
        description:
          'An on-campus museum offering exhibitions and programs that enhance the cultural and educational experience.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BBA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Microphone',
        title: 'BA in Journalism',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BS in Health Sciences',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Palette',
        title: 'BA in Film Studies and Production',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MS in Physician Assistant Studies',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Computer Science',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'liupost',
    universityName: 'Long Island University - Post',
    country: 'usa',
    location: 'Brookville, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'LIU Post Campus',
    tagline: 'Personalized Education, Limitless Opportunities',
    stats: ['Est. 1954', 'MSCHE Accredited', 'Brookville, NY'],
    description:
      'Founded in 1954, Long Island University - Post is a private institution located on a scenic 330-acre campus in Brookville, New York. Known for its small class sizes and personalized attention, LIU Post offers over 150 undergraduate and graduate programs, emphasizing experiential learning through internships, research, and industry partnerships.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1954' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Brookville, Long Island, NY' },
      {
        label: 'Focus Areas',
        value: 'Business, Education, Health Sciences, Arts',
      },
      { label: 'Student Body', value: '16,322 Students (Fall 2023)' },
    ],
    generalInfo:
      'International students at LIU Post must submit academic transcripts, proof of English proficiency, and financial documentation. The university supports international students through its Office of International Services, offering visa assistance, academic advising, career counseling, and access to internships in nearby New York City.',
    applicationFee: 50,
    financialRequirement: 67000,
    tuitionDeposit: 500,
    processingFee: 100,
    generalRequirements: [
      'Complete the Common Application or LIU Application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school graduation or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '75 iBT or higher' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo', score: '100 or above' },
        { name: 'PTE Academic', score: '50 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'Personal statement',
        'One letter of recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '105 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement',
        'GRE/GMAT scores (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in LIU’s English Language Institute (ELI) to improve their skills before starting degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Academic and cultural support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$41,492',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$22,839 - $33,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$500' },
      { name: 'Student Activity Fee', amount: '$300' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (waivable with proof of coverage)',
      },
      { name: 'International Student Fee', amount: '$250' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$13,000 - $15,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$2,000 - $3,000' },
    ],
    scholarships: [
      {
        name: 'Merit-Based Scholarship',
        amount: '$10,000 - $30,250',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, strong academic performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: '$5,000 - $15,000',
        type: 'Merit-Based',
        eligibility: 'International status, 3.0+ GPA',
        renewable: true,
        popular: true,
      },
      {
        name: 'Program-Specific Scholarship',
        amount: '$2,000 - $10,000',
        type: 'Merit-Based',
        eligibility:
          'Enrollment in specific programs (e.g., Business, Health Professions)',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Tilles Center for the Performing Arts',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'LIU Post campus green',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities at Hillwood Commons',
      },
    ],
    campusFeatures: [
      {
        title: 'Tilles Center for the Performing Arts',
        description:
          'A world-class venue hosting concerts, theater productions, and cultural events, enriching the student experience.',
      },
      {
        title: 'Proximity to NYC',
        description:
          'Located 25 miles from New York City, offering access to internships, networking, and cultural opportunities.',
      },
      {
        title: 'Small Class Sizes',
        description:
          'A 11:1 student-to-faculty ratio ensures personalized attention and strong faculty-student relationships.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BBA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Palette',
        title: 'BFA in Digital Art and Design',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BS in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Education',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Data Analytics',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'MEd in Special Education',
        duration: '1-2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'browardcollege',
    universityName: 'Broward College',
    country: 'usa',
    location: 'Fort Lauderdale, Florida, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName:
      'A. Hugh Adams Central Campus, Judson A. Samuels South Campus, North Campus',
    tagline: 'Transforming Lives Through Academic Excellence',
    stats: ['Est. 1959', 'MSCHE Accredited', '370-Acre Central Campus'],
    description:
      'Broward College, founded in 1959, is a public college in Fort Lauderdale, Florida, within the Florida College System. Serving over 51,000 students, it offers certificates, associate degrees, and select bachelor’s degrees across eight career pathways, emphasizing affordability, flexibility, and career preparation.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1959' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      {
        label: 'Locations',
        value: 'Fort Lauderdale, Davie, Pembroke Pines, Coconut Creek, Online',
      },
      {
        label: 'Focus Areas',
        value:
          'Business, Nursing, Aviation, Information Technology, Liberal Arts',
      },
      { label: 'Student Body', value: '51,000+ Students' },
    ],
    generalInfo:
      'Broward College welcomes international students from over 150 countries, requiring academic transcripts, English proficiency, and financial documentation. With a test-blind admissions policy and flexible learning options (online, hybrid, in-person), it supports diverse learners with a focus on career readiness.',
    applicationFee: 75,
    financialRequirement: 30000,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Complete the Broward College Application',
      'Official high school or post-secondary transcripts (translated into English, evaluated by a NACES-approved agency)',
      'Proof of graduation from all previously attended institutions',
      'Financial Affidavit of Support (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport biographical page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '71 or higher' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo English Test', score: '95 or higher' },
        { name: 'PTE Academic', score: '50 or higher' },
      ],
      otherTests: [
        'Cambridge English (B2 First, C1 Advanced)',
        'ELS Language Centers (Level 109)',
      ],
      additionalRequirements: [
        'International Student Supplemental Application',
        'Financial Affidavit of Support',
      ],
    },
    graduate: {
      englishTests: [],
      additionalRequirements: [],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in the English for Academic Purposes (EAP) program at Levels 3 or 4, allowing them to improve language skills while earning college credit toward a degree.',
      benefits: [
        'Pathway to degree program without reapplying',
        'F-1 student visa sponsorship',
        'Concurrent language and academic coursework',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (In-State)',
        amount: '$3,537',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (Out-of-State/International)',
        amount: '$10,329',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$250' },
      { name: 'Student Activity Fee', amount: '$100' },
      { name: 'Consolidated Service Fee', amount: '$15' },
      { name: 'International Student Fee', amount: '$300' },
    ],
    livingCosts: [
      { category: 'Housing (off-campus)', range: '$9,000 - $12,000' },
      { category: 'Meals', range: '$3,500 - $5,000' },
      { category: 'Books & Supplies', range: '$1,200 - $1,800' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'International Education Scholarship',
        amount: 'Up to $1,000',
        type: 'Merit-Based',
        eligibility: '2.5+ GPA, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Honors Program Scholarship',
        amount: 'Up to $2,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, admission to Honors Program',
        renewable: true,
        popular: true,
      },
      {
        name: 'Seese Scholarship',
        amount: 'Varies',
        type: 'Merit-Based',
        eligibility: '2.0+ GPA, financial need',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate after admission and submission of financial affidavit',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'A. Hugh Adams Central Campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Judson A. Samuels South Campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'North Campus facilities',
      },
    ],
    campusFeatures: [
      {
        title: 'Multiple Campuses',
        description:
          'Three main campuses in Davie, Pembroke Pines, and Coconut Creek, plus centers in Fort Lauderdale and Dania Beach, offering specialized facilities like the Aviation Institute and Buehler Planetarium.',
      },
      {
        title: 'Diverse Community',
        description:
          'Students from 150 countries create a vibrant, inclusive environment, supported by tutoring centers and academic advising.',
      },
      {
        title: 'Career-Focused Facilities',
        description:
          'Includes a joint-use library with Florida Atlantic University, Citrix IT Academy, and Tigertail Lake Recreational Center for aquatic training.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'AA in Liberal Arts and Sciences',
        duration: '2 Years',
        type: "Associate's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'AS in Nursing',
        duration: '2 Years',
        type: "Associate's",
        popular: true,
      },
      {
        icon: 'Plane',
        title: 'AS in Airway Management and Operations',
        duration: '2 Years',
        type: "Associate's",
        popular: false,
      },
      {
        icon: 'Laptop',
        title: 'BAS in Information Technology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BAS in Supervision and Management',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [],
  },
  {
    universitycode: 'sacstate',
    universityName: 'California State University, Sacramento',
    country: 'usa',
    location: 'Sacramento, California, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Leadership Begins Here',
    stats: ['Est. 1947', 'WSCUC Accredited', 'Sacramento, CA'],
    description:
      'Founded in 1947, California State University, Sacramento (Sacramento State) is a public university known for its diverse student body, vibrant campus life, and commitment to academic excellence. As part of the CSU system, it offers over 60 undergraduate and 40 graduate programs, emphasizing hands-on learning, community engagement, and career readiness in California’s capital city.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1947' },
      {
        label: 'Accreditation',
        value: 'WASC Senior College and University Commission (WSCUC)',
      },
      { label: 'Location', value: 'Sacramento, CA' },
      {
        label: 'Focus Areas',
        value:
          'Business, Education, Engineering, Health Sciences, Social Sciences',
      },
      { label: 'Student Body', value: '31,000+ Students' },
    ],
    generalInfo:
      'Sacramento State uses a test-optional admissions policy for most programs and requires international students to submit academic transcripts, proof of English proficiency, and financial documentation. The International Programs and Global Engagement office provides support for visa processes, academic advising, and cultural integration.',
    applicationFee: 70,
    financialRequirement: 35000,
    tuitionDeposit: 250,
    processingFee: 0,
    generalRequirements: [
      'Complete the Cal State Apply Application',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '64 iBT / 500 PBT' },
        { name: 'IELTS', score: '6.0 or higher' },
        { name: 'Duolingo', score: '95 or above' },
        { name: 'PTE Academic', score: '47 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Cambridge English (B2 First, C1 Advanced)',
        'iTEP (3.6 or higher)',
      ],
      additionalRequirements: [
        'Personal Statement (optional)',
        'No Letters of Recommendation required',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '105 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae (program-specific)',
        'Two Letters of Recommendation (program-specific)',
        'Statement of Purpose (program-specific)',
        'GRE/GMAT (program-specific, optional for some)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in Sacramento State’s English Language Institute (ELI) for intensive English instruction, providing a pathway to degree programs upon successful completion.',
      benefits: [
        'SEVIS I-20 sponsorship available',
        'F-1 student visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (In-State)',
        amount: '$7,992',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (Out-of-State/International)',
        amount: '$20,112',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '$16,680 - $18,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$200' },
      { name: 'Student Activity Fee', amount: '$300' },
      { name: 'Health Service Fee', amount: '$350' },
      { name: 'International Student Fee', amount: '$150' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$8,000 - $12,000' },
      { category: 'Meals', range: '$4,500 - $6,000' },
      { category: 'Books & Supplies', range: '$1,000 - $1,500' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'International Merit Scholarship',
        amount: 'Up to $10,000',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Hornet Scholarship',
        amount: 'Up to $5,000',
        type: 'Merit-Based',
        eligibility: '3.3+ GPA, Academic Excellence',
        renewable: true,
        popular: false,
      },
      {
        name: 'Global Ambassador Scholarship',
        amount: 'Up to $7,500',
        type: 'Merit-Based',
        eligibility: '3.0+ GPA, Leadership or Community Involvement',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive your I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Payment',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the online DS-160 application',
      },
      {
        step: 4,
        title: 'Embassy Interview',
        description: 'Schedule and attend your visa interview',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships and co-ops related to your field of study, such as business, engineering, or education',
        timing: 'During studies (after 1 year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          '12-month work authorization after graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Sacramento State campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'University Library',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Student Union',
      },
    ],
    campusFeatures: [
      {
        title: 'Capital City Location',
        description:
          'Located in Sacramento, California’s capital, offering access to government internships, cultural events, and proximity to San Francisco and Lake Tahoe.',
      },
      {
        title: 'Diverse Community',
        description:
          'One of the most diverse campuses in the CSU system, with students from over 90 countries fostering an inclusive environment.',
      },
      {
        title: 'Modern Facilities',
        description:
          'Features the WELL (recreation and wellness center), Hornet Stadium, and advanced labs for engineering and health sciences.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BS in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Shield',
        title: 'BS in Criminal Justice',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Flask',
        title: 'BS in Environmental Studies',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'MA in Education',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MS in Computer Science',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'clarkson',
    universityName: 'Clarkson University',
    country: 'usa',
    location: 'Potsdam, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Potsdam Campus',
    tagline: 'To Think Deeply, To Go Far',
    stats: ['Est. 1896', 'MSCHE Accredited', 'Potsdam, NY'],
    description:
      'Founded in 1896, Clarkson University is a private, national research university in Potsdam, New York, known for its leadership in technological education and sustainable economic development. With over 95 programs in engineering, business, sciences, and health professions, Clarkson emphasizes interdisciplinary research, hands-on learning, and strong industry connections, fostering innovation and entrepreneurship on a 640-acre rural campus.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Research University' },
      { label: 'Established', value: '1896' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Potsdam, NY' },
      {
        label: 'Focus Areas',
        value: 'Engineering, Business, Data Science, Health Sciences',
      },
      { label: 'Student Body', value: '4,800 Students (Fall 2023)' },
    ],
    generalInfo:
      'International students at Clarkson University must submit academic transcripts, proof of English proficiency, and financial documentation. The Office of International Students and Scholars provides visa support, academic advising, and career services, with access to co-ops and internships in nearby New York City and beyond.',
    applicationFee: 50,
    financialRequirement: 81774,
    tuitionDeposit: 500,
    processingFee: 100,
    generalRequirements: [
      'Complete the Common Application or Clarkson Application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school graduation or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '115 or above' },
        { name: 'PTE Academic', score: '56 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'Personal statement',
        'One letter of recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '115 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Three letters of recommendation',
        'Statement of purpose',
        'GRE/GMAT scores (optional for most programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in Clarkson’s English Language Institute (ELI) to improve their skills before starting degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Academic and cultural support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$59,398',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$36,000 - $42,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$500' },
      { name: 'Student Activity Fee', amount: '$350' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (waivable with proof of coverage)',
      },
      { name: 'International Student Fee', amount: '$250' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$9,000 - $11,000' },
      { category: 'Meals', range: '$6,500 - $7,500' },
      { category: 'Books & Supplies', range: '$1,500 - $2,000' },
      { category: 'Personal Expenses', range: '$2,000 - $3,000' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholars Scholarship',
        amount: '$15,000 - $30,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, strong academic performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: '$5,000 - $15,000',
        type: 'Merit-Based',
        eligibility: 'International status, 3.0+ GPA',
        renewable: true,
        popular: true,
      },
      {
        name: 'Honors Program Scholarship',
        amount: 'Up to $10,000',
        type: 'Merit-Based',
        eligibility: 'Admission to Honors Program, 3.7+ GPA',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Cheel Campus Center',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Science Center',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities at Clarkson',
      },
    ],
    campusFeatures: [
      {
        title: 'Research Excellence',
        description:
          'Clarkson is a top-tier research university with state-of-the-art facilities, including the Center for Advanced Materials Processing and the Institute for a Sustainable Environment.',
      },
      {
        title: 'Career Placement',
        description:
          '96% placement rate for bachelor’s graduates, with top employers like Lockheed Martin, IBM, and National Grid.',
      },
      {
        title: 'Adirondack Proximity',
        description:
          'Located near the Adirondack Park, offering outdoor activities like hiking, skiing, and rock climbing.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Gear',
        title: 'BS in Mechanical Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Blueprint',
        title: 'BS in Civil Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Flask',
        title: 'BS in Chemical Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BS in Business Analytics',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MS in Applied Data Science',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Gear',
        title: 'MS in Mechanical Engineering',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '1-2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'adelphiuniversity',
    universityName: 'Adelphi University',
    country: 'usa',
    location: 'Garden City, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Transforming Lives Through Education and Innovation',
    stats: ['Est. 1896', 'MSCHE Accredited', '75-Acre Campus'],
    description:
      'Adelphi University, founded in 1896, is a private university in Garden City, New York, known for its personalized approach to education and strong programs in nursing, business, psychology, and the arts. Located 23 miles from NYC, Adelphi serves a diverse student body with a commitment to academic excellence and community engagement.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Profit' },
      { label: 'Established', value: '1896' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      {
        label: 'Locations',
        value: 'Garden City, Manhattan, Hauppauge, Hudson Valley',
      },
      {
        label: 'Focus Areas',
        value: 'Nursing, Business, Psychology, Education, Arts',
      },
      { label: 'Student Body', value: '7,250 Students (2023)' },
    ],
    generalInfo:
      'Adelphi University welcomes international students from over 60 countries, requiring academic transcripts, English proficiency, and financial documentation. With an 11:1 student-faculty ratio and a 73% acceptance rate, Adelphi offers robust support services, including career development and international student advising.',
    applicationFee: 50,
    financialRequirement: 65000,
    tuitionDeposit: 300,
    processingFee: 0,
    generalRequirements: [
      'Complete the Common Application or Adelphi Application',
      'Official high school or post-secondary transcripts (translated into English, evaluated by a NACES-approved agency)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '80 or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo English Test', score: '110 or higher' },
        { name: 'PTE Academic', score: '55 or higher' },
      ],
      otherTests: [
        'SAT or ACT (optional, test-optional policy)',
        'Cambridge English (B2 First, C1 Advanced)',
      ],
      additionalRequirements: [
        'One letter of recommendation (required)',
        'Personal essay (250-650 words, required)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL iBT', score: '90 or higher' },
        { name: 'IELTS', score: '7.0 or higher' },
        { name: 'Duolingo English Test', score: '120 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two letters of recommendation',
        'Personal statement (program-specific)',
        'Official transcripts from all post-secondary institutions',
        'GRE or GMAT (required for some programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in Adelphi’s English Language Program (ELP) to improve language skills before starting their degree program.',
      benefits: [
        'Pathway to degree program',
        'F-1 student visa sponsorship',
        'Support for academic and professional English skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$47,290',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$25,000 - $50,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$500' },
      { name: 'Student Activity Fee', amount: '$150' },
      {
        name: 'Health Insurance Fee',
        amount: '$2,500 (mandatory unless waived)',
      },
      { name: 'General Fee', amount: '$1,100' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$12,500 - $17,000' },
      { category: 'Meals', range: '$4,500 - $6,500' },
      { category: 'Books & Supplies', range: '$1,000 - $1,400' },
      { category: 'Personal Expenses', range: '$1,500 - $2,500' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholarship',
        amount: 'Up to $18,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, strong academic record',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Scholarship',
        amount: 'Up to $10,000',
        type: 'Merit-Based',
        eligibility: '2.5+ GPA, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Transfer Scholarship',
        amount: 'Up to $12,000',
        type: 'Transfer Students',
        eligibility: '3.0+ GPA, 24+ transferable credits',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description:
          'Receive I-20 certificate after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS I-901 Fee',
        description: 'Pay the SEVIS I-901 fee online at fmjfee.com',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application form online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Schedule and attend an F-1 visa interview at a U.S. Embassy or Consulate',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description:
          'Work authorization for internships or practical training related to your major',
        timing: 'After 1 academic year',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Levermore Hall academic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Swirbul Library',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Campus quad and residence halls',
      },
    ],
    campusFeatures: [
      {
        title: '75-Acre Campus',
        description:
          'Located in Garden City, NY, with historic buildings like Levermore Hall and modern facilities, just 23 miles from NYC for easy access to internships.',
      },
      {
        title: 'Global Community',
        description:
          'Students from over 60 countries, supported by the International Student Services office and over 80 student organizations.',
      },
      {
        title: 'Advanced Facilities',
        description:
          'Includes the Center for Recreation and Sports, nursing simulation labs, and the Performing Arts Center (AUPAC) for cultural events.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'BS in Nursing',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BBA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Palette',
        title: 'BFA in Theatre Arts',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Microscope',
        title: 'BS in Biology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'MS in Nursing',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'MA in Clinical Psychology',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'BookOpen',
        title: 'MEd in Educational Leadership',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'clarkson',
    universityName: 'Clarkson University',
    country: 'usa',
    location: 'Potsdam, New York, USA',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Potsdam Campus',
    tagline: 'To Think Deeply, To Go Far',
    stats: ['Est. 1896', 'MSCHE Accredited', 'Potsdam, NY'],
    description:
      'Founded in 1896, Clarkson University is a private, national research university in Potsdam, New York, known for its leadership in technological education and sustainable economic development. With over 95 programs in engineering, business, sciences, and health professions, Clarkson emphasizes interdisciplinary research, hands-on learning, and strong industry connections, fostering innovation and entrepreneurship on a 640-acre rural campus.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Research University' },
      { label: 'Established', value: '1896' },
      {
        label: 'Accreditation',
        value: 'Middle States Commission on Higher Education (MSCHE)',
      },
      { label: 'Location', value: 'Potsdam, NY' },
      {
        label: 'Focus Areas',
        value: 'Engineering, Business, Data Science, Health Sciences',
      },
      { label: 'Student Body', value: '4,800 Students (Fall 2023)' },
    ],
    generalInfo:
      'International students at Clarkson University must submit academic transcripts, proof of English proficiency, and financial documentation. The Office of International Students and Scholars provides visa support, academic advising, and career services, with access to co-ops and internships in nearby New York City and beyond.',
    applicationFee: 50,
    financialRequirement: 81774,
    tuitionDeposit: 500,
    processingFee: 100,
    generalRequirements: [
      'Complete the Common Application or Clarkson Application',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school graduation or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '115 or above' },
        { name: 'PTE Academic', score: '56 or higher' },
      ],
      otherTests: [
        'ELS Language Centers (Level 112)',
        'Kaplan International (Higher Intermediate)',
        'Cambridge English (B2 First or higher)',
      ],
      additionalRequirements: [
        'Personal statement',
        'One letter of recommendation (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher' },
        { name: 'Duolingo', score: '115 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Three letters of recommendation',
        'Statement of purpose',
        'GRE/GMAT scores (optional for most programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in Clarkson’s English Language Institute (ELI) to improve their skills before starting degree programs.',
      benefits: [
        'I-20 sponsorship for F-1 visa',
        'Pathway to degree programs',
        'Academic and cultural support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '$59,398',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '$36,000 - $42,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '$500' },
      { name: 'Student Activity Fee', amount: '$350' },
      {
        name: 'Health Insurance Fee',
        amount: '$1,800 (waivable with proof of coverage)',
      },
      { name: 'International Student Fee', amount: '$250' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '$9,000 - $11,000' },
      { category: 'Meals', range: '$6,500 - $7,500' },
      { category: 'Books & Supplies', range: '$1,500 - $2,000' },
      { category: 'Personal Expenses', range: '$2,000 - $3,000' },
    ],
    scholarships: [
      {
        name: 'Presidential Scholars Scholarship',
        amount: '$15,000 - $30,000',
        type: 'Merit-Based',
        eligibility: '3.5+ GPA, strong academic performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Student Scholarship',
        amount: '$5,000 - $15,000',
        type: 'Merit-Based',
        eligibility: 'International status, 3.0+ GPA',
        renewable: true,
        popular: true,
      },
      {
        name: 'Honors Program Scholarship',
        amount: 'Up to $10,000',
        type: 'Merit-Based',
        eligibility: 'Admission to Honors Program, 3.7+ GPA',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'I-20 Form',
        description: 'Receive I-20 after admission and deposit payment',
      },
      {
        step: 2,
        title: 'SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
      },
      {
        step: 3,
        title: 'DS-160 Form',
        description: 'Complete the DS-160 visa application online',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description: 'Schedule and attend an interview at a U.S. Embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'CPT (Curricular Practical Training)',
        description: 'Work authorization for internships related to your major',
        timing: 'During studies (after 1 academic year)',
      },
      {
        type: 'OPT (Optional Practical Training)',
        description:
          'Up to 12 months of work authorization post-graduation (36 months for STEM programs)',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Cheel Campus Center',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Science Center',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities at Clarkson',
      },
    ],
    campusFeatures: [
      {
        title: 'Research Excellence',
        description:
          'Clarkson is a top-tier research university with state-of-the-art facilities, including the Center for Advanced Materials Processing and the Institute for a Sustainable Environment.',
      },
      {
        title: 'Career Placement',
        description:
          '96% placement rate for bachelor’s graduates, with top employers like Lockheed Martin, IBM, and National Grid.',
      },
      {
        title: 'Adirondack Proximity',
        description:
          'Located near the Adirondack Park, offering outdoor activities like hiking, skiing, and rock climbing.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Gear',
        title: 'BS in Mechanical Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Blueprint',
        title: 'BS in Civil Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Flask',
        title: 'BS in Chemical Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BS in Computer Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BS in Business Analytics',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MS in Applied Data Science',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Gear',
        title: 'MS in Mechanical Engineering',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MBA in Business Administration',
        duration: '1-2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'norwichuniversityarts',
    universityName: 'Norwich University of the Arts',
    country: 'uk',
    location: 'Norwich, Norfolk, United Kingdom',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'City Centre Campus',
    tagline: 'Creativity That Shapes the Future',
    stats: ['Est. 1845', 'TEF Triple Gold', '13 Unique Buildings'],
    description:
      'Norwich University of the Arts (NUA), founded in 1845 as the Norwich School of Design, is a public specialist arts university in Norwich, UK. Renowned for its project-based, exam-free courses in art, design, media, architecture, and performance, NUA fosters a vibrant creative community with strong industry connections and a triple Gold rating in the Teaching Excellence Framework.',
    overviewData: [
      { label: 'Institution Type', value: 'Public, Specialist' },
      { label: 'Established', value: '1845' },
      { label: 'Accreditation', value: 'UK Quality Assured (QAA)' },
      { label: 'Location', value: 'Norwich, Norfolk, UK' },
      {
        label: 'Focus Areas',
        value: 'Art, Design, Media, Architecture, Performance',
      },
      { label: 'Student Body', value: '2,700+ Students' },
    ],
    generalInfo:
      'NUA welcomes international students from over 50 countries, requiring academic transcripts, English proficiency, and financial documentation. With a 14:1 student-faculty ratio and a focus on hands-on learning, NUA offers extensive career support and industry placements in a vibrant, affordable city 39% cheaper than London.',
    applicationFee: 0,
    financialRequirement: 25000,
    tuitionDeposit: 2000,
    processingFee: 0,
    generalRequirements: [
      'Complete the UCAS Application (undergraduate) or NUA Online Application (postgraduate)',
      'Official high school or post-secondary transcripts (translated into English, evaluated if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
      'Portfolio of creative work (required for most programs)',
      'Audition (for performance-based programs)',
    ],
    undergraduate: {
      englishTests: [
        { name: 'IELTS', score: '6.0 overall (5.5 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '80 or higher (20 minimum in each section)',
        },
        { name: 'PTE Academic', score: '59 or higher' },
        { name: 'Cambridge English', score: 'B2 First or C1 Advanced' },
      ],
      otherTests: [
        'Portfolio review (required for art, design, media programs)',
        'Audition (required for acting, performance programs)',
      ],
      additionalRequirements: [
        'Personal statement (via UCAS, 4,000 characters)',
        'One academic or professional reference',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'IELTS', score: '6.5 overall (6.0 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '88 or higher (22 minimum in each section)',
        },
        { name: 'PTE Academic', score: '65 or higher' },
      ],
      additionalRequirements: [
        'Portfolio of creative work (required for most programs)',
        'Resume or CV',
        'Personal statement (program-specific)',
        'Two academic or professional references',
        'Official transcripts from all post-secondary institutions',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in NUA’s pre-sessional English courses or partner language programs to improve skills before starting their degree.',
      benefits: [
        'Pathway to degree program',
        'Tier 4 (General) student visa sponsorship',
        'Support for academic and creative English skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (UK)',
        amount: '£9,250',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (International)',
        amount: '£18,000 - £22,500',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '£18,000 - £21,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Studio Fee (varies by course)', amount: '£100 - £500' },
      { name: 'Accommodation Application Fee', amount: '£50' },
      { name: 'Materials Fee (art/design programs)', amount: '£200 - £400' },
    ],
    livingCosts: [
      { category: 'Housing (on/off-campus)', range: '£5,000 - £8,000' },
      { category: 'Meals', range: '£2,500 - £4,000' },
      { category: 'Books & Supplies', range: '£500 - £1,000' },
      { category: 'Personal Expenses', range: '£1,500 - £2,500' },
    ],
    scholarships: [
      {
        name: 'NUA International Scholarship',
        amount: 'Up to £6,000',
        type: 'Merit-Based',
        eligibility: 'Strong portfolio, academic excellence',
        renewable: false,
        popular: true,
      },
      {
        name: 'Vice-Chancellor’s Scholarship',
        amount: 'Up to £3,000',
        type: 'Merit-Based',
        eligibility: 'Outstanding creative work, international status',
        renewable: false,
        popular: true,
      },
      {
        name: 'Progression Bursary',
        amount: '£1,000',
        type: 'Merit-Based',
        eligibility: 'NUA foundation/UG students progressing to PG study',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Confirmation of Acceptance for Studies (CAS)',
        description: 'Receive CAS after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'Apply for Tier 4 (General) Visa',
        description:
          'Submit visa application online with CAS and required documents',
      },
      {
        step: 3,
        title: 'Pay Immigration Health Surcharge',
        description: 'Pay the Immigration Health Surcharge for NHS access',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Attend a visa interview at a UK Visa Application Centre if required',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for Tier 4 visa holders',
        timing: 'During studies',
      },
      {
        type: 'Work Placement',
        description:
          'Optional professional diploma placements between years 2 and 3',
        timing: 'During degree',
      },
      {
        type: 'Graduate Route Visa',
        description: 'Up to 2 years of work authorization post-graduation',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Francis House main building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'East Gallery exhibition space',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'St Georges Street creative studios',
      },
    ],
    campusFeatures: [
      {
        title: 'City Centre Campus',
        description:
          'Spread across 13 historic and modern buildings in Norwich’s cultural quarter, featuring specialist workshops and the East Gallery for exhibitions.',
      },
      {
        title: 'Creative Community',
        description:
          'Hosts 2,700+ students from over 50 countries, with a collaborative environment and events like the Norwich Film Festival and Degree Shows.',
      },
      {
        title: 'Industry-Focused Facilities',
        description:
          'Includes digital design suites, 3D workshops, screen printing studios, and immersive technology labs for creative innovation.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Palette',
        title: 'BA (Hons) Fine Art',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Pen',
        title: 'BA (Hons) Graphic Design',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Film',
        title: 'BA (Hons) Animation',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Building',
        title: 'BA (Hons) Architecture',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Users',
        title: 'BA (Hons) Acting',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Pen',
        title: 'MA Communication Design',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Palette',
        title: 'MA Fine Art',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Clothing',
        title: 'MA Fashion',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Film',
        title: 'MA Moving Image and Sound',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'leedstrinity',
    universityName: 'Leeds Trinity University',
    country: 'uk',
    location: 'Horsforth, Leeds, West Yorkshire, UK',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Horsforth Campus',
    tagline: 'Your Future is Our Focus',
    stats: [
      'Est. 1966',
      'Privy Council Accredited',
      'Horsforth, Leeds; Leeds City Campus',
    ],
    description:
      'Founded in 1966, Leeds Trinity University is a public institution in Horsforth, Leeds, with a new Leeds City Campus opened in 2024. Known for its employability-focused education, it embeds professional work placements in every undergraduate degree, boasting a 97% graduate employment or further study rate within 15 months. With a close-knit community and small class sizes, it offers personalized support in a vibrant student city.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1966' },
      { label: 'Accreditation', value: 'Privy Council' },
      { label: 'Locations', value: 'Horsforth, Leeds; Leeds City Campus' },
      {
        label: 'Focus Areas',
        value: 'Business, Education, Journalism, Psychology, Sport',
      },
      { label: 'Student Body', value: '4,985 Students' },
    ],
    generalInfo:
      'Leeds Trinity University uses a test-optional admissions policy for most programs and accepts applications through UCAS for undergraduate courses. International students must submit academic transcripts, proof of English proficiency, and financial documentation. The International Student Support Team assists with visa processes, pre-arrival guidance, and integration activities.',
    applicationFee: 0,
    financialRequirement: 25000,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Complete the UCAS Application for undergraduate courses or direct application for postgraduate',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
      'Personal statement',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '72 iBT' },
        { name: 'IELTS', score: '6.0 or higher (with no component below 5.5)' },
        { name: 'Duolingo', score: '100 or above' },
        { name: 'PTE Academic', score: '51 or higher' },
      ],
      otherTests: [
        'Cambridge English (B2 First, C1 Advanced)',
        'UKVI-approved SELT (Secure English Language Test)',
      ],
      additionalRequirements: [
        'UCAS Tariff Points (typically 96-112 points)',
        'GCSE English and Maths at grade C/4 or above (for some programs)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher (with no component below 6.0)' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation (program-specific)',
        'Personal Statement',
        'Relevant work experience (program-specific)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in a pre-sessional English course or pathway program to improve their skills before starting their degree program at Leeds Trinity University.',
      benefits: [
        'SEVIS I-20 equivalent (UKVI sponsorship) available',
        'Tier 4/Student Route visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (UK Students)',
        amount: '£9,250',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (International Students)',
        amount: '£14,400 - £15,400',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International Students)',
        amount: '£14,000 - £16,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '£0 (included in tuition)' },
      { name: 'Student Activity Fee', amount: '£200' },
      {
        name: 'Health Service Fee',
        amount: '£0 (NHS access for international students)',
      },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '£4,500 - £7,000' },
      { category: 'Meals', range: '£2,000 - £3,500' },
      { category: 'Books & Supplies', range: '£400 - £800' },
      { category: 'Personal Expenses', range: '£1,500 - £2,500' },
    ],
    scholarships: [
      {
        name: 'Vice Chancellor’s International Scholarship',
        amount: 'Up to £3,000',
        type: 'Merit-Based',
        eligibility: 'High academic achievement, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Bursary',
        amount: '£2,000',
        type: 'Merit-Based',
        eligibility: 'International Status, enrolled in full-time program',
        renewable: false,
        popular: true,
      },
      {
        name: 'Alumni Discount',
        amount: 'Up to 50% tuition discount',
        type: 'Merit-Based',
        eligibility: 'Leeds Trinity undergraduate degree with 2:2 or above',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Confirmation of Acceptance for Studies (CAS)',
        description: 'Receive your CAS after admission and deposit payment',
      },
      {
        step: 2,
        title: 'Pay Immigration Health Surcharge',
        description: 'Pay the Immigration Health Surcharge for NHS access',
      },
      {
        step: 3,
        title: 'Apply for Student Visa',
        description: 'Complete the online Student Route visa application',
      },
      {
        step: 4,
        title: 'Attend Visa Appointment',
        description:
          'Schedule and attend a visa application center appointment',
      },
    ],
    workOpportunities: [
      {
        type: 'Professional Work Placements',
        description:
          'Mandatory placements for undergraduate degrees, offering real-world experience in fields like business, education, or media',
        timing: 'During studies',
      },
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week for international students on a Student Route visa, often in retail, hospitality, or campus roles',
        timing: 'During studies',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Horsforth campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Andrew Kean Learning Centre',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Leeds City Campus',
      },
    ],
    campusFeatures: [
      {
        title: 'Dual Campus Experience',
        description:
          'Horsforth’s 40-acre green campus offers a peaceful study environment, while the new Leeds City Campus places students in the heart of Leeds’ vibrant urban scene.',
      },
      {
        title: 'Andrew Kean Learning Centre',
        description:
          'A modern library with 115,000 print volumes, 500,000 e-books, and 24/7 access to support academic success.',
      },
      {
        title: 'Professional Facilities',
        description:
          'Includes a sports science lab, nutrition lab, media center with TV and radio studios, and a 3G all-weather pitch for football and hockey.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'BA (Hons) Primary Education (with QTS)',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BA (Hons) Business and Management',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BSc (Hons) Psychology',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Microphone',
        title: 'BA (Hons) Journalism',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Shield',
        title: 'BA (Hons) Criminology and Policing',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MBA in Management',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Microphone',
        title: 'MA Journalism',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'PGCE Primary Education',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'leedsarts',
    universityName: 'Leeds Arts University',
    country: 'uk',
    location: 'Leeds, West Yorkshire, UK',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Blenheim Walk Campus',
    tagline: 'Where Creative Futures Begin',
    stats: ['Est. 1846', 'QAA Accredited', 'Leeds, UK'],
    description:
      'Founded in 1846, Leeds Arts University is the only specialist arts university in Northern England, located in Leeds, West Yorkshire. With a close-knit community of approximately 2,145 students, it offers a range of creative courses in art, design, media, and performance. Renowned for its industry connections and small class sizes, the university fosters hands-on learning and produces graduates like Henry Moore and Damien Hirst.',
    overviewData: [
      {
        label: 'Institution Type',
        value: 'Public, Specialist Arts University',
      },
      { label: 'Established', value: '1846' },
      {
        label: 'Accreditation',
        value: 'Quality Assurance Agency for Higher Education (QAA)',
      },
      { label: 'Location', value: 'Leeds, West Yorkshire, UK' },
      { label: 'Focus Areas', value: 'Art, Design, Media, Performance' },
      { label: 'Student Body', value: '2,145 Students (2023/24)' },
    ],
    generalInfo:
      'International students at Leeds Arts University must provide academic transcripts, proof of English proficiency, and financial documentation. The university supports students through its International Office, offering visa guidance, academic support, and career services, with access to industry networks and the Blenheim Walk Gallery for exhibitions.',
    applicationFee: 27.5,
    financialRequirement: 30000,
    tuitionDeposit: 4000,
    processingFee: 100,
    generalRequirements: [
      'Complete the UCAS application for undergraduates or direct application for postgraduates',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Portfolio of creative work or audition (program-specific)',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.0 or higher (minimum 5.5 in each component)',
        },
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'PTE Academic', score: '55 or higher' },
        { name: 'Cambridge English', score: 'B2 First or higher' },
      ],
      otherTests: [
        'LanguageCert International ESOL B2 Communicator (minimum pass)',
        'Trinity College London ISE II (pass in all components)',
      ],
      additionalRequirements: [
        'Portfolio showcasing creative work',
        'Personal statement',
      ],
    },
    graduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.5 or higher (minimum 6.0 in each component)',
        },
        { name: 'TOEFL', score: '87 iBT or higher' },
        { name: 'PTE Academic', score: '60 or higher' },
      ],
      additionalRequirements: [
        'Portfolio or audition (program-specific)',
        'Resume or CV',
        'Personal statement',
        'Two references',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in pre-sessional English courses offered by the university to improve their skills before starting degree programs.',
      benefits: [
        'Tier 4/Student visa sponsorship',
        'Pathway to degree programs',
        'Tailored language and academic support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (UK)',
        amount: '£9,250',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (International)',
        amount: '£18,500',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '£17,500 - £18,500',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Studio Fee (program-specific)', amount: '£100 - £300' },
      { name: 'Student Union Fee', amount: '£20' },
      { name: 'International Orientation Fee', amount: '£150' },
    ],
    livingCosts: [
      { category: 'Housing (halls)', range: '£5,500 - £8,500' },
      { category: 'Meals', range: '£2,000 - £3,000' },
      { category: 'Books & Supplies', range: '£500 - £1,000' },
      { category: 'Personal Expenses', range: '£1,500 - £2,500' },
    ],
    scholarships: [
      {
        name: 'Vice-Chancellor’s International Scholarship',
        amount: '£3,000 - £5,000',
        type: 'Merit-Based',
        eligibility:
          'International status, strong portfolio and academic record',
        renewable: true,
        popular: true,
      },
      {
        name: 'Creative Excellence Scholarship',
        amount: '£1,000 - £3,000',
        type: 'Merit-Based',
        eligibility: 'Outstanding portfolio or audition',
        renewable: false,
        popular: true,
      },
      {
        name: 'Progression Scholarship',
        amount: '£1,500',
        type: 'Merit-Based',
        eligibility: 'Foundation Diploma students progressing to undergraduate',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Confirmation of Acceptance for Studies (CAS)',
        description: 'Receive CAS after admission and deposit payment',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit online application via UK Visas and Immigration (UKVI)',
      },
      {
        step: 3,
        title: 'Biometrics and Documentation',
        description:
          'Provide biometrics and supporting documents at a visa application center',
      },
      {
        step: 4,
        title: 'Visa Interview (if required)',
        description: 'Attend an interview at a UKVI center if requested',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for Student visa holders',
        timing: 'During studies',
      },
      {
        type: 'Graduate Route Visa',
        description: 'Up to 2 years of work in the UK post-graduation',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Blenheim Walk Campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Vernon Street studios',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Blenheim Walk Gallery exhibition',
      },
    ],
    campusFeatures: [
      {
        title: 'Industry Connections',
        description:
          'Collaborations with creatives and organizations like the BBC, Channel 4, and Yorkshire Sculpture Park provide networking and real-world experience.',
      },
      {
        title: 'Award-Winning Facilities',
        description:
          'State-of-the-art studios, 3D workshops, and the Blenheim Walk Gallery, recognized by WhatUni Student Choice Awards for Best Facilities.',
      },
      {
        title: 'Close-Knit Community',
        description:
          'Small class sizes and a 91% student satisfaction rate foster a supportive environment for creative growth.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Palette',
        title: 'BA (Hons) Fine Art',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Pen',
        title: 'BA (Hons) Graphic Design',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Camera',
        title: 'BA (Hons) Photography',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Scissors',
        title: 'BA (Hons) Fashion Design',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Film',
        title: 'BA (Hons) Filmmaking',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Palette',
        title: 'MA Fine Art',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Pen',
        title: 'MA Graphic Design',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Camera',
        title: 'MA Photography',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'keeleuniversity',
    universityName: 'Keele University',
    country: 'uk',
    location: 'Keele, Staffordshire, United Kingdom',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'The Pursuit of Truth in the Company of Friends',
    stats: ['Est. 1949', 'TEF Gold 2023', '600-Acre Campus'],
    description:
      'Keele University, founded in 1949, is a public research university in Keele, Staffordshire, UK. Renowned for its pioneering dual honours degrees and interdisciplinary approach, Keele occupies a 600-acre rural campus, the largest in the UK, and excels in teaching and research, earning a TEF Gold rating in 2023. With a global community from over 120 countries, it offers a vibrant student experience and strong employability focus.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1949' },
      { label: 'Accreditation', value: 'UK Quality Assured (QAA)' },
      { label: 'Location', value: 'Keele, Staffordshire, UK' },
      {
        label: 'Focus Areas',
        value: 'Medicine, Business, Computer Science, Psychology, Sciences',
      },
      { label: 'Student Body', value: '12,500+ Students' },
    ],
    generalInfo:
      'Keele University welcomes international students from over 120 countries, requiring academic transcripts, English proficiency, and financial documentation. With a 14:1 student-faculty ratio and a 50-80% acceptance rate, Keele offers a supportive environment, a dedicated International Student Support Team, and a strong focus on employability with 95% graduate employment within six months.',
    applicationFee: 0,
    financialRequirement: 25000,
    tuitionDeposit: 2000,
    processingFee: 0,
    generalRequirements: [
      'Complete the UCAS Application (undergraduate) or Keele Online Application (postgraduate)',
      'Official high school or post-secondary transcripts (translated into English, evaluated if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'IELTS', score: '6.0 overall (5.5 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '79 or higher (17 minimum in each section)',
        },
        { name: 'PTE Academic', score: '59 or higher' },
        { name: 'Cambridge English', score: 'B2 First or C1 Advanced' },
      ],
      otherTests: [
        'A-Levels, IB, or equivalent qualifications',
        'Portfolio (for specific programs like art or media)',
      ],
      additionalRequirements: [
        'Personal statement (via UCAS, 4,000 characters)',
        'One academic or professional reference',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'IELTS', score: '6.5 overall (6.0 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '87 or higher (20 minimum in each section)',
        },
        { name: 'PTE Academic', score: '65 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Personal statement (program-specific)',
        'Two academic or professional references',
        'Official transcripts from all post-secondary institutions',
        'Portfolio (for specific programs like art or media)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in Keele’s pre-sessional English courses to improve language skills before starting their degree program.',
      benefits: [
        'Pathway to degree program',
        'Student visa sponsorship',
        'Support for academic and professional English skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (UK)',
        amount: '£9,250',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (International)',
        amount: '£14,700 - £25,200',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '£17,700 - £28,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Accommodation Application Fee', amount: '£50' },
      { name: 'General Service Fee', amount: '£100 - £200' },
      { name: 'Program-Specific Fees (e.g., lab fees)', amount: '£100 - £500' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '£5,000 - £7,500' },
      { category: 'Meals', range: '£2,500 - £4,000' },
      { category: 'Books & Supplies', range: '£400 - £800' },
      { category: 'Personal Expenses', range: '£1,500 - £2,500' },
    ],
    scholarships: [
      {
        name: 'Keele International Excellence Scholarship',
        amount: 'Up to £5,000',
        type: 'Merit-Based',
        eligibility: 'Strong academic record, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'GREAT Scholarship',
        amount: '£10,000',
        type: 'Merit-Based',
        eligibility: 'Citizens of eligible countries, postgraduate study',
        renewable: false,
        popular: true,
      },
      {
        name: 'Developing Countries Scholarship',
        amount: '£1,000',
        type: 'Merit-Based',
        eligibility:
          'Citizens of developing countries, undergraduate or postgraduate',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Confirmation of Acceptance for Studies (CAS)',
        description: 'Receive CAS after admission and tuition deposit payment',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit visa application online with CAS and required documents',
      },
      {
        step: 3,
        title: 'Pay Immigration Health Surcharge',
        description: 'Pay the Immigration Health Surcharge for NHS access',
      },
      {
        step: 4,
        title: 'Visa Interview',
        description:
          'Attend a visa interview at a UK Visa Application Centre if required',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for Student visa holders',
        timing: 'During studies',
      },
      {
        type: 'Work Placement',
        description:
          'Optional placements or internships integrated into many degree programs',
        timing: 'During degree',
      },
      {
        type: 'Graduate Route Visa',
        description: 'Up to 2 years of work authorization post-graduation',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Keele Hall historic building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Central Science Laboratories',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Union Square student hub',
      },
    ],
    campusFeatures: [
      {
        title: '600-Acre Rural Campus',
        description:
          'Located in Staffordshire, featuring Keele Hall, extensive woods, lakes, and modern facilities like the Central Science Laboratories and Smart Innovation Hub.',
      },
      {
        title: 'Global Community',
        description:
          'Students from over 120 countries, with over 80 partner universities for study abroad and a network of 100,000 alumni in 162 countries.',
      },
      {
        title: 'Sustainability Leader',
        description:
          'Named Global Sustainability Institution of the Year (2021), with 12,500 solar panels and wind turbines, aiming for carbon neutrality by 2030.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'HeartPulse',
        title: 'MBChB Medicine',
        duration: '5 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BSc (Hons) Computer Science',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BSc (Hons) Psychology',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BA (Hons) Business Management',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Microscope',
        title: 'BSc (Hons) Biology',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MSc International Business',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Scale',
        title: 'LLM Law',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MSc Advanced Clinical Practice',
        duration: '3 Years',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Laptop',
        title: 'MSc Computer Science',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'falmouthuniversity',
    universityName: 'Falmouth University',
    country: 'uk',
    location: 'Falmouth, Cornwall, UK',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Falmouth Campus & Penryn Campus',
    tagline: 'Creativity Thrives Here',
    stats: [
      'Est. 1902',
      'Privy Council Accredited',
      'Falmouth & Penryn, Cornwall',
    ],
    description:
      'Founded in 1902 as Falmouth School of Art, Falmouth University is a public institution specializing in creative arts, design, media, and performance. Located in Cornwall, it offers over 40 undergraduate and postgraduate programs with a focus on industry-aligned education, professional facilities, and real-world experience. With a 94% graduate employment rate within six months, Falmouth fosters innovation and entrepreneurship in a vibrant coastal setting.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1902' },
      { label: 'Accreditation', value: 'Privy Council' },
      { label: 'Locations', value: 'Falmouth & Penryn, Cornwall' },
      { label: 'Focus Areas', value: 'Art, Design, Media, Performance, Games' },
      { label: 'Student Body', value: '7,380 Students' },
    ],
    generalInfo:
      'Falmouth University uses a test-optional admissions policy and accepts undergraduate applications through UCAS. International students must submit academic transcripts, proof of English proficiency, and financial documentation. The International Office provides support for visa processes, accommodation, and cultural integration, with services like a Heathrow pickup at term start.',
    applicationFee: 0,
    financialRequirement: 28000,
    tuitionDeposit: 250,
    processingFee: 0,
    generalRequirements: [
      'Complete the UCAS Application for undergraduate courses or direct application for postgraduate',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
      'Personal statement',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT' },
        { name: 'IELTS', score: '6.0 or higher (with no component below 5.5)' },
        { name: 'Duolingo', score: '100 or above' },
        { name: 'PTE Academic', score: '55 or higher' },
      ],
      otherTests: [
        'Cambridge English (B2 First, C1 Advanced)',
        'UKVI-approved SELT (Secure English Language Test)',
      ],
      additionalRequirements: [
        'UCAS Tariff Points (typically 104-120 points)',
        'Portfolio or audition (program-specific)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '88 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher (with no component below 6.0)' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation (program-specific)',
        'Personal Statement',
        'Portfolio or relevant work experience (program-specific)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in Falmouth’s pre-sessional English courses or pathway programs to improve their skills before starting their degree program.',
      benefits: [
        'UKVI sponsorship available',
        'Student Route visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (UK Students)',
        amount: '£9,250',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (International Students)',
        amount: '£17,950 - £18,950',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International Students)',
        amount: '£15,750 - £17,460',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '£0 (included in tuition)' },
      { name: 'Student Activity Fee', amount: '£150' },
      {
        name: 'Health Service Fee',
        amount: '£0 (NHS access for international students)',
      },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: '£5,460 - £9,828' },
      { category: 'Meals', range: '£2,000 - £3,500' },
      { category: 'Books & Supplies', range: '£400 - £800' },
      { category: 'Personal Expenses', range: '£1,500 - £2,500' },
    ],
    scholarships: [
      {
        name: 'International Talent Scholarship',
        amount: '£10,000',
        type: 'Merit-Based',
        eligibility: 'High academic achievement, International Status',
        renewable: false,
        popular: true,
      },
      {
        name: 'Vice-Chancellor’s Excellence Scholarship',
        amount: 'Up to £5,000',
        type: 'Merit-Based',
        eligibility: 'Outstanding academic or creative portfolio',
        renewable: false,
        popular: true,
      },
      {
        name: 'Cornwall Merit Award',
        amount: 'Up to £2,000',
        type: 'Merit-Based',
        eligibility: 'Strong academic performance, regional connection',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Confirmation of Acceptance for Studies (CAS)',
        description: 'Receive your CAS after admission and deposit payment',
      },
      {
        step: 2,
        title: 'Pay Immigration Health Surcharge',
        description: 'Pay the Immigration Health Surcharge for NHS access',
      },
      {
        step: 3,
        title: 'Apply for Student Visa',
        description: 'Complete the online Student Route visa application',
      },
      {
        step: 4,
        title: 'Attend Visa Appointment',
        description:
          'Schedule and attend a visa application center appointment',
      },
    ],
    workOpportunities: [
      {
        type: 'Professional Placements',
        description:
          'Work placements integrated into many courses, offering real-world experience in fields like games, design, or media',
        timing: 'During studies',
      },
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week for international students on a Student Route visa, often in local retail, hospitality, or creative industries',
        timing: 'During studies',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Falmouth Campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Penryn Campus library',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Games Academy studio',
      },
    ],
    campusFeatures: [
      {
        title: 'Coastal Cornwall Location',
        description:
          'Located in Falmouth and Penryn, with access to beaches, cultural hubs, and a vibrant creative community, just minutes from the sea.',
      },
      {
        title: 'Games Academy',
        description:
          'Ranked #1 for Games Design in England (Princeton Review, 2025), offering one of the UK’s largest dedicated game development studios with industry-standard tools.',
      },
      {
        title: 'Industry-Standard Facilities',
        description:
          'Includes motion capture studios, 3D printers, VR systems, and a CILECT-accredited School of Film & Television for professional training.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Palette',
        title: 'BA (Hons) Fine Art',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BA (Hons) Game Development',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Microphone',
        title: 'BA (Hons) Film and Television',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Flask',
        title: 'BA (Hons) Photography',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BA (Hons) Business and Entrepreneurship',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Microphone',
        title: 'MA Film and Television',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MA Game Design',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Palette',
        title: 'MA Illustration',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'edgehill',
    universityName: 'Edge Hill University',
    country: 'uk',
    location: 'Ormskirk, Lancashire, UK',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Ormskirk Campus',
    tagline: 'Inspiring Minds, Changing Futures',
    stats: ['Est. 1885', 'TEF Gold', 'Ormskirk, UK'],
    description:
      "Founded in 1885 as the first non-denominational teacher training college for women, Edge Hill University is a public university in Ormskirk, Lancashire. With a 160-acre campus, it offers over 250 undergraduate and postgraduate programs across three faculties: Arts and Sciences, Education, and Health, Social Care and Medicine. Known for its Ofsted 'Outstanding' teacher training and high graduate employability (96.6% within 15 months), Edge Hill combines cutting-edge facilities with a supportive, inclusive community.",
    overviewData: [
      { label: 'Institution Type', value: 'Public University' },
      { label: 'Established', value: '1885' },
      {
        label: 'Accreditation',
        value: 'Teaching Excellence Framework (TEF) Gold',
      },
      { label: 'Location', value: 'Ormskirk, Lancashire, UK' },
      {
        label: 'Focus Areas',
        value: 'Education, Health, Business, Creative Arts',
      },
      { label: 'Student Body', value: '14,505 Students (2023/24)' },
    ],
    generalInfo:
      'International students at Edge Hill University must submit academic transcripts, proof of English proficiency, and financial documentation. The International Office provides visa support, accommodation assistance, and career guidance, with access to industry connections and the Student Opportunity Fund for career-enhancing projects.',
    applicationFee: 27.5,
    financialRequirement: 30000,
    tuitionDeposit: 3000,
    processingFee: 100,
    generalRequirements: [
      'Complete the UCAS application for undergraduates or direct application for postgraduates',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school completion or equivalent',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.0 or higher (minimum 5.5 in each component)',
        },
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'PTE Academic', score: '59 or higher' },
        { name: 'Cambridge English', score: 'B2 First or higher' },
      ],
      otherTests: [
        'LanguageCert International ESOL B2 Communicator (minimum pass)',
        'Trinity College London ISE II (pass in all components)',
      ],
      additionalRequirements: ['Personal statement', 'One academic reference'],
    },
    graduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.5 or higher (minimum 6.0 in each component)',
        },
        { name: 'TOEFL', score: '90 iBT or higher' },
        { name: 'PTE Academic', score: '65 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two academic references',
        'Personal statement',
        'Research proposal (for MRes/PhD programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in pre-sessional English courses offered by the university to improve their skills before starting degree programs.',
      benefits: [
        'Student visa sponsorship',
        'Pathway to degree programs',
        'Tailored academic and language support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (UK)',
        amount: '£9,535',
        period: 'per year',
      },
      {
        category: 'Undergraduate Tuition (International)',
        amount: '£16,500',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '£15,500 - £16,500',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '£100' },
      { name: 'Student Union Fee', amount: '£20' },
      { name: 'International Orientation Fee', amount: '£150' },
    ],
    livingCosts: [
      { category: 'Housing (halls)', range: '£5,500 - £8,500' },
      { category: 'Meals', range: '£2,000 - £3,000' },
      { category: 'Books & Supplies', range: '£500 - £1,000' },
      { category: 'Personal Expenses', range: '£1,500 - £2,500' },
    ],
    scholarships: [
      {
        name: 'International Excellence Scholarship',
        amount: '£3,000 - £5,000',
        type: 'Merit-Based',
        eligibility: 'International status, strong academic record',
        renewable: true,
        popular: true,
      },
      {
        name: 'Student Opportunity Fund',
        amount: 'Up to £2,000',
        type: 'Project-Based',
        eligibility: 'Career-enhancing project proposal',
        renewable: false,
        popular: true,
      },
      {
        name: 'Postgraduate Progression Award',
        amount: '£600',
        type: 'Merit-Based',
        eligibility:
          'Edge Hill undergraduate progressing to postgraduate study',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Confirmation of Acceptance for Studies (CAS)',
        description: 'Receive CAS after admission and deposit payment',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit online application via UK Visas and Immigration (UKVI)',
      },
      {
        step: 3,
        title: 'Biometrics and Documentation',
        description:
          'Provide biometrics and supporting documents at a visa application center',
      },
      {
        step: 4,
        title: 'Visa Interview (if required)',
        description: 'Attend an interview at a UKVI center if requested',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for Student visa holders',
        timing: 'During studies',
      },
      {
        type: 'Graduate Route Visa',
        description: 'Up to 2 years of work in the UK post-graduation',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Ormskirk Campus Lake',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Catalyst Building',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student life events',
      },
    ],
    campusFeatures: [
      {
        title: 'Award-Winning Facilities',
        description:
          'Top 3 in the UK for facilities (Whatuni Student Choice Awards 2023), including a 4k CAVE virtual environment, clinical simulation centers, and a pro-bono Law Clinic.',
      },
      {
        title: 'High Employability',
        description:
          '96.6% of graduates employed or in further study within 15 months (Graduate Outcomes 2024), with industry links to Google, Bentley, and more.',
      },
      {
        title: 'Green Campus',
        description:
          '13 consecutive Green Flag Awards for its 160-acre campus, featuring lakes, rooftop gardens, and a beach.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'BA (Hons) Education',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BSc (Hons) Nursing',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Scale',
        title: 'LLB (Hons) Law',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Pen',
        title: 'BA (Hons) Creative Writing',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Laptop',
        title: 'BSc (Hons) Computer Science',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'BookOpen',
        title: 'MA Education',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MSc Mental Health Nursing',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MBA Business Administration',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'skovdeuniversity',
    universityName: 'University of Skövde',
    country: 'sweden',
    location: 'Skövde, Västra Götaland, Sweden',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus',
    tagline: 'Digitalisation for Sustainable Development',
    stats: ['Est. 1977', 'QAA Accredited', 'Urban Campus'],
    description:
      'The University of Skövde, founded in 1977 and granted university status in 1983, is a public university in Skövde, Sweden. Known for its focus on digitalisation and sustainability, it offers specialised programs in game development, bioinformatics, and health sciences. With a modern campus and strong industry ties through initiatives like Sweden Game Arena, it fosters innovation and employability for its 9,000 students.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1977' },
      { label: 'Accreditation', value: 'UK Quality Assured (QAA)' },
      { label: 'Location', value: 'Skövde, Västra Götaland, Sweden' },
      {
        label: 'Focus Areas',
        value: 'Game Development, Informatics, Bioscience, Business, Health',
      },
      { label: 'Student Body', value: '9,000 Students (4,000 FTE)' },
    ],
    generalInfo:
      'The University of Skövde welcomes international students from over 50 countries, requiring academic transcripts, English proficiency, and financial documentation. With a 14:1 student-faculty ratio and a focus on employability, it collaborates with industry leaders like Volvo and Microsoft. Skövde was named Sweden’s Student City of the Year in 2025 by the Swedish National Union of Students.',
    applicationFee: 900,
    financialRequirement: 25000,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Complete the application via UniversityAdmissions.se',
      'Official high school or post-secondary transcripts (translated into English, evaluated if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'IELTS', score: '6.5 overall (5.5 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '90 or higher (20 minimum in each section)',
        },
        { name: 'PTE Academic', score: '62 or higher' },
        { name: 'Cambridge English', score: 'C1 Advanced or C2 Proficiency' },
      ],
      otherTests: [
        'Swedish upper secondary equivalent (Mathematics 1a, 1b, or 1c)',
      ],
      additionalRequirements: [
        'Personal statement (program-specific, if required)',
        'One academic or professional reference (program-specific)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'IELTS', score: '6.5 overall (5.5 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '90 or higher (20 minimum in each section)',
        },
        { name: 'PTE Academic', score: '62 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Personal statement (program-specific)',
        'Two academic or professional references',
        'Official transcripts from all post-secondary institutions',
        'Bachelor’s degree equivalent to a Swedish kandidatexamen',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in pre-sessional English courses offered by partner institutions to prepare for degree programs.',
      benefits: [
        'Pathway to degree program',
        'Student visa sponsorship',
        'Support for academic English skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: 'SEK 130,000 - 150,000',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: 'SEK 120,000 - 150,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Student Union Fee', amount: 'SEK 300' },
      {
        name: 'Program-Specific Fees (e.g., lab fees)',
        amount: 'SEK 500 - 1,000',
      },
    ],
    livingCosts: [
      { category: 'Housing (on/off-campus)', range: 'SEK 40,000 - 60,000' },
      { category: 'Meals', range: 'SEK 25,000 - 40,000' },
      { category: 'Books & Supplies', range: 'SEK 5,000 - 10,000' },
      { category: 'Personal Expenses', range: 'SEK 15,000 - 25,000' },
    ],
    scholarships: [
      {
        name: 'University of Skövde Master’s Scholarship',
        amount: '50% tuition fee waiver',
        type: 'Merit-Based',
        eligibility: 'Non-EU/EEA citizens, first-priority application',
        renewable: false,
        popular: true,
      },
      {
        name: 'Swedish Institute Scholarship (SISGP)',
        amount: 'Full tuition and living costs',
        type: 'Merit-Based',
        eligibility: 'Non-EU/EEA citizens, master’s program',
        renewable: true,
        popular: true,
      },
      {
        name: 'Erasmus+ Scholarship',
        amount: 'Varies',
        type: 'Exchange-Based',
        eligibility: 'Students from partner institutions',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Admission Offer',
        description: 'Receive an admission offer from UniversityAdmissions.se',
      },
      {
        step: 2,
        title: 'Apply for Residence Permit',
        description:
          'Submit residence permit application online via the Swedish Migration Agency',
      },
      {
        step: 3,
        title: 'Pay Tuition Fee (if applicable)',
        description:
          'Pay the first tuition fee installment to confirm enrollment',
      },
      {
        step: 4,
        title: 'Visa Decision',
        description: 'Await residence permit decision and prepare for travel',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for non-EU/EEA students',
        timing: 'During studies',
      },
      {
        type: 'Work Placement',
        description:
          'Internships or projects integrated into programs, often with industry partners',
        timing: 'During degree',
      },
      {
        type: 'Post-Study Work',
        description: 'Up to 12 months to seek employment after graduation',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Main campus lecture halls',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Gothia Science Park',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Student Union and campus green',
      },
    ],
    campusFeatures: [
      {
        title: 'Modern Urban Campus',
        description:
          'Located in central Skövde, housed in former Göta Logistic Corps barracks, with Gothia Science Park, modern labs, and a university restaurant.',
      },
      {
        title: 'Game Development Hub',
        description:
          'Home to Sweden Game Arena, fostering innovation in computer game development with industry partnerships.',
      },
      {
        title: 'Student-Centric Community',
        description:
          'Named Student City of the Year 2025, with over 100 student clubs, career fairs like Framtid, and proximity to Gothenburg and Stockholm.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Gamepad',
        title: 'BSc Game Development',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BSc Nursing',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BSc Business Administration',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MSc Informatics',
        duration: '1-2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Microscope',
        title: 'MSc Bioinformatics',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'MSc Cognitive Neuroscience',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Microchip',
        title: 'MSc Data Science',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'universitywest',
    universityName: 'University West (Högskolan Väst)',
    country: 'sweden',
    location: 'Trollhättan, Västra Götaland, Sweden',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Trollhättan Campus',
    tagline: 'Work Integrated Learning for a Sustainable Future',
    stats: ['Est. 1990', 'Privy Council Accredited', 'Trollhättan, Sweden'],
    description:
      'Founded in 1990, University West (Högskolan Väst) is a public university college in Trollhättan, Sweden, known for its pioneering approach to Work Integrated Learning (WIL). Offering over 40 programs, it collaborates closely with industry to provide practical, career-focused education. With a modern campus and a diverse community, it supports over 13,000 students in fields like IT, engineering, and social sciences, fostering innovation and societal impact.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1990' },
      { label: 'Accreditation', value: 'Privy Council' },
      { label: 'Location', value: 'Trollhättan, Sweden' },
      {
        label: 'Focus Areas',
        value: 'IT, Engineering, Business, Education, Health Studies',
      },
      { label: 'Student Body', value: '13,000+ Students' },
    ],
    generalInfo:
      'University West uses a selective admissions policy based on academic records and grades, with applications processed through University Admissions in Sweden. International students must submit transcripts, proof of English proficiency, and financial documentation. The International Office offers support for visa processes, orientation, and integration activities, including a weekly activity plan for international students.',
    applicationFee: 900,
    financialRequirement: 25000,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Apply through University Admissions in Sweden (universityadmissions.se)',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '90 iBT (20 in writing)' },
        { name: 'IELTS', score: '6.5 or higher (no section below 5.5)' },
        { name: 'PTE Academic', score: '62 or higher (writing 61)' },
      ],
      otherTests: [
        'Cambridge English (C1 Advanced, C2 Proficiency)',
        'Swedish Upper Secondary School English 6/B',
      ],
      additionalRequirements: [
        'Specific program entry requirements (e.g., Mathematics for engineering)',
        'Personal Statement (program-specific)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '90 iBT or higher (20 in writing)' },
        { name: 'IELTS', score: '6.5 or higher (no section below 5.5)' },
        { name: 'PTE Academic', score: '62 or higher (writing 61)' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation (program-specific)',
        'Statement of Purpose',
        'Relevant work experience (program-specific)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in pre-sessional English courses or pathway programs offered by partner institutions to prepare for degree programs at University West.',
      benefits: [
        'UKVI-equivalent sponsorship available',
        'Student Route visa sponsorship',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International Students)',
        amount: 'kr135,000',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International Students)',
        amount: 'kr130,000 - kr145,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: 'kr0 (included in tuition)' },
      { name: 'Student Union Fee', amount: 'kr300' },
      {
        name: 'Health Service Fee',
        amount: 'kr0 (NHS access for international students)',
      },
    ],
    livingCosts: [
      { category: 'Housing (off-campus)', range: 'kr48,000 - kr72,000' },
      { category: 'Meals', range: 'kr24,000 - kr36,000' },
      { category: 'Books & Supplies', range: 'kr8,000 - kr12,000' },
      { category: 'Personal Expenses', range: 'kr18,000 - kr30,000' },
    ],
    scholarships: [
      {
        name: 'University West Scholarship',
        amount: 'Up to 100% tuition fee reduction',
        type: 'Merit-Based',
        eligibility: 'High academic achievement, International Status',
        renewable: false,
        popular: true,
      },
      {
        name: 'Swedish Institute Scholarship',
        amount: 'Full tuition + living stipend',
        type: 'Merit-Based',
        eligibility: 'Citizens of eligible countries, academic excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'WIL Excellence Award',
        amount: 'kr25,000',
        type: 'Merit-Based',
        eligibility:
          'Outstanding performance in Work Integrated Learning projects',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Confirmation of Acceptance for Studies (CAS)',
        description:
          'Receive your CAS after admission and payment confirmation',
      },
      {
        step: 2,
        title: 'Pay Immigration Health Surcharge',
        description: 'Pay the Immigration Health Surcharge for NHS access',
      },
      {
        step: 3,
        title: 'Apply for Student Visa',
        description: 'Complete the online Student Route visa application',
      },
      {
        step: 4,
        title: 'Attend Visa Appointment',
        description:
          'Schedule and attend a visa application center appointment',
      },
    ],
    workOpportunities: [
      {
        type: 'Work Integrated Learning (WIL)',
        description:
          'Mandatory work placements integrated into programs, offering practical experience in fields like IT, engineering, or business',
        timing: 'During studies',
      },
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week for international students on a Student Route visa, often in local industries or campus roles',
        timing: 'During studies',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Trollhättan Campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'University West library',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Student collaboration space',
      },
    ],
    campusFeatures: [
      {
        title: 'Work Integrated Learning (WIL)',
        description:
          'A pioneering approach integrating real-world work experience into all programs, with partnerships in industries like Volvo and GKN Aerospace.',
      },
      {
        title: 'Modern Campus',
        description:
          'A centrally located campus in Trollhättan with advanced facilities, including production technology labs and collaborative learning spaces.',
      },
      {
        title: 'Primus Research Environment',
        description:
          'A leading research hub focusing on technology, learning, and sustainability, supported by the KK Foundation.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Laptop',
        title: 'BSc in Computer Engineering',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BSc in International Business',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Gear',
        title: 'BSc in Mechanical Engineering',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Education',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'HeartPulse',
        title: 'BSc in Nursing',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MSc in Informatics',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Gear',
        title: 'MSc in Manufacturing Engineering',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MSc in Finance',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'uppsala',
    universityName: 'Uppsala University',
    country: 'sweden',
    location: 'Uppsala, Sweden',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Uppsala Main Campus',
    tagline: 'Advancing Science, Shaping Futures',
    stats: ['Est. 1477', 'Top 100 Globally', 'Uppsala, Sweden'],
    description:
      'Founded in 1477, Uppsala University is Sweden’s oldest university and a globally recognized research institution, ranked among the top 100 worldwide. With 11 campuses, including a branch in Visby, Gotland, it offers over 120 master’s and 5 bachelor’s programs in English, spanning medicine, sciences, humanities, and social sciences. Known for eight Nobel laureates, Uppsala fosters cutting-edge research and a vibrant student life with 13 historic student nations.',
    overviewData: [
      { label: 'Institution Type', value: 'Public Research University' },
      { label: 'Established', value: '1477' },
      {
        label: 'Accreditation',
        value: 'Swedish Higher Education Authority (UKÄ)',
      },
      { label: 'Location', value: 'Uppsala and Visby, Sweden' },
      {
        label: 'Focus Areas',
        value: 'Medicine, Sciences, Humanities, Social Sciences',
      },
      { label: 'Student Body', value: '53,729 Students (2023/24)' },
    ],
    generalInfo:
      'International students at Uppsala University apply through Universityadmissions.se, submitting academic transcripts, proof of English proficiency, and financial documentation. The International Office offers visa support, career services, and an International Buddy Programme. With a 75-80% acceptance rate, Uppsala emphasizes independent learning and research opportunities across its modern facilities.',
    applicationFee: 86,
    financialRequirement: 11700,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Apply via Universityadmissions.se',
      'Official academic transcripts (with certified English translations if applicable)',
      'Proof of high school completion or equivalent',
      'Official document of financial support (minimum SEK 10,314/month for visa)',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.5 or higher (minimum 5.5 in each component)',
        },
        { name: 'TOEFL', score: '90 iBT or higher (minimum 20 in writing)' },
        { name: 'PTE Academic', score: '62 or higher (minimum 61 in writing)' },
        { name: 'Cambridge English', score: 'C1 Advanced or higher' },
      ],
      otherTests: [
        'Swedish Scholastic Aptitude Test (SweSAT, optional for international applicants)',
        'LanguageCert International ESOL B2 Communicator (minimum pass)',
      ],
      additionalRequirements: [
        'Personal statement',
        'Program-specific portfolio or additional documents (e.g., for Game Design)',
      ],
    },
    graduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.5 or higher (minimum 5.5 in each component)',
        },
        { name: 'TOEFL', score: '90 iBT or higher (minimum 20 in writing)' },
        { name: 'PTE Academic', score: '62 or higher (minimum 61 in writing)' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two academic references',
        'Statement of purpose',
        'Program-specific requirements (e.g., GRE for some programs)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students who do not meet English proficiency requirements may enroll in pre-sessional English courses or pathway programs to improve skills before starting degree programs.',
      benefits: [
        'Student visa sponsorship',
        'Pathway to degree programs',
        'Academic and cultural support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: 'SEK 100,000 - 145,000',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: 'SEK 90,000 - 135,000',
        period: 'per year',
      },
      {
        category: 'PhD Tuition',
        amount: 'Free',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Student Union Fee', amount: 'SEK 100 - 150' },
      { name: 'Student Nation Fee (optional)', amount: 'SEK 300 - 400' },
    ],
    livingCosts: [
      { category: 'Housing', range: 'SEK 3,800 - 7,000' },
      { category: 'Meals', range: 'SEK 2,000 - 3,000' },
      { category: 'Books & Supplies', range: 'SEK 500 - 1,000' },
      { category: 'Personal Expenses', range: 'SEK 1,500 - 2,500' },
    ],
    scholarships: [
      {
        name: 'Uppsala University Global Scholarship',
        amount: 'Full tuition',
        type: 'Merit-Based',
        eligibility:
          'Non-EU/EEA citizens, academic excellence, first-priority application',
        renewable: true,
        popular: true,
      },
      {
        name: 'Swedish Institute Scholarships',
        amount: 'Full tuition + SEK 10,000/month living expenses',
        type: 'Merit-Based',
        eligibility:
          'Non-EU/EEA citizens, specific countries, master’s students',
        renewable: true,
        popular: true,
      },
      {
        name: 'Anders Wall Scholarship',
        amount: 'SEK 12,500',
        type: 'Merit-Based',
        eligibility: 'International students, leadership potential',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Admission Offer',
        description: 'Receive admission offer from Uppsala University',
      },
      {
        step: 2,
        title: 'Financial Documentation',
        description: 'Submit bank statement showing SEK 10,314/month for visa',
      },
      {
        step: 3,
        title: 'Apply for Residence Permit',
        description: 'Submit online application via Swedish Migration Agency',
      },
      {
        step: 4,
        title: 'Biometrics and Interview',
        description:
          'Provide biometrics and attend interview (if required) at a Swedish embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'No restrictions on hours for international students, but part-time jobs are limited and often require Swedish proficiency',
        timing: 'During studies',
      },
      {
        type: 'Post-Study Work',
        description:
          'Up to 12 months residence permit extension to seek employment',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Carolina Rediviva Library',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Uppsala Biomedical Centre',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student nation events',
      },
    ],
    campusFeatures: [
      {
        title: 'Research Excellence',
        description:
          'Home to the Uppsala Biomedical Centre and Evolutionary Biology Centre, among Europe’s largest life sciences hubs, with cutting-edge research facilities.',
      },
      {
        title: 'Student Nations',
        description:
          '13 historic student clubs dating back to the 17th century, offering social events, sports, and dining.',
      },
      {
        title: 'Carolina Rediviva Library',
        description:
          'One of Sweden’s oldest and largest libraries, housing rare manuscripts and extensive study resources.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Gamepad',
        title: 'BA in Game Design',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Globe',
        title: 'BSc in Energy Transition',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Egyptology',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BSc in Quality Management',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MS in Computer Science',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Globe',
        title: 'MS in Sustainable Development',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'MS in Drug Discovery and Development',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Scale',
        title: 'MS in Peace and Conflict Studies',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'jaenuniversity',
    universityName: 'University of Jaén',
    country: 'spain',
    location: 'Jaén, Andalucía, Spain',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName:
      'Las Lagunillas Campus, Linares Scientific-Technological Campus',
    tagline: 'Driving the Future of Andalucía',
    stats: ['Est. 1993', 'QAA Accredited', 'Top 50 Young Universities'],
    description:
      'The University of Jaén (UJA), established in 1993, is a public research university in Jaén, Andalucía, Spain. With a history tracing back to the 14th century, UJA operates two main campuses in Jaén and Linares, plus an affiliated center in Úbeda. Known for its commitment to innovation, sustainability, and internationalisation, it serves over 14,000 students with a focus on research excellence, ranking in the top 50 young universities globally (THE 2023).',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1993' },
      { label: 'Accreditation', value: 'UK Quality Assured (QAA)' },
      { label: 'Locations', value: 'Jaén, Linares, Úbeda' },
      {
        label: 'Focus Areas',
        value: 'Engineering, Health Sciences, Humanities, Social Sciences, Law',
      },
      { label: 'Student Body', value: '14,000+ Students' },
    ],
    generalInfo:
      'The University of Jaén welcomes international students from over 60 countries, requiring academic transcripts, English or Spanish proficiency, and financial documentation. With a 12:1 student-faculty ratio and over 60 exchange programs, including Erasmus+, UJA fosters a multicultural environment with strong industry ties, offering internships in over 500 companies and a Buddy Program for international student support.',
    applicationFee: 0,
    financialRequirement: 12000,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Complete application via Distrito Único Andaluz (UniversityAdmissions.se equivalent for Spain)',
      'Official high school or post-secondary transcripts (translated into English/Spanish, evaluated if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'IELTS', score: '6.0 overall (5.5 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '72 or higher (18 minimum in each section)',
        },
        { name: 'PTE Academic', score: '51 or higher' },
        { name: 'Cambridge English', score: 'B2 First or C1 Advanced' },
      ],
      otherTests: [
        'Spanish Baccalaureate or equivalent (homologated for non-EU students)',
        'Selectividad (EBAU) for EU/national students or equivalent',
      ],
      additionalRequirements: [
        'Personal statement (if required by program)',
        'One academic or professional reference (program-specific)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'IELTS', score: '6.5 overall (6.0 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '80 or higher (20 minimum in each section)',
        },
        { name: 'PTE Academic', score: '59 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Personal statement (program-specific)',
        'Two academic or professional references',
        'Official transcripts from all post-secondary institutions',
        'Bachelor’s degree equivalent to a Spanish título de grado',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting language proficiency requirements may enroll in Spanish or English language courses offered by UJA’s Language Centre to prepare for degree programs.',
      benefits: [
        'Pathway to degree program',
        'Student visa sponsorship',
        'Support for academic and professional language skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: '€750 - €1,000',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '€820 - €2,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Administrative Fee', amount: '€50 - €100' },
      { name: 'Program-Specific Fees (e.g., lab fees)', amount: '€100 - €300' },
    ],
    livingCosts: [
      { category: 'Housing (on/off-campus)', range: '€3,600 - €6,000' },
      { category: 'Meals', range: '€2,400 - €4,000' },
      { category: 'Books & Supplies', range: '€300 - €600' },
      { category: 'Personal Expenses', range: '€1,200 - €2,400' },
    ],
    scholarships: [
      {
        name: 'UJA Talent Scholarship',
        amount: 'Up to €2,000',
        type: 'Merit-Based',
        eligibility: 'Strong academic record, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Andalusian Government Scholarship',
        amount: '99% tuition discount for approved credits',
        type: 'Merit-Based',
        eligibility: 'From second year, based on academic performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'Erasmus+ Scholarship',
        amount: 'Varies',
        type: 'Exchange-Based',
        eligibility: 'Students from partner institutions',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Admission Offer',
        description: 'Receive an admission offer from Distrito Único Andaluz',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit visa application at the Spanish Consulate with admission letter and required documents',
      },
      {
        step: 3,
        title: 'Submit Financial Proof',
        description:
          'Provide proof of sufficient funds for tuition and living expenses',
      },
      {
        step: 4,
        title: 'Visa Decision',
        description: 'Await visa decision and prepare for travel',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for non-EU students with a student visa',
        timing: 'During studies',
      },
      {
        type: 'Internships',
        description:
          'Work placements in over 500 companies, integrated into degree programs',
        timing: 'During degree',
      },
      {
        type: 'Post-Study Work',
        description: 'Up to 12 months to seek employment after graduation',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Las Lagunillas Campus main building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Linares Scientific-Technological Campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Library and study areas',
      },
    ],
    campusFeatures: [
      {
        title: 'Las Lagunillas Campus',
        description:
          'Located in Jaén, featuring modern facilities, a library with 480,000+ digital publications, and the Andalusian Center for Iberian Archaeology.',
      },
      {
        title: 'Linares Scientific-Technological Campus',
        description:
          'Specialized in engineering and technology, with advanced labs and proximity to industrial partners.',
      },
      {
        title: 'International Focus',
        description:
          'Over 60 exchange programs, including Erasmus+, and 9 international double-degree programs with European universities.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Microscope',
        title: 'BSc in Biology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BEng in Computer Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Scale',
        title: 'BA in Law',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Primary Education',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'BA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MSc in Computer Engineering',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Microscope',
        title: 'MSc in Biotechnology',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Scale',
        title: 'MSc in Law and Legal Studies',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'BookOpen',
        title: 'MSc in Education',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'utad',
    universityName: 'University Center for Technology and Digital Art (U-tad)',
    country: 'spain',
    location: 'Las Rozas, Madrid, Spain',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Europa Empresarial Campus',
    tagline: 'Transform Your Passion into Your Profession',
    stats: ['Est. 2011', 'Privy Council Accredited', 'Las Rozas, Madrid'],
    description:
      'Established in 2011, U-tad (University Center for Technology and Digital Art) is a private university in Las Rozas, Madrid, specializing in digital arts, animation, video games, and computer science. With an industry-focused curriculum, students work on real-world projects using cutting-edge technology alongside professionals from leading companies. U-tad boasts a 92% graduate employment rate, strong industry connections, and a modern campus designed for innovation in the digital industry.',
    overviewData: [
      { label: 'Institution Type', value: 'Private' },
      { label: 'Established', value: '2011' },
      { label: 'Accreditation', value: 'Privy Council' },
      { label: 'Location', value: 'Las Rozas, Madrid' },
      {
        label: 'Focus Areas',
        value: 'Animation, Video Games, Digital Design, Computer Science',
      },
      { label: 'Student Body', value: '2,000+ Students' },
    ],
    generalInfo:
      'U-tad uses a selective admissions process with no cut-off mark, requiring an academic interview and specific documentation. Applications are processed directly through the university’s website. International students must submit transcripts, proof of English proficiency (for English-taught programs), and financial documentation. The International Relations Office supports visa processes, accommodation, and orientation for a smooth transition to studying in Madrid.',
    applicationFee: 30,
    financialRequirement: 30000,
    tuitionDeposit: 1000,
    processingFee: 0,
    generalRequirements: [
      'Complete the U-tad online application',
      'Official secondary or post-secondary transcripts (with certified English or Spanish translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
      'Academic interview with an admissions advisor',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '72 iBT' },
        { name: 'IELTS', score: '6.0 or higher (no section below 5.5)' },
        { name: 'Duolingo', score: '100 or above' },
        { name: 'PTE Academic', score: '51 or higher' },
      ],
      otherTests: [
        'Cambridge English (B2 First, C1 Advanced)',
        'Spanish DELE B2 (for Spanish-taught programs)',
      ],
      additionalRequirements: [
        'Portfolio or creative aptitude test (program-specific)',
        'Personal Statement (optional)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher (no section below 6.0)' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation (program-specific)',
        'Statement of Purpose',
        'Portfolio or relevant work experience (program-specific)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English or Spanish proficiency requirements may enroll in language preparation courses through partner institutions, providing a pathway to degree programs upon successful completion.',
      benefits: [
        'Visa sponsorship available',
        'Student visa support',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition',
        amount: '€9,000 - €12,000',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition',
        amount: '€8,000 - €14,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '€0 (included in tuition)' },
      { name: 'Student Activity Fee', amount: '€200' },
      {
        name: 'Health Insurance Fee',
        amount: '€600 (mandatory for non-EU students)',
      },
    ],
    livingCosts: [
      { category: 'Housing (off-campus)', range: '€6,000 - €12,000' },
      { category: 'Meals', range: '€3,000 - €5,000' },
      { category: 'Books & Supplies', range: '€500 - €1,000' },
      { category: 'Personal Expenses', range: '€2,000 - €3,500' },
    ],
    scholarships: [
      {
        name: 'U-tad Talent Scholarship',
        amount: 'Up to 50% tuition reduction',
        type: 'Merit-Based',
        eligibility: 'High academic or creative achievement',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Excellence Scholarship',
        amount: 'Up to €5,000',
        type: 'Merit-Based',
        eligibility: 'International Status, strong portfolio or grades',
        renewable: false,
        popular: true,
      },
      {
        name: 'Women in Technology Scholarship',
        amount: 'Up to €3,000',
        type: 'Merit-Based',
        eligibility: 'Female students in STEM or digital arts programs',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Letter of Admission',
        description:
          'Receive your admission letter from U-tad after application approval',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit visa application at the Spanish embassy or consulate in your country',
      },
      {
        step: 3,
        title: 'Pay Visa Fees',
        description: 'Pay the required visa fees and provide financial proof',
      },
      {
        step: 4,
        title: 'Attend Visa Interview',
        description: 'Schedule and attend a visa interview if required',
      },
    ],
    workOpportunities: [
      {
        type: 'Internships',
        description:
          'Mandatory internships integrated into programs, offering real-world experience in animation, video games, or digital design with industry partners',
        timing: 'During studies',
      },
      {
        type: 'Post-Graduation Stay',
        description:
          'Non-EU students can stay in Spain for up to 1 year after graduation to seek employment with a job seeker visa',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Europa Empresarial Campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Motion capture studio',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Digital arts lab',
      },
    ],
    campusFeatures: [
      {
        title: 'Industry-Standard Facilities',
        description:
          '14,000 m² campus with motion capture studios, 3D printing labs, VR facilities, and professional-grade software used by top digital companies.',
      },
      {
        title: 'Industry Connections',
        description:
          'Partnerships with companies like Pixar, EA, and Ubisoft provide internships, masterclasses, and networking opportunities.',
      },
      {
        title: 'Madrid Location',
        description:
          'Located in Las Rozas, near Madrid, offering access to a vibrant cultural and tech hub with proximity to global companies.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Microphone',
        title: 'Degree in Animation',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'Degree in Video Game Design and Development',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Palette',
        title: 'Degree in Digital Design',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Gear',
        title: 'Degree in Computer Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Flask',
        title: 'Degree in Data Science',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Microphone',
        title: 'Master’s in Animation and VFX',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'Master’s in Video Game Programming',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Gear',
        title: 'Master’s in Cybersecurity',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'uaoceu',
    universityName: 'Universitat Abat Oliba CEU',
    country: 'spain',
    location: 'Barcelona, Spain',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Bellesguard Campus',
    tagline: 'Excellence in Education, Inspired by Values',
    stats: ['Est. 1973', '95.3% Employability', 'Barcelona, Spain'],
    description:
      'Founded in 1973 by the San Pablo CEU Foundation, Universitat Abat Oliba CEU (UAO CEU) is a private, Catholic university in Barcelona, officially recognized in 2003 by the Catalan Parliament. Located in the Sarrià-Sant Gervasi district, it offers personalized education across three faculties: Law and Business; Communication, Education, and Humanities; and Health and Life Sciences/Psychology. Known for its 95.3% graduate employability rate and bilingual programs, UAO CEU emphasizes academic excellence, international mobility, and professional development.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Catholic University' },
      { label: 'Established', value: '1973' },
      { label: 'Accreditation', value: 'Ministerio de Universidades, España' },
      { label: 'Location', value: 'Barcelona, Spain' },
      {
        label: 'Focus Areas',
        value: 'Law, Business, Communication, Psychology, Education',
      },
      { label: 'Student Body', value: '1,000-1,999 Students (2023/24)' },
    ],
    generalInfo:
      'International students at UAO CEU apply through an online admissions process, submitting academic transcripts, proof of English or Spanish proficiency, and financial documentation. The International Office supports visa processes, accommodation, and NIE (Foreign National Identity Number) applications. With a focus on employability, students benefit from over 2,300 internship agreements and career services, including the Employability Acceleration Program.',
    applicationFee: 80,
    financialRequirement: 15000,
    tuitionDeposit: 1500,
    processingFee: 100,
    generalRequirements: [
      'Apply via Prospective Student Portal (100% online)',
      'Official high school or post-secondary transcripts (with certified translations if applicable)',
      'Proof of high school completion or equivalent (e.g., PAU, EVAU, or CFGS)',
      'Official document of financial support demonstrating sufficient funds',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.0 or higher (minimum 5.5 in each component)',
        },
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'Duolingo', score: '105 or above' },
        { name: 'Cambridge English', score: 'B2 First or higher' },
      ],
      otherTests: [
        'LanguageCert International ESOL B2 Communicator (minimum pass)',
        'Official Spanish DELE B2 (for non-Spanish speakers)',
      ],
      additionalRequirements: [
        'Online admissions test (waived for 8+/10 in first-year baccalaureate)',
        'Personal statement',
      ],
    },
    graduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.5 or higher (minimum 6.0 in each component)',
        },
        { name: 'TOEFL', score: '90 iBT or higher' },
        { name: 'Duolingo', score: '115 or above' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two academic references',
        'Statement of purpose',
        'Degree certificate with Hague Apostille or equivalent',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting language requirements may enroll in pre-sessional language courses through the UAO CEU Language Service to improve English or Spanish proficiency before starting degree programs.',
      benefits: [
        'Student visa sponsorship',
        'Pathway to degree programs',
        'Language and cultural support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: '€7,800 - €11,400',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '€8,000 - €12,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Administrative Fee', amount: '€150' },
      { name: 'Student Services Fee', amount: '€100' },
      { name: 'Health Insurance (Non-EEA)', amount: '€600 (mandatory)' },
    ],
    livingCosts: [
      { category: 'Housing (shared flats)', range: '€4,800 - €7,200' },
      { category: 'Meals', range: '€2,400 - €3,600' },
      { category: 'Books & Supplies', range: '€500 - €1,000' },
      { category: 'Personal Expenses', range: '€1,800 - €2,400' },
    ],
    scholarships: [
      {
        name: 'International Early Enrolment Grant',
        amount: '10% tuition discount',
        type: 'Merit-Based',
        eligibility: 'Early application, admitted to postgraduate programs',
        renewable: false,
        popular: true,
      },
      {
        name: 'Study Aid Program (PAE/PAEM)',
        amount: 'Varies (discounts based on merit and need)',
        type: 'Merit and Need-Based',
        eligibility: 'Academic merit, personal/economic circumstances',
        renewable: true,
        popular: true,
      },
      {
        name: 'CEU Merit Scholarship',
        amount: 'Up to €3,000',
        type: 'Merit-Based',
        eligibility: 'High academic performance',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Admission Offer',
        description:
          'Receive admission offer and reserve place with €1,500 deposit',
      },
      {
        step: 2,
        title: 'Financial Documentation',
        description: 'Submit proof of funds (minimum €12,000/year for visa)',
      },
      {
        step: 3,
        title: 'Apply for Student Visa',
        description:
          'Submit application via Spanish Consulate with UNED accreditation',
      },
      {
        step: 4,
        title: 'NIE Application',
        description: 'Obtain Foreign National Identity Number (NIE) in Spain',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for Student visa holders',
        timing: 'During studies',
      },
      {
        type: 'Post-Study Work',
        description: '1-year residence permit extension to seek employment',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Bellesguard Campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Library and study areas',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student cultural events',
      },
    ],
    campusFeatures: [
      {
        title: 'High Employability',
        description:
          '95.3% graduate employability rate, with over 2,300 internship agreements and an Employability Acceleration Program.',
      },
      {
        title: 'Bilingual Programs',
        description:
          '13 bilingual degrees in English and Spanish, enhancing global career prospects.',
      },
      {
        title: 'Cultural Hub',
        description:
          'Located in Barcelona’s Sarrià-Sant Gervasi, near UNESCO sites like La Sagrada Familia, with access to vibrant cultural and recreational activities.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Scale',
        title: 'BA in Law',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BA in Business Administration',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Pen',
        title: 'BA in Journalism',
        duration: '4 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'BA in Psychology',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'BookOpen',
        title: 'BA in Education',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Scale',
        title: 'MA in Technological and Digital Law',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'MA in Business Management',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Pen',
        title: 'MA in Digital Communication',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'universidadeeuropeia',
    universityName: 'Universidade Europeia',
    country: 'portugal',
    location: 'Lisbon, Portugal',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Oriente Green Campus, Carnide Campus, Lispólis Campus',
    tagline: 'Shaping Global Professionals',
    stats: ['Est. 1962', 'QAA Accredited', '2,300+ Students'],
    description:
      'Universidade Europeia, established in 1962 as ISLA, is a private university in Lisbon, Portugal, recognized for its experiential learning model. Incorporating IADE (1969) and IPAM (1984), it offers innovative programs in management, law, psychology, design, and technology, preparing students for global careers through strong industry ties and international mobility.',
    overviewData: [
      { label: 'Institution Type', value: 'Private' },
      { label: 'Established', value: '1962' },
      { label: 'Accreditation', value: 'UK Quality Assured (QAA)' },
      { label: 'Locations', value: 'Lisbon, Porto' },
      {
        label: 'Focus Areas',
        value: 'Management, Law, Psychology, Design, Technology',
      },
      { label: 'Student Body', value: '2,300+ Students' },
    ],
    generalInfo:
      'Universidade Europeia welcomes international students from over 100 countries, requiring academic transcripts, English or Portuguese proficiency, and financial documentation. With a 10:1 student-faculty ratio, it emphasizes practical, industry-focused education and supports mobility through Erasmus+ and 200+ partner universities worldwide.',
    applicationFee: 50,
    financialRequirement: 15000,
    tuitionDeposit: 250,
    processingFee: 225,
    generalRequirements: [
      'Complete the Online Application or apply via EduPortugal',
      'Official high school or post-secondary transcripts (translated into English/Portuguese, evaluated if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
      'ENES report (minimum 475 points for undergraduate, if applicable)',
    ],
    undergraduate: {
      englishTests: [
        { name: 'IELTS', score: '6.0 overall (5.5 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '72 or higher (18 minimum in each section)',
        },
        { name: 'PTE Academic', score: '51 or higher' },
        { name: 'Cambridge English', score: 'B2 First or C1 Advanced' },
      ],
      otherTests: [
        'ENEM (minimum 475 points, any year)',
        'Portfolio (for design-related programs)',
      ],
      additionalRequirements: [
        'Personal statement (if required by program)',
        'One academic or professional reference',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'IELTS', score: '6.5 overall (6.0 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '80 or higher (20 minimum in each section)',
        },
        { name: 'PTE Academic', score: '59 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Personal statement (program-specific)',
        'Two academic or professional references',
        'Official transcripts from all post-secondary institutions',
        'Bachelor’s degree equivalent to a Portuguese licenciatura',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting language proficiency requirements may enroll in the Portuguese Language and Culture Course (3 ECTS) or Individual Subjects Scheme to prepare for degree programs.',
      benefits: [
        'Pathway to degree program',
        'Student visa sponsorship',
        'Support for academic and professional language skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: '€6,792 - €8,000',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '€6,000 - €9,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Registration Fee', amount: '€350' },
      { name: 'School Insurance', amount: '€30' },
      { name: 'Program-Specific Fees (e.g., lab fees)', amount: '€100 - €500' },
    ],
    livingCosts: [
      { category: 'Housing (off-campus)', range: '€4,800 - €7,200' },
      { category: 'Meals', range: '€2,400 - €4,000' },
      { category: 'Books & Supplies', range: '€300 - €600' },
      { category: 'Personal Expenses', range: '€1,500 - €2,500' },
    ],
    scholarships: [
      {
        name: 'Merit-Based Scholarship',
        amount: 'Up to 25% tuition reduction',
        type: 'Merit-Based',
        eligibility: 'Strong academic record, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'EduPortugal Discount',
        amount: '10% monthly tuition discount',
        type: 'Merit-Based',
        eligibility: 'Applications via EduPortugal by July 1',
        renewable: false,
        popular: true,
      },
      {
        name: 'Erasmus+ Scholarship',
        amount: 'Varies',
        type: 'Exchange-Based',
        eligibility: 'Students from partner institutions',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Admission Offer',
        description: 'Receive an admission offer from Universidade Europeia',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit visa application at the Portuguese Consulate with admission letter and required documents',
      },
      {
        step: 3,
        title: 'Submit Financial Proof',
        description:
          'Provide proof of sufficient funds for tuition and living expenses',
      },
      {
        step: 4,
        title: 'Visa Decision',
        description: 'Await visa decision and prepare for travel',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for non-EU students with a student visa',
        timing: 'During studies',
      },
      {
        type: 'Internships',
        description:
          'Work placements with partner companies, integrated into degree programs',
        timing: 'During degree',
      },
      {
        type: 'Post-Study Work',
        description: 'Up to 12 months to seek employment after graduation',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Oriente Green Campus main building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Carnide Campus facilities',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Lispólis Campus technology hub',
      },
    ],
    campusFeatures: [
      {
        title: 'Oriente Green Campus',
        description:
          'A modern, creative, and technological hub in Lisbon, featuring state-of-the-art facilities and collaborative spaces.',
      },
      {
        title: 'Global Network',
        description:
          'Over 200 partner universities worldwide, supporting Erasmus+ and international exchanges for a global experience.',
      },
      {
        title: 'Industry Connections',
        description:
          'Collaborations with companies for real-world projects, internships, and a 92% employability rate within 18 months.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Laptop',
        title: 'BSc in Data Science and Management',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BSc in Management',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Scale',
        title: 'LLB in Law',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Brain',
        title: 'BSc in Psychology',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Palette',
        title: 'BA in Design',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MSc in Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Scale',
        title: 'LLM in International Business Law',
        duration: '1 Year',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Brain',
        title: 'MSc in Clinical Psychology',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'warsawuniversitytechnology',
    universityName: 'Warsaw University of Technology',
    country: 'poland',
    location: 'Warsaw, Poland',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Main Campus, Płock Campus',
    tagline: 'Engineering the Future',
    stats: ['Est. 1826', 'QAA Accredited', '36,000+ Students'],
    description:
      'Warsaw University of Technology (WUT), founded in 1826, is Poland’s leading technical research university, located in Warsaw with a secondary campus in Płock. Renowned for its interdisciplinary programs and cutting-edge research, WUT ranks first among Polish technical universities and in the global 601–800 band (THE 2018). With 19 faculties and strong industry ties, it prepares graduates for global careers.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '1826' },
      { label: 'Accreditation', value: 'UK Quality Assured (QAA)' },
      { label: 'Locations', value: 'Warsaw, Płock' },
      {
        label: 'Focus Areas',
        value:
          'Engineering, Computer Science, Architecture, Biotechnology, Data Science',
      },
      { label: 'Student Body', value: '36,156 Students (2011)' },
    ],
    generalInfo:
      'WUT welcomes international students from over 50 countries, requiring academic transcripts, English proficiency, and financial documentation. With a 15:1 student-faculty ratio and 5,000 graduates annually, WUT fosters innovation through partnerships with 200+ universities and industries like Microsoft. Its alumni lead Polish corporations, with one in nine top executives being WUT graduates.',
    applicationFee: 85,
    financialRequirement: 12000,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Complete the application via WUT International Students Office (students.pw.edu.pl)',
      'Official high school or post-secondary transcripts (translated into English/Polish, evaluated if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'IELTS', score: '6.0 overall (5.5 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '75 or higher (18 minimum in each section)',
        },
        { name: 'PTE Academic', score: '52 or higher' },
        { name: 'Cambridge English', score: 'B2 First or C1 Advanced' },
      ],
      otherTests: [
        'Polish Baccalaureate or equivalent (homologated for non-EU students)',
      ],
      additionalRequirements: [
        'Personal statement (program-specific, if required)',
        'One academic or professional reference (program-specific)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'IELTS', score: '6.5 overall (6.0 minimum in each component)' },
        {
          name: 'TOEFL iBT',
          score: '87 or higher (20 minimum in each section)',
        },
        { name: 'PTE Academic', score: '59 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Personal statement (program-specific)',
        'Two academic or professional references',
        'Official transcripts from all post-secondary institutions',
        'Bachelor’s degree equivalent to a Polish licencjat or inżynier',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in WUT’s Foundation Year or pre-sessional English courses to prepare for degree programs.',
      benefits: [
        'Pathway to degree program',
        'Student visa sponsorship',
        'Support for academic and technical English skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: '€3,000 - €5,000',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '€3,500 - €6,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Registration Fee', amount: '€200' },
      { name: 'Student Union Fee', amount: '€30' },
      { name: 'Program-Specific Fees (e.g., lab fees)', amount: '€100 - €500' },
    ],
    livingCosts: [
      { category: 'Housing (on/off-campus)', range: '€2,400 - €4,800' },
      { category: 'Meals', range: '€1,800 - €3,000' },
      { category: 'Books & Supplies', range: '€300 - €600' },
      { category: 'Personal Expenses', range: '€1,200 - €2,400' },
    ],
    scholarships: [
      {
        name: 'WUT Merit Scholarship',
        amount: 'Up to €1,500',
        type: 'Merit-Based',
        eligibility: 'Strong academic record, international status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Polish Government Scholarship',
        amount: 'Full tuition waiver',
        type: 'Merit-Based',
        eligibility: 'Non-EU/EEA citizens, academic excellence',
        renewable: true,
        popular: true,
      },
      {
        name: 'Erasmus+ Scholarship',
        amount: 'Varies',
        type: 'Exchange-Based',
        eligibility: 'Students from partner institutions',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Admission Offer',
        description:
          'Receive an admission offer from WUT International Students Office',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit visa application at the Polish Consulate with admission letter and required documents',
      },
      {
        step: 3,
        title: 'Submit Financial Proof',
        description:
          'Provide proof of sufficient funds for tuition and living expenses',
      },
      {
        step: 4,
        title: 'Visa Decision',
        description: 'Await visa decision and prepare for travel',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 20 hours per week during term time for non-EU students with a student visa',
        timing: 'During studies',
      },
      {
        type: 'Internships',
        description:
          'Work placements with industry partners, integrated into degree programs',
        timing: 'During degree',
      },
      {
        type: 'Post-Study Work',
        description: 'Up to 12 months to seek employment after graduation',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'Main Campus historical building',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Faculty of Technology laboratories',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Student Union and campus green',
      },
    ],
    campusFeatures: [
      {
        title: 'Historic Main Campus',
        description:
          'Located in central Warsaw, featuring a blend of historic and modern buildings, including a library with 1.5 million+ publications.',
      },
      {
        title: 'Global Partnerships',
        description:
          'Part of the ENHANCE Alliance with nine European technical universities, offering extensive exchange programs and research collaborations.',
      },
      {
        title: 'Vibrant Student Life',
        description:
          'Over 130 scientific groups, 30+ student organizations, and the legendary Stodoła club, hosting festivals, job fairs, and sports facilities.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Plane',
        title: 'BSc Aerospace Engineering',
        duration: '3.5 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BSc Computer Science',
        duration: '3.5 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Building',
        title: 'BSc Civil Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Microchip',
        title: 'BSc Electrical Engineering',
        duration: '4 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Microscope',
        title: 'BSc Environmental Engineering',
        duration: '3.5 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Laptop',
        title: 'MSc Data Science',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Plane',
        title: 'MSc Aerospace Engineering',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Microscope',
        title: 'MSc Biotechnology',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Building',
        title: 'MSc Architecture',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
      {
        icon: 'Briefcase',
        title: 'MSc Management and Production Engineering',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'wsizrzeszow',
    universityName:
      'University of Information Technology and Management (WSIiZ)',
    country: 'poland',
    location: 'Rzeszów, Podkarpackie, Poland',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Rzeszów Campus & Kielnarowa Campus',
    tagline: 'Education for Your Future',
    stats: ['Est. 1996', 'Privy Council Accredited', 'Rzeszów & Kielnarowa'],
    description:
      'Founded in 1996, the University of Information Technology and Management (WSIiZ) in Rzeszów is the largest non-public university in Poland’s Podkarpackie region. With over 5,000 students, including nearly 1,500 international students from over 40 countries, WSIiZ offers 16 fields of study in Polish and English across four faculties: Medicine, Management, Applied IT, and Media and Social Communication. Known for its practical, industry-aligned education, WSIiZ emphasizes Work Integrated Learning (WIL) and boasts a 92% graduate employment rate, supported by partnerships with companies like Cisco, Microsoft, and G2A. The university also offers doctoral programs and is highly ranked for its multicultural community and English-taught programs.',
    overviewData: [
      { label: 'Institution Type', value: 'Private, Non-Public' },
      { label: 'Established', value: '1996' },
      { label: 'Accreditation', value: 'Privy Council' },
      { label: 'Locations', value: 'Rzeszów & Kielnarowa, Poland' },
      {
        label: 'Focus Areas',
        value: 'IT, Management, Medicine, Media & Communication',
      },
      { label: 'Student Body', value: '5,000+ Students' },
    ],
    generalInfo:
      'WSIiZ uses a selective admissions process based on academic records, with applications processed through its online portal or University Admissions in Poland. International students must submit transcripts, proof of English proficiency, and financial documentation. The International Office provides visa support, orientation programs, and a Heathrow pickup service for new students.',
    applicationFee: 200,
    financialRequirement: 20000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the WSIiZ online application or apply via University Admissions in Poland',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
      'English language international B2 certificate (for English-taught programs)',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '72 iBT / 533 PBT' },
        { name: 'IELTS', score: '6.0 or higher (no section below 5.5)' },
        { name: 'Duolingo', score: '100 or above' },
        { name: 'PTE Academic', score: '51 or higher' },
      ],
      otherTests: [
        'Cambridge English (B2 First, C1 Advanced)',
        'ECDL or equivalent for IT programs',
      ],
      additionalRequirements: [
        'Secondary school certificate equivalent to Polish Matura',
        'Personal Statement (program-specific)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '80 iBT or higher' },
        { name: 'IELTS', score: '6.5 or higher (no section below 6.0)' },
        { name: 'Duolingo', score: '110 or above' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation (program-specific)',
        'Statement of Purpose',
        'Relevant work experience (program-specific)',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in WSIiZ’s English preparatory courses or pathway programs to prepare for degree programs upon successful completion.',
      benefits: [
        'Visa sponsorship available',
        'Student visa support',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International Students)',
        amount: '€2,500 - €5,500',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International Students)',
        amount: '€3,000 - €6,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: '€100' },
      { name: 'Student Union Fee', amount: '€50' },
      {
        name: 'Health Insurance Fee',
        amount: '€500 (mandatory for non-EU students)',
      },
    ],
    livingCosts: [
      {
        category: 'Housing (on-campus or off-campus)',
        range: '€2,400 - €4,800',
      },
      { category: 'Meals', range: '€1,800 - €3,000' },
      { category: 'Books & Supplies', range: '€300 - €600' },
      { category: 'Personal Expenses', range: '€1,200 - €2,400' },
    ],
    scholarships: [
      {
        name: 'WSIiZ Merit Scholarship',
        amount: 'Up to 50% tuition reduction',
        type: 'Merit-Based',
        eligibility: 'High academic achievement, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'Rector’s Scholarship',
        amount: 'Up to €1,000',
        type: 'Merit-Based',
        eligibility: 'Outstanding academic or extracurricular performance',
        renewable: true,
        popular: true,
      },
      {
        name: 'Social Scholarship',
        amount: 'Up to €500',
        type: 'Need-Based',
        eligibility: 'Demonstrated financial need',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Letter of Admission',
        description:
          'Receive your admission letter from WSIiZ after application approval',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit visa application at the Polish embassy or consulate in your country',
      },
      {
        step: 3,
        title: 'Pay Visa Fees',
        description: 'Pay the required visa fees and provide financial proof',
      },
      {
        step: 4,
        title: 'Attend Visa Interview',
        description: 'Schedule and attend a visa interview if required',
      },
    ],
    workOpportunities: [
      {
        type: 'Internships',
        description:
          'Practical training through Work Integrated Learning (WIL) with industry partners like Cisco, Microsoft, and G2A, integrated into programs',
        timing: 'During studies',
      },
      {
        type: 'Post-Graduation Stay',
        description:
          'Non-EU students can stay in Poland for up to 1 year after graduation to seek employment with a residence permit',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Rzeszów Campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Kielnarowa Campus library',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Media and Communication studio',
      },
    ],
    campusFeatures: [
      {
        title: 'Dual Campus Experience',
        description:
          'Rzeszów Campus houses modern IT labs, media studios, and administrative offices, while Kielnarowa Campus offers a serene setting with advanced facilities like cosmetic chemistry and microbiology labs.',
      },
      {
        title: 'Industry Partnerships',
        description:
          'Collaborations with Cisco, Microsoft, and G2A provide internships, certifications, and real-world projects for hands-on learning.',
      },
      {
        title: 'Multicultural Community',
        description:
          'With 1,500 international students from over 40 countries, WSIiZ ranks among Poland’s top universities for its diverse academic environment.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Laptop',
        title: 'BSc in Computer Science',
        duration: '3.5 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'BA in International Business Management',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'HeartPulse',
        title: 'BSc in Physiotherapy',
        duration: '5 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Microphone',
        title: 'BA in Aviation Management',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Flask',
        title: 'BA in Digital Media and Branding',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MSc in Logistics in Transport',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MSc in Computer Science',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Microphone',
        title: 'MA in Journalism and Social Communication',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'wsbmerito',
    universityName: 'WSB Merito University Group',
    country: 'poland',
    location: 'Multiple Cities, Poland',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Multiple Campuses',
    tagline: 'Studies. Work. Life. We Choose Everything!',
    stats: ['Est. 1994', 'Top Non-Public University', '11 Cities'],
    description:
      'Founded in 1994 as the Poznań School of Banking, WSB Merito University Group is Poland’s largest group of private universities, operating in 11 cities: Bydgoszcz, Chorzów, Gdańsk, Gdynia, Łódź, Opole, Poznań, Szczecin, Toruń, Warsaw, and Wrocław. With over 600,000 students and alumni, it offers 290+ accredited programs, emphasizing practical education, industry partnerships, and flexible schedules. Renowned for its 98.6% graduate satisfaction rate and 86% of students combining work and study, WSB Merito prepares students for careers through internships and modern facilities like 5G labs.',
    overviewData: [
      { label: 'Institution Type', value: 'Private University Group' },
      { label: 'Established', value: '1994' },
      {
        label: 'Accreditation',
        value: 'Polish Ministry of Science and Higher Education',
      },
      { label: 'Location', value: '11 Cities in Poland' },
      {
        label: 'Focus Areas',
        value: 'Business, IT, Management, Law, Logistics',
      },
      {
        label: 'Student Body',
        value: '600,000+ Students and Alumni (2023/24)',
      },
    ],
    generalInfo:
      'International students at WSB Merito apply through the online recruitment system, submitting academic transcripts, proof of English proficiency, and financial documentation. The Welcome Center for International Students offers visa support, accommodation guidance, and career services. With partnerships with over 170 global institutions, students access Erasmus+ programs and internships, enhancing employability in Poland and beyond.',
    applicationFee: 20,
    financialRequirement: 7200,
    tuitionDeposit: 100,
    processingFee: 50,
    generalRequirements: [
      'Apply via WSB Merito online recruitment system',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school completion or equivalent',
      'Official document of financial support (minimum €600/month for visa)',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.0 or higher (minimum 5.5 in each component)',
        },
        { name: 'TOEFL', score: '72 iBT or higher' },
        { name: 'PTE Academic', score: '51 or higher' },
        { name: 'Cambridge English', score: 'B2 First or higher' },
      ],
      otherTests: [
        'LanguageCert International ESOL B2 Communicator (minimum pass)',
        'Duolingo English Test (100 or above)',
      ],
      additionalRequirements: [
        'Personal statement',
        'One academic reference (optional for some programs)',
      ],
    },
    graduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.5 or higher (minimum 6.0 in each component)',
        },
        { name: 'TOEFL', score: '87 iBT or higher' },
        { name: 'PTE Academic', score: '59 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two academic references',
        'Statement of purpose',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in pre-sessional English courses offered by WSB Merito’s Language Center to prepare for degree programs.',
      benefits: [
        'Student visa sponsorship',
        'Pathway to degree programs',
        'Language and academic support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: '€2,500 - €3,500',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: '€3,000 - €4,500',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Administrative Fee', amount: '€100' },
      { name: 'Student Union Fee', amount: '€20' },
      { name: 'Health Insurance (Non-EEA)', amount: '€500 (mandatory)' },
    ],
    livingCosts: [
      { category: 'Housing (shared flats)', range: '€2,400 - €4,800' },
      { category: 'Meals', range: '€1,800 - €2,400' },
      { category: 'Books & Supplies', range: '€300 - €600' },
      { category: 'Personal Expenses', range: '€1,200 - €1,800' },
    ],
    scholarships: [
      {
        name: 'Study in Wroclaw Scholarship',
        amount: 'Full tuition exemption for first year',
        type: 'Merit-Based',
        eligibility:
          'International students, Study in Wroclaw project applicants',
        renewable: false,
        popular: true,
      },
      {
        name: 'Merito Talent Scholarship',
        amount: '€500 - €1,000',
        type: 'Merit-Based',
        eligibility: 'High academic performance, program-specific',
        renewable: true,
        popular: true,
      },
      {
        name: 'Erasmus+ Mobility Grant',
        amount: 'Varies (€300 - €700/month)',
        type: 'Mobility-Based',
        eligibility: 'Enrolled students participating in Erasmus+ programs',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Acceptance Letter',
        description:
          'Receive official acceptance letter from WSB Merito University',
      },
      {
        step: 2,
        title: 'Financial Documentation',
        description: 'Submit proof of funds (€600/month minimum for visa)',
      },
      {
        step: 3,
        title: 'Apply for Student Visa',
        description: 'Submit application via Polish embassy or consulate',
      },
      {
        step: 4,
        title: 'Temporary Residence Permit',
        description:
          'Apply at local Voivodship Office if staying over one year',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 40 hours per week for full-time students, no additional permit required',
        timing: 'During studies',
      },
      {
        type: 'Post-Study Work',
        description: '1-year residence permit extension to seek employment',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Wroclaw Campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Poznan Faculty Building',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student activities in Gdansk',
      },
    ],
    campusFeatures: [
      {
        title: 'Advanced Facilities',
        description:
          'Modern labs including Nokia 5G Lab, IoT Lab with Global Logic, and Giant Lazer XR Lab for virtual reality.',
      },
      {
        title: 'Career Support',
        description:
          'Career Office with JobTeaser platform, offering internships and job placements with 2,000+ partner companies.',
      },
      {
        title: 'International Opportunities',
        description:
          'Over 170 global partnerships and Erasmus+ programs for study abroad and internships.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'BA in International Business',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'BSc in IT in Business',
        duration: '3.5 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Truck',
        title: 'BSc in Logistics',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Scale',
        title: 'BA in Management and Law',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Calculator',
        title: 'BA in Finance and Accounting',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'MA in International Business Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'MSc in IT Project Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Truck',
        title: 'MSc in International Logistics Management',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'williambluecollege',
    universityName: 'William Blue College of Hospitality Management',
    country: 'australia',
    location: 'Sydney, New South Wales, Australia',
    imageUrl:
      'https://images.unsplash.com/photo-1518609878373-06d740f60b8a?auto=format&fit=crop&w=2000&q=80',
    campusName: 'The Rocks Campus, Brisbane Campus',
    tagline: 'Launching Global Hospitality Careers',
    stats: ['Est. 1990', 'CRICOS Registered', 'Part of Torrens University'],
    description:
      'William Blue College of Hospitality Management, founded in 1990, is a private hospitality college under Torrens University Australia, located in Sydney and Brisbane. Renowned for its practical, industry-focused programs in hospitality, tourism, event management, and culinary arts, it leverages strong connections with global industry leaders like Disney International and Merivale. Its teaching team brings over 300 years of combined experience, preparing students for global careers.',
    overviewData: [
      { label: 'Institution Type', value: 'Private' },
      { label: 'Established', value: '1990' },
      {
        label: 'Accreditation',
        value: 'CRICOS Registered (Torrens University Australia)',
      },
      {
        label: 'Locations',
        value: 'Sydney (The Rocks), Brisbane (Fortitude Valley)',
      },
      {
        label: 'Focus Areas',
        value: 'Hospitality, Tourism, Event Management, Culinary Arts',
      },
      { label: 'Student Body', value: '19,000+ (Torrens University Network)' },
    ],
    generalInfo:
      'William Blue College welcomes international students, requiring academic transcripts, English proficiency, and financial documentation. With a focus on practical training, including mandatory internships with over 80 global partners, it boasts a 80-90% graduate employment rate within six months. Small class sizes and a vibrant campus in Sydney’s historic The Rocks ensure personalized, industry-ready education.',
    applicationFee: 0,
    financialRequirement: 25000,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Complete the application via Torrens University Australia portal',
      'Official high school or post-secondary transcripts (translated into English, evaluated if needed)',
      'Proof of graduation from all previously attended institutions',
      'Financial support documentation (bank statement or sponsor letter showing sufficient funds)',
      'Copy of valid passport identification page',
    ],
    undergraduate: {
      englishTests: [
        { name: 'IELTS', score: '6.0 overall (5.5 minimum in each component)' },
        { name: 'TOEFL iBT', score: '60 or higher (18 minimum in writing)' },
        { name: 'PTE Academic', score: '50 or higher' },
        { name: 'Cambridge English', score: 'B2 First or C1 Advanced' },
      ],
      otherTests: [
        'Australian Year 12 or equivalent (e.g., IB, A-Levels)',
        'Portfolio or interview (for culinary programs, if required)',
      ],
      additionalRequirements: [
        'Personal statement (program-specific, if required)',
        'One academic or professional reference (if required)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'IELTS', score: '6.5 overall (6.0 minimum in each component)' },
        { name: 'TOEFL iBT', score: '79 or higher (21 minimum in writing)' },
        { name: 'PTE Academic', score: '58 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Personal statement (program-specific)',
        'Two academic or professional references',
        'Official transcripts from all post-secondary institutions',
        'Bachelor’s degree equivalent to an Australian bachelor’s degree',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting English proficiency requirements may enroll in the Torrens University Language Centre’s English pathway programs to prepare for degree programs.',
      benefits: [
        'Pathway to degree program',
        'Student visa sponsorship (Subclass 500)',
        'Support for academic and professional English skills',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: 'A$26,750 - A$33,200',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: 'A$30,000 - A$35,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Student Services and Amenities Fee', amount: 'A$313' },
      { name: 'Materials Fee (culinary programs)', amount: 'A$500 - A$1,000' },
    ],
    livingCosts: [
      { category: 'Housing (off-campus)', range: 'A$12,000 - A$21,000' },
      { category: 'Meals', range: 'A$4,800 - A$8,000' },
      { category: 'Books & Supplies', range: 'A$500 - A$1,000' },
      { category: 'Personal Expenses', range: 'A$2,000 - A$4,000' },
    ],
    scholarships: [
      {
        name: 'Hospitality Industry Scholarship',
        amount: '15% tuition reduction',
        type: 'Merit-Based',
        eligibility: 'New students with 1+ year hospitality experience',
        renewable: true,
        popular: true,
      },
      {
        name: 'Alumni Scholarship',
        amount: '25% tuition reduction',
        type: 'Merit-Based',
        eligibility: 'Torrens University graduates pursuing further study',
        renewable: true,
        popular: true,
      },
      {
        name: 'International Scholarship',
        amount: '20% tuition reduction',
        type: 'Merit-Based',
        eligibility: 'International students with strong academic record',
        renewable: true,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Admission Offer',
        description:
          'Receive a Confirmation of Enrolment (CoE) from Torrens University',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit Subclass 500 visa application online with CoE and required documents',
      },
      {
        step: 3,
        title: 'Pay Overseas Student Health Cover',
        description: 'Purchase mandatory Overseas Student Health Cover (OSHC)',
      },
      {
        step: 4,
        title: 'Visa Decision',
        description: 'Await visa decision and prepare for travel',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 48 hours per fortnight during term time for Subclass 500 visa holders',
        timing: 'During studies',
      },
      {
        type: 'Internships',
        description:
          'Mandatory work placements with over 80 global industry partners',
        timing: 'During degree',
      },
      {
        type: 'Post-Study Work',
        description:
          '2-4 years of work authorization via Temporary Graduate Visa (Subclass 485)',
        timing: 'After degree completion',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd7e78871?auto=format&fit=crop&w=800&q=80',
        alt: 'The Rocks Campus exterior',
      },
      {
        src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
        alt: 'Brisbane Fortitude Valley Campus',
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1b37d97c6f43?auto=format&fit=crop&w=800&q=80',
        alt: 'Student lounge and study areas',
      },
    ],
    campusFeatures: [
      {
        title: 'The Rocks Campus',
        description:
          'Located in Sydney’s historic The Rocks, near Circular Quay, surrounded by luxury hotels and restaurants, ideal for networking and internships.',
      },
      {
        title: 'Industry Connections',
        description:
          'Partnerships with 80+ global brands like Disney International and Merivale, offering internships and job opportunities.',
      },
      {
        title: 'Vibrant Student Life',
        description:
          'Diverse community with student clubs, industry events, and career services, fostering a tight-knit, multicultural environment.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'Bachelor of Business (Hospitality Management)',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Globe',
        title: 'Bachelor of Business (Tourism Management)',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Calendar',
        title: 'Bachelor of Business (Event Management)',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
      {
        icon: 'Utensils',
        title: 'Diploma of Culinary Management',
        duration: '1.5 Years',
        type: 'Diploma',
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Microchip',
        title: 'Graduate Diploma of Cybersecurity',
        duration: '1 Year',
        type: 'Graduate Diploma',
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'Master of International Hotel Management',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
    ],
  },
  {
    universitycode: 'vubrisbane',
    universityName: 'Victoria University – Brisbane',
    country: 'australia',
    location: 'Fortitude Valley, Brisbane, Queensland, Australia',
    imageUrl:
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Fortitude Valley Campus',
    tagline: 'Start Well, Finish Brilliantly',
    stats: ['Est. 2023', 'Privy Council Accredited', 'Brisbane, QLD'],
    description:
      'Established in 2023 in partnership with the Education Centre of Australia (ECA), Victoria University – Brisbane is an international campus of Victoria University, a top 2% global university (Times Higher Education 2024). Located in vibrant Fortitude Valley, it offers industry-relevant courses in business, information technology, and early childhood education using the award-winning VU Block Model®, focusing on one subject at a time for enhanced learning. With a multicultural student body and strong industry connections, VU Brisbane prepares students for global careers in one of Australia’s most livable cities.',
    overviewData: [
      { label: 'Institution Type', value: 'Public' },
      { label: 'Established', value: '2023 (Brisbane Campus)' },
      { label: 'Accreditation', value: 'Privy Council' },
      { label: 'Location', value: 'Fortitude Valley, Brisbane, QLD' },
      {
        label: 'Focus Areas',
        value: 'Business, Information Technology, Early Childhood Education',
      },
      { label: 'Student Body', value: '1,500+ Students (campus-specific)' },
    ],
    generalInfo:
      'Victoria University – Brisbane uses a selective admissions process through its online portal or education agents, requiring academic transcripts, English proficiency, and financial documentation for international students. The campus, operated with ECA, offers dedicated support for visa processes, orientation, and student integration, fostering a multicultural community in Brisbane’s lively Fortitude Valley.',
    applicationFee: 75,
    financialRequirement: 35000,
    tuitionDeposit: 500,
    processingFee: 0,
    generalRequirements: [
      'Complete the VU online application or apply through an education agent',
      'Official secondary or post-secondary transcripts (with certified English translations)',
      'Proof of graduation from all previously attended institutions',
      'Financial affidavit or bank statement for proof of funds',
      'Clear copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        { name: 'TOEFL', score: '67 iBT (15 in writing)' },
        { name: 'IELTS', score: '6.0 or higher (no section below 6.0)' },
        { name: 'PTE Academic', score: '50-57 or higher' },
      ],
      otherTests: [
        'Cambridge English (B2 First, C1 Advanced)',
        'VU English Placement Test',
      ],
      additionalRequirements: [
        'Australian Year 12 equivalent (e.g., CBSE/ISC 60-65%)',
        'Supporting letter from employer for Early Childhood Education (if applicable)',
      ],
    },
    graduate: {
      englishTests: [
        { name: 'TOEFL', score: '79 iBT or higher (21 in writing)' },
        { name: 'IELTS', score: '6.5 or higher (no section below 6.0)' },
        { name: 'PTE Academic', score: '58-64 or higher' },
      ],
      additionalRequirements: [
        'Resume or Curriculum Vitae',
        'Two Letters of Recommendation (program-specific)',
        'Statement of Purpose',
        'Recognized Bachelor’s degree or equivalent',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'International students who do not meet English proficiency requirements may enroll in VU English language courses or pathway programs offered through ECA, providing a pathway to degree programs upon successful completion.',
      benefits: [
        'Visa sponsorship available',
        'Student visa support',
        'Pathway to degree programs',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International Students)',
        amount: 'A$32,000 - A$35,000',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International Students)',
        amount: 'A$34,000 - A$38,000',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Technology Fee', amount: 'A$0 (included in tuition)' },
      { name: 'Student Services Fee', amount: 'A$326' },
      {
        name: 'Health Insurance (OSHC)',
        amount: 'A$609 (single cover, 12 months)',
      },
    ],
    livingCosts: [
      { category: 'Housing (off-campus)', range: 'A$12,000 - A$18,000' },
      { category: 'Meals', range: 'A$4,000 - A$7,000' },
      { category: 'Books & Supplies', range: 'A$800 - A$1,200' },
      { category: 'Personal Expenses', range: 'A$2,000 - A$3,500' },
    ],
    scholarships: [
      {
        name: 'VU International Excellence Scholarship',
        amount: 'Up to A$6,000',
        type: 'Merit-Based',
        eligibility: 'High academic achievement, International Status',
        renewable: true,
        popular: true,
      },
      {
        name: 'VU Brisbane Pathway Scholarship',
        amount: 'Up to A$3,000',
        type: 'Merit-Based',
        eligibility: 'Completion of VU English or ECA pathway program',
        renewable: false,
        popular: true,
      },
      {
        name: 'ECA International Bursary',
        amount: 'Up to A$2,000',
        type: 'Need-Based',
        eligibility: 'Demonstrated financial need',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Confirmation of Enrolment (CoE)',
        description: 'Receive your CoE after admission and deposit payment',
      },
      {
        step: 2,
        title: 'Apply for Student Visa',
        description:
          'Submit visa application through the Australian Department of Home Affairs',
      },
      {
        step: 3,
        title: 'Pay Visa Fees',
        description: 'Pay the visa application fee and provide financial proof',
      },
      {
        step: 4,
        title: 'Attend Visa Interview',
        description: 'Attend a visa interview if required by the embassy',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'International students can work up to 48 hours per fortnight during studies and full-time during breaks, often in retail, hospitality, or internships',
        timing: 'During studies',
      },
      {
        type: 'Post-Study Work Visa',
        description:
          'Up to 2-4 years of work rights after graduation, depending on the degree level, for eligible international students',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
        alt: 'Fortitude Valley Campus view',
      },
      {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        alt: 'Learning hub and student lounge',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
        alt: 'Computer lab',
      },
    ],
    campusFeatures: [
      {
        title: 'VU Block Model®',
        description:
          'Award-winning teaching method allowing students to study one subject at a time in small, interactive classes for focused learning and faster feedback.',
      },
      {
        title: 'Fortitude Valley Location',
        description:
          'Located in Brisbane’s vibrant Fortitude Valley, close to restaurants, cafes, and public transport, offering a dynamic urban study experience.',
      },
      {
        title: 'Industry Connections',
        description:
          'Strong partnerships with businesses in Brisbane provide internships, networking, and real-world project opportunities.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'Bachelor of Business',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'Bachelor of Information Technology',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'BookOpen',
        title: 'Bachelor of Early Childhood Education and Leadership',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'Master of Business Administration',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'Master of Information Systems',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Briefcase',
        title: 'Graduate Diploma in Business',
        duration: '1 Year',
        type: "Master's",
        popular: false,
      },
    ],
  },
  {
    universitycode: 'wsusydneycity',
    universityName: 'Western Sydney University - Sydney City Campus',
    country: 'australia',
    location: 'Sydney, New South Wales, Australia',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1b8f02906d33?auto=format&fit=crop&w=2000&q=80',
    campusName: 'Sydney City Campus',
    tagline: 'Unlimited Opportunities, Global Impact',
    stats: ['Est. 1989', 'Top 2% Globally', 'Sydney, NSW'],
    description:
      'Established in 1989, Western Sydney University (WSU) is a public university with its Sydney City Campus, operated by Navitas, located in the heart of Sydney’s CBD. Offering over 15 undergraduate and postgraduate programs, the campus specializes in business, IT, and accounting, delivered through the Sydney Institute of Business and Technology (SIBT). With a focus on practical, career-oriented education and a 30% acceptance rate, WSU Sydney City attracts over 6,000 international students from 170+ countries, fostering a multicultural environment with access to modern facilities and strong industry connections.',
    overviewData: [
      { label: 'Institution Type', value: 'Public University' },
      { label: 'Established', value: '1989' },
      { label: 'Accreditation', value: 'TEQSA (PRV12061), CRICOS (00917K)' },
      { label: 'Location', value: 'Sydney, NSW, Australia' },
      {
        label: 'Focus Areas',
        value: 'Business, Information Technology, Accounting',
      },
      {
        label: 'Student Body',
        value: '45,000+ Total, 6,000+ International (2023/24)',
      },
    ],
    generalInfo:
      'International students at WSU Sydney City Campus apply through the university’s online portal or UAC, submitting academic transcripts, proof of English proficiency, and financial documentation. The International Office provides visa support, free airport pick-up, and access to career services, including internships and the JobTeaser platform. With a 5-star QS rating for teaching and facilities, the campus ensures a vibrant, supportive learning environment in Sydney’s dynamic CBD.',
    applicationFee: 0,
    financialRequirement: 29710,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [
      'Apply via WSU online portal or Universities Admissions Centre (UAC)',
      'Official high school or post-secondary transcripts (with certified English translations if applicable)',
      'Proof of high school completion or equivalent (70%+ in 4 core subjects for Indian students)',
      'Official document of financial support (AUD 29,710/year minimum for visa)',
      'Copy of valid passport',
    ],
    undergraduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.5 or higher (minimum 6.0 in each component)',
        },
        { name: 'TOEFL', score: '82 iBT or higher (minimum 21 in writing)' },
        { name: 'PTE Academic', score: '58 or higher' },
        { name: 'Cambridge English', score: 'C1 Advanced or higher' },
      ],
      otherTests: [
        'Duolingo English Test (115 or above, program-specific)',
        'Australian Year 12 or equivalent (ATAR-based)',
      ],
      additionalRequirements: [
        'Personal statement (program-specific)',
        'Portfolio or work experience (for design-related programs)',
      ],
    },
    graduate: {
      englishTests: [
        {
          name: 'IELTS',
          score: '6.5 or higher (minimum 6.0 in each component)',
        },
        { name: 'TOEFL', score: '82 iBT or higher (minimum 21 in writing)' },
        { name: 'PTE Academic', score: '58 or higher' },
      ],
      additionalRequirements: [
        'Resume or CV',
        'Two academic references',
        'Statement of purpose',
        'Recognized bachelor’s degree equivalent to Australian standards',
      ],
    },
    conditionalAdmission: {
      available: true,
      description:
        'Students not meeting academic or English proficiency requirements may enroll in pathway programs through WSU International College or SIBT, offering foundation studies and diplomas leading to degree programs.',
      benefits: [
        'Student visa sponsorship',
        'Pathway to degree programs',
        'Tailored academic and language support',
      ],
    },
    tuitionData: [
      {
        category: 'Undergraduate Tuition (International)',
        amount: 'AUD 28,928 - AUD 36,432',
        period: 'per year',
      },
      {
        category: 'Graduate Tuition (International)',
        amount: 'AUD 31,672 - AUD 36,696',
        period: 'per year',
      },
    ],
    additionalFees: [
      { name: 'Student Services and Amenities Fee (SSAF)', amount: 'AUD 368' },
      {
        name: 'Overseas Student Health Cover (OSHC)',
        amount: 'AUD 680 (single, per year)',
      },
      { name: 'Material Fees (program-specific)', amount: 'AUD 100 - AUD 500' },
    ],
    livingCosts: [
      { category: 'Housing (on-campus)', range: 'AUD 9,600 - AUD 17,680' },
      { category: 'Meals', range: 'AUD 3,600 - AUD 5,200' },
      { category: 'Books & Supplies', range: 'AUD 500 - AUD 1,000' },
      { category: 'Personal Expenses', range: 'AUD 2,400 - AUD 4,800' },
    ],
    scholarships: [
      {
        name: 'Western Sydney International Scholarship',
        amount: 'AUD 3,000 - AUD 6,000',
        type: 'Merit-Based',
        eligibility: 'International students, academic merit',
        renewable: true,
        popular: true,
      },
      {
        name: 'Vice-Chancellor’s Academic Excellence Scholarship',
        amount: '50% tuition fee',
        type: 'Merit-Based',
        eligibility: 'High academic performance, program-specific',
        renewable: true,
        popular: true,
      },
      {
        name: 'Alumni Postgraduate Discount',
        amount: '10% tuition fee',
        type: 'Merit-Based',
        eligibility: 'WSU graduates pursuing postgraduate study',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [
      {
        step: 1,
        title: 'Receive Offer of Admission',
        description:
          'Obtain a Confirmation of Enrolment (CoE) after accepting the offer',
      },
      {
        step: 2,
        title: 'Financial Documentation',
        description: 'Submit proof of funds (AUD 29,710/year minimum for visa)',
      },
      {
        step: 3,
        title: 'Apply for Student Visa',
        description:
          'Submit Subclass 500 visa application via Australian Department of Home Affairs',
      },
      {
        step: 4,
        title: 'Biometrics and Health Check',
        description:
          'Provide biometrics and complete health examinations at an approved center',
      },
    ],
    workOpportunities: [
      {
        type: 'Part-Time Work',
        description:
          'Up to 48 hours per fortnight during term time for Student visa holders',
        timing: 'During studies',
      },
      {
        type: 'Post-Study Work',
        description:
          '2-4 years Temporary Graduate Visa (Subclass 485) depending on degree level',
        timing: 'After graduation',
      },
    ],
    campusImages: [
      {
        src: 'https://images.unsplash.com/photo-1516321165247-7d868bd39e28?auto=format&fit=crop&w=800&q=80',
        alt: 'Sydney City Campus Exterior',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
        alt: 'Library and Study Spaces',
      },
      {
        src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
        alt: 'Student Events in Sydney CBD',
      },
    ],
    campusFeatures: [
      {
        title: 'Prime Location',
        description:
          'Located in Sydney’s CBD, near the Opera House and Harbour Bridge, with access to vibrant cultural and professional opportunities.',
      },
      {
        title: 'Industry Connections',
        description:
          'Partnerships with Accenture, Telstra, and Ernst & Young provide internships and real-world business experience.',
      },
      {
        title: 'Modern Facilities',
        description:
          'State-of-the-art library, computer labs, and student spaces with 70+ million digital resources and 700,000 e-books.',
      },
    ],
    undergraduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'Bachelor of Business',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'Bachelor of Information Systems',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Calculator',
        title: 'Bachelor of Accounting',
        duration: '3 Years',
        type: "Bachelor's",
        popular: true,
      },
      {
        icon: 'Pen',
        title: 'Bachelor of Communication',
        duration: '3 Years',
        type: "Bachelor's",
        popular: false,
      },
    ],
    graduatePrograms: [
      {
        icon: 'Briefcase',
        title: 'Master of Business Administration (MBA)',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Laptop',
        title: 'Master of Information and Communications Technology',
        duration: '2 Years',
        type: "Master's",
        popular: true,
      },
      {
        icon: 'Calculator',
        title: 'Master of Professional Accounting',
        duration: '2 Years',
        type: "Master's",
        popular: false,
      },
    ],
  },
];

export default universities;
