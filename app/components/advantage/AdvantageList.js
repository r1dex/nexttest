import React from 'react'
import Styles from "./advantageList.module.css";

const AdvantageList = () => {
    return (
        <section className={Styles.advantages}>
            <div className={'sub-title'}>Наши преимущества</div>
            <div className={Styles.list}>
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