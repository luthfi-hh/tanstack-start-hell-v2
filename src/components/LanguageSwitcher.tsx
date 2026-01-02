import { getLocale, setLocale, locales } from '../paraglide/runtime.js'

export function LanguageSwitcher() {
  return (
    <div className="flex gap-2 text-lg">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => setLocale(locale)}
          data-active-locale={locale === getLocale()}
          className="rounded p-1 px-2 border border-gray-300 cursor-pointer data-[active-locale=true]:bg-gray-500 data-[active-locale=true]:text-white"
        >
          {locale}
        </button>
      ))}
    </div>
  )
}
