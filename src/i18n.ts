import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  .use(LanguageDetector)
  .use(initReactI18next)
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
                english: "English",
                spanish: "Spanish"
            },
            links: {
              profile: "PROFILE",
              education: "EDUCATION",
              experience: "EXPERIENCE",
              abilities: "ABILITIES",
              contact: "CONTACT"
            },
            personal_info: {
              fullname: "Nestor Fernandez",
              software_engineer: "Software Engineer",
              software_developer: "Software Developer",
              frontend_developer: "Frontend Developer",
              backend_developer: "Backend Developer",
              fullstack_developer: "FullStack Web Developer"
            },
            copyright: "Copyright © 2022 Nestor Fernandez"
        }
      },
      es: {
        translation: {
            header: {
                english: "Inglés",
                spanish: "Español"
            },
            links: {
              profile: "PERFIL",
              education: "EDUCACIÓN",
              experience: "EXPERIENCIA",
              abilities: "HABILIDADES",
              contact: "CONTACTO"
            },
            personal_info: {
              fullname: "Néstor Fernández",
              software_engineer: "Ingenierio del Software",
              software_developer: "Desarrollador Software",
              frontend_developer: "Desarrollador Frontend",
              backend_developer: "Desarrollador Backend",
              fullstack_developer: "Desarrollador Web FullStack"
            },
            copyright: "Copyright © 2022 Néstor Fernández"

        }
      }
    }
  });

export default i18n;