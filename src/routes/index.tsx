import { createFileRoute } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const locale = getLocale()
  const sampleName = locale === 'de' ? 'Mara' : 'Alex'
  const formattedDate = new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
  }).format(new Date())
  const formattedAmount = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: locale === 'de' ? 'EUR' : 'USD',
  }).format(12345.67)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            {m.home_kicker()}
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
            {m.home_title()}
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            {m.home_lead()}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              {m.home_locale_badge({ locale: locale.toUpperCase() })}
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-sm text-slate-300">
              {m.home_url_hint({ locale })}
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
            <p className="text-sm font-semibold text-cyan-300">
              {m.home_card_messages_title()}
            </p>
            <p className="mt-3 text-slate-300">
              {m.home_card_messages_body({ locale })}
            </p>
            <p className="mt-6 text-2xl font-semibold text-white">
              {m.home_greeting({ name: sampleName })}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
            <p className="text-sm font-semibold text-cyan-300">
              {m.home_card_date_title()}
            </p>
            <p className="mt-3 text-slate-300">
              {m.home_card_date_body({ date: formattedDate })}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
            <p className="text-sm font-semibold text-cyan-300">
              {m.home_card_number_title()}
            </p>
            <p className="mt-3 text-slate-300">
              {m.home_card_number_body({ amount: formattedAmount })}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 border-t border-slate-800 pt-8">
          <h2 className="text-lg font-semibold text-white">
            {m.home_next_steps_title()}
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
            <li>{m.home_next_steps_item_messages()}</li>
            <li>{m.home_next_steps_item_routes()}</li>
            <li>{m.home_next_steps_item_formats()}</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
