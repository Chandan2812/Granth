import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { Share2 } from "lucide-react";
import LatestBlog from "./LatestBlog";

interface BlogType {
  title: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
}

const Blog2Details = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://granth-backend.onrender.com/api/blogs/viewblog`
        );
        const blogList: any[] = res.data;

        const found = blogList.find((b) => b.slug === slug);

        if (!found) {
          setError("Blog not found");
        } else {
          setBlog({
            title: found.title,
            coverImage: found.coverImage,
            author: found.author,
            datePublished: found.datePublished,
            content: found.content,
          });
        }
      } catch (err) {
        setError("Blog not found");
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  const handleShare = async () => {
    const url = window.location.href;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: blog?.title,
          text: "Check out this blog from Granth!",
          url,
        });
      } catch (error) {
        console.error("Sharing failed:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Copy failed:", error);
      }
    }
  };

  if (error)
    return <div className="pt-40 text-center text-red-600">{error}</div>;
  if (!blog) return <div className="pt-40 text-center">Loading...</div>;

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <div className="p-8 max-w-5xl mx-auto pt-40">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-2">
          By {blog.author}- {new Date(blog.datePublished).toLocaleDateString()}
        </p>

        <img
          src={blog.coverImage}
          className="mb-4 w-full rounded"
          alt={blog.title}
        />

        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded"
        >
          <Share2 size={18} />
          {typeof navigator.share === "function" ? "Share" : "Copy Link"}
        </button>
        {copied && (
          <p className="mt-2 text-green-500">Link copied to clipboard!</p>
        )}
      </div>

      <LatestBlog />
      <Footer />
    </div>
  );
};

export default Blog2Details;
