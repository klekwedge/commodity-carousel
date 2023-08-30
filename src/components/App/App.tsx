/* eslint-disable jsx-a11y/anchor-is-valid */

import { useRef } from 'react';

const ELEMENTS_AMOUNT_IN_SLIDE = 5;
const BUTTON_DEBOUNCE_INTERVAL = 50;
const DEFAULT_TRANSITION = `transform 0.6s ease`;

const PLACING_POSITION_START = `start`;
const PLACING_POSITION_END = `end`;

const DIRECTION_RIGHT = -1;
const DIRECTION_LEFT = 1;

function App() {
  const sliderWrapper = useRef<HTMLDivElement>(null);
  const sliderList = useRef<HTMLUListElement>(null);
  const sliderItem = useRef<HTMLLIElement>(null);

  const sliderStep = sliderItem.current?.offsetWidth || 100 * ELEMENTS_AMOUNT_IN_SLIDE;

  const sliderDirection = DIRECTION_RIGHT;

  const getTranslate = (shiftX = 0, shiftY = 0, shiftZ = 0) => `translate3d(${shiftX}px, ${shiftY}px, ${shiftZ}px)`;

  const setTransform = (direction: number) => {
    if (sliderList.current) {
      sliderList.current.style.transform = getTranslate(direction * sliderStep);
    }
  };

  const next = () => {
    // if (sliderDirection === DIRECTION_LEFT) {
    //   sliderDirection = DIRECTION_RIGHT;
    //   replaceElements(PLACING_POSITION_START);
    // }

    if (sliderWrapper.current && sliderList.current) {
      sliderWrapper.current.style.justifyContent = `flex-start`;
      sliderList.current.style.justifyContent = `flex-start`;
      setTransform(sliderDirection);
    }
  };

  const prev = () => {
    // if (sliderDirection === DIRECTION_RIGHT) {
    //   sliderDirection = DIRECTION_LEFT;
    //   replaceElements(PLACING_POSITION_END);
    // }
    if (sliderWrapper.current  && sliderList.current) {
      sliderWrapper.current.style.justifyContent = `flex-end`;
      sliderList.current.style.justifyContent = `flex-end`;
      setTransform(sliderDirection);
    }
  };

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a className="logo header__logo">
            <img src="/public/img/logo.svg" width="114" height="42" alt="Логотип фабрики мебели «Клубок»" />
          </a>
        </div>
      </header>
      <main className="main">
        <h1 className="visually-hidden">Клубок - главная страница</h1>
        <section className="banner">
          <div className="container banner__inner">
            <div className="banner__text">
              <h2 className="heading banner__heading">«Клубок» — фабрика мебели</h2>
              <p className="banner__description">
                Мы производим лучшую мебель для ваших домов. У нас проверенные поставщики, доставка в день заказа,
                быстрая сборка и приятные цены.
              </p>
            </div>
            <div className="banner__image">
              <img src="/public/img/banner-image.svg" width="377" height="304" alt="Диван, человек, кот и клубок" />
            </div>
          </div>
        </section>
        <section className="goods">
          <div className="container container--no-padding goods__inner">
            <h2 className="heading goods__heading">Популярные товары</h2>
            <div className="slider goods__slider">
              <div className="slider__controls">
                <button className="slider__button slider__button--prev" type="button" onClick={prev}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#6C63FF" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7903 4.3871L10.7071 4.29289C10.3466 3.93241 9.77939 3.90468 9.3871 4.2097L9.29289 4.29289L2.29289 11.2929L2.2515 11.3369L2.19633 11.4047L2.12467 11.5159L2.07123 11.6287L2.03585 11.734L2.00691 11.8819L2 12L2.00279 12.0752L2.02024 12.2007L2.04974 12.3121L2.09367 12.4232L2.146 12.5207L2.21969 12.6254L2.29289 12.7071L9.29289 19.7071C9.68342 20.0976 10.3166 20.0976 10.7071 19.7071C11.0676 19.3466 11.0953 18.7794 10.7903 18.3871L10.7071 18.2929L5.416 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H5.414L10.7071 5.70711C11.0676 5.34662 11.0953 4.77939 10.7903 4.3871L10.7071 4.29289L10.7903 4.3871Z"
                    />
                  </svg>
                  <span className="visually-hidden">Посмотреть предыдущие 5 товаров</span>
                </button>
                <button className="slider__button slider__button--next" type="button" onClick={next}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#6C63FF" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2097 19.6129L13.2929 19.7071C13.6534 20.0676 14.2206 20.0953 14.6129 19.7903L14.7071 19.7071L21.7071 12.7071L21.7485 12.6631L21.8037 12.5953L21.8753 12.4841L21.9288 12.3713L21.9642 12.266L21.9931 12.1181L22 12L21.9972 11.9248L21.9798 11.7993L21.9503 11.6879L21.9063 11.5768L21.854 11.4793L21.7803 11.3746L21.7071 11.2929L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9324 4.65338 12.9047 5.22061 13.2097 5.6129L13.2929 5.70711L18.584 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.586 13L13.2929 18.2929C12.9324 18.6534 12.9047 19.2206 13.2097 19.6129L13.2929 19.7071L13.2097 19.6129Z"
                    />
                  </svg>
                  <span className="visually-hidden">Посмотреть следующие 5 товаров</span>
                </button>
              </div>
              <div className="slider__wrapper" ref={sliderWrapper}>
                <ul className="goods__list slider__list" ref={sliderList}>
                  <li className="goods__item slider__item" ref={sliderItem}>
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-1@1x.webp 1x, img/product-photo-1@2x.webp 2x"
                          />
                          <img
                            src="https://via.placeholder.com/150

                    C/O https://placeholder.com/"
                            width="214"
                            height="248"
                            alt="Вращающийся стул Токио"
                            srcSet="/public/img/product-photo-1@1x.jpg 1x, img/product-photo-1@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Вращающийся стул Токио</h3>
                        <b className="product__price">
                          <span className="product__price-value">24 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product product--sale" href="#">
                      <b className="product__sale-label">
                        −<span className="product__sale-amount">30</span>%
                      </b>
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-2@1x.webp 1x, img/product-photo-2@2x.webp 2x"
                          />

                          <img
                            src="/public/img/product-photo-2@1x.jpg"
                            width="214"
                            height="248"
                            alt="Мягкое кресло Манн-Уитни"
                            srcSet="/public/img/product-photo-2@1x.jpg 1x, img/product-photo-2@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Мягкое кресло Манн-Уитни</h3>
                        <b className="product__price">
                          <span className="product__price-value">12 600</span>
                          <i className="rouble">i</i>
                          <span className="product__price-value product__price-value--old">18 000</span>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-3@1x.webp 1x, img/product-photo-3@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-3@1x.jpg"
                            width="214"
                            height="248"
                            alt="Кожаный диван Колумб"
                            srcSet="/public/img/product-photo-3@1x.jpg 1x, img/product-photo-3@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Кожаный диван Колумб</h3>
                        <b className="product__price">
                          <span className="product__price-value">125 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-4@1x.webp 1x, img/product-photo-4@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-4@1x.jpg"
                            width="214"
                            height="248"
                            alt="Диван Рэдмен"
                            srcSet="/public/img/product-photo-4@1x.jpg 1x, img/product-photo-4@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Диван Рэдмен</h3>
                        <b className="product__price">
                          <span className="product__price-value">82 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-5@1x.webp 1x, img/product-photo-5@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-5@1x.jpg"
                            width="214"
                            height="248"
                            alt="Прикроватный столик Пьер"
                            srcSet="/public/img/product-photo-5@1x.jpg 1x, img/product-photo-5@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Прикроватный столик Пьер</h3>
                        <b className="product__price">
                          <span className="product__price-value">16 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-6@1x.webp 1x, img/product-photo-6@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-6@1x.jpg"
                            width="214"
                            height="248"
                            alt="Стул Детройт"
                            srcSet="/public/img/product-photo-6@1x.jpg 1x, img/product-photo-6@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Стул Детройт</h3>
                        <b className="product__price">
                          <span className="product__price-value">12 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-7@1x.webp 1x, img/product-photo-7@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-7@1x.jpg"
                            width="214"
                            height="248"
                            alt="Тканевый диван Альфред"
                            srcSet="/public/img/product-photo-7@1x.jpg 1x, img/product-photo-7@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Тканевый диван Альфред</h3>
                        <b className="product__price">
                          <span className="product__price-value">92 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product product--sale" href="#">
                      <b className="product__sale-label">
                        −<span className="product__sale-amount">40</span>%
                      </b>
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-8@1x.webp 1x, img/product-photo-8@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-8@1x.jpg"
                            width="214"
                            height="248"
                            alt="Обеденный комплект для кухни Модерн"
                            srcSet="/public/img/product-photo-8@1x.jpg 1x, img/product-photo-8@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Обеденный комплект для кухни Модерн</h3>
                        <b className="product__price">
                          <span className="product__price-value">30 000</span>
                          <i className="rouble">i</i>
                          <span className="product__price-value product__price-value--old">50 000</span>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-9@1x.webp 1x, img/product-photo-9@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-9@1x.jpg"
                            width="214"
                            height="248"
                            alt="Мягкое кресло Фред"
                            srcSet="/public/img/product-photo-9@1x.jpg 1x, img/product-photo-9@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Мягкое кресло Фред</h3>
                        <b className="product__price">
                          <span className="product__price-value">61 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-10@1x.webp 1x, img/product-photo-10@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-10@1x.jpg"
                            width="214"
                            height="248"
                            alt="Медный светильник Конг"
                            srcSet="/public/img/product-photo-10@1x.jpg 1x, img/product-photo-10@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Медный светильник Конг</h3>
                        <b className="product__price">
                          <span className="product__price-value">10 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product product--sale" href="#">
                      <b className="product__sale-label">
                        −<span className="product__sale-amount">20</span>%
                      </b>
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-11@1x.webp 1x, img/product-photo-11@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-11@1x.jpg"
                            width="214"
                            height="248"
                            alt="Деревянный табурет Роган"
                            srcSet="/public/img/product-photo-11@1x.jpg 1x, img/product-photo-11@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Деревянный табурет Роган</h3>
                        <b className="product__price">
                          <span className="product__price-value">2 400</span>
                          <i className="rouble">i</i>
                          <span className="product__price-value product__price-value--old">3000</span>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-12@1x.webp 1x, img/product-photo-12@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-12@1x.jpg"
                            width="214"
                            height="248"
                            alt="Обеденный комплект для кухни Вууд"
                            srcSet="/public/img/product-photo-12@1x.jpg 1x, img/product-photo-12@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Обеденный комплект для кухни Вууд</h3>
                        <b className="product__price">
                          <span className="product__price-value">115 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-13@1x.webp 1x, img/product-photo-13@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-13@1x.jpg"
                            width="214"
                            height="248"
                            alt="Мягкое кресло Девил"
                            srcSet="/public/img/product-photo-13@1x.jpg 1x, img/product-photo-13@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Мягкое кресло Девил</h3>
                        <b className="product__price">
                          <span className="product__price-value">54 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-14@1x.webp 1x, img/product-photo-14@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-14@1x.jpg"
                            width="214"
                            height="248"
                            alt="Журнальный столик Ален"
                            srcSet="/public/img/product-photo-14@1x.jpg 1x, img/product-photo-14@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Журнальный столик Ален</h3>
                        <b className="product__price">
                          <span className="product__price-value">18 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-15@1x.webp 1x, img/product-photo-15@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-15@1x.jpg"
                            width="214"
                            height="248"
                            alt="Обеденный комплект для кухни Денвер"
                            srcSet="/public/img/product-photo-15@1x.jpg 1x, img/product-photo-15@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Обеденный комплект для кухни Денвер</h3>
                        <b className="product__price">
                          <span className="product__price-value">86 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-16@1x.webp 1x, img/product-photo-16@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-16@1x.jpg"
                            width="214"
                            height="248"
                            alt="Мягкое кресло Барби"
                            srcSet="/public/img/product-photo-16@1x.jpg 1x, img/product-photo-16@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Мягкое кресло Барби</h3>
                        <b className="product__price">
                          <span className="product__price-value">32 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-17@1x.webp 1x, img/product-photo-17@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-17@1x.jpg"
                            width="214"
                            height="248"
                            alt="Комплект для веранды Вест"
                            srcSet="/public/img/product-photo-17@1x.jpg 1x, img/product-photo-17@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Комплект для веранды Вест</h3>
                        <b className="product__price">
                          <span className="product__price-value">94 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-18@1x.webp 1x, img/product-photo-18@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-18@1x.jpg"
                            width="214"
                            height="248"
                            alt="Кресло Олдмен"
                            srcSet="/public/img/product-photo-18@1x.jpg 1x, img/product-photo-18@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Кресло Олдмен</h3>
                        <b className="product__price">
                          <span className="product__price-value">62 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product product--sale" href="#">
                      <b className="product__sale-label">
                        −<span className="product__sale-amount">30</span>%
                      </b>
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-19@1x.webp 1x, img/product-photo-19@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-19@1x.jpg"
                            width="214"
                            height="248"
                            alt="Детское кресло Манго"
                            srcSet="/public/img/product-photo-19@1x.jpg 1x, img/product-photo-19@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Детское кресло Манго</h3>
                        <b className="product__price">
                          <span className="product__price-value">8 400</span>
                          <i className="rouble">i</i>
                          <span className="product__price-value product__price-value--old">12 000</span>
                        </b>
                      </div>
                    </a>
                  </li>
                  <li className="goods__item slider__item">
                    <a className="product" href="#">
                      <div className="product__image">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="/public/img/product-photo-20@1x.webp 1x, img/product-photo-20@2x.webp 2x"
                          />
                          <img
                            src="/public/img/product-photo-20@1x.jpg"
                            width="214"
                            height="248"
                            alt="Деревянный комод Винди"
                            srcSet="/public/img/product-photo-20@1x.jpg 1x, img/product-photo-20@2x.jpg 2x"
                          />
                        </picture>
                      </div>
                      <div className="product__description">
                        <h3 className="product__heading">Деревянный комод Винди</h3>
                        <b className="product__price">
                          <span className="product__price-value">36 000</span>
                          <i className="rouble">i</i>
                        </b>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>{' '}
    </>
  );
}

export default App;
