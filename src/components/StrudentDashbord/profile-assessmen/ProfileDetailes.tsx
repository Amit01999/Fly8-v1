import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

// import 'react-toastify/dist/ReactToastify.css';
import { profile } from 'console';

interface FormData {
  personalInfo: {
    name: string;
    dob: string;
    nationality: string;
    gender: string;
    email: string;
    phone: string;
  };
  academicInfo: {
    educationHistory: Array<{
      institution: string;
      degree: string;
      grades: string;
      year: string;
    }>;
  };
  studyPreferences: {
    countries: string[];
    courseTypes: string[];
    intakes: string[];
  };
}

const ProfileDetailes: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [progress, setProgress] = useState(0);
  const [documents, setDocuments] = useState<{ [key: string]: File | null }>({
    passport: null,
    visa: null,
    certificates: null,
  });

  useEffect(() => {
    // Fetch existing profile data
    axios.get('/api/student/profile').then(res => {
      setValue('personalInfo', res.data.personalInfo);
      setValue('academicInfo', res.data.academicInfo);
      setValue('studyPreferences', res.data.studyPreferences);
      setProgress(res.data.completionPercentage);
    });
  }, [setValue]);

  const calculateProgress = (data: FormData) => {
    let totalFields = 0;
    let filledFields = 0;

    // Count personal info fields
    const personalInfoFields = Object.values(data.personalInfo);
    totalFields += personalInfoFields.length;
    filledFields += personalInfoFields.filter(v => v).length;

    // Count academic info
    totalFields += 4; // institution, degree, grades, year
    if (data.academicInfo.educationHistory.length > 0) {
      filledFields += Object.values(
        data.academicInfo.educationHistory[0]
      ).filter(v => v).length;
    }

    // Count study preferences
    const preferenceFields = Object.values(data.studyPreferences);
    totalFields += preferenceFields.length;
    preferenceFields.forEach(arr => {
      filledFields += arr.length > 0 ? 1 : 0;
    });

    // Count documents
    totalFields += 3; // passport, visa, certificates
    filledFields += Object.values(documents).filter(d => d !== null).length;

    return Math.round((filledFields / totalFields) * 100);
  };

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      const formData = new FormData();
      formData.append('personalInfo', JSON.stringify(data.personalInfo));
      formData.append('academicInfo', JSON.stringify(data.academicInfo));
      formData.append(
        'studyPreferences',
        JSON.stringify(data.studyPreferences)
      );

      Object.entries(documents).forEach(([key, file]) => {
        if (file) formData.append(key, file);
      });

      const res = await axios.post('/api/student/profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setProgress(res.data.completionPercentage);
      // toast.success('Profile updated successfully!');
    } catch (error) {
      // toast.error('Failed to update profile');
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    docType: string
  ) => {
    if (e.target.files) {
      setDocuments(prev => ({ ...prev, [docType]: e.target.files![0] }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Profile Completion</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>{progress}% Complete</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              {...register('personalInfo.name')}
              placeholder="Full Name"
              className="p-2 border rounded"
            />
            <input
              {...register('personalInfo.dob')}
              type="date"
              className="p-2 border rounded"
            />
            <input
              {...register('personalInfo.nationality')}
              placeholder="Nationality"
              className="p-2 border rounded"
            />
            <select
              {...register('personalInfo.gender')}
              className="p-2 border rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              {...register('personalInfo.email')}
              type="email"
              placeholder="Email"
              className="p-2 border rounded"
            />
            <input
              {...register('personalInfo.phone')}
              type="tel"
              placeholder="Phone"
              className="p-2 border rounded"
            />
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Academic Information</h3>
          <div className="space-y-4">
            <input
              {...register('academicInfo.educationHistory.0.institution')}
              placeholder="Institution Name"
              className="p-2 border rounded w-full"
            />
            <input
              {...register('academicInfo.educationHistory.0.degree')}
              placeholder="Degree"
              className="p-2 border rounded w-full"
            />
            <input
              {...register('academicInfo.educationHistory.0.grades')}
              placeholder="Grades"
              className="p-2 border rounded w-full"
            />
            <input
              {...register('academicInfo.educationHistory.0.year')}
              placeholder="Year"
              className="p-2 border rounded w-full"
            />
          </div>
        </div>

        {/* Study Preferences */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Study Preferences</h3>
          <div className="space-y-4">
            <select
              {...register('studyPreferences.countries')}
              multiple
              className="p-2 border rounded w-full"
            >
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
            <select
              {...register('studyPreferences.courseTypes')}
              multiple
              className="p-2 border rounded w-full"
            >
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
            <select
              {...register('studyPreferences.intakes')}
              multiple
              className="p-2 border rounded w-full"
            >
              <option value="Fall">Fall</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </select>
          </div>
        </div>

        {/* Document Uploads */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Document Uploads</h3>
          <div className="space-y-4">
            <div>
              <label>Passport</label>
              <input
                type="file"
                onChange={e => handleFileChange(e, 'passport')}
                className="p-2 border rounded w-full"
              />
            </div>
            <div>
              <label>Visa</label>
              <input
                type="file"
                onChange={e => handleFileChange(e, 'visa')}
                className="p-2 border rounded w-full"
              />
            </div>
            <div>
              <label>Academic Certificates</label>
              <input
                type="file"
                onChange={e => handleFileChange(e, 'certificates')}
                className="p-2 border rounded w-full"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileDetailes;
