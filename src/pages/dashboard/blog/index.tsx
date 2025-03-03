function DashboardBlogPage() {
  return (
    <div className="min-h-screen m-[10%] flex flex-col justify-start bg-gray-50 p-6 w-full">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <h2 className="text-left text-3xl font-bold mb-6 text-gray-800">
          Blog
        </h2>
        <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-green-500 transition-all">
          Add Blog
        </button>
      </div>

      {/* Table Section */}
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr className="text-left text-sm">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Subtitle</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardBlogPage;
