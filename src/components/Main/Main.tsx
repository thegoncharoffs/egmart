import React, { FC } from 'react';
import { Slideshow } from '../Slideshow';
import chickens from '../../assets/images/chickens.jpg';
import { ReactComponent as Medal } from '../../assets/icons/medal.svg';
import { ReactComponent as Delivery } from '../../assets/icons/delivery.svg';
import { ReactComponent as Support } from '../../assets/icons/support.svg';
import avatar from '../../assets/images/avatar.png';
import { useTranslation } from 'react-i18next';
import ReactPlayer from "react-player"
import './Main.scss';

export const Main: FC<{}> = () => {
  const { t } = useTranslation();

  const slideshowItems = [
    {
      title: t('main.slideshow.title1'),
      text:  t('main.slideshow.text1'),
      image: chickens
    },
    {
      title: t('main.slideshow.title2'),
      text:  t('main.slideshow.text2'),
      image: chickens
    },
    {
      title: t('main.slideshow.title3'),
      text:  t('main.slideshow.text3'),
      image: chickens
    }
  ]
  return (
    <>
      <section className="slideshow">
        <Slideshow items={slideshowItems} />
      </section>

      <section className="description container">
        <div className="description__text my-5 p-5">{t('main.description')}</div>
      </section>

      <section className="video">
        <div className="container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=mAxnztf6_5g"
            width='100%'
            height='100%'
          />
        </div>
      </section>

      <section className="advantages container">
        <div className="row my-5 justify-content-between align-items-center">
          <div className="advantages__tile col-lg-3 py-4 m-3">
            <h2 className="font-weight-bold">
              {t('main.advantages.quality.title')}
            </h2>
            <Medal className="my-2" />
            <h4 className="font-weight-bold mb-3">
              {t('main.advantages.quality.subtitle')}
            </h4>
            <div className="advantages__tile-text">
              {t('main.advantages.quality.text')}
            </div>
          </div>

          <div className="advantages__tile col-lg-3 py-4 m-3">
            <h2 className="font-weight-bold">
              {t('main.advantages.quality.title')}
            </h2>
            <Delivery className="my-2" />
            <h4 className="font-weight-bold mb-3">
              {t('main.advantages.quality.subtitle')}
            </h4>
            <div className="advantages__tile-text">
              {t('main.advantages.quality.text')}
            </div>
          </div>

          <div className="advantages__tile col-lg-3 py-4 m-3">
            <h2 className="font-weight-bold">
              {t('main.advantages.quality.title')}
            </h2>
            <Support className="my-2" />
            <h4 className="font-weight-bold mb-3">
              {t('main.advantages.quality.subtitle')}
            </h4>
            <div className="advantages__tile-text">
              {t('main.advantages.quality.text')}
            </div>
          </div>
        </div>
      </section>

      <section className="quote container">
        <div className="row my-5">
          <div className="col-md-3 d-flex justify-content-center">
            <img className="quote__avatar mb-3" src={avatar} />
          </div>

          <div className="col-md-9">
            <div className="quote__text">{t('main.quote.text')}</div>
            <div className="quote__job">{t('main.quote.job')}</div>
          </div>
        </div>
      </section>

      <section className="statistics">
        <div className="container">
          <h1 className="font-weight-bold pt-5 text-center">{t('main.statistics.title')}</h1>

          <div className="row py-5">
            <div className="col-md-4 d-flex flex-column align-items-center mb-3">
              <div className="statistics__count">385</div>
              <div className="statistics__text">{t('main.statistics.deliveries')}</div>
            </div>

            <div className="col-md-4 d-flex flex-column align-items-center mb-3 statistics__center">
              <div className="statistics__count">109.232</div>
              <div className="statistics__text">{t('main.statistics.sold')}</div>
            </div>

            <div className="col-md-4 d-flex flex-column align-items-center mb-3">
              <div className="statistics__count">98%</div>
              <div className="statistics__text">{t('main.statistics.satisfaction')}</div>
            </div>

          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <h1 className="font-weight-bold pt-5 text-center">
            <span>{t('main.partners')}</span>
          </h1>

          <div className="row my-5 pt-5">
            <a className="col-md-3 mb-3 d-flex justify-content-center" href="#">
              <img src={avatar} />
            </a>

            <a className="col-md-3 mb-3 d-flex justify-content-center" href="#">
              <img src={avatar} />
            </a>

            <a className="col-md-3 mb-3 d-flex justify-content-center" href="#">
              <img src={avatar} />
            </a>

            <a className="col-md-3 mb-3 d-flex justify-content-center" href="#">
              <img src={avatar} />
            </a>
          </div>
          
        </div>
      </section>
    </>
  );
}

