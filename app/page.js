import Image from "next/image";
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="glass-hero">
        <div className="glass-hero__w-list">
          <div className="glass-hero__text">
            <h1>Зеркало на заказ от производителя</h1>
            {/*<p>Шлифовка, полировка, фацет, алмазная графировка, закалка, пескоструйная обработка, стеклянный фартук, полки</p>*/}
            <div className="glass-hero__more">
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
                  <div>Изготовим точно в срок</div>
              </div>
              <div>
                <Image src="/images/icons/shipp.svg" width={60} height={60} alt={'Доставка точно в срок'}/>
                  <div>Доставка точно в срок</div>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-hero__request-list">
          <Link className="glass-hero__request" href="/categories/1">
            <span>
              Зеркало и стекло на заказ
            </span>
          </Link>
          <Link className="glass-hero__request-plus" href="/categories/1">
            <span>
              Зеркало на заказ по индивидуальный размерам
            </span>
          </Link>
        </div>
      </section>
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
