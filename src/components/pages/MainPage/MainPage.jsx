import React from 'react'
import './MainPage.css'
import {
  PhoneOutlined,
  ClockCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../Logo/Logo'
import { useAuth } from '../../../features/auth/ContextProvider'
import { Page } from '../../Page/Page'
import { PageLoader } from '../../PageLoader/PageLoader'

export const MainPage = () => {
  const { cart, isUserLoading } = useAuth()

  if (isUserLoading) {
    return <PageLoader />
  }

  return (
    <Page>
      <div className="main-page">
        <div className="main-page__info-container">
          <Logo />
          <div className="main-page__info-blocks">
            <div>
              <PhoneOutlined style={{ fontSize: '40px' }} />
              <span>
                Быстрый заказ <br />
                <a href="tel:+375 44 556-10-10 ">
                  <span className="color-green">+375 44 556-10-10</span>
                </a>
              </span>
            </div>
            <div>
              <ClockCircleOutlined style={{ fontSize: '40px' }} />
              <span>
                Каждый день <br /> с <span className="color-green">10:00</span>{' '}
                до <span className="color-green">22:00</span>
              </span>
            </div>
            <div>
              <ShoppingCartOutlined style={{ fontSize: '40px' }} />
              <span>
                Товаров <br />в корзине:
                <span className="color-green"> {cart.length}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="main-page__hero-container">
          <div className="main-page__hero">
            <img
              className="main-page__pizza-icon"
              src={require('../../../images/pizza-piece-icon.png')}
              alt="pizza icon"
            />
            <span className="main-page__hero-text">
              Заказывайте пиццу прямо сейчас !
            </span>
            <NavLink to="/pizza" className="main-page__hero-button">
              Выбери пиццу!
            </NavLink>
          </div>
        </div>
        <div className="main-page__assortment-container">
          <NavLink to="/pizza" className="main-page__assortment-item">
            <img src={require('../../../images/pizzas.png')} alt="pizzas" />
            <div className="main-page__assortment-item-text-container">
              <span className="main-page__assortment-item-text-primary">
                Пицца
              </span>
              <span className="main-page__assortment-item-text-secondary">
                Лучшие ингридиенты, лучшая пицца!
              </span>
            </div>
          </NavLink>
          <NavLink to="/" className="main-page__assortment-item not-available">
            <img src={require('../../../images/cake.png')} alt="pizzas" />
            <div className="main-page__assortment-item-text-container">
              <span className="main-page__assortment-item-text-primary">
                Торт на заказ
              </span>
              <span className="main-page__assortment-item-text-secondary">
                Воспользуйтесь нашим конструктором тортов. Выберите наилучшее
                сочетание и оформите заказ
              </span>
            </div>
          </NavLink>
          <div className="main-page__line"></div>
          <NavLink to="/" className="main-page__assortment-item not-available">
            <img src={require('../../../images/hamburger.png')} alt="pizzas" />
            <div className="main-page__assortment-item-text-container">
              <span className="main-page__assortment-item-text-primary">
                Быстрый перекус
              </span>
              <span className="main-page__assortment-item-text-secondary">
                Стритфуд с доставкой в Жлобине. Бургеры, хотдоги, картошечка
                фри, наггетсы
              </span>
            </div>
          </NavLink>
          <NavLink to="/" className="main-page__assortment-item not-available">
            <img src={require('../../../images/rolls.png')} alt="pizzas" />
            <div className="main-page__assortment-item-text-container">
              <span className="main-page__assortment-item-text-primary">
                Кулинария
              </span>
              <span className="main-page__assortment-item-text-secondary">
                Собери свой обед сам! Огромный выбор готовых котлет, гарниров и
                салатов с доставкой.
              </span>
            </div>
          </NavLink>
        </div>
        <div className="main-page__cakes-order-container">
          <NavLink to="/cakes">
            Заказать <br /> эксклюзивный торт!
          </NavLink>
        </div>
      </div>
    </Page>
  )
}
