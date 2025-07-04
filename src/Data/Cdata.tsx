const CountryDetailsData = {
  uk: {
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
            description:
              'Offered by specific academic departments or faculties.',
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
        description:
          'For PhD students, may include stipend and tuition waiver.',
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
              description:
                'Gyms, fields, courts, and competitive sports teams.',
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
      {
        label: 'UCAS - Universities and Colleges Admissions Service',
        href: '#',
      },
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
        question:
          'Do I need to register with a doctor when I arrive in the UK?',
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
  },
  australia: {
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
        details: [
          'October–December for Semester 1',
          'April–June for Semester 2',
        ],
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
        description:
          'Industry placements included in many courses, often paid.',
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
              description:
                'University-managed residences with community events.',
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
  },

canada: {
    code: 'ca',
    name: 'Canada',
    flagUrl: 'https://flagcdn.com/w320/ca.png',
    heroImage:
      'https://images.unsplash.com/photo-1506973035872-71232c3e08f9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
    quickFacts: {
      population: '41.0 million',
      capital: 'Ottawa',
      language: 'English, French',
      currency: 'Canadian Dollar (CAD)',
      academicYear: 'September to April/May',
    },
    keyDates: {
      fallDeadline: 'January 15 - March 1 (varies by institution)',
      springDeadline:
        'October 1 - November 1 (for January intake, limited programs)',
      summerDeadline: 'February 1 (for May intake, select programs)',
    },
    overviewSections: [
      {
        title: 'Why Study in Canada?',
        description:
          'Canada is a leading destination for international students, offering high-quality education, a welcoming environment, and diverse career opportunities.',
        points: [
          {
            heading: 'Top-Ranked Universities',
            text: 'Home to 30+ universities in the global top 500, known for research and innovation.',
          },
          {
            heading: 'Post-Graduation Work Permit',
            text: 'Eligible students can work up to 3 years after graduation through the Post-Graduation Work Permit (PGWP).',
          },
          {
            heading: 'Multicultural Society',
            text: 'A diverse and inclusive environment with vibrant cities and natural beauty.',
          },
          {
            heading: 'Pathway to Permanent Residency',
            text: 'Study and work experience can lead to permanent residency through programs like Express Entry.',
          },
        ],
      },
      {
        title: 'Education System at a Glance',
        description:
          'Canada’s education system is globally recognized for its academic rigor and focus on practical skills.',
        cards: [
          {
            color: 'red-500',
            title: 'Undergraduate',
            subtitle: 'Bachelor’s Degree',
            points: [
              '3-4 years duration',
              'BA, BSc, BEng, BBA',
              'Co-op programs available',
              'Emphasis on critical thinking',
            ],
          },
          {
            color: 'blue-500',
            title: 'Postgraduate',
            subtitle: 'Master’s Degree',
            points: [
              '1-2 years duration',
              'Thesis or course-based',
              'MA, MSc, MBA, MEng',
              'Research and professional focus',
            ],
          },
          {
            color: 'purple-500',
            title: 'Doctorate',
            subtitle: 'PhD/Doctoral Degree',
            points: [
              '3-5 years duration',
              'Original research contribution',
              'Dissertation and defense',
              'Funding often available',
            ],
          },
        ],
        note: {
          text: 'Canada uses a percentage-based grading system, with 80%+ typically considered equivalent to an A, 70-79% a B, 60-69% a C, and below 60% a fail. GPA is calculated on a 4.0 scale for most institutions.',
          color: 'yellow-50',
          border: 'yellow-100',
          textColor: 'yellow-700',
        },
      },
    ],
    topcourse: [
      {
        title: 'Business & Management',
        details: 'MBA, Finance, Marketing, International Business',
        color: 'bg-amber-50 border-amber-200',
      },
      {
        title: 'Engineering',
        details: 'Civil, Mechanical, Software, Chemical',
        color: 'bg-blue-50 border-blue-200',
      },
      {
        title: 'Computer Science',
        details: 'AI, Data Science, Software Development',
        color: 'bg-indigo-50 border-indigo-200',
      },
      {
        title: 'Health Sciences',
        details: 'Nursing, Public Health, Pharmacy',
        color: 'bg-red-50 border-red-200',
      },
      {
        title: 'Environmental Sciences',
        details: 'Sustainability, Climate Studies, Forestry',
        color: 'bg-green-50 border-green-200',
      },
      {
        title: 'Arts & Humanities',
        details: 'Literature, History, Indigenous Studies',
        color: 'bg-pink-50 border-pink-200',
      },
      {
        title: 'Social Sciences',
        details: 'Psychology, Sociology, Political Science',
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        title: 'Hospitality & Tourism',
        details: 'Hotel Management, Tourism Studies',
        color: 'bg-orange-50 border-orange-200',
      },
      {
        title: 'Natural Sciences',
        details: 'Biology, Physics, Chemistry',
        color: 'bg-teal-50 border-teal-200',
      },
    ],
    topuniversites: [
      {
        name: 'University of Toronto',
        location: 'Toronto, ON',
        rank: '21',
        notable: 'Medicine, Engineering, Business, Arts',
      },
      {
        name: 'University of British Columbia',
        location: 'Vancouver, BC',
        rank: '34',
        notable: 'Environmental Sciences, Forestry, Medicine',
      },
      {
        name: 'McGill University',
        location: 'Montreal, QC',
        rank: '44',
        notable: 'Law, Medicine, Neuroscience',
      },
      {
        name: 'McMaster University',
        location: 'Hamilton, ON',
        rank: '85',
        notable: 'Health Sciences, Engineering',
      },
      {
        name: 'University of Alberta',
        location: 'Edmonton, AB',
        rank: '111',
        notable: 'Energy, Engineering, Agriculture',
      },
      {
        name: 'University of Montreal',
        location: 'Montreal, QC',
        rank: '141',
        notable: 'French-language programs, Health Sciences',
      },
      {
        name: 'University of Waterloo',
        location: 'Waterloo, ON',
        rank: '149',
        notable: 'Computer Science, Engineering, Co-op Programs',
      },
      {
        name: 'University of Ottawa',
        location: 'Ottawa, ON',
        rank: '192',
        notable: 'Law, Social Sciences, Bilingual Programs',
      },
    ],
    intakes: [
      {
        label: 'September',
        description: 'Primary intake with most programs available',
        icon: 'S',
      },
      {
        label: 'January',
        description: 'Secondary intake with limited program options',
        icon: 'J',
      },
      {
        label: 'May',
        description: 'Limited intake for select programs, often summer courses',
        icon: 'M',
      },
    ],
    deadlines: [
      {
        title: 'Undergraduate',
        icon: 'U',
        details: [
          'January 15 - March 1 (major universities)',
          'Rolling admissions for some colleges',
        ],
      },
      {
        title: 'Postgraduate',
        icon: 'P',
        details: ['Varies by university (typically 6-12 months before start)'],
      },
      {
        title: 'Scholarships',
        icon: 'S',
        details: [
          'December - April for most university scholarships',
          'External scholarships may have earlier deadlines',
        ],
      },
    ],
    addmissionnotes: [
      'Apply early for competitive programs like medicine or engineering',
      'International students should check country-specific requirements',
      'Allow 6-12 weeks for study permit processing',
      'Some institutions offer conditional admission for English proficiency',
    ],
    requirementsData: [
      {
        title: 'Undergraduate Requirements',
        color: 'bg-blue-500',
        items: [
          'Completed secondary education (12 years)',
          'High school transcripts and diploma',
          'English proficiency (IELTS 6.5, TOEFL iBT 86+)',
          'Personal statement or essay',
          'Letters of recommendation (1-2, varies)',
          'Entrance exams for specific programs (e.g., MCAT for medicine)',
          'Portfolio for arts programs',
        ],
      },
      {
        title: 'Postgraduate Requirements',
        color: 'bg-purple-500',
        items: [
          'Bachelor’s degree (minimum 3.0/4.0 GPA)',
          'Academic transcripts',
          'English proficiency (IELTS 6.5-7.0, TOEFL iBT 90+)',
          'Statement of purpose',
          'Letters of recommendation (2-3)',
          'CV/Resume',
          'GRE/GMAT for select programs',
          'Research proposal for thesis-based degrees',
        ],
      },
    ],
    CountrySpecificRequirements:
      'Canadian universities assess international qualifications against Canadian standards. Many provide country-specific entry requirements on their websites. Pathway programs or foundation years are available for students who do not meet direct entry requirements.',
    tuitionData: [
      {
        level: 'Undergraduate',
        range: '$20,000 - $50,000',
        average: '$35,000',
        notes: 'Higher for engineering, medicine',
      },
      {
        level: 'Postgraduate Taught',
        range: '$15,000 - $40,000',
        average: '$25,000',
        notes: 'MBA and professional programs may be higher',
      },
      {
        level: 'MBA',
        range: '$30,000 - $100,000',
        average: '$50,000',
        notes: 'Top programs like Rotman or Ivey are costlier',
      },
      {
        level: 'PhD',
        range: '$8,000 - $25,000',
        average: '$15,000',
        notes: 'Funding often covers tuition',
      },
      {
        level: 'Medicine',
        range: '$40,000 - $80,000',
        average: '$55,000',
        notes: 'Limited spots for international students',
      },
    ],
    tuitionNote:
      'Tuition fees vary by program and institution. Additional costs may include student fees, textbooks, and health insurance. Always verify fees with your chosen university.',
    expenses: [
      { label: 'Accommodation', range: '$600 - $1,500', percentage: 65 },
      { label: 'Food & Groceries', range: '$250 - $400', percentage: 35 },
      { label: 'Transportation', range: '$80 - $150', percentage: 20 },
      { label: 'Utilities', range: '$100 - $200', percentage: 25 },
      { label: 'Mobile/Internet', range: '$50 - $100', percentage: 15 },
      { label: 'Books & Supplies', range: '$50 - $150', percentage: 20 },
      { label: 'Entertainment', range: '$100 - $300', percentage: 30 },
    ],
    regionalCosts: [
      {
        region: 'Toronto, Vancouver',
        level: 'Expensive',
        color: 'text-red-500',
        range: '$1,500 - $2,500+',
      },
      {
        region: 'Montreal, Ottawa',
        level: 'Moderate',
        color: 'text-yellow-500',
        range: '$1,000 - $1,800',
      },
      {
        region: 'Calgary, Edmonton',
        level: 'Moderate',
        color: 'text-orange-500',
        range: '$900 - $1,500',
      },
      {
        region: 'Smaller Cities (Halifax, Winnipeg)',
        level: 'Affordable',
        color: 'text-green-500',
        range: '$700 - $1,200',
      },
    ],
    scholarships: [
      {
        category: 'Government Scholarships',
        color: 'indigo',
        items: [
          {
            title: 'Vanier Canada Graduate Scholarships',
            description:
              '$50,000 per year for up to 3 years for doctoral students.',
          },
          {
            title: 'Canada-ASEAN Scholarships',
            description:
              'Short-term study or research funding for Southeast Asian students.',
          },
          {
            title: 'Emerging Leaders in the Americas Program (ELAP)',
            description:
              'Scholarships for students from Latin America and the Caribbean.',
          },
        ],
      },
      {
        category: 'University Scholarships',
        color: 'blue',
        items: [
          {
            title: 'Entrance Scholarships',
            description:
              'Automatic awards based on academic merit, up to $20,000.',
          },
          {
            title: 'Program-Specific Awards',
            description:
              'Offered for fields like engineering, business, or sciences.',
          },
          {
            title: 'International Student Awards',
            description:
              'Country-specific or need-based scholarships for tuition support.',
          },
        ],
      },
    ],
    financialSupports: [
      {
        title: 'Part-Time Work',
        description:
          'Up to 20 hours per week during studies, full-time during breaks.',
      },
      {
        title: 'Co-op Programs',
        description:
          'Paid work terms integrated into many undergraduate programs.',
      },
      {
        title: 'Teaching/Research Assistantships',
        description: 'Available for graduate students, often include stipends.',
      },
      {
        title: 'International Student Loans',
        description: 'Private loans available through select Canadian banks.',
      },
    ],
    TipsforScholarship: [
      'Apply early, as scholarship deadlines may precede admission deadlines',
      'Check university websites for merit-based and country-specific awards',
      'Prepare a strong application with academic achievements and extracurriculars',
      'Secure recommendation letters from credible academic or professional sources',
    ],
    caVisaData: {
      title: 'Canada Study Permit Requirements',
      intro:
        'International students need a study permit to study in Canada for programs longer than 6 months. Some may also require a visitor visa or eTA.',
      sections: [
        {
          title: 'Basic Requirements',
          color: '#3B82F6',
          items: [
            'Letter of acceptance from a Designated Learning Institution (DLI)',
            'Valid passport',
            'Proof of financial support for tuition and living expenses',
            'Proof of ties to home country (e.g., family, job prospects)',
            'English/French proficiency (IELTS, TOEFL, or TEF)',
            'Medical exam (if required)',
            'Police certificate (if required)',
          ],
        },
        {
          title: 'Financial Requirements',
          color: '#F59E0B',
          items: [
            'First-year tuition fees',
            'Living expenses: $20,635 per year (outside Quebec)',
            'Quebec: $15,078 (additional proof for Quebec Acceptance Certificate)',
            'Funds must be shown via bank statements, loans, or sponsorships',
            'GIC (Guaranteed Investment Certificate) option for some countries',
          ],
        },
      ],
      facts: [
        'Study permit fee: $150',
        'Biometrics fee: $85',
        'Processing time: 6-12 weeks (varies by country)',
        'Health insurance mandatory (varies by province)',
      ],
      benefits: [
        {
          title: 'Work Rights',
          description:
            'Work up to 20 hours/week during term, full-time during breaks.',
        },
        {
          title: 'Dependants',
          description: 'Spouse/partner may apply for an open work permit.',
        },
        {
          title: 'Post-Graduation Work',
          description: 'PGWP allows work for up to 3 years after studies.',
        },
      ],
    },
    visaStepsData: [
      {
        step: '1',
        title: 'Receive Letter of Acceptance',
        color: 'bg-blue-500',
        content:
          'Secure admission from a Designated Learning Institution (DLI).',
      },
      {
        step: '2',
        title: 'Gather Documents',
        color: 'bg-indigo-500',
        content:
          'Prepare passport, financial proof, acceptance letter, and other required documents.',
      },
      {
        step: '3',
        title: 'Apply for Study Permit',
        color: 'bg-purple-500',
        content:
          'Submit application online via IRCC portal or at a Visa Application Centre.',
      },
      {
        step: '4',
        title: 'Provide Biometrics',
        color: 'bg-pink-500',
        content: 'Attend a biometric appointment for fingerprints and photo.',
      },
      {
        step: '5',
        title: 'Complete Medical Exam (if required)',
        color: 'bg-red-500',
        content: 'Undergo a medical exam if requested by IRCC.',
      },
      {
        step: '6',
        title: 'Wait for Decision',
        color: 'bg-amber-500',
        content: 'Processing typically takes 6-12 weeks; track status online.',
      },
      {
        step: '7',
        title: 'Travel to Canada',
        color: 'bg-green-500',
        content: 'Receive study permit at port of entry or after arrival.',
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
              'Up to 20 hours per week during term',
              'Full-time during scheduled breaks',
              'On-campus jobs (no work permit required)',
              'Co-op/internship programs (work permit required)',
            ],
          },
          {
            heading: 'Common Student Jobs',
            points: [
              'Retail and food services',
              'Library and campus roles',
              'Tutoring and peer support',
              'Internships in professional fields',
            ],
          },
        ],
      },
      {
        title: 'Post-Graduation',
        color: 'bg-green-500',
        sections: [
          {
            heading: 'Post-Graduation Work Permit (PGWP)',
            points: [
              'Up to 3 years, based on program length',
              'Open work permit, no job offer required',
              'Apply within 180 days of graduation',
              'Eligible for Express Entry PR programs',
            ],
          },
          {
            heading: 'Provincial Nominee Program (PNP)',
            points: [
              'Province-specific pathways to permanent residency',
              'Job offer often required',
              'Focus on in-demand occupations',
              'Varies by province',
            ],
          },
        ],
      },
    ],
    jobMarketData: {
      sectors: [
        'Technology and IT',
        'Healthcare',
        'Engineering',
        'Finance and Banking',
        'Natural Resources',
        'Education',
      ],
      salaries: [
        'Toronto/Vancouver: $45,000 - $60,000',
        'Other cities: $40,000 - $50,000',
        'Technology sector: $50,000 - $80,000',
        'Healthcare: $45,000 - $70,000',
        'Engineering: $50,000 - $75,000',
      ],
    },
    bestCitiesData: [
      {
        city: 'Toronto',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format',
        universities: '4 major universities',
        description:
          'Canada’s largest city, offering cultural diversity and a strong job market.',
        highlights: [
          'Global hub',
          'Diverse culture',
          'Job opportunities',
          'Vibrant nightlife',
        ],
      },
      {
        city: 'Vancouver',
        image:
          'https://images.unsplash.com/photo-1492138786289-d35ea832da43?q=80&w=600&auto=format',
        universities: '2 major universities',
        description:
          'A scenic city with a strong tech and sustainability focus.',
        highlights: [
          'Natural beauty',
          'Tech hub',
          'Outdoor activities',
          'Mild climate',
        ],
      },
      {
        city: 'Montreal',
        image:
          'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b9f?q=80&w=600&auto=format',
        universities: '4 major universities',
        description:
          'A bilingual city with vibrant arts and affordable living.',
        highlights: [
          'Bilingual education',
          'Cultural festivals',
          'Affordability',
          'Arts scene',
        ],
      },
      {
        city: 'Ottawa',
        image:
          'https://images.unsplash.com/photo-1517423440429-4f0e6a2b2d0e?q=80&w=600&auto=format',
        universities: '2 major universities',
        description:
          'The capital city, known for safety and government-related opportunities.',
        highlights: [
          'Safe environment',
          'Government jobs',
          'Museums',
          'Green spaces',
        ],
      },
      {
        city: 'Calgary',
        image:
          'https://images.unsplash.com/photo-1536511460-9d5b87a6f4a3?q=80&w=600&auto=format',
        universities: '1 major university',
        description:
          'A hub for energy and engineering with proximity to the Rockies.',
        highlights: [
          'Energy sector',
          'Outdoor recreation',
          'Modern campuses',
          'Growing tech',
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
              title: 'Student Associations',
              description: 'Organize events, clubs, and advocacy for students.',
            },
            {
              title: 'Clubs & Societies',
              description:
                'Diverse options, including cultural, academic, and recreational clubs.',
            },
            {
              title: 'Sports & Recreation',
              description:
                'Varsity teams, intramural sports, and modern fitness facilities.',
            },
            {
              title: 'Cultural Events',
              description:
                'Multicultural festivals, art shows, and campus traditions.',
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
              title: 'International Student Services',
              description:
                'Visa advice, cultural adjustment, and academic support.',
            },
            {
              title: 'Mental Health Support',
              description: 'Counseling, wellness programs, and peer support.',
            },
            {
              title: 'Career Services',
              description: 'Job fairs, resume workshops, and co-op placements.',
            },
            {
              title: 'Language Support',
              description:
                'English/French language programs for non-native speakers.',
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
              title: 'On-Campus Residences',
              description:
                'Dormitories with meal plans and community activities.',
              badges: ['Convenient', 'Social', 'Supportive'],
            },
            {
              title: 'Off-Campus Housing',
              description:
                'Private rentals or shared apartments near universities.',
              badges: ['Flexible', 'Independent', 'Affordable'],
            },
            {
              title: 'Homestay Programs',
              description:
                'Live with a Canadian family for cultural immersion.',
              badges: ['Cultural', 'Supportive', 'Language practice'],
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
              title: 'Public Transit',
              description: 'Buses, subways, and trains with student discounts.',
            },
            {
              title: 'Cycling',
              description: 'Bike-friendly cities with bike-sharing programs.',
            },
            {
              title: 'Walking',
              description: 'Campuses often designed for pedestrian access.',
            },
            {
              title: 'Student Transit Passes',
              description:
                'Discounted passes like U-Pass for unlimited transit.',
            },
          ],
        },
      ],
      additionalInfo: {
        title: 'Healthcare for International Students',
        description:
          'International students must have health insurance, which varies by province. Some provinces include students in public health plans, while others require private insurance.',
        items: [
          {
            title: 'Covered Provinces',
            points: [
              'British Columbia: MSP (Medical Services Plan)',
              'Alberta: AHCIP (after 3 months residency)',
              'Saskatchewan: Public health coverage',
            ],
          },
          {
            title: 'Private Insurance Required',
            points: [
              'Ontario: UHIP (University Health Insurance Plan)',
              'Quebec: Private insurance or RAMQ (for specific countries)',
              'Other provinces: Check university requirements',
            ],
          },
        ],
      },
    },
    latestUpdates2025: [
      {
        title: 'PGWP Eligibility Expanded',
        description: 'More programs qualify',
        content:
          'In 2025, Canada has expanded eligibility for the Post-Graduation Work Permit to include additional programs at colleges and certain private institutions, increasing opportunities for international students.',
        category: 'Visa Policy',
        gradient: 'from-blue-50 to-sky-50',
        border: 'border-blue-100',
        badgeColor: 'bg-blue-500',
        titleColor: 'text-blue-800',
      },
      {
        title: 'Digital Study Permit Applications',
        description: 'Streamlined process',
        content:
          'IRCC has fully transitioned to online study permit applications, reducing processing times in many cases and improving accessibility for students worldwide.',
        category: 'Digital Innovation',
        gradient: 'from-purple-50 to-pink-50',
        border: 'border-purple-100',
        badgeColor: 'bg-purple-500',
        titleColor: 'text-purple-800',
      },
      {
        title: 'Increased Scholarship Funding',
        description: 'More financial aid',
        content:
          'Canada has increased funding for international scholarships, with new programs targeting students from developing countries and STEM fields, including a 15% increase in Vanier Scholarship seats.',
        category: 'Scholarships',
        gradient: 'from-amber-50 to-yellow-50',
        border: 'border-amber-100',
        badgeColor: 'bg-amber-500',
        titleColor: 'text-amber-800',
      },
      {
        title: 'Hybrid Learning Expansion',
        description: 'Flexible study options',
        content:
          'Many Canadian universities continue to offer hybrid learning, with enhanced online platforms and flexible attendance options for international students.',
        category: 'Education',
        gradient: 'from-green-50 to-emerald-50',
        border: 'border-green-100',
        badgeColor: 'bg-green-500',
        titleColor: 'text-green-800',
      },
    ],
    policyChanges2025: [
      {
        title: 'Increased Financial Requirements',
        content:
          'As of January 2025, the financial requirement for study permits has increased to $20,635 per year (outside Quebec) to reflect rising living costs.',
      },
      {
        title: 'Stricter DLI Compliance',
        content:
          'Canada has introduced stricter regulations for Designated Learning Institutions, ensuring higher quality and accountability for international student programs.',
      },
      {
        title: 'Provincial Attestation Letter (PAL)',
        content:
          'Most provinces now require a Provincial Attestation Letter for study permit applications to manage international student numbers, except for certain exemptions.',
      },
    ],
    resourcecards: [
      {
        title: 'Course Finder',
        description:
          'Explore programs across Canadian universities and colleges based on your interests and qualifications.',
        buttonText: 'Find Your Course',
        gradient: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-100',
        textColor: 'text-blue-800',
        buttonColor: 'bg-blue-600 hover:bg-blue-700',
      },
      {
        title: 'University Rankings',
        description:
          'Compare Canadian institutions by academic quality, research, and student experience.',
        buttonText: 'View Rankings',
        gradient: 'from-purple-50 to-fuchsia-50',
        borderColor: 'border-purple-100',
        textColor: 'text-purple-800',
        buttonColor: 'bg-purple-600 hover:bg-purple-700',
      },
      {
        title: 'Study Permit Checklist',
        description:
          'Interactive tool to ensure you have all documents for your study permit application.',
        buttonText: 'Get Checklist',
        gradient: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-100',
        textColor: 'text-green-800',
        buttonColor: 'bg-green-600 hover:bg-green-700',
      },
    ],
    resourceofficialLinks: [
      {
        label: 'Immigration, Refugees and Citizenship Canada (IRCC)',
        href: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
      },
      {
        label: 'Study in Canada - EduCanada',
        href: 'https://www.educanada.ca',
      },
      { label: 'Universities Canada', href: 'https://www.univcan.ca' },
      {
        label: 'Colleges and Institutes Canada',
        href: 'https://www.collegesinstitutes.ca',
      },
      {
        label: 'Canadian Bureau for International Education',
        href: 'https://cbie.ca',
      },
    ],
    resourceguides: [
      { label: 'Canada Study Permit Guide (PDF)', href: '#' },
      { label: 'Choosing a Canadian University (PDF)', href: '#' },
      { label: 'Cost of Living in Canada (PDF)', href: '#' },
      { label: 'Scholarship Application Guide (PDF)', href: '#' },
      { label: 'Pre-Arrival Checklist (PDF)', href: '#' },
    ],
    resourcetools: [
      {
        title: 'Cost of Living Calculator',
        description:
          'Estimate your study and living expenses across Canadian cities.',
        buttonText: 'Calculate Costs',
      },
      {
        title: 'Scholarship Finder',
        description:
          'Discover scholarships based on your profile and program choice.',
        buttonText: 'Find Scholarships',
      },
      {
        title: 'DLI Checker',
        description:
          'Verify if your institution is a Designated Learning Institution.',
        buttonText: 'Check DLI',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to get a Canadian study permit?',
        answer:
          'Processing times vary by country but typically take 6-12 weeks from the date of application. Apply at least 3-4 months before your program starts to account for delays, especially during peak seasons (May-August).',
      },
      {
        question: 'Can I work while studying in Canada?',
        answer:
          'Yes, international students with a valid study permit can work up to 20 hours per week during academic terms and full-time during scheduled breaks (e.g., summer or winter holidays). On-campus jobs don’t require a separate work permit, but off-campus work does.',
      },
      {
        question:
          'What English language tests are accepted by Canadian universities?',
        answer:
          'Commonly accepted tests include IELTS Academic (6.5+), TOEFL iBT (86+), PTE Academic (60+), and Duolingo English Test (110+). French-language programs may require TEF or TCF. Requirements vary by institution and program.',
      },
      {
        question:
          'How much does it cost to study in Canada as an international student?',
        answer:
          'Tuition fees range from $20,000-$50,000 per year for undergraduate programs and $15,000-$40,000 for postgraduate programs. Living costs are approximately $15,000-$25,000 per year, with higher expenses in cities like Toronto and Vancouver.',
      },
      {
        question:
          'What scholarships are available for international students in Canada?',
        answer:
          'Options include Vanier Canada Graduate Scholarships ($50,000/year for PhD students), Canada-ASEAN Scholarships, ELAP for Latin American students, and university-specific awards like entrance scholarships or merit-based funding.',
      },
      {
        question: 'Can I stay in Canada after completing my studies?',
        answer:
          'Yes, the Post-Graduation Work Permit (PGWP) allows you to work for up to 3 years after graduation, depending on your program length. The PGWP can also support applications for permanent residency through Express Entry or PNPs.',
      },
      {
        question:
          'What are the application deadlines for Canadian universities?',
        answer:
          'Undergraduate deadlines typically range from January 15 to March 1 for September intake. Postgraduate deadlines vary but are often 6-12 months before the program start. Some colleges have rolling admissions.',
      },
      {
        question:
          'Do I need health insurance as an international student in Canada?',
        answer:
          'Yes, health insurance is mandatory. Some provinces (e.g., BC, Alberta) include international students in public health plans, while others (e.g., Ontario, Quebec) require private insurance like UHIP or equivalent.',
      },
      {
        question: 'How do I open a bank account in Canada?',
        answer:
          'You’ll need a passport, study permit, and proof of address (e.g., lease or university letter). Major banks like RBC, TD, and Scotiabank offer student accounts with benefits like no-fee transactions. Some allow pre-arrival account setup.',
      },
      {
        question:
          'What support services do Canadian universities offer for international students?',
        answer:
          'Services include international student offices, visa and immigration support, academic advising, language programs, mental health resources, career services, and cultural integration programs. Most campuses have international student clubs.',
      },
    ],
  },

