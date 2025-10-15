import React, { useState } from "react";

import restaurantData from '../mockData/restaurants/restaurantData.json'
import placeholderImg from "../../public/restaurants_img/PlaceHolder.jpeg"

const Restaurant = ({ restaurant }) => {
    const fullPath = `../../public/restaurants_img/${restaurant.image_dir}/1.jpg`;
    const [imgSrc, setImgSrc] = useState(fullPath);
    return (
        <>
            <div className="base-block">
                {restaurant.isAds && (
                    <span>is ads :</span>
                )}

                
                <img src={imgSrc}
                    alt={restaurant.restaurant_name}
                    onError={() => setImgSrc(placeholderImg)}
                ></img>

                <span> {restaurant.restaurant_name}</span>
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