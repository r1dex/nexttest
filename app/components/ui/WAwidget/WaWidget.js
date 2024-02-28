import React from 'react';
import Styles from './WaWidget.module.css'
import Image from "next/image";
const WaWidget = () => {
    return (
        <div className={Styles.widget}>
            <a href={'https://api.whatsapp.com/send/?phone=79958915815&text&type=phone_number&app_absent=0'} target={'_blank'}>
                <Image src={'/images/icons/whatsapp.svg'}  height={30} width={30} alt={'Написать WhatsApp'}/>
                Написать WhatsApp
            </a>
        </div>
    )
}

export default WaWidget