import React from 'react'
import { MyContext } from './ThemeContext'
const Header = () => {
    const { theme,setTheme } = MyContext()
  return (
      <div>
          
          <nav class="navbar bg-body-tertiary " >
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
  
                  <button class="btn btn-outline-success" onClick={() => { 
                      setTheme( theme== 'light'? 'dark':'light')
                  }}>{ theme== 'light'? 'dark':'light' }</button>
 
  </div>
</nav>
    </div>
  )
}

export default Header