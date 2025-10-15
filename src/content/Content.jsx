import React, { useState } from "react";

import restaurantData from '../mockData/restaurants/restaurantData.json'
import placeholderImg from "/restaurants_img/PlaceHolder.jpeg"

const ImageContent = ({ restaurant }) => {
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
                        <div>
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

const RestaurantDetail = ({ restaurant }) => {


    return (
        <>
            <span> {restaurant.restaurant_name}</span>
        </>
    )
}

const Restaurant = ({ restaurant }) => {


    return (
        <>

            <div className="base-block Restaurant-block">
                <a className="Restaurant-Link">

                </a>
                <div className="Restaurant-block">
                    {/* {restaurant.isAds && (
                    <span>is ads :</span>
                )} */}

                    <ImageContent restaurant={restaurant} />
                    <RestaurantDetail restaurant={restaurant} />


                </div>
            </div>
        </>
    )
}

const TempBlock = (props) => {
    return (
        <>
            <div className="base-block">
                <span>{props.text}</span>
            </div>
        </>
    )
}

function Content() {
    return (
        <>
            <div className="PageContainer">
                <div className="SidePanel base-block">

                </div>
                <div className="MainContent">
                    <div className="Banner base-block"></div>

                    <div className="RestaurantContainer">
                        <div>
                            {restaurantData.map((item, index) => (
                                <Restaurant key={index} restaurant={item} />
                            ))}
                        </div>

                        <div>
                            <TempBlock text={"map"} />
                            <TempBlock text={"ร้านอาหารที่น่าสนใจ"} />
                            <TempBlock text={"บทความ"} />
                            <TempBlock text={"ลิสต์แนะนำ"} />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Content