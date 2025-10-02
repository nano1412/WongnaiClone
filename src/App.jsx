import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './color.css'
import './header/Header.css'
import './breadcrumb/Breadcrumb.css'

import Header from './header/Header'
import Breadcrumb from './breadcrumb/Breadcrumb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div id='body' className='Body'>
        <div className='Content'>
          <Breadcrumb/>
        </div>
      </div>
    </>
  )
}

export default App
