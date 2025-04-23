export default function VisaAssistance() {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-2">Visa Assistance</h2>
      <p className="text-muted-foreground">
        Get help and guidance for your study visa applications here!
      </p>
      <div className="p-6">
        <p className="mb-4">
          Get help with your student visa application process, extensions, and
          requirements.
        </p>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-3">Available Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Visa application guidance</li>
            <li>Document verification assistance</li>
            <li>Interview preparation</li>
            <li>Visa extension support</li>
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
