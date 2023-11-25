"use client"
import { useEffect, useRef } from "react";

const NewBlog = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const excerptRef = useRef<HTMLTextAreaElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value ?? "";
    const excerpt = excerptRef.current?.value ?? "";
    const desc = descRef.current?.value ?? "";
    const image = imageRef.current?.value ?? "";

    const blog = {
      title,
      excerpt,
      desc,
      image, 
      date: new Date()
    };

    try {
      // const all = await getBlogs()
      // const allBlogs = await all.json()
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blog),
      });

      if (res.ok) {
        console.log("Article created successfully");
        titleRef.current!.value = "";
        excerptRef.current!.value = "";
        descRef.current!.value = "";
        imageRef.current!.value = "";
      } else {
        console.error("Failed to create article:", res.statusText);
      }
    } catch (error) {
      console.error("Failed to create article:", error);
    }
  };
  return (
    <div className="max-w-lg mx-auto bg-slate-400 opacity-70 rounded-2xl shadow-lg overflow-hidden md:max-w-2xl">
      <form onSubmit={handleSubmit} className="p-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-900 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full bg-gray-200 border-2 border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-slate-800"
            ref={titleRef}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="excerpt"
            className="block text-gray-900 font-bold mb-2"
          >
            Excerpt
          </label>
          <textarea
            id="excerpt"
            className="w-full bg-gray-200 border-2 border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-slate-800"
            ref={excerptRef}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-900 font-bold mb-2">
            Description
          </label>
          <textarea
            id="body"
            className="w-full bg-gray-200 border-2 border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-slate-800"
            ref={descRef}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-900 font-bold mb-2">
            Image URL(absolute Path)
          </label>
          <input
            type="text"
            id="image"
            className="w-full bg-gray-200 border-2 border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-slate-800"
            ref={imageRef}            
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-600 text-white font-bold py-3 px-5 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
