'use client'

import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image";

const CategorySlider = ({images}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, i) => {
                    return (
                        <div key={i}>
                            <Image src={image} alt={i} width={700} height={400} style={{height: '400px', objectFit: 'cover'}}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default CategorySlider;