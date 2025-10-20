import React, { useState } from "react";

import restaurantJSON from '@/mockData/restaurantData.json'
import Breadcrumb from '@/body/breadcrumb/Breadcrumb'
import Banner from '@/body/banner/Banner'
import Content from '@/body/content/Content'
import FilterPanel from '@/body/filterPanel/FilterPanel'
import SideBar from '@/body/sideBar/SideBar'

function Body() {
    const restaurantData = restaurantJSON.restaurants

    return (
        <>
            <Breadcrumb />
            <div className="PageContainer">
                <div className="FilterPanel base-block">
                    <FilterPanel/>
                </div>
                <div className="MainContent">
                    <div className="Banner base-block">
                        <Banner/>
                    </div>

                    <div className="RestaurantContainer">
                        <div>
                            <Content restaurants={restaurantJSON.restaurants}/>
                        </div>

                        <div className="SideBar">
                            <SideBar/>   
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Body