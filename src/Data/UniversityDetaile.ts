// const universities = [
//   {
//     universitycode: 'alphacrucis',
//     universityName: 'Alphacrucis University College',
//     location: 'Parramatta, NSW, Australia',
//     imageUrl:
//       'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80',
//     campusName: 'Sydney Campus',
//     tagline: 'Equipping Christian Leaders to Transform the World',
//     stats: ['Est. 1948', 'TEQSA Accredited', 'Campuses in AU, NZ, Online'],
//     description:
//       'Alphacrucis University College, established in 1948, is Australia’s largest self-accrediting Christian liberal arts college, equipping leaders for impact in ministry, business, education, counselling, and beyond, with a strong Pentecostal and Charismatic ethos.',
//     overviewData: [
//       { label: 'Institution Type', value: 'Private, Not-for-Profit' },
//       { label: 'Established', value: '1948' },
//       { label: 'Accreditation', value: 'TEQSA, ASQA' },
//       {
//         label: 'Locations',
//         value:
//           'Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Auckland, Online',
//       },
//       {
//         label: 'Focus Areas',
//         value: 'Theology, Ministry, Business, Education, Counselling, Music',
//       },
//       { label: 'Student Body', value: '1,000+ Equivalent Full-Time Students' },
//     ],
//     generalInfo:
//       'Admission requirements for international students at Alphacrucis University College include academic qualifications equivalent to Australian standards, English language proficiency, and financial support documentation. Applications are open year-round, with support for FEE-HELP for eligible students.',
//     applicationFee: 100,
//     financialRequirement: 30000,
//     tuitionDeposit: 500,
//     processingFee: 50,
//     generalRequirements: [
//       'Complete the Alphacrucis University College International Application',
//       'Certified academic transcripts (with English translations if required)',
//       'Proof of completion from prior educational institutions',
//       'Evidence of financial support for tuition and living expenses',
//       'Copy of valid passport',
//       'Statement of Purpose (for some programs)',
//     ],
//     undergraduate: {
//       englishTests: [
//         { name: 'IELTS', score: '6.5 (no band below 6.0)' },
//         { name: 'TOEFL iBT', score: '79' },
//         { name: 'PTE Academic', score: '58' },
//         { name: 'Cambridge English (CAE)', score: '176' },
//       ],
//       otherTests: [
//         'Completion of an accredited English pathway program (e.g., ELS Level 112)',
//         'Successful completion of a Certificate IV or higher in Australia',
//       ],
//       additionalRequirements: [
//         'One letter of recommendation (preferred for some programs)',
//         'Personal statement (for theology or ministry programs)',
//         'Evidence of relevant work or ministry experience (if applicable)',
//       ],
//     },
//     graduate: {
//       englishTests: [
//         { name: 'IELTS', score: '7.0 (no band below 6.5)' },
//         { name: 'TOEFL iBT', score: '94' },
//         { name: 'PTE Academic', score: '65' },
//       ],
//       additionalRequirements: [
//         'Resume detailing professional or ministry experience',
//         'Two letters of recommendation',
//         'Personal statement outlining career and study goals',
//         'Relevant undergraduate degree or equivalent',
//       ],
//     },
//     conditionalAdmission: {
//       available: true,
//       description:
//         'Students who do not meet English language proficiency requirements may be offered conditional admission through pathway programs or English language courses at partner institutions, allowing progression to degree programs upon successful completion.',
//       benefits: [
//         'Access to English language support programs',
//         'CRICOS-registered programs for student visa eligibility',
//         'Seamless transition to degree studies',
//       ],
//     },
//     tuitionData: [
//       {
//         category: 'Undergraduate Tuition',
//         amount: '$16,000 - $20,000',
//         period: 'per year',
//       },
//       {
//         category: 'Graduate Tuition',
//         amount: '$18,000 - $22,000',
//         period: 'per year',
//       },
//     ],
//     additionalFees: [
//       { name: 'Student Services Fee', amount: '$400' },
//       { name: 'Technology Fee', amount: '$300' },
//       { name: 'International Student Administration Fee', amount: '$600' },
//     ],
//     livingCosts: [
//       { category: 'Housing (off-campus)', range: '$12,000 - $18,000' },
//       { category: 'Meals', range: '$4,000 - $6,000' },
//       { category: 'Books & Supplies', range: '$800 - $1,200' },
//       { category: 'Personal Expenses', range: '$2,000 - $3,500' },
//     ],
//     scholarships: [
//       {
//         name: 'International Student Scholarship',
//         amount: 'Up to 20% tuition reduction',
//         type: 'Merit-Based',
//         eligibility: 'Minimum equivalent GPA of 3.0',
//         renewable: true,
//         popular: true,
//       },
//       {
//         name: 'Ministry Leadership Scholarship',
//         amount: '$2,000 - $5,000',
//         type: 'Merit and Need-Based',
//         eligibility:
//           'Enrolled in Ministry or Theology programs, demonstrated leadership',
//         renewable: true,
//         popular: false,
//       },
//       {
//         name: 'Academic Excellence Scholarship',
//         amount: '$3,000 - $7,000',
//         type: 'Merit-Based',
//         eligibility: '3.5+ GPA, academic achievements',
//         renewable: true,
//         popular: false,
//       },
//     ],
//     visaSteps: [
//       {
//         step: 1,
//         title: 'Letter of Offer',
//         description:
//           'Receive a Letter of Offer from Alphacrucis after application approval',
//       },
//       {
//         step: 2,
//         title: 'Confirmation of Enrolment (CoE)',
//         description: 'Pay the tuition deposit to receive your CoE',
//       },
//       {
//         step: 3,
//         title: 'Visa Application',
//         description:
//           'Apply for a student visa (subclass 500) via the Australian Department of Home Affairs',
//       },
//       {
//         step: 4,
//         title: 'Visa Interview',
//         description:
//           'Attend a visa interview if required by the Australian embassy',
//       },
//     ],
//     workOpportunities: [
//       {
//         type: 'Part-Time Work',
//         description:
//           'International students on a student visa can work up to 48 hours per fortnight during study periods',
//         timing: 'During studies',
//       },
//       {
//         type: 'Post-Study Work Visa',
//         description:
//           'Eligible graduates can apply for a Temporary Graduate Visa (subclass 485) for 2-4 years of work rights',
//         timing: 'After graduation',
//       },
//     ],
//     campusImages: [
//       {
//         src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
//         alt: 'Parramatta campus exterior',
//       },
//       {
//         src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
//         alt: 'Campus library and study spaces',
//       },
//       {
//         src: 'https://images.unsplash.com/photo-1509062520-3e5e0013a3e7?auto=format&fit=crop&w=800&q=80',
//         alt: 'Student community events',
//       },
//     ],
//     campusFeatures: [
//       {
//         title: 'Parramatta CBD Location',
//         description:
//           'Located in the vibrant heart of Parramatta, close to public transport, cafes, and cultural hubs.',
//       },
//       {
//         title: 'Christian Community',
//         description:
//           'A supportive environment fostering spiritual growth and leadership development.',
//       },
//       {
//         title: 'Modern Facilities',
//         description:
//           'Equipped with advanced library systems, lecture rooms, and student lounges for collaborative learning.',
//       },
//     ],
//     testimonial: {
//       quote:
//         'Studying at Alphacrucis has been transformative. The integration of faith and learning, combined with practical training, has equipped me to make a real impact in my community.',
//       author: 'James Lee',
//       country: 'South Korea',
//       program: 'Bachelor of Ministry, Class of 2024',
//     },
//   },
// ];

// export default universities;
