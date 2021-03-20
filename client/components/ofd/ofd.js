import React from 'react'
import './ofd.css'
import { Link } from 'react-router-dom'
import photo from './iPhone.png'

const Ofd = () => {
  return (
    <div className="containerOfd">
      <div className="ofd">
        <div className="tittleContainer">
          <div className="tittle"> ОФД-НН</div>
          <span className="text">
            БЕСПЕРЕБОЙНАЯ ПЕРЕДАЧА ФИКСАЛЬНЫХ ДАННЫХ В ГНС И РЕЗЕРВИРОВАНИЕ В ТЕЧЕНИИ 5 ЛЕТ.
          </span>
          <div className="button">
            <Link className="btnflip" to="#">
              <span className="btnflip-item btnflip__front">Подключить</span>
              <span className="btnflip-item btnflip__center" />
              <span className="btnflip-item btnflip__back">Подключить</span>
            </Link>
          </div>
        </div>
        <img className="photo" src={photo} alt="" />
      </div>
    </div>
  )
}

export default Ofd