france: {
    code: 'fr',
    name: 'France',
    flagUrl: 'https://flagcdn.com/w320/fr.png',
    heroImage:
      'https://images.unsplash.com/photo-1502602898650-2c91c0f144f4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
    quickFacts: {
      population: '68.4 million',
      capital: 'Paris',
      language: 'French',
      currency: 'Euro (€)',
      academicYear: 'September/October to May/June',
    },
    keyDates: {
      fallDeadline: 'January 1 - March 31 (via Campus France Études en France)',
      springDeadline:
        'September 1 - October 15 (for January intake, limited programs)',
      summerDeadline: 'Not common (some short-term programs)',
    },
    overviewSections: [
      {
        title: 'Why Study in France?',
        description:
          'France offers a world-class education system, rich cultural heritage, and affordable tuition, making it a top choice for international students.',
        points: [
          {
            heading: 'Prestigious Institutions',
            text: 'Home to grandes écoles and universities ranked among the global top 200.',
          },
          {
            heading: 'Affordable Education',
            text: 'Low tuition fees at public universities, subsidized by the government.',
          },
          {
            heading: 'Cultural Hub',
            text: 'Experience art, history, cuisine, and a central location in Europe.',
          },
          {
            heading: 'Post-Study Work Options',
            text: 'Graduates can stay up to 1 year to seek employment with the APS visa.',
          },
        ],
      },
      {
        title: 'Education System at a Glance',
        description:
          'France’s higher education system combines academic excellence with practical training, recognized globally for its quality.',
        cards: [
          {
            color: 'red-500',
            title: 'Undergraduate',
            subtitle: 'Licence (Bachelor’s)',
            points: [
              '3 years duration',
              'Licence, Licence Professionnelle',
              'Focus on academic and professional skills',
              'Taught in French or English',
            ],
          },
          {
            color: 'blue-500',
            title: 'Postgraduate',
            subtitle: 'Master’s Degree',
            points: [
              '2 years duration',
              'Master (M1, M2)',
              'Research or professional tracks',
              'Increasing English-taught programs',
            ],
          },
          {
            color: 'purple-500',
            title: 'Doctorate',
            subtitle: 'Doctorat (PhD)',
            points: [
              '3-4 years duration',
              'Original research and thesis',
              'Collaboration with research labs',
              'Funding often available',
            ],
          },
        ],
        note: {
          text: 'France uses a 20-point grading scale, where 16-20 is excellent, 14-15.9 is very good, 12-13.9 is good, 10-11.9 is satisfactory, and below 10 is a fail. ECTS credits are used for degree programs.',
          color: 'yellow-50',
          border: 'yellow-100',
          textColor: 'yellow-700',
        },
      },
    ],
    topcourse: [
      {
        title: 'Business & Management',
        details: 'MBA, Finance, Luxury Management',
        color: 'bg-amber-50 border-amber-200',
      },
      {
        title: 'Engineering',
        details: 'Aerospace, Civil, Mechanical, Data Science',
        color: 'bg-blue-50 border-blue-200',
      },
      {
        title: 'Arts & Design',
        details: 'Fashion, Graphic Design, Fine Arts',
        color: 'bg-pink-50 border-pink-200',
      },
      {
        title: 'Culinary Arts',
        details: 'Gastronomy, Pastry, Hospitality',
        color: 'bg-orange-50 border-orange-200',
      },
      {
        title: 'Social Sciences',
        details: 'International Relations, Sociology, Political Science',
        color: 'bg-green-50 border-green-200',
      },
      {
        title: 'Sciences',
        details: 'Physics, Chemistry, Biology',
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        title: 'Law',
        details: 'International Law, European Law',
        color: 'bg-purple-50 border-purple-200',
      },
      {
        title: 'Computer Science',
        details: 'AI, Cybersecurity, Software Engineering',
        color: 'bg-indigo-50 border-indigo-200',
      },
      {
        title: 'Humanities',
        details: 'Literature, History, Philosophy',
        color: 'bg-red-50 border-red-200',
      },
    ],
    topuniversites: [
      {
        name: 'Université PSL (Paris Sciences et Lettres)',
        location: 'Paris',
        rank: '24',
        notable: 'Sciences, Humanities, Engineering',
      },
      {
        name: 'Sorbonne Université',
        location: 'Paris',
        rank: '59',
        notable: 'Humanities, Medicine, Sciences',
      },
      {
        name: 'Université Paris-Saclay',
        location: 'Paris region',
        rank: '71',
        notable: 'Physics, Mathematics, Engineering',
      },
      {
        name: 'École Normale Supérieure de Lyon',
        location: 'Lyon',
        rank: '184',
        notable: 'Sciences, Education, Humanities',
      },
      {
        name: 'École Polytechnique',
        location: 'Palaiseau',
        rank: '192',
        notable: 'Engineering, Mathematics, Technology',
      },
      {
        name: 'Université de Strasbourg',
        location: 'Strasbourg',
        rank: '201-250',
        notable: 'Life Sciences, Chemistry, Law',
      },
      {
        name: 'Université Grenoble Alpes',
        location: 'Grenoble',
        rank: '201-250',
        notable: 'Physics, Computer Science, Engineering',
      },
      {
        name: 'Aix-Marseille Université',
        location: 'Marseille',
        rank: '251-300',
        notable: 'Medicine, Sciences, Humanities',
      },
    ],
    intakes: [
      {
        label: 'September/October',
        description: 'Primary intake for most programs',
        icon: 'S',
      },
      {
        label: 'January/February',
        description: 'Secondary intake for select programs',
        icon: 'J',
      },
    ],
    deadlines: [
      {
        title: 'Undergraduate (via Campus France)',
        icon: 'U',
        details: [
          'January 1 - March 31 (Études en France platform)',
          'May 31 for late applications (if available)',
        ],
      },
      {
        title: 'Postgraduate',
        icon: 'P',
        details: ['Varies by institution, typically March-June'],
      },
      {
        title: 'Scholarships',
        icon: 'S',
        details: [
          'October-January for Eiffel and other major scholarships',
          'University-specific deadlines vary',
        ],
      },
    ],
    addmissionnotes: [
      'Apply via Campus France’s Études en France platform for many countries',
      'French proficiency (DELF/DALF) required for French-taught programs',
      'Allow 2-3 months for visa processing',
      'Some grandes écoles have separate application processes',
    ],
    requirementsData: [
      {
        title: 'Undergraduate Requirements',
        color: 'bg-blue-500',
        items: [
          'High school diploma (12 years of education)',
          'Academic transcripts',
          'French proficiency (DELF B2 or higher) or English (IELTS 6.0-6.5)',
          'Motivation letter',
          'Letters of recommendation (1-2, varies)',
          'Entrance exams for grandes écoles',
          'Portfolio for arts/design programs',
        ],
      },
      {
        title: 'Postgraduate Requirements',
        color: 'bg-purple-500',
        items: [
          'Bachelor’s degree (or equivalent)',
          'Academic transcripts',
          'French (DELF B2) or English (IELTS 6.5-7.0) proficiency',
          'Statement of purpose',
          'CV/Resume',
          'Letters of recommendation (2-3)',
          'Entrance exams for some programs',
          'Research proposal for PhD',
        ],
      },
    ],
    CountrySpecificRequirements:
      'French universities evaluate international qualifications against French standards. The Campus France website provides country-specific requirements. Foundation programs or preparatory courses are available for students who don’t meet direct entry criteria.',
    tuitionData: [
      {
        level: 'Undergraduate (Public Universities)',
        range: '€170 - €3,000',
        average: '€2,770',
        notes: 'Higher for non-EU students',
      },
      {
        level: 'Postgraduate (Public Universities)',
        range: '€243 - €4,000',
        average: '€3,770',
        notes: 'Higher for non-EU students',
      },
      {
        level: 'Grandes Écoles',
        range: '€5,000 - €20,000',
        average: '€12,000',
        notes: 'Varies by institution and program',
      },
      {
        level: 'PhD',
        range: '€380 - €3,000',
        average: '€1,500',
        notes: 'Often funded by research grants',
      },
      {
        level: 'Private Institutions',
        range: '€10,000 - €30,000',
        average: '€15,000',
        notes: 'Business and specialized programs',
      },
    ],
    tuitionNote:
      'Public university fees are subsidized for EU students; non-EU students pay higher ‘differentiated’ fees. Additional costs include CVEC (€100/year) and program-specific fees. Check university websites for exact fees.',
    expenses: [
      { label: 'Accommodation', range: '€400 - €1,200', percentage: 60 },
      { label: 'Food & Groceries', range: '€200 - €350', percentage: 35 },
      { label: 'Transportation', range: '€30 - €100', percentage: 20 },
      { label: 'Utilities', range: '€80 - €150', percentage: 25 },
      { label: 'Mobile/Internet', range: '€20 - €50', percentage: 15 },
      { label: 'Books & Supplies', range: '€50 - €150', percentage: 20 },
      { label: 'Entertainment', range: '€100 - €250', percentage: 30 },
    ],
    regionalCosts: [
      {
        region: 'Paris',
        level: 'Expensive',
        color: 'text-red-500',
        range: '€1,200 - €2,000+',
      },
      {
        region: 'Lyon, Toulouse',
        level: 'Moderate',
        color: 'text-orange-500',
        range: '€800 - €1,200',
      },
      {
        region: 'Strasbourg, Grenoble',
        level: 'Affordable',
        color: 'text-yellow-500',
        range: '€600 - €900',
      },
      {
        region: 'Smaller Cities (Lille, Bordeaux)',
        level: 'Affordable',
        color: 'text-green-500',
        range: '€500 - €800',
      },
    ],
    scholarships: [
      {
        category: 'Government Scholarships',
        color: 'indigo',
        items: [
          {
            title: 'Eiffel Excellence Scholarship',
            description:
              '€1,181/month for master’s, €1,700/month for PhD students.',
          },
          {
            title: 'Campus France Scholarships',
            description: 'Various programs for specific countries and fields.',
          },
          {
            title: 'French Embassy Scholarships',
            description: 'Country-specific funding for international students.',
          },
        ],
      },
      {
        category: 'University Scholarships',
        color: 'blue',
        items: [
          {
            title: 'Merit-Based Scholarships',
            description: 'Awards for academic excellence, up to €10,000/year.',
          },
          {
            title: 'Need-Based Grants',
            description: 'Financial aid for low-income international students.',
          },
          {
            title: 'Program-Specific Awards',
            description: 'For fields like engineering, arts, or sciences.',
          },
        ],
      },
    ],
    financialSupports: [
      {
        title: 'Part-Time Work',
        description:
          'Up to 964 hours/year (approx. 20 hours/week) during studies.',
      },
      {
        title: 'Internships',
        description:
          'Paid internships often required in professional programs.',
      },
      {
        title: 'Research Assistantships',
        description: 'Available for PhD students with stipends.',
      },
      {
        title: 'Housing Aid (CAF)',
        description: 'Government subsidies for student housing costs.',
      },
    ],
    TipsforScholarship: [
      'Apply early (October-January) for major scholarships like Eiffel',
      'Check Campus France and university websites for funding options',
      'Highlight academic achievements and career goals in applications',
      'Include strong recommendation letters from academic references',
    ],
    frVisaData: {
      title: 'France Student Visa Requirements',
      intro:
        'International students from outside the EU/EEA need a VLS-TS (long-stay student visa) for studies longer than 6 months.',
      sections: [
        {
          title: 'Basic Requirements',
          color: '#3B82F6',
          items: [
            'Acceptance letter from a French institution',
            'Campus France authorization (Études en France)',
            'Valid passport',
            'Proof of financial resources (€615/month)',
            'Proof of accommodation in France',
            'French/English proficiency (DELF B2, IELTS 6.0+)',
            'Health insurance (public or private)',
          ],
        },
        {
          title: 'Financial Requirements',
          color: '#F59E0B',
          items: [
            'Minimum €7,380/year (€615/month)',
            'Bank statements or financial guarantee',
            'Funds must be accessible for duration of stay',
            'Scholarship letters can substitute',
          ],
        },
      ],
      facts: [
        'Visa fee: €50 (Campus France) + €99 (VLS-TS)',
        'Processing time: 2-8 weeks',
        'Validation required within 3 months of arrival',
        'Mandatory OFII registration upon arrival',
      ],
      benefits: [
        {
          title: 'Work Rights',
          description: 'Up to 964 hours/year during studies.',
        },
        {
          title: 'APS Visa',
          description: '1-year post-study visa to seek employment.',
        },
        {
          title: 'Healthcare',
          description: 'Access to French social security after registration.',
        },
      ],
    },
    visaStepsData: [
      {
        step: '1',
        title: 'Apply via Campus France',
        color: 'bg-blue-500',
        content:
          'Submit application through Études en France platform (if required by your country).',
      },
      {
        step: '2',
        title: 'Receive Acceptance',
        color: 'bg-indigo-500',
        content:
          'Obtain admission letter from a recognized French institution.',
      },
      {
        step: '3',
        title: 'Gather Documents',
        color: 'bg-purple-500',
        content:
          'Prepare passport, financial proof, accommodation details, and language certificates.',
      },
      {
        step: '4',
        title: 'Apply for VLS-TS Visa',
        color: 'bg-pink-500',
        content: 'Submit visa application at French consulate or VFS Global.',
      },
      {
        step: '5',
        title: 'Attend Interview',
        color: 'bg-red-500',
        content:
          'Attend a visa interview (if required) and provide biometrics.',
      },
      {
        step: '6',
        title: 'Wait for Decision',
        color: 'bg-amber-500',
        content: 'Visa processing typically takes 2-8 weeks.',
      },
      {
        step: '7',
        title: 'Arrive and Validate Visa',
        color: 'bg-green-500',
        content:
          'Validate VLS-TS online and register with OFII within 3 months.',
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
              'Up to 964 hours/year (approx. 20 hours/week)',
              'No restrictions during holidays',
              'On-campus and off-campus jobs',
              'Internships often part of programs',
            ],
          },
          {
            heading: 'Common Student Jobs',
            points: [
              'Retail and hospitality',
              'Tutoring and language teaching',
              'Administrative roles',
              'Internships in business/arts',
            ],
          },
        ],
      },
      {
        title: 'Post-Graduation',
        color: 'bg-green-500',
        sections: [
          {
            heading: 'APS Visa',
            points: [
              '1-year visa to seek employment',
              'Available for master’s and PhD graduates',
              'No job offer required',
              'Path to work visa if employed',
            ],
          },
          {
            heading: 'Talent Passport Visa',
            points: [
              'For highly skilled graduates',
              'Requires job offer or research position',
              'Up to 4 years duration',
              'Path to residency',
            ],
          },
        ],
      },
    ],
    jobMarketData: {
      sectors: [
        'Luxury Goods and Fashion',
        'Technology and IT',
        'Engineering and Aerospace',
        'Tourism and Hospitality',
        'Finance',
        'Research and Academia',
      ],
      salaries: [
        'Paris: €30,000 - €40,000',
        'Other cities: €25,000 - €35,000',
        'Technology sector: €35,000 - €50,000',
        'Engineering: €35,000 - €45,000',
        'Luxury/Fashion: €30,000 - €50,000',
      ],
    },
    bestCitiesData: [
      {
        city: 'Paris',
        image:
          'https://images.unsplash.com/photo-1502602898650-2c91c0f144f4?q=80&w=600&auto=format',
        universities: '20+ universities',
        description:
          'The capital, a global hub for culture, education, and careers.',
        highlights: [
          'Cultural landmarks',
          'Global networking',
          'Fashion hub',
          'Top universities',
        ],
      },
      {
        city: 'Lyon',
        image:
          'https://images.unsplash.com/photo-1516550893923-42d28e5677a7?q=80&w=600&auto=format',
        universities: '4 major universities',
        description:
          'A gastronomic and cultural center with affordable living.',
        highlights: [
          'Food culture',
          'Affordable',
          'History',
          'Vibrant student life',
        ],
      },
      {
        city: 'Toulouse',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format',
        universities: '3 major universities',
        description:
          'Aerospace hub with a warm climate and dynamic student scene.',
        highlights: [
          'Aerospace industry',
          'Sunny weather',
          'Student-friendly',
          'Innovation',
        ],
      },
      {
        city: 'Strasbourg',
        image:
          'https://images.unsplash.com/photo-1580130775562-0b8f7a870b4b?q=80&w=600&auto=format',
        universities: '2 major universities',
        description:
          'A European capital with historic charm and affordable costs.',
        highlights: [
          'European institutions',
          'Affordable living',
          'Cultural blend',
          'Safety',
        ],
      },
      {
        city: 'Bordeaux',
        image:
          'https://images.unsplash.com/photo-1580130775562-0b8f7a870b4b?q=80&w=600&auto=format',
        universities: '2 major universities',
        description: 'Known for wine, culture, and a relaxed lifestyle.',
        highlights: [
          'Wine culture',
          'Affordable',
          'Vibrant arts',
          'Coastal access',
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
              title: 'Student Associations',
              description:
                'Organize events, cultural activities, and social clubs.',
            },
            {
              title: 'Clubs & Societies',
              description:
                'Academic, cultural, and recreational clubs for all interests.',
            },
            {
              title: 'Sports Facilities',
              description: 'University sports centers and competitive teams.',
            },
            {
              title: 'Cultural Events',
              description:
                'Festivals, art exhibitions, and student-led events.',
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
              title: 'International Offices',
              description:
                'Support for visas, integration, and academic advising.',
            },
            {
              title: 'Language Support',
              description: 'French language courses and tutoring.',
            },
            {
              title: 'Career Services',
              description: 'Job fairs, internships, and CV workshops.',
            },
            {
              title: 'Wellbeing Services',
              description: 'Counseling and mental health support.',
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
              title: 'CROUS Residences',
              description: 'Affordable university-managed housing.',
              badges: ['Affordable', 'Social', 'Convenient'],
            },
            {
              title: 'Private Student Housing',
              description: 'Modern residences with amenities.',
              badges: ['Modern', 'Independent', 'Community'],
            },
            {
              title: 'Shared Apartments',
              description: 'Private rentals shared with other students.',
              badges: ['Flexible', 'Affordable', 'Social'],
            },
            {
              title: 'Homestay',
              description: 'Live with a French family for cultural immersion.',
              badges: ['Cultural', 'Language practice', 'Supportive'],
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
              description: 'Buses, metros, and trams with student discounts.',
            },
            {
              title: 'Cycling',
              description: 'Bike-sharing programs in most cities.',
            },
            {
              title: 'Walking',
              description: 'Compact campuses and city centers.',
            },
            {
              title: 'SNCF Youth Card',
              description: 'Discounts on train travel for students under 27.',
            },
          ],
        },
      ],
      additionalInfo: {
        title: 'Healthcare for International Students',
        description:
          'International students can access France’s social security system (Sécurité Sociale) after registering, which covers most medical expenses.',
        items: [
          {
            title: 'Covered Services',
            points: [
              'Doctor visits',
              'Hospital care',
              'Prescriptions (partially)',
              'Emergency services',
            ],
          },
          {
            title: 'Additional Costs',
            points: [
              'Supplementary insurance (mutuelle)',
              'Dental and optical care',
              'Non-reimbursed medications',
            ],
          },
        ],
      },
    },
    latestUpdates2025: [
      {
        title: 'Expanded English-Taught Programs',
        description: 'More accessible options',
        content:
          'French universities have increased English-taught programs by 15% in 2025, especially in business, engineering, and sciences, to attract more international students.',
        category: 'Education',
        gradient: 'from-blue-50 to-sky-50',
        border: 'border-blue-100',
        badgeColor: 'bg-blue-500',
        titleColor: 'text-blue-800',
      },
      {
        title: 'Simplified Visa Process',
        description: 'Streamlined applications',
        content:
          'France has enhanced the Études en France platform, reducing visa processing times for many countries and integrating digital document submission.',
        category: 'Visa Policy',
        gradient: 'from-purple-50 to-pink-50',
        border: 'border-purple-100',
        badgeColor: 'bg-purple-500',
        titleColor: 'text-purple-800',
      },
      {
        title: 'Increased Scholarship Funding',
        description: 'More financial aid',
        content:
          'The Eiffel Scholarship program has expanded by 10% in 2025, with additional funding for STEM and humanities students from developing countries.',
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
          'Many French institutions continue to offer hybrid learning, with online resources and flexible attendance for international students.',
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
          'The minimum financial requirement for student visas remains €615/month, but stricter verification of funds has been introduced for 2025.',
      },
      {
        title: 'Increased CVEC Fee',
        content:
          'The Contribution Vie Étudiante et de Campus (CVEC) fee has risen to €100/year for 2025, applicable to all students.',
      },
      {
        title: 'APS Visa Eligibility',
        content:
          'The APS visa for post-study work has been expanded to include more professional master’s programs, encouraging employment in France.',
      },
    ],
    resourcecards: [
      {
        title: 'Course Finder',
        description:
          'Search for programs across French universities and grandes écoles.',
        buttonText: 'Find Your Course',
        gradient: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-100',
        textColor: 'text-blue-800',
        buttonColor: 'bg-blue-600 hover:bg-blue-700',
      },
      {
        title: 'University Rankings',
        description:
          'Compare French institutions by academic quality and student experience.',
        buttonText: 'View Rankings',
        gradient: 'from-purple-50 to-fuchsia-50',
        borderColor: 'border-purple-100',
        textColor: 'text-purple-800',
        buttonColor: 'bg-purple-600 hover:bg-purple-700',
      },
      {
        title: 'Visa Checklist',
        description:
          'Tool to prepare documents for your VLS-TS student visa application.',
        buttonText: 'Get Checklist',
        gradient: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-100',
        textColor: 'text-green-800',
        buttonColor: 'bg-green-600 hover:bg-green-700',
      },
    ],
    resourceofficialLinks: [
      { label: 'Campus France', href: 'https://www.campusfrance.org' },
      { label: 'France Visas', href: 'https://france-visas.gouv.fr' },
      {
        label: 'Ministry of Higher Education, Research and Innovation',
        href: 'https://www.enseignementsup-recherche.gouv.fr',
      },
      { label: 'CROUS (Student Services)', href: 'https://www.crous-paris.fr' },
      {
        label: 'French Embassy Scholarship Programs',
        href: 'https://www.campusfrance.org/en/scholarships',
      },
    ],
    resourceguides: [
      { label: 'France Study Guide (PDF)', href: '#' },
      { label: 'Student Visa Application Guide (PDF)', href: '#' },
      { label: 'French Language Learning Resources (PDF)', href: '#' },
      { label: 'Housing in France Guide (PDF)', href: '#' },
      { label: 'Scholarship Application Tips (PDF)', href: '#' },
    ],
    resourcetools: [
      {
        title: 'Cost Calculator',
        description:
          'Estimate tuition, living expenses, and other costs in France.',
        buttonText: 'Calculate Costs',
      },
      {
        title: 'Scholarship Finder',
        description: 'Find scholarships based on your profile and study plans.',
        buttonText: 'Find Scholarships',
      },
      {
        title: 'Language Proficiency Checker',
        description: 'Verify French/English requirements for your program.',
        buttonText: 'Check Requirements',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to get a French student visa?',
        answer:
          'Processing typically takes 2-8 weeks, depending on your country and the time of year. Apply via the Études en France platform at least 3 months before your program starts.',
      },
      {
        question: 'Can I work while studying in France?',
        answer:
          'Yes, students can work up to 964 hours/year (approx. 20 hours/week) during their studies. No additional work permit is required for student visa holders.',
      },
      {
        question: 'What language tests are accepted for French universities?',
        answer:
          'For French-taught programs, DELF/DALF (B2 or higher) or TCF is required. For English-taught programs, IELTS (6.0-6.5), TOEFL iBT (80+), or PTE Academic are accepted.',
      },
      {
        question:
          'How much does it cost to study in France as an international student?',
        answer:
          'Public university tuition for non-EU students is €2,770/year (undergraduate) and €3,770/year (postgraduate). Grandes écoles and private institutions charge €5,000-€30,000/year. Living costs range from €7,200-€14,400/year.',
      },
      {
        question:
          'What scholarships are available for international students in France?',
        answer:
          'Options include Eiffel Excellence Scholarships (€1,181-€1,700/month), French Embassy scholarships, Campus France grants, and university-specific merit or need-based awards.',
      },
      {
        question: 'Can I stay in France after completing my studies?',
        answer:
          'Yes, the APS visa allows master’s and PhD graduates to stay for 1 year to seek employment. Graduates with a job offer may transition to a work visa or Talent Passport.',
      },
      {
        question: 'What are the application deadlines for French universities?',
        answer:
          'Undergraduate applications via Campus France are typically January 1-March 31. Postgraduate deadlines vary by institution, often March-June. Grandes écoles may have earlier deadlines.',
      },
      {
        question:
          'Do I need health insurance as an international student in France?',
        answer:
          'Yes, students must register with Sécurité Sociale (free for most) for healthcare coverage. Supplementary private insurance (mutuelle) is optional for additional benefits.',
      },
      {
        question: 'How do I open a bank account in France?',
        answer:
          'You’ll need a passport, student visa, proof of address (e.g., lease), and enrollment letter. Banks like Société Générale and BNP Paribas offer student accounts with low fees.',
      },
      {
        question:
          'What support services do French universities offer for international students?',
        answer:
          'Services include international offices, French language courses, career counseling, housing assistance via CROUS, cultural integration programs, and mental health support.',
      },
    ],
  },

