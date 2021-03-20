import React from 'react'
import Ofd from './ofd/ofd'
import Uslugi from './Uslugi/uslugi'
import Kassy from './kassy/kassy'
import Footer from './footer/footer'

const Home = () => {
  return (
    <div>
      <Ofd />
      <Uslugi />
      <Kassy />
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
