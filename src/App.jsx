import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import './color.css'
import './header/Header.css'
import '@/body/breadcrumb/Breadcrumb.css'
import '@/body/content/Content.css'
import '@/body/banner/Banner.css'
import '@/body/FilterPanel/FilterPanel.css'
import '@/body/SideBar/SideBar.css'
import '@/body/body.css'


import Header from '@/header/Header'
import Body from '@/body/Body'




function App() {

  return (
    <>
      <Header/>
      <div id='body' className='body'>
        <div className='Content'>
          <Body/>
        </div>
      </div>
    </>
  )
}

export default App
