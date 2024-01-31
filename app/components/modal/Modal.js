'use client'

import React from 'react'
import Styles from './modal.module.css'
import { VscChromeClose } from "react-icons/vsc";

const ModalCB = () => {

  const formSubmit = (e) => {
    e.preventDefault()
    console.log('отправляем')
  }

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.body}>
        <div className={Styles.close}><VscChromeClose /></div>
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
  )
}

export default ModalCB
