import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import './color.css'
import './header/Header.css'
import '@/body/breadcrumb/Breadcrumb.css'
import '@/body/content/Content.css'


import Header from '@/header/Header'
import Body from '@/body/Body'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div id='body' className='Body'>
        <div className='Content'>
          <Body/>
        </div>
      </div>
    </>
  )
}

export default App
