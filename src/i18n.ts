import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Languages } from "@/types";
import translationBG from "@/locales/bg/translation.json";
import translationEN from "@/locales/en/translation.json";

const resources = {
  [Languages.EN]: {
    translation: translationEN,
  },
  [Languages.BG]: {
    translation: translationBG,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Languages.EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
