import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Header title="리액트공부" content="매일 10시간씩" />
      <Main />
      <Footer />
    </>  
  )
}

export default App