germany: {
    code: 'de',
    name: 'Germany',
    flagUrl: 'https://flagcdn.com/w320/de.png',
    heroImage:
      'https://images.unsplash.com/photo-1505483531137-7ae9b3a7e6e2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
    quickFacts: {
      population: '84.4 million',
      capital: 'Berlin',
      language: 'German',
      currency: 'Euro (€)',
      academicYear: 'October to July (Winter and Summer semesters)',
    },
    keyDates: {
      fallDeadline: 'January 15 - July 15 (Winter semester)',
      springDeadline:
        'July 15 - January 15 (Summer semester, limited programs)',
      summerDeadline: 'Not common (short-term programs only)',
    },
    overviewSections: [
      {
        title: 'Why Study in Germany?',
        description:
          'Germany is a top destination for international students, offering world-class education, low or no tuition fees at public universities, and strong career prospects.',
        points: [
          {
            heading: 'Tuition-Free Education',
            text: 'Most public universities charge no tuition fees, even for international students.',
          },
          {
            heading: 'World-Class Universities',
            text: 'Over 40 universities ranked in the global top 500, with a focus on research.',
          },
          {
            heading: 'Strong Job Market',
            text: 'Excellent career opportunities in engineering, IT, and sciences.',
          },
          {
            heading: 'Cultural and Central Location',
            text: 'Rich history, diverse culture, and easy access to other European countries.',
          },
        ],
      },
      {
        title: 'Education System at a Glance',
        description:
          'Germany’s higher education system is renowned for its academic rigor, research focus, and practical training.',
        cards: [
          {
            color: 'red-500',
            title: 'Undergraduate',
            subtitle: 'Bachelor’s Degree',
            points: [
              '3-4 years duration',
              'Bachelor of Arts/Science (BA/BSc)',
              'Focus on theoretical and practical learning',
              'Many English-taught programs',
            ],
          },
          {
            color: 'blue-500',
            title: 'Postgraduate',
            subtitle: 'Master’s Degree',
            points: [
              '1-2 years duration',
              'Master of Arts/Science (MA/MSc)',
              'Consecutive or non-consecutive programs',
              'Research and professional tracks',
            ],
          },
          {
            color: 'purple-500',
            title: 'Doctorate',
            subtitle: 'PhD',
            points: [
              '3-5 years duration',
              'Individual or structured PhD programs',
              'Research-focused with dissertation',
              'Funding widely available',
            ],
          },
        ],
        note: {
          text: 'Germany uses a 1-5 grading scale, where 1.0 is excellent, 2.0 is good, 3.0 is satisfactory, 4.0 is sufficient, and 5.0 is fail. ECTS credits are used for degree programs.',
          color: 'yellow-50',
          border: 'yellow-100',
          textColor: 'yellow-700',
        },
      },
    ],
    topcourse: [
      {
        title: 'Engineering',
        details: 'Mechanical, Automotive, Electrical, Civil',
        color: 'bg-blue-50 border-blue-200',
      },
      {
        title: 'Computer Science',
        details: 'AI, Data Science, Cybersecurity',
        color: 'bg-indigo-50 border-indigo-200',
      },
      {
        title: 'Business & Management',
        details: 'MBA, International Business, Finance',
        color: 'bg-amber-50 border-amber-200',
      },
      {
        title: 'Natural Sciences',
        details: 'Physics, Chemistry, Biology',
        color: 'bg-cyan-50 border-cyan-200',
      },
      {
        title: 'Medicine & Healthcare',
        details: 'Medicine, Pharmacy, Public Health',
        color: 'bg-red-50 border-red-200',
      },
      {
        title: 'Social Sciences',
        details: 'Economics, Sociology, Political Science',
        color: 'bg-green-50 border-green-200',
      },
      {
        title: 'Arts & Humanities',
        details: 'Literature, History, Philosophy',
        color: 'bg-pink-50 border-pink-200',
      },
      {
        title: 'Architecture',
        details: 'Urban Planning, Design, Sustainable Architecture',
        color: 'bg-orange-50 border-orange-200',
      },
      {
        title: 'Environmental Sciences',
        details: 'Renewable Energy, Climate Studies',
        color: 'bg-teal-50 border-teal-200',
      },
    ],
    topuniversites: [
      {
        name: 'Technical University of Munich (TUM)',
        location: 'Munich',
        rank: '28',
        notable: 'Engineering, Technology, Sciences',
      },
      {
        name: 'LMU Munich',
        location: 'Munich',
        rank: '59',
        notable: 'Humanities, Medicine, Social Sciences',
      },
      {
        name: 'Heidelberg University',
        location: 'Heidelberg',
        rank: '84',
        notable: 'Medicine, Sciences, Humanities',
      },
      {
        name: 'Humboldt-Universität zu Berlin',
        location: 'Berlin',
        rank: '126',
        notable: 'Arts, Humanities, Social Sciences',
      },
      {
        name: 'Freie Universität Berlin',
        location: 'Berlin',
        rank: '131',
        notable: 'Social Sciences, Natural Sciences',
      },
      {
        name: 'RWTH Aachen University',
        location: 'Aachen',
        rank: '147',
        notable: 'Engineering, Technology',
      },
      {
        name: 'University of Freiburg',
        location: 'Freiburg',
        rank: '192',
        notable: 'Life Sciences, Environmental Studies',
      },
      {
        name: 'University of Hamburg',
        location: 'Hamburg',
        rank: '201-250',
        notable: 'Law, Economics, Sciences',
      },
    ],
    intakes: [
      {
        label: 'October (Winter Semester)',
        description: 'Primary intake for most programs',
        icon: 'W',
      },
      {
        label: 'April (Summer Semester)',
        description: 'Secondary intake with limited program options',
        icon: 'S',
      },
    ],
    deadlines: [
      {
        title: 'Undergraduate',
        icon: 'U',
        details: [
          'July 15 (Winter semester, most programs)',
          'January 15 (Summer semester, limited programs)',
        ],
      },
      {
        title: 'Postgraduate',
        icon: 'P',
        details: ['Varies by university, typically May-July for Winter'],
      },
      {
        title: 'Scholarships',
        icon: 'S',
        details: [
          'DAAD: 6-12 months before program start',
          'University-specific: Varies, often December-March',
        ],
      },
    ],
    addmissionnotes: [
      'Apply early for competitive programs like medicine or engineering',
      'German proficiency (TestDaF/DSH) required for German-taught programs',
      'Allow 2-3 months for visa processing',
      'Use uni-assist for many universities’ application processing',
    ],
    requirementsData: [
      {
        title: 'Undergraduate Requirements',
        color: 'bg-blue-500',
        items: [
          'High school diploma (equivalent to German Abitur)',
          'Academic transcripts',
          'German proficiency (TestDaF 4, DSH-2) or English (IELTS 6.0-6.5)',
          'Motivation letter',
          'Letters of recommendation (1-2, varies)',
          'Entrance exam (for restricted programs)',
          'Portfolio for arts/architecture programs',
        ],
      },
      {
        title: 'Postgraduate Requirements',
        color: 'bg-purple-500',
        items: [
          'Bachelor’s degree (or equivalent)',
          'Academic transcripts',
          'German (TestDaF 4, DSH-2) or English (IELTS 6.5-7.0)',
          'Statement of purpose',
          'CV/Resume',
          'Letters of recommendation (2-3)',
          'GRE/GMAT for some programs',
          'Research proposal for PhD',
        ],
      },
    ],
    CountrySpecificRequirements:
      'German universities assess international qualifications via uni-assist or directly. Country-specific requirements are listed on university websites or DAAD. Preparatory courses (Studienkolleg) are available for students whose qualifications don’t meet direct entry standards.',
    tuitionData: [
      {
        level: 'Undergraduate (Public Universities)',
        range: '€0 - €1,500/semester',
        average: '€300/semester',
        notes: 'Semester fees, no tuition at most public universities',
      },
      {
        level: 'Postgraduate (Public Universities)',
        range: '€0 - €1,500/semester',
        average: '€300/semester',
        notes: 'Some English-taught programs may charge higher fees',
      },
      {
        level: 'Private Universities',
        range: '€10,000 - €20,000/year',
        average: '€15,000',
        notes: 'Business, design, and specialized programs',
      },
      {
        level: 'PhD',
        range: '€0 - €1,000/semester',
        average: '€300/semester',
        notes: 'Often funded by research grants or stipends',
      },
      {
        level: 'Medicine/Engineering',
        range: '€0 - €1,500/semester',
        average: '€300/semester',
        notes: 'Semester fees apply, no tuition at public universities',
      },
    ],
    tuitionNote:
      'Most public universities in Germany charge no tuition fees, only a semester contribution (€100-€400) covering administration and transport. Some states (e.g., Baden-Württemberg) charge non-EU students €1,500/semester. Private universities and some master’s programs have higher fees.',
    expenses: [
      { label: 'Accommodation', range: '€300 - €800', percentage: 50 },
      { label: 'Food & Groceries', range: '€150 - €300', percentage: 30 },
      { label: 'Transportation', range: '€30 - €100', percentage: 15 },
      { label: 'Utilities', range: '€80 - €150', percentage: 20 },
      { label: 'Mobile/Internet', range: '€20 - €50', percentage: 10 },
      { label: 'Books & Supplies', range: '€30 - €100', percentage: 15 },
      { label: 'Entertainment', range: '€80 - €200', percentage: 25 },
    ],
    regionalCosts: [
      {
        region: 'Munich, Frankfurt',
        level: 'Expensive',
        color: 'text-red-500',
        range: '€800 - €1,200+',
      },
      {
        region: 'Berlin, Hamburg',
        level: 'Moderate',
        color: 'text-orange-500',
        range: '€600 - €900',
      },
      {
        region: 'Cologne, Stuttgart',
        level: 'Moderate',
        color: 'text-yellow-500',
        range: '€500 - €800',
      },
      {
        region: 'Leipzig, Dresden',
        level: 'Affordable',
        color: 'text-green-500',
        range: '€400 - €600',
      },
    ],
    scholarships: [
      {
        category: 'Government Scholarships',
        color: 'indigo',
        items: [
          {
            title: 'DAAD Scholarships',
            description:
              'Funding for master’s (€934/month) and PhD (€1,300/month) students.',
          },
          {
            title: 'Deutschlandstipendium',
            description:
              '€300/month (half from government, half from private sponsors).',
          },
          {
            title: 'Erasmus+',
            description:
              'Grants for EU and select non-EU students for study mobility.',
          },
        ],
      },
      {
        category: 'University Scholarships',
        color: 'blue',
        items: [
          {
            title: 'Merit-Based Scholarships',
            description: 'Awards for academic excellence, up to €5,000/year.',
          },
          {
            title: 'Need-Based Grants',
            description: 'Support for students with financial difficulties.',
          },
          {
            title: 'Program-Specific Awards',
            description: 'For fields like engineering, IT, or sciences.',
          },
        ],
      },
    ],
    financialSupports: [
      {
        title: 'Part-Time Work',
        description: 'Up to 20 hours/week for non-EU students during studies.',
      },
      {
        title: 'Internships',
        description: 'Paid internships, often mandatory in technical programs.',
      },
      {
        title: 'Research Assistantships',
        description: 'Available for graduate students with stipends.',
      },
      {
        title: 'BAföG (for specific cases)',
        description:
          'Government aid for some international students (e.g., refugees).',
      },
    ],
    TipsforScholarship: [
      'Apply early (6-12 months before program start) for DAAD and other scholarships',
      'Check university and DAAD websites for funding opportunities',
      'Prepare a strong application with academic records and motivation letter',
      'Secure recommendation letters from academic or professional references',
    ],
    deVisaData: {
      title: 'Germany Student Visa Requirements',
      intro:
        'Non-EU/EEA students need a national student visa (Visum zu Studienzwecken) for studies longer than 3 months.',
      sections: [
        {
          title: 'Basic Requirements',
          color: '#3B82F6',
          items: [
            'Admission letter from a recognized German institution',
            'Valid passport',
            'Proof of financial resources (€11,904/year or €992/month)',
            'Health insurance (public or private)',
            'German (TestDaF/DSH) or English (IELTS 6.0+) proficiency',
            'Academic transcripts and certificates',
            'Motivation letter',
          ],
        },
        {
          title: 'Financial Requirements',
          color: '#F59E0B',
          items: [
            'Minimum €11,904/year (€992/month)',
            'Blocked account, scholarship, or financial guarantee',
            'Funds must be accessible for duration of stay',
            'Bank statements or sponsorship letter required',
          ],
        },
      ],
      facts: [
        'Visa fee: €75',
        'Processing time: 6-12 weeks',
        'Residence permit required after arrival',
        'Health insurance mandatory before visa approval',
      ],
      benefits: [
        {
          title: 'Work Rights',
          description:
            'Up to 120 full or 240 half days per year during studies.',
        },
        {
          title: 'Post-Study Work',
          description: '18-month job-seeker visa after graduation.',
        },
        {
          title: 'Healthcare',
          description:
            'Access to public health system with mandatory insurance.',
        },
      ],
    },
    visaStepsData: [
      {
        step: '1',
        title: 'Receive Admission Letter',
        color: 'bg-blue-500',
        content: 'Secure admission from a recognized German university.',
      },
      {
        step: '2',
        title: 'Open Blocked Account',
        color: 'bg-indigo-500',
        content: 'Deposit €11,904 in a blocked account for financial proof.',
      },
      {
        step: '3',
        title: 'Secure Health Insurance',
        color: 'bg-purple-500',
        content: 'Obtain mandatory health insurance (public or private).',
      },
      {
        step: '4',
        title: 'Gather Documents',
        color: 'bg-pink-500',
        content:
          'Prepare passport, admission letter, financial proof, and language certificates.',
      },
      {
        step: '5',
        title: 'Apply for Visa',
        color: 'bg-red-500',
        content: 'Submit application at German embassy or consulate.',
      },
      {
        step: '6',
        title: 'Attend Interview',
        color: 'bg-amber-500',
        content: 'Attend visa interview and provide biometrics.',
      },
      {
        step: '7',
        title: 'Wait for Decision',
        color: 'bg-green-500',
        content: 'Visa processing takes 6-12 weeks; track status online.',
      },
      {
        step: '8',
        title: 'Arrive and Register',
        color: 'bg-blue-500',
        content:
          'Register with local authorities and apply for residence permit.',
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
              '120 full or 240 half days per year (approx. 20 hours/week)',
              'Unlimited during semester breaks',
              'On-campus jobs (e.g., research assistantships)',
              'Internships often part of programs',
            ],
          },
          {
            heading: 'Common Student Jobs',
            points: [
              'Retail and hospitality',
              'Tutoring and language teaching',
              'University roles (library, lab assistants)',
              'Internships in engineering/IT',
            ],
          },
        ],
      },
      {
        title: 'Post-Graduation',
        color: 'bg-green-500',
        sections: [
          {
            heading: 'Job-Seeker Visa',
            points: [
              '18 months to find employment',
              'Available for all graduates',
              'No job offer required',
              'Path to EU Blue Card or work permit',
            ],
          },
          {
            heading: 'EU Blue Card',
            points: [
              'For jobs with €45,300+ annual salary',
              'Path to permanent residency',
              'Requires job offer',
              'Valid for up to 4 years',
            ],
          },
        ],
      },
    ],
    jobMarketData: {
      sectors: [
        'Engineering and Automotive',
        'Information Technology',
        'Healthcare and Medicine',
        'Finance and Consulting',
        'Renewable Energy',
        'Research and Academia',
      ],
      salaries: [
        'Munich/Frankfurt: €40,000 - €55,000',
        'Other cities: €35,000 - €45,000',
        'Engineering: €45,000 - €60,000',
        'IT sector: €45,000 - €65,000',
        'Healthcare: €40,000 - €60,000',
      ],
    },
    bestCitiesData: [
      {
        city: 'Berlin',
        image:
          'https://images.unsplash.com/photo-1505483531137-7ae9b3a7e6e2?q=80&w=600&auto=format',
        universities: '4 major universities',
        description:
          'A vibrant, multicultural capital with a thriving startup scene.',
        highlights: [
          'Startups',
          'Cultural diversity',
          'Affordable living',
          'Nightlife',
        ],
      },
      {
        city: 'Munich',
        image:
          'https://images.unsplash.com/photo-1516550893923-42d28e5677a7?q=80&w=600&auto=format',
        universities: '2 major universities',
        description: 'A hub for engineering, technology, and Bavarian culture.',
        highlights: [
          'Engineering hub',
          'High quality of life',
          'Oktoberfest',
          'Industry connections',
        ],
      },
      {
        city: 'Hamburg',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format',
        universities: '2 major universities',
        description: 'A port city with strong business and media industries.',
        highlights: [
          'Maritime culture',
          'Business opportunities',
          'Vibrant arts',
          'Waterfront',
        ],
      },
      {
        city: 'Heidelberg',
        image:
          'https://images.unsplash.com/photo-1580130775562-0b8f7a870b4b?q=80&w=600&auto=format',
        universities: '1 major university',
        description:
          'A picturesque city with a prestigious university and research focus.',
        highlights: [
          'Historic charm',
          'Research hub',
          'Student-friendly',
          'Safe',
        ],
      },
      {
        city: 'Freiburg',
        image:
          'https://images.unsplash.com/photo-1580130775562-0b8f7a870b4b?q=80&w=600&auto=format',
        universities: '1 major university',
        description:
          'A green city with a focus on sustainability and quality of life.',
        highlights: [
          'Sustainability',
          'Affordable',
          'Outdoor activities',
          'Student community',
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
              description: 'Organize events, advocacy, and student services.',
            },
            {
              title: 'Clubs & Societies',
              description:
                'Academic, cultural, and recreational clubs for all interests.',
            },
            {
              title: 'Sports Facilities',
              description: 'University sports programs and modern facilities.',
            },
            {
              title: 'Cultural Events',
              description: 'Festivals, concerts, and student-led initiatives.',
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
              title: 'International Offices',
              description: 'Visa support, orientation, and academic advising.',
            },
            {
              title: 'Language Support',
              description: 'German language courses and tutoring.',
            },
            {
              title: 'Career Services',
              description: 'Job fairs, internships, and career counseling.',
            },
            {
              title: 'Wellbeing Services',
              description: 'Counseling and mental health support.',
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
              title: 'Student Dormitories',
              description: 'Affordable housing managed by Studentenwerk.',
              badges: ['Affordable', 'Social', 'Convenient'],
            },
            {
              title: 'Private Apartments',
              description: 'Shared or individual rentals near campuses.',
              badges: ['Flexible', 'Independent', 'Modern'],
            },
            {
              title: 'WG (Shared Flats)',
              description: 'Popular shared housing with other students.',
              badges: ['Social', 'Affordable', 'Community'],
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
                'Semester ticket included in university fees for buses/trains.',
            },
            {
              title: 'Cycling',
              description: 'Bike-friendly cities with rental programs.',
            },
            {
              title: 'Walking',
              description: 'Compact campuses and city centers.',
            },
            {
              title: 'Deutschlandticket',
              description: '€49/month for nationwide public transport.',
            },
          ],
        },
      ],
      additionalInfo: {
        title: 'Healthcare for International Students',
        description:
          'International students must have health insurance, either public (e.g., TK, AOK) or private, to enroll at a university and apply for a visa.',
        items: [
          {
            title: 'Covered Services',
            points: [
              'Doctor visits',
              'Hospital care',
              'Prescriptions',
              'Emergency services',
            ],
          },
          {
            title: 'Additional Costs',
            points: [
              'Dental and optical care',
              'Non-essential treatments',
              'Private insurance for older students',
            ],
          },
        ],
      },
    },
    latestUpdates2025: [
      {
        title: 'Expanded English-Taught Programs',
        description: 'More accessible options',
        content:
          'Germany has increased English-taught programs by 10% in 2025, particularly in engineering, IT, and business, to attract more international students.',
        category: 'Education',
        gradient: 'from-blue-50 to-sky-50',
        border: 'border-blue-100',
        badgeColor: 'bg-blue-500',
        titleColor: 'text-blue-800',
      },
      {
        title: 'Simplified Visa Process',
        description: 'Streamlined applications',
        content:
          'Germany has introduced faster visa processing for students from select countries, with digital applications and reduced documentation requirements.',
        category: 'Visa Policy',
        gradient: 'from-purple-50 to-pink-50',
        border: 'border-purple-100',
        badgeColor: 'bg-purple-500',
        titleColor: 'text-purple-800',
      },
      {
        title: 'Increased DAAD Funding',
        description: 'More scholarships',
        content:
          'DAAD has expanded scholarship programs by 12% in 2025, with additional funding for students from developing countries and STEM fields.',
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
          'Many German universities continue to offer hybrid learning, with enhanced online platforms and flexible attendance for international students.',
        category: 'Education',
        gradient: 'from-green-50 to-emerald-50',
        border: 'border-green-100',
        badgeColor: 'bg-green-500',
        titleColor: 'text-green-800',
      },
    ],
    policyChanges2025: [
      {
        title: 'Increased Financial Requirements',
        content:
          'The financial requirement for student visas has increased to €11,904/year (€992/month) for 2025, reflecting rising living costs.',
      },
      {
        title: 'Health Insurance Update',
        content:
          'All students must now provide proof of health insurance before visa approval, with stricter verification processes.',
      },
      {
        title: 'Job-Seeker Visa Extension',
        content:
          'The post-study job-seeker visa has been extended to 18 months for all graduates, with simplified pathways to permanent residency.',
      },
    ],
    resourcecards: [
      {
        title: 'Course Finder',
        description:
          'Search for programs across German universities and colleges.',
        buttonText: 'Find Your Course',
        gradient: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-100',
        textColor: 'text-blue-800',
        buttonColor: 'bg-blue-600 hover:bg-blue-700',
      },
      {
        title: 'University Rankings',
        description:
          'Compare German universities by academic quality and research output.',
        buttonText: 'View Rankings',
        gradient: 'from-purple-50 to-fuchsia-50',
        borderColor: 'border-purple-100',
        textColor: 'text-purple-800',
        buttonColor: 'bg-purple-600 hover:bg-purple-700',
      },
      {
        title: 'Visa Checklist',
        description:
          'Tool to prepare documents for your German student visa application.',
        buttonText: 'Get Checklist',
        gradient: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-100',
        textColor: 'text-green-800',
        buttonColor: 'bg-green-600 hover:bg-green-700',
      },
    ],
    resourceofficialLinks: [
      {
        label: 'DAAD - German Academic Exchange Service',
        href: 'https://www.daad.de',
      },
      { label: 'Study in Germany', href: 'https://www.study-in-germany.de' },
      {
        label: 'Federal Foreign Office - Visa Information',
        href: 'https://www.auswaertiges-amt.de',
      },
      { label: 'uni-assist', href: 'https://www.uni-assist.de' },
      { label: 'Studentenwerk', href: 'https://www.studentenwerke.de' },
    ],
    resourceguides: [
      { label: 'Germany Study Guide (PDF)', href: '#' },
      { label: 'Student Visa Application Guide (PDF)', href: '#' },
      { label: 'German Language Resources (PDF)', href: '#' },
      { label: 'Housing in Germany Guide (PDF)', href: '#' },
      { label: 'Scholarship Application Tips (PDF)', href: '#' },
    ],
    resourcetools: [
      {
        title: 'Cost Calculator',
        description:
          'Estimate tuition, living expenses, and other costs in Germany.',
        buttonText: 'Calculate Costs',
      },
      {
        title: 'Scholarship Finder',
        description: 'Find scholarships based on your profile and study plans.',
        buttonText: 'Find Scholarships',
      },
      {
        title: 'Language Proficiency Checker',
        description: 'Verify German/English requirements for your program.',
        buttonText: 'Check Requirements',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to get a German student visa?',
        answer:
          'Processing typically takes 6-12 weeks, depending on your country. Apply at least 3 months before your program starts to account for delays.',
      },
      {
        question: 'Can I work while studying in Germany?',
        answer:
          'Yes, non-EU students can work up to 120 full or 240 half days per year (approx. 20 hours/week) during studies. No additional work permit is required.',
      },
      {
        question: 'What language tests are accepted for German universities?',
        answer:
          'For German-taught programs, TestDaF (level 4), DSH-2, or Goethe-Zertifikat C1 are required. For English-taught programs, IELTS (6.0-6.5) or TOEFL iBT (80+) are accepted.',
      },
      {
        question:
          'How much does it cost to study in Germany as an international student?',
        answer:
          'Public universities charge no tuition, only semester fees (€100-€400). Some states charge non-EU students €1,500/semester. Living costs range from €7,200-€12,000/year.',
      },
      {
        question:
          'What scholarships are available for international students in Germany?',
        answer:
          'Options include DAAD scholarships (€934-€1,300/month), Deutschlandstipendium (€300/month), Erasmus+, and university-specific merit or need-based awards.',
      },
      {
        question: 'Can I stay in Germany after completing my studies?',
        answer:
          'Yes, graduates can apply for an 18-month job-seeker visa to find employment. A job offer meeting salary thresholds can lead to an EU Blue Card or work permit.',
      },
      {
        question: 'What are the application deadlines for German universities?',
        answer:
          'Winter semester deadlines are typically July 15 for undergraduates and May-July for postgraduates. Summer semester deadlines are January 15. Some programs have earlier deadlines.',
      },
      {
        question:
          'Do I need health insurance as an international student in Germany?',
        answer:
          'Yes, health insurance is mandatory. Public options (e.g., TK, AOK) cost €110-€120/month for students under 30. Private insurance may be required for older students.',
      },
      {
        question: 'How do I open a bank account in Germany?',
        answer:
          'You’ll need a passport, student visa, enrollment certificate, and proof of address. Banks like Deutsche Bank and N26 offer student accounts, some with online setup.',
      },
      {
        question:
          'What support services do German universities offer for international students?',
        answer:
          'Services include international offices, German language courses, academic advising, career services, housing support via Studentenwerk, and mental health resources.',
      },
    ],
  },
  
  Austria: {
      "code": "at",
      "name": "Austria",
      "flagUrl": "https://flagcdn.com/w320/at.png",
      "heroImage": "https://images.unsplash.com/photo-1516550893923-42d28e5677a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "quickFacts": {
        "population": "9.1 million",
        "capital": "Vienna",
        "language": "German (English widely used in academia)",
        "currency": "Euro (€)",
        "academicYear": "October to June"
      },
      "keyDates": {
        "fallDeadline": "September 5 (for October intake)",
        "springDeadline": "February 5 (for March intake)",
        "summerDeadline": "Not common (varies by program)"
      },
      "overviewSections": [
        {
          "title": "Why Study in Austria?",
          "description": "Austria offers a unique blend of academic excellence, cultural heritage, and affordable education in the heart of Europe, making it an attractive destination for international students.",
          "points": [
            {
              "heading": "High-Quality Education",
              "text": "Home to some of Europe’s oldest universities, with 7 institutions in the global top 400."
            },
            {
              "heading": "Affordable Tuition",
              "text": "Low or no tuition fees for EU/EEA students; reasonable fees for non-EU students (€726.72/semester)."
            },
            {
              "heading": "Cultural and Natural Beauty",
              "text": "Study in a country known for its music, art, Alps, and vibrant student cities."
            },
            {
              "heading": "Central Location",
              "text": "Ideal base for exploring Europe, with excellent transport links to neighboring countries."
            }
          ]
        },
        {
          "title": "Education System at a Glance",
          "description": "Austria’s higher education system is renowned for its research focus, flexibility, and international recognition.",
          "cards": [
            {
              "color": "red-500",
              "title": "Undergraduate",
              "subtitle": "Bachelor’s Degree",
              "points": [
                "3 years duration (180 ECTS credits)",
                "BSc, BA, or equivalent",
                "Focus on research and practical skills",
                "German proficiency often required"
              ]
            },
            {
              "color": "blue-500",
              "title": "Postgraduate",
              "subtitle": "Master’s Degree",
              "points": [
                "1-2 years duration (60-120 ECTS credits)",
                "MA, MSc, or specialized degrees",
                "Many programs in English",
                "Thesis or project-based"
              ]
            },
            {
              "color": "purple-500",
              "title": "Doctorate",
              "subtitle": "PhD/Doctoral Degree",
              "points": [
                "3-4 years duration",
                "Research-intensive",
                "Dissertation and defense required",
                "Often funded positions"
              ]
            }
          ],
          "note": {
            "text": "Austria uses the ECTS credit system. A Bachelor’s degree typically requires 180 credits, a Master’s 60-120 credits. Grades range from 1 (excellent) to 5 (fail), with 1-4 being passing grades.",
            "color": "yellow-50",
            "border": "yellow-100",
            "textColor": "yellow-700"
          }
        }
      ],
      "topcourse": [
        {
          "title": "Engineering",
          "details": "Mechanical, Electrical, Civil, Biomedical",
          "color": "bg-blue-50 border-blue-200"
        },
        {
          "title": "Business & Management",
          "details": "International Business, Finance, Entrepreneurship",
          "color": "bg-amber-50 border-amber-200"
        },
        {
          "title": "Computer Science",
          "details": "AI, Software Engineering, Data Science",
          "color": "bg-indigo-50 border-indigo-200"
        },
        {
          "title": "Music & Performing Arts",
          "details": "Classical Music, Musicology, Theatre",
          "color": "bg-pink-50 border-pink-200"
        },
        {
          "title": "Medicine & Health Sciences",
          "details": "Medicine, Public Health, Biotechnology",
          "color": "bg-red-50 border-red-200"
        },
        {
          "title": "Social Sciences",
          "details": "Sociology, Political Science, Psychology",
          "color": "bg-green-50 border-green-200"
        },
        {
          "title": "Environmental Sciences",
          "details": "Sustainability, Climate Studies, Ecology",
          "color": "bg-cyan-50 border-cyan-200"
        },
        {
          "title": "Art & Design",
          "details": "Fine Arts, Graphic Design, Architecture",
          "color": "bg-purple-50 border-purple-200"
        }
      ],
      "topuniversities": [
        {
          "name": "University of Vienna",
          "location": "Vienna",
          "rank": "130",
          "notable": "Humanities, Sciences, Social Sciences"
        },
        {
          "name": "Vienna University of Technology",
          "location": "Vienna",
          "rank": "180",
          "notable": "Engineering, Computer Science, Natural Sciences"
        },
        {
          "name": "University of Innsbruck",
          "location": "Innsbruck",
          "rank": "280",
          "notable": "Physics, Business, Sports Science"
        },
        {
          "name": "Graz University of Technology",
          "location": "Graz",
          "rank": "290",
          "notable": "Engineering, Architecture, Biotechnology"
        },
        {
          "name": "Johannes Kepler University Linz",
          "location": "Linz",
          "rank": "350",
          "notable": "Business, Engineering, Computer Science"
        },
        {
          "name": "University of Graz",
          "location": "Graz",
          "rank": "370",
          "notable": "Humanities, Law, Environmental Sciences"
        }
      ],
      "intakes": [
        {
          "label": "October",
          "description": "Primary intake for most programs",
          "icon": "O"
        },
        {
          "label": "March",
          "description": "Secondary intake for select programs",
          "icon": "M"
        }
      ],
      "deadlines": [
        {
          "title": "Undergraduate",
          "icon": "U",
          "details": [
            "September 5 for October intake",
            "February 5 for March intake (if available)"
          ]
        },
        {
          "title": "Postgraduate",
          "icon": "P",
          "details": ["Varies by university (typically 3-6 months before start)"]
        },
        {
          "title": "Scholarships",
          "icon": "S",
          "details": ["Deadlines vary, often January-March for fall intake"]
        }
      ],
      "admissionnotes": [
        "Apply early for programs requiring German proficiency tests",
        "Non-EU students should check visa processing times (6-12 weeks)",
        "Some programs may require entrance exams or interviews",
        "Check university-specific requirements for international qualifications"
      ],
      "requirementsData": [
        {
          "title": "Undergraduate Requirements",
          "color": "bg-blue-500",
          "items": [
            "Secondary school certificate (equivalent to Austrian Matura)",
            "Transcripts and certificates",
            "German proficiency (B2/C1, e.g., ÖSD, Goethe-Institut) or IELTS 6.0-6.5 for English programs",
            "Entrance exam for specific programs (e.g., medicine, psychology)",
            "Personal statement (for some programs)",
            "Letter of recommendation (optional for some programs)"
          ]
        },
        {
          "title": "Postgraduate Requirements",
          "color": "bg-purple-500",
          "items": [
            "Relevant bachelor’s degree",
            "Academic transcripts",
            "German (B2/C1) or English proficiency (IELTS 6.5-7.0)",
            "CV/Resume",
            "Statement of purpose",
            "Letters of recommendation (1-2)",
            "Research proposal (for research-based programs)"
          ]
        }
      ],
      "CountrySpecificRequirements": "International qualifications are assessed for equivalence to Austrian standards. Non-EU students may need to complete a preparatory program (Vorstudienlehrgang) if their qualifications do not meet direct entry requirements.",
      "tuitionData": [
        {
          "level": "Undergraduate",
          "range": "€0 - €726.72/semester",
          "average": "€363.36 (EU/EEA free, non-EU €726.72)",
          "notes": "Free for EU/EEA students; non-EU pay €726.72/semester"
        },
        {
          "level": "Postgraduate",
          "range": "€0 - €726.72/semester",
          "average": "€363.36",
          "notes": "Some programs may have higher fees for non-EU students"
        },
        {
          "level": "PhD",
          "range": "€0 - €726.72/semester",
          "average": "€0 (often waived)",
          "notes": "Fees often waived if employed as a research assistant"
        },
        {
          "level": "Specialized Programs",
          "range": "€1,500 - €15,000/year",
          "average": "€5,000",
          "notes": "Applies to private universities or specific courses (e.g., MBA)"
        }
      ],
      "tuitionNote": "Public universities charge minimal fees for non-EU students. Private universities and specialized programs (e.g., MBA, international programs) may have significantly higher fees. Additional costs include student union fees (€22.70/semester).",
      "expenses": [
        { "label": "Accommodation", "range": "€400 - €800", "percentage": 60 },
        { "label": "Food & Groceries", "range": "€200 - €350", "percentage": 35 },
        { "label": "Transportation", "range": "€30 - €70", "percentage": 20 },
        { "label": "Utilities", "range": "€100 - €200", "percentage": 25 },
        { "label": "Mobile/Internet", "range": "€20 - €50", "percentage": 15 },
        { "label": "Books & Supplies", "range": "€50 - €100", "percentage": 20 },
        { "label": "Entertainment", "range": "€100 - €200", "percentage": 30 }
      ],
      "regionalCosts": [
        {
          "region": "Vienna",
          "level": "Expensive",
          "color": "text-red-500",
          "range": "€900 - €1,400"
        },
        {
          "region": "Graz, Innsbruck",
          "level": "Moderate",
          "color": "text-yellow-500",
          "range": "€700 - €1,000"
        },
        {
          "region": "Linz, Salzburg",
          "level": "Affordable",
          "color": "text-green-500",
          "range": "€600 - €900"
        }
      ],
      "scholarships": [
        {
          "category": "Government Scholarships",
          "color": "indigo",
          "items": [
            {
              "title": "Ernst Mach Grant",
              "description": "For international students pursuing short-term study or research in Austria."
            },
            {
              "title": "OeAD Scholarships",
              "description": "Various scholarships for undergraduates, graduates, and researchers."
            },
            {
              "title": "ASEA-UNINET Scholarships",
              "description": "For students from specific Asian countries for research and study."
            }
          ]
        },
        {
          "category": "University Scholarships",
          "color": "blue",
          "items": [
            {
              "title": "Merit-Based Scholarships",
              "description": "Offered by universities for academic excellence."
            },
            {
              "title": "Need-Based Grants",
              "description": "Support for students with financial need."
            },
            {
              "title": "Subject-Specific Awards",
              "description": "For fields like music, STEM, or humanities."
            }
          ]
        }
      ],
      "financialSupports": [
        {
          "title": "Part-Time Work",
          "description": "Non-EU students can work up to 20 hours/week with a work permit."
        },
        {
          "title": "Research Assistantships",
          "description": "Paid positions for graduate and PhD students."
        },
        {
          "title": "Student Discounts",
          "description": "Discounts on transport, cultural events, and services."
        },
        {
          "title": "International Student Loans",
          "description": "Limited options available through private lenders."
        }
      ],
      "TipsforScholarship": [
        "Check OeAD and university websites for scholarship opportunities",
        "Apply early, as deadlines are often 6-12 months before the program starts",
        "Provide strong academic records and recommendation letters",
        "Highlight relevant experience in your application"
      ],
      "ukVisaData": {
        "title": "Austrian Student Visa Requirements",
        "intro": "Non-EU/EEA students require a Student Visa (Visa D) or Residence Permit for courses longer than 6 months.",
        "sections": [
          {
            "title": "Basic Requirements",
            "color": "#3B82F6",
            "items": [
              "Admission letter from a recognized Austrian institution",
              "Valid passport",
              "Proof of sufficient funds (€600-€1,200/month, depending on age)",
              "Health insurance (minimum coverage €30,000)",
              "Proof of accommodation in Austria",
              "Police clearance certificate (if required)",
              "Completed application form and photos"
            ]
          },
          {
            "title": "Financial Requirements",
            "color": "#F59E0B",
            "items": [
              "Under 24: €600/month",
              "Over 24: €1,100/month",
              "Funds for 12 months or duration of study",
              "Bank statement or scholarship proof",
              "Funds must be accessible in Austria"
            ]
          }
        ],
        "facts": [
          "Visa application fee: €120-€150",
          "Processing time: 6-12 weeks",
          "Residence permit fee: €160 (additional)"
        ],
        "benefits": [
          {
            "title": "Work Rights",
            "description": "Up to 20 hours/week with a work permit for non-EU students."
          },
          {
            "title": "Healthcare",
            "description": "Access to public healthcare with mandatory insurance."
          },
          {
            "title": "Travel",
            "description": "Visa allows travel within the Schengen Area."
          }
        ]
      },
      "visaStepsData": [
        {
          "step": "1",
          "title": "Receive Admission Letter",
          "color": "bg-blue-500",
          "content": "Secure admission from a recognized Austrian institution."
        },
        {
          "step": "2",
          "title": "Gather Documents",
          "color": "bg-indigo-500",
          "content": "Prepare passport, admission letter, financial proof, insurance, and accommodation details."
        },
        {
          "step": "3",
          "title": "Apply for Visa",
          "color": "bg-purple-500",
          "content": "Submit application at Austrian embassy/consulate or online (if available)."
        },
        {
          "step": "4",
          "title": "Attend Appointment",
          "color": "bg-pink-500",
          "content": "Provide biometrics and submit documents at the embassy or visa center."
        },
        {
          "step": "5",
          "title": "Wait for Decision",
          "color": "bg-amber-500",
          "content": "Processing typically takes 6-12 weeks."
        },
        {
          "step": "6",
          "title": "Travel to Austria",
          "color": "bg-green-500",
          "content": "Collect visa and travel before course start; apply for residence permit within 3 days of arrival."
        }
      ],
      "workOpportunitiesData": [
        {
          "title": "During Studies",
          "color": "bg-indigo-500",
          "sections": [
            {
              "heading": "Working Hours",
              "points": [
                "Non-EU: Up to 20 hours/week with work permit",
                "EU/EEA: No restrictions",
                "No work permit needed for internships related to studies"
              ]
            },
            {
              "heading": "Common Student Jobs",
              "points": [
                "Hospitality (cafes, restaurants)",
                "Retail positions",
                "Tutoring or language teaching",
                "University assistant roles"
              ]
            }
          ]
        },
        {
          "title": "Post-Graduation",
          "color": "bg-green-500",
          "sections": [
            {
              "heading": "Red-White-Red Card",
              "points": [
                "Job-seeker visa for 6 months post-graduation",
                "Requires job offer within skill level",
                "Path to permanent residency"
              ]
            },
            {
              "heading": "EU Blue Card",
              "points": [
                "For highly skilled non-EU graduates",
                "Requires job offer with minimum salary",
                "Valid for 2 years, renewable"
              ]
            }
          ]
        }
      ],
      "jobMarketData": {
        "sectors": [
          "Engineering and Technology",
          "Tourism and Hospitality",
          "Business and Finance",
          "Healthcare",
          "Music and Arts",
          "Environmental Sciences"
        ],
        "salaries": [
          "Vienna: €28,000 - €35,000",
          "Other cities: €24,000 - €30,000",
          "Engineering: €30,000 - €40,000",
          "Business: €28,000 - €38,000",
          "Arts/Teaching: €22,000 - €30,000"
        ]
      },
      "bestCitiesData": [
        {
          "city": "Vienna",
          "image": "https://images.unsplash.com/photo-1516550893923-42d28e5677a3?q=80&w=600&auto=format",
          "universities": "8 universities",
          "description": "The cultural and academic hub of Austria, known for its quality of life and vibrant student scene.",
          "highlights": ["Cultural heritage", "Top universities", "Global connections", "Music and arts"]
        },
        {
          "city": "Graz",
          "image": "https://images.unsplash.com/photo-1599981152602-4c2b4b2b2b2b?q=80&w=600&auto=format",
          "universities": "4 universities",
          "description": "A student-friendly city with a blend of history and innovation.",
          "highlights": ["Affordable living", "Tech hub", "Vibrant nightlife", "Cultural events"]
        },
        {
          "city": "Innsbruck",
          "image": "https://images.unsplash.com/photo-1534183400870-4b7e37e7e2b9?q=80&w=600&auto=format",
          "universities": "3 universities",
          "description": "Nestled in the Alps, ideal for outdoor enthusiasts and academic excellence.",
          "highlights": ["Alpine lifestyle", "Sports science", "Research focus", "Scenic beauty"]
        },
        {
          "city": "Salzburg",
          "image": "https://images_UNSplash.com/photo-1514890277511-1e5b9f3119e3?q=80&w=600&auto=format",
          "universities": "2 universities",
          "description": "Birthplace of Mozart, offering a rich cultural and academic environment.",
          "highlights": ["Music and arts", "Historic charm", "Tourism", "Compact city"]
        },
        {
          "city": "Linz",
          "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format",
          "universities": "2 universities",
          "description": "A modern industrial city with a growing tech and arts scene.",
          "highlights": ["Tech industry", "Cultural festivals", "Affordability", "Modern campuses"]
        }
      ],
      "studentLifeData": {
        "title": "Student Life and Support Services",
        "icon": {
          "bg": "bg-purple-100",
          "color": "text-purple-600"
        },
        "sections": [
          {
            "title": "Campus Life",
            "bg": "bg-purple-50",
            "border": "border-purple-100",
            "textColor": "text-purple-800",
            "items": [
              {
                "title": "Student Organizations",
                "description": "Active student unions and clubs for academic and cultural activities."
              },
              {
                "title": "Cultural Events",
                "description": "Music festivals, art exhibitions, and university events."
              },
              {
                "title": "Sports Facilities",
                "description": "Access to gyms, sports clubs, and outdoor activities."
              },
              {
                "title": "Student Discounts",
                "description": "Discounts on transport, museums, and cultural events."
              }
            ]
          },
          {
            "title": "Support Services",
            "bg": "bg-blue-50",
            "border": "border-blue-100",
            "textColor": "text-blue-800",
            "items": [
              {
                "title": "International Office",
                "description": "Visa support, orientation, and integration programs."
              },
              {
                "title": "Language Support",
                "description": "Free or affordable German language courses."
              },
              {
                "title": "Career Services",
                "description": "Job fairs, internships, and career counseling."
              },
              {
                "title": "Wellbeing Support",
                "description": "Counseling and mental health services."
              }
            ]
          },
          {
            "title": "Accommodation Options",
            "bg": "bg-green-50",
            "border": "border-green-100",
            "textColor": "text-green-800",
            "items": [
              {
                "title": "Student Dormitories",
                "description": "Affordable on-campus or university-managed housing.",
                "badges": ["Affordable", "Social", "Convenient"]
              },
              {
                "title": "Private Apartments",
                "description": "Shared or individual flats, often in city centers.",
                "badges": ["Independent", "Flexible", "Modern"]
              },
              {
                "title": "WG (Shared Flats)",
                "description": "Popular shared living with other students.",
                "badges": ["Affordable", "Social", "Local experience"]
              }
            ]
          },
          {
            "title": "Transportation",
            "bg": "bg-amber-50",
            "border": "border-amber-100",
            "textColor": "text-amber-800",
            "items": [
              {
                "title": "Public Transport",
                "description": "Efficient buses, trams, and trains with student discounts."
              },
              {
                "title": "Cycling",
                "description": "Bike-friendly cities with rental schemes."
              },
              {
                "title": "Semester Ticket",
                "description": "Affordable public transport passes for students."
              }
            ]
          }
        ],
        "additionalInfo": {
          "title": "Healthcare for International Students",
          "description": "Students must have health insurance to study in Austria. EU/EEA students can use their EHIC card, while non-EU students need private or public Austrian insurance.",
          "items": [
            {
              "title": "Covered Services",
              "points": ["GP visits", "Hospital care", "Emergency services", "Prescriptions"]
            },
            {
              "title": "Additional Costs",
              "points": ["Dental care", "Specialist treatments", "Private insurance fees"]
            }
          ]
        }
      },
      "latestUpdates2025": [
        {
          "title": "Increased Scholarship Funding",
          "description": "More opportunities for international students",
          "content": "Austria has increased funding for OeAD and Ernst Mach Grants in 2025, with a focus on STEM and sustainability programs.",
          "category": "Scholarships",
          "gradient": "from-amber-50 to-yellow-50",
          "border": "border-amber-100",
          "badgeColor": "bg-amber-500",
          "titleColor": "text-amber-800"
        },
        {
          "title": "Expanded English Programs",
          "description": "More study options",
          "content": "Several universities have introduced new English-taught bachelor’s and master’s programs, particularly in technology and business, to attract more international students.",
          "category": "Education",
          "gradient": "from-green-50 to-emerald-50",
          "border": "border-green-100",
          "badgeColor": "bg-green-500",
          "titleColor": "text-green-800"
        },
        {
          "title": "Digital Visa Processing",
          "description": "Streamlined applications",
          "content": "Austria is piloting a digital visa application system in select countries, reducing processing times for student visas.",
          "category": "Visa Policy",
          "gradient": "from-purple-50 to-pink-50",
          "border": "border-purple-100",
          "badgeColor": "bg-purple-500",
          "titleColor": "text-purple-800"
        }
      ],
      "policyChanges2025": [
        {
          "title": "Updated Financial Requirements",
          "content": "Non-EU students must now show €600-€1,200/month (depending on age) to meet visa financial requirements, slightly increased from 2024."
        },
        {
          "title": "German Language Flexibility",
          "content": "Some universities now accept lower German proficiency (B2) for programs with English instruction, provided students enroll in German courses."
        },
        {
          "title": "Extended Red-White-Red Card",
          "content": "The job-seeker visa for graduates has been extended to 12 months for certain STEM fields, encouraging retention of skilled talent."
        }
      ],
      "resourcecards": [
        {
          "title": "Course Finder",
          "description": "Explore programs offered by Austrian universities based on subject and language.",
          "buttonText": "Find Your Course",
          "gradient": "from-blue-50 to-indigo-50",
          "borderColor": "border-blue-100",
          "textColor": "text-blue-800",
          "buttonColor": "bg-blue-600 hover:bg-blue-700"
        },
        {
          "title": "University Rankings",
          "description": "Compare Austrian universities by academic reputation and student satisfaction.",
          "buttonText": "View Rankings",
          "gradient": "from-purple-50 to-fuchsia-50",
          "borderColor": "border-purple-100",
          "textColor": "text-purple-800",
          "buttonColor": "bg-purple-600 hover:bg-purple-700"
        },
        {
          "title": "Visa Checklist",
          "description": "Ensure you have all documents for your Austrian student visa application.",
          "buttonText": "Get Checklist",
          "gradient": "from-green-50 to-emerald-50",
          "borderColor": "border-green-100",
          "textColor": "text-green-800",
          "buttonColor": "bg-green-600 hover:bg-green-700"
        }
      ],
      "resourceofficialLinks": [
        {
          "label": "OeAD - Austria’s Agency for Education and Internationalisation",
          "href": "https://oead.at/en/"
        },
        {
          "label": "Study in Austria",
          "href": "https://studyinaustria.at/"
        },
        {
          "label": "Austrian Embassy Visa Services",
          "href": "https://www.bmeia.gv.at/en/"
        },
        {
          "label": "Austrian Federal Ministry of Education",
          "href": "https://www.bmbwf.gv.at/en.html"
        }
      ],
      "resourceguides": [
        { "label": "Guide to Studying in Austria (PDF)", "href": "#" },
        { "label": "Austrian Student Visa Guide (PDF)", "href": "#" },
        { "label": "Living in Austria for Students (PDF)", "href": "#" },
        { "label": "Scholarship Application Guide (PDF)", "href": "#" }
      ],
      "resourcetools": [
        {
          "title": "Cost Calculator",
          "description": "Estimate tuition, living costs, and other expenses for studying in Austria.",
          "buttonText": "Calculate Costs"
        },
        {
          "title": "Scholarship Finder",
          "description": "Discover scholarships based on your nationality and field of study.",
          "buttonText": "Find Scholarships"
        },
        {
          "title": "Language Test Finder",
          "description": "Locate German and English proficiency test centers.",
          "buttonText": "Find Tests"
        }
      ],
      "faqs": [
        {
          "question": "Do I need to speak German to study in Austria?",
          "answer": "German is the primary language of instruction for most undergraduate programs, requiring B2/C1 proficiency. However, many master’s and PhD programs are offered in English, requiring IELTS 6.0-7.0 or equivalent. Some universities offer German courses for international students."
        },
        {
          "question": "How much does it cost to study in Austria?",
          "answer": "EU/EEA students pay no tuition fees at public universities, only a student union fee (€22.70/semester). Non-EU students pay €726.72/semester. Living costs range from €600-€1,400/month, depending on the city. Private universities have higher fees (€1,500-€15,000/year)."
        },
        {
          "question": "Can I work while studying in Austria?",
          "answer": "Non-EU students can work up to 20 hours/week with a work permit, while EU/EEA students face no restrictions. Common jobs include hospitality, tutoring, and university assistant roles. Work permits are issued based on labor market needs."
        },
        {
          "question": "What are the visa requirements for non-EU students?",
          "answer": "Non-EU students need a Visa D (up to 6 months) or Residence Permit-Student (over 6 months). Requirements include an admission letter, proof of funds (€600-€1,200/month), health insurance, accommodation proof, and a valid passport. Processing takes 6-12 weeks."
        },
        {
          "question": "Are scholarships available for international students?",
          "answer": "Yes, options include Ernst Mach Grants, OeAD scholarships, and university-specific awards. Many focus on academic merit, research, or specific countries. Deadlines are typically 6-12 months before the program starts."
        },
        {
          "question": "Can I stay in Austria after graduation?",
          "answer": "Non-EU graduates can apply for a Red-White-Red Card (6-12 months) to seek employment. If you secure a qualifying job, you can transition to a work visa or EU Blue Card, which may lead to permanent residency."
        },
        {
          "question": "What is the application process for Austrian universities?",
          "answer": "Applications are submitted directly to universities or via platforms like Uni-Assist for international students. Deadlines are September 5 for October intake and February 5 for March intake. Requirements include academic transcripts, language certificates, and a personal statement."
        },
        {
          "question": "How do I access healthcare in Austria as a student?",
          "answer": "Students must have health insurance. EU/EEA students use their EHIC card, while non-EU students need Austrian public or private insurance (€60-€150/month). Register with a local doctor to access healthcare services."
        },
        {
          "question": "What support services are available for international students?",
          "answer": "Universities offer international offices, language courses, career services, and counseling. Student unions organize cultural and social events. Many cities have affordable dormitories and student discounts on transport and entertainment."
        }
      ]
    },
    
  hungary: {
        "code": "hu",
        "name": "Hungary",
        "flagUrl": "https://flagcdn.com/w320/hu.png",
        "heroImage": "https://images.unsplash.com/photo-1563900446930-1b95a7a7f6d3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        "quickFacts": {
          "population": "9.7 million",
          "capital": "Budapest",
          "language": "Hungarian (English widely used in academia)",
          "currency": "Hungarian Forint (HUF, ~364 HUF = 1 EUR)",
          "academicYear": "September to June"
        },
        "keyDates": {
          "fallDeadline": "January 15 (for September intake, Stipendium Hungaricum)",
          "springDeadline": "November 15 (for February intake, select programs)",
          "summerDeadline": "Not common (varies by program)"
        },
        "overviewSections": [
          {
            "title": "Why Study in Hungary?",
            "description": "Hungary offers affordable, high-quality education in a culturally rich and safe environment, attracting over 38,000 international students annually.",
            "points": [
              {
                "heading": "Affordable Education",
                "text": "Low tuition fees (1,500–5,000 EUR/year) compared to Western Europe."
              },
              {
                "heading": "Globally Recognized Degrees",
                "text": "Degrees accepted worldwide, with strong programs in medicine, engineering, and business."
              },
              {
                "heading": "Vibrant Culture",
                "text": "Rich history, architecture, thermal baths, and festivals in cities like Budapest."
              },
              {
                "heading": "Central European Hub",
                "text": "Ideal for affordable travel to neighboring countries."
              }
            ]
          },
          {
            "title": "Education System at a Glance",
            "description": "Hungary’s higher education system is known for its research focus and diverse programs, with many offered in English.",
            "cards": [
              {
                "color": "red-500",
                "title": "Undergraduate",
                "subtitle": "Bachelor’s Degree",
                "points": [
                  "3–4 years duration (180–240 ECTS credits)",
                  "BSc, BA, or equivalent",
                  "Many English-taught programs",
                  "Practical and research-oriented"
                ]
              },
              {
                "color": "blue-500",
                "title": "Postgraduate",
                "subtitle": "Master’s Degree",
                "points": [
                  "1–2 years duration (60–120 ECTS credits)",
                  "MA, MSc, or MBA",
                  "English-taught options available",
                  "Thesis required for most programs"
                ]
              },
              {
                "color": "purple-500",
                "title": "Doctorate",
                "subtitle": "PhD/Doctoral Degree",
                "points": [
                  "4 years duration (240 ECTS credits)",
                  "Research-intensive",
                  "Dissertation and defense required",
                  "Fully funded options available"
                ]
              }
            ],
            "note": {
              "text": "Hungary uses the ECTS credit system. Grades range from 1 (fail) to 5 (excellent), with 2–5 being passing grades. Many programs, especially in medicine and STEM, are offered in English, and some universities accept admissions without IELTS.",
              "color": "yellow-50",
              "border": "yellow-100",
              "textColor": "yellow-700"
            }
          }
        ],
        "topcourse": [
          {
            "title": "Medicine & Dentistry",
            "details": "General Medicine, Dentistry, Pharmacy",
            "color": "bg-red-50 border-red-200"
          },
          {
            "title": "Engineering",
            "details": "Mechanical, Electrical, Civil, AI",
            "color": "bg-blue-50 border-blue-200"
          },
          {
            "title": "Business & Management",
            "details": "MBA, Finance, International Business",
            "color": "bg-amber-50 border-amber-200"
          },
          {
            "title": "Computer Science",
            "details": "Software Engineering, Data Science, Cybersecurity",
            "color": "bg-indigo-50 border-indigo-200"
          },
          {
            "title": "Social Sciences",
            "details": "Psychology, International Relations, Sociology",
            "color": "bg-green-50 border-green-200"
          },
          {
            "title": "Arts & Humanities",
            "details": "History, Literature, Cultural Studies",
            "color": "bg-purple-50 border-purple-200"
          },
          {
            "title": "Natural Sciences",
            "details": "Biology, Chemistry, Physics",
            "color": "bg-cyan-50 border-cyan-200"
          },
          {
            "title": "Agriculture & Environmental Sciences",
            "details": "Agronomy, Environmental Management",
            "color": "bg-teal-50 border-teal-200"
          }
        ],
        "topuniversities": [
          {
            "name": "University of Szeged",
            "location": "Szeged",
            "rank": "501–510",
            "notable": "Medicine, Pharmacy, Sciences"
          },
          {
            "name": "Eötvös Loránd University (ELTE)",
            "location": "Budapest",
            "rank": "601–650",
            "notable": "Law, Psychology, Informatics"
          },
          {
            "name": "University of Debrecen",
            "location": "Debrecen",
            "rank": "671–680",
            "notable": "Medicine, Engineering, Agriculture"
          },
          {
            "name": "Semmelweis University",
            "location": "Budapest",
            "rank": "201–250 (Medicine)",
            "notable": "Health Sciences, Dentistry, Pharmacy"
          },
          {
            "name": "Budapest University of Technology and Economics (BME)",
            "location": "Budapest",
            "rank": "701–750",
            "notable": "Engineering, Technology, AI"
          },
          {
            "name": "Central European University (CEU)",
            "location": "Budapest/Vienna",
            "rank": "Top 100 (Social Sciences)",
            "notable": "Social Sciences, Humanities, Law"
          }
        ],
        "intakes": [
          {
            "label": "September",
            "description": "Primary intake for most programs",
            "icon": "S"
          },
          {
            "label": "February",
            "description": "Secondary intake for select programs",
            "icon": "F"
          }
        ],
        "deadlines": [
          {
            "title": "Undergraduate",
            "icon": "U",
            "details": [
              "January 15 for September intake (Stipendium Hungaricum)",
              "November 15 for February intake (if available)"
            ]
          },
          {
            "title": "Postgraduate",
            "icon": "P",
            "details": ["January 15 for September intake, varies by university"]
          },
          {
            "title": "Scholarships",
            "icon": "S",
            "details": ["January 15 for Stipendium Hungaricum, varies for others"]
          }
        ],
        "admissionnotes": [
          "Many programs do not require IELTS; English proficiency can be proven via interviews or prior education",
          "Non-EU students need a residence permit for studies over 90 days",
          "Check university-specific application fees (e.g., $150 at Debrecen)",
          "Early application recommended for Stipendium Hungaricum (November–January)"
        ],
        "requirementsData": [
          {
            "title": "Undergraduate Requirements",
            "color": "bg-blue-500",
            "items": [
              "High school diploma (translated into English or Hungarian)",
              "Academic transcripts",
              "English proficiency (IELTS 5.5–6.5 or equivalent, often waived)",
              "Entrance exam for specific programs (e.g., medicine)",
              "Motivation letter",
              "Recommendation letter (optional for some programs)"
            ]
          },
          {
            "title": "Postgraduate Requirements",
            "color": "bg-purple-500",
            "items": [
              "Relevant bachelor’s degree",
              "Academic transcripts",
              "English proficiency (IELTS 6.0–7.0 or equivalent, often waived)",
              "CV/Resume",
              "Motivation letter",
              "Recommendation letters (1–2)",
              "Research proposal (for research-based programs)"
            ]
          }
        ],
        "CountrySpecificRequirements": "International qualifications must be equivalent to Hungarian standards. Non-EU students may need to submit documents via Uni-Assist or directly to universities. Some programs require entrance exams or interviews, especially in medicine.",
        "tuitionData": [
          {
            "level": "Undergraduate",
            "range": "€1,500 - €5,000/year",
            "average": "€3,000",
            "notes": "Medicine/Dentistry: €12,000–€16,000/year"
          },
          {
            "level": "Postgraduate",
            "range": "€2,000 - €15,000/year",
            "average": "€5,000",
            "notes": "MBA/specialized programs may cost more"
          },
          {
            "level": "PhD",
            "range": "€1,500 - €5,000/year",
            "average": "€3,000",
            "notes": "Often waived with scholarships or research positions"
          },
          {
            "level": "Private Universities",
            "range": "€5,000 - €15,000/year",
            "average": "€8,000",
            "notes": "Higher fees at institutions like CEU"
          }
        ],
        "tuitionNote": "Public universities are affordable, with fees often paid per semester. EU/EEA students may pay lower fees at some institutions. Additional costs include application fees ($150 at some universities) and student services fees (~€50/semester).",
        "expenses": [
          { "label": "Accommodation", "range": "€200 - €500", "percentage": 50 },
          { "label": "Food & Groceries", "range": "€150 - €250", "percentage": 30 },
          { "label": "Transportation", "range": "€20 - €50", "percentage": 15 },
          { "label": "Utilities", "range": "€50 - €100", "percentage": 20 },
          { "label": "Mobile/Internet", "range": "€15 - €30", "percentage": 10 },
          { "label": "Books & Supplies", "range": "€30 - €80", "percentage": 15 },
          { "label": "Entertainment", "range": "€50 - €150", "percentage": 25 }
        ],
        "regionalCosts": [
          {
            "region": "Budapest",
            "level": "Expensive",
            "color": "text-red-500",
            "range": "€600 - €900"
          },
          {
            "region": "Szeged, Debrecen",
            "level": "Moderate",
            "color": "text-yellow-500",
            "range": "€400 - €700"
          },
          {
            "region": "Pécs, Miskolc",
            "level": "Affordable",
            "color": "text-green-500",
            "range": "€350 - €600"
          }
        ],
        "scholarships": [
          {
            "category": "Government Scholarships",
            "color": "indigo",
            "items": [
              {
                "title": "Stipendium Hungaricum",
                "description": "Fully funded: tuition, HUF 43,700/month stipend, accommodation (HUF 40,000/month), health insurance (HUF 65,000/year)."
              },
              {
                "title": "Bilateral State Scholarships",
                "description": "Based on agreements with partner countries, covers tuition and accommodation."
              },
              {
                "title": "Hungarian Diaspora Scholarship",
                "description": "For students of Hungarian descent, covers tuition and living costs."
              }
            ]
          },
          {
            "category": "University Scholarships",
            "color": "blue",
            "items": [
              {
                "title": "Merit-Based Scholarships",
                "description": "Offered by universities like ELTE, Szeged (e.g., 20% tuition discount)."
              },
              {
                "title": "Budapest Metropolitan University Scholarships",
                "description": "500 EUR discount/semester for undergraduate/master’s."
              },
              {
                "title": "CEU Scholarships",
                "description": "Partial or full tuition waivers for social sciences and humanities."
              }
            ]
          }
        ],
        "financialSupports": [
          {
            "title": "Part-Time Work",
            "description": "Non-EU students can work up to 30 hours/week during term, full-time during holidays."
          },
          {
            "title": "Erasmus+ Grants",
            "description": "Covers travel, living costs, and tuition for exchange programs."
          },
          {
            "title": "Student Discounts",
            "description": "Available for transport, museums, and cultural events."
          },
          {
            "title": "Research Assistantships",
            "description": "Paid positions for graduate/PhD students."
          }
        ],
        "TipsforScholarship": [
          "Apply for Stipendium Hungaricum by January 15 via Tempus Public Foundation",
          "Submit strong motivation letter and academic records",
          "Check university websites for additional merit-based awards",
          "Contact Hungarian embassy for Bilateral State Scholarships"
        ],
        "ukVisaData": {
          "title": "Hungarian Student Visa Requirements",
          "intro": "Non-EU students need a residence permit for studies over 90 days. EU/EEA students can study without a visa but must register.",
          "sections": [
            {
              "title": "Basic Requirements",
              "color": "#3B82F6",
              "items": [
                "Admission letter from a Hungarian university",
                "Valid passport",
                "Proof of funds (min. €600/month or scholarship letter)",
                "Health insurance (min. €30,000 coverage)",
                "Proof of accommodation",
                "Completed application form and photos",
                "Visa fee (~€60)"
              ]
            },
            {
              "title": "Financial Requirements",
              "color": "#F59E0B",
              "items": [
                "€600/month for duration of stay",
                "Bank statement or scholarship award letter",
                "Funds must be accessible in Hungary"
              ]
            }
          ],
          "facts": [
            "Visa fee: ~€60",
            "Processing time: 20–30 days",
            "Approval rate: ~87.4% (2023 data)"
          ],
          "benefits": [
            {
              "title": "Work Rights",
              "description": "Up to 30 hours/week for non-EU students during term."
            },
            {
              "title": "Healthcare",
              "description": "Access to public healthcare with mandatory insurance."
            },
            {
              "title": "Travel",
              "description": "Residence permit allows travel within Schengen Area."
            }
          ]
        },
        "visaStepsData": [
          {
            "step": "1",
            "title": "Secure Admission",
            "color": "bg-blue-500",
            "content": "Obtain admission letter from a recognized Hungarian university."
          },
          {
            "step": "2",
            "title": "Gather Documents",
            "color": "bg-indigo-500",
            "content": "Prepare passport, admission letter, financial proof, insurance, and accommodation details."
          },
          {
            "step": "3",
            "title": "Apply for Residence Permit",
            "color": "bg-purple-500",
            "content": "Submit application at Hungarian embassy or online."
          },
          {
            "step": "4",
            "title": "Attend Appointment",
            "color": "bg-pink-500",
            "content": "Provide biometrics and documents at embassy or visa center."
          },
          {
            "step": "5",
            "title": "Wait for Approval",
            "color": "bg-amber-500",
            "content": "Processing takes 20–30 days."
          },
          {
            "step": "6",
            "title": "Travel to Hungary",
            "color": "bg-green-500",
            "content": "Collect permit, travel, and register with local authorities within 30 days."
          }
        ],
        "workOpportunitiesData": [
          {
            "title": "During Studies",
            "color": "bg-indigo-500",
            "sections": [
              {
                "heading": "Working Hours",
                "points": [
                  "Non-EU: Up to 30 hours/week during term, full-time during holidays",
                  "EU/EEA: No restrictions",
                  "Work permit may be required for non-EU students"
                ]
              },
              {
                "heading": "Common Student Jobs",
                "points": [
                  "Hospitality (restaurants, cafes)",
                  "Retail and customer service",
                  "Tutoring or language teaching",
                  "University research assistant roles"
                ]
              }
            ]
          },
          {
            "title": "Post-Graduation",
            "color": "bg-green-500",
            "sections": [
              {
                "heading": "Residence Permit for Job Search",
                "points": [
                  "6 months to seek employment post-graduation",
                  "Requires job offer for extension",
                  "Path to long-term residency"
                ]
              },
              {
                "heading": "EU Blue Card",
                "points": [
                  "For highly skilled graduates",
                  "Requires job offer with minimum salary",
                  "Valid for 2 years, renewable"
                ]
              }
            ]
          }
        ],
        "jobMarketData": {
          "sectors": [
            "Medicine and Healthcare",
            "Engineering and Technology",
            "Business and Finance",
            "Tourism and Hospitality",
            "Information Technology",
            "Research and Academia"
          ],
          "salaries": [
            "Budapest: €25,000 - €35,000",
            "Other cities: €20,000 - €30,000",
            "Medicine: €30,000 - €50,000",
            "Engineering: €28,000 - €40,000",
            "IT: €30,000 - €45,000"
          ]
        },
        "bestCitiesData": [
          {
            "city": "Budapest",
            "image": "https://images.unsplash.com/photo-1563900446930-1b95a7a7f6d3?q=80&w=600&auto=format",
            "universities": "10 universities",
            "description": "The vibrant capital with a rich cultural scene and top universities.",
            "highlights": ["Cultural landmarks", "Top universities", "Nightlife", "Job opportunities"]
          },
          {
            "city": "Szeged",
            "image": "https://images.unsplash.com/photo-1599981152602-4c2b4b2b2 debrief?q=80&w=600&auto=format",
            "universities": "2 universities",
            "description": "A student-friendly city with affordable living and a strong academic reputation.",
            "highlights": ["University of Szeged", "Affordable costs", "Vibrant student life", "Research focus"]
          },
          {
            "city": "Debrecen",
            "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format",
            "universities": "2 universities",
            "description": "Known for its medical school and green campus.",
            "highlights": ["Medical programs", "Green city", "Affordable living", "Cultural events"]
          },
          {
            "city": "Pécs",
            "image": "https://images.unsplash.com/photo-1514890277511-1e5b9f3119e3?q=80&w=600&auto=format",
            "universities": "1 university",
            "description": "A historic city with a diverse student community.",
            "highlights": ["University of Pécs", "Cultural heritage", "Affordable", "Mediterranean vibe"]
          }
        ],
        "studentLifeData": {
          "title": "Student Life and Support Services",
          "icon": {
            "bg": "bg-purple-100",
            "color": "text-purple-600"
          },
          "sections": [
            {
              "title": "Campus Life",
              "bg": "bg-purple-50",
              "border": "border-purple-100",
              "textColor": "text-purple-800",
              "items": [
                {
                  "title": "Student Organizations",
                  "description": "Clubs for academic, cultural, and social activities."
                },
                {
                  "title": "Cultural Events",
                  "description": "Festivals, thermal baths, and city events."
                },
                {
                  "title": "Sports Facilities",
                  "description": "Access to gyms, sports clubs, and outdoor activities."
                },
                {
                  "title": "Student Discounts",
                  "description": "Discounts on transport, museums, and entertainment."
                }
              ]
            },
            {
              "title": "Support Services",
              "bg": "bg-blue-50",
              "border": "border-blue-100",
              "textColor": "text-blue-800",
              "items": [
                {
                  "title": "International Office",
                  "description": "Support for visas, orientation, and integration."
                },
                {
                  "title": "Language Courses",
                  "description": "Free or affordable Hungarian/English courses."
                },
                {
                  "title": "Career Services",
                  "description": "Internships, job fairs, and career counseling."
                },
                {
                  "title": "Counseling Services",
                  "description": "Mental health and academic support."
                }
              ]
            },
            {
              "title": "Accommodation Options",
              "bg": "bg-green-50",
              "border": "border-green-100",
              "textColor": "text-green-800",
              "items": [
                {
                  "title": "University Dormitories",
                  "description": "Affordable, shared rooms near campuses.",
                  "badges": ["Cost-effective", "Social", "Convenient"]
                },
                {
                  "title": "Private Apartments",
                  "description": "Independent living, often in city centers.",
                  "badges": ["Privacy", "Flexible", "Modern"]
                },
                {
                  "title": "Shared Flats",
                  "description": "Popular among students for affordability.",
                  "badges": ["Affordable", "Social", "Local experience"]
                }
              ]
            },
            {
              "title": "Transportation",
              "bg": "bg-amber-50",
              "border": "border-amber-100",
              "textColor": "text-amber-800",
              "items": [
                {
                  "title": "Public Transport",
                  "description": "Buses, trams, and metro with student discounts."
                },
                {
                  "title": "Cycling",
                  "description": "Bike-friendly cities with rental options."
                },
                {
                  "title": "Semester Pass",
                  "description": "Affordable transport passes for students."
                }
              ]
            }
          ],
          "additionalInfo": {
            "title": "Healthcare for International Students",
            "description": "Students must have health insurance. EU/EEA students use EHIC; non-EU students need Hungarian public or private insurance (~€30–€100/month).",
            "items": [
              {
                "title": "Covered Services",
                "points": ["GP visits", "Hospital care", "Emergency services", "Prescriptions"]
              },
              {
                "title": "Additional Costs",
                "points": ["Dental care", "Specialist treatments", "Private insurance fees"]
              }
            ]
          }
        },
        "latestUpdates2025": [
          {
            "title": "Expanded Stipendium Hungaricum",
            "description": "More programs added",
            "content": "The 2025/2026 intake includes new AI and green tech programs under Stipendium Hungaricum, with increased funding.",
            "category": "Scholarships",
            "gradient": "from-amber-50 to-yellow-50",
            "border": "border-amber-100",
            "badgeColor": "bg-amber-500",
            "titleColor": "text-amber-800"
          },
          {
            "title": "English Program Growth",
            "description": "More study options",
            "content": "Universities like Szeged and Debrecen have expanded ENGLISH-taught programs in medicine, engineering, and business.",
            "category": "Education",
            "gradient": "from-green-50 to-emerald-50",
            "border": "border-green-100",
            "badgeColor": "bg-green-500",
            "titleColor": "text-green-800"
          },
          {
            "title": "Streamlined Visa Process",
            "description": "Faster applications",
            "content": "Hungary introduced a digital visa application system in 2025, reducing processing times to 20–30 days.",
            "category": "Visa Policy",
            "gradient": "from-purple-50 to-pink-50",
            "border": "border-purple-100",
            "badgeColor": "bg-purple-500",
            "titleColor": "text-purple-800"
          }
        ],
        "policyChanges2025": [
          {
            "title": "Increased Work Hours",
            "content": "Non-EU students can now work up to 30 hours/week during term, up from 24 hours."
          },
          {
            "title": "Flexible Language Requirements",
            "content": "More universities accept English proficiency proof without IELTS, via interviews or prior education."
          },
          {
            "title": "Extended Job-Search Permit",
            "content": "Post-graduation job-search permit extended to 9 months for STEM graduates."
          }
        ],
        "resourcecards": [
          {
            "title": "Course Finder",
            "description": "Explore programs offered by Hungarian universities by subject and language.",
            "buttonText": "Find Your Course",
            "gradient": "from-blue-50 to-indigo-50",
            "borderColor": "border-blue-100",
            "textColor": "text-blue-800",
            "buttonColor": "bg-blue-600 hover:bg-blue-700"
          },
          {
            "title": "University Rankings",
            "description": "Compare Hungarian universities by academic reputation and programs.",
            "buttonText": "View Rankings",
            "gradient": "from-purple-50 to-fuchsia-50",
            "borderColor": "border-purple-100",
            "textColor": "text-purple-800",
            "buttonColor": "bg-purple-600 hover:bg-purple-700"
          },
          {
            "title": "Visa Checklist",
            "description": "Ensure you have all documents for your Hungarian residence permit.",
            "buttonText": "Get Checklist",
            "gradient": "from-green-50 to-emerald-50",
            "borderColor": "border-green-100",
            "textColor": "text-green-800",
            "buttonColor": "bg-green-600 hover:bg-green-700"
          }
        ],
        "resourceofficialLinks": [
          {
            "label": "Stipendium Hungaricum",
            "href": "https://stipendiumhungaricum.hu/"
          },
          {
            "label": "Study in Hungary",
            "href": "https://studyinhungary.hu/"
          },
          {
            "label": "Hungarian Embassy Visa Services",
            "href": "https://konzuliszolgalat.kormany.hu/en"
          },
          {
            "label": "Tempus Public Foundation",
            "href": "https://tpf.hu/en"
          }
        ],
        "resourceguides": [
          { "label": "Guide to Studying in Hungary (PDF)", "href": "#" },
          { "label": "Hungarian Student Visa Guide (PDF)", "href": "#" },
          { "label": "Living in Hungary for Students (PDF)", "href": "#" },
          { "label": "Scholarship Application Guide (PDF)", "href": "#" }
        ],
        "resourcetools": [
          {
            "title": "Cost Calculator",
            "description": "Estimate tuition, living costs, and other expenses in Hungary.",
            "buttonText": "Calculate Costs"
          },
          {
            "title": "Scholarship Finder",
            "description": "Discover scholarships based on your nationality and field of study.",
            "buttonText": "Find Scholarships"
          },
          {
            "title": "Language Test Finder",
            "description": "Locate English proficiency test centers (if required).",
            "buttonText": "Find Tests"
          }
        ],
        "faqs": [
          {
            "question": "Do I need IELTS to study in Hungary?",
            "answer": "Many universities do not require IELTS. English proficiency can often be proven through interviews, prior education in English, or other tests. Check university-specific requirements."
          },
          {
            "question": "How much does it cost to study in Hungary?",
            "answer": "Tuition fees range from €1,500–€5,000/year for most programs, €12,000–€16,000 for medicine/dentistry. Living costs are €400–€900/month, depending on the city."
          },
          {
            "question": "Can I work while studying in Hungary?",
            "answer": "Non-EU students can work up to 30 hours/week during term and full-time during holidays with a work permit. EU/EEA students have no restrictions."
          },
          {
            "question": "What are the visa requirements for non-EU students?",
            "answer": "Non-EU students need a residence permit for studies over 90 days. Requirements include an admission letter, proof of funds (€600/month), health insurance, accommodation proof, and a €60 fee."
          },
          {
            "question": "Are scholarships available for international students?",
            "answer": "Yes, Stipendium Hungaricum is the most prominent, covering tuition, stipend (HUF 43,700/month), accommodation, and insurance. Other options include Erasmus+ and university-specific scholarships."
          },
          {
            "question": "Can I stay in Hungary after graduation?",
            "answer": "Non-EU graduates can apply for a 6–9 month residence permit to seek employment. A job offer can lead to a work visa or EU Blue Card."
          },
          {
            "question": "What is the application process for Hungarian universities?",
            "answer": "Apply directly to universities or via platforms like Stipendium Hungaricum (by January 15 for September intake). Submit transcripts, motivation letter, and proof of English proficiency."
          },
          {
            "question": "How do I access healthcare in Hungary as a student?",
            "answer": "EU/EEA students use EHIC; non-EU students need Hungarian public or private insurance (€30–€100/month). Register with a local doctor for healthcare access."
          },
          {
            "question": "What support services are available for international students?",
            "answer": "Universities offer international offices, language courses, career services, and counseling. Student unions provide cultural events and discounts."
          }
        ]
  },
  
