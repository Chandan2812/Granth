import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import AddBlog from "../../components/AddBlogs";

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  datePublished: string;
  slug: string;
  coverImage: string;
  tags?: string;
}

const API_BASE = "https://granth-backend.onrender.com/api/blogs";

const AdminBlog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/viewblog`);
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!window.confirm("Are you sure you want to delete this blog post?"))
      return;

    try {
      const res = await fetch(`${API_BASE}/${slug}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (res.ok) {
        alert(json.msg || "Deleted successfully");
        fetchBlogs();
      } else {
        alert(json.msg || "Failed to delete");
      }
    } catch (error) {
      alert("Error deleting blog post");
    }
  };

  const handleEdit = (slug: string) => {
    const blogToEdit = blogs.find((b) => b.slug === slug);
    if (blogToEdit) {
      setEditingBlog(blogToEdit);
      setShowAddModal(true);
    }
  };

  const handleModalClose = () => {
    setShowAddModal(false);
    setEditingBlog(null);
  };

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-4">
      <div className="flex justify-between items-center sticky top-0 z-20 bg-black p-4 border-b border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold">Blog Posts</h1>
        <button
          className="text-white bg-[var(--primary-color)] px-4 py-2 rounded"
          onClick={() => {
            setEditingBlog(null); // ensure it's a new blog
            setShowAddModal(true);
          }}
        >
          Add New Blog
        </button>
      </div>

      <div className="flex-1 overflow-y-auto mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length === 0 ? (
          <p className="text-gray-400">No blog posts found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">Title</th>

                  <th className="px-4 py-3 border-b border-gray-700">
                    Excerpt
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Content
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">Author</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Published
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-4 py-3 max-w-xs truncate">
                      {blog.title}
                    </td>

                    <td className="px-4 py-3 max-w-xs truncate">
                      {blog.excerpt}
                    </td>
                    <td className="px-4 py-3 max-w-xs truncate">
                      {blog.content}
                    </td>

                    <td className="px-4 py-3">{blog.author}</td>
                    <td className="px-4 py-3">
                      {new Date(blog.datePublished).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 space-x-4">
                      <button
                        onClick={() => handleEdit(blog.slug)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Edit />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.slug)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showAddModal && (
        <AddBlog
          onClose={handleModalClose}
          onSuccess={fetchBlogs}
          existingBlog={editingBlog} // Pass blog if editing
        />
      )}
    </div>
  );
};

export default AdminBlog;
