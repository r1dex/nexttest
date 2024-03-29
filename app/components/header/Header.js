import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './header.module.css'
import {ImMobile} from "react-icons/im";
import {SlSocialVkontakte} from "react-icons/sl";
import CallbackButton from './CallbackButton'
import CatalogNav from '../ui/catalog-navigation/CatalogNav'

const Header = () => {
    return (
        <header className={Styles.header}>
            <Link href="/" className={Styles.logo}>
                <Image src='/images/logo.png' width={300} height={65} alt={'Artenglass'} priority/>
            </Link>
            <CatalogNav/>
            <Link className={`${Styles.social} sd-hide`} href={'https://vk.com/club224470095'} target="_blank">
                <div className={Styles.socialIcon}>
                    <SlSocialVkontakte/>
                </div>
                <span>Мы вконтакте</span>
            </Link>
            <div className={Styles.phoneBlock}>
                  <span className={Styles.phone}>
                      <div className={Styles.phoneIcon}><ImMobile/></div>
                      +7 (995) 891-58-15
                  </span>

                <CallbackButton/>
            </div>
        </header>
    )
}

export default Header