southkorea: {
      "code": "kr",
      "name": "South Korea",
      "flagUrl": "https://flagcdn.com/w320/kr.png",
      "heroImage": "https://images.unsplash.com/photo-1517154421773-4d3f5ea0b84b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "quickFacts": {
        "population": "51.7 million",
        "capital": "Seoul",
        "language": "Korean",
        "currency": "South Korean Won (₩, KRW)",
        "academicYear": "March to December (Spring and Fall semesters)"
      },
      "keyDates": {
        "fallDeadline": "April 1 - June 30 (Fall semester)",
        "springDeadline": "September 1 - November 30 (Spring semester)",
        "summerDeadline": "Varies for short-term programs (May-June)"
      },
      "overviewSections": [
        {
          "title": "Why Study in South Korea?",
          "description": "South Korea is a dynamic study destination, blending cutting-edge technology, world-class education, and vibrant K-culture.",
          "points": [
            {
              "heading": "Top-Ranked Universities",
              "text": "Home to globally recognized institutions like Seoul National University and KAIST."
            },
            {
              "heading": "Affordable Education",
              "text": "Competitive tuition fees and generous scholarships for international students."
            },
            {
              "heading": "K-Culture Hub",
              "text": "Immerse in K-pop, K-dramas, and a rich cultural heritage."
            },
            {
              "heading": "Innovation Leader",
              "text": "Ideal for STEM, business, and tech-focused careers."
            }
          ]
        },
        {
          "title": "Education System at a Glance",
          "description": "South Korea’s higher education system is renowned for academic excellence, innovation, and global competitiveness.",
          "cards": [
            {
              "color": "red-500",
              "title": "Undergraduate",
              "subtitle": "Bachelor’s Degree",
              "points": [
                "4 years duration",
                "Bachelor of Arts/Science (BA/BSc)",
                "English and Korean-taught programs",
                "Focus on academics and practical skills"
              ]
            },
            {
              "color": "blue-500",
              "title": "Postgraduate",
              "subtitle": "Master’s Degree",
              "points": [
                "2 years duration",
                "Master of Arts/Science (MA/MSc)",
                "Research and professional tracks",
                "Many English-taught options"
              ]
            },
            {
              "color": "purple-500",
              "title": "Doctorate",
              "subtitle": "PhD",
              "points": [
                "3-5 years duration",
                "Research-intensive with dissertation",
                "STEM-focused programs prominent",
                "Funding widely available"
              ]
            }
          ],
          "note": {
            "text": "South Korea uses a 4.5 or 4.3 GPA scale (4.0-4.5 = A). ECTS credits are increasingly adopted for international compatibility.",
            "color": "yellow-50",
            "border": "yellow-100",
            "textColor": "yellow-700"
          }
        }
      ],
      "topcourse": [
        {
          "title": "Engineering",
          "details": "Mechanical, Electrical, Chemical, Robotics",
          "color": "bg-blue-50 border-blue-200"
        },
        {
          "title": "Computer Science",
          "details": "AI, Software Engineering, Data Science",
          "color": "bg-indigo-50 border-indigo-200"
        },
        {
          "title": "Business & Economics",
          "details": "International Business, Finance, MBA",
          "color": "bg-amber-50 border-amber-200"
        },
        {
          "title": "Medicine",
          "details": "Biomedicine, Pharmacy, Public Health",
          "color": "bg-red-50 border-red-200"
        },
        {
          "title": "Social Sciences",
          "details": "International Relations, Sociology",
          "color": "bg-green-50 border-green-200"
        },
        {
          "title": "Arts & Design",
          "details": "Visual Arts, Fashion, Game Design",
          "color": "bg-pink-50 border-pink-200"
        },
        {
          "title": "Korean Language & Culture",
          "details": "Language Studies, Cultural Studies",
          "color": "bg-purple-50 border-purple-200"
        },
        {
          "title": "Biotechnology",
          "details": "Bioengineering, Genetics",
          "color": "bg-cyan-50 border-cyan-200"
        },
        {
          "title": "Environmental Science",
          "details": "Sustainability, Renewable Energy",
          "color": "bg-teal-50 border-teal-200"
        }
      ],
      "topuniversites": [
        {
          "name": "Seoul National University (SNU)",
          "location": "Seoul",
          "rank": "41",
          "notable": "Engineering, Medicine, Social Sciences"
        },
        {
          "name": "Korea Advanced Institute of Science and Technology (KAIST)",
          "location": "Daejeon",
          "rank": "53",
          "notable": "Engineering, Computer Science, Research"
        },
        {
          "name": "Yonsei University",
          "location": "Seoul",
          "rank": "56",
          "notable": "Business, Medicine, Humanities"
        },
        {
          "name": "Sungkyunkwan University (SKKU)",
          "location": "Seoul",
          "rank": "123",
          "notable": "Engineering, Business, Industry Ties"
        },
        {
          "name": "Korea University",
          "location": "Seoul",
          "rank": "145",
          "notable": "Law, Business, Social Sciences"
        },
        {
          "name": "Hanyang University",
          "location": "Seoul",
          "rank": "162",
          "notable": "Engineering, International Studies"
        },
        {
          "name": "Kyung Hee University",
          "location": "Seoul",
          "rank": "328",
          "notable": "Hospitality, Modern Languages, Arts"
        },
        {
          "name": "Ewha Womans University",
          "location": "Seoul",
          "rank": "351-400",
          "notable": "Women’s Studies, Arts, Social Sciences"
        }
      ],
      "intakes": [
        {
          "label": "March (Spring Semester)",
          "description": "Primary intake for most programs",
          "icon": "S"
        },
        {
          "label": "September (Fall Semester)",
          "description": "Secondary intake with broad program options",
          "icon": "F"
        }
      ],
      "deadlines": [
        {
          "title": "Undergraduate",
          "icon": "U",
          "details": [
            "November 30 (Spring semester)",
            "June 30 (Fall semester)"
          ]
        },
        {
          "title": "Postgraduate",
          "icon": "P",
          "details": [
            "October-November (Spring semester)",
            "May-June (Fall semester)"
          ]
        },
        {
          "title": "Scholarships",
          "icon": "S",
          "details": [
            "Global Korea Scholarship: September-October",
            "University-specific: Varies, often November-March"
          ]
        }
      ],
      "addmissionnotes": [
        "Apply directly to universities, no national application portal",
        "Ensure documents are translated into Korean狙, "Check university-specific language requirements early",
        "Visa processing may take 4-8 weeks",
        "Apply for scholarships early to meet deadlines"
      ],
      "requirementsData": [
        {
          "title": "Undergraduate Requirements",
          "color": "bg-blue-500",
          "items": [
            "High school diploma (translated into English/Korean)",
            "Academic transcripts",
            "TOPIK Level 3+ or IELTS 5.5-6.5/TOEFL iBT 80+",
            "Personal statement",
            "Letters of recommendation (1-2)",
            "Passport copy",
            "Financial statement (₩22M/$15,400)"
          ]
        },
        {
          "title": "Postgraduate Requirements",
          "color": "bg-purple-500",
          "items": [
            "Bachelor’s degree (translated)",
            "Academic transcripts",
            "TOPIK Level 3+ or IELTS 6.0-6.5/TOEFL iBT 80+",
            "Statement of purpose",
            "CV/Resume",
            "Letters of recommendation (2-3)",
            "Financial statement (₩22M/$15,400)",
            "Research proposal for PhD"
          ]
        }
      ],
      "CountrySpecificRequirements": "International qualifications are evaluated by universities. Some countries’ high school diplomas may require additional preparatory courses. Check specific university requirements via their websites or Study in Korea (www.studyinkorea.go.kr).",
      "tuitionData": [
        {
          "level": "Undergraduate (Public Universities)",
          "range": "₩2.4M - ₩9M/semester ($1,700-$6,500)",
          "average": "₩5M ($3,600)",
          "notes": "Varies by program; medicine/engineering higher"
        },
        {
          "level": "Postgraduate (Public Universities)",
          "range": "₩2.5M - ₩10M/semester ($1,800-$7,100)",
          "average": "₩5.5M ($3,900)",
          "notes": "English-taught programs may cost more"
        },
        {
          "level": "Private Universities",
          "range": "₩5M - ₩15M/semester ($3,600-$10,700)",
          "average": "₩9M ($6,400)",
          "notes": "Business, arts programs often higher"
        },
        {
          "level": "PhD",
          "range": "₩2M - ₩10M/semester ($1,400-$7,100)",
          "average": "₩5M ($3,600)",
          "notes": "Often fully funded via scholarships"
        },
        {
          "level": "Language Programs",
          "range": "₩1.5M - ₩3M/10 weeks ($1,100-$2,100)",
          "average": "₩2M ($1,400)",
          "notes": "Short-term intensive courses"
        }
      ],
      "tuitionNote": "Tuition fees are the same for domestic and international students. Public universities are generally cheaper than private ones. Medicine and engineering programs are at the higher end. Scholarships can cover 30-100% of tuition.",
      "expenses": [
        { "label": "Accommodation", "range": "₩300,000 - ₩800,000 ($215-$570)", "percentage": 50 },
        { "label": "Food & Groceries", "range": "₩200,000 - ₩400,000 ($140-$285)", "percentage": 30 },
        { "label": "Transportation", "range": "₩50,000 - ₩100,000 ($35-$70)", "percentage": 15 },
        { "label": "Utilities", "range": "₩50,000 - ₩100,000 ($35-$70)", "percentage": 10 },
        { "label": "Mobile/Internet", "range": "₩30,000 - ₩70,000 ($20-$50)", "percentage": 10 },
        { "label": "Books & Supplies", "range": "₩50,000 - ₩150,000 ($35-$105)", "percentage": 10 },
        { "label": "Entertainment", "range": "₩100,000 - ₩300,000 ($70-$215)", "percentage": 20 }
      ],
      "regionalCosts": [
        {
          "region": "Seoul",
          "level": "Expensive",
          "color": "text-red-500",
          "range": "₩900,000 - ₩1.5M ($640-$1,070)"
        },
        {
          "region": "Busan, Incheon",
          "level": "Moderate",
          "color": "text-orange-500",
          "range": "₩700,000 - ₩1M ($500-$715)"
        },
        {
          "region": "Daejeon, Gwangju",
          "level": "Affordable",
          "color": "text-green-500",
          "range": "₩500,000 - ₩800,000 ($360-$570)"
        }
      ],
      "scholarships": [
        {
          "category": "Government Scholarships",
          "color": "indigo",
          "items": [
            {
              "title": "Global Korea Scholarship (GKS)",
              "description": "Covers tuition, flights, living stipend (₩900,000-$1.2M/month), language training."
            },
            {
              "title": "TaLK Program",
              "description": "Scholarship for teaching English, includes stipend and housing."
            },
            {
              "title": "KOICA Scholarship",
              "description": "Graduate funding for developing countries’ students."
            }
          ]
        },
        {
          "category": "University Scholarships",
          "color": "blue",
          "items": [
            {
              "title": "Merit-Based Scholarships",
              "description": "30-100% tuition waivers based on GPA or TOPIK scores."
            },
            {
              "title": "Need-Based Scholarships",
              "description": "Financial aid for low-income students."
            },
            {
              "title": "TOPIK Scholarships",
              "description": "Tuition discounts (30-60%) for TOPIK Levels 3-6."
            }
          ]
        }
      ],
      "financialSupports": [
        {
          "title": "Part-Time Work",
          "description": "Up to 20 hours/week during semester, unlimited during breaks."
        },
        {
          "title": "Internships",
          "description": "Paid internships in tech, business, and research."
        },
        {
          "title": "Research Assistantships",
          "description": "Available for graduate students with stipends."
        },
        {
          "title": "Teaching Assistantships",
          "description": "Support for language or academic teaching."
        }
      ],
      "TipsforScholarship": [
        "Apply early for GKS (September-October) via Korean embassy or university",
        "Submit strong academic records and statement of purpose",
        "Obtain TOPIK Level 3+ for better scholarship eligibility",
        "Check university websites for specific scholarship deadlines"
      ],
      "krVisaData": {
        "title": "South Korea Student Visa Requirements",
        "intro": "Non-EU/EEA students need a D-2 visa for degree programs or D-4 for language programs.",
        "sections": [
          {
            "title": "Basic Requirements",
            "color": "#3B82F6",
            "items": [
              "Admission letter from a recognized institution",
              "Valid passport",
              "Financial proof (₩22M/$15,400 for Seoul, ₩16M/$11,400 elsewhere)",
              "Health certificate",
              "TOPIK Level 3+ or IELTS 5.5+/TOEFL iBT 80+",
              "Academic transcripts",
              "Application fee ($60 single-entry, $90 multiple-entry)"
            ]
          },
          {
            "title": "Financial Requirements",
            "color": "#F59E0B",
            "items": [
              "₩22M ($15,400) for Seoul metropolitan area",
              "₩16M ($11,400) for other regions",
              "Bank statement, scholarship, or sponsor letter",
              "Funds must cover at least one year"
            ]
          }
        ],
        "facts": [
          "Visa fee: $60-$90",
          "Processing time: 4-8 weeks",
          "Alien Registration Card required within 90 days ($24)",
          "Mandatory health insurance ($15/month)"
        ],
        "benefits": [
          {
            "title": "Work Rights",
            "description": "20 hours/week during semester, unlimited during breaks."
          },
          {
            "title": "Post-Study Work",
            "description": "Up to 3 years to seek employment (2025 policy)."
          },
          {
            "title": "Healthcare",
            "description": "Access to national health insurance with mandatory coverage."
          }
        ]
      },
      "visaStepsData": [
        {
          "step": "1",
          "title": "Receive Admission Letter",
          "color": "bg-blue-500",
          "content": "Secure admission from a recognized Korean institution."
        },
        {
          "step": "2",
          "title": "Prepare Financial Proof",
          "color": "bg-indigo-500",
          "content": "Provide bank statement or scholarship letter (₩22M/$15,400 for Seoul)."
        },
        {
          "step": "3",
          "title": "Secure Health Insurance",
          "color": "bg-purple-500",
          "content": "Obtain mandatory health insurance coverage."
        },
        {
          "step": "4",
          "title": "Gather Documents",
          "color": "bg-pink-500",
          "content": "Prepare passport, admission letter, transcripts, and language certificates."
        },
        {
          "step": "5",
          "title": "Apply for Visa",
          "color": "bg-red-500",
          "content": "Submit application at Korean embassy or consulate."
        },
        {
          "step": "6",
          "title": "Attend Interview",
          "color": "bg-amber-500",
          "content": "Attend visa interview if required; provide biometrics."
        },
        {
          "step": "7",
          "title": "Wait for Decision",
          "color": "bg-green-500",
          "content": "Visa processing takes 4-8 weeks."
        },
        {
          "step": "8",
          "title": "Register in Korea",
          "color": "bg-blue-500",
          "content": "Obtain Alien Registration Card within 90 days."
        }
      ],
      "workOpportunitiesData": [
        {
          "title": "During Studies",
          "color": "bg-indigo-500",
          "sections": [
            {
              "heading": "Working Hours",
              "points": [
                "20 hours/week during semester",
                "Unlimited hours during breaks",
                "D-2 visa holders eligible",
                "Minimum wage: ₩9,620/hour ($7)"
              ]
            },
            {
              "heading": "Common Student Jobs",
              "points": [
                "English tutoring",
                "Cafes and restaurants",
                "Campus jobs (library, admin)",
                "Internships in tech/business"
              ]
            }
          ]
        },
        {
          "title": "Post-Graduation",
          "color": "bg-green-500",
          "sections": [
            {
              "heading": "Job-Seeker Visa",
              "points": [
                "Up to 3 years to find employment (2025 policy)",
                "No job offer required initially",
                "Focus on specialist roles (STEM, business)",
                "Path to E-7 visa or Blue Card"
              ]
            },
            {
              "heading": "Employment Opportunities",
              "points": [
                "Tech industry (Samsung, LG)",
                "Automotive (Hyundai, Kia)",
                "Finance and consulting",
                "Research and academia"
              ]
            }
          ]
        }
      ],
      "jobMarketData": {
        "sectors": [
          "Technology and IT",
          "Automotive and Engineering",
          "Finance and Business",
          "Healthcare",
          "Education",
          "Entertainment and Media"
        ],
        "salaries": [
          "Seoul: ₩40M - ₩60M ($28,600-$42,900)",
          "Other cities: ₩30M - ₩50M ($21,400-$35,700)",
          "Engineering/IT: ₩45M - ₩70M ($32,100-$50,000)",
          "Business: ₩40M - ₩65M ($28,600-$46,400)"
        ]
      },
      "bestCitiesData": [
        {
          "city": "Seoul",
          "image": "https://images.unsplash.com/photo-1517154421773-4d3f5ea0b84b?q=80&w=600&auto=format",
          "universities": "8 major universities",
          "description": "A global city with top universities and vibrant K-culture.",
          "highlights": ["K-pop", "Technology hub", "Nightlife", "Shopping"]
        },
        {
          "city": "Busan",
          "image": "https://images.unsplash.com/photo-1595769816152-f7a8b9c2e4c7?q=80&w=600&auto=format",
          "universities": "3 major universities",
          "description": "A coastal city with beaches and a growing academic scene.",
          "highlights": ["Beaches", "Seafood", "Film festival", "Affordable"]
        },
        {
          "city": "Daejeon",
          "image": "https://images.unsplash.com/photo-1620207419188-546da08c73d2?q=80&w=600&auto=format",
          "universities": "2 major universities",
          "description": "A science and technology hub with KAIST.",
          "highlights": ["Research hub", "Hot springs", "Affordable", "Hiking"]
        },
        {
          "city": "Gwangju",
          "image": "https://images.unsplash.com/photo-1595769816267-7e3e56e8c4c7?q=80&w=600&auto=format",
          "universities": "2 major universities",
          "description": "A cultural city with a focus on arts and democracy.",
          "highlights": ["Art scene", "History", "Affordable", "Festivals"]
        },
        {
          "city": "Incheon",
          "image": "https://images.unsplash.com/photo-1595769816267-7e3e56e8c4c7?q=80&w=600&auto=format",
          "universities": "2 major universities",
          "description": "A port city near Seoul with global campus initiatives.",
          "highlights": ["Airport hub", "Chinatown", "Affordable", "Connectivity"]
        }
      ],
      "studentLifeData": {
        "title": "Student Life and Support Services",
        "icon": {
          "bg": "bg-purple-100",
          "color": "text-purple-600"
        },
        "sections": [
          {
            "title": "Campus Life",
            "bg": "bg-purple-50",
            "border": "border-purple-100",
            "textColor": "text-purple-800",
            "items": [
              {
                "title": "Student Clubs",
                "description": "K-pop, sports, cultural, and academic clubs."
              },
              {
                "title": "Cultural Events",
                "description": "K-pop concerts, festivals, and campus events."
              },
              {
                "title": "Sports Facilities",
                "description": "Gyms, sports fields, and university teams."
              },
              {
                "title": "Campus Dining",
                "description": "Affordable Korean and international food."
              }
            ]
          },
          {
            "title": "Support Services",
            "bg": "bg-blue-50",
            "border": "border-blue-100",
            "textColor": "text-blue-800",
            "items": [
              {
                "title": "International Offices",
                "description": "Visa, housing, and academic support."
              },
              {
                "title": "Language Programs",
                "description": "Korean language courses at all levels."
              },
              {
                "title": "Career Services",
                "description": "Job fairs, internships, and career counseling."
              },
              {
                "title": "Mental Health Support",
                "description": "Counseling services for students."
              }
            ]
          },
          {
            "title": "Accommodation Options",
            "bg": "bg-green-50",
            "border": "border-green-100",
            "textColor": "text-green-800",
            "items": [
              {
                "title": "University Dormitories",
                "description": "Affordable on-campus housing with amenities.",
                "badges": ["Affordable", "Convenient", "Social"]
              },
              {
                "title": "Goshiwon",
                "description": "Small, affordable private rooms for students.",
                "badges": ["Budget-friendly", "Private", "Central"]
              },
              {
                "title": "Shared Apartments",
                "description": "Shared flats with other students.",
                "badges": ["Social", "Flexible", "Modern"]
              }
            ]
          },
          {
            "title": "Transportation",
            "bg": "bg-amber-50",
            "border": "border-amber-100",
            "textColor": "text-amber-800",
            "items": [
              {
                "title": "Public Transport",
                "description": "Efficient subway and bus systems with student discounts."
              },
              {
                "title": "T-Money Card",
                "description": "Prepaid card for public transport."
              },
              {
                "title": "Cycling",
                "description": "Bike rentals in major cities."
              },
              {
                "title": "Walking",
                "description": "Compact campuses and city centers."
              }
            ]
          }
        ],
        "additionalInfo": {
          "title": "Healthcare for International Students",
          "description": "Mandatory health insurance provides access to South Korea’s national healthcare system.",
          "items": [
            {
              "title": "Covered Services",
              "points": [
                "Doctor visits",
                "Hospital care",
                "Prescriptions",
                "Emergency services"
              ]
            },
            {
              "title": "Additional Costs",
              "points": [
                "Dental and optical care",
                "Specialist treatments",
                "Private insurance options"
              ]
            }
          ]
        }
      },
      "latestUpdates2025": [
        {
          "title": "Expanded GKS Scholarships",
          "description": "More STEM funding",
          "content": "The Global Korea Scholarship program expanded by 12% in 2025, offering 2,700 STEM scholarships.",
          "category": "Scholarships",
          "gradient": "from-blue-50 to-sky-50",
          "border": "border-blue-100",
          "badgeColor": "bg-blue-500",
          "titleColor": "text-blue-800"
        },
        {
          "title": "Extended Job-Seeker Visa",
          "description": "3-year post-study stay",
          "content": "International graduates can now stay up to 3 years to seek employment starting 2025.",
          "category": "Visa Policy",
          "gradient": "from-purple-50 to-pink-50",
          "border": "border-purple-100",
          "badgeColor": "bg-purple-500",
          "titleColor": "text-purple-800"
        },
        {
          "title": "More English-Taught Programs",
          "description": "Increased accessibility",
          "content": "Universities like SNU and Yonsei expanded English-taught programs by 8% in 2025.",
          "category": "Education",
          "gradient": "from-green-50 to-emerald-50",
          "border": "border-green-100",
          "badgeColor": "bg-green-500",
          "titleColor": "text-green-800"
        },
        {
          "title": "Digital Visa Applications",
          "description": "Streamlined process",
          "content": "South Korea introduced digital visa applications for select countries in 2025.",
          "category": "Visa Policy",
          "gradient": "from-amber-50 to-yellow-50",
          "border": "border-amber-100",
          "badgeColor": "bg-amber-500",
          "titleColor": "text-amber-800"
        }
      ],
      "policyChanges2025": [
        {
          "title": "Lower Financial Threshold",
          "content": "Financial requirement for D-2 visa reduced to ₩16M ($11,400) for non-Seoul universities."
        },
        {
          "title": "Extended Job-Seeker Visa",
          "content": "Post-graduation stay extended to 3 years for job searching."
        },
        {
          "title": "Expanded Job Eligibility",
          "content": "International graduates can apply for a wider range of professional roles."
        }
      ],
      "resourcecards": [
        {
          "title": "Course Finder",
          "description": "Search for programs across Korean universities.",
          "buttonText": "Find Your Course",
          "gradient": "from-blue-50 to-indigo-50",
          "borderColor": "border-blue-100",
          "textColor": "text-blue-800",
          "buttonColor": "bg-blue-600 hover:bg-blue-700"
        },
        {
          "title": "University Rankings",
          "description": "Compare Korean universities by global rankings.",
          "buttonText": "View Rankings",
          "gradient": "from-purple-50 to-fuchsia-50",
          "borderColor": "border-purple-100",
          "textColor": "text-purple-800",
          "buttonColor": "bg-purple-600 hover:bg-purple-700"
        },
        {
          "title": "Visa Checklist",
          "description": "Tool to prepare documents for your D-2/D-4 visa.",
          "buttonText": "Get Checklist",
          "gradient": "from-green-50 to-emerald-50",
          "borderColor": "border-green-100",
          "textColor": "text-green-800",
          "buttonColor": "bg-green-600 hover:bg-green-700"
        }
      ],
      "resourceofficialLinks": [
        { "label": "Study in Korea", "href": "https://www.studyinkorea.go.kr" },
        { "label": "Global Korea Scholarship", "href": "https://www.studyinkorea.go.kr/en/sub/gks/all.do" },
        { "label": "Korean Embassy Visa Info", "href": "https://www.mofa.go.kr" },
        { "label": "Seoul National University", "href": "https://www.snu.ac.kr" },
        { "label": "KAIST", "href": "https://www.kaist.ac.kr" }
      ],
      "resourceguides": [
        { "label": "South Korea Study Guide (PDF)", "href": "#" },
        { "label": "Student Visa Guide (PDF)", "href": "#" },
        { "label": "Korean Language Guide (PDF)", "href": "#" },
        { "label": "Scholarship Application Guide (PDF)", "href": "#" },
        { "label": "Living in South Korea Guide (PDF)", "href": "#" }
      ],
      "resourcetools": [
        {
          "title": "Cost Calculator",
          "description": "Estimate tuition and living costs in South Korea.",
          "buttonText": "Calculate Costs"
        },
        {
          "title": "Scholarship Finder",
          "description": "Find scholarships based on your profile.",
          "buttonText": "Find Scholarships"
        },
        {
          "title": "Language Proficiency Checker",
          "description": "Check TOPIK/IELTS requirements for your program.",
          "buttonText": "Check Requirements"
        }
      ],
      "faqs": [
        {
          "question": "How long does it take to get a South Korean student visa?",
          "answer": "Processing takes 4-8 weeks. Apply early to account for delays and embassy requirements."
        },
        {
          "question": "Can I work while studying in South Korea?",
          "answer": "Yes, D-2 visa holders can work up to 20 hours/week during semesters and full-time during breaks."
        },
        {
          "question": "What language tests are accepted for Korean universities?",
          "answer": "TOPIK Level 3+ for Korean-taught programs; IELTS 5.5-6.5 or TOEFL iBT 80+ for English-taught programs."
        },
        {
          "question": "How much does it cost to study in South Korea?",
          "answer": "Tuition ranges from ₩2.4M-$15M/semester ($1,700-$10,700). Living costs average ₩900,000-$1.5M/month ($640-$1,070)."
        },
        {
          "question": "What scholarships are available for international students?",
          "answer": "Global Korea Scholarship, university merit-based scholarships (30-100% tuition), and TOPIK-based awards."
        },
        {
          "question": "Can I stay in South Korea after graduation?",
          "answer": "Yes, a 3-year job-seeker visa (2025 policy) allows graduates to seek employment."
        },
        {
          "question": "What are the application deadlines for Korean universities?",
          "answer": "Spring semester: November 30; Fall semester: June 30. Scholarship deadlines vary (September-March)."
        },
        {
          "question": "Do I need health insurance in South Korea?",
          "answer": "Yes, mandatory health insurance costs ~$15/month, providing access to national healthcare."
        },
        {
          "question": "How do I open a bank account in South Korea?",
          "answer": "Provide passport, Alien Registration Card, and proof of enrollment. Banks like KEB Hana and Woori offer student accounts."
        },
        {
          "question": "What support services are available for international students?",
          "answer": "International offices, language programs, career services, housing support, and mental health resources."
        }
      ]
  },
  
