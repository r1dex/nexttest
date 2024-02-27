import React from 'react'
import Image from 'next/image'
import Styles from './categoryPage.module.css'
import {notFound} from 'next/navigation'
import CalculateButton from './CalculateButton'

const categories = [
  {name: 'facet-i-almaznaya-gravirovka', image: '/images/categories/facet.jpg', title: 'Фацет и алмазная гравировка', content: '<p>Фацет - декоративный скос зеркале. Его наносят по всему периметру краев, под разным углом и разной ширины.Фацет придает изделию выразительность и блеск. Зеркальное панно с фацетом сделает любой интерьер изысканными неповторимым.</p> <p>Алмазная гравировка – нанесение на зеркало рисунка, надписи или геометрического орнамента методом фрезеровки. Алмазная гравировка придаёт изделию неповторимый блеск, каждая зеркальная грань будет отражать свет под своим углом, стекло и зеркала с гравировкой используют для декорирования дверей, шкафов-купе идругих предметов мебели.</p>'},
  {name: 'zerkalo-s-podsvetkoj-na-zakaz', image: '/images/categories/s-podsvetkoj.jpg', title: 'Зеркало с подсветкой на заказ', content: '<p>Мы можем изготовить зеркало с подсветкой по индивидуальным размерам. Подсветка может быть как на зеркальном полотне, что прекрасно подходит для выполнения косметических процедур, так и за зеркалом, чтобы придать ему эффект «парения». Изготовим зеркало по вашему дизайн-проекту.</p>'},
  {name: 'zakalka-stekla', image: '/images/categories/zakalka-stekla.jpg', title: 'Закалка стекла', content: '<p>Закалка – это процесс термической обработки стекла для придания ему прочности и стойкости при механических повреждениях. При повреждении такое стекло разбивается на множество мелких осколков с тупыми гранями, которые не способны причинить серьёзную травму. Калёное стекло используется при производстве стеклянных фартуков, полок, витрин магазинов и прочего. </p>'},
  {name: 'steklyannyj-fartuk-polki-izdeliya-iz-stekla', image: '/images/categories/steklyannyj-fartuk.jpg', title: 'Стеклянный фартук, полки, изделия из стекла', content: '<p>Фартук из калёного крашеного, матового или прозрачного стекла – незаменимый атрибут на кухне. Он легко моется и устойчив к высоким температурам. У нас Вы можете заказать покраску стекла каталогам цветов RAL и NCS.</p><p>Стеклянные полки для ванной комнаты, а также широкий спектр услуг по обработке кромки стекла, закалки, матирования. Стекло предоставляем на выбор: бесцветное, осветлённое (без зеленоватого оттенка) стекло бронза или стекло графит – подберём и исполним заказ на любой размер и цвет.</p>'},
  {name: 'peskostrujnaya-obrabotka', image: '/images/categories/peskostrujnaya-obrabotka.jpg', title: 'Пескоструйная обработка', content: '<p>Пескоструйная обработка – обработка стекла или зеркала, путём снятия верхнего слоя с помощью песка под высоким давлением. С помощью пескоструйной обработки можно нанести любое изображение или рисунок, и сделать изделие неповторимым. </p>'},
  {name: 'zerkalo-bez-podsvetki', image: '/images/categories/zerkalo-bez-podsvetki.jpg', title: 'Зеркало без подсветки', content: '<p>Изготовим зеркало без подсветки по индивидуальным размерам. Каркас зеркала сделан из металла, торцы обшиты пластиком. Широкий выбор рамок для зеркала разной ширины и цвета, рам из МДФ, багетов. Изготовим зеркало по вашему дизайн-проекту. </p>'}
]

const Page = ({params}) => {

  const category = categories.find(category => category.name === params.category)
  if(!category){
    notFound()
  }
  const description = {__html: category.content}

  return (
    <main>
      <div className={Styles.content}>
        <div>
          <h1 className={Styles.title}>{category.title}</h1>
          <div className={Styles.description}>
            <span dangerouslySetInnerHTML={description}/>
            <CalculateButton/>
          </div>
        </div>
        <div>
          <Image src={category.image} alt={category.title} width="600" height="400"/>
        </div>
      </div>
    </main>
  )
}

export default Page
