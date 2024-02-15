'use server'

import {connectToDb} from "@/db/connect";
import {Category} from "@/db/models";
import {revalidatePath} from "next/cache";
import * as fs from "fs";
import { join } from 'path'

export const deleteCategory = async (formData) => {
    const {_id} = Object.fromEntries(formData);

    try {
        connectToDb();

        const deletedCategory = await Category.findByIdAndDelete({_id})

        const path = join('public', deletedCategory.image)
        fs.unlink(path, err => {if(err) throw err;})

        revalidatePath("/test");
    } catch (err) {
        console.log(err);
        return { error: "Не удалось удалить категорию" };
    }
}