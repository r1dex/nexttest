'use client'

import React, {useState} from 'react'
import ModalCB from '../../components/modal/Modal'

const CalculateButton = () => {

  const [modal, setModal] = useState(false)

  const showModalCB = () => {
    setModal(true)
  }

  const onClose = () => {
    setModal(false)
  }

  return (
    <>
      <button className="button-rounded" onClick={showModalCB}>Рассчитать стоимость</button>
      <ModalCB isVisible={modal} onCloseCallback={e => onClose()}/>
    </>
  )
}

export default CalculateButton
