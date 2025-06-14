import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

type BlogPost = {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  slug: string;
  tags: string[];
};

const Blog2 = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(
        `https://granth-backend.onrender.com/api/blogs/viewblog`
      );
      setBlogPosts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch blog posts");
      setLoading(false);
    }
  };

  const handlePostClick = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-[var(--dark-gray-color)] text-center mt-5">
          Processing your data. Please Wait...
        </p>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <div className="py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Latest{" "}
            <span className="text-[var(--primary-color)] italic">
              Blog Updates
            </span>
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-gray-500 dark:text-gray-300">
            Stay informed with the latest updates in trading, markets, and the
            economy.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPosts.map((post) => (
            <div
              key={post._id}
              className="cursor-pointer relative rounded-lg p-[1.5px] hover:shadow-[0_0_10px_var(--primary-color)] transition"
              style={{
                background:
                  "linear-gradient(to bottom, #111, var(--primary-color))",
              }}
              onClick={() => handlePostClick(post.slug)}
            >
              <div className="bg-white dark:bg-black rounded-lg h-[450px] flex flex-col overflow-hidden text-left">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-[300px] object-fill rounded-t-lg"
                />
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-black dark:text-white leading-snug mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 truncate">
                      {post.excerpt}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    By {post.author} •{" "}
                    {new Date(post.datePublished).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center gap-2 text-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border rounded ${
                page === currentPage
                  ? "bg-[var(--primary-color)] text-white"
                  : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog2;
