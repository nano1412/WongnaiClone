import WongnaiLogo from '/image/WongnaiLogo.webp'
const Logo = () => {
    return (
        <>
            <div className='Logo'>
                <a href='https://www.wongnai.com'>
                    <img src={WongnaiLogo} alt="Wongnai, No.1 Restaurant Review Website and Application in Thailand"></img>
                </a>
            </div>
        </>
    )
}

const SearchBar = () => {
    return (
        <>
            <div className='LocationContainer'>
                <div className='relative'>
                    <input className='LocationInput' placeholder='กรุงเทพและปริมณฑล'>

                    </input>
                    <div className='LocationIconWraper'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="clickable text-gray-700 flex">
                            <path d="M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12ZM12 2C16.2 2 20 5.22 20 10.2C20 13.38 17.55 17.12 12.66 21.43C12.28 21.76 11.71 21.76 11.33 21.43C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className='DropdownIconWraper'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="clickable text-gray-700 flex">
                            <path d="M7.41269 11.3272L11.0221 14.8519C11.5656 15.3827 12.4436 15.3827 12.9871 14.8519L16.5965 11.3272C17.4605 10.4698 16.8473 9 15.607 9L8.40214 9C7.14791 9 6.53473 10.4698 7.41269 11.3272Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='SerachBoxContainer'>
                <form className='SearchForm'>
                    <input autoComplete="off" enterKeyHint="search" maxLength="200" name="displayQ" placeholder="ร้านอาหาร โรงแรม ที่เที่ยว ร้านเสริมสวย สปา ..." defaultValue="" className='SearchInput' />
                    <button title="Search" type="submit" className='SearchSummit'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="s24 text-white">
                            <mask id="search-mask" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5 10.5C16.5 13.5376 14.0376 16 11 16C7.96243 16 5.5 13.5376 5.5 10.5C5.5 7.46243 7.96243 5 11 5C14.0376 5 16.5 7.46243 16.5 10.5ZM15.3914 15.9515C14.1905 16.9201 12.663 17.5 11 17.5C7.13401 17.5 4 14.366 4 10.5C4 6.63401 7.13401 3.5 11 3.5C14.866 3.5 18 6.63401 18 10.5C18 12.1627 17.4203 13.6899 16.452 14.8908L20.6466 19.0854C20.9395 19.3783 20.9395 19.8531 20.6466 20.146C20.3538 20.4389 19.8789 20.4389 19.586 20.146L15.3914 15.9515Z"></path></mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.5 10.5C16.5 13.5376 14.0376 16 11 16C7.96243 16 5.5 13.5376 5.5 10.5C5.5 7.46243 7.96243 5 11 5C14.0376 5 16.5 7.46243 16.5 10.5ZM15.3914 15.9515C14.1905 16.9201 12.663 17.5 11 17.5C7.13401 17.5 4 14.366 4 10.5C4 6.63401 7.13401 3.5 11 3.5C14.866 3.5 18 6.63401 18 10.5C18 12.1627 17.4203 13.6899 16.452 14.8908L20.6466 19.0854C20.9395 19.3783 20.9395 19.8531 20.6466 20.146C20.3538 20.4389 19.8789 20.4389 19.586 20.146L15.3914 15.9515Z" fill="currentColor"></path>
                            <path d="M15.3914 15.9515L16.0985 15.2444L15.4631 14.6089L14.7636 15.1731L15.3914 15.9515ZM16.452 14.8908L15.6736 14.263L15.1096 14.9625L15.7449 15.5979L16.452 14.8908ZM20.6466 19.0854L21.3538 18.3783V18.3783L20.6466 19.0854ZM19.586 20.146L20.2931 19.4389L20.2931 19.4389L19.586 20.146ZM11 17C14.5899 17 17.5 14.0899 17.5 10.5H15.5C15.5 12.9853 13.4853 15 11 15V17ZM4.5 10.5C4.5 14.0899 7.41015 17 11 17V15C8.51472 15 6.5 12.9853 6.5 10.5H4.5ZM11 4C7.41015 4 4.5 6.91015 4.5 10.5H6.5C6.5 8.01472 8.51472 6 11 6V4ZM17.5 10.5C17.5 6.91015 14.5899 4 11 4V6C13.4853 6 15.5 8.01472 15.5 10.5H17.5ZM11 18.5C12.8996 18.5 14.647 17.8367 16.0192 16.7298L14.7636 15.1731C13.7341 16.0035 12.4264 16.5 11 16.5V18.5ZM3 10.5C3 14.9183 6.58172 18.5 11 18.5V16.5C7.68629 16.5 5 13.8137 5 10.5H3ZM11 2.5C6.58172 2.5 3 6.08172 3 10.5H5C5 7.18629 7.68629 4.5 11 4.5V2.5ZM19 10.5C19 6.08172 15.4183 2.5 11 2.5V4.5C14.3137 4.5 17 7.18629 17 10.5H19ZM17.2305 15.5185C18.3369 14.1463 19 12.3992 19 10.5H17C17 11.9261 16.5037 13.2336 15.6736 14.263L17.2305 15.5185ZM15.7449 15.5979L19.9395 19.7925L21.3538 18.3783L17.1591 14.1836L15.7449 15.5979ZM19.9395 19.7925C19.8419 19.6948 19.8419 19.5366 19.9395 19.4389L21.3538 20.8531C22.0372 20.1697 22.0372 19.0617 21.3538 18.3783L19.9395 19.7925ZM19.9395 19.4389C20.0372 19.3413 20.1955 19.3413 20.2931 19.4389L18.8789 20.8531C19.5623 21.5366 20.6703 21.5366 21.3538 20.8531L19.9395 19.4389ZM20.2931 19.4389L16.0985 15.2444L14.6843 16.6586L18.8789 20.8531L20.2931 19.4389Z" fill="currentColor" mask="url(#search-mask)"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}

const Login = () => {
    return (
        <>
            <div className='LoginContainer'>
                <div className='LoginBlock'>
                    <a href='toLogin(notImprement)' className='LoginButton'>
                        <button>
                            <svg height="32" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="Icon-sc-nqv920 hrmXJl">
                                <path d="M12 23.8333C18.3513 23.8333 23.5 18.6846 23.5 12.3333C23.5 5.98203 18.3513 0.8333 12 0.8333C5.64873 0.8333 0.5 5.98203 0.5 12.3333C0.5 18.6846 5.64873 23.8333 12 23.8333Z" stroke="currentColor"></path>
                                <path d="M12 13.8333C14.4853 13.8333 16.5 11.8185 16.5 9.33325C16.5 6.84797 14.4853 4.83325 12 4.83325C9.51472 4.83325 7.5 6.84797 7.5 9.33325C7.5 11.8185 9.51472 13.8333 12 13.8333Z" stroke="currentColor"></path>
                                <path d="M19.5 21C18.3742 18.3488 16.0113 14.8333 11.9995 14.8333C7.98765 14.8333 5.62589 18.3488 4.5 21" stroke="currentColor"></path></svg>
                            <span> เข้าสู่ระบบ</span>
                        </button>
                    </a>
                    <button className='LoginDropDownButton'>
                        <div className='DropDownWraper'>
                            <svg height="12" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="Icon-sc-nqv920 hrmXJl">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.29922 0.835282C9.49675 1.02825 9.50046 1.34481 9.30749 1.54234L4.75682 6.20078L0.206176 1.54234C0.0132122 1.3448 0.016918 1.02824 0.214452 0.835279C0.411987 0.642316 0.728548 0.646021 0.921511 0.843556L4.75682 4.76972L8.59216 0.843556C8.78513 0.646022 9.10169 0.642318 9.29922 0.835282Z" fill="currentColor"></path></svg>
                        </div>
                    </button>

                </div>
            </div>
        </>
    )
}

function Header() {
    return (
        <>
            <div className='HeaderBG'>
                <div className='HeaderContainer'>
                    <div className='HeaderLeft'>
                        <Logo />
                        <SearchBar />
                    </div>
                    <div className='HeaderRight'>
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header