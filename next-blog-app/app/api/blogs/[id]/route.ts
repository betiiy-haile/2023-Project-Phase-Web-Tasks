import { deleteBlog, getBlogById, updateBlog } from "@/lib/data"
import { NextResponse } from "next/server"

// since it is for a single blog we actually need just GET, PUT(for update) and DELETE( to delete)
export const GET = async (req: Request) => {
    const id = req.url.split("/blogs/")[1]
    try {
        const blog = getBlogById(id)
        if (blog) {
            return NextResponse.json({ message: "Post Found", blog }, {
                status: 200
            })
        } else {
            return NextResponse.json({ message: "Post Not Found" }, {
                status: 404
            })
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error }, {
            status: 500
        })
    }
}

export const PUT = async (req: Request) => {
    const { title, desc, excerpt } = await req.json()
    const id = req.url.split("/blogs/")[1]
    try {
        const updatedBlog = updateBlog(id, title, desc, excerpt)
        if (updatedBlog) {
            return NextResponse.json({ message: "post Updated!", updateBlog }, {
                status: 200
            })
        } else {
            return NextResponse.json({ message: "post not Updated" }, {
                status: 404
            })
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went Wrong", error }, {
            status: 500
        })
    }
}

export const DELETE = async (req: Request) => {
    const id = req.url.split("/blogs/")[1]
    try {
        deleteBlog(id)
        return NextResponse.json({ message: "Post Deleted" }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({ message: "Something Went Wrong!!", error }, {
            status: 500
        })

    }
};