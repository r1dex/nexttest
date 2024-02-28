import React from 'react'
import Image from 'next/image'
import Styles from './categoryPage.module.css'
import {notFound} from 'next/navigation'
import CalculateButton from './CalculateButton'
import CategorySlider from "@/app/components/ui/slider/CategorySlider";

const categories = [
  {name: 'facet-i-almaznaya-gravirovka', images: ['/images/categories/facet.jpg'], title: 'Фацет и алмазная гравировка', content: '<p>Фацет - декоративный скос зеркале. Его наносят по всему периметру краев, под разным углом и разной ширины.Фацет придает изделию выразительность и блеск. Зеркальное панно с фацетом сделает любой интерьер изысканными неповторимым.</p> <p>Алмазная гравировка – нанесение на зеркало рисунка, надписи или геометрического орнамента методом фрезеровки. Алмазная гравировка придаёт изделию неповторимый блеск, каждая зеркальная грань будет отражать свет под своим углом, стекло и зеркала с гравировкой используют для декорирования дверей, шкафов-купе идругих предметов мебели.</p>'},
  {name: 'zerkalo-s-podsvetkoj-na-zakaz', images: ['/images/categories/s-podsvetkoj.jpg','/images/categories/spodsvetkoi2.jpg','/images/categories/spodsvetkoi3.png',], title: 'Зеркало с подсветкой на заказ', content: '<p>Мы можем изготовить зеркало с подсветкой по индивидуальным размерам. Подсветка может быть как на зеркальном полотне, что прекрасно подходит для выполнения косметических процедур, так и за зеркалом, чтобы придать ему эффект «парения». Изготовим зеркало по вашему дизайн-проекту.</p>'},
  {name: 'zakalka-stekla', images: ['/images/categories/zakalka-stekla.jpg'], title: 'Закалка стекла', content: '<p>Закалка – это процесс термической обработки стекла для придания ему прочности и стойкости при механических повреждениях. При повреждении такое стекло разбивается на множество мелких осколков с тупыми гранями, которые не способны причинить серьёзную травму. Калёное стекло используется при производстве стеклянных фартуков, полок, витрин магазинов и прочего. </p>'},
  {name: 'steklyannyj-fartuk-polki-izdeliya-iz-stekla', images: ['/images/categories/steklyannyj-fartuk.jpg'], title: 'Стеклянный фартук, полки, изделия из стекла', content: '<p>Фартук из калёного крашеного, матового или прозрачного стекла – незаменимый атрибут на кухне. Он легко моется и устойчив к высоким температурам. У нас Вы можете заказать покраску стекла каталогам цветов RAL и NCS.</p><p>Стеклянные полки для ванной комнаты, а также широкий спектр услуг по обработке кромки стекла, закалки, матирования. Стекло предоставляем на выбор: бесцветное, осветлённое (без зеленоватого оттенка) стекло бронза или стекло графит – подберём и исполним заказ на любой размер и цвет.</p>'},
  {name: 'peskostrujnaya-obrabotka', images: ['/images/categories/peskostrujnaya-obrabotka.jpg'], title: 'Пескоструйная обработка', content: '<p>Пескоструйная обработка – обработка стекла или зеркала, путём снятия верхнего слоя с помощью песка под высоким давлением. С помощью пескоструйной обработки можно нанести любое изображение или рисунок, и сделать изделие неповторимым. </p>'},
  {name: 'zerkalo-bez-podsvetki', images: ['/images/categories/zerkalo-bez-podsvetki.jpg', '/images/categories/bez2.jpg', '/images/categories/bez3.jpg', '/images/categories/bez4.jpeg'], title: 'Зеркало без подсветки', content: '<p>Изготовим зеркало без подсветки по индивидуальным размерам. Каркас зеркала сделан из металла, торцы обшиты пластиком. Широкий выбор рамок для зеркала разной ширины и цвета, рам из МДФ, багетов. Изготовим зеркало по вашему дизайн-проекту. </p>'}
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

        <div style={{maxWidth: "50%"}}>
          {category.images.length > 1
              ? <CategorySlider images={category.images}/>
              : (
                  <div>
                    <Image src={category.images[0]} alt={category.title} width={700} height={400} style={{height: '400px', objectFit: 'cover'}}/>
                  </div>
              )
          }

        </div>

      </div>
    </main>
  )
}

export default Page
