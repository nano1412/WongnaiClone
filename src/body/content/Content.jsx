import React, { useState } from "react";
import restaurantJSON from '@/mockData/restaurantData.json'

const contenetPerPage = 7

const ImageContent = ({ restaurant }) => {
    const placeholderImg = "/image/PlaceHolder.jpeg"

    const imagesToShow = 5;
    const fullPath = `/restaurants_img/${restaurant.image_dir}`;
    const images = Array.from({ length: 5 }, (_, i) => `${fullPath}/${i + 1}.jpg`);

    const handleImageClick = (index) => {
        if (index === imagesToShow - 1) {
            return fullPath; //to gallery path
        } else {
            return images[index];
        }
    };

    return (
        <>
            <div className="Restaurant-ImageContainer-Padding">
                <div className="Restaurant-ImageContainer">
                    {images.map((src, index) => (
                        <div key={index}>
                            <a className="ImgBlock" href={handleImageClick(index)}>
                                <img key={index}
                                    src={images[index]}
                                    alt={restaurant.restaurant_name}
                                    onError={(e) => (e.target.src = placeholderImg)}
                                    loading="lazy"

                                ></img>

                                {index === imagesToShow - 1 && restaurant.image_count - imagesToShow > 0 && (
                                    <div className="Restaurant-ToGallery">
                                        <span>+{Math.max(0, restaurant.image_count - imagesToShow)}</span>
                                    </div>
                                )}
                            </a>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

const AverageReview = ({ restaurant }) => {
    if (restaurant.review_score < 3 || restaurant.review_count < 10) return null;

    const thresholds = [
        { min: 3.0, max: 3.7, color: "Orange" },
        { min: 3.8, max: 4.5, color: "Red" },
        { min: 4.6, max: 5.0, color: "DeepRed" },
    ];

    const matched = thresholds.find(
        (t) => restaurant.review_score >= t.min && restaurant.review_score <= t.max
    );

    const colorClass = matched ? matched.color : "bg-gray-400";

    return (
        <>
            <div className="StarBlock">
                <div className={`StarBG ${colorClass}`}>
                    <div>{restaurant.review_score}</div>
                    <span className="StarIcon">
                        <svg>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.4951 3.85631C11.388 3.54051 11.0945 3.3365 10.7478 3.3365H8.82997C8.14851 3.3365 7.54909 2.9197 7.33852 2.29933L6.74587 0.55355C6.63877 0.237818 6.34535 0.0338135 5.99848 0.0338135C5.65162 0.0338135 5.35827 0.237818 5.25118 0.553478L4.65852 2.29933C4.44795 2.9197 3.84853 3.3365 3.16707 3.3365H1.24929C0.902499 3.3365 0.609145 3.54051 0.501979 3.85624C0.394812 4.17197 0.506871 4.50211 0.78743 4.69725L2.33894 5.77613C2.89028 6.15965 3.11921 6.83404 2.90864 7.45441L2.31599 9.20041C2.20882 9.516 2.32088 9.84607 2.60144 10.0412C2.73901 10.1369 2.8987 10.1875 3.06337 10.1875C3.22796 10.1875 3.38773 10.137 3.52522 10.0413L5.07673 8.96226C5.62814 8.57889 6.36898 8.57896 6.92024 8.96233L8.47182 10.0412C8.6121 10.1388 8.77293 10.1877 8.93368 10.1877C9.09443 10.1877 9.25525 10.1389 9.39553 10.0413C9.67617 9.84614 9.78822 9.51607 9.68106 9.20041L9.08841 7.45441C8.87784 6.83404 9.10677 6.15965 9.6581 5.7762L11.2096 4.69725C11.4902 4.50211 11.6023 4.17204 11.4951 3.85631Z" fill="currentColor"></path>
                        </svg>
                    </span>

                </div>
            </div>
        </>
    )
}

const RestaurantStatus = ({ status }) => {
    switch (status) {
        case "open":
            return (
                <>
                    <span className="Status OpenGreen">
                        เปิดอยู่
                    </span>
                </>
            )

        case "closed":
            return (
                <>
                    <span className="Status CloseRed">
                        ปิดอยู่
                    </span>
                </>
            )

        case "close soon":
            return (
                <>
                    <span className="Status SoonOrange">
                        กำลังจะปิด
                    </span>
                </>
            )

        case "open soon":
            return (
                <>
                    <span className="Status SoonOrange">
                        กำลังจะเปิด
                    </span>
                </>
            )

        default:
            return null;
    }

}

const RestaurantTag = ({ tags }) => {
    const tagJSON = restaurantJSON.tags
    return (
        <>
            <div className="TagContainer">
                <span>
                    {tags.map((tagId, index) => (
                        <React.Fragment key={tagId}>
                            <a href={`/businesses?categories=${tagId}`}>
                                {tagJSON[tagId]}
                            </a>
                            {index < tags.length - 1 && ", "}

                        </React.Fragment>

                    ))}
                </span>
            </div>
        </>
    )
}

const RestaurantDetail = ({ restaurant }) => {


    return (
        <>
            <div className="Restaurant-block">
                <div>
                    <div className="SaveIcon">
                        <div data-inactiveicon="gray-bookmark">
                            <svg>
                                <path d="M12 15.8241L17 17.9669V5L7 5L7 17.9669L12 15.8241ZM5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 18L5 21Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="RestaurantTitle">
                        {restaurant.isAds && (
                            <div className="IsAds">Ad ·</div>
                        )}

                        <a className="RestaurantName">
                            <div>
                                <h5>{restaurant.restaurant_name}</h5>
                                <span>{restaurant.location}</span>
                            </div>
                        </a>
                    </div>

                    {restaurant.isAds && (
                        <a className="AdsText">{restaurant.ads_text}</a>
                    )}

                    <div className="Restaurant-Review">
                        <div>
                            <div className="ReviewContainer">
                                <AverageReview restaurant={restaurant} />

                                <a className="ReviewCount" href={`/restaurant/${restaurant.restaurant_name}/reviews`}>
                                    <span>
                                        {restaurant.review_count} รีวิว
                                    </span>
                                </a>
                                <div>
                                    <span className="PriceLevel">
                                        {restaurant.price_level}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <RestaurantStatus status={restaurant.status} />
                    </div>

                </div>
                <RestaurantTag tags={restaurant.tags} />
            </div>
        </>
    )
}

const DeliveryOptions = ({ restaurant }) => {
    const lineManIcon = '/image/lineman.svg'
    const pickupIcon = '/image/pickup.svg'

    const diliveryData = [
        {
            icon: lineManIcon,
            title: "เดลิเวอรี่",
            text: "ค่าส่งเริ่มต้น 0 บาท *ภายในระยะทางที่กำหนด",
            link: "delivery"
        },

        {
            icon: pickupIcon,
            title: "สั่งไว้รับเลย",
            text: "สั่งล่วงหน้า รับเองที่ร้าน",
            link: "pickupfood"
        }
    ]

    return (
        <>
            <div className="DeliveryOptionsContainer">
                {restaurant.delivery && <DeliveryOption option={diliveryData[0]} />}
                {restaurant.pickup && <DeliveryOption option={diliveryData[1]} />}

            </div>
        </>
    )
}

const DeliveryOption = ({ option }) => {
    return (
        <>
            <a href={option.link} className="DeliveryOptionBlock">
                <div className="DeliveryOptionBG">
                    <div className="DeliveryOptionContent">
                        <div className="DeliveryOptionIcon">
                            <div>
                                <img src={option.icon} alt={option.title} />
                            </div>
                        </div>
                        <div className="DeliveryOptionTextBlock">
                            <div>

                                <div className="DeliveryOptionTitle">
                                    <div>{option.title}</div>
                                </div>
                                <div className="DeliveryOptionText">
                                    <span>{option.text}</span>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="OrderButton">
                        <span>สั่ง</span>
                    </button>
                </div>
            </a>




        </>
    )
}

const Restaurant = ({ restaurant }) => {


    return (
        <>

            <div className="base-block Restaurant-block">
                <a className="Restaurant-Link" href={`/restaurant/${restaurant.restaurant_name}`}>

                </a>
                <div className="Restaurant-block">


                    <ImageContent restaurant={restaurant} />
                    <RestaurantDetail restaurant={restaurant} />

                    {(restaurant.delivery || restaurant.pickup) && <DeliveryOptions restaurant={restaurant} />}


                </div>
            </div>
        </>
    )
}

function Content(restaurantData) {
    return (
        <>
           {restaurantData.restaurants.slice(0, contenetPerPage).map((item, index) => (
                                <Restaurant key={index} restaurant={item} />
                            ))}
        </>
    )
}

export default Content