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

        </>
    )
}

function Header() {
    return (
        <>
            <div className='HeaderBG'>
                <div className='HeaderContainer'>
                    <Logo />
                    <Logo />
                    <SearchBar />


                </div>
            </div>
        </>
    )
}

export default Header