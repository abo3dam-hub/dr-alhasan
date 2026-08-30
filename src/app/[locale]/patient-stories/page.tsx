import {getTranslations} from 'next-intl/server';

export default async function PatientStoriesPage() {
  const t = await getTranslations();

  return (
    <main className="bg-[var(--gray-50)]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--green-700)] bg-[var(--green-50)] px-4 py-2 rounded-full border border-[var(--green-200)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-500)] animate-pulse" />
              {t('nav.patientStories')}
            </span>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-[var(--gray-900)] mb-6">
              {t('nav.patientStories')}
            </h1>
            <p className="text-lg text-[var(--gray-500)] leading-relaxed">
              {t('testimonials.title')}
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-8">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="bg-white border border-[var(--gray-200)] rounded-sm p-8 hover:border-[var(--green-300)] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--green-50)] flex items-center justify-center">
                    <span className="text-[var(--green-600)] font-semibold">{idx}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                      {t(`testimonials.testimonial${idx}.name`)}
                    </h3>
                    <p className="text-sm text-[var(--gray-500)]">
                      {t(`testimonials.testimonial${idx}.procedure`)}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--gray-600)] leading-relaxed">
                  &ldquo;{t(`testimonials.testimonial${idx}.quote`)}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
