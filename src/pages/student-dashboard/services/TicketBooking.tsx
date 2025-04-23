import { Plane } from 'lucide-react';
export default function TicketBooking() {
  return (
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold mb-2">Ticket Booking</h2>
      <p className="text-muted-foreground">
        Book your flights easily with exclusive student discounts.
      </p>
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-3">Travel Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <Plane className="text-blue-500 mb-2" />
              <h3 className="font-medium">Flights</h3>
              <p className="text-sm text-gray-600">International & Domestic</p>
            </div>
            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <svg
                className="w-6 h-6 text-blue-500 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
              <h3 className="font-medium">Buses</h3>
              <p className="text-sm text-gray-600">City & Interstate</p>
            </div>
            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <svg
                className="w-6 h-6 text-blue-500 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <h3 className="font-medium">Trains</h3>
              <p className="text-sm text-gray-600">Local & Express</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
