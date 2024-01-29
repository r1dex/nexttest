import React from 'react'
import Styles from './footer.module.css'
import { LuMapPin } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { SlSocialVkontakte } from "react-icons/sl";


const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <ul className={Styles.list}>
        <li className={Styles.listContacts}>
          Наши контакты
        </li>
        <li>
          <div className={Styles.contactIcon}><LuMapPin /></div>
          Ул. Пушкина д. 21
        </li>
        <li>
          <div className={Styles.contactIcon}><IoTimeOutline /></div>
          С 10:00 до 20:00
        </li>
        <li>
          <div className={Styles.contactIcon}><SlSocialVkontakte /></div>
          Наша группа
        </li>
      </ul>
      <div className={Styles.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A21ce4bbf2c5ae414b74bbcf039dbb0f13efa467f68aca9dc7fa5984db8267c35&amp;source=constructor"
          width="800" height="400" frameBorder="0" />
      </div>
    </footer>
  )
}

export default Footer
