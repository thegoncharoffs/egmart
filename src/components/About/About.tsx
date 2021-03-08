import React, { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import team from '../../assets/images/team.jpg';
import avatar from '../../assets/images/avatar.png';
import Typed from 'typed.js';
import { Gallery, Item } from 'react-photoswipe-gallery'
import './About.scss';

export const About: FC<{}> = () => {
  const { t } = useTranslation();
  const typed = useRef<Typed>();

  useEffect(() => {
    typed.current = new Typed("#typed", {
      strings: [t('about.photo.text1'), t('about.photo.text2'), t('about.photo.text3')],
      showCursor: false,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 1000,
      startDelay: 0,
      loop: true,
    });
    window.scrollTo(0, 0);

    return () => typed.current?.destroy();
  }, [])


  return (
    <>
      <section className="photo" style={{ backgroundImage: `url(${team})` }}>
        <div className="container">
          <span className="photo__text" id="typed"></span>
        </div>
      </section>

      <section className="description container">
        <div className="description__text my-5 p-5">{t('main.description')}</div>
      </section>

      <section className='photo-gallery container'>
        <div className="row">


          <Gallery shareButton={false}>
            <Item
              original="https://placekitten.com/1024/768?image=1"
              thumbnail="https://placekitten.com/240/180?image=1"
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  className="col-md-3 col-6 mb-3"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                  src="https://placekitten.com/240/180?image=1"
                />
              )}
            </Item>
            <Item
              original="https://placekitten.com/1024/768?image=2"
              thumbnail="https://placekitten.com/240/180?image=2"
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  className="col-md-3 col-6 mb-3"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                  src="https://placekitten.com/240/180?image=2"
                />
              )}
            </Item>
            <Item
              original="https://placekitten.com/1024/768?image=1"
              thumbnail="https://placekitten.com/240/180?image=1"
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  className="col-md-3 col-6 mb-3"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                  src="https://placekitten.com/240/180?image=1"
                />
              )}
            </Item>
            <Item
              original="https://placekitten.com/1024/768?image=2"
              thumbnail="https://placekitten.com/240/180?image=2"
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  className="col-md-3 col-6 mb-3"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                  src="https://placekitten.com/240/180?image=2"
                />
              )}
            </Item>
          </Gallery>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h1 className="font-weight-bold pt-5 text-center">
            <span>{t('about.team.title')}</span>
          </h1>

          <div className="row my-5 pt-5">
            <div className="team__card col-6 col-md-3 mb-5">
              <img className="team__photo mb-3" src={avatar} alt="Member Photo" />
              <h5 className="team__name">{t('about.team.member1.name')}</h5>
              <span className="team__job">{t('about.team.member1.job')}</span>
            </div>

            <div className="team__card col-6  col-md-3 mb-5">
              <img className="team__photo mb-3" src={avatar} alt="Member Photo" />
              <h5 className="team__name">{t('about.team.member1.name')}</h5>
              <span className="team__job">{t('about.team.member1.job')}</span>
            </div>

            <div className="team__card col-6 col-md-3 mb-5">
              <img className="team__photo mb-3" src={avatar} alt="Member Photo" />
              <h5 className="team__name">{t('about.team.member1.name')}</h5>
              <span className="team__job">{t('about.team.member1.job')}</span>
            </div>

            <div className="team__card col-6 col-md-3 mb-5">
              <img className="team__photo mb-3" src={avatar} alt="Member Photo" />
              <h5 className="team__name">{t('about.team.member1.name')}</h5>
              <span className="team__job">{t('about.team.member1.job')}</span>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}