import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import CategoryInterface from '../../modules/CategoryInterface'

interface CategoriesInterface {
    categories: CategoryInterface[];
}

const Categories = ({ categories }: CategoriesInterface) => {
  return (
    <div>Categories</div>
  )
}

export default Categories