import React from 'react'
import Styles from './hero.module.css'
import HeroAdvantages from "@/app/components/hero/HeroAdvantages";
import HeroTitle from "@/app/components/hero/HeroTitle";

const Hero = () => {
  return (
    <section className={Styles.hero}>

      <div className={Styles.list}>
        <div className={Styles.textBlock}>
          <HeroTitle />
          <HeroAdvantages />
        </div>
      </div>
    </section>
  )
}

export default Hero
