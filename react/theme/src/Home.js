import React, { useEffect } from 'react'
import { MyContext } from './ThemeContext'

const Home = () => {
    const { theme } = MyContext()
    useEffect(() => { 
     document.body.style.backgroundColor = theme == 'dark'? 'black': 'white'
    },[theme])
  return (
      <div>{ theme }</div>
  )
}

export default Home