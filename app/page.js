import Image from "next/image";
import React from 'react'
import Link from 'next/link'
import Hero from './components/hero/Hero'

export default function Home() {
  return (
    <main>

      <Hero />

      <section>
        <h2>Наша продукция</h2>

        <div className="glass-main-products">
          <Link className="glass-main-products__card" href="/categories/facet-i-almaznaya-gravirovka">
            <div className="glass-main-products__image">
              <Image src="/images/main-catalog/1.jpg" width={300} height={350} alt={'Фацет и алмазная гравировка'}/>
            </div>
            <div className="glass-main-products__text">
              <span>Фацет и алмазная гравировка</span>
            </div>
          </Link>

          <Link className="glass-main-products__card" href="/categories/zerkalo-s-podsvetkoj-na-zakaz">
            <div className="glass-main-products__image">
              <Image src="/images/main-catalog/2.jpg" width={300} height={350} alt={'Зеркало с подсветкой на заказ'}/>
            </div>
            <div className="glass-main-products__text">
              <span>Зеркало с подсветкой на заказ</span>
            </div>
          </Link>

          <Link className="glass-main-products__card" href="/categories/zerkalo-bez-podsvetki">
            <div className="glass-main-products__image">
              <Image src="/images/main-catalog/3.jpg" width={300} height={350} alt={'Зеркало без подсветки'}/>
            </div>
            <div className="glass-main-products__text">
              <span>Зеркало без подсветки</span>
            </div>
          </Link>

          <Link className="glass-main-products__card" href="/categories/steklyannyj-fartuk-polki-izdeliya-iz-stekla">
            <div className="glass-main-products__image">
              <Image src="/images/main-catalog/4.jpg" width={300} height={350} alt={'Стеклянный фартук, полки'}/>
            </div>
            <div className="glass-main-products__text">
              <span>Стеклянный фартук, полки</span>
            </div>
          </Link>

          <Link className="glass-main-products__card" href="/categories/zakalka-stekla">
            <div className="glass-main-products__image">
              <Image src="/images/main-catalog/5.jpg" width={300} height={350} alt={'Закалка'}/>
            </div>
            <div className="glass-main-products__text">
              <span>Закалка</span>
            </div>
          </Link>

          <Link className="glass-main-products__card" href="/categories/peskostrujnaya-obrabotka">
            <div className="glass-main-products__image">
              <Image src="/images/main-catalog/6.jpg" width={300} height={350} alt={'Пескоструйная обработка'}/>
            </div>
            <div className="glass-main-products__text">
              <span>Пескоструйная обработка</span>
            </div>
          </Link>
        </div>

      </section>
    </main>
  );
}
