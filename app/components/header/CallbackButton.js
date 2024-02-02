'use client'

import React, {useState} from 'react'
import Styles from './header.module.css'
import ModalCB from '../modal/Modal'


const CallbackButton = () => {

  const [modal, setModal] = useState(false)

  const showModalCB = () => {
    setModal(true)
  }

  const onClose = () => {
    setModal(false)
  }

  return (
    <>
      <div className={Styles.call} onClick={showModalCB}>
        Заказать звонок
      </div>
      <ModalCB isVisible={modal} onCloseCallback={e => onClose()}/>
    </>
  )
}

export default CallbackButton
