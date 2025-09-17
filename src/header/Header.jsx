import './header.css'
import WongnaiLogo from './assets/WongnaiLogo.webp'

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
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="clickable text-gray-700 flex">
                            <path d="M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12ZM12 2C16.2 2 20 5.22 20 10.2C20 13.38 17.55 17.12 12.66 21.43C12.28 21.76 11.71 21.76 11.33 21.43C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className='DropdownIconWraper'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="clickable text-gray-700 flex">
                            <path d="M7.41269 11.3272L11.0221 14.8519C11.5656 15.3827 12.4436 15.3827 12.9871 14.8519L16.5965 11.3272C17.4605 10.4698 16.8473 9 15.607 9L8.40214 9C7.14791 9 6.53473 10.4698 7.41269 11.3272Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='SerachBoxContainer'>

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

                    </div>



                </div>
            </div>
        </>
    )
}

export default Header