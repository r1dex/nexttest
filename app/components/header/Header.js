import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './header.module.css'
import { ImMobile } from "react-icons/im";
import { SlSocialVkontakte } from "react-icons/sl";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src='/images/logo.png' width={300} height={65} alt={'Artenglass'} priority/>
        {/*<img src="./images" height="50">*/}
      </Link>
      <div>
        <button className="button-small">Каталог</button>
      </div>
      <Link className={Styles.social} href={'https://vk.com/club224470095'} target="_blank">
        <div className={Styles.socialIcon}>
          <SlSocialVkontakte />
        </div>
        <span>Мы вконтакте</span>
      </Link>
      <div>
        <span className={Styles.phone}>
          <div className={Styles.phoneIcon}><ImMobile /></div>
           +7(995)891-58-15
        </span>
      </div>
      <div className={Styles.call}>
        Заказать звонок
      </div>
    </header>
  )
}

export default Header
