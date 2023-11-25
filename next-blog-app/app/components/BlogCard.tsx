import React from "react";
import Link from "next/link"
import { Blog } from "@/lib/data";

type props = {
    blog: Blog
} 

const BlogCard = ({ blog }: props) => {
  return (
    <div className="max-w-md mx-auto bg-slate-400 opacity-70 rounded-2xl shadow-lg overflow-hidden md:max-w-2xl">
      <div className="w-64 h-64 my-5 mx-auto overflow-hidden rounded-full border-4 border-slate-700 flex items-center justify-center">
        <img
          className="w-full h-full object-cover object-center"
          src={blog.image}
          alt="Your Profile"
        />
      </div>

      <div className="md:flex flex-col p-8">
        <Link
          href={`/blogs/${blog.id}`}
          className="text-2xl font-bold mb-2 hover:underline"
        >
          {blog.title} &rarr;
        </Link>
        <p className="text-gray-700 text-base">{blog.excerpt}</p>
        <p className="text-gray-900 text-base mt-4">{blog.desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
