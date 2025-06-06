// BlogDetails.tsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs"; // adjust path
import Navbar from "./Nav";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react"; // At the top with other imports

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog)
    return <div className="text-white text-center py-20">Blog not found.</div>;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="">
      <Navbar />
      <div className="bg-white dark:bg-black text-black dark:text-white py-20 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="text-[#71ced0]  mb-6 inline-block">
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Link>

          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
          <p className="text-sm text-gray-400 mb-6">
            By {blog.author} • {blog.date} • {blog.readTime}
          </p>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-lg mb-8"
            draggable="false"
          />

          <p className="text-lg text-black dark:text-gray-300 mb-8">
            {blog.shortDescription}
          </p>

          <div className="border border-gray-950 p-5 rounded-lg mb-10">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-3">
              Key Highlights:
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-900 dark:text-white">
              {blog.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {blog.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-3">
                {section.heading}
              </h2>
              {section.content && (
                <p className="text-black dark:text-gray-300 mb-4">
                  {section.content}
                </p>
              )}
              {section.points && (
                <ul className="list-disc list-inside space-y-1 text-black dark:text-gray-300 ">
                  {section.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="bg-white dark:bg-[#1a1a1a] border border-yellow-600 p-6 rounded-lg text-center mt-12">
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              {blog.cta.title}
            </h2>
            <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-2 px-6 rounded-lg transition">
              {blog.cta.buttonLabel}
            </button>
            <p className="mt-2 text-sm text-[var(--primary-color)] italic">
              {blog.cta.rating}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
