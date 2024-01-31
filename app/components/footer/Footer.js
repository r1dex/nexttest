import React from 'react'
import Styles from './footer.module.css'
import { LuMapPin } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { SlSocialVkontakte } from "react-icons/sl";
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <ul className={Styles.list}>
        <li className={Styles.listContacts}>
          Наши контакты
        </li>
        <li>
          <div className={Styles.contactIcon}><LuMapPin /></div>
          г. Санкт-Петербург <br /> Ул. Бассейная 55
        </li>
        <li>
          <div className={Styles.contactIcon}><IoTimeOutline /></div>
          С 10:00 до 20:00
        </li>
        <li>
          <Link href={'https://vk.com/club224470095'} className={Styles.linkToSocial} target="_blank">
            <div className={Styles.contactIcon}><SlSocialVkontakte /></div>
            <span>Наша группа</span>
          </Link>
        </li>
      </ul>
      <div className={Styles.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A21ce4bbf2c5ae414b74bbcf039dbb0f13efa467f68aca9dc7fa5984db8267c35&amp;source=constructor"
          width="755" height="372" frameBorder="0"></iframe>
      </div>
    </footer>
  )
}

export default Footer
