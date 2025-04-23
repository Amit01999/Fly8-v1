export default function JobPortal() {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-2">Job Portal</h2>
      <p className="text-muted-foreground">
        Discover part-time jobs and internships for students.
      </p>
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Latest Opportunities</h2>
            <button className="text-blue-600 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Research Assistant</h3>
                <span className="text-green-600 text-sm font-medium">
                  $15/hr
                </span>
              </div>
              <p className="text-sm text-gray-600">
                University Research Department
              </p>
              <div className="flex items-center mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  On Campus
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded ml-2">
                  Part-time
                </span>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Library Assistant</h3>
                <span className="text-green-600 text-sm font-medium">
                  $13/hr
                </span>
              </div>
              <p className="text-sm text-gray-600">University Library</p>
              <div className="flex items-center mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  On Campus
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded ml-2">
                  Flexible Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
