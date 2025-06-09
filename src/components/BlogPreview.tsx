// components/BlogPreview.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  author: string;
  coverImage: string;
  tags?: string[];
  datePublished: string;
  lastUpdated?: string;
  // You can add more fields if needed
}

const BlogPreview: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://granth-backend.onrender.com/api/blogs/viewblog"
        );

        // Assuming API returns array of blogs
        let apiBlogs: Blog[] = res.data;

        // Sort blogs by datePublished descending to get latest first
        apiBlogs.sort(
          (a, b) =>
            new Date(b.datePublished).getTime() -
            new Date(a.datePublished).getTime()
        );

        // Take only the latest 4
        setBlogs(apiBlogs.slice(0, 4));
      } catch (err) {
        console.error(err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center py-20 text-red-600">{error}</p>;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-black dark:text-gray-100 text-center">
          Featured Blogs
        </h2>
        <p className="mt-2 text-black dark:text-gray-300 max-w-2xl mx-auto">
          Catch up on the latest highlights from the trading and real estate
          world.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <Link to={`/blogs/${blog.slug}`} key={blog._id}>
            <div
              className="cursor-pointer relative rounded-lg p-[1.5px] hover:shadow-[0_0_10px_var(--primary-color)] transition"
              style={{
                background:
                  "linear-gradient(to bottom, #111, var(--primary-color))",
              }}
            >
              <div className="bg-white dark:bg-black rounded-lg h-[450px] flex flex-col overflow-hidden text-left">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  draggable={false}
                />
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Show first tag as category if exists */}
                    <span className="text-xs text-[var(--primary-color)] mb-1">
                      {blog.tags && blog.tags.length > 0
                        ? blog.tags[0]
                        : "Blog"}
                    </span>
                    <h3 className="text-base font-semibold text-black dark:text-white leading-snug mb-1 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-[var(--primary-color)] font-medium mb-2">
                      {new Date(blog.datePublished).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      {blog.excerpt || blog.content?.slice(0, 100) || ""}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    {blog.author} {/* You can add readTime if you have it */}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/blog"
          className="w-fit px-4 text-black bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] py-3 hover:opacity-90 transition"
        >
          View All Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;
