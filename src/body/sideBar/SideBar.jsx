const TempBlock = (props) => {
    return (
        <>
            <div className="base-block">
                <span>{props.text}</span>
            </div>
        </>
    )
}

function SideBar() {
    return (
        <>
            <TempBlock text={"map"} />
            <TempBlock text={"ร้านอาหารที่น่าสนใจ"} />
            <TempBlock text={"บทความ"} />
            <TempBlock text={"ลิสต์แนะนำ"} />
        </>
    )
}

export default SideBar