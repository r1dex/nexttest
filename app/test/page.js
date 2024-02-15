import React from 'react'
import TestForm from "@/app/components/test/TestForm"
import Image from "next/image";
import Styles from './test.module.css'
import {deleteCategory} from "@/db/actions/categoryActions";

async function getData() {
    const res = await fetch(process.env.URL + '/api/category', {cache: "no-cache"})

    if (!res.ok) {
        throw new Error('Не удалось получить список категорий')
    }

    return res.json()
}

const TestPage = async () => {

    const data = await getData()

    return (
        <main>

            <TestForm />

            <div className={Styles.list}>
                {data.length && data.map(category => {
                    return (
                        <div key={category._id} className={Styles.listItem}>
                            <div>{category.name}</div>
                            <div>{category.slug}</div>
                            <div>{category.text}</div>
                            <div>
                                <Image src={category.image} alt={'image'} width={200} height={200}/>
                            </div>


                            <form action={deleteCategory}>
                                <input type="hidden" name="_id" value={category._id}/>
                                <button>Delete</button>
                            </form>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default TestPage