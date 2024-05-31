import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import ayrton_banner from '../../assets/ayrton_banner.jpg'
import senna_title from '../../assets/senna_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="eradogelo">
        <img src={ayrton_banner} alt="" className='banner-img' />
        <div className="gelo-caption">
          <img src={senna_title} alt="" className='caption-img'/>
          <p>Atrás de cada campeão, há uma primeira volta. Prepare-se: a jornada inspiradora de Senna está prestes a começar.</p>
          <div className="gelo-btns">
            <button className='btn'><img src={play_icon} alt="" />Assistir</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />Mais Informações</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Filmes premiados"} category={"top_rated"}/>

      <TitleCards title={"Principais pesquisas"} category={"upcoming"}/>
      <TitleCards title={"Lançamentos"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;