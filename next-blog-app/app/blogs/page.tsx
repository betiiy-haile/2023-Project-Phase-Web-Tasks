"use client"

import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";

export const getBlogs = async () => {
  const response = await fetch("/api/blogs");
  return response.json();
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getBlogs();
        console.log(fetchedBlogs)
        setBlogs(fetchedBlogs.posts);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="px-80">      
      <h1 className="text-center text-slate-400 text-3xl font-bold py-10">Recent Blogs</h1>
      <div className="grid grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
