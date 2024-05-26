
import { createI18n } from 'vue-i18n';
// import translations
import ar from "./locales/ar.json";
import en from "./locales/en.json";

function loadLocalMessages() {
    const locales = [{ en: en }, { ar: ar }];
    const messages = {};
    locales.forEach(lang => {
        const key = Object.keys(lang);
        messages[key] = lang[key];
    });
    return messages;
}

export default createI18n({
    locale: "ar",
    fallbackLocale: "en",

    messages: loadLocalMessages()
});