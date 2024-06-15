import React, { useState ,useContext, createContext } from 'react'

export const CreateTheme = createContext()
export const MyContext = () => { 
    return useContext(CreateTheme)
}
const ThemeContext = ({ children }) => {
 const [theme, setTheme] = useState('light')

  return (
      <>
          <CreateTheme.Provider value={{theme,setTheme}}>
              {children}
         </CreateTheme.Provider>
      </>
  )
}

export default ThemeContext