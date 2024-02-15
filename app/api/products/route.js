import { Products } from "@/db/models";
import { connectToDb } from "@/db/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        connectToDb();
        const posts = await Products.find();
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch Products!");
    }
};