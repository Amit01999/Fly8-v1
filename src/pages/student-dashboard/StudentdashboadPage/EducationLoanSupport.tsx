import React, { useState } from 'react';
import {
  DollarSign,
  Calculator,
  FileText,
  CheckCircle,
  TrendingUp,
  Shield,
} from 'lucide-react';

const loanProviders = [
  {
    id: 1,
    name: 'EduFund International',
    interestRate: '8.5% - 12%',
    maxAmount: '$100,000',
    processingTime: '7-14 days',
    rating: 4.8,
    features: [
      'No collateral required',
      'Quick approval',
      'Flexible repayment',
    ],
  },
  {
    id: 2,
    name: 'StudyLoan Global',
    interestRate: '9% - 13%',
    maxAmount: '$150,000',
    processingTime: '10-21 days',
    rating: 4.6,
    features: [
      'Competitive rates',
      'Study abroad focus',
      'Co-applicant support',
    ],
  },
  {
    id: 3,
    name: 'Future Finance',
    interestRate: '7.5% - 11.5%',
    maxAmount: '$200,000',
    processingTime: '5-10 days',
    rating: 4.9,
    features: ['Lowest rates', 'Fast processing', 'Career guidance'],
  },
];

const EducationLoanSupport = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(5);
  const [interestRate, setInterestRate] = useState(10);

  const calculateEMI = () => {
    const monthlyRate = interestRate / (12 * 100);
    const totalMonths = tenure * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Education Loan</h1>
        <p className="text-yellow-100">
          Secure funding for your international education
        </p>
      </div>

      {/* EMI Calculator */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <Calculator className="w-6 h-6 mr-2" />
          EMI Calculator
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount
            </label>
            <input
              type="range"
              min="10000"
              max="200000"
              step="5000"
              value={loanAmount}
              onChange={e => setLoanAmount(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2 text-lg font-semibold text-blue-600">
              ${loanAmount.toLocaleString()}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tenure (Years)
            </label>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={tenure}
              onChange={e => setTenure(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2 text-lg font-semibold text-blue-600">
              {tenure} Years
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (%)
            </label>
            <input
              type="range"
              min="6"
              max="18"
              step="0.5"
              value={interestRate}
              onChange={e => setInterestRate(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2 text-lg font-semibold text-blue-600">
              {interestRate}%
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Monthly EMI
          </h4>
          <div className="text-3xl font-bold text-blue-600">
            ${calculateEMI().toLocaleString()}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Total Amount: ${(calculateEMI() * tenure * 12).toLocaleString()} |
            Interest: $
            {(calculateEMI() * tenure * 12 - loanAmount).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Loan Providers */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Loan Opportunities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanProviders.map(provider => (
            <div
              key={provider.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <h4 className="font-semibold text-gray-800 text-lg mb-2">
                  {provider.name}
                </h4>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-medium text-green-600">
                      {provider.interestRate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Amount:</span>
                    <span className="font-medium">{provider.maxAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing:</span>
                    <span className="font-medium">
                      {provider.processingTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">
                        {provider.rating}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(provider.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          >
                            ⭐
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 mb-2">
                    Key Features:
                  </h5>
                  <ul className="space-y-1">
                    {provider.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Application Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">
              Submit Application
            </h4>
            <p className="text-sm text-gray-600">
              Fill out the loan application form with required documents
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">
              Credit Assessment
            </h4>
            <p className="text-sm text-gray-600">
              Lender evaluates your creditworthiness and eligibility
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Verification</h4>
            <p className="text-sm text-gray-600">
              Document verification and background checks
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Loan Approval</h4>
            <p className="text-sm text-gray-600">
              Final approval and loan disbursal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationLoanSupport;
