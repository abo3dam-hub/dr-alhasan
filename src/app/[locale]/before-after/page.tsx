import {getTranslations} from 'next-intl/server';

export default async function BeforeAfterPage() {
  const t = await getTranslations();

  return (
    <main className="bg-[var(--gray-50)]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--green-700)] bg-[var(--green-50)] px-4 py-2 rounded-full border border-[var(--green-200)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-500)] animate-pulse" />
              {t('nav.beforeAfter')}
            </span>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-[var(--gray-900)] mb-6">
              {t('nav.beforeAfter')}
            </h1>
            <p className="text-lg text-[var(--gray-500)] leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="bg-white border border-[var(--gray-200)] rounded-sm overflow-hidden">
                <div className="aspect-[4/3] bg-[var(--gray-100)] flex items-center justify-center">
                  <span className="text-[var(--gray-400)]">{t('nav.beforeAfter')} {idx}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-2">
                    {t('procedures.rhinoplasty.name')}
                  </h3>
                  <p className="text-sm text-[var(--gray-500)]">
                    {t('procedures.rhinoplasty.shortDescription')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
