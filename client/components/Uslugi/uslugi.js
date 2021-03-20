import React from 'react'
import './uslugi.css'
import icon1 from './1.png'
import icon2 from './2.png'
import icon3 from './3.png'

const Uslugi = () => {
  return (
    <div>
      <div className="ComponentUslugi">
        <div className="uslugiTittle">КОМПЛЕКС УСЛУГ ПО ОФД</div>
        <div className="textUslugi">
          Онлайн-передача чеков, анализ продаж, мониторинг торговых точек,
          <br />
          поставка, настройка и обслуживание касс.
        </div>
        <div className="containerUslugi">
          <div className="uslugi">
            <img className="uslugiIcons" src={icon1} alt="" />
            <span className="iconText">УСТАНОВИМ И ЗАРЕГИСТРИРУЕМ КАССЫ</span>
          </div>
          <div className="uslugi">
            <img className="uslugiIcons" src={icon2} alt="" />
            <span className="iconText">ВЫДАДИМ КЭП И ОБУЧИМ ПЕРСОНАЛ</span>
          </div>
          <div className="uslugi">
            <img className="uslugiIcons" src={icon3} alt="" />
            <span className="iconText">ПОДКЛЮЧИМ КАССЫ К ОФД</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uslugi
