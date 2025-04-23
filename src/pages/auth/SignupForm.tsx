import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    accountType: 'student',
    studentInfo: {},
    agencyInfo: {},
    universityInfo: {},
  });

  const handleChange = e => {
    const { name, value } = e.target;
    if (['student', 'agency', 'university'].includes(formData.accountType)) {
      setFormData({
        ...formData,
        [`${formData.accountType}Info`]: {
          ...formData[`${formData.accountType}Info`],
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', formData);
      alert('Signup successful!');
    } catch (err) {
      console.error(err);
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <select
        name="accountType"
        onChange={e =>
          setFormData({ ...formData, accountType: e.target.value })
        }
      >
        <option value="student">Student</option>
        <option value="agency">Agency</option>
        <option value="university">University</option>
      </select>

      {/* Conditionally render role-specific fields */}
      {formData.accountType === 'student' && (
        <>
          <input
            type="text"
            name="passportNumber"
            placeholder="Passport Number"
            onChange={handleChange}
          />
          <input
            type="text"
            name="intendedCountry"
            placeholder="Intended Country"
            onChange={handleChange}
          />
        </>
      )}

      {formData.accountType === 'agency' && (
        <>
          <input
            type="text"
            name="agencyName"
            placeholder="Agency Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="licenseNumber"
            placeholder="License Number"
            onChange={handleChange}
          />
        </>
      )}

      {formData.accountType === 'university' && (
        <>
          <input
            type="text"
            name="institutionName"
            placeholder="Institution Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="institutionType"
            placeholder="Institution Type"
            onChange={handleChange}
          />
        </>
      )}

      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;
