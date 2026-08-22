import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./locales/en.json"
import zh from "./locales/zh.json"
import es from "./locales/es.json"

function detectLanguage() {
    const lang = navigator.language || ""
    if (lang.toLowerCase().startsWith("zh")) return "zh"
    if (lang.toLowerCase().startsWith("es")) return "es"
    return "en"
}

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        zh: { translation: zh },
        es: { translation: es }
    },
    lng: detectLanguage(),
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
})

export default i18n
