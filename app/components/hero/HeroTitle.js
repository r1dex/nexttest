'use client'

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const HeroTitle = () => {

    const container = useRef()
    useGSAP(() => {
        gsap.fromTo('.box',
            {y: -100, opacity: 0},
            {y: 0, opacity: 1, stagger: 0.1, ease: "elastic.out(1,1)"})
    }, { scope: container });

    return (
        <div ref={container}>
            <h1 className={`box`}>Зеркало на заказ от производителя</h1>
        </div>
    );
};

export default HeroTitle;