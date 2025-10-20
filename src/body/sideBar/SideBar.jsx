const mapLink = "/image/map.webp";

const TempBlock = (props) => {
    return (
        <>
            <div className="base-block">
                <span>{props.text}</span>
            </div>
        </>
    )
}

const Map = (props) => {
    return (
        <>
            <div className="base-block">
                <div className="MapTitle">
                    <diiv>
                    <h2>ค้นหาจากแผนที่</h2>

                    </diiv>
                </div>

                <div className="MapImage">
                    <img src={mapLink}>

                    </img>
                    <div className="MapButton">
                        <button onClick={props.f}>
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

function SideBar() {
    return (
        <>
            <Map f={() => {}} />
            <TempBlock text={"ร้านอาหารที่น่าสนใจ"} />
            <TempBlock text={"บทความ"} />
            <TempBlock text={"ลิสต์แนะนำ"} />
        </>
    )
}

export default SideBar