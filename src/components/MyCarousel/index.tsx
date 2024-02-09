import React from 'react';
import { Carousel, Image } from 'antd';
import { FaRegEye } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import { CarouselRef } from 'antd/es/carousel';
import { ScreenshotGame } from './types';
import "./MyCarousel.css"

interface Props {
    images: ScreenshotGame[];
}

const PreviewImageMask = () => {
    return (
        <div style={{ flexDirection: "row", display: "flex", alignItems: "center", gap: 10 }}>
            <FaRegEye />
            <p>Открыть на весь экран</p>
        </div>
    )
}

const MyCarousel = ({ images }: Props) => {

    const carouselRef = React.createRef<CarouselRef>();

    const nextSlide = () => {
        carouselRef.current?.next();
    }

    const prevSlide = () => {
        carouselRef.current?.prev();
    }

    // console.log('images: ', images);

    return (
        <div className='carouselImages'>
            <Image.PreviewGroup
                items={images.map((image) => image.image)}
            >
                <Carousel
                    ref={carouselRef}
                    style={{ height: "100%", width: "100%" }}
                    dotPosition={"bottom"}
                    autoplay={false}
                    infinite
                >
                    {images ? images.map(({ image, id }) => (
                        <Image
                            className="carouselItemImage"
                            key={id}
                            src={image}
                            preview={{
                                mask: <PreviewImageMask />,
                            }}
                        />
                    )) : <p>Loading...</p>}
                </Carousel>
            </Image.PreviewGroup>

            <div className="carouselBtn">
                <FiChevronLeft className="carouselBtnIcon" onClick={prevSlide} />
                <FiChevronLeft className="carouselBtnIcon" onClick={nextSlide} style={{ rotate: "180deg" }} />
            </div>
        </div>
    )
};

export default MyCarousel;
