'use client'

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Styles from "./advantageList.module.css"

const AdvantageList = () => {
    const container = useRef()
    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(`.${Styles.advantage}`,
            {y: -100, opacity: 0},
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                ease: "elastic.out(1,1)",
                duration: 2,
                scrollTrigger: {
                    trigger: `.${Styles.advantage}`,
                    start: 'top 80%'
                },
            })

    }, { scope: container });

    return (
        <section className={Styles.advantages}>
            <div className={'sub-title'}>Наши преимущества</div>
            <div className={Styles.list} ref={container}>
                <div className={Styles.advantage}>
                    <div>01</div>
                    <p>Любые размеры и конфигурации на заказ</p>
                </div>
                <div className={Styles.advantage}>
                    <div>02</div>
                    <p>Безупречное качество зеркального полотна</p>
                </div>
                <div className={Styles.advantage}>
                    <div>03</div>
                    <p>Разнообразие рам, возможность подсветки</p>
                </div>
                <div className={Styles.advantage}>
                    <div>04</div>
                    <p>Соблюдение сроков изготовления</p>
                </div>
                <div className={Styles.advantage}>
                    <div>05</div>
                    <p>Лучшее сочетание «цена-качество» с перевесом в сторону качества</p>
                </div>
            </div>
        </section>
    )
}

export default AdvantageList