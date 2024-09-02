  import Popup from "../popup";

  const Tables = {
    CategoryTable: ({ categories, onEdit }) => {
      return (
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4">Manage Categories</h3>
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Category Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Is Hots
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {category.title}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {category.isHots == true ? "True" : "False"}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 flex space-x-2">
                    <button
                      onClick={() => onEdit(category.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  };

  export { Tables };
