import React from 'react'
import { Routes as RRoutes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './home/Home'
import Contact from './contact/Contact'
import About from './about/About'
import Location from './location/Location'

type Props = {}

const Routes = (props: Props) => {
   const location = useLocation();

   return (
      <main>
         <AnimatePresence mode='wait'>
            <RRoutes location={location} key={location.pathname}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/location" element={<Location />} />
            </RRoutes>
         </AnimatePresence>
      </main>
   )
}

export default Routes