import React, { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import cx from 'classnames';
import { LanguageSelect } from '../LanguageSelect';
import logo from '../../assets/images/logo.png';

import './Header.scss';

export const Header: FC<{}> = () => {
  const { t, i18n } = useTranslation();
  const checkbox = useRef<HTMLInputElement>(null);

  const closeMenu = (): void => {
    if (checkbox.current?.value) {
      checkbox.current.checked = false;
    }
    handleBurgerClick();
  }

  const handleBurgerClick = (): void => {
    document.body.classList.toggle('overflow-hidden', checkbox.current?.checked);
  }

  useEffect(() => {
    window.addEventListener('resize', closeMenu)

    return () => {
      window.removeEventListener('resize', closeMenu);
    }
  }, [])

  return (
    <header className="container">
      <div className="d-flex justify-content-between align-items-center my-3">
        <Link to="/main"><img className="logo" src={logo}></img></Link>

        {/* Visible on desktop */}
        <div className="menu">
          <Link className="menu__item" to="/main" >{t('header.main')}</Link>
          <Link className="menu__item" to="/about">{t('header.about')}</Link>
          <Link className="menu__item" to="/contacts">{t('header.contacts')}</Link>
          <LanguageSelect />
        </div>

        {/* Visible on mobile and tablets */}
        <div className="hamburger-menu">
          <input className="hamburger-menu__toggle" id="toggle-checkbox" type="checkbox" ref={checkbox} onClick={handleBurgerClick} />
          <label className="hamburger-menu__btn" htmlFor="toggle-checkbox">
            <span></span>
          </label>

          <div className="hamburger-menu__box">
            <Link onClick={closeMenu} className="hamburger-menu__item" to="/main">{t('header.main')}</Link>
            <Link onClick={closeMenu} className="hamburger-menu__item" to="/about">{t('header.about')}</Link>
            <Link onClick={closeMenu} className="hamburger-menu__item" to="/contacts">{t('header.contacts')}</Link>
            <div className="d-flex justify-content-center mt-3">
              <button
                className={cx("btn btn-lg btn-outline-light mx-2", { active: i18n.language === 'ru' })}
                onClick={() => i18n.changeLanguage('ru')}
              >
                RU
              </button>
              <button
                className={cx("btn btn-lg btn-outline-light mx-2", { active: i18n.language === 'en' })}
                onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}