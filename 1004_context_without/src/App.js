import React, { useState } from 'react'
import Page from './Page'

const App = () => {
  const [isLight, setIsLight] = useState(true);

  return (
      <Page isLight={isLight} setIsLight = {setIsLight} />
  )
}

export default App