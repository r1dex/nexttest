import React from 'react'
import Styles from "./guaranteeList.module.css";
import Image from "next/image";

const GuaranteeList = () => {
    return (
        <section className={Styles.guarantees}>
            <div className={'sub-title'}>Гарантии качества</div>
            <div className={Styles.guarantees}>
                <div className={Styles.guarantee}>
                    <div>Работа с лучшими поставщиками осветленных зеркальных полотен</div>
                    <Image src={'/images/guarantees/1.jpg'} alt={'1'} width={400} height={400}/>
                </div>
                <div className={Styles.guarantee}>
                    <div>Собственное производство в Санкт-Петербурге</div>
                    <Image src={'/images/guarantees/2.jpg'} alt={'1'} width={400} height={400}/>
                </div>
                <div className={Styles.guarantee}>
                    <div>Опытные мастера с опытом работы с зеркалами и стеклами более 5 лет</div>
                    <Image src={'/images/guarantees/3.jpg'} alt={'1'} width={400} height={400}/>
                </div>
                <div className={Styles.guarantee}>
                    <div>Собственная многоуровневая система контроля качества</div>
                    <Image src={'/images/guarantees/4.jpg'} alt={'1'} width={400} height={400}/>
                </div>
            </div>
        </section>
    )
}

export default GuaranteeList