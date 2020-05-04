import React from 'react'
import { Layout } from '../../components'
import Banner from '../../containers/home/Banner'
import PizzaList from '../../containers/home/PizzaList'

const Home = () => {
  return (
    <Layout>
      <Banner />
      <PizzaList />
    </Layout>
  )
}

export default Home
