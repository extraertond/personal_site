import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    }
};

i18n
    // detect user language
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        resources
    });

export default i18n;
