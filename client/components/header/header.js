import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Header = () => {
  function f() {
    const x = document.getElementsByClassName('links')
    if (x.className === 'links') {
      x.className += 'Responsive'
    } else {
      x.className = 'linksResponsive'
    }
  }
  return (
    <div className="header">
      <nav>
        <div className="topNav" id="myTopNav">
          <img className="logo" src={logo} alt="" />
          <div className="links">
            <Link to="/">Услуги</Link>
          </div>
          <div className="links">
            <Link to="/dashboard">ОФД</Link>
          </div>
          <div className="links">
            {' '}
            <Link to="/">Кассы</Link>
          </div>
          <div className="links">
            <Link to="/">Тарифы</Link>
          </div>
          <div className="links">
            {' '}
            <Link to="/">Контакты</Link>
          </div>
          <div className="burger" onClick={f()} onKeyDown={f()} role="button" tabIndex="0">
            {' '}
            <Link id="menu" to="#" className="icon">
              &#9776;
            </Link>{' '}
          </div>
        </div>
      </nav>
      <script src="javaScript.js" />
    </div>
  )
}

export default Header
