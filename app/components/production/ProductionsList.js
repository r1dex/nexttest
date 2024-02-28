import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Styles from './productionsList.module.css'

const ProductionsList = () => {
    return (
        <section>
            <h2>Наша продукция</h2>
            <div className={Styles.products}>
                <Link className={Styles.card} href="/categories/facet-i-almaznaya-gravirovka">
                    <div className={Styles.image}>
                        <Image src="/images/main-catalog/1.jpg" width={300} height={350}
                               alt={'Фацет и алмазная гравировка'}/>
                    </div>
                    <div className={Styles.text}>
                        <span>Фацет и алмазная гравировка</span>
                    </div>
                </Link>

                <Link className={Styles.card} href="/categories/zerkalo-s-podsvetkoj-na-zakaz">
                    <div className={Styles.image}>
                        <Image src="/images/main-catalog/2.jpg" width={300} height={350}
                               alt={'Зеркало с подсветкой на заказ'}/>
                    </div>
                    <div className={Styles.text}>
                        <span>Зеркало с подсветкой на заказ</span>
                    </div>
                </Link>

                <Link className={Styles.card} href="/categories/zerkalo-bez-podsvetki">
                    <div className={Styles.image}>
                        <Image src="/images/main-catalog/3.jpg" width={300} height={350}
                               alt={'Зеркало без подсветки'}/>
                    </div>
                    <div className={Styles.text}>
                        <span>Зеркало без подсветки</span>
                    </div>
                </Link>

                <Link className={Styles.card} href="/categories/steklyannyj-fartuk-polki-izdeliya-iz-stekla">
                    <div className={Styles.image}>
                        <Image src="/images/main-catalog/4.jpg" width={300} height={350}
                               alt={'Стеклянный фартук, полки'}/>
                    </div>
                    <div className={Styles.text}>
                        <span>Стеклянный фартук, полки</span>
                    </div>
                </Link>

                <Link className={Styles.card} href="/categories/zakalka-stekla">
                    <div className={Styles.image}>
                        <Image src="/images/main-catalog/5.jpg" width={300} height={350}
                               alt={'Закалка'}/>
                    </div>
                    <div className={Styles.text}>
                        <span>Закалка</span>
                    </div>
                </Link>

                <Link className={Styles.card} href="/categories/peskostrujnaya-obrabotka">
                    <div className={Styles.image}>
                        <Image src="/images/main-catalog/6.jpg" width={300} height={350}
                               alt={'Пескоструйная обработка'}/>
                    </div>
                    <div className={Styles.text}>
                        <span>Пескоструйная обработка</span>
                    </div>
                </Link>

            </div>
        </section>
    )
}

export default ProductionsList