import React, { useState } from 'react'
import Page from './Page'
import { ThemeContext } from './context/ThemeContext'
import { UserContext } from './context/UserContext'

const App = () => {
  const [isLight, setIsLight] = useState(true);

  return (
    <UserContext.Provider value={'강영민'}>
      <ThemeContext.Provider value={{ isLight, setIsLight }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App