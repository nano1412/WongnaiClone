const mapLink = "/image/map.webp";
import articlesData from '@/mockData/articlesData.json'
import restaurantJSON from '@/mockData/restaurantData.json'

const Articles = ({ articles }) => {
    return (
        <>
            <div className="base-block">
                <div className='ArticlesHead'>
                    <div className='ArticlesTitle'>
                        <h2>
                            {articles.title}
                        </h2>
                    </div>

                    <div className='ArticlesLink'>
                        <div>
                            <a href={articles.link}>
                                ดูทั้งหมด
                            </a>
                        </div>
                    </div>
                </div>
                <div className='ArticlesContainer'>
                    <div>
                        {articles.preview_articles.map((item, index) => (
                            <Article key={index} article={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const Article = ({ article }) => {
    return (
        <>
            <div className='ArticleContainer'>

                <div className='ArticleImage'>
                    <a>
                        <label>
                            <div>
                                <img src={`/article_img/${article.img_link}`}>

                                </img>
                            </div>
                        </label>
                    </a>
                </div>

                <div className='ArticleText'>
                    <a>
                        {article.isads && (
                            <div className="IsAds">Ad ·</div>
                        )}
                        {article.title}
                    </a>
                </div>

            </div>
        </>
    )
}

const MRRestaurantStatus = ({ status }) => {
    switch (status) {
        case "open":
            return (
                <>
                    <span className="MRStatus OpenGreen">
                        เปิดอยู่
                    </span>
                </>
            )

        case "closed":
            return (
                <>
                    <span className="MRStatus CloseRed">
                        ปิดอยู่
                    </span>
                </>
            )

        case "close soon":
            return (
                <>
                    <span className="MRStatus SoonOrange">
                        กำลังจะปิด
                    </span>
                </>
            )

        case "open soon":
            return (
                <>
                    <span className="MRStatus SoonOrange">
                        กำลังจะเปิด
                    </span>
                </>
            )

        default:
            return null;
    }

}

const MiniRestaurants = ({ restaurants }) => {
    const placeholderImg = "/image/PlaceHolder.jpeg"

    return (
        <>
            <div className="base-block MiniRestaurantsContainer">
                <div className='MiniRestaurantsTitle'>
                    <div>
                        <h2>
                            ร้านอาหารที่น่าสนใจ
                        </h2>
                    </div>
                </div>

                <div className='MiniRestaurantContainer'>
                    {restaurants.map((restaurant, index) => (
                        <div key={index}>
                            <div>
                                <div className='MRImage'>
                                    <div>
                                        <a href={`/restaurant/${restaurant.restaurant_name}/reviews`}>
                                            <img src={`/restaurants_img/${restaurant.image_dir}/${restaurant.imgs[0]}`}
                                                alt={restaurant.restaurant_name}
                                                onError={(e) => (e.target.src = placeholderImg)}
                                                loading="lazy">
                                            </img>
                                        </a>
                                    </div>
                                </div>

                                <div className='MRDetail'>
                                    {restaurant.isAds && (
                                        <div className="IsAds">Ad ·</div>
                                    )}

                                    <a className='MRTitleContainer hideHoverEffect'>
                                        <span className='MRTitle textBoldHover'>{restaurant.restaurant_name}</span>
                                        <span className='MRLocation'>{restaurant.location}</span>
                                    </a>

                                    <div className='MRStatusContainer'>
                                        <a>
                                            <span>
                                                {`${restaurant.review_count} รีวิว`}
                                            </span>
                                        </a>
                                        <div className='MRPrice'>
                                            <span>{restaurant.price_level}</span>
                                        </div>
                                        <MRRestaurantStatus status={restaurant.status} />
                                    </div>

                                    <a className='MRAdsText' href={`/restaurant/${restaurant.restaurant_name}/reviews`}>
                                        {restaurant.ads_text}
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const Map = (props) => {
    return (
        <>
            <div className="base-block">
                <div className="MapTitle">
                    <div>
                        <h2>ค้นหาจากแผนที่</h2>

                    </div>
                </div>

                <div className="MapImage">
                    <img src={mapLink}>

                    </img>
                    <div className="MapButton">
                        <button onClick={props.f} className='blockHoverBlue'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="clickable text-gray-700 flex">
                                <path d="M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12ZM12 2C16.2 2 20 5.22 20 10.2C20 13.38 17.55 17.12 12.66 21.43C12.28 21.76 11.71 21.76 11.33 21.43C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2Z" fill="currentColor"></path>
                            </svg>
                            <span>ดูแผนที่</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

function SideBar({ restaurants, articles }) {
    const restaurantsAdsOnly = restaurants.filter(restaurant => restaurant.isAds).slice(0, 2);
    return (
        <>
            <Map f={() => { }} />
            <div className='SidebarSpacer'></div>
            <MiniRestaurants restaurants={restaurantsAdsOnly} />
            <Articles articles={articles[0]} />
            <Articles articles={articles[1]} />
        </>
    )
}

export default SideBar