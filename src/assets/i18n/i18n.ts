import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from './ru.json';
import en from './en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ru: {
        translation: ru,
      },
      en: {
        translation: en,
      },
    },
    lng: "ru",
    fallbackLng: "ru",
    supportedLngs: ['ru', 'en'],
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;