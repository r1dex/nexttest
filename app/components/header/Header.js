import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


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
        <span className="phone">3(567)123-45-67</span>
      </div>
      <div>
        Заказать звонок
      </div>
    </header>
  )
}

export default Header
