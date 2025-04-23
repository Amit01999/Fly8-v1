export default function MedicalSupport() {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-2">Medical Support</h2>
      <p className="text-muted-foreground">
        Access medical resources, connections, and emergency help.
      </p>
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-3">Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Campus Health Center</h3>
              <p className="text-sm text-gray-600 mb-2">Mon-Fri: 8am - 6pm</p>
              <button className="text-sm text-blue-600 hover:underline">
                Book Appointment
              </button>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Mental Health Services</h3>
              <p className="text-sm text-gray-600 mb-2">Counseling available</p>
              <button className="text-sm text-blue-600 hover:underline">
                Learn More
              </button>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-3">Insurance Information</h2>
          <p className="text-sm text-gray-600">
            All students are required to have health insurance. Check your
            coverage options below.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Insurance Plans
          </button>
        </div>
      </div>
    </div>
  );
}
