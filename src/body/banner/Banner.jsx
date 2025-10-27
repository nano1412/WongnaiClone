import Slider from "react-slick";
import { useState } from 'react'

import BannerJSON from "@/mockData/bannerData.json"

const ArrowLink = "/image/arrow.webp"

const NextArrow = ({ className, onClick, isHovered, isDisabled }) => {
    return (
        <>
            <div className={`${className} Next Arrow`} onClick={onClick} role="button"
                style={{ display: isDisabled || !isHovered ? "none" : "flex" }}>
                <div>
                    <span className="Rotate180" style={{
                        backgroundImage: `url(${ArrowLink})`,
                    }}>

                    </span>
                </div>
            </div>
        </>
    );
};

const PrevArrow = ({ className, onClick, isHovered, isDisabled }) => {
    return (
        <>
            <div className={`${className} Prev Arrow`} onClick={onClick} role="button"
                style={{ display: isDisabled || !isHovered ? "none" : "flex" }}>
                <div>
                    <span style={{
                        backgroundImage: `url(${ArrowLink})`,
                    }}>

                    </span>
                </div>
            </div>
        </>
    );
};

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const slidesToShow = 5

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 5,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        nextArrow: (
            <NextArrow
                isHovered={isHovered}
                isDisabled={currentSlide >= BannerJSON.length - slidesToShow}
            />
        ),
        prevArrow: (
            <PrevArrow isHovered={isHovered} isDisabled={currentSlide === 0} />
        ),
    };
    return (
        <>
            <div className="BannerContainer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>


                <Slider {...settings}>
                    {BannerJSON.map((banner) => (

                        <div className="BannerTab">
                            <a href={`/${banner.link}`}
                                style={{
                                    backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 50%),
                  url(/restaurants_img/banner/${banner.img_link})
                `,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                }}
                            >
                                <span>
                                    {banner.text}
                                </span>
                            </a>
                        </div>
                    ))}
                </Slider>


            </div>
        </>
    )
}

export default Banner