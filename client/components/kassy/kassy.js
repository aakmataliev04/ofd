import React from 'react'
import './kassy.css'
import { Link } from 'react-router-dom'
import kassaImg from './layer-11.png'

const Kassy = () => {
  return (
    <div>

      <div className="kassyTittle">Кассы</div>
      <div className="kassyAbout">
      <div className="kassyAboutTittle">Комплексное решение от 19 800 сом</div>
      <div className="kassyAboutText">Вы можете заказать кассовый аппарат с Яндекс.ОФД и фискальным накопителем. Настроить его и зарегистрировать в ФНС поможет наш партнёр.
        Услуги Яндекс.ОФД уже включены в стоимость кассы.</div>
    </div>
      <div className="kassyTittle">Кассовые аппараты:</div>
      <div className="kassyContainer">
        <div className="kassy">
          <img src={kassaImg} alt="" className="kassyImg" />
          <div className="kassyName"> Эвотор 7.3 </div>
          <div className="cost">19 800 сом</div>
          <Link to="#" className="kassyZakaz">
            Заказать
          </Link>
        </div>
          <div className="kassy">
          <img src={kassaImg} alt="" className="kassyImg" />
          <div className="kassyName"> Эвотор 7.3 </div>
          <div className="cost">19 800 сом</div>
          <Link to="#" className="kassyZakaz">
            Заказать
          </Link>
        </div>
          <div className="kassy">
          <img src={kassaImg} alt="" className="kassyImg" />
          <div className="kassyName"> Эвотор 7.3 </div>
          <div className="cost">19 800 сом</div>
          <Link to="#" className="kassyZakaz">
            Заказать
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Kassy
