import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import logo from '../header/logo.png'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerMenu">
          <img src={logo} alt="" className="footerLogo" />
          <div className="linkContainer">
            <Link to="/">Новости</Link>
            <Link to="/">База знаний</Link>
            <Link to="/">О компании</Link>
          </div>
          <div className="linkContainer">
            <Link to="/">Маркировка</Link>
            <Link to="/">Документооборот</Link>
            <Link to="/">Отрасли</Link>
          </div>
          <div className="linkContainer">
            <Link to="/">Разработчикам</Link>
            <Link to="/">Партнерам</Link>
            <Link to="/">Для СМИ</Link>
          </div>
          <div className="linkContainer">
            <Link to="/">Доставка и оплата</Link>
            <Link to="/">Контакты</Link>
            <Link to="/">Проверить чек</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
