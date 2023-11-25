// we don't have a real database to store the data so we will create a lib folder inside the project directory to hold the data.ts

import { addBlog, getBlogs } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    try {
        const posts = getBlogs()
        return NextResponse.json({ message: "OK", posts }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!", error }, {
            status: 500
        })
    }
}

export const POST = async (req: Request, res: Response) => {
    const { title, desc, excerpt } = await req.json()
    try {
        const blog = {
            title,
            desc,
            excerpt,
            date: new Date(),
            id: Date.now().toString()
        }
        addBlog(blog)
        return NextResponse.json({ message: "Post Added", blog }, {
            status: 201
        })

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error }, {
            status: 500
        })
    }
}
