'use client'

import Styles from "@/app/components/hero/hero.module.css"
import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const HeroAdvantages = () => {

    const container = useRef()

    useGSAP(() => {
        gsap.fromTo('.box',
            {y: -100, opacity: 0},
              {y: 0, opacity: 1, stagger: 0.1, ease: "elastic.out(1,1)", delay: 0.2})
    }, { scope: container });

    return (
        <div className={Styles.advantages} ref={container}>
            <div className={`${Styles.advantage} box`}>
                <Image src="/images/icons/cert.svg" width={60} height={60} alt={'Квалифицированные мастера'}/>
                <div>Квалифицированные мастера</div>
            </div>
            <div className={`${Styles.advantage} box`}>
                <Image src="/images/icons/insignia.svg" width={60} height={60} alt={'Гарантия от 1 года'}/>
                <div>Гарантия от 1 года</div>
            </div>
            <div className={`${Styles.advantage} box`}>
                <Image src="/images/icons/shield.svg" width={60} height={60} alt={'Только качественный материал'}/>
                <div>Только качественный материал</div>
            </div>
            <div className={`${Styles.advantage} box`}>
                <Image src="/images/icons/calendar.svg" width={60} height={60} alt={'Изготовим точно в срок'}/>
                <div>Быстро изготовим</div>
            </div>
            <div className={`${Styles.advantage} box`}>
                <Image src="/images/icons/shipp.svg" width={60} height={60} alt={'Доставка точно в срок'}/>
                <div>Доставка точно в срок</div>
            </div>
        </div>
    )
}

export default HeroAdvantages