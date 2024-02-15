'use client'

import React, {useState} from 'react'
import Styles from './modal.module.css'
import { VscChromeClose } from "react-icons/vsc"
import { toast } from 'react-toastify'

const ModalCB = ({isVisible, onCloseCallback}) => {

  const formSubmit = (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const phone = e.target[1].value

    if(!name) return toast.error("Заполните имя!")
    if(!phone) return toast.error("Заполните телефон!")

    toast.success("Заявка отправлена!", {theme: "colored"})
    closeModal()
  }

  const closeModal = () => {
    onCloseCallback()
  }

  return (
    <>
      <div className={isVisible ? Styles.wrapper : Styles.noDisplay}>
        <div className={Styles.body}>
          <div className={Styles.close} onClick={closeModal}><VscChromeClose /></div>
          <div className={Styles.title}>Заказать обратный звонок</div>
          <div className={Styles.text}>
            Заполните форму обратной связи, мы оперативно свяжемся с вами!
          </div>
          <form onSubmit={e => formSubmit(e)} className={Styles.form}>
            <input placeholder={'Ваше имя'}/>
            <input placeholder={'Ваш телефон'}/>
            <button>Отправить заявку</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ModalCB