denmark: {
      "code": "dk",
      "name": "Denmark",
      "flagUrl": "https://flagcdn.com/w320/dk.png",
      "heroImage": "https://images.unsplash.com/photo-1561037404-1957c159e2fc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "quickFacts": {
        "population": "5.9 million",
        "capital": "Copenhagen",
        "language": "Danish (English widely spoken)",
        "currency": "Danish Krone (DKK)",
        "academicYear": "September to June"
      },
      "keyDates": {
        "fallDeadline": "March 15 (for most undergraduate and postgraduate programs)",
        "springDeadline": "September 1 (for select programs)",
        "summerDeadline": "Varies by institution (typically not available)"
      },
      "overviewSections": [
        {
          "title": "Why Study in Denmark?",
          "description": "Denmark offers a world-class education system with a focus on innovation, sustainability, and student-centered learning, making it an attractive destination for international students.",
          "points": [
            {
              "heading": "High-Quality Education",
              "text": "Danish universities are globally recognized, with 7 institutions in the top 200 worldwide (QS World University Rankings 2025)."
            },
            {
              "heading": "Innovative Teaching",
              "text": "Problem-based learning and interdisciplinary approaches foster critical thinking and practical skills."
            },
            {
              "heading": "Post-Study Work Opportunities",
              "text": "Non-EU/EEA students can stay for up to 3 years after graduation to seek employment under the Establishment Card."
            },
            {
              "heading": "High Quality of Life",
              "text": "Denmark consistently ranks among the happiest countries, with a safe, green, and student-friendly environment."
            }
          ]
        },
        {
          "title": "Education System at a Glance",
          "description": "The Danish education system emphasizes flexibility, research, and collaboration between students and professors.",
          "cards": [
            {
              "color": "blue-500",
              "title": "Undergraduate",
              "subtitle": "Bachelor's Degree",
              "points": [
                "3 years duration",
                "Professional and academic programs",
                "Focus on project-based learning",
                "English-taught programs available"
              ]
            },
            {
              "color": "green-500",
              "title": "Postgraduate",
              "subtitle": "Master's Degree",
              "points": [
                "2 years duration",
                "Research and taught programs",
                "Strong industry connections",
                "Interdisciplinary focus"
              ]
            },
            {
              "color": "purple-500",
              "title": "Doctorate",
              "subtitle": "PhD",
              "points": [
                "3 years duration",
                "Fully-funded positions available",
                "Independent research",
                "Collaboration with industries"
              ]
            }
          ],
          "note": {
            "text": "Denmark uses the 7-point grading scale, where 12 is the highest grade (equivalent to an A) and 2 is the minimum passing grade (equivalent to a D). A grade of -3 indicates failure.",
            "color": "yellow-50",
            "border": "yellow-100",
            "textColor": "yellow-700"
          }
        }
      ],
      "topcourse": [
        {
          "title": "Engineering",
          "details": "Mechanical, Civil, Environmental, Robotics",
          "color": "bg-blue-50 border-blue-200"
        },
        {
          "title": "Information Technology",
          "details": "Software Engineering, Data Science, Cybersecurity",
          "color": "bg-indigo-50 border-indigo-200"
        },
        {
          "title": "Business & Management",
          "details": "International Business, Economics, Entrepreneurship",
          "color": "bg-amber-50 border-amber-200"
        },
        {
          "title": "Environmental Sciences",
          "details": "Sustainability, Climate Change, Renewable Energy",
          "color": "bg-green-50 border-green-200"
        },
        {
          "title": "Design & Architecture",
          "details": "Industrial Design, Urban Planning, Architecture",
          "color": "bg-pink-50 border-pink-200"
        },
        {
          "title": "Life Sciences",
          "details": "Biotechnology, Biomedicine, Food Science",
          "color": "bg-red-50 border-red-200"
        },
        {
          "title": "Social Sciences",
          "details": "Sociology, Political Science, Anthropology",
          "color": "bg-cyan-50 border-cyan-200"
        },
        {
          "title": "Health Sciences",
          "details": "Public Health, Nursing, Medicine",
          "color": "bg-purple-50 border-purple-200"
        }
      ],
      "topuniversities": [
        {
          "name": "University of Copenhagen",
          "location": "Copenhagen",
          "rank": "76",
          "notable": "Life Sciences, Medicine, Social Sciences"
        },
        {
          "name": "Technical University of Denmark (DTU)",
          "location": "Lyngby",
          "rank": "104",
          "notable": "Engineering, Technology, Sustainability"
        },
        {
         支0"University of Southern Denmark",
          "location": "Odense",
          "rank": "166",
          "notable": "Health Sciences, Business, Engineering"
        },
        {
          "name": "Aarhus University",
          "location": "Aarhus",
          "rank": "147",
          "notable": "Social Sciences, Business, Health Sciences"
        },
        {
          "name": "Aalborg University",
          "location": "Aalborg",
          "rank": "252",
          "notable": "Engineering, IT, Problem-Based Learning"
        },
        {
          "name": "Copenhagen Business School",
          "location": "Copenhagen",
          "rank": "39 (Business)",
          "notable": "Business, Management, Economics"
        }
      ],
      "intakes": [
        {
          "label": "September",
          "description": "Primary intake for most programs",
          "icon": "S"
        },
        {
          "label": "February",
          "description": "Secondary intake for select programs",
          "icon": "F"
        }
      ],
      "deadlines": [
        {
          "title": "Undergraduate",
          "icon": "U",
          "details": [
            "March 15 (EU/EEA applicants)",
            "January 15 (Non-EU/EEA applicants)"
          ]
        },
        {
          "title": "Postgraduate",
          "icon": "P",
          "details": [
            "March 15 (Non-EU/EEA applicants)",
            "September 1 (EU/EEA applicants)"
          ]
        },
        {
          "title": "Scholarships",
          "icon": "S",
          "details": [
            "Varies by program and institution",
            "Typically 6-12 months before program start"
          ]
        }
      ],
      "admissionnotes": [
        "Apply early for competitive programs",
        "Non-EU/EEA students should apply by January 15 for September intake",
        "Check specific program requirements on university websites",
        "Some programs require entrance exams or interviews"
      ],
      "requirementsData": [
        {
          "title": "Undergraduate Requirements",
          "color": "bg-blue-500",
          "items": [
            "Completed secondary education (12 years)",
            "High school transcripts/certificates",
            "English proficiency (IELTS 6.5–7.0 or TOEFL iBT 83–100)",
            "Motivation letter",
            "Entrance exam (for select programs)",
            "Portfolio (for design/architecture programs)",
            "Interview (for competitive programs)"
          ]
        },
        {
          "title": "Postgraduate Requirements",
          "color": "bg-purple-500",
          "items": [
            "Bachelor's degree (minimum 3 years)",
            "Academic transcripts",
            "English proficiency (IELTS 6.5–7.5 or TOEFL iBT 83–100)",
            "Motivation letter",
            "CV/Resume",
            "Letters of recommendation (1–2)",
            "Research proposal (for research-based programs)"
          ]
        }
      ],
      "CountrySpecificRequirements": "Danish universities assess international qualifications against Danish standards. Check university websites for specific entry requirements. AP degrees or foundation programs are available for students with non-equivalent qualifications.",
      "tuitionData": [
        {
          "level": "Undergraduate",
          "range": "DKK 45,000 - DKK 120,000",
          "average": "DKK 75,000",
          "notes": "Free for EU/EEA/Swiss students"
        },
        {
          "level": "Postgraduate",
          "range": "DKK 60,000 - DKK 130,000",
          "average": "DKK 90,000",
          "notes": "Free for EU/EEA/Swiss students"
        },
        {
          "level": "PhD",
          "range": "Fully funded (often with stipend)",
          "average": "N/A",
          "notes": "Most PhD positions are salaried"
        }
      ],
      "tuitionNote": "Tuition is free for EU/EEA/Swiss students at public universities. Non-EU/EEA students pay tuition fees. Additional costs may include study materials, field trips, and administrative fees. Always verify fees with your chosen institution.",
      "expenses": [
        { "label": "Accommodation", "range": "DKK 4,000 - DKK 8,000", "percentage": 60 },
        { "label": "Food & Groceries", "range": "DKK 1,500 - DKK 2,500", "percentage": 35 },
        { "label": "Transportation", "range": "DKK 400 - DKK 800", "percentage": 20 },
        { "label": "Utilities", "range": "DKK 800 - DKK 1,500", "percentage": 25 },
        { "label": "Mobile/Internet", "range": "DKK 200 - DKK 400", "percentage": 15 },
        { "label": "Books & Supplies", "range": "DKK 300 - DKK 800", "percentage": 15 },
        { "label": "Entertainment", "range": "DKK 500 - DKK 1,200", "percentage": 30 }
      ],
      "regionalCosts": [
        {
          "region": "Copenhagen",
          "level": "Expensive",
          "color": "text-red-500",
          "range": "DKK 7,000 - DKK 10,000+"
        },
        {
          "region": "Aarhus",
          "level": "Moderate",
          "color": "text-yellow-500",
          "range": "DKK 5,500 - DKK 7,500"
        },
        {
          "region": "Odense",
          "level": "Moderate",
          "color": "text-yellow-500",
          "range": "DKK 5,000 - DKK 7,000"
        },
        {
          "region": "Aalborg",
          "level": "Affordable",
          "color": "text-green-500",
          "range": "DKK 4,500 - DKK 6,500"
        }
      ],
      "scholarships": [
        {
          "category": "Government Scholarships",
          "color": "indigo",
          "items": [
            {
              "title": "Danish Government Scholarships",
              "description": "Merit-based scholarships for non-EU/EEA students, covering tuition and living stipends."
            },
            {
              "title": "Nordplus Scholarships",
              "description": "For students from Nordic and Baltic countries for exchange programs."
            }
          ]
        },
        {
          "category": "University Scholarships",
          "color": "blue",
          "items": [
            {
              "title": "Merit-Based Scholarships",
              "description": "Offered for academic excellence, covering partial or full tuition."
            },
            {
              "title": "Country-Specific Scholarships",
              "description": "For students from developing countries or specific regions."
            }
          ]
        }
      ],
      "financialSupports": [
        {
          "title": "Part-Time Work",
          "description": "Students can work up to 20 hours per week during term time."
        },
        {
          "title": "SU Grant",
          "description": "State education grant available for EU/EEA students with part-time work."
        },
        {
          "title": "Internships",
          "description": "Paid internships often integrated into programs."
        },
        {
          "title": "PhD Funding",
          "description": "Most PhD students receive salaries or stipends."
        }
      ],
      "TipsforScholarship": [
        "Apply early, ideally 6-12 months before program start",
        "Check university websites for scholarship opportunities",
        "Submit strong motivation letters and academic records",
        "Secure recommendation letters from relevant references"
      ],
      "dkVisaData": {
        "title": "Denmark Student Visa Requirements",
        "intro": "Non-EU/EEA students need a residence permit (student visa) to study in Denmark for programs longer than 3 months.",
        "sections": [
          {
            "title": "Basic Requirements",
            "color": "#3B82F6",
            "items": [
              "Acceptance letter from a recognized Danish institution",
              "Valid passport",
              "Proof of sufficient funds (DKK 6,429/month for 2025)",
              "Proof of paid tuition fees (if applicable)",
              "Health insurance until Danish health card is issued",
              "Application fee payment (DKK 2,250)"
            ]
          },
          {
            "title": "Financial Requirements",
            "color": "#F59E0B",
            "items": [
              "DKK 6,429 per month (approx. DKK 77,148 for 12 months)",
              "Funds must be shown in a bank statement",
              "Scholarship or tuition fee payment can reduce required funds"
            ]
          }
        ],
        "facts": [
          "Application fee: DKK 2,250",
          "Processing time: 1-2 months",
          "Biometric data required at application"
        ],
        "benefits": [
          {
            "title": "Work Rights",
            "description": "Up to 20 hours/week during term and full-time during holidays."
          },
          {
            "title": "Healthcare",
            "description": "Access to Danish healthcare system after receiving residence card."
          },
          {
            "title": "Family Members",
            "description": "Family can apply for residence permits under specific conditions."
          }
        ]
      },
      "visaStepsData": [
        {
          "step": "1",
          "title": "Receive Admission Letter",
          "color": "bg-blue-500",
          "content": "Secure admission from a recognized Danish institution."
        },
        {
          "step": "2",
          "title": "Prepare Documents",
          "color": "bg-indigo-500",
          "content": "Gather passport, admission letter, financial proof, and health insurance."
        },
        {
          "step": "3",
          "title": "Apply Online",
          "color": "bg-purple-500",
          "content": "Submit application via SIRI (Danish Agency for International Recruitment and Integration)."
        },
        {
          "step": "4",
          "title": "Pay Application Fee",
          "color": "bg-pink-500",
          "content": "Pay DKK 2,250 fee online."
        },
        {
          "step": "5",
          "title": "Biometric Appointment",
          "color": "bg-red-500",
          "content": "Visit a Danish embassy or VFS Global for biometrics."
        },
        {
          "step": "6",
          "title": "Wait for Decision",
          "color": "bg-amber-500",
          "content": "Processing typically takes 1-2 months."
        },
        {
          "step": "7",
          "title": "Receive Residence Card",
          "color": "bg-green-500",
          "content": "Collect residence card upon arrival in Denmark."
        }
      ],
      "workOpportunitiesData": [
        {
          "title": "During Studies",
          "color": "bg-indigo-500",
          "sections": [
            {
              "heading": "Working Hours",
              "points": [
                "Up to 20 hours per week during term",
                "Full-time during June, July, August",
                "Internships often part of curriculum"
              ]
            },
            {
              "heading": "Common Jobs",
              "points": [
                "Student assistant roles",
                "Retail and hospitality",
                "Research assistantships",
                "Internships in tech/engineering"
              ]
            }
          ]
        },
        {
          "title": "Post-Graduation",
          "color": "bg-green-500",
          "sections": [
            {
              "heading": "Establishment Card",
              "points": [
                "3 years to seek employment",
                "No job offer required",
                "Unrestricted work rights"
              ]
            },
            {
              "heading": "Work Permit",
              "points": [
                "Requires job offer with minimum salary",
                "Path to permanent residency",
                "Family reunification possible"
              ]
            }
          ]
        }
      ],
      "jobMarketData": {
        "sectors": [
          "Renewable Energy",
          "Biotechnology",
          "Information Technology",
          "Engineering",
          "Pharmaceuticals",
          "Maritime and Logistics"
        ],
        "salaries": [
          "Copenhagen: DKK 300,000 - DKK 400,000",
          "Other cities: DKK 250,000 - DKK 350,000",
          "Tech sector: DKK 350,000 - DKK 500,000",
          "Engineering: DKK 300,000 - DKK 450,000"
        ]
      },
      "bestCitiesData": [
        {
          "city": "Copenhagen",
          "image": "https://images.unsplash.com/photo-1561037404-1957c159e2fc?q=80&w=600&auto=format",
          "universities": "4 universities",
          "description": "The vibrant capital with a global outlook, rich culture, and strong job market.",
          "highlights": [
            "Cultural hub",
            "Green city",
            "Tech and startup scene",
            "Cycling culture"
          ]
        },
        {
          "city": "Aarhus",
          "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format",
          "universities": "2 universities",
          "description": "A youthful city with a strong academic community and affordable living.",
          "highlights": [
            "Student-friendly",
            "Cultural events",
            "Affordable",
            "Vibrant nightlife"
          ]
        },
        {
          "city": "Odense",
          "image": "https://images.unsplash.com/photo-1593697820908-7a4d7a86f4f2?q=80&w=600&auto=format",
          "universities": "1 university",
          "description": "A charming city with historical significance and growing tech sector.",
          "highlights": [
            "Historical sites",
            "Tech hub",
            "Affordable living",
            "Green spaces"
          ]
        },
        {
          "city": "Aalborg",
          "image": "https://images.unsplash.com/photo-1593697820908-7a4d7a86f4f2?q=80&w=600&auto=format",
          "universities": "1 university",
          "description": "An industrial city with a focus on engineering and technology.",
          "highlights": [
            "Engineering hub",
            "Affordable",
            "Waterfront",
            "Cultural events"
          ]
        }
      ],
      "studentLifeData": {
        "title": "Student Life and Support Services",
        "icon": {
          "bg": "bg-purple-100",
          "color": "text-purple-600"
        },
        "sections": [
          {
            "title": "Campus Life",
            "bg": "bg-purple-50",
            "border": "border-purple-100",
            "textColor": "text-purple-800",
            "items": [
              {
                "title": "Student Associations",
                "description": "Active student organizations for social and academic activities."
              },
              {
                "title": "Clubs & Societies",
                "description": "Wide range of clubs from sports to cultural activities."
              },
              {
                "title": "Sports Facilities",
                "description": "Modern gyms, sports halls, and outdoor facilities."
              },
              {
                "title": "Events",
                "description": "Friday bars, cultural festivals, and orientation weeks."
              }
            ]
          },
          {
            "title": "Support Services",
            "bg": "bg-blue-50",
            "border": "border-blue-100",
            "textColor": "text-blue-800",
            "items": [
              {
                "title": "International Office",
                "description": "Support for visa, housing, and integration."
              },
              {
                "title": "Counseling Services",
                "description": "Free mental health and academic counseling."
              },
              {
                "title": "Career Services",
                "description": "Job fairs, CV workshops, and internship support."
              },
              {
                "title": "Language Support",
                "description": "Free Danish language courses for international students."
              }
            ]
          },
          {
            "title": "Accommodation Options",
            "bg": "bg-green-50",
            "border": "border-green-100",
            "textColor": "text-green-800",
            "items": [
              {
                "title": "Student Dormitories",
                "description": "Affordable on-campus or nearby housing.",
                "badges": ["Affordable", "Social", "Convenient"]
              },
              {
                "title": "Private Rentals",
                "description": "Shared apartments or private flats.",
                "badges": ["Independent", "Flexible", "City access"]
              },
              {
                "title": "Homestay",
                "description": "Live with a Danish family for cultural immersion.",
                "badges": ["Cultural", "Supportive", "Affordable"]
              }
            ]
          },
          {
            "title": "Transportation",
            "bg": "bg-amber-50",
            "border": "border-amber-100",
            "textColor": "text-amber-800",
            "items": [
              {
                "title": "Cycling",
                "description": "Denmark is bike-friendly with extensive cycle lanes."
              },
              {
                "title": "Public Transport",
                "description": "Efficient buses, trains, and metro with student discounts."
              },
              {
                "title": "Youth Card",
                "description": "Discounted travel for students under 30."
              }
            ]
          }
        ],
        "additionalInfo": {
          "title": "Healthcare for International Students",
          "description": "Students receive a Danish health card (yellow card) for free access to public healthcare after registering with the Danish authorities.",
          "items": [
            {
              "title": "Covered Services",
              "points": [
                "GP consultations",
                "Hospital care",
                "Emergency services",
                "Mental health services"
              ]
            },
            {
              "title": "Additional Costs",
              "points": [
                "Dental care",
                "Prescription medications",
                "Specialist treatments"
              ]
            }
          ]
        }
      },
      "latestUpdates2025": [
        {
          "title": "Extended Establishment Card",
          "description": "Post-study work extension",
          "content": "The Danish government has extended the Establishment Card duration to 3 years for non-EU/EEA graduates, enhancing post-study work opportunities.",
          "category": "Visa Policy",
          "gradient": "from-blue-50 to-sky-50",
          "border": "border-blue-100",
          "badgeColor": "bg-blue-500",
          "titleColor": "text-blue-800"
        },
        {
          "title": "Digital Application System",
          "description": "Streamlined visa process",
          "content": "Denmark has fully digitized its visa and residence permit applications, reducing processing times and paperwork for international students.",
          "category": "Digital Innovation",
          "gradient": "from-purple-50 to-pink-50",
          "border": "border-purple-100",
          "badgeColor": "bg-purple-500",
          "titleColor": "text-purple-800"
        },
        {
          "title": "Increased Scholarship Funding",
          "description": "More financial support",
          "content": "The Danish government and universities have increased scholarship funding for non-EU/EEA students by 15% for 2025, focusing on STEM and sustainability programs.",
          "category": "Scholarships",
          "gradient": "from-amber-50 to-yellow-50",
          "border": "border-amber-100",
          "badgeColor": "bg-amber-500",
          "titleColor": "text-amber-800"
        }
      ],
      "policyChanges2025": [
        {
          "title": "Updated Financial Requirements",
          "content": "The financial requirement for residence permits has increased to DKK 6,429/month for 2025, reflecting cost-of-living adjustments."
        },
        {
          "title": "English Proficiency",
          "content": "Some programs now require higher IELTS scores (6.5 for undergraduate, 7.0 for postgraduate) to align with international standards."
        }
      ],
      "resourcecards": [
        {
          "title": "Course Finder",
          "description": "Explore programs across Danish universities by subject and location.",
          "buttonText": "Find Your Course",
          "gradient": "from-blue-50 to-indigo-50",
          "borderColor": "border-blue-100",
          "textColor": "text-blue-800",
          "buttonColor": "bg-blue-600 hover:bg-blue-700"
        },
        {
          "title": "University Rankings",
          "description": "Compare Danish universities based on teaching, research, and innovation.",
          "buttonText": "View Rankings",
          "gradient": "from-purple-50 to-fuchsia-50",
          "borderColor": "border-purple-100",
          "textColor": "text-purple-800",
          "buttonColor": "bg-purple-600 hover:bg-purple-700"
        },
        {
          "title": "Visa Checklist",
          "description": "Tool to ensure you have all documents for your residence permit.",
          "buttonText": "Get Checklist",
          "gradient": "from-green-50 to-emerald-50",
          "borderColor": "border-green-100",
          "textColor": "text-green-800",
          "buttonColor": "bg-green-600 hover:bg-green-700"
        }
      ],
      "resourceofficialLinks": [
        { "label": "Study in Denmark", "href": "https://studyindenmark.dk" },
        { "label": "Danish Agency for International Recruitment and Integration (SIRI)", "href": "https://www.siri.dk" },
        { "label": "Danish Ministry of Higher Education and Science", "href": "https://ufm.dk" }
      ],
      "resourceguides": [
        { "label": "Denmark Study Guide (PDF)", "href": "#" },
        { "label": "Residence Permit Guide (PDF)", "href": "#" },
        { "label": "Student Life in Denmark (PDF)", "href": "#" }
      ],
      "resourcetools": [
        {
          "title": "Cost Calculator",
          "description": "Estimate your study and living expenses in Denmark.",
          "buttonText": "Calculate Costs"
        },
        {
          "title": "Scholarship Finder",
          "description": "Match scholarships to your profile and program.",
          "buttonText": "Find Scholarships"
        }
      ],
      "faqs": [
        {
          "question": "How long does it take to get a Danish student residence permit?",
          "answer": "Processing typically takes 1-2 months from the date of application submission, including biometrics. Apply at least 3 months before your program starts to account for peak periods."
        },
        {
          "question": "Can I work while studying in Denmark?",
          "answer": "Yes, non-EU/EEA students can work up to 20 hours per week during term time and full-time during June, July, and August. EU/EEA students have no restrictions."
        },
        {
          "question": "What English tests are accepted by Danish universities?",
          "answer": "Accepted tests include IELTS Academic (6.5–7.5), TOEFL iBT (83–100), and Cambridge Advanced (CAE). Some universities accept PTE Academic or Duolingo English Test."
        },
        {
          "question": "How much does it cost to study in Denmark as an international student?",
          "answer": "Tuition is free for EU/EEA/Swiss students. Non-EU/EEA students pay DKK 45,000–130,000 per year. Living costs range from DKK 7,000–10,000/month in Copenhagen and DKK 5,000–7,500 elsewhere."
        },
        {
          "question": "What scholarships are available for international students?",
          "answer": "Options include Danish Government Scholarships, university-specific merit-based awards, and Nordplus for Nordic/Baltic students. Check university websites for details."
        },
        {
          "question": "Can I stay in Denmark after graduation?",
          "answer": "Non-EU/EEA graduates can apply for a 3-year Establishment Card to seek employment. EU/EEA students can stay without restrictions."
        }
      ]
  },
  
