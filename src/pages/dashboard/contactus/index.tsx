function DashboardContactUsPage() {
  return (
    <div className="min-h-screen m-[10%] flex flex-col justify-start bg-gray-50 p-6 w-full">
      <h2 className="text-left text-3xl font-bold mb-6 text-gray-800">
        Contact Us
      </h2>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr className="text-left text-sm">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Message</th>
              <th className="px-4 py-2 border">Phone No</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm text-gray-700 bg-white hover:bg-gray-100">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">Name is here</td>
              <td className="px-4 py-2 border">Email is here</td>
              <td className="px-4 py-2 border">Message is here</td>
              <td className="px-4 py-2 border">Phone no is here</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardContactUsPage;
