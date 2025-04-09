import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import {
  Check,
  MapPin,
  GraduationCap,
  Award,
  Landmark,
  DollarSign,
  IdCard,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import PageContainer from '@/components/layout/PageContainer';
import CourseCard, { Course } from '@/components/cards/CourseCard';
import UniversityCard, { University } from '@/components/cards/UniversityCard';

// Mock data for demo
const mockCountryDetails: Record<
  string,
  {
    name: string;
    code: string;
    flag: string;
    overview: string;
    universities: University[];
    courses: Course[];
    scholarships: Array<{ name: string; description: string; amount: string }>;
    costOfLiving: {
      accommodation: string;
      food: string;
      transport: string;
      utilities: string;
      total: string;
    };
    visaRequirements: string[];
  }
> = {
  usa: {
    name: 'United States',
    code: 'us',
    flag: 'us',
    overview:
      'The United States hosts over a million international students and offers world-class education across thousands of colleges and universities. Known for its diverse culture, cutting-edge research, and vast opportunities, the US education system offers flexibility and quality across disciplines. American degrees are globally recognized and valued by employers worldwide.',
    universities: [
      {
        id: '101',
        name: 'Harvard University',
        logo: 'https://via.placeholder.com/150',
        country: 'USA',
        rank: 1,
        feeRange: { min: 45000, max: 60000 },
        isFeatured: true,
      },
      {
        id: '102',
        name: 'Stanford University',
        logo: 'https://via.placeholder.com/150',
        country: 'USA',
        rank: 2,
        feeRange: { min: 47000, max: 62000 },
        isFeatured: false,
      },
      {
        id: '103',
        name: 'MIT',
        logo: 'https://via.placeholder.com/150',
        country: 'USA',
        rank: 3,
        feeRange: { min: 48000, max: 63000 },
        isFeatured: true,
      },
      {
        id: '104',
        name: 'University of California, Berkeley',
        logo: 'https://via.placeholder.com/150',
        country: 'USA',
        rank: 8,
        feeRange: { min: 42000, max: 55000 },
        isFeatured: false,
      },
    ],
    courses: [
      {
        id: '1001',
        name: 'Bachelor of Computer Science',
        university: {
          id: '101',
          name: 'Harvard University',
          logo: 'https://via.placeholder.com/150',
          country: 'USA',
        },
        fee: 55000,
        duration: '4 years',
        level: 'Undergraduate',
        field: 'Computer Science',
      },
      {
        id: '1002',
        name: 'Master of Business Administration',
        university: {
          id: '102',
          name: 'Stanford University',
          logo: 'https://via.placeholder.com/150',
          country: 'USA',
        },
        fee: 60000,
        duration: '2 years',
        level: 'Postgraduate',
        field: 'Business',
      },
      {
        id: '1003',
        name: 'PhD in Engineering',
        university: {
          id: '103',
          name: 'MIT',
          logo: 'https://via.placeholder.com/150',
          country: 'USA',
        },
        fee: 52000,
        duration: '5 years',
        level: 'PhD',
        field: 'Engineering',
      },
    ],
    scholarships: [
      {
        name: 'Fulbright Program',
        description:
          'A flagship international educational exchange program sponsored by the U.S. government.',
        amount: 'Varies (Tuition + Stipend)',
      },
      {
        name: 'Hubert Humphrey Fellowship Program',
        description:
          'A one-year fellowship program for experienced professionals from designated countries.',
        amount: 'Full scholarship + stipend',
      },
      {
        name: 'American University Scholarships',
        description:
          'Merit-based scholarships offered by individual universities to international students.',
        amount: '$5,000 - $30,000 per year',
      },
    ],
    costOfLiving: {
      accommodation: '$700 - $1,500 per month',
      food: '$300 - $600 per month',
      transport: '$50 - $150 per month',
      utilities: '$150 - $300 per month',
      total: '$1,200 - $2,500 per month',
    },
    visaRequirements: [
      'Valid passport with at least 6 months validity beyond intended stay',
      'Completed DS-160 Form (Online Nonimmigrant Visa Application)',
      'SEVIS fee receipt',
      'Form I-20 (for F visa) or DS-2019 (for J visa)',
      'Evidence of financial support for entire course duration',
      'Proof of English proficiency (TOEFL/IELTS)',
      'Proof of academic qualifications',
      'Statement of purpose detailing education plans',
      'Evidence of intent to return to home country after studies',
    ],
  },
  uk: {
    name: 'United Kingdom',
    code: 'gb',
    flag: 'gb',
    overview:
      "The United Kingdom offers a world-renowned education system with degrees that can be completed in a shorter timeframe than many other countries. Home to some of the world's oldest and most prestigious universities, the UK blends traditional academic excellence with innovative teaching methods. British qualifications are internationally valued and recognized for their high standards.",
    universities: [
      {
        id: '201',
        name: 'University of Oxford',
        logo: 'https://via.placeholder.com/150',
        country: 'UK',
        rank: 1,
        feeRange: { min: 25000, max: 45000 },
        isFeatured: true,
      },
      {
        id: '202',
        name: 'University of Cambridge',
        logo: 'https://via.placeholder.com/150',
        country: 'UK',
        rank: 2,
        feeRange: { min: 24000, max: 42000 },
        isFeatured: true,
      },
      {
        id: '203',
        name: 'Imperial College London',
        logo: 'https://via.placeholder.com/150',
        country: 'UK',
        rank: 3,
        feeRange: { min: 28000, max: 45000 },
        isFeatured: false,
      },
      {
        id: '204',
        name: 'London School of Economics',
        logo: 'https://via.placeholder.com/150',
        country: 'UK',
        rank: 7,
        feeRange: { min: 22000, max: 38000 },
        isFeatured: false,
      },
    ],
    courses: [
      {
        id: '2001',
        name: 'Bachelor of Arts in Literature',
        university: {
          id: '201',
          name: 'University of Oxford',
          logo: 'https://via.placeholder.com/150',
          country: 'UK',
        },
        fee: 30000,
        duration: '3 years',
        level: 'Undergraduate',
        field: 'Arts',
      },
      {
        id: '2002',
        name: 'Master of Science in Artificial Intelligence',
        university: {
          id: '203',
          name: 'Imperial College London',
          logo: 'https://via.placeholder.com/150',
          country: 'UK',
        },
        fee: 35000,
        duration: '1 year',
        level: 'Postgraduate',
        field: 'Computer Science',
      },
      {
        id: '2003',
        name: 'PhD in Economics',
        university: {
          id: '204',
          name: 'London School of Economics',
          logo: 'https://via.placeholder.com/150',
          country: 'UK',
        },
        fee: 25000,
        duration: '3-4 years',
        level: 'PhD',
        field: 'Business',
      },
    ],
    scholarships: [
      {
        name: 'Chevening Scholarships',
        description:
          "UK government's global scholarship program for outstanding emerging leaders.",
        amount: 'Full scholarship + living expenses',
      },
      {
        name: 'Commonwealth Scholarships',
        description:
          "For citizens of Commonwealth countries to pursue Master's or PhD degrees.",
        amount: 'Tuition fees, living allowance, airfare',
      },
      {
        name: 'GREAT Scholarships',
        description:
          'Scholarships for students from selected countries studying various subjects.',
        amount: '£10,000 towards tuition fees',
      },
    ],
    costOfLiving: {
      accommodation: '£500 - £1,000 per month',
      food: '£150 - £300 per month',
      transport: '£50 - £150 per month',
      utilities: '£100 - £200 per month',
      total: '£800 - £1,500 per month',
    },
    visaRequirements: [
      'Valid passport for the duration of your course',
      'Confirmation of Acceptance for Studies (CAS) from your institution',
      'Proof of financial support for tuition and living costs',
      'English language proficiency (IELTS/TOEFL)',
      'Tuberculosis (TB) test results from an approved clinic if required',
      'Application fee payment',
      'Immigration Health Surcharge payment',
      'Academic qualifications',
      'Biometric information (fingerprints and photo)',
    ],
  },
};

// Default country data if ID not found
const defaultCountryData = {
  name: 'Country not found',
  code: '',
  flag: '',
  overview: 'Information about this country is not available.',
  universities: [],
  courses: [],
  scholarships: [],
  costOfLiving: {
    accommodation: 'N/A',
    food: 'N/A',
    transport: 'N/A',
    utilities: 'N/A',
    total: 'N/A',
  },
  visaRequirements: [],
};

const CountryDetails = () => {
  const { countryId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const countryData = mockCountryDetails[countryId || ''] || defaultCountryData;

  return (
    <>
      <PageHeader
        title={countryData.name}
        background="gradient"
        backLink="/countries"
        centerText
      />

      <PageContainer>
        <div className="flex justify-center mb-8">
          <div className="h-32 w-48 relative">
            {countryData.code && (
              <img
                src={`https://flagcdn.com/${countryData.code.toLowerCase()}.svg`}
                alt={countryData.name}
                className="h-full w-full object-contain shadow-lg rounded-md"
              />
            )}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="living">Cost of Living</TabsTrigger>
            <TabsTrigger value="visa">Visa</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none"
            >
              <p className="text-lg leading-relaxed">{countryData.overview}</p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/20 p-2 rounded-full mr-4">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Education Quality</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Known for world-class universities and innovative teaching
                      methods.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/20 p-2 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Global Recognition</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Degrees are highly respected and recognized worldwide by
                      employers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/20 p-2 rounded-full mr-4">
                        <Landmark className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Cultural Experience</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Immerse yourself in a rich cultural and diverse
                      environment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="universities" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-semibold mb-6">
                Top Universities in {countryData.name}
              </h3>

              {countryData.universities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {countryData.universities.map((university, index) => (
                    <UniversityCard
                      key={university.id}
                      university={university}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No university information available.
                </p>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="courses" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-semibold mb-6">
                Popular Courses in {countryData.name}
              </h3>

              {countryData.courses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {countryData.courses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No course information available.
                </p>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="scholarships" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-semibold mb-6">
                Scholarships for International Students
              </h3>

              {countryData.scholarships.length > 0 ? (
                <div className="space-y-6">
                  {countryData.scholarships.map((scholarship, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start">
                          <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              {scholarship.name}
                            </h4>
                            <p className="text-muted-foreground mt-1">
                              {scholarship.description}
                            </p>
                            <div className="mt-3 bg-muted inline-block px-3 py-1 rounded-full text-sm font-medium">
                              {scholarship.amount}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No scholarship information available.
                </p>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="living" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-semibold mb-6">
                Cost of Living in {countryData.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-4 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      Accommodation
                    </h4>
                    <p className="text-2xl font-bold">
                      {countryData.costOfLiving.accommodation}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Varies by location and type (dormitory, shared apartment,
                      etc.)
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-4 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      Food & Groceries
                    </h4>
                    <p className="text-2xl font-bold">
                      {countryData.costOfLiving.food}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Includes groceries and occasional dining out
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-4 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      Transportation
                    </h4>
                    <p className="text-2xl font-bold">
                      {countryData.costOfLiving.transport}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Public transport, student discounts available
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-4 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      Utilities & Internet
                    </h4>
                    <p className="text-2xl font-bold">
                      {countryData.costOfLiving.utilities}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Electricity, water, heating, internet
                    </p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2 bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-primary" />
                      Estimated Monthly Total
                    </h4>
                    <p className="text-3xl font-bold">
                      {countryData.costOfLiving.total}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      This is an average estimate and actual costs may vary
                      based on lifestyle and location.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="visa" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center mb-6">
                <IdCard className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-semibold">
                  Student Visa Requirements for {countryData.name}
                </h3>
              </div>

              {countryData.visaRequirements.length > 0 ? (
                <div className="space-y-3 mt-6">
                  {countryData.visaRequirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 rounded-lg bg-card border"
                    >
                      <Check className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <p>{requirement}</p>
                    </div>
                  ))}

                  <div className="bg-muted/50 p-4 rounded-lg mt-6">
                    <p className="text-sm">
                      <span className="font-medium">Important:</span> Visa
                      requirements may change. Always check the official
                      immigration website or consult with the embassy/consulate
                      of {countryData.name} for the most up-to-date information.
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No visa requirement information available.
                </p>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </PageContainer>
    </>
  );
};

export default CountryDetails;