malaysia: {
      "code": "my",
      "name": "Malaysia",
      "flagUrl": "https://flagcdn.com/w320/my.png",
      "heroImage": "https://images.unsplash.com/photo-1512486130939-2b7b4c8f2349?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "quickFacts": {
        "population": "34.5 million",
        "capital": "Kuala Lumpur",
        "language": "Malay (Bahasa Malaysia), English widely used",
        "currency": "Malaysian Ringgit (MYR)",
        "academicYear": "January/February and July/September (varies by university)"
      },
      "keyDates": {
        "mainIntake": "February/March, July/September",
        "secondaryIntake": "November (some programs)",
        "scholarshipDeadlines": "Varies, typically March-June for major scholarships"
      },
      "overviewSections": [
        {
          "title": "Why Study in Malaysia?",
          "description": "Malaysia offers affordable, high-quality education in a multicultural and vibrant environment, making it a top choice for international students.",
          "points": [
            {
              "heading": "Affordable Education",
              "text": "Low tuition fees compared to Western countries, with many English-taught programs."
            },
            {
              "heading": "Cultural Diversity",
              "text": "A blend of Malay, Chinese, Indian, and indigenous cultures."
            },
            {
              "heading": "Global Recognition",
              "text": "Degrees recognized worldwide, with partnerships with UK, Australian, and US universities."
            },
            {
              "heading": "Strategic Location",
              "text": "A gateway to explore Southeast Asia with affordable travel options."
            }
          ]
        },
        {
          "title": "Education System at a Glance",
          "description": "Malaysia’s higher education system is globally recognized, with affordable programs and a focus on English-taught courses.",
          "cards": [
            {
              "color": "red-500",
              "title": "Undergraduate",
              "subtitle": "Bachelor’s Degree",
              "points": [
                "3-4 years duration",
                "Bachelor of Arts/Science (BA/BSc)",
                "English-taught programs widely available",
                "Twinning and 3+0 programs with international partners"
              ]
            },
            {
              "color": "blue-500",
              "title": "Postgraduate",
              "subtitle": "Master’s Degree",
              "points": [
                "1-2 years duration",
                "Master of Arts/Science (MA/MSc), MBA",
                "Coursework, research, or mixed-mode options",
                "Affordable fees with scholarship opportunities"
              ]
            },
            {
              "color": "purple-500",
              "title": "Doctorate",
              "subtitle": "PhD",
              "points": [
                "3-5 years duration",
                "Research-focused with dissertation",
                "Strong in STEM, business, and social sciences",
                "Funding often available"
              ]
            }
          ],
          "note": {
            "text": "Malaysia uses a CGPA system (4.0 scale, 3.0+ for good standing). Many universities adopt ECTS credits for international compatibility.",
            "color": "yellow-50",
            "border": "yellow-100",
            "textColor": "yellow-700"
          }
        }
      ],
      "topcourse": [
        {
          "title": "Engineering",
          "details": "Mechanical, Electrical, Civil, Petroleum",
          "color": "bg-blue-50 border-blue-200"
        },
        {
          "title": "Business & Management",
          "details": "MBA, Finance, Marketing",
          "color": "bg-amber-50 border-amber-200"
        },
        {
          "title": "Computer Science",
          "details": "AI, Cybersecurity, Software Engineering",
          "color": "bg-indigo-50 border-indigo-200"
        },
        {
          "title": "Medicine",
          "details": "MBBS, Dentistry, Pharmacy",
          "color": "bg-red-50 border-red-200"
        },
        {
          "title": "Hospitality & Tourism",
          "details": "Hotel Management, Tourism Management",
          "color": "bg-green-50 border-green-200"
        },
        {
          "title": "Social Sciences",
          "details": "Psychology, International Relations",
          "color": "bg-purple-50 border-purple-200"
        },
        {
          "title": "Creative Arts",
          "details": "Graphic Design, Film, Animation",
          "color": "bg-pink-50 border-pink-200"
        },
        {
          "title": "Biotechnology",
          "details": "Biomedical Science, Bioinformatics",
          "color": "bg-cyan-50 border-cyan-200"
        },
        {
          "title": "Environmental Science",
          "details": "Sustainability, Environmental Management",
          "color": "bg-teal-50 border-teal-200"
        }
      ],
      "topuniversites": [
        {
          "name": "Universiti Malaya (UM)",
          "location": "Kuala Lumpur",
          "rank": "60",
          "notable": "Engineering, Medicine, Social Sciences"
        },
        {
          "name": "Universiti Sains Malaysia (USM)",
          "location": "Penang",
          "rank": "132",
          "notable": "Pharmacy, Engineering, Research"
        },
        {
          "name": "Universiti Putra Malaysia (UPM)",
          "location": "Serdang",
          "rank": "148",
          "notable": "Agriculture, Business, Biotechnology"
        },
        {
          "name": "Universiti Kebangsaan Malaysia (UKM)",
          "location": "Bangi",
          "rank": "156",
          "notable": "Education, Social Sciences, Medicine"
        },
        {
          "name": "Universiti Teknologi Malaysia (UTM)",
          "location": "Johor Bahru",
          "rank": "181",
          "notable": "Engineering, Technology, Architecture"
        },
        {
          "name": "Monash University Malaysia",
          "location": "Subang Jaya",
          "rank": "37 (Monash Global)",
          "notable": "Business, Engineering, IT"
        },
        {
          "name": "Taylor’s University",
          "location": "Subang Jaya",
          "rank": "251-300",
          "notable": "Hospitality, Business, Culinary Arts"
        },
        {
          "name": "Asia Pacific University (APU)",
          "location": "Kuala Lumpur",
          "rank": "621-650",
          "notable": "Technology, Business, Animation"
        }
      ],
      "intakes": [
        {
          "label": "February/March",
          "description": "Primary intake for most programs",
          "icon": "S"
        },
        {
          "label": "July/September",
          "description": "Secondary intake with broad program options",
          "icon": "F"
        },
        {
          "label": "November",
          "description": "Limited intake for specific programs",
          "icon": "N"
        }
      ],
      "deadlines": [
        {
          "title": "Undergraduate",
          "icon": "U",
          "details": [
            "November-December (February/March intake)",
            "April-June (July/September intake)"
          ]
        },
        {
          "title": "Postgraduate",
          "icon": "P",
          "details": [
            "October-November (February/March intake)",
            "March-May (July/September intake)"
          ]
        },
        {
          "title": "Scholarships",
          "icon": "S",
          "details": [
            "Malaysian International Scholarship: May-June",
            "University-specific: Varies, often March-June"
          ]
        }
      ],
      "addmissionnotes": [
        "Apply directly to universities or via Education Malaysia Global Services (EMGS)",
        "Ensure documents are translated into English",
        "Check English proficiency requirements (IELTS/TOEFL)",
        "Visa processing via EMGS takes 3-8 weeks",
        "Apply for scholarships early to meet deadlines"
      ],
      "requirementsData": [
        {
          "title": "Undergraduate Requirements",
          "color": "bg-blue-500",
          "items": [
            "High school diploma or equivalent (A-Levels, IB, etc.)",
            "Academic transcripts",
            "IELTS 5.5-6.0 or TOEFL iBT 80+",
            "Personal statement",
            "Letters of recommendation (1-2)",
            "Passport copy",
            "Proof of funds (MYR 42,000-70,445/year, ~$9,000-$15,150)"
          ]
        },
        {
          "title": "Postgraduate Requirements",
          "color": "bg-purple-500",
          "items": [
            "Bachelor’s degree (CGPA 2.5-3.0 or equivalent)",
            "Academic transcripts",
            "IELTS 6.0-6.5 or TOEFL iBT 80+",
            "Statement of purpose",
            "CV/Resume",
            "Letters of recommendation (2-3)",
            "Proof of funds (MYR 42,000-70,445/year, ~$9,000-$15,150)",
            "Research proposal for research-based programs"
          ]
        }
      ],
      "CountrySpecificRequirements": "International qualifications (e.g., A-Levels, IB) are accepted but may require equivalency checks by the Malaysian Qualifications Agency (MQA). Some programs may require preparatory courses. Check university-specific requirements via their websites or www.studymalaysia.com.",
      "tuitionData": [
        {
          "level": "Foundation/Diploma",
          "range": "MYR 10,000 - MYR 25,000/year ($2,150-$5,380)",
          "average": "MYR 15,000 ($3,225)",
          "notes": "Cheaper at public universities"
        },
        {
          "level": "Undergraduate (Public Universities)",
          "range": "MYR 10,000 - MYR 40,000/year ($2,150-$8,600)",
          "average": "MYR 25,000 ($5,380)",
          "notes": "Medicine up to MYR 150,000/year ($32,260)"
        },
        {
          "level": "Undergraduate (Private Universities)",
          "range": "MYR 25,000 - MYR 73,377/year ($5,380-$15,780)",
          "average": "MYR 40,000 ($8,600)",
          "notes": "Twinning/3+0 programs may cost more"
        },
        {
          "level": "Postgraduate",
          "range": "MYR 10,000 - MYR 45,000/year ($2,150-$9,680)",
          "average": "MYR 25,000 ($5,380)",
          "notes": "Research-based programs often cheaper"
        },
        {
          "level": "PhD",
          "range": "MYR 15,000 - MYR 50,000/year ($3,225-$10,750)",
          "average": "MYR 30,000 ($6,450)",
          "notes": "Often funded via assistantships"
        }
      ],
      "tuitionNote": "Tuition fees vary by institution and program. Public universities are generally cheaper. Medicine and twinning programs (e.g., 3+0 UK degrees) are at the higher end. Scholarships can cover 10-100% of tuition. A 6% Service Tax (SST) on foreign students was introduced in July 2025, increasing costs slightly.",
      "expenses": [
        { "label": "Accommodation", "range": "MYR 300 - MYR 1,200/month ($65-$260)", "percentage": 50 },
        { "label": "Food & Groceries", "range": "MYR 200 - MYR 350/month ($45-$75)", "percentage": 30 },
        { "label": "Transportation", "range": "MYR 50 - MYR 150/month ($10-$32)", "percentage": 15 },
        { "label": "Utilities", "range": "MYR 40 - MYR 70/month ($9-$15)", "percentage": 10 },
        { "label": "Mobile/Internet", "range": "MYR 30 - MYR 70/month ($7-$15)", "percentage": 10 },
        { "label": "Books & Supplies", "range": "MYR 50 - MYR 150/month ($10-$32)", "percentage": 10 },
        { "label": "Entertainment", "range": "MYR 100 - MYR 300/month ($22-$65)", "percentage": 20 }
      ],
      "regionalCosts": [
        {
          "region": "Kuala Lumpur",
          "level": "Expensive",
          "color": "text-red-500",
          "range": "MYR 1,500 - MYR 2,500/month ($320-$540)"
        },
        {
          "region": "Penang, Johor Bahru",
          "level": "Moderate",
          "color": "text-orange-500",
          "range": "MYR 1,200 - MYR 2,000/month ($260-$430)"
        },
        {
          "region": "Serdang, Kota Kinabalu",
          "level": "Affordable",
          "color": "text-green-500",
          "range": "MYR 900 - MYR 1,500/month ($195-$320)"
        }
      ],
      "scholarships": [
        {
          "category": "Government Scholarships",
          "color": "indigo",
          "items": [
            {
              "title": "Malaysian International Scholarship (MIS)",
              "description": "Covers tuition, living expenses (MYR 3,500/month), airfare for postgraduate students."
            },
            {
              "title": "Malaysian Technical Cooperation Programme (MTCP)",
              "description": "Fully funded for students from MTCP countries, includes tuition and stipend."
            },
            {
              "title": "Commonwealth Scholarship",
              "description": "For students from Commonwealth countries, covers tuition and living costs."
            }
          ]
        },
        {
          "category": "University Scholarships",
          "color": "blue",
          "items": [
            {
              "title": "APU Merit Scholarship",
              "description": "Full or partial tuition waivers for students with CGPA 3.7+."
            },
            {
              "title": "Monash High Achiever Scholarship",
              "description": "Up to 50% tuition waiver for high-performing students."
            },
            {
              "title": "Taylor’s Merit Scholarship",
              "description": "Partial tuition waivers based on academic excellence."
            }
          ]
        }
      ],
      "financialSupports": [
        {
          "title": "Part-Time Work",
          "description": "Up to 20 hours/week during semester breaks, in retail, hospitality, or tutoring."
        },
        {
          "title": "Internships",
          "description": "Paid internships in tech, business, and hospitality sectors."
        },
        {
          "title": "Research Assistantships",
          "description": "Available for postgraduate students with stipends."
        },
        {
          "title": "Teaching Assistantships",
          "description": "Support for academic teaching, primarily for PhD students."
        }
      ],
      "TipsforScholarship": [
        "Apply for MIS/MTCP via the official portal (May-June deadlines)",
        "Submit strong academic records and a compelling personal statement",
        "Check English proficiency requirements (IELTS 6.0-6.5 or TOEFL equivalent)",
        "Explore university-specific scholarships early via official websites"
      ],
      "myVisaData": {
        "title": "Malaysia Student Visa Requirements",
        "intro": "International students need a Student Pass (via EMGS) to study in Malaysia. Some countries are visa-exempt for short stays but still require a Student Pass for study.",
        "sections": [
          {
            "title": "Basic Requirements",
            "color": "#3B82F6",
            "items": [
              "Acceptance letter from a recognized Malaysian institution",
              "Valid passport (6+ months validity)",
              "Proof of funds (MYR 42,000-70,445/year, ~$9,000-$15,150)",
              "Medical examination report from approved clinic",
              "IELTS 5.5-6.5 or TOEFL iBT 80+ (program-dependent)",
              "Academic transcripts and certificates",
              "Visa application fee (MYR 1,060, ~$228) and EMGS fee (MYR 2,000-4,500, ~$430-$970)"
            ]
          },
          {
            "title": "Financial Requirements",
            "color": "#F59E0B",
            "items": [
              "MYR 42,000/year ($9,000) for most regions",
              "MYR 70,445/year ($15,150) for premium institutions",
              "Bank statement, scholarship letter, or sponsor letter",
              "Funds must cover at least one year"
            ]
          }
        ],
        "facts": [
          "Visa/EMGS fee: MYR 3,060-5,560 ($658-$1,195)",
          "Processing time: 3-8 weeks",
          "Mandatory health insurance: MYR 500-1,000/year ($108-$215)",
          "i-Kad (biometric residence permit) required within 30 days ($43)"
        ],
        "benefits": [
          {
            "title": "Work Rights",
            "description": "20 hours/week during semester breaks in approved sectors."
          },
          {
            "title": "Post-Study Work",
            "description": "Up to 12 months via Employment Pass (Category III) with employer sponsorship."
          },
          {
            "title": "Healthcare",
            "description": "Access to affordable healthcare with mandatory insurance."
          }
        ]
      },
      "visaStepsData": [
        {
          "step": "1",
          "title": "Receive Acceptance Letter",
          "color": "bg-blue-500",
          "content": "Secure admission from a Malaysian institution."
        },
        {
          "step": "2",
          "title": "Apply via EMGS",
          "color": "bg-indigo-500",
          "content": "Submit visa application through Education Malaysia Global Services."
        },
        {
          "step": "3",
          "title": "Prepare Financial Proof",
          "color": "bg-purple-500",
          "content": "Provide bank statement or scholarship letter (MYR 42,000-70,445/year)."
        },
        {
          "step": "4",
          "title": "Complete Medical Exam",
          "color": "bg-pink-500",
          "content": "Undergo health check at an EMGS-approved clinic."
        },
        {
          "step": "5",
          "title": "Submit Documents",
          "color": "bg-red-500",
          "content": "Provide passport, transcripts, and language certificates."
        },
        {
          "step": "6",
          "title": "Pay Fees",
          "color": "bg-amber-500",
          "content": "Pay visa (MYR 1,060) and EMGS fees (MYR 2,000-4,500)."
        },
        {
          "step": "7",
          "title": "Wait for Approval",
          "color": "bg-green-500",
          "content": "Visa processing takes 3-8 weeks."
        },
        {
          "step": "8",
          "title": "Obtain i-Kad",
          "color": "bg-blue-500",
          "content": "Register for biometric residence permit within 30 days."
        }
      ],
      "workOpportunitiesData": [
        {
          "title": "During Studies",
          "color": "bg-indigo-500",
          "sections": [
            {
              "heading": "Working Hours",
              "points": [
                "20 hours/week during semester breaks",
                "No work during semester for full-time students",
                "Minimum wage: MYR 6.50/hour ($1.40)",
                "Requires university and EMGS approval"
              ]
            },
            {
              "heading": "Common Student Jobs",
              "points": [
                "Retail and hospitality",
                "English tutoring",
                "Campus jobs (library, admin)",
                "Internships in tech/business"
              ]
            }
          ]
        },
        {
          "title": "Post-Graduation",
          "color": "bg-green-500",
          "sections": [
            {
              "heading": "Employment Pass",
              "points": [
                "Up to 12 months with employer sponsorship",
                "Focus on tech, finance, engineering, healthcare",
                "No specific post-study work visa",
                "Path to Permanent Residency after 5 years (selective)"
              ]
            },
            {
              "heading": "Employment Opportunities",
              "points": [
                "Tech industry (Cyberjaya hub)",
                "Finance and banking (Kuala Lumpur)",
                "Hospitality and tourism",
                "Healthcare and pharmaceuticals"
              ]
            }
          ]
        }
      ],
      "jobMarketData": {
        "sectors": [
          "Technology and IT",
          "Finance and Banking",
          "Hospitality and Tourism",
          "Healthcare",
          "Engineering",
          "Education"
        ],
        "salaries": [
          "Kuala Lumpur: MYR 36,000 - MYR 60,000/year ($7,740-$12,900)",
          "Other cities: MYR 30,000 - MYR 50,000/year ($6,450-$10,750)",
          "Engineering/IT: MYR 40,000 - MYR 70,000/year ($8,600-$15,050)",
          "Business: MYR 35,000 - MYR 60,000/year ($7,530-$12,900)"
        ]
      },
      "bestCitiesData": [
        {
          "city": "Kuala Lumpur",
          "image": "https://images.unsplash.com/photo-1512486130939-2b7b4c8f2349?q=80&w=600&auto=format",
          "universities": "6 major universities",
          "description": "The capital city with top universities and a vibrant urban lifestyle.",
          "highlights": ["Cultural diversity", "Tech hub", "Shopping", "Nightlife"]
        },
        {
          "city": "Penang",
          "image": "https://images.unsplash.com/photo-1595769816267-7e3e56e8c4c7?q=80&w=600&auto=format",
          "universities": "3 major universities",
          "description": "A cultural and food haven with affordable living.",
          "highlights": ["Street food", "Heritage sites", "Beaches", "Affordable"]
        },
        {
          "city": "Johor Bahru",
          "image": "https://images.unsplash.com/photo-1620207419188-546da08c73d2?q=80&w=600&auto=format",
          "universities": "2 major universities",
          "description": "A growing education hub near Singapore.",
          "highlights": ["Proximity to Singapore", "Affordable", "Theme parks", "Shopping"]
        },
        {
          "city": "Subang Jaya",
          "image": "https://images.unsplash.com/photo-1595769816267-7e3e56e8c4c7?q=80&w=600&auto=format",
          "universities": "3 major universities",
          "description": "A student-friendly city with private university campuses.",
          "highlights": ["Student vibe", "Modern amenities", "Affordable", "Connectivity"]
        },
        {
          "city": "Kota Kinabalu",
          "image": "https://images.unsplash.com/photo-1595769816267-7e3e56e8c4c7?q=80&w=600&auto=format",
          "universities": "1 major university",
          "description": "A scenic city with a relaxed lifestyle and natural attractions.",
          "highlights": ["Beaches", "Mount Kinabalu", "Affordable", "Nature"]
        }
      ],
      "studentLifeData": {
        "title": "Student Life and Support Services",
        "icon": {
          "bg": "bg-purple-100",
          "color": "text-purple-600"
        },
        "sections": [
          {
            "title": "Campus Life",
            "bg": "bg-purple-50",
            "border": "border-purple-100",
            "textColor": "text-purple-800",
            "items": [
              {
                "title": "Student Clubs",
                "description": "Cultural, sports, tech, and academic clubs."
              },
              {
                "title": "Cultural Events",
                "description": "Festivals, food fairs, and university events."
              },
              {
                "title": "Sports Facilities",
                "description": "Gyms, sports fields, and recreational centers."
              },
              {
                "title": "Campus Dining",
                "description": "Affordable local and international cuisine."
              }
            ]
          },
          {
            "title": "Support Services",
            "bg": "bg-blue-50",
            "border": "border-blue-100",
            "textColor": "text-blue-800",
            "items": [
              {
                "title": "International Offices",
                "description": "Support for visas, housing, and integration."
              },
              {
                "title": "English Language Support",
                "description": "Preparatory courses for IELTS/TOEFL."
              },
              {
                "title": "Career Services",
                "description": "Job fairs, internships, and career counseling."
              },
              {
                "title": "Mental Health Support",
                "description": "Counseling and wellness programs."
              }
            ]
          },
          {
            "title": "Accommodation Options",
            "bg": "bg-green-50",
            "border": "border-green-100",
            "textColor": "text-green-800",
            "items": [
              {
                "title": "University Dormitories",
                "description": "Affordable on-campus housing with amenities.",
                "badges": ["Affordable", "Convenient", "Social"]
              },
              {
                "title": "Shared Apartments",
                "description": "Off-campus flats shared with other students.",
                "badges": ["Flexible", "Modern", "Social"]
              },
              {
                "title": "Private Rentals",
                "description": "Independent apartments in city centers.",
                "badges": ["Private", "Central", "Premium"]
              }
            ]
          },
          {
            "title": "Transportation",
            "bg": "bg-amber-50",
            "border": "border-amber-100",
            "textColor": "text-amber-800",
            "items": [
              {
                "title": "Public Transport",
                "description": "Efficient buses and trains with student discounts."
              },
              {
                "title": "Grab Rides",
                "description": "Affordable ride-hailing services."
              },
              {
                "title": "Cycling",
                "description": "Bike rentals in student-friendly cities."
              },
              {
                "title": "Walking",
                "description": "Compact campuses and city centers."
              }
            ]
          }
        ],
        "additionalInfo": {
          "title": "Healthcare for International Students",
          "description": "Mandatory health insurance provides access to Malaysia’s affordable healthcare system.",
          "items": [
            {
              "title": "Covered Services",
              "points": [
                "Doctor visits",
                "Hospital care",
                "Prescriptions",
                "Emergency services"
              ]
            },
            {
              "title": "Additional Costs",
              "points": [
                "Dental and optical care",
                "Specialist treatments",
                "Private insurance options"
              ]
            }
          ]
        }
      },
      "latestUpdates2025": [
        {
          "title": "6% Service Tax (SST) on Foreign Students",
          "description": "Increased costs",
          "content": "A 6% tax on international students was introduced in July 2025, slightly increasing tuition costs.",
          "category": "Policy",
          "gradient": "from-blue-50 to-sky-50",
          "border": "border-blue-100",
          "badgeColor": "bg-blue-500",
          "titleColor": "text-blue-800"
        },
        {
          "title": "Expanded MIS Scholarships",
          "description": "More funding opportunities",
          "content": "The Malaysian International Scholarship expanded in 2025, offering more slots for postgraduate students.",
          "category": "Scholarships",
          "gradient": "from-purple-50 to-pink-50",
          "border": "border-purple-100",
          "badgeColor": "bg-purple-500",
          "titleColor": "text-purple-800"
        },
        {
          "title": "New English-Taught Programs",
          "description": "Increased accessibility",
          "content": "Private universities like Monash and Taylor’s added 10% more English-taught programs in 2025.",
          "category": "Education",
          "gradient": "from-green-50 to-emerald-50",
          "border": "border-green-100",
          "badgeColor": "bg-green-500",
          "titleColor": "text-green-800"
        },
        {
          "title": "Digital EMGS Applications",
          "description": "Streamlined visa process",
          "content": "EMGS introduced digital visa applications for faster processing in 2025.",
          "category": "Visa Policy",
          "gradient": "from-amber-50 to-yellow-50",
          "border": "border-amber-100",
          "badgeColor": "bg-amber-500",
          "titleColor": "text-amber-800"
        }
      ],
      "policyChanges2025": [
        {
          "title": "6% Service Tax",
          "content": "New tax on international students increases tuition costs by 6% starting July 2025."
        },
        {
          "title": "Expanded Work Opportunities",
          "content": "Eased restrictions for part-time work during semester breaks."
        },
        {
          "title": "Digital Visa Processing",
          "content": "EMGS introduced online visa applications for faster processing."
        }
      ],
      "resourcecards": [
        {
          "title": "Course Finder",
          "description": "Search for programs across Malaysian universities.",
          "buttonText": "Find Your Course",
          "gradient": "from-blue-50 to-indigo-50",
          "borderColor": "border-blue-100",
          "textColor": "text-blue-800",
          "buttonColor": "bg-blue-600 hover:bg-blue-700"
        },
        {
          "title": "University Rankings",
          "description": "Compare Malaysian universities by global rankings.",
          "buttonText": "View Rankings",
          "gradient": "from-purple-50 to-fuchsia-50",
          "borderColor": "border-purple-100",
          "textColor": "text-purple-800",
          "buttonColor": "bg-purple-600 hover:bg-purple-700"
        },
        {
          "title": "Visa Checklist",
          "description": "Tool to prepare documents for your Student Pass.",
          "buttonText": "Get Checklist",
          "gradient": "from-green-50 to-emerald-50",
          "borderColor": "border-green-100",
          "textColor": "text-green-800",
          "buttonColor": "bg-green-600 hover:bg-green-700"
        }
      ],
      "resourceofficialLinks": [
        { "label": "StudyMalaysia.com", "href": "https://www.studymalaysia.com" },
        { "label": "Education Malaysia Global Services", "href": "https://visa.educationmalaysia.gov.my" },
        { "label": "Malaysian International Scholarship", "href": "https://biasiswa.mohe.gov.my" },
        { "label": "Universiti Malaya", "href": "https://www.um.edu.my" },
        { "label": "Monash University Malaysia", "href": "https://www.monash.edu.my" }
      ],
      "resourceguides": [
        { "label": "Malaysia Study Guide (PDF)", "href": "#" },
        { "label": "Student Visa Guide (PDF)", "href": "#" },
        { "label": "Scholarship Application Guide (PDF)", "href": "#" },
        { "label": "Living in Malaysia Guide (PDF)", "href": "#" },
        { "label": "English Proficiency Guide (PDF)", "href": "#" }
      ],
      "resourcetools": [
        {
          "title": "Cost Calculator",
          "description": "Estimate tuition and living costs in Malaysia.",
          "buttonText": "Calculate Costs"
        },
        {
          "title": "Scholarship Finder",
          "description": "Find scholarships based on your profile.",
          "buttonText": "Find Scholarships"
        },
        {
          "title": "Program Finder",
          "description": "Explore courses and universities in Malaysia.",
          "buttonText": "Find Programs"
        }
      ],
      "faqs": [
        {
          "question": "How long does it take to get a Malaysian Student Pass?",
          "answer": "Processing takes 3-8 weeks via EMGS. Apply early to account for delays."
        },
        {
          "question": "Can I work while studying in Malaysia?",
          "answer": "Yes, up to 20 hours/week during semester breaks with university and EMGS approval."
        },
        {
          "question": "What language tests are accepted for Malaysian universities?",
          "answer": "IELTS 5.5-6.5 or TOEFL iBT 80+ for most programs. Some universities offer internal English tests."
        },
        {
          "question": "How much does it cost to study in Malaysia?",
          "answer": "Tuition ranges from MYR 10,000-$73,377/year ($2,150-$15,780). Living costs average MYR 1,500-$2,500/month ($320-$540)."
        },
        {
          "question": "What scholarships are available for international students?",
          "answer": "Malaysian International Scholarship, MTCP, and university-specific awards (e.g., APU, Monash) covering 10-100% of tuition."
        },
        {
          "question": "Can I stay in Malaysia after graduation?",
          "answer": "Yes, up to 12 months via Employment Pass with employer sponsorship."
        },
        {
          "question": "What are the application deadlines for Malaysian universities?",
          "answer": "February/March intake: November-December; July/September intake: April-June. Check university websites."
        },
        {
          "question": "Do I need health insurance in Malaysia?",
          "answer": "Yes, mandatory health insurance costs MYR 500-1,000/year ($108-$215)."
        },
        {
          "question": "How do I open a bank account in Malaysia?",
          "answer": "Provide passport, Student Pass, and proof of enrollment. Banks like Maybank and CIMB offer student accounts."
        },
        {
          "question": "What support services are available for international students?",
          "answer": "International offices, English language support, career services, housing assistance, and mental health resources."
        }
      ]
  },
  
