import React, { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import team from '../../assets/images/team.jpg';
import avatar from '../../assets/images/avatar.png';
import Typed from 'typed.js';
import './About.scss';

export const About: FC<{}> = () => {
  const { t, i18n } = useTranslation();
  const typed = useRef<Typed>();

  useEffect(() => {
    i18n.on('languageChanged', () => {
      typed.current?.destroy();
      typed.current = new Typed("#typed", {
        strings: [t('about.photo.text1'), t('about.photo.text2'), t('about.photo.text3')],
        showCursor: false,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1000,
        loop: true,
      });
    })

    typed.current = new Typed("#typed", {
      strings: [t('about.photo.text1'), t('about.photo.text2'), t('about.photo.text3')],
      showCursor: false,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true,
    });

    return () => typed.current?.destroy();
  }, [])


  return (
    <>
      <section className="photo" style={{ backgroundImage: `url(${team})` }}>
        <div className="container">
          <span className="photo__text px-3" id="typed"></span>
        </div>
      </section>

      <section className="description container">
        <div className="description__text my-5 p-5">{t('main.description')}</div>
      </section>

      <section className="team">
        <div className="container">
          <h1 className="font-weight-bold pt-5 text-center">
            <span>{t('about.team.title')}</span>
          </h1>

          <div className="row my-5 pt-5">
            <div className="team__card col-md-3 mb-5">
              <img className="team__photo mb-3" src={avatar} />
              <h5 className="team__name">{t('about.team.member1.name')}</h5>
              <span className="team__job">{t('about.team.member1.job')}</span>
            </div>

            <div className="team__card col-md-3 mb-5">
              <img className="team__photo mb-3" src={avatar} />
              <h5 className="team__name">{t('about.team.member1.name')}</h5>
              <span className="team__job">{t('about.team.member1.job')}</span>
            </div>

            <div className="team__card col-md-3 mb-5">
              <img className="team__photo mb-3" src={avatar} />
              <h5 className="team__name">{t('about.team.member1.name')}</h5>
              <span className="team__job">{t('about.team.member1.job')}</span>
            </div>

            <div className="team__card col-md-3 mb-5">
              <img className="team__photo mb-3" src={avatar} />
              <h5 className="team__name">{t('about.team.member1.name')}</h5>
              <span className="team__job">{t('about.team.member1.job')}</span>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}