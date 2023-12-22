import React from 'react'
import Hero from './Hero'
import Categories from '../../components/category/Catergories'
import Features from './Features'
import cateData from '../../catedata/CateData'

const Home = () => {
  return (
    <>
      <Hero />
      <Categories categories={cateData} />
      <Features />
    </>
  )
}

export default Home