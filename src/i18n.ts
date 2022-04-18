import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            header: {
                developer: "developer",
                english: "English",
                spanish: "Spanish"
            },
            links: {
              home: "home",
              experience: "experience",
              abilities: "abilities",
              contact: "contact"
            }
        }
      },
      es: {
        translation: {
            header: {
                developer: "desarrollador",
                english: "Inglés",
                spanish: "Español"
            },
            links: {
              home: "inicio",
              experience: "experiencia",
              abilities: "habilidades",
              contact: "contacto"
            }
        }
      }
    }
  });

export default i18n;