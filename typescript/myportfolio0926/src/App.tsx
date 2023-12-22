import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './styles/theme'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Routes from './pages/Routes'

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <Router>
            <ScrollToTop>
               <Header />
               <Routes />
            </ScrollToTop>
            <Footer />
         </Router>
      </ThemeProvider>

   )
}

export default App