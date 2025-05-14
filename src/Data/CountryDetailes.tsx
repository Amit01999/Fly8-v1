const uk = {
  code: 'uk',
  name: 'United Kingdom',
  flagUrl: 'https://flagcdn.com/w320/gb.png',
  heroImage:
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
  quickFacts: {
    population: '67.8 million',
    capital: 'London',
    language: 'English',
    currency: 'Pound Sterling (£)',
    academicYear: 'September to June',
  },
  keyDates: {
    fallDeadline: 'January 15 (for most undergraduate courses)',
    springDeadline:
      'October 15 (for Oxford, Cambridge, medicine, dentistry, veterinary courses)',
    summerDeadline: 'June 30 (Late applications)',
  },
  overviewSections: [
    {
      title: 'Why Study in the UK?',
      description:
        'The United Kingdom offers an educational experience that combines centuries of excellence with cutting-edge innovation, making it a top destination for international students.',
      points: [
        {
          heading: 'World-Renowned Universities',
          text: "Home to some of the world's oldest and most prestigious institutions, with 28 universities in the global top 200.",
        },
        {
          heading: 'Shorter Duration Programs',
          text: "Bachelor's degrees typically take 3 years, while Master's programs are often completed in just 1 year.",
        },
        {
          heading: 'Post-Study Work Options',
          text: 'The Graduate Route allows graduates to work or look for work for 2 years (3 years for PhD graduates).',
        },
        {
          heading: 'Cultural Experience',
          text: 'Experience rich history, diverse cultures, and explore Europe during breaks with convenient travel options.',
        },
      ],
    },
    {
      title: 'Education System at a Glance',
      description:
        'The UK education system is recognized globally for its high standards and quality assurance mechanisms.',
      cards: [
        {
          color: 'red-500',
          title: 'Undergraduate',
          subtitle: "Bachelor's Degree",
          points: [
            '3-4 years duration',
            'Honours degrees (BA, BSc)',
            'Foundation years available',
            'Focus on independent study',
          ],
        },
        {
          color: 'blue-500',
          title: 'Postgraduate',
          subtitle: "Master's Degree",
          points: [
            '1-2 years duration',
            'Taught vs Research-based',
            'MA, MSc, MBA, LLM',
            'Specialist knowledge',
          ],
        },
        {
          color: 'purple-500',
          title: 'Doctorate',
          subtitle: 'PhD/Doctoral Degree',
          points: [
            '3-4 years duration',
            'Original research',
            'Thesis & defense required',
            'Expert-level knowledge',
          ],
        },
      ],
      note: {
        text: 'The UK uses a unique grading system. First-class honours (70%+) is the highest achievement, followed by Upper second-class honours (2:1, 60-69%), Lower second-class honours (2:2, 50-59%), and Third-class honours (40-49%).',
        color: 'yellow-50',
        border: 'yellow-100',
        textColor: 'yellow-700',
      },
    },
  ],
  topcourse: [
    {
      title: 'Business & Management',
      details: 'MBA, International Business, Finance',
      color: 'bg-amber-50 border-amber-200',
    },
    {
      title: 'Engineering',
      details: 'Civil, Mechanical, Electrical, Aerospace',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Computer Science',
      details: 'AI, Data Science, Cybersecurity',
      color: 'bg-indigo-50 border-indigo-200',
    },
    {
      title: 'Medicine & Healthcare',
      details: 'Medicine, Nursing, Public Health',
      color: 'bg-red-50 border-red-200',
    },
    {
      title: 'Law',
      details: 'LLM, International Law, Commercial Law',
      color: 'bg-purple-50 border-purple-200',
    },
    {
      title: 'Arts & Humanities',
      details: 'Literature, History, Philosophy',
      color: 'bg-pink-50 border-pink-200',
    },
    {
      title: 'Social Sciences',
      details: 'Economics, International Relations',
      color: 'bg-green-50 border-green-200',
    },
    {
      title: 'Media & Communications',
      details: 'Journalism, Digital Media, Film',
      color: 'bg-orange-50 border-orange-200',
    },
    {
      title: 'Natural Sciences',
      details: 'Physics, Chemistry, Biology',
      color: 'bg-cyan-50 border-cyan-200',
    },
  ],
  topuniversites: [
    {
      name: 'University of Oxford',
      location: 'Oxford',
      rank: '1',
      notable: 'Arts, Humanities, Sciences, Medicine',
    },
    {
      name: 'University of Cambridge',
      location: 'Cambridge',
      rank: '3',
      notable: 'Mathematics, Sciences, Engineering',
    },
    {
      name: 'Imperial College London',
      location: 'London',
      rank: '6',
      notable: 'Engineering, Medicine, Science',
    },
    {
      name: 'University College London',
      location: 'London',
      rank: '8',
      notable: 'Arts, Sciences, Engineering, Medicine',
    },
    {
      name: 'University of Edinburgh',
      location: 'Edinburgh',
      rank: '15',
      notable: 'Arts, Medicine, Veterinary Science',
    },
    {
      name: "King's College London",
      location: 'London',
      rank: '35',
      notable: 'Law, Medicine, Humanities',
    },
    {
      name: 'London School of Economics',
      location: 'London',
      rank: '49',
      notable: 'Economics, Politics, Social Sciences',
    },
    {
      name: 'University of Manchester',
      location: 'Manchester',
      rank: '51',
      notable: 'Engineering, Life Sciences, Humanities',
    },
  ],
  intakes: [
    {
      label: 'September/October',
      description: 'Primary intake with most course options available',
      icon: 'S',
    },
    {
      label: 'January/February',
      description: 'Secondary intake with limited course availability',
      icon: 'J',
    },
    {
      label: 'April/May',
      description: 'Limited intake for select programs only',
      icon: 'A',
    },
  ],
  deadlines: [
    {
      title: 'UCAS Undergraduate',
      icon: 'U',
      details: [
        '15 October (Oxford, Cambridge, medicine)',
        '25 January (most undergraduate courses)',
      ],
    },
    {
      title: 'Postgraduate',
      icon: 'P',
      details: ['Varies by university (typically 6–8 months before start)'],
    },
    {
      title: 'Scholarships',
      icon: 'S',
      details: [
        'January–March for most scholarships',
        'Chevening: early November',
      ],
    },
  ],
  addmissionnotes: [
    'Apply early for competitive programs and universities',
    'International students should apply 1–2 months earlier than deadlines',
    'Allow 4–8 weeks for visa processing after receiving acceptance',
    'Some universities have rolling admissions for postgraduate courses',
  ],
  requirementsData: [
    {
      title: 'Undergraduate Requirements',
      color: 'bg-blue-500',
      items: [
        'Completed secondary education (12 years)',
        'High school transcripts/certificates',
        'English proficiency (IELTS 6.0–7.0 or equivalent)',
        'Personal statement',
        'Letters of recommendation (1–2)',
        'Entrance exams (for specific programs)',
        'Portfolio (for art/design courses)',
        'Interview (for competitive programs)',
      ],
    },
    {
      title: 'Postgraduate Requirements',
      color: 'bg-purple-500',
      items: [
        "Bachelor's degree (2:1 or 2:2 minimum)",
        'Academic transcripts',
        'English proficiency (IELTS 6.5–7.5)',
        'Research proposal (for research degrees)',
        'CV/Resume',
        'Statement of purpose',
        'Letters of recommendation (2–3)',
        'GMAT/GRE (for MBA and some programs)',
      ],
    },
  ],
  CountrySpecificRequirements:
    'UK universities evaluate international qualifications against British standards. Many provide country-specific entry requirements on their websites. Foundation programs are available if your qualifications do not meet direct entry requirements.',
  tuitionData: [
    {
      level: 'Undergraduate',
      range: '£15,000 - £40,000',
      average: '£22,000',
      notes: 'Higher for medicine, dentistry',
    },
    {
      level: 'Postgraduate Taught',
      range: '£17,000 - £35,000',
      average: '£23,500',
      notes: 'Higher for MBA programs',
    },
    {
      level: 'MBA',
      range: '£25,000 - £90,000',
      average: '£40,000',
      notes: 'Top schools exceed £70,000',
    },
    {
      level: 'PhD',
      range: '£16,000 - £30,000',
      average: '£20,000',
      notes: 'Funding often available',
    },
    {
      level: 'Medicine & Dentistry',
      range: '£38,000 - £65,000',
      average: '£45,000',
      notes: 'Clinical years are costlier',
    },
  ],
  tuitionNote:
    'Additional costs may include laboratory fees, field trips, and course materials. Some universities charge different fees for different courses within the same level. Always check the specific fees for your chosen program.',
  expenses: [
    { label: 'Accommodation', range: '£500 - £1,200', percentage: 70 },
    { label: 'Food & Groceries', range: '£200 - £300', percentage: 40 },
    { label: 'Transportation', range: '£60 - £150', percentage: 25 },
    { label: 'Utilities', range: '£120 - £200', percentage: 30 },
    { label: 'Mobile/Internet', range: '£40 - £60', percentage: 15 },
    { label: 'Books & Supplies', range: '£40 - £100', percentage: 20 },
    { label: 'Entertainment', range: '£100 - £250', percentage: 35 },
  ],
  regionalCosts: [
    {
      region: 'London',
      level: 'Expensive',
      color: 'text-red-500',
      range: '£1,400 - £2,000+',
    },
    {
      region: 'South East (Oxford, Brighton)',
      level: 'High',
      color: 'text-orange-500',
      range: '£1,100 - £1,500',
    },
    {
      region: 'Major Cities (Manchester, Birmingham)',
      level: 'Moderate',
      color: 'text-yellow-500',
      range: '£900 - £1,300',
    },
    {
      region: 'Northern Cities & Wales',
      level: 'Affordable',
      color: 'text-green-500',
      range: '£800 - £1,100',
    },
  ],
  scholarships: [
    {
      category: 'Government Scholarships',
      color: 'indigo',
      items: [
        {
          title: 'Chevening Scholarships',
          description:
            "Fully-funded scholarships for outstanding emerging leaders to pursue a one-year master's degree.",
        },
        {
          title: 'Commonwealth Scholarships',
          description:
            "For students from Commonwealth countries at master's and doctoral levels.",
        },
        {
          title: 'GREAT Scholarships',
          description:
            '£10,000 towards tuition fees for one-year postgraduate courses.',
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
            'Awarded for academic excellence, typically covering 10-50% of tuition.',
        },
        {
          title: 'Department-Specific Awards',
          description: 'Offered by specific academic departments or faculties.',
        },
        {
          title: 'Country-Specific Scholarships',
          description:
            'Many universities have scholarships for students from specific countries.',
        },
      ],
    },
  ],
  financialSupports: [
    {
      title: 'Part-Time Work',
      description:
        'Students can work up to 20 hours per week during term time.',
    },
    {
      title: 'Internships',
      description: 'Paid internships during vacation periods.',
    },
    {
      title: 'Graduate Assistantships',
      description: 'For PhD students, may include stipend and tuition waiver.',
    },
    {
      title: 'International Student Loans',
      description:
        'Some private lenders offer loans specifically for international students.',
    },
  ],
  TipsforScholarship: [
    'Apply early – many scholarships have deadlines 6-12 months before courses start',
    'Research thoroughly – check university websites and scholarship databases',
    'Prepare strong personal statements highlighting your achievements and goals',
    'Secure strong recommendation letters from academic or professional references',
  ],
  ukVisaData: {
    title: 'UK Student Visa Requirements',
    intro:
      'Most international students will need a Student visa (previously Tier 4) to study in the UK for courses longer than 6 months.',
    sections: [
      {
        title: 'Basic Requirements',
        color: '#3B82F6', // Tailwind 'blue-500'
        items: [
          'An unconditional offer from a licensed student sponsor',
          'Confirmation of Acceptance for Studies (CAS) from your university',
          'Proof of English language proficiency',
          'Proof of financial support for course fees and living expenses',
          'Valid passport or travel document',
          'Tuberculosis (TB) test results if from certain countries',
          'Academic Technology Approval Scheme (ATAS) certificate if applicable',
          'Parental/guardian consent if under 18',
        ],
      },
      {
        title: 'Financial Requirements',
        color: '#F59E0B', // Tailwind 'amber-500'
        items: [
          'First year tuition fees',
          'Living expenses: £1,334/month for London (£12,006 for 9 months)',
          'Living expenses: £1,023/month outside London (£9,207 for 9 months)',
          'Funds must be held for at least 28 consecutive days',
          'Bank statements must be dated within 31 days of application',
        ],
      },
    ],
    facts: [
      'Visa application fee: £363 for students outside the UK',
      'Immigration Health Surcharge: £470 per year of study',
      'Processing time: 3 weeks (may vary by country)',
    ],
    benefits: [
      {
        title: 'Work Rights',
        description:
          'Work up to 20 hours/week during term time and full-time during holidays',
      },
      {
        title: 'Dependants',
        description:
          'Postgraduate students can bring dependants for courses 9+ months',
      },
      {
        title: 'Healthcare',
        description:
          'Access to NHS services after paying Immigration Health Surcharge',
      },
    ],
  },
  visaStepsData: [
    {
      step: '1',
      title: 'Receive University Offer',
      color: 'bg-blue-500',
      content:
        'Accept an unconditional offer from a UK university that is a licensed student sponsor.',
    },
    {
      step: '2',
      title: 'Pay Deposit & Request CAS',
      color: 'bg-indigo-500',
      content:
        'Pay any required deposit to the university to secure your place and request your CAS (Confirmation of Acceptance for Studies).',
    },
    {
      step: '3',
      title: 'Prepare Required Documents',
      color: 'bg-purple-500',
      content:
        'Gather all required documents including passport, financial evidence, academic qualifications, and English language certificates.',
    },
    {
      step: '4',
      title: 'Complete Online Application',
      color: 'bg-pink-500',
      content:
        'Complete the online Student visa application form on the UK government website and pay the visa fee and Immigration Health Surcharge.',
    },
    {
      step: '5',
      title: 'Attend Biometric Appointment',
      color: 'bg-red-500',
      content:
        'Attend an appointment at a visa application center to provide your fingerprints and photo (biometric information).',
    },
    {
      step: '6',
      title: 'Submit Documents',
      color: 'bg-orange-500',
      content:
        'Submit your supporting documents online or at the visa application center as required.',
    },
    {
      step: '7',
      title: 'Wait for Decision',
      color: 'bg-amber-500',
      content:
        'Wait for your visa application to be processed. Standard processing time is typically 3 weeks for Student visas.',
    },
    {
      step: '8',
      title: 'Receive Visa & Travel',
      color: 'bg-green-500',
      content:
        'Once approved, collect your visa/BRP card and make travel arrangements to the UK before your course starts.',
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
            'Up to 20 hours per week during term time',
            'Full-time during official holidays',
            'On-campus employment opportunities',
            'Paid or unpaid work placements (if part of course)',
          ],
        },
        {
          heading: 'Common Student Jobs',
          points: [
            'Retail and hospitality positions',
            'Administrative roles',
            'University jobs (library, ambassadors)',
            'Tutoring and teaching assistantships',
          ],
        },
      ],
    },
    {
      title: 'Post-Graduation',
      color: 'bg-green-500',
      sections: [
        {
          heading: 'Graduate Route Visa',
          points: [
            "2 years for bachelor's and master's graduates",
            '3 years for PhD graduates',
            'No sponsorship required',
            'Unrestricted work rights',
          ],
        },
        {
          heading: 'Skilled Worker Visa',
          points: [
            'Requires job offer from licensed employer',
            'Job must meet skill and salary requirements',
            'Potential path to settlement',
            'Dependent family members can join you',
          ],
        },
      ],
    },
  ],
  jobMarketData: {
    sectors: [
      'Technology and IT',
      'Engineering',
      'Healthcare and life sciences',
      'Finance and banking',
      'Education',
      'Digital marketing',
    ],
    salaries: [
      'London: £30,000 - £35,000',
      'Other major cities: £24,000 - £28,000',
      'Technology sector: £28,000 - £40,000',
      'Finance sector: £30,000 - £45,000',
      'Engineering: £27,000 - £35,000',
    ],
  },

  bestCitiesData: [
    {
      city: 'London',
      image:
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format',
      universities: '40+ universities',
      description:
        'The capital offers unparalleled cultural diversity, career opportunities, and networking possibilities.',
      highlights: [
        'Global connections',
        'Cultural diversity',
        'Career opportunities',
        'Museums and galleries',
      ],
    },
    {
      city: 'Manchester',
      image:
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=600&auto=format',
      universities: '5 universities',
      description:
        'Vibrant, affordable city with excellent music scene and friendly atmosphere.',
      highlights: [
        'Affordable living',
        'Music scene',
        'Sports culture',
        'Tech hub',
      ],
    },
    {
      city: 'Edinburgh',
      image:
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=600&auto=format',
      universities: '4 universities',
      description:
        "Scotland's capital combines historic architecture with festival culture.",
      highlights: [
        'Historic beauty',
        'Festival city',
        'Safe environment',
        'Quality of life',
      ],
    },
    {
      city: 'Birmingham',
      image:
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600&auto=format',
      universities: '5 universities',
      description:
        "The UK's second largest city offers diversity and affordability.",
      highlights: [
        'Central location',
        'Cultural diversity',
        'Modern campus facilities',
        'Affordability',
      ],
    },
    {
      city: 'Glasgow',
      image:
        'https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=600&auto=format',
      universities: '3 universities',
      description:
        'Friendly Scottish city with vibrant arts scene and rich architecture.',
      highlights: [
        'Arts and music',
        'Friendly locals',
        'Affordability',
        'Architecture',
      ],
    },
    {
      city: 'Bristol',
      image:
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format',
      universities: '2 universities',
      description:
        'Creative hub with excellent quality of life and strong job market.',
      highlights: [
        'Creative scene',
        'Tech industry',
        'Green spaces',
        'Harbor area',
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
            title: 'Student Unions',
            description:
              'Representative bodies offering services, societies, and support.',
          },
          {
            title: 'Clubs & Societies',
            description:
              'Over 100 options at most universities, from academic to recreational.',
          },
          {
            title: 'Sports Facilities',
            description: 'Gyms, fields, courts, and competitive sports teams.',
          },
          {
            title: 'Events & Traditions',
            description:
              "Fresher's Week, balls, cultural celebrations, and graduation ceremonies.",
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
            title: 'International Student Office',
            description:
              'Dedicated support for visa, cultural, and academic matters.',
          },
          {
            title: 'Wellbeing Services',
            description:
              'Counseling, mental health support, and disability services.',
          },
          {
            title: 'Career Services',
            description:
              'CV workshops, job fairs, interview preparation, and placement support.',
          },
          {
            title: 'Academic Support',
            description:
              'Study skills, language support, writing centers, and tutoring.',
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
            title: 'University Halls of Residence',
            description:
              'On-campus living with meal plans and social activities.',
            badges: ['Convenient', 'Supportive', 'Social'],
          },
          {
            title: 'Private Student Accommodation',
            description:
              'Purpose-built housing with modern amenities and social spaces.',
            badges: ['Modern', 'Community', 'Independent'],
          },
          {
            title: 'Shared Houses/Flats',
            description:
              'Private rentals shared with other students, often in second year+.',
            badges: ['Affordable', 'Independent', 'Flexible'],
          },
          {
            title: 'Homestay',
            description:
              'Living with a local family, ideal for language immersion.',
            badges: ['Cultural', 'Supportive', 'Family-feel'],
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
            description:
              'Excellent bus and train networks with student discounts available.',
          },
          {
            title: 'Cycling',
            description:
              'Bike-friendly cities with cycle lanes and bike-sharing schemes.',
          },
          {
            title: 'Walking',
            description:
              'Many campus facilities and accommodations within walking distance.',
          },
          {
            title: 'Travel Cards',
            description:
              'Railcards and travel cards offer significant discounts for students.',
          },
        ],
      },
    ],
    additionalInfo: {
      title: 'Healthcare for International Students',
      description:
        'International students studying in the UK for more than 6 months can access the National Health Service (NHS) after paying the Immigration Health Surcharge as part of their visa application.',
      items: [
        {
          title: 'Covered Services',
          points: [
            'GP consultations',
            'Hospital treatment',
            'Emergency care',
            'Maternity care',
          ],
        },
        {
          title: 'Additional Costs',
          points: [
            'Prescription charges',
            'Dental treatment',
            'Optical services',
            'Some specialist services',
          ],
        },
      ],
    },
  },
  latestUpdates2025: [
    {
      title: 'Graduate Route Confirmed',
      description: 'Post-study work opportunities',
      content:
        'The UK Government has reaffirmed its commitment to the Graduate Route visa, allowing international students to stay and work for 2 years after graduation (3 years for PhD graduates). This remains a key attraction for international students seeking work experience in the UK.',
      category: 'Visa Policy',
      gradient: 'from-blue-50 to-sky-50',
      border: 'border-blue-100',
      badgeColor: 'bg-blue-500',
      titleColor: 'text-blue-800',
    },
    {
      title: 'Digital Visa Application',
      description: 'Streamlined process',
      content:
        'The UK is transitioning to a fully digital immigration system. International students can now complete most of their visa application online, with reduced need for physical document submission and biometric appointments in many countries.',
      category: 'Digital Innovation',
      gradient: 'from-purple-50 to-pink-50',
      border: 'border-purple-100',
      badgeColor: 'bg-purple-500',
      titleColor: 'text-purple-800',
    },
    {
      title: 'Increased Funding',
      description: 'More opportunities',
      content:
        'The UK has expanded its international scholarship programs for 2025, with a 20% increase in Chevening Scholarship places and new country-specific scholarship schemes. Several universities have also launched additional funding options focusing on STEM subjects and sustainability.',
      category: 'Scholarships',
      gradient: 'from-amber-50 to-yellow-50',
      border: 'border-amber-100',
      badgeColor: 'bg-amber-500',
      titleColor: 'text-amber-800',
    },
    {
      title: 'Hybrid Learning Options',
      description: 'Flexible study models',
      content:
        'Many UK universities are maintaining hybrid learning options that developed during the pandemic, offering more flexibility for international students. This includes enhanced digital resources, recorded lectures, and some blended learning programs.',
      category: 'Education',
      gradient: 'from-green-50 to-emerald-50',
      border: 'border-green-100',
      badgeColor: 'bg-green-500',
      titleColor: 'text-green-800',
    },
  ],
  policyChanges2025: [
    {
      title: 'Student Visa Financial Requirements',
      content:
        'Financial requirements for student visas have been updated for 2025. Students now need to show higher maintenance funds - £1,334 per month for London (increased from £1,265) and £1,023 for outside London (increased from £1,015).',
    },
    {
      title: 'English Language Requirements',
      content:
        'Some universities have increased their IELTS requirements, with many undergraduate programs now requiring a minimum score of 6.5 overall (up from 6.0) and postgraduate programs requiring 7.0 (up from 6.5).',
    },
    {
      title: 'New High Potential Individual Visa',
      content:
        'The High Potential Individual (HPI) visa has been expanded to include graduates from more international universities, allowing talented individuals to come to the UK without a job offer.',
    },
  ],

  resourcecards: [
    {
      title: 'Course Finder',
      description:
        'Search across all UK universities to find your perfect course based on subject, location, and entry requirements.',
      buttonText: 'Find Your Course',
      gradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-100',
      textColor: 'text-blue-800',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'University Rankings',
      description:
        'Compare UK universities across various metrics including teaching quality, research, and student satisfaction.',
      buttonText: 'View Rankings',
      gradient: 'from-purple-50 to-fuchsia-50',
      borderColor: 'border-purple-100',
      textColor: 'text-purple-800',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      title: 'Visa Checklist',
      description:
        'Interactive tool to help you prepare all necessary documents and meet requirements for your UK student visa.',
      buttonText: 'Get Checklist',
      gradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-100',
      textColor: 'text-green-800',
      buttonColor: 'bg-green-600 hover:bg-green-700',
    },
  ],
  resourceofficialLinks: [
    { label: 'UCAS - Universities and Colleges Admissions Service', href: '#' },
    { label: 'UK Visas and Immigration', href: '#' },
    { label: 'British Council', href: '#' },
    { label: 'Study UK - British Council', href: '#' },
    {
      label: 'UK Council for International Student Affairs (UKCISA)',
      href: '#',
    },
  ],
  resourceguides: [
    { label: 'UK University Application Guide (PDF)', href: '#' },
    { label: 'Student Visa Application Walkthrough (PDF)', href: '#' },
    { label: 'UK Accommodation Guide (PDF)', href: '#' },
    { label: 'Scholarship Application Templates (PDF)', href: '#' },
    { label: 'Pre-departure Checklist (PDF)', href: '#' },
  ],
  resourcetools: [
    {
      title: 'Cost Calculator',
      description:
        'Estimate your total cost of studying including tuition, living expenses, and travel.',
      buttonText: 'Calculate Costs',
    },
    {
      title: 'Scholarship Matcher',
      description:
        "Find scholarships you're eligible for based on your profile and study plans.",
      buttonText: 'Find Scholarships',
    },
    {
      title: 'Document Checker',
      description:
        'Verify you have all required documents for your application and visa process.',
      buttonText: 'Check Documents',
    },
  ],
  faqs: [
    {
      question: 'How long does it take to get a UK student visa?',
      answer:
        "The standard processing time for a UK student visa is around 3 weeks from the date of your biometric appointment. However, this can vary depending on your country and the time of year. During peak periods (July-September), processing times may be longer, so it's advisable to apply at least 3 months before your course start date.",
    },
    {
      question: 'Can I work while studying in the UK?',
      answer:
        'Yes, most international students on a Student visa (previously Tier 4) can work part-time during term time (up to 20 hours per week) and full-time during official holidays. However, there are some restrictions based on your course level and type of institution. PhD students may have different allowances. Always check your specific visa conditions.',
    },
    {
      question:
        'What English language tests are accepted for UK university applications?',
      answer:
        'UK universities typically accept IELTS Academic, TOEFL iBT, PTE Academic, and Cambridge English: Advanced (CAE) or Proficiency (CPE). The required scores vary by institution and program level. For undergraduate courses, an IELTS score of 6.0-6.5 is typically required, while postgraduate programs often require 6.5-7.0. Some universities also accept the Duolingo English Test.',
    },
    {
      question:
        'How much does it cost to study in the UK as an international student?',
      answer:
        'Tuition fees for international students range from £15,000 to £40,000 per year for undergraduate degrees, and £17,000 to £35,000 for postgraduate taught programs. Medical and MBA programs can cost significantly more. Living expenses vary by location, with London being the most expensive (approximately £12,000-£15,000 per year) and other cities being more affordable (£9,000-£12,000 per year).',
    },
    {
      question: 'What scholarships are available for international students?',
      answer:
        "Various scholarships are available, including: Chevening Scholarships (fully-funded master's degrees), Commonwealth Scholarships (for students from Commonwealth countries), GREAT Scholarships (£10,000 towards tuition fees), and University-specific scholarships (merit-based, country-specific, or subject-specific). Additionally, some governments and external organizations offer funding opportunities for students studying abroad.",
    },
    {
      question: 'Can I stay in the UK after completing my studies?',
      answer:
        "Yes, through the Graduate Route visa. This allows international students to stay and work (or look for work) in the UK for 2 years after completing an undergraduate or master's degree, or 3 years after completing a PhD. Alternatively, if you receive a qualifying job offer, you can switch to a Skilled Worker visa which can lead to settlement in the UK.",
    },
    {
      question: 'What are the application deadlines for UK universities?',
      answer:
        'For undergraduate courses through UCAS, the main deadlines are: 15 October for Oxford, Cambridge, medicine, dentistry, and veterinary science; 25 January for most other courses. Many universities also accept later applications if they have places available. For postgraduate courses, deadlines vary by institution but are typically 6-8 months before the course start date. Popular courses may close applications earlier.',
    },
    {
      question: 'Do I need to register with a doctor when I arrive in the UK?',
      answer:
        "Yes, it's highly recommended to register with a local General Practitioner (GP) soon after arriving in the UK. Most universities have a health center on campus or can direct you to nearby medical practices. Registration is free, and once registered, you can access NHS services. You'll need your passport, proof of address, and proof that you're a student (such as an enrollment letter).",
    },
    {
      question: 'How do I open a bank account in the UK?',
      answer:
        "To open a UK bank account, you'll typically need: your passport, Biometric Residence Permit (BRP), proof of address in the UK (such as accommodation contract), and an enrollment letter from your university. Many banks offer student accounts with special benefits. It's advisable to research different banks and their account options before arriving. Some banks also offer international student accounts that you can apply for before leaving your home country.",
    },
    {
      question:
        'What support services do UK universities offer for international students?',
      answer:
        'UK universities typically offer comprehensive support services for international students, including: dedicated international student advisors, orientation programs, visa and immigration advice, academic support and language assistance, career services with international student focus, cultural and social events, wellbeing and counseling services, and accommodation assistance. Many universities also have international student societies representing different countries and regions.',
    },
  ],
};
export default uk;
