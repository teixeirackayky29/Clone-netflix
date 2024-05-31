import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Descrição de aúdio</li>
        <li>Cartões de presente</li>
        <li>Relaçôes com investidores</li>
        <li>Termos de uso</li>
        <li>Noticias legais</li>
        <li>Informações corporativa</li>
        <li>Centro de ajuda</li>
        <li>Centro de mídia</li>
        <li>Empregos</li>
        <li>Privacidade</li>
        <li>Preferências de cookies</li>
        <li>Contate-nos</li>
      </ul>
      <p className='copyright-text'>@copyright 1997-2024 Netflic, Inc.</p>
    </div>
  )
}

export default Footer