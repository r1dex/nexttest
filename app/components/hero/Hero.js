import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={Styles.hero}>

      <div className={Styles.list}>
        <div className={Styles.textBlock}>
          <h1>Зеркало на заказ от производителя</h1>
          <div className={Styles.advantages}>
            <div>
              <Image src="/images/icons/cert.svg" width={60} height={60} alt={'Квалифицированные мастера'}/>
              <div>Квалифицированные мастера</div>
            </div>
            <div>
              <Image src="/images/icons/insignia.svg" width={60} height={60}  alt={'Гарантия от 1 года'}/>
              <div>Гарантия от 1 года</div>
            </div>
            <div>
              <Image src="/images/icons/shield.svg" width={60} height={60} alt={'Только качественный материал'}/>
              <div>Только качественный материал</div>
            </div>
            <div>
              <Image src="/images/icons/calendar.svg" width={60} height={60} alt={'Изготовим точно в срок'}/>
              <div>Быстро изготовим</div>
            </div>
            <div>
              <Image src="/images/icons/shipp.svg" width={60} height={60} alt={'Доставка точно в срок'}/>
              <div>Доставка точно в срок</div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.glassList}>
        <Link className={Styles.glassRequest} href="/categories/zerkalo-bez-podsvetki">
            <span>
              Зеркало и стекло на заказ
            </span>
        </Link>
        <Link className={Styles.glassIndividually} href="/categories/zerkalo-s-podsvetkoj-na-zakaz">
            <span>
              Зеркало на заказ по индивидуальный размерам
            </span>
        </Link>
      </div>
    </section>
  )
}

export default Hero
