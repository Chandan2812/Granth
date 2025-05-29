// components/BlogPreview.tsx
import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogPreview: React.FC = () => {
  const topBlogs = blogs.slice(0, 4); // Only show top 4 blogs

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Featured{" "}
          <span className="text-[var(--primary-color)] italic">Blogs</span>
        </h2>
        <p className="mt-2 text-black dark:text-gray-300 max-w-2xl mx-auto">
          Catch up on the latest highlights from the trading and real estate
          world.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {topBlogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <div
              className="cursor-pointer relative rounded-lg p-[1.5px] hover:shadow-[0_0_10px_var(--primary-color)] transition"
              style={{
                background:
                  "linear-gradient(to bottom, #111, var(--primary-color))",
              }}
            >
              <div className="bg-white dark:bg-black rounded-lg h-[450px] flex flex-col overflow-hidden text-left">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  draggable="false"
                />
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs text-[var(--primary-color)] mb-1">
                      {blog.category}
                    </span>
                    <h3 className="text-base font-semibold text-black dark:text-white leading-snug mb-1 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-[var(--primary-color)] font-medium mb-2">
                      {blog.date}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      {blog.description}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    {blog.author} • {blog.readTime}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/blog"
          className="text-[var(--primary-color)] underline font-semibold"
        >
          View All Blogs →
        </a>
      </div>
    </div>
  );
};

export default BlogPreview;