malta: {
      "code": "mt",
      "name": "Malta",
      "flagUrl": "https://flagcdn.com/w320/mt.png",
      "heroImage": "https://images.unsplash.com/photo-1595425415634-4e4e6d13e8a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "quickFacts": {
        "population": "557,000",
        "capital": "Valletta",
        "language": "English, Maltese (English is the primary language of instruction)",
        "currency": "Euro (EUR, €)",
        "academicYear": "October to June"
      },
      "keyDates": {
        "fallDeadline": "July 1 (for October intake)",
        "springDeadline": "November 30 (for February intake)",
        "summerDeadline": "April–June (varies by private colleges)"
      },
      "overviewSections": [
        {
          "title": "Why Study in Malta?",
          "description": "Malta, a Mediterranean island nation, offers affordable, high-quality education in English, attracting international students with its rich history and vibrant lifestyle.",
          "points": [
            {
              "heading": "Affordable Education",
              "text": "Low tuition fees (€2,000–€20,000/year) compared to other English-speaking countries."
            },
            {
              "heading": "English-Taught Programs",
              "text": "English is an official language, with most programs taught in English."
            },
            {
              "heading": "Cultural and Historical Hub",
              "text": "Explore ancient sites, festivals, and Mediterranean culture."
            },
            {
              "heading": "Schengen Access",
              "text": "Study visa allows travel to 27 Schengen countries."
            }
          ]
        },
        {
          "title": "Education System at a Glance",
          "description": "Malta’s education system, based on the British model, offers globally recognized degrees with a focus on practical and research-based learning.",
          "cards": [
            {
              "color": "red-500",
              "title": "Undergraduate",
              "subtitle": "Bachelor’s Degree",
              "points": [
                "3–4 years duration (180–240 ECTS credits)",
                "BSc, BA, or equivalent",
                "English-taught programs",
                "Practical and industry-oriented"
              ]
            },
            {
              "color": "blue-500",
              "title": "Postgraduate",
              "subtitle": "Master’s Degree",
              "points": [
                "1–2 years duration (60–120 ECTS credits)",
                "MA, MSc, or MBA",
                "English-taught options available",
                "Thesis or project-based"
              ]
            },
            {
              "color": "purple-500",
              "title": "Doctorate",
              "subtitle": "PhD/Doctoral Degree",
              "points": [
                "3–4 years duration (180–240 ECTS credits)",
                "Research-intensive",
                "Dissertation required",
                "Funding opportunities available"
              ]
            }
          ],
          "note": {
            "text": "Malta uses the ECTS credit system. Grades follow the British system (e.g., First-Class, 2:1). Many programs do not require IELTS if prior education was in English. The system emphasizes small class sizes and international collaboration.",
            "color": "yellow-50",
            "border": "yellow-100",
            "textColor": "yellow-700"
          }
        }
      ],
      "topcourse": [
        {
          "title": "Business & Management",
          "details": "MBA, Finance, International Business",
          "color": "bg-amber-50 border-amber-200"
        },
        {
          "title": "Information Technology",
          "details": "Computer Science, AI, Cybersecurity",
          "color": "bg-indigo-50 border-indigo-200"
        },
        {
          "title": "Healthcare & Nursing",
          "details": "Nursing, Public Health, Biomedical Sciences",
          "color": "bg-red-50 border-red-200"
        },
        {
          "title": "Engineering",
          "details": "Mechanical, Electrical, Civil",
          "color": "bg-blue-50 border-blue-200"
        },
        {
          "title": "Tourism & Hospitality",
          "details": "Hospitality Management, Tourism Studies",
          "color": "bg-green-50 border-green-200"
        },
        {
          "title": "Social Sciences",
          "details": "Psychology, International Relations",
          "color": "bg-purple-50 border-purple-200"
        },
        {
          "title": "Arts & Humanities",
          "details": "History, Cultural Studies, Archaeology",
          "color": "bg-cyan-50 border-cyan-200"
        }
      ],
      "topuniversities": [
        {
          "name": "University of Malta",
          "location": "Msida",
          "rank": "751–800 (QS World 2025)",
          "notable": "Business, IT, Nursing, Humanities"
        },
        {
          "name": "Malta College of Arts, Science and Technology (MCAST)",
          "location": "Paola",
          "rank": "Vocational focus",
          "notable": "Engineering, Applied Sciences, Creative Arts"
        },
        {
          "name": "American University of Malta (AUM)",
          "location": "Cospicua",
          "rank": "Private institution",
          "notable": "Business, Engineering, IT"
        },
        {
          "name": "Global College Malta",
          "location": "St. Julian’s",
          "rank": "Private institution",
          "notable": "Business, Management, MBA"
        },
        {
          "name": "London School of Commerce Malta",
          "location": "Floriana",
          "rank": "Private institution",
          "notable": "Business, MBA"
        }
      ],
      "intakes": [
        {
          "label": "October",
          "description": "Primary intake for most programs",
          "icon": "O"
        },
        {
          "label": "February",
          "description": "Secondary intake for select programs",
          "icon": "F"
        },
        {
          "label": "April–June",
          "description": "Limited intake for private colleges",
          "icon": "S"
        }
      ],
      "deadlines": [
        {
          "title": "Undergraduate",
          "icon": "U",
          "details": [
            "July 1 for October intake",
            "November 30 for February intake"
          ]
        },
        {
          "title": "Postgraduate",
          "icon": "P",
          "details": [
            "June–July for October intake",
            "January–February for February intake"
          ]
        },
        {
          "title": "Scholarships",
          "icon": "S",
          "details": [
            "Varies by scholarship (e.g., July 1 for University of Malta Scholarships)"
          ]
        }
      ],
      "admissionnotes": [
        "IELTS often not required; Medium of Instruction (MOI) letter accepted",
        "Non-EU students need a Type D visa for studies over 90 days",
        "Application fees: €25 (early) or €60 (late) at University of Malta",
        "Apply directly to universities, avoid agents for transparency"
      ],
      "requirementsData": [
        {
          "title": "Undergraduate Requirements",
          "color": "bg-blue-500",
          "items": [
            "High school diploma or equivalent",
            "Academic transcripts (translated into English)",
            "English proficiency (IELTS 5.5–6.0, TOEFL 80, or MOI letter)",
            "Motivation letter",
            "Passport copy",
            "Recommendation letter (optional)"
          ]
        },
        {
          "title": "Postgraduate Requirements",
          "color": "bg-purple-500",
          "items": [
            "Relevant bachelor’s degree",
            "Academic transcripts (translated into English)",
            "English proficiency (IELTS 6.0–6.5, TOEFL 80, or MOI letter)",
            "CV/Resume",
            "Motivation letter",
            "Recommendation letters (1–2)"
          ]
        }
      ],
      "CountrySpecificRequirements": "International qualifications must be equivalent to Maltese standards (MQF levels). Non-EU students may need to submit documents via the university’s online portal. Some programs require interviews or additional tests (e.g., nursing).",
      "tuitionData": [
        {
          "level": "Undergraduate (Public)",
          "range": "€2,000 - €10,800/year",
          "average": "€6,000",
          "notes": "Free for EU/EEA students at University of Malta (except specialized programs)"
        },
        {
          "level": "Postgraduate (Public)",
          "range": "€2,000 - €13,400/year",
          "average": "€7,000",
          "notes": "Science and business programs higher"
        },
        {
          "level": "Private Universities",
          "range": "€6,000 - €20,000/year",
          "average": "€12,000",
          "notes": "AUM: €6,690–€11,150/year; Global College: €4,460–€16,170/year"
        },
        {
          "level": "PhD",
          "range": "€1,000 - €10,000/year",
          "average": "€5,000",
          "notes": "Often reduced with scholarships or research funding"
        }
      ],
      "tuitionNote": "EU/EEA students study free at the University of Malta for most programs. Non-EU students pay €1,080/semester (arts/business) or €1,360/semester (science/engineering) at public universities. Private institutions charge higher fees. Additional costs include application fees (€25–€60) and study materials (€100–€300/year).",
      "expenses": [
        { "label": "Accommodation", "range": "€300 - €600", "percentage": 50 },
        { "label": "Food & Groceries", "range": "€150 - €250", "percentage": 30 },
        { "label": "Transportation", "range": "€25 - €40", "percentage": 10 },
        { "label": "Utilities", "range": "€50 - €100", "percentage": 15 },
        { "label": "Mobile/Internet", "range": "€15 - €30", "percentage": 10 },
        { "label": "Books & Supplies", "range": "€50 - €150", "percentage": 10 },
        { "label": "Entertainment", "range": "€50 - €150", "percentage": 25 }
      ],
      "regionalCosts": [
        {
          "region": "Valletta, Sliema, St. Julian’s",
          "level": "Expensive",
          "color": "text-red-500",
          "range": "€600 - €1,000"
        },
        {
          "region": "Msida, Gzira",
          "level": "Moderate",
          "color": "text-yellow-500",
          "range": "€400 - €700"
        },
        {
          "region": "Paola, Mosta, Gozo",
          "level": "Affordable",
          "color": "text-green-500",
          "range": "€300 - €500"
        }
      ],
      "scholarships": [
        {
          "category": "Government Scholarships",
          "color": "indigo",
          "items": [
            {
              "title": "Malta Government Scholarship Scheme",
              "description": "Covers tuition and provides a stipend for living expenses."
            },
            {
              "title": "ENDEAVOUR Scholarships Scheme",
              "description": "For research-based programs, up to €30,000 for Master’s/PhD."
            },
            {
              "title": "Erasmus+ Program",
              "description": "EU-funded, covers tuition, travel, and living costs for exchange students."
            }
          ]
        },
        {
          "category": "University Scholarships",
          "color": "blue",
          "items": [
            {
              "title": "University of Malta Scholarships",
              "description": "Full tuition waivers for non-EU students in Master’s/PhD programs."
            },
            {
              "title": "MCAST Scholarships",
              "description": "Merit-based, partial tuition waivers for vocational programs."
            },
            {
              "title": "AUM Merit Scholarships",
              "description": "Up to €5,000 for high-achieving students."
            }
          ]
        },
        {
          "category": "External Scholarships",
          "color": "green",
          "items": [
            {
              "title": "Rotary Foundation Global Grants",
              "description": "Merit-based, up to €5,000 for development-focused studies."
            },
            {
              "title": "Education Future International Scholarship",
              "description": "Merit-based, up to €5,000 for Indian students."
            },
            {
              "title": "Bending Spoons Women in Computer Science",
              "description": "Up to €10,000 for women in tech programs."
            }
          ]
        }
      ],
      "financialSupports": [
        {
          "title": "Part-Time Work",
          "description": "Non-EU students can work up to 20 hours/week after 90 days with an employment permit."
        },
        {
          "title": "Education Loans",
          "description": "Collateral-free loans available from Indian banks, covering tuition and living costs."
        },
        {
          "title": "Student Discounts",
          "description": "Discounts on transport, cultural sites, and entertainment."
        },
        {
          "title": "Research Funding",
          "description": "Paid research assistantships for graduate/PhD students."
        }
      ],
      "TipsforScholarship": [
        "Apply early (e.g., July 1 for University of Malta Scholarships)",
        "Submit strong academic records and personal statement",
        "Check university websites and Malta Ministry of Education for updates",
        "Explore external scholarships like Education Future for Indian students"
      ],
      "ukVisaData": {
        "title": "Malta Student Visa Requirements",
        "intro": "Non-EU students need a Type D (long-stay) visa for studies over 90 days or a Type C (short-stay) visa for courses under 90 days. EU/EEA students register with local authorities within 14 days.",
        "sections": [
          {
            "title": "Basic Requirements",
            "color": "#3B82F6",
            "items": [
              "Acceptance letter from a Maltese university",
              "Valid passport (valid for duration of stay)",
              "Proof of funds (€854/month or equivalent)",
              "Health insurance (€30,000 coverage, Schengen-approved)",
              "Proof of accommodation",
              "Visa application form and recent passport photo",
              "Visa fee (~€60–€100, varies by country)"
            ]
          },
          {
            "title": "Financial Requirements",
            "color": "#F59E0B",
            "items": [
              "€854/month for duration of stay",
              "Bank statement or scholarship letter",
              "Sponsor’s proof of income (if applicable)"
            ]
          }
        ],
        "facts": [
          "Visa fee: €60–€100 (varies by country)",
          "Processing time: 4–6 weeks",
          "Approval rate: ~90% (2023 data)"
        ],
        "benefits": [
          {
            "title": "Work Rights",
            "description": "20 hours/week part-time after 90 days with employment permit."
          },
          {
            "title": "Schengen Travel",
            "description": "Type D visa allows travel across 27 Schengen countries."
          },
          {
            "title": "Post-Study Work",
            "description": "12-month post-study visa to seek employment."
          }
        ]
      },
      "visaStepsData": [
        {
          "step": "1",
          "title": "Choose Program",
          "color": "bg-blue-500",
          "content": "Select a course and university in Malta matching your interests."
        },
        {
          "step": "2",
          "title": "Check Eligibility",
          "color": "bg-indigo-500",
          "content": "Ensure you meet academic and English proficiency requirements."
        },
        {
          "step": "3",
          "title": "Prepare Documents",
          "color": "bg-purple-500",
          "content": "Gather transcripts, passport, English proficiency proof, and financial documents."
        },
        {
          "step": "4",
          "title": "Apply to University",
          "color": "bg-pink-500",
          "content": "Submit application with fee (€25–€60) and wait for acceptance letter."
        },
        {
          "step": "5",
          "title": "Apply for Visa",
          "color": "bg-amber-500",
          "content": "Submit visa application at Maltese embassy with required documents."
        },
        {
          "step": "6",
          "title": "Relocate to Malta",
          "color": "bg-green-500",
          "content": "Upon visa approval, travel to Malta and register with local authorities."
        }
      ],
      "workOpportunitiesData": [
        {
          "title": "During Studies",
          "color": "bg-indigo-500",
          "sections": [
            {
              "heading": "Working Hours",
              "points": [
                "Non-EU: 20 hours/week after 90 days with employment permit",
                "EU/EEA: No restrictions",
                "Minimum wage: ~€4.35/hour"
              ]
            },
            {
              "heading": "Common Student Jobs",
              "points": [
                "Hospitality (cafes, restaurants, hotels)",
                "Retail and customer service",
                "Tutoring or language teaching",
                "Tourism-related roles"
              ]
            }
          ]
        },
        {
          "title": "Post-Graduation",
          "color": "bg-green-500",
          "sections": [
            {
              "heading": "Post-Study Work Visa",
              "points": [
                "12-month visa to seek employment",
                "Apply after completing studies",
                "No job offer required initially"
              ]
            },
            {
              "heading": "Career Opportunities",
              "points": [
                "Strong job market in IT, tourism, healthcare, and finance",
                "Access to EU job markets with Maltese degree",
                "Path to EU Blue Card for skilled professionals"
              ]
            }
          ]
        }
      ],
      "jobMarketData": {
        "sectors": [
          "Tourism and Hospitality",
          "Information Technology",
          "Healthcare and Nursing",
          "Finance and Gaming",
          "Education and Research",
          "Maritime and Logistics"
        ],
        "salaries": [
          "Valletta/Sliema: €25,000 - €35,000",
          "Other cities: €20,000 - €30,000",
          "IT: €30,000 - €45,000",
          "Healthcare: €25,000 - €40,000",
          "Finance: €28,000 - €50,000"
        ]
      },
      "bestCitiesData": [
        {
          "city": "Valletta",
          "image": "https://images.unsplash.com/photo-1595425415634-4e4e6d13e8a2?q=80&w=600&auto=format",
          "universities": "1 university, 1 private college",
          "description": "The historic capital with vibrant cultural and academic scenes.",
          "highlights": ["UNESCO sites", "University of Malta", "Nightlife", "Job opportunities"]
        },
        {
          "city": "Sliema",
          "image": "https://images.unsplash.com/photo-1562625963-4c37e97a3d2a?q=80&w=600&auto=format",
          "universities": "Private colleges",
          "description": "A modern coastal city with a strong expat community.",
          "highlights": ["Business programs", "Shopping", "Beaches", "Networking"]
        },
        {
          "city": "Msida",
          "image": "https://images.unsplash.com/photo-1617114963080-8a4b4e4b4e4b?q=80&w=600&auto=format",
          "universities": "1 university",
          "description": "Home to the University of Malta, ideal for students.",
          "highlights": ["Campus life", "Affordable housing", "Student community", "Proximity to Valletta"]
        },
        {
          "city": "Paola",
          "image": "https://images.unsplash.com/photo-1598966735434-4c4e4e4b4e4c?q=80&w=600&auto=format",
          "universities": "1 vocational college",
          "description": "A hub for vocational studies with affordable living.",
          "highlights": ["MCAST", "Affordable costs", "Cultural sites", "Quiet lifestyle"]
        }
      ],
      "studentLifeData": {
        "title": "Student Life and Support Services",
        "icon": {
          "bg": "bg-purple-100",
          "color": "text-purple-600"
        },
        "sections": [
          {
            "title": "Campus Life",
            "bg": "bg-purple-50",
            "border": "border-purple-100",
            "textColor": "text-purple-800",
            "items": [
              {
                "title": "Student Organizations",
                "description": "Clubs for academic, cultural, and sports activities."
              },
              {
                "title": "Cultural Events",
                "description": "Festivals, historical tours, and Mediterranean lifestyle."
              },
              {
                "title": "Sports Facilities",
                "description": "Water sports, diving, and university gyms."
              },
              {
                "title": "Student Discounts",
                "description": "Available for transport, museums, and restaurants."
              }
            ]
          },
          {
            "title": "Support Services",
            "bg": "bg-blue-50",
            "border": "border-blue-100",
            "textColor": "text-blue-800",
            "items": [
              {
                "title": "International Office",
                "description": "Assists with visas, accommodation, and orientation."
              },
              {
                "title": "Language Courses",
                "description": "English and Maltese courses for integration."
              },
              {
                "title": "Career Services",
                "description": "Job fairs, internships, and CV workshops."
              },
              {
                "title": "Counseling Services",
                "description": "Mental health and academic support."
              }
            ]
          },
          {
            "title": "Accommodation Options",
            "bg": "bg-green-50",
            "border": "border-green-100",
            "textColor": "text-green-800",
            "items": [
              {
                "title": "University Dormitories",
                "description": "Affordable, campus-adjacent housing.",
                "badges": ["Cost-effective", "Convenient", "Social"]
              },
              {
                "title": "Private Apartments",
                "description": "Independent living in urban areas.",
                "badges": ["Privacy", "Modern", "City access"]
              },
              {
                "title": "Shared Flats",
                "description": "Budget-friendly with other students.",
                "badges": ["Affordable", "Social", "Local experience"]
              }
            ]
          },
          {
            "title": "Transportation",
            "bg": "bg-amber-50",
            "border": "border-amber-100",
            "textColor": "text-amber-800",
            "items": [
              {
                "title": "Public Transport",
                "description": "Buses and ferries with student discounts."
              },
              {
                "title": "Cycling",
                "description": "Bike rentals available in urban areas."
              },
              {
                "title": "Walking",
                "description": "Compact cities ideal for walking."
              }
            ]
          }
        ],
        "additionalInfo": {
          "title": "Healthcare for International Students",
          "description": "Non-EU students need private health insurance (€30,000 coverage, €30–€100/month). EU/EEA students use EHIC. Register with a local doctor for access to public healthcare.",
          "items": [
            {
              "title": "Covered Services",
              "points": ["GP visits", "Hospital care", "Emergency services", "Prescriptions"]
            },
            {
              "title": "Additional Costs",
              "points": ["Dental care", "Specialist treatments", "Private clinic fees"]
            }
          ]
        }
      },
      "latestUpdates2025": [
        {
          "title": "Expanded Scholarship Programs",
          "description": "New funding opportunities",
          "content": "The University of Malta increased tuition waivers for non-EU students in 2025, targeting Master’s and PhD programs.",
          "category": "Scholarships",
          "gradient": "from-amber-50 to-yellow-50",
          "border": "border-amber-100",
          "badgeColor": "bg-amber-500",
          "titleColor": "text-amber-800"
        },
        {
          "title": "New Nursing Programs",
          "description": "Healthcare expansion",
          "content": "MCAST and University of Malta introduced new nursing and public health programs, boosting EU-wide job prospects.",
          "category": "Education",
          "gradient": "from-green-50 to-emerald-50",
          "border": "border-green-100",
          "badgeColor": "bg-green-500",
          "titleColor": "text-green-800"
        },
        {
          "title": "Digital Visa System",
          "description": "Streamlined process",
          "content": "Malta’s 2025 digital visa platform reduces processing time to 4–6 weeks.",
          "category": "Visa Policy",
          "gradient": "from-purple-50 to-pink-50",
          "border": "border-purple-100",
          "badgeColor": "bg-purple-500",
          "titleColor": "text-purple-800"
        }
      ],
      "policyChanges2025": [
        {
          "title": "Increased Work Hours",
          "content": "Non-EU students can work 20 hours/week after 90 days, up from 15 hours."
        },
        {
          "title": "Flexible English Requirements",
          "content": "More universities accept MOI letters instead of IELTS/TOEFL."
        },
        {
          "title": "Post-Study Visa Extension",
          "content": "12-month post-study work visa now available for all graduates."
        }
      ],
      "resourcecards": [
        {
          "title": "Course Finder",
          "description": "Explore programs offered by Maltese universities by subject and language.",
          "buttonText": "Find Your Course",
          "gradient": "from-blue-50 to-indigo-50",
          "borderColor": "border-blue-100",
          "textColor": "text-blue-800",
          "buttonColor": "bg-blue-600 hover:bg-blue-700"
        },
        {
          "title": "University Rankings",
          "description": "Compare Maltese universities by academic reputation and programs.",
          "buttonText": "View Rankings",
          "gradient": "from-purple-50 to-fuchsia-50",
          "borderColor": "border-purple-100",
          "textColor": "text-purple-800",
          "buttonColor": "bg-purple-600 hover:bg-purple-700"
        },
        {
          "title": "Visa Checklist",
          "description": "Ensure you have all documents for your Maltese student visa.",
          "buttonText": "Get Checklist",
          "gradient": "from-green-50 to-emerald-50",
          "borderColor": "border-green-100",
          "textColor": "text-green-800",
          "buttonColor": "bg-green-600 hover:bg-green-700"
        }
      ],
      "resourceofficialLinks": [
        {
          "label": "University of Malta",
          "href": "https://www.um.edu.mt/"
        },
        {
          "label": "Malta Government Scholarships",
          "href": "https://education.gov.mt/"
        },
        {
          "label": "Maltese Visa Services",
          "href": "https://www.identitymalta.com/"
        },
        {
          "label": "Jobsplus (Job Portal)",
          "href": "https://jobsplus.gov.mt/"
        }
      ],
      "resourceguides": [
        { "label": "Guide to Studying in Malta (PDF)", "href": "#" },
        { "label": "Malta Student Visa Guide (PDF)", "href": "#" },
        { "label": "Living in Malta for Students (PDF)", "href": "#" },
        { "label": "Scholarship Application Guide (PDF)", "href": "#" }
      ],
      "resourcetools": [
        {
          "title": "Cost Calculator",
          "description": "Estimate tuition, living costs, and other expenses in Malta.",
          "buttonText": "Calculate Costs"
        },
        {
          "title": "Scholarship Finder",
          "description": "Discover scholarships based on your nationality and field of study.",
          "buttonText": "Find Scholarships"
        },
        {
          "title": "Language Test Finder",
          "description": "Locate English proficiency test centers (if required).",
          "buttonText": "Find Tests"
        }
      ],
      "faqs": [
        {
          "question": "Do I need IELTS to study in Malta?",
          "answer": "Many universities accept a Medium of Instruction (MOI) letter if your prior education was in English. Otherwise, IELTS (5.5–6.5), TOEFL (80), or PTE (65) is required. Check university-specific criteria."
        },
        {
          "question": "How much does it cost to study in Malta?",
          "answer": "Tuition fees range from €2,000–€20,000/year, depending on the program and university. Living costs average €500–€1,000/month, with cheaper options in Paola or Gozo."
        },
        {
          "question": "Can I work while studying in Malta?",
          "answer": "Non-EU students can work up to 20 hours/week after 90 days with an employment permit. EU/EEA students have no restrictions. Common jobs include hospitality and retail."
        },
        {
          "question": "What are the visa requirements for non-EU students?",
          "answer": "Non-EU students need a Type D visa for studies over 90 days. Requirements include an acceptance letter, proof of funds (€854/month), health insurance (€30,000 coverage), and accommodation proof. Visa fee is €60–€100."
        },
        {
          "question": "Are scholarships available for international students?",
          "answer": "Yes, options include Malta Government Scholarship Scheme, University of Malta Scholarships (full tuition waivers), and Erasmus+. External scholarships like Education Future offer up to €5,000 for Indian students."
        },
        {
          "question": "Can I stay in Malta after graduation?",
          "answer": "Non-EU graduates can apply for a 12-month post-study work visa to seek employment. A job offer can lead to a work permit or EU Blue Card."
        },
        {
          "question": "What is the application process for Maltese universities?",
          "answer": "Choose a program, check eligibility, submit transcripts, English proficiency proof, and motivation letter. Apply directly to universities with a €25–€60 fee. Start 8–9 months before intake."
        },
        {
          "question": "How do I access healthcare in Malta as a student?",
          "answer": "EU/EEA students use EHIC for public healthcare. Non-EU students need private insurance (€30–€100/month, €30,000 coverage). Register with a local doctor for access."
        },
        {
          "question": "What support services are available for international students?",
          "answer": "Universities offer international offices, language courses, career services, and counseling. Student unions provide cultural events, sports, and discounts."
        }
      ]
    },
