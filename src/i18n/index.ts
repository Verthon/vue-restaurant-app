import Vue from 'vue'
import VueI18n from 'vue-i18n'
/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */

import messagesEn from '@/i18n/en.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: messagesEn
  },
  preserveDirectiveContent: true
})

const loadedLocales = ['en']

function setI18nLocale (locale: string) {
  i18n.locale = locale
  const selector = document?.querySelector('html')
  if (selector) {
    selector.setAttribute('locale', locale)
  }
  return locale
}

export async function loadLocaleAsync (locale: string) {
  if (i18n.locale !== locale) {
    if (!loadedLocales.includes(locale)) {
      const msgs = await import(/* webpackChunkName: "locale-[request]" */ `@/i18n/${locale}.json`)
      i18n.setLocaleMessage(locale, msgs.default)
      loadedLocales.push(locale)
      localStorage.setItem('locale', locale)
      return setI18nLocale(locale)
    }
    localStorage.setItem('locale', locale)
    return Promise.resolve(setI18nLocale(locale))
  }
  return Promise.resolve(locale)
}
