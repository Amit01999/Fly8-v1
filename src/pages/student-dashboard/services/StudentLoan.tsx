export default function StudentLoan() {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-2">Student Loan</h2>
      <p className="text-muted-foreground">
        Explore student loan options tailored just for you.
      </p>
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-3">
            Available Loan Programs
          </h2>
          <div className="space-y-4 mb-6">
            <div className="border-b pb-4">
              <h3 className="font-medium">Federal Student Loans</h3>
              <p className="text-sm text-gray-600 mt-1">
                Low interest rates with flexible repayment options
              </p>
              <div className="mt-2">
                <span className="text-sm font-medium">Interest: </span>
                <span className="text-sm">4.5% - 7.0%</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium">Private Student Loans</h3>
              <p className="text-sm text-gray-600 mt-1">
                For expenses not covered by federal loans
              </p>
              <div className="mt-2">
                <span className="text-sm font-medium">Interest: </span>
                <span className="text-sm">6.0% - 12.0%</span>
              </div>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-3">Financial Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="border rounded-lg p-4 text-left hover:bg-gray-50">
              <h3 className="font-medium">Loan Repayment Calculator</h3>
              <p className="text-sm text-gray-600">
                Estimate your monthly payments
              </p>
            </button>
            <button className="border rounded-lg p-4 text-left hover:bg-gray-50">
              <h3 className="font-medium">Interest Savings Calculator</h3>
              <p className="text-sm text-gray-600">
                See how extra payments save money
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
