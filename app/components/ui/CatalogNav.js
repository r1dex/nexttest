'use client'

import React from 'react'
import Link from 'next/link'
import Styles from './catalogNav.module.css'


const CatalogNav = () => {
  return (
    <div className={Styles.menu}>
      <button className="button-small">Каталог</button>
      <div className={Styles.nav}>
        <ul>
          <li>
            <Link href={'/categories/zerkalo-s-podsvetkoj-na-zakaz'}>Зеркало с подсветкой</Link>
          </li>
          <li>
            <Link href={'/categories/zerkalo-bez-podsvetki'}>Зеркало без подсветки</Link>
          </li>
          <li>
            <Link href={'/1'}>Зеркало в раме</Link>
          </li>
          <li>
            <Link href={'/1'}>Зеркало в багете</Link>
          </li>
          <li>
            <Link href={'/categories/facet-i-almaznaya-gravirovka'}>Фацет</Link>
          </li>
          <li>
            <Link href={'/categories/facet-i-almaznaya-gravirovka'}>Алмазная грань</Link>
          </li>
          <li>
            <Link href={'/categories/steklyannyj-fartuk-polki-izdeliya-iz-stekla'}>Стеклянный фартук</Link>
          </li>
          <li>
            <Link href={'/categories/peskostrujnaya-obrabotka'}>Пескоструйная обработка</Link>
          </li>
          <li>
            <Link href={'/categories/zakalka-stekla'}>Закалка</Link>
          </li>
          <li>
            <Link href={'/1'}>Стеклянные полки</Link>
          </li>
          <li>
            <Link href={'/1'}>Алмазная гравировка</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CatalogNav
