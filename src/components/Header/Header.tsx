import React, { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
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
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3">
          <NavLink to="/main"><img className="logo" src={logo} alt="Logo"></img></NavLink>

          {/* Visible on desktop */}
          <div className="menu">
            <NavLink className="menu__item" activeClassName="active" to="/main" >{t('header.main')}</NavLink>
            <NavLink className="menu__item" activeClassName="active" to="/about">{t('header.about')}</NavLink>
            <NavLink className="menu__item" activeClassName="active" to="/contacts">{t('header.contacts')}</NavLink>
            <LanguageSelect />
          </div>

          {/* Visible on mobile and tablets */}
          <div className="hamburger-menu">
            <input className="hamburger-menu__toggle" id="toggle-checkbox" type="checkbox" ref={checkbox} onClick={handleBurgerClick} />
            <label className="hamburger-menu__btn" htmlFor="toggle-checkbox">
              <span></span>
            </label>

            <div className="hamburger-menu__box">
              <NavLink onClick={closeMenu} className="hamburger-menu__item" activeClassName="active" to="/main">{t('header.main')}</NavLink>
              <NavLink onClick={closeMenu} className="hamburger-menu__item" activeClassName="active" to="/about">{t('header.about')}</NavLink>
              <NavLink onClick={closeMenu} className="hamburger-menu__item" activeClassName="active" to="/contacts">{t('header.contacts')}</NavLink>
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
      </div>
    </header>
  );
}