import { Category } from "@/db/models"
import { connectToDb } from "@/db/connect"
import { NextResponse } from "next/server"
import { join } from 'path'
import { writeFile } from "fs/promises"
import {revalidatePath} from "next/cache";

export const GET = async (request) => {
    try {
        connectToDb();
        const posts = await Category.find();
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err);
        throw new Error("Ошибки при получении категорий!");
    }
}

export const POST = async (req, params) => {

    const data = await req.formData()

    const name = data.get('name')
    const slug = data.get('slug')
    const image = data.get('image')
    const text = data.get('text')

    if(!image) return NextResponse.json({error: 'Прикрепите изображение!'})

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    try {
        connectToDb();

        const category = await Category.findOne({slug})
        if(category) return NextResponse.json({error: 'Категория с таким URL адресом уже существует!'})

        const count = await Category.countDocuments().exec()

        const newCategory = new Category({
            name,
            slug,
            image: null,
            text,
            sort: count + 1
        })

        const categoryCreated = await newCategory.save()
        const path = join(`public/images/categories/`, categoryCreated._id + image.name)

        await writeFile(path, buffer)

        categoryCreated.image = `/images/categories/` + categoryCreated._id + image.name
        await categoryCreated.save()

        revalidatePath("/test")
        return NextResponse.json(categoryCreated)
    } catch (e) {
        console.log(e)
        return NextResponse.json({error: 'Ошибка при создании категории!'})
    }
}