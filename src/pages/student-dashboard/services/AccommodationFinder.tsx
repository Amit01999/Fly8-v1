export default function AccommodationFinder() {
  return (
    <div className="text-center py-6">
      <h2 className="text-3xl font-bold mb-2">Accommodation Finder</h2>
      <p className="text-muted-foreground">
        Find and compare student accomodation options near your university.
      </p>
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              On-Campus
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded">
              Off-Campus
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded">Shared</button>
            <button className="px-4 py-2 bg-gray-200 rounded">Private</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold">University Dorms</h3>
                <p className="text-sm text-gray-600">0.2 miles from campus</p>
                <p className="font-medium mt-2">$450/month</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold">Student Housing Complex</h3>
                <p className="text-sm text-gray-600">0.5 miles from campus</p>
                <p className="font-medium mt-2">$380/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
