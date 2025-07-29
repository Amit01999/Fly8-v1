import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const UploadUniversity = () => {
  const [formData, setFormData] = useState({
    universitycode: '',
    universityName: '',
    location: '',
    imageUrl: '',
    campusName: '',
    tagline: '',
    stats: [{ value: '' }, { value: '' }, { value: '' }],
    description: '',
    overviewData: [
      { label: 'Institution Type', value: '' },
      { label: 'Established', value: '' },
      { label: 'Accreditation', value: '' },
      { label: 'Locations', value: '' },
      { label: 'Focus Areas', value: '' },
      { label: 'Student Body', value: '' },
    ],
    generalInfo: '',
    applicationFee: 0,
    financialRequirement: 0,
    tuitionDeposit: 0,
    processingFee: 0,
    generalRequirements: [''],
    undergraduate: {
      englishTests: [{ name: '', score: '' }],
      otherTests: [''],
      additionalRequirements: [''],
    },
    graduate: {
      englishTests: [{ name: '', score: '' }],
      additionalRequirements: [''],
    },
    conditionalAdmission: {
      available: false,
      description: '',
      benefits: [''],
    },
    tuitionData: [{ category: '', amount: '', period: '' }],
    additionalFees: [{ name: '', amount: '' }],
    livingCosts: [{ category: '', range: '' }],
    scholarships: [
      {
        name: '',
        amount: '',
        type: '',
        eligibility: '',
        renewable: false,
        popular: false,
      },
    ],
    visaSteps: [{ step: 1, title: '', description: '' }],
    workOpportunities: [{ type: '', description: '', timing: '' }],
    campusImages: [{ src: '', alt: '' }],
    campusFeatures: [{ title: '', description: '' }],
    testimonial: { quote: '', author: '', country: '', program: '' },
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e, path = [], index = null) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => {
      let newData = { ...prev };
      if (path.length === 0) {
        newData[name] = type === 'number' ? parseFloat(value) || 0 : value;
      } else if (index !== null) {
        newData[path[0]][index][path[1]] =
          type === 'checkbox' ? checked : value;
      } else {
        newData[path[0]][path[1]] = type === 'checkbox' ? checked : value;
      }
      return newData;
    });
  };

  const handleArrayChange = (e, arrayName, index, field) => {
    const { value } = e.target;
    setFormData(prev => {
      const newArray = [...prev[arrayName]];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [arrayName]: newArray };
    });
  };

  const handleNestedArrayChange = (e, parent, arrayName, index, field) => {
    const { value } = e.target;
    setFormData(prev => {
      const newArray = [...prev[parent][arrayName]];
      newArray[index] = { ...newArray[index], [field]: value };
      return {
        ...prev,
        [parent]: { ...prev[parent], [arrayName]: newArray },
      };
    });
  };

  const addArrayItem = (arrayName, defaultItem) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], defaultItem],
    }));
  };
  const addStatArrayItem = (field, defaultValue = { value: '' }) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], defaultValue],
    }));
  };

  const addNestedArrayItem = (parent, arrayName, defaultItem) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [arrayName]: [...prev[parent][arrayName], defaultItem],
      },
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/universities', formData);
      setSuccess('University added successfully!');
      setError('');
      setFormData({
        universitycode: '',
        universityName: '',
        location: '',
        imageUrl: '',
        campusName: '',
        tagline: '',
        stats: [{ value: '' }, { value: '' }, { value: '' }],
        description: '',
        overviewData: [
          { label: 'Institution Type', value: '' },
          { label: 'Established', value: '' },
          { label: 'Accreditation', value: '' },
          { label: 'Locations', value: '' },
          { label: 'Focus Areas', value: '' },
          { label: 'Student Body', value: '' },
        ],
        generalInfo: '',
        applicationFee: 0,
        financialRequirement: 0,
        tuitionDeposit: 0,
        processingFee: 0,
        generalRequirements: [''],
        undergraduate: {
          englishTests: [{ name: '', score: '' }],
          otherTests: [''],
          additionalRequirements: [''],
        },
        graduate: {
          englishTests: [{ name: '', score: '' }],
          additionalRequirements: [''],
        },
        conditionalAdmission: {
          available: false,
          description: '',
          benefits: [''],
        },
        tuitionData: [{ category: '', amount: '', period: '' }],
        additionalFees: [{ name: '', amount: '' }],
        livingCosts: [{ category: '', range: '' }],
        scholarships: [
          {
            name: '',
            amount: '',
            type: '',
            eligibility: '',
            renewable: false,
            popular: false,
          },
        ],
        visaSteps: [{ step: 1, title: '', description: '' }],
        workOpportunities: [{ type: '', description: '', timing: '' }],
        campusImages: [{ src: '', alt: '' }],
        campusFeatures: [{ title: '', description: '' }],
        testimonial: { quote: '', author: '', country: '', program: '' },
      });
    } catch (err) {
      setError('Failed to add university');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 text-center">
          Add New University
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md mb-12"
        >
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Basic Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                University Code
              </label>
              <input
                type="text"
                name="universitycode"
                value={formData.universitycode}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                University Name
              </label>
              <input
                type="text"
                name="universityName"
                value={formData.universityName}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Campus Name
              </label>
              <input
                type="text"
                name="campusName"
                value={formData.campusName}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tagline
              </label>
              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                rows={4}
              />
            </div>

            {/* Stats */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Stats</h3>
              {formData.stats.map((stat, index) => (
                <input
                  key={index}
                  type="text"
                  value={stat.value || ''} // explicitly show the value field
                  onChange={e => handleArrayChange(e, 'stats', index, 'value')}
                  className="mt-1 p-2 w-full border rounded-md mb-2"
                  placeholder={`Stat ${index + 1}`}
                />
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('stats', '')}
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Stat
              </button>
            </div>

            {/* Overview Data */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Overview Data</h3>
              {formData.overviewData.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                  <input
                    type="text"
                    value={item.label}
                    onChange={e =>
                      handleArrayChange(e, 'overviewData', index, 'label')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Label"
                  />
                  <input
                    type="text"
                    value={item.value}
                    onChange={e =>
                      handleArrayChange(e, 'overviewData', index, 'value')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Value"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('overviewData', { label: '', value: '' })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Overview Item
              </button>
            </div>

            {/* General Info and Fees */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                General Information
              </label>
              <textarea
                name="generalInfo"
                value={formData.generalInfo}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Application Fee ($)
              </label>
              <input
                type="number"
                name="applicationFee"
                value={formData.applicationFee}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Financial Requirement ($)
              </label>
              <input
                type="number"
                name="financialRequirement"
                value={formData.financialRequirement}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tuition Deposit ($)
              </label>
              <input
                type="number"
                name="tuitionDeposit"
                value={formData.tuitionDeposit}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Processing Fee ($)
              </label>
              <input
                type="number"
                name="processingFee"
                value={formData.processingFee}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* General Requirements */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">
                General Requirements
              </h3>
              {formData.generalRequirements.map((req, index) => (
                <input
                  key={index}
                  type="text"
                  value={req}
                  onChange={e =>
                    handleArrayChange(e, 'generalRequirements', index, '')
                  }
                  className="mt-1 p-2 w-full border rounded-md mb-2"
                  placeholder={`Requirement ${index + 1}`}
                />
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('generalRequirements', '')}
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Requirement
              </button>
            </div>

            {/* Undergraduate */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Undergraduate</h3>
              <div className="mb-4">
                <h4 className="text-md font-medium mb-2">English Tests</h4>
                {formData.undergraduate.englishTests.map((test, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                    <input
                      type="text"
                      value={test.name}
                      onChange={e =>
                        handleNestedArrayChange(
                          e,
                          'undergraduate',
                          'englishTests',
                          index,
                          'name'
                        )
                      }
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Test Name"
                    />
                    <input
                      type="text"
                      value={test.score}
                      onChange={e =>
                        handleNestedArrayChange(
                          e,
                          'undergraduate',
                          'englishTests',
                          index,
                          'score'
                        )
                      }
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Score"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    addNestedArrayItem('undergraduate', 'englishTests', {
                      name: '',
                      score: '',
                    })
                  }
                  className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Add English Test
                </button>
              </div>
              <div className="mb-4">
                <h4 className="text-md font-medium mb-2">Other Tests</h4>
                {formData.undergraduate.otherTests.map((test, index) => (
                  <input
                    key={index}
                    type="text"
                    value={test}
                    onChange={e =>
                      handleNestedArrayChange(
                        e,
                        'undergraduate',
                        'otherTests',
                        index,
                        ''
                      )
                    }
                    className="mt-1 p-2 w-full border rounded-md mb-2"
                    placeholder={`Other Test ${index + 1}`}
                  />
                ))}
                <button
                  type="button"
                  onClick={() =>
                    addNestedArrayItem('undergraduate', 'otherTests', '')
                  }
                  className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Add Other Test
                </button>
              </div>
              <div>
                <h4 className="text-md font-medium mb-2">
                  Additional Requirements
                </h4>
                {formData.undergraduate.additionalRequirements.map(
                  (req, index) => (
                    <input
                      key={index}
                      type="text"
                      value={req}
                      onChange={e =>
                        handleNestedArrayChange(
                          e,
                          'undergraduate',
                          'additionalRequirements',
                          index,
                          ''
                        )
                      }
                      className="mt-1 p-2 w-full border rounded-md mb-2"
                      placeholder={`Requirement ${index + 1}`}
                    />
                  )
                )}
                <button
                  type="button"
                  onClick={() =>
                    addNestedArrayItem(
                      'undergraduate',
                      'additionalRequirements',
                      ''
                    )
                  }
                  className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Add Additional Requirement
                </button>
              </div>
            </div>

            {/* Graduate */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Graduate</h3>
              <div className="mb-4">
                <h4 className="text-md font-medium mb-2">English Tests</h4>
                {formData.graduate.englishTests.map((test, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                    <input
                      type="text"
                      value={test.name}
                      onChange={e =>
                        handleNestedArrayChange(
                          e,
                          'graduate',
                          'englishTests',
                          index,
                          'name'
                        )
                      }
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Test Name"
                    />
                    <input
                      type="text"
                      value={test.score}
                      onChange={e =>
                        handleNestedArrayChange(
                          e,
                          'graduate',
                          'englishTests',
                          index,
                          'score'
                        )
                      }
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Score"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    addNestedArrayItem('graduate', 'englishTests', {
                      name: '',
                      score: '',
                    })
                  }
                  className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Add English Test
                </button>
              </div>
              <div>
                <h4 className="text-md font-medium mb-2">
                  Additional Requirements
                </h4>
                {formData.graduate.additionalRequirements.map((req, index) => (
                  <input
                    key={index}
                    type="text"
                    value={req}
                    onChange={e =>
                      handleNestedArrayChange(
                        e,
                        'graduate',
                        'additionalRequirements',
                        index,
                        ''
                      )
                    }
                    className="mt-1 p-2 w-full border rounded-md mb-2"
                    placeholder={`Requirement ${index + 1}`}
                  />
                ))}
                <button
                  type="button"
                  onClick={() =>
                    addNestedArrayItem('graduate', 'additionalRequirements', '')
                  }
                  className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Add Additional Requirement
                </button>
              </div>
            </div>

            {/* Conditional Admission */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">
                Conditional Admission
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Available
                </label>
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.conditionalAdmission.available}
                  onChange={e =>
                    handleInputChange(e, ['conditionalAdmission', 'available'])
                  }
                  className="mt-1 p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.conditionalAdmission.description}
                  onChange={e =>
                    handleInputChange(e, [
                      'conditionalAdmission',
                      'description',
                    ])
                  }
                  className="mt-1 p-2 w-full border rounded-md"
                  rows={4}
                />
              </div>
              <div>
                <h4 className="text-md font-medium mb-2">Benefits</h4>
                {formData.conditionalAdmission.benefits.map(
                  (benefit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={benefit}
                      onChange={e =>
                        handleNestedArrayChange(
                          e,
                          'conditionalAdmission',
                          'benefits',
                          index,
                          ''
                        )
                      }
                      className="mt-1 p-2 w-full border rounded-md mb-2"
                      placeholder={`Benefit ${index + 1}`}
                    />
                  )
                )}
                <button
                  type="button"
                  onClick={() =>
                    addNestedArrayItem('conditionalAdmission', 'benefits', '')
                  }
                  className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Add Benefit
                </button>
              </div>
            </div>

            {/* Tuition Data */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Tuition Data</h3>
              {formData.tuitionData.map((tuition, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                  <input
                    type="text"
                    value={tuition.category}
                    onChange={e =>
                      handleArrayChange(e, 'tuitionData', index, 'category')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Category"
                  />
                  <input
                    type="text"
                    value={tuition.amount}
                    onChange={e =>
                      handleArrayChange(e, 'tuitionData', index, 'amount')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Amount"
                  />
                  <input
                    type="text"
                    value={tuition.period}
                    onChange={e =>
                      handleArrayChange(e, 'tuitionData', index, 'period')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Period"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('tuitionData', {
                    category: '',
                    amount: '',
                    period: '',
                  })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Tuition Item
              </button>
            </div>

            {/* Additional Fees */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Additional Fees</h3>
              {formData.additionalFees.map((fee, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                  <input
                    type="text"
                    value={fee.name}
                    onChange={e =>
                      handleArrayChange(e, 'additionalFees', index, 'name')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Fee Name"
                  />
                  <input
                    type="text"
                    value={fee.amount}
                    onChange={e =>
                      handleArrayChange(e, 'additionalFees', index, 'amount')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Amount"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('additionalFees', { name: '', amount: '' })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Fee
              </button>
            </div>

            {/* Living Costs */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Living Costs</h3>
              {formData.livingCosts.map((cost, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                  <input
                    type="text"
                    value={cost.category}
                    onChange={e =>
                      handleArrayChange(e, 'livingCosts', index, 'category')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Category"
                  />
                  <input
                    type="text"
                    value={cost.range}
                    onChange={e =>
                      handleArrayChange(e, 'livingCosts', index, 'range')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Range"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('livingCosts', { category: '', range: '' })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Living Cost
              </button>
            </div>

            {/* Scholarships */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Scholarships</h3>
              {formData.scholarships.map((scholarship, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                  <input
                    type="text"
                    value={scholarship.name}
                    onChange={e =>
                      handleArrayChange(e, 'scholarships', index, 'name')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Scholarship Name"
                  />
                  <input
                    type="text"
                    value={scholarship.amount}
                    onChange={e =>
                      handleArrayChange(e, 'scholarships', index, 'amount')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Amount"
                  />
                  <input
                    type="text"
                    value={scholarship.type}
                    onChange={e =>
                      handleArrayChange(e, 'scholarships', index, 'type')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Type"
                  />
                  <input
                    type="text"
                    value={scholarship.eligibility}
                    onChange={e =>
                      handleArrayChange(e, 'scholarships', index, 'eligibility')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Eligibility"
                  />
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={scholarship.renewable}
                      onChange={e =>
                        handleArrayChange(e, 'scholarships', index, 'renewable')
                      }
                      className="mt-1 p-2"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                      Renewable
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={scholarship.popular}
                      onChange={e =>
                        handleArrayChange(e, 'scholarships', index, 'popular')
                      }
                      className="mt-1 p-2"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                      Popular
                    </label>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('scholarships', {
                    name: '',
                    amount: '',
                    type: '',
                    eligibility: '',
                    renewable: false,
                    popular: false,
                  })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Scholarship
              </button>
            </div>

            {/* Visa Steps */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Visa Steps</h3>
              {formData.visaSteps.map((step, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                  <input
                    type="number"
                    value={step.step}
                    onChange={e =>
                      handleArrayChange(e, 'visaSteps', index, 'step')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Step Number"
                  />
                  <input
                    type="text"
                    value={step.title}
                    onChange={e =>
                      handleArrayChange(e, 'visaSteps', index, 'title')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    value={step.description}
                    onChange={e =>
                      handleArrayChange(e, 'visaSteps', index, 'description')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Description"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('visaSteps', {
                    step: formData.visaSteps.length + 1,
                    title: '',
                    description: '',
                  })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Visa Step
              </button>
            </div>

            {/* Work Opportunities */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Work Opportunities</h3>
              {formData.workOpportunities.map((opp, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                  <input
                    type="text"
                    value={opp.type}
                    onChange={e =>
                      handleArrayChange(e, 'workOpportunities', index, 'type')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Type"
                  />
                  <input
                    type="text"
                    value={opp.description}
                    onChange={e =>
                      handleArrayChange(
                        e,
                        'workOpportunities',
                        index,
                        'description'
                      )
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Description"
                  />
                  <input
                    type="text"
                    value={opp.timing}
                    onChange={e =>
                      handleArrayChange(e, 'workOpportunities', index, 'timing')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Timing"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('workOpportunities', {
                    type: '',
                    description: '',
                    timing: '',
                  })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Work Opportunity
              </button>
            </div>

            {/* Campus Images */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Campus Images</h3>
              {formData.campusImages.map((image, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                  <input
                    type="text"
                    value={image.src}
                    onChange={e =>
                      handleArrayChange(e, 'campusImages', index, 'src')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Image URL"
                  />
                  <input
                    type="text"
                    value={image.alt}
                    onChange={e =>
                      handleArrayChange(e, 'campusImages', index, 'alt')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Alt Text"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('campusImages', { src: '', alt: '' })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Campus Image
              </button>
            </div>

            {/* Campus Features */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Campus Features</h3>
              {formData.campusFeatures.map((feature, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                  <input
                    type="text"
                    value={feature.title}
                    onChange={e =>
                      handleArrayChange(e, 'campusFeatures', index, 'title')
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    value={feature.description}
                    onChange={e =>
                      handleArrayChange(
                        e,
                        'campusFeatures',
                        index,
                        'description'
                      )
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Description"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addArrayItem('campusFeatures', { title: '', description: '' })
                }
                className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Add Campus Feature
              </button>
            </div>

            {/* Testimonial */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Testimonial</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Quote
                  </label>
                  <textarea
                    name="quote"
                    value={formData.testimonial.quote}
                    onChange={e =>
                      handleInputChange(e, ['testimonial', 'quote'])
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.testimonial.author}
                    onChange={e =>
                      handleInputChange(e, ['testimonial', 'author'])
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.testimonial.country}
                    onChange={e =>
                      handleInputChange(e, ['testimonial', 'country'])
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Program
                  </label>
                  <input
                    type="text"
                    name="program"
                    value={formData.testimonial.program}
                    onChange={e =>
                      handleInputChange(e, ['testimonial', 'program'])
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add University
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default UploadUniversity;
