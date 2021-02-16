import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { ReactComponent as EnFlag } from '../../assets/icons/en.svg';
import { ReactComponent as RuFlag } from '../../assets/icons/ru.svg';

import './LanguageSelect.scss';

export const LanguageSelect: FC<{}> = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  const setLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  }

  const getFlag = () => {
    switch (i18n.language) {
      case 'ru':
        return <RuFlag />;
      case 'en':
        return <EnFlag />;
      default:
        break;
    }
  }

  return (
    <div className="language-select" tabIndex={0} onBlur={() => setOpen(false)}>
      <div className="language-select__icon" onClick={() => setOpen(!open)}>
        {getFlag()}
      </div>
      <div className={
        cx("language-select__items", {
          open: open,
        })
      }>
        <div className="language-select__item" onClick={() => setLanguage('ru')}>
          Русский
        </div>
        <div className="language-select__item" onClick={() => setLanguage('en')}>
          English
        </div>
      </div>
    </div>
  );
}