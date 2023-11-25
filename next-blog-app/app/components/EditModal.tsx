import React, { useState, useEffect } from 'react'
import { Blog } from "@/lib/utils";
import Modal from "react-modal"

type prop = {
    blog: Blog,
    isOpen: boolean,
    onCancel: () => void,
    onConfirm: () => void
}

const EditModal = ({ blog, isOpen, onCancel, onConfirm }: prop) => {

    const [title, setTitle] = useState<string>()
    const [excerpt, setExcerpt] = useState<string>()
    const [desc, setDesc] = useState<string>()

    useEffect(() => {
            setTitle(blog.title)
            setExcerpt(blog.excerpt)
            setDesc(blog.desc)
        }, [blog]
    )
    console.log("title", title )

    const editHandler = () => {

    }


    const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const excerptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExcerpt(e.target.value)
    }

    const descChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(e.target.value)
    }

  return (
      <Modal isOpen={isOpen} className="fixed w-3/5 "  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" >
      <div className="bg-slate-300 px-10 py-5 rounded-lg ">
        <h2 className='text-slate-800 text-2xl font-bold'>Edit Blog</h2>
        <form>
            <div className='mt-4'>
                <label htmlFor="title" className='block font-bold text-slate-800 p-2'>Title</label>
                <input type="text" value={title} onChange={titleChange} className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-slate-800"/>
            </div>            
            <div className='mt-4'>
                <label htmlFor="excerpt" className='block font-bold text-slate-800 p-2'>Excerpt</label>
                <input type="text" value={excerpt} onChange={excerptChange} className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-slate-800" />
            </div> 
            <div className='mt-4'>
                <label htmlFor="title" className='block font-bold text-slate-800 p-2'>Description</label>
                <textarea value={desc} onChange={descChange} className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-slate-800" />
            </div> 
            <div className='mt-6 flex justify-end gap-5'>
                <button
                    className="px-5 py-2 bg-slate-200 text-slate-800 rounded-md border border-slate-800 hover:bg-slate-800 hover:text-slate-200 transition "
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="px-5 py-2 bg-slate-800 text-white rounded-md border hover:bg-slate-200 hover:text-slate-800 hover:border-slate-800 transition"
                    onClick={editHandler}
                >
                    Edit
                </button>
            </div>
        </form>
      </div>
    </Modal>
  )
}

export default EditModal

