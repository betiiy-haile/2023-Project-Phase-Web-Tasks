"use client"

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { formatTimeAgo } from "@/lib/utils";
import ConfirmationModal from "@/app/components/ConfirmationModal";
import EditModal from "@/app/components/EditModal";

const SingleBlog = () => {
  const params = useParams();
  const id = params.id;

  const [deleteModalOPen, setDeleteModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)

  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await fetch(`/api/blogs/${id}`);
        const res = await fetchedBlog.json()
        console.log("response", res)
        setBlog(res.blog);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [id]);

  const time = formatTimeAgo(blog.date)
  console.log(time)

  const handleDelete  = () => {
    setDeleteModalOpen(true)
  } 

  const handleCancel = () => {
    setDeleteModalOpen(false)
    setEditModalOpen(false)
  }

  const handleConfirm = () => {
    // Perform delete action
    setDeleteModalOpen(false);
    setEditModalOpen(false)
  };

  const handleEdit = () => {
    setEditModalOpen(true)
  }
 
  
  return (
    <div className="max-w-6xl my-10 mx-auto">
      <div>
        {blog?.image &&
          <div className="w-64 h-64 my-5 mx-auto overflow-hidden rounded-full border-4 border-slate-700 flex items-center justify-center">
            <img
              className="w-full h-full object-cover object-center"
              src={blog?.image}
              alt="Your Profile"
            />
          </div>}
        <h1 className="text-4xl font-bold mb-4 text-slate-400">
          {blog.title}
        </h1>
        <p className="text-gray-600 text-2xl">{blog.excerpt}</p>
        <p className="text-slate-300 mt-4 text-xl">{blog.desc}</p>
        <div className="flex justify-between  py-5">
          <p className="text-gray-600 text-xl"> Last edited {time}</p>
        
        <div className="flex justify-end gap-10 px-5">
          <button className="py-2 px-5 bg-slate-500 text-slate-800 border-1 font-bold rounded-lg hover:bg-slate-800 hover:text-slate-400 hover:border-2 hover:border-slate-500 transition-all" onClick={handleEdit}>Edit Blog</button>
          <button className="py-2 px-5 bg-red-400 text-slate-800 border-1 font-bold rounded-lg hover:bg-slate-800 hover:text-red-400 hover:border-2 hover:border-red-400 transition-all" onClick={handleDelete}>Delete Blog</button>
            <ConfirmationModal
              isOpen={deleteModalOPen}
              onCancel={handleCancel}
              onConfirm={handleConfirm}
            />

            <EditModal  blog={blog} isOpen={editModalOpen} onCancel={handleCancel} onConfirm={handleConfirm} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
