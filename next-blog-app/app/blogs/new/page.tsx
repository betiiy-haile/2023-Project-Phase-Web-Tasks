"use client"

import NewBlog from "@/app/components/NewBlog";

const NewBlogForm = () => {

  return (
    <>
      <h1 className="text-center text-slate-400 text-3xl font-bold py-10">
        Add New Blog
      </h1>
      <NewBlog />
    </>
  );
};

export default NewBlogForm;
