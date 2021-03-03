import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Vk } from '../../assets/icons/vk.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import './Footer.scss';

export const Footer: FC<{}> = () => {
  const { t } = useTranslation();

  const addressUrl = "https://yandex.ru/maps/20674/troitsk/house/ulitsa_tekstilshchikov_3/Z04YdQdoQUICQFtvfXh4cXpmZQ==/?ll=37.308875%2C55.490651&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=17";

  return (
    <footer className="footer p-3">
      <div className="container row align-items-center justify-content-center">
        <div className="col-xl-4">
          <div className="p-3 d-flex flex-column align-items-center">
            <div className="mb-1">© Egmart LLC 2020</div>
            <div className="d-flex">
              <a href="#"><Vk className="mr-3" /></a>
              <a href="#"><Facebook className="mr-3" /></a>
              <a href="#"><Instagram className="mr-3" /></a>
              <a href="#"><Youtube className="mr-3" /></a>
              <a href="#"><Twitter className="mr-3" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="p-3 px-xl-5 d-flex flex-column align-items-center">
            <a className="d-block mb-1" href="mailto:info@egmart.ru"><Mail className="mr-3" /> info@egmart.ru</a>
            <a href="tel:+7 (925) 728-15-75"><Phone className="mr-3" /> +7 (925) 728-15-75</a>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="p-3 d-flex flex-column align-items-center">
            <a href={addressUrl} className="d-flex">
              <Location className="flex-schrink-0 mr-3" />
              {t('footer.address')}
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}