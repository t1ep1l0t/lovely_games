import {createI18n} from "vue-i18n";
import en from '@/locales/en.json';
import ru from '@/locales/ru.json'

type MessageSchema = typeof en;


// @ts-ignore
const i18n = createI18n<[MessageSchema], 'en', 'ru'>({
    locale: 'en',
    fallbackLocale: 'en',
    allowComposition: true,
    legacy: false,
    globalInjection: true,
    messages: {
        en: en,
        ru: ru
    }
});

export default i18n;