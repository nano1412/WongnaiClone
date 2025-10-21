

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/App.css'
import '@/color.css'
import '@/header/Header.css'
import '@/body/breadcrumb/Breadcrumb.css'
import '@/body/content/Content.css'
import '@/body/banner/Banner.css'
import '@/body/FilterPanel/FilterPanel.css'
import '@/body/SideBar/SideBar.css'
import '@/body/Body.css'
import '@/footer/Footer.css'


import Header from '@/header/Header'
import Body from '@/body/Body'
import Footer from '@/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <div id='body' className='body'>
        <div className='Content'>
          <Body/>
        </div>
      </div>

      <div id = 'footer' className='footer'>
        <Footer/>
      </div>
    </>
  )
}

export default App
