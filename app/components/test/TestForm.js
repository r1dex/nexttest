'use client'

import React, {useEffect, useRef, useState} from 'react'
import {useRouter} from "next/navigation"
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import {toast} from "react-toastify"
import Image from "next/image"

const cyrillicToTranslit = new CyrillicToTranslit()

const TestForm = () => {

    const router = useRouter()
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState(null)
    const formRef = useRef()

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const slugChange = (e) => {
        setSlug(e.target.value)
    }

    const imageChange = e => {
        if(e.target.files === null){
            window.alert('Выберите изображение')
            return
        }
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            if(typeof reader.result === 'string'){
                setImage(reader.result)
            }
        }

        reader.onerror = e => {
            console.log(e)
            toast.error('Ошибка при загрузке изображения')
        }
    }

    const textChange = e => {
        setText(e.target.value)
    }

    useEffect(() => {
        const string = cyrillicToTranslit.transform(name, '-')
        setSlug(string)
    }, [name])

    const submit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        const file = e.target[2].files[0]

        if(!name || !slug || !text || !file){
            return toast.error('Заполните все поля')
        }

        formData.append('name', name)
        formData.append('slug', slug)
        formData.append('image', file)
        formData.append('text', text)

        fetch(process.env.NEXT_PUBLIC_URL + '/api/category', {
            method: 'POST',
            body: formData
        })
            .then(res => {
                return res.json()
            })
            .then(res => {
                if (!res.error) {
                    toast.info('Категория создана')
                    setName('')
                    setSlug('')
                    setText('')
                    setImage(null)
                    formRef.current.reset()
                    router.refresh()
                } else {
                    toast.error(res.error)
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <>
            <form onSubmit={e => submit(e)} ref={formRef}>
                <input name='name' placeholder='name' onChange={nameChange} value={name}/>
                <br/>
                <input name='slug' placeholder='slug' onChange={slugChange} value={slug}/>
                <br/>
                <input name='image' placeholder='image' type="file" onChange={imageChange} />
                {image && (
                    <Image src={image} width={50} height={50} alt={'preview'}/>
                )}
                <br/>
                <textarea name='text' placeholder='text' cols={100} rows={15} onChange={textChange} value={text}/>
                <br/>
                <button>Отправить</button>
            </form>
        </>
    );
};

export default TestForm;