netherlands: {
        "code": "nl",
        "name": "Netherlands",
        "flagUrl": "https://flagcdn.com/w320/nl.png",
        "heroImage": "https://images.unsplash.com/photo-1581092917817-2e3b7e8f9e1b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        "quickFacts": {
          "population": "17.7 million",
          "capital": "Amsterdam",
          "language": "Dutch (English widely spoken)",
          "currency": "Euro (€)",
          "academicYear": "September to June"
        },
        "keyDates": {
          "fallDeadline": "May 1 (for most programs, non-EU/EEA students)",
          "springDeadline": "October 1 (for select programs, non-EU/EEA students)",
          "summerDeadline": "Not typically available"
        },
        "overviewSections": [
          {
            "title": "Why Study in the Netherlands?",
            "description": "The Netherlands is a top destination for international students, offering high-quality education, a multicultural environment, and excellent career prospects.",
            "points": [
              {
                "heading": "World-Class Universities",
                "text": "12 Dutch universities rank in the top 200 globally, known for innovative teaching and research (QS World University Rankings 2025)."
              },
              {
                "heading": "English-Taught Programs",
                "text": "Over 2,000 programs taught in English, the largest selection in continental Europe."
              },
              {
                "heading": "Post-Study Work Opportunities",
                "text": "Non-EU/EEA graduates can stay for 1 year under the Orientation Year Visa to seek employment."
              },
              {
                "heading": "Multicultural Environment",
                "text": "Home to students from over 160 countries, with 95% of locals speaking English."
              }
            ]
          },
          {
            "title": "Education System at a Glance",
            "description": "The Dutch education system emphasizes interactive, student-centered learning with a focus on teamwork and practical application.",
            "cards": [
              {
                "color": "blue-500",
                "title": "Undergraduate",
                "subtitle": "Bachelor's Degree",
                "points": [
                  "3 years duration",
                  "Research or applied sciences focus",
                  "Problem-based learning",
                  "English-taught options"
                ]
              },
              {
                "color": "green-500",
                "title": "Postgraduate",
                "subtitle": "Master's Degree",
                "points": [
                  "1-2 years duration",
                  "Research or professional tracks",
                  "Industry-oriented programs",
                  "Thesis or internship"
                ]
              },
              {
                "color": "purple-500",
                "title": "Doctorate",
                "subtitle": "PhD",
                "points": [
                  "3-4 years duration",
                  "Fully-funded positions available",
                  "Independent research",
                  "Industry collaboration"
                ]
              }
            ],
            "note": {
              "text": "The Netherlands uses a 10-point grading scale, where 10 is the highest and 5.5 is the minimum passing grade. A grade of 7 or above is considered good.",
              "color": "yellow-50",
              "border": "yellow-100",
              "textColor": "yellow-700"
            }
          }
        ],
        "topcourse": [
          {
            "title": "Business & Management",
            "details": "International Business, Finance, Economics",
            "color": "bg-amber-50 border-amber-200"
          },
          {
            "title": "Engineering",
            "details": "Mechanical, Aerospace, Civil, Electrical",
            "color": "bg-blue-50 border-blue-200"
          },
          {
            "title": "Computer Science",
            "details": "AI, Data Science, Cybersecurity",
            "color": "bg-indigo-50 border-indigo-200"
          },
          {
            "title": "Environmental Sciences",
            "details": "Sustainability, Water Management, Climate Studies",
            "color": "bg-green-50 border-green-200"
          },
          {
            "title": "Social Sciences",
            "details": "Psychology, International Relations, Sociology",
            "color": "bg-cyan-50 border-cyan-200"
          },
          {
            "title": "Life Sciences",
            "details": "Biotechnology, Biomedicine, Agriculture",
            "color": "bg-red-50 border-red-200"
          },
          {
            "title": "Design & Arts",
            "details": "Industrial Design, Graphic Design, Architecture",
            "color": "bg-pink-50 border-pink-200"
          },
          {
            "title": "Health Sciences",
            "details": "Public Health, Medicine, Nursing",
            "color": "bg-purple-50 border-purple-200"
          }
        ],
        "topuniversities": [
          {
            "name": "Delft University of Technology",
            "location": "Delft",
            "rank": "49",
            "notable": "Engineering, Technology, Architecture"
          },
          {
            "name": "University of Amsterdam",
            "location": "Amsterdam",
            "rank": "55",
            "notable": "Business, Social Sciences, Humanities"
          },
          {
            "name": "Utrecht University",
            "location": "Utrecht",
            "rank": "66",
            "notable": "Life Sciences, Social Sciences, Medicine"
          },
          {
            "name": "Leiden University",
            "location": "Leiden",
            "rank": "77",
            "notable": "Law, Humanities, Sciences"
          },
          {
            "name": "Wageningen University & Research",
            "location": "Wageningen",
            "rank": "80",
            "notable": "Agriculture, Environmental Sciences"
          },
          {
            "name": "Erasmus University Rotterdam",
            "location": "Rotterdam",
            "rank": "99",
            "notable": "Business, Economics, Medicine"
          },
          {
            "name": "University of Groningen",
            "location": "Groningen",
            "rank": "115",
            "notable": "Social Sciences, Sciences, Medicine"
          },
          {
            "name": "Radboud University Nijmegen",
            "location": "Nijmegen",
            "rank": "140",
            "notable": "Psychology, Sciences, Theology"
          }
        ],
        "intakes": [
          {
            "label": "September",
            "description": "Primary intake for most programs",
            "icon": "S"
          },
          {
            "label": "February",
            "description": "Secondary intake for select programs",
            "icon": "F"
          }
        ],
        "deadlines": [
          {
            "title": "Undergraduate",
            "icon": "U",
            "details": [
              "May 1 (non-EU/EEA applicants)",
              "June 1 (EU/EEA applicants)"
            ]
          },
          {
            "title": "Postgraduate",
            "icon": "P",
            "details": [
              "April 1 or May 1 (non-EU/EEA applicants)",
              "June 1 or later (EU/EEA applicants)"
            ]
          },
          {
            "title": "Scholarships",
            "icon": "S",
            "details": [
              "February 1 for NL Scholarship",
              "Varies by university (check institution websites)"
            ]
          }
        ],
        "admissionnotes": [
          "Apply via Studielink for most programs",
          "Non-EU/EEA students should apply 3-4 months early for visa processing",
          "Check program-specific requirements on university websites",
          "Some programs require entrance exams or interviews"
        ],
        "requirementsData": [
          {
            "title": "Undergraduate Requirements",
            "color": "bg-blue-500",
            "items": [
              "Completed secondary education (equivalent to Dutch VWO)",
              "High school transcripts/certificates",
              "English proficiency (IELTS 6.0–7.0 or TOEFL iBT 80–100)",
              "Motivation letter",
              "CV/Resume (for some programs)",
              "Entrance exam (for selective programs)",
              "Portfolio (for design/arts programs)"
            ]
          },
          {
            "title": "Postgraduate Requirements",
            "color": "bg-purple-500",
            "items": [
              "Bachelor’s degree (3-4 years)",
              "Academic transcripts",
              "English proficiency (IELTS 6.5–7.5 or TOEFL iBT 90–100)",
              "Motivation letter",
              "CV/Resume",
              "Letters of recommendation (1–2)",
              "GMAT/GRE (for some business programs)"
            ]
          }
        ],
        "CountrySpecificRequirements": "Dutch universities assess international qualifications against Dutch standards. Check university websites for country-specific entry requirements. Foundation programs are available for students with non-equivalent qualifications.",
        "tuitionData": [
          {
            "level": "Undergraduate (EU/EEA)",
            "range": "€2,314 - €2,600",
            "average": "€2,400",
            "notes": "Statutory tuition fee for EU/EEA students"
          },
          {
            "level": "Undergraduate (Non-EU/EEA)",
            "range": "€6,000 - €15,000",
            "average": "€10,000",
            "notes": "Higher for selective programs"
          },
          {
            "level": "Postgraduate (EU/EEA)",
            "range": "€2,314 - €2,600",
            "average": "€2,400",
            "notes": "Statutory fee for EU/EEA students"
          },
          {
            "level": "Postgraduate (Non-EU/EEA)",
            "range": "€13,000 - €20,000",
            "average": "€16,000",
            "notes": "Higher for MBA and specialized programs"
          },
          {
            "level": "PhD",
            "range": "Often fully funded",
            "average": "N/A",
            "notes": "Many PhD positions include salaries"
          }
        ],
        "tuitionNote": "Tuition fees for EU/EEA students are subsidized. Non-EU/EEA students pay higher fees, especially for programs like Medicine or Business. Additional costs may include study materials and administrative fees. Check specific program fees on university websites.",
        "expenses": [
          { "label": "Accommodation", "range": "€400 - €1,000", "percentage": 50 },
          { "label": "Food & Groceries", "range": "€150 - €300", "percentage": 30 },
          { "label": "Transportation", "range": "€50 - €100", "percentage": 15 },
          { "label": "Utilities", "range": "€100 - €200", "percentage": 20 },
          { "label": "Mobile/Internet", "range": "€20 - €50", "percentage": 10 },
          { "label": "Books & Supplies", "range": "€50 - €100", "percentage": 10 },
          { "label": "Entertainment", "range": "€100 - €200", "percentage": 25 }
        ],
        "regionalCosts": [
          {
            "region": "Amsterdam",
            "level": "Expensive",
            "color": "text-red-500",
            "range": "€900 - €1,500"
          },
          {
            "region": "Rotterdam/The Hague",
            "level": "High",
            "color": "text-orange-500",
            "range": "€700 - €1,200"
          },
          {
            "region": "Utrecht/Leiden",
            "level": "Moderate",
            "color": "text-yellow-500",
            "range": "€600 - €1,000"
          },
          {
            "region": "Groningen/Nijmegen",
            "level": "Affordable",
            "color": "text-green-500",
            "range": "€500 - €800"
          }
        ],
        "scholarships": [
          {
            "category": "Government Scholarships",
            "color": "indigo",
            "items": [
              {
                "title": "NL Scholarship",
                "description": "€5,000 for non-EU/EEA students for bachelor’s or master’s programs."
              },
              {
                "title": "Orange Tulip Scholarship",
                "description": "For students from specific countries, covering partial or full tuition."
              }
            ]
          },
          {
            "category": "University Scholarships",
            "color": "blue",
            "items": [
              {
                "title": "Merit-Based Scholarships",
                "description": "Offered for academic excellence, covering 25-100% of tuition."
              },
              {
                "title": "Program-Specific Scholarships",
                "description": "For specific fields like STEM or business."
              }
            ]
          }
        ],
        "financialSupports": [
          {
            "title": "Part-Time Work",
            "description": "Up to 16 hours/week during term; full-time in June, July, August."
          },
          {
            "title": "Internships",
            "description": "Paid internships often integrated into programs."
          },
          {
            "title": "Student Grants (EU/EEA)",
            "description": "Available for EU/EEA students meeting specific criteria."
          },
          {
            "title": "PhD Funding",
            "description": "Many PhD positions are salaried."
          }
        ],
        "TipsforScholarship": [
          "Apply early, at least 6-12 months before program start",
          "Check university and Nuffic websites for scholarship opportunities",
          "Prepare strong motivation letters and academic records",
          "Secure recommendation letters from relevant references"
        ],
        "nlVisaData": {
          "title": "Netherlands Student Visa Requirements",
          "intro": "Non-EU/EEA students need a student visa (MVV) and residence permit to study in the Netherlands for programs longer than 90 days.",
          "sections": [
            {
              "title": "Basic Requirements",
              "color": "#3B82F6",
              "items": [
                "Acceptance letter from a recognized Dutch institution",
                "Valid passport",
                "Proof of sufficient funds (€12,468/year for 2025)",
                "Health insurance coverage",
                "Proof of paid tuition fees",
                "Tuberculosis test (if applicable)",
                "Application fee (€210)"
              ]
            },
            {
              "title": "Financial Requirements",
              "color": "#F59E0B",
              "items": [
                "€1,039/month (approx. €12,468 for 12 months)",
                "Funds must be shown in a bank statement",
                "Scholarships can reduce required funds"
              ]
            }
          ],
          "facts": [
            "Application fee: €210",
            "Processing time: 2-8 weeks",
            "Visa application handled by university or IND"
          ],
          "benefits": [
            {
              "title": "Work Rights",
              "description": "Up to 16 hours/week during term; full-time in summer."
            },
            {
              "title": "Healthcare",
              "description": "Mandatory health insurance provides access to Dutch healthcare."
            },
            {
              "title": "Family Members",
              "description": "Family can apply for permits under specific conditions."
            }
          ]
        },
        "visaStepsData": [
          {
            "step": "1",
            "title": "Receive Admission Letter",
            "color": "bg-blue-500",
            "content": "Secure admission from a recognized Dutch institution."
          },
          {
            "step": "2",
            "title": "University Applies for Visa",
            "color": "bg-indigo-500",
            "content": "Most universities handle MVV and residence permit applications via IND."
          },
          {
            "step": "3",
            "title": "Prepare Documents",
            "color": "bg-purple-500",
            "content": "Submit passport, financial proof, and health insurance to the university."
          },
          {
            "step": "4",
            "title": "Pay Fees",
            "color": "bg-pink-500",
            "content": "Pay visa fee (€210) and tuition deposit (if required)."
          },
          {
            "step": "5",
            "title": "Biometric Appointment",
            "color": "bg-red-500",
            "content": "Provide biometrics at a Dutch embassy or VFS Global."
          },
          {
            "step": "6",
            "title": "Wait for Decision",
            "color": "bg-amber-500",
            "content": "Processing takes 2-8 weeks."
          },
          {
            "step": "7",
            "title": "Receive Visa & Travel",
            "color": "bg-green-500",
            "content": "Collect residence permit upon arrival in the Netherlands."
          }
        ],
        "workOpportunitiesData": [
          {
            "title": "During Studies",
            "color": "bg-indigo-500",
            "sections": [
              {
                "heading": "Working Hours",
                "points": [
                  "Up to 16 hours/week during term",
                  "Full-time in June, July, August",
                  "Work permit required for non-EU/EEA students"
                ]
              },
              {
                "heading": "Common Jobs",
                "points": [
                  "Hospitality and retail",
                  "Student assistant roles",
                  "Internships in tech/business",
                  "Tutoring"
                ]
              }
            ]
          },
          {
            "title": "Post-Graduation",
            "color": "bg-green-500",
            "sections": [
              {
                "heading": "Orientation Year Visa",
                "points": [
                  "1 year to seek employment",
                  "No job offer required",
                  "Unrestricted work rights"
                ]
              },
              {
                "heading": "Highly Skilled Migrant Visa",
                "points": [
                  "Requires job offer with minimum salary",
                  "Path to permanent residency",
                  "Family reunification possible"
                ]
              }
            ]
          }
        ],
        "jobMarketData": {
          "sectors": [
            "Technology and IT",
            "Engineering",
            "Business and Finance",
            "Environmental Sciences",
            "Logistics",
            "Agriculture"
          ],
          "salaries": [
            "Amsterdam: €30,000 - €40,000",
            "Other cities: €25,000 - €35,000",
            "Tech sector: €35,000 - €50,000",
            "Business sector: €30,000 - €45,000"
          ]
        },
        "bestCitiesData": [
          {
            "city": "Amsterdam",
            "image": "https://images.unsplash.com/photo-1581092917817-2e3b7e8f9e1b?q=80&w=600&auto=format",
            "universities": "2 universities",
            "description": "A global hub with vibrant culture and strong business/tech sectors.",
            "highlights": [
              "International community",
              "Cultural attractions",
              "Startup hub",
              "Cycling city"
            ]
          },
          {
            "city": "Rotterdam",
            "image": "https://images.unsplash.com/photo-1560172957-3eb02138957a?q=80&w=600&auto=format",
            "universities": "2 universities",
            "description": "Modern city with a focus on business and innovation.",
            "highlights": [
              "Port city",
              "Business opportunities",
              "Modern architecture",
              "Affordable living"
            ]
          },
          {
            "city": "Utrecht",
            "image": "https://images.unsplash.com/photo-1560260139-9d8c5949f8b9?q=80&w=600&auto=format",
            "universities": "2 universities",
            "description": "Historic city with a youthful, student-friendly vibe.",
            "highlights": [
              "Student community",
              "Cultural heritage",
              "Central location",
              "Affordable"
            ]
          },
          {
            "city": "Groningen",
            "image": "https://images.unsplash.com/photo-1593697820908-7a4d7a86f4f2?q=80&w=600&auto=format",
            "universities": "2 universities",
            "description": "Youthful city with a strong academic and social scene.",
            "highlights": [
              "Student hub",
              "Affordable living",
              "Vibrant nightlife",
              "Cycling culture"
            ]
          },
          {
            "city": "Leiden",
            "image": "https://images.unsplash.com/photo-1579003752240-518e9b0f7f80?q=80&w=600&auto=format",
            "universities": "1 university",
            "description": "Charming city with a prestigious university and rich history.",
            "highlights": [
              "Historic charm",
              "Academic prestige",
              "Cultural events",
              "Compact city"
            ]
          }
        ],
        "studentLifeData": {
          "title": "Student Life and Support Services",
          "icon": {
            "bg": "bg-purple-100",
            "color": "text-purple-600"
          },
          "sections": [
            {
              "title": "Campus Life",
              "bg": "bg-purple-50",
              "border": "border-purple-100",
              "textColor": "text-purple-800",
              "items": [
                {
                  "title": "Student Associations",
                  "description": "Active groups for social, academic, and cultural activities."
                },
                {
                  "title": "Clubs & Societies",
                  "description": "Wide range of sports, arts, and academic clubs."
                },
                {
                  "title": "Sports Facilities",
                  "description": "Modern gyms, sports fields, and student sports clubs."
                },
                {
                  "title": "Events",
                  "description": "Introduction weeks, festivals, and cultural events."
                }
              ]
            },
            {
              "title": "Support Services",
              "bg": "bg-blue-50",
              "border": "border-blue-100",
              "textColor": "text-blue-800",
              "items": [
                {
                  "title": "International Office",
                  "description": "Assistance with visas, housing, and integration."
                },
                {
                  "title": "Counseling Services",
                  "description": "Mental health and academic support."
                },
                {
                  "title": "Career Services",
                  "description": "Job fairs, CV workshops, and internship guidance."
                },
                {
                  "title": "Language Courses",
                  "description": "Free or subsidized Dutch language courses."
                }
              ]
            },
            {
              "title": "Accommodation Options",
              "bg": "bg-green-50",
              "border": "border-green-100",
              "textColor": "text-green-800",
              "items": [
                {
                  "title": "Student Housing",
                  "description": "University-managed or private student residences.",
                  "badges": ["Convenient", "Social", "Affordable"]
                },
                {
                  "title": "Private Rentals",
                  "description": "Shared apartments or studios in the city.",
                  "badges": ["Independent", "Flexible", "City access"]
                },
                {
                  "title": "Homestay",
                  "description": "Live with a Dutch family for cultural immersion.",
                  "badges": ["Cultural", "Supportive", "Affordable"]
                }
              ]
            },
            {
              "title": "Transportation",
              "bg": "bg-amber-50",
              "border": "border-amber-100",
              "textColor": "text-amber-800",
              "items": [
                {
                  "title": "Cycling",
                  "description": "Extensive bike lanes and bike-sharing programs."
                },
                {
                  "title": "Public Transport",
                  "description": "Efficient trains, buses, and trams with student discounts."
                },
                {
                  "title": "Student OV-Chipkaart",
                  "description": "Discounted travel card for students."
                }
              ]
            }
          ],
          "additionalInfo": {
            "title": "Healthcare for International Students",
            "description": "Non-EU/EEA students must have private health insurance to access Dutch healthcare. EU/EEA students can use their EHIC card.",
            "items": [
              {
                "title": "Covered Services",
                "points": [
                  "GP visits",
                  "Hospital care",
                  "Emergency services",
                  "Mental health care"
                ]
              },
              {
                "title": "Additional Costs",
                "points": [
                  "Dental care",
                  "Prescriptions",
                  "Specialist treatments"
                ]
              }
            ]
          }
        },
        "latestUpdates2025": [
          {
            "title": "Orientation Year Visa Update",
            "description": "Extended post-study work",
            "content": "The Orientation Year Visa continues to allow non-EU/EEA graduates to stay for 1 year to seek employment, with simplified application processes in 2025.",
            "category": "Visa Policy",
            "gradient": "from-blue-50 to-sky-50",
            "border": "border-blue-100",
            "badgeColor": "bg-blue-500",
            "titleColor": "text-blue-800"
          },
          {
            "title": "Increased NL Scholarship Funding",
            "description": "More financial support",
            "content": "The NL Scholarship for non-EU/EEA students has increased funding for 2025, offering €5,000 to more students across various programs.",
            "category": "Scholarships",
            "gradient": "from-amber-50 to-yellow-50",
            "border": "border-amber-100",
            "badgeColor": "bg-amber-500",
            "titleColor": "text-amber-800"
          },
          {
            "title": "Digital Application System",
            "description": "Streamlined processes",
            "content": "The Netherlands has fully digitized visa and university applications, reducing paperwork and processing times for international students.",
            "category": "Digital Innovation",
            "gradient": "from-purple-50 to-pink-50",
            "border": "border-purple-100",
            "badgeColor": "bg-purple-500",
            "titleColor": "text-purple-800"
          }
        ],
        "policyChanges2025": [
          {
            "title": "Updated Financial Requirements",
            "content": "Financial requirements for student visas increased to €1,039/month (€12,468/year) for 2025 to reflect living costs."
          },
          {
            "title": "English Proficiency Standards",
            "content": "Some universities raised IELTS requirements to 6.5 for undergraduate and 7.0 for postgraduate programs."
          },
          {
            "title": "Housing Regulations",
            "content": "Universities now encourage students to secure housing before arrival due to shortages in major cities."
          }
        ],
        "resourcecards": [
          {
            "title": "Course Finder",
            "description": "Search for English-taught programs across Dutch universities.",
            "buttonText": "Find Your Course",
            "gradient": "from-blue-50 to-indigo-50",
            "borderColor": "border-blue-100",
            "textColor": "text-blue-800",
            "buttonColor": "bg-blue-600 hover:bg-blue-700"
          },
          {
            "title": "University Rankings",
            "description": "Compare Dutch universities based on global rankings and programs.",
            "buttonText": "View Rankings",
            "gradient": "from-purple-50 to-fuchsia-50",
            "borderColor": "border-purple-100",
            "textColor": "text-purple-800",
            "buttonColor": "bg-purple-600 hover:bg-purple-700"
          },
          {
            "title": "Visa Checklist",
            "description": "Ensure you have all documents for your student visa application.",
            "buttonText": "Get Checklist",
            "gradient": "from-green-50 to-emerald-50",
            "borderColor": "border-green-100",
            "textColor": "text-green-800",
            "buttonColor": "bg-green-600 hover:bg-green-700"
          }
        ],
        "resourceofficialLinks": [
          { "label": "Study in NL", "href": "https://www.studyinnl.org" },
          { "label": "Immigration and Naturalisation Service (IND)", "href": "https://ind.nl" },
          { "label": "Nuffic", "href": "https://www.nuffic.nl" }
        ],
        "resourceguides": [
          { "label": "Netherlands Study Guide (PDF)", "href": "#" },
          { "label": "Student Visa Guide (PDF)", "href": "#" },
          { "label": "Living in the Netherlands (PDF)", "href": "#" }
        ],
        "resourcetools": [
          {
            "title": "Cost Calculator",
            "description": "Estimate your study and living expenses in the Netherlands.",
            "buttonText": "Calculate Costs"
          },
          {
            "title": "Scholarship Finder",
            "description": "Find scholarships matching your profile and program.",
            "buttonText": "Find Scholarships"
          }
        ],
        "faqs": [
          {
            "question": "How long does it take to get a Dutch student visa?",
            "answer": "Processing takes 2-8 weeks, depending on the university and IND. Apply at least 3 months before your program starts."
          },
          {
            "question": "Can I work while studying in the Netherlands?",
            "answer": "Non-EU/EEA students can work up to 16 hours/week during term and full-time in June, July, August with a work permit. EU/EEA students have no restrictions."
          },
          {
            "question": "What English tests are accepted by Dutch universities?",
            "answer": "Accepted tests include IELTS (6.0–7.5), TOEFL iBT (80–100), and Cambridge Advanced (CAE). Some programs accept PTE Academic or Duolingo."
          },
          {
            "question": "How much does it cost to study in the Netherlands?",
            "answer": "EU/EEA students pay €2,314–€2,600/year. Non-EU/EEA students pay €6,000–€15,000 for undergraduate and €13,000–€20,000 for postgraduate programs. Living costs are €900–€1,500/month."
          },
          {
            "question": "What scholarships are available for international students?",
            "answer": "Options include NL Scholarship (€5,000), Orange Tulip Scholarship, and university-specific merit-based awards. Check Nuffic and university websites."
          },
          {
            "question": "Can I stay in the Netherlands after graduation?",
            "answer": "Non-EU/EEA graduates can apply for a 1-year Orientation Year Visa to seek employment. EU/EEA students can stay without restrictions."
          }
        ]
      }
    
 
  
    
};
export default CountryDetailsData;
