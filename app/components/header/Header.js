import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './header.module.css'
import { ImMobile } from "react-icons/im";

const Header = () => {
  return (
    <header>
      <Link className="logo" href="/">
        <Image src='/images/logo.png' width={300} height={100} alt={'Artenglass'} priority/>
        {/*<img src="./images" height="50">*/}
      </Link>
      <div>
        <button className="button-small">Каталог</button>
      </div>
      <div>
        Соцсети
      </div>
      <div>
        <span className={Styles.phone}>
          <ImMobile />
          7(999)122-15-16
        </span>
      </div>
      <div className={Styles.call}>
        Заказать звонок
      </div>
    </header>
  )
}

export default Header
