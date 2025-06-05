import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Property {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  bedrooms: string;
  size: string;
  message: string;
  titleDeed: boolean;
  submittedAt: string;
}

function ListProperty() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    setLoading(true);
    fetch("https://granth-backend.onrender.com/api/property/list")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch properties");
        return res.json();
      })
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;

    setDeletingId(id);
    fetch(`https://granth-backend.onrender.com/api/property/list/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete property");
        setProperties((prev) => prev.filter((p) => p._id !== id));
        setDeletingId(null);
      })
      .catch((err) => {
        alert("Error deleting property: " + err.message);
        setDeletingId(null);
      });
  };

  if (loading) return <p className="text-white p-4">Loading properties...</p>;
  if (error) return <p className="text-red-500 p-4">Error: {error}</p>;

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-0">
      <div className="sticky top-5 z-20 bg-black p-4 sm:p-6 border-b border-gray-700">
        <h1 className=" text-2xl sm:text-3xl font-bold">Listed Properties</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {properties.length === 0 ? (
          <p className="text-gray-400">No properties found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">Name</th>
                  <th className="px-4 py-3 border-b border-gray-700">Email</th>
                  <th className="px-4 py-3 border-b border-gray-700">Phone</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Address
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Bedrooms
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">Size</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Submitted At
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Message
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr
                    key={property._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-4 py-3">{property.name}</td>
                    <td className="px-4 py-3">{property.email}</td>
                    <td className="px-4 py-3">{property.phone}</td>
                    <td className="px-4 py-3">{property.address}</td>
                    <td className="px-4 py-3">{property.bedrooms}</td>
                    <td className="px-4 py-3">{property.size}</td>
                    <td className="px-4 py-3">
                      {new Date(property.submittedAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">{property.message}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(property._id)}
                        disabled={deletingId === property._id}
                        className={`px-3 py-1 rounded text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {deletingId === property._id ? (
                          "Deleting..."
                        ) : (
                          <Trash2 color="red" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListProperty;
