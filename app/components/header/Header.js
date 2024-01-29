import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './header.module.css'
import { ImMobile } from "react-icons/im";
import { SlSocialVkontakte } from "react-icons/sl";

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
      <div className={Styles.social}>
        <div className={Styles.socialIcon}>
          <SlSocialVkontakte />
        </div>
        <span>Мы вконтакте</span>
      </div>
      <div>
        <span className={Styles.phone}>
          <div className={Styles.phoneIcon}><ImMobile /></div>
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
