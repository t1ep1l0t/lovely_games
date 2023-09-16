import i18n from "@/plugins/i18n.config";

const translation = {
    get defaultLocale() :string {
        return 'en';
    },

    get supportedLocales() :string[] {
        return ['en', 'ru'];
    },

    get currentLocale() :string {
        return i18n.global.locale.value;
    },

    set currentLocale(newLocale :string) {

        i18n.global.locale.value = newLocale
    },

    switchLanguage(newLocale :string) {

        const url_locale = window.location.href.split('/');
        url_locale[3] = newLocale;

        if(newLocale !== localStorage.getItem('user-locale')) {
            window.location.href = url_locale.join('/');
        }

        translation.currentLocale = newLocale;

        document.querySelector("html").setAttribute("lang", newLocale);

        localStorage.setItem("user-locale", newLocale)
    },

    isLocaleSupported(locale :string | null) {
        if (locale) {
            return translation.supportedLocales.includes(locale)
        }
        return false
    },

    getUserLocale() {
        const locale = window.navigator.language ||
            window.navigator.userLanguage ||
            translation.defaultLocale

        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    },

    getPersistedLocale() {
        const persistedLocale :string | null = localStorage.getItem("user-locale")

        if(translation.isLocaleSupported(persistedLocale)) {
            return persistedLocale
        } else {
            return null
        }
    },

    guessDefaultLocale() {
        const userPersistedLocale = translation.getPersistedLocale()
        if(userPersistedLocale) {
            return userPersistedLocale
        }

        const userPreferredLocale = translation.getUserLocale()

        if (translation.isLocaleSupported(userPreferredLocale.locale)) {
            return userPreferredLocale.locale
        }

        if (translation.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
            return userPreferredLocale.localeNoRegion
        }

        return translation.defaultLocale
    },

    async routeMiddleware(to, _from, next) {
        const paramLocale = to.params.locale

        if(!translation.isLocaleSupported(paramLocale)) {
            return next(translation.guessDefaultLocale())
        }

        await translation.switchLanguage(paramLocale)

        return next()
    },

    i18nRoute(to) {
        return {
            ...to,
            params: {
                locale: translation.currentLocale,
                ...to.params
            }
        }
    }
}

export default translation;