import React from 'react'
import Banner from '../../components/banner/banner.jsx'
import Cards from '../../components/cards/cards.jsx'
import Container from '../../components/container/container.jsx'
import bannerHome from '../../assets/images/banner-img.png'
function Home() {
  return (
    <div>
      <Banner
      titre="Chez vous, partout et ailleurs"
      src= {bannerHome}
      alt="banner home"
     />
      <Cards />
      <Container />
    </div>
  )
}

export default Home
