'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import Styles from './catalogNav.module.css'


const CatalogNav = () => {

  const [isHover, setIsHover] = useState(false)

  const mouseIn = () => {
    setIsHover(true)
  }

  const mouseOut = () => {
    setIsHover(false)
  }

  return (
    <div className={Styles.menu} onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
      <button className="button-small">Каталог</button>
      <div className={Styles.nav} style={{gridTemplateRows: isHover ? '1fr' : '0fr'}}>
        <ul>
          <li>
            <Link href={'/categories/zerkalo-s-podsvetkoj-na-zakaz'} onClick={mouseOut}>Зеркало с подсветкой</Link>
          </li>
          <li>
            <Link href={'/categories/zerkalo-bez-podsvetki'} onClick={mouseOut}>Зеркало без подсветки</Link>
          </li>
          <li>
            <Link href={'/1'} onClick={mouseOut}>Зеркало в раме</Link>
          </li>
          <li>
            <Link href={'/1'} onClick={mouseOut}>Зеркало в багете</Link>
          </li>
          <li>
            <Link href={'/categories/facet-i-almaznaya-gravirovka'} onClick={mouseOut}>Фацет</Link>
          </li>
          <li>
            <Link href={'/categories/facet-i-almaznaya-gravirovka'} onClick={mouseOut}>Алмазная грань</Link>
          </li>
          <li>
            <Link href={'/categories/steklyannyj-fartuk-polki-izdeliya-iz-stekla'} onClick={mouseOut}>Стеклянный фартук</Link>
          </li>
          <li>
            <Link href={'/categories/peskostrujnaya-obrabotka'} onClick={mouseOut}>Пескоструйная обработка</Link>
          </li>
          <li>
            <Link href={'/categories/zakalka-stekla'} onClick={mouseOut}>Закалка</Link>
          </li>
          <li>
            <Link href={'/1'} onClick={mouseOut}>Стеклянные полки</Link>
          </li>
          <li>
            <Link href={'/1'} onClick={mouseOut}>Алмазная гравировка</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CatalogNav
