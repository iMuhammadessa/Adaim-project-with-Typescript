function DashboardCompaniesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-start bg-gray-50 p-6 w-full">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <h2 className="text-left text-3xl font-bold mb-6 text-gray-800">
          Companies
        </h2>
        <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-green-500 transition-all">
          Add
        </button>
      </div>

      {/* Table Section */}
      <div className="w-full sm:max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        <div className="overflow-x-auto w-full flex justify-center">
          <table className="w-full md:w-auto border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left text-sm">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Logo</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Address</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Phone No</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm text-gray-700 bg-white hover:bg-gray-100">
                <td className="px-4 py-2 border">1</td>
                <td className="px-4 py-2 border">Company Name</td>
                <td className="px-4 py-2 border">Logo</td>
                <td className="px-4 py-2 border">company@email.com</td>
                <td className="px-4 py-2 border">Image</td>
                <td className="px-4 py-2 border">123 Street, City</td>
                <td className="px-4 py-2 border">Company Description</td>
                <td className="px-4 py-2 border">+123456789</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCompaniesPage;
