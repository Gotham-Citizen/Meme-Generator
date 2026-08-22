import trollFace from "../media/troll-face.png"
import { useTranslation } from "react-i18next"

export default function Header() {
    const { t, i18n } = useTranslation()

    function handleLanguageChange(e) {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>{t("header.title")}</h1>
            <select
                className="language-switcher"
                value={i18n.language.startsWith("zh") ? "zh" : i18n.language.startsWith("es") ? "es" : "en"}
                onChange={handleLanguageChange}
                aria-label="Language"
            >
                <option value="en">EN</option>
                <option value="zh">中文</option>
                <option value="es">ES</option>
            </select>
        </header>
    )
}
