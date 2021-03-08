import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Contacts.scss';

export const Contacts: FC<{}> = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="contacts py-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4 my-3 d-flex flex-column">
              <h1 className="font-weight-bold mb-3">{t('contacts.address.title')}</h1>
              <span>{t('contacts.address.text')}</span>
            </div>
            <div className="col-md-4 my-3 d-flex flex-column">
              <h1 className="font-weight-bold mb-3">{t('contacts.phones')}</h1>
              <span>+7 (925) 728-15-75</span>
              <span>+7 (495) 532-19-72</span>
            </div>
            <div className="col-md-4 my-3 d-flex flex-column">
              <h1 className="font-weight-bold mb-3">{t('contacts.mail')}</h1>
              <span>zakaz@egmart.ru</span>
            </div>
          </div>
        </div>

      </section>

      <section className="maps">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9c8101cdc3acb473766e20682a147cccceb73192e706df5e02cf3f54e7b5815c&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
      </section>

      <section className="schema container my-5">
        <h1 className="font-weight-bold mb-5">{t('contacts.schema.title')}</h1>
        <div className="ml-5">
          <h4 className="font-weight-bold mb-3 schema__subtitle">{t('contacts.schema.car.title')}</h4>
          <p className="mb-5">{t('contacts.schema.car.description')}</p>
          <h4 className="font-weight-bold mb-3 schema__subtitle">{t('contacts.schema.public-transport.title')}</h4>
          <p className="mb-3">{t('contacts.schema.public-transport.description')}</p>
        </div>
      </section>
    </>
  );
}