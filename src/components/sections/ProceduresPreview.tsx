'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Heart, Sparkles, Syringe, Scissors, ArrowRight} from 'lucide-react';

const procedures = [
  {key: 'rhinoplasty', icon: Heart},
  {key: 'facelift', icon: Sparkles},
  {key: 'botox', icon: Syringe},
  {key: 'liposuction', icon: Scissors}
] as const;

export default function ProceduresPreview() {
  const t = useTranslations('procedures');
  const locale = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-[var(--gray-50)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--green-700)] bg-[var(--green-50)] px-4 py-2 rounded-full border border-[var(--green-200)] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[var(--green-500)]" />
            {t('eyebrow')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-[var(--gray-900)] mb-4">
            {t('title')}
          </h2>
          <p className="text-base text-[var(--gray-500)]">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map(({key, icon: Icon}, idx) => (
            <a
              key={key}
              href={`/procedures/${key}`}
              className={`group block bg-white rounded-sm border border-[var(--gray-200)] overflow-hidden card-hover animate-fade-in-up`}
              style={{animationDelay: `${200 + idx * 100}ms`}}
            >
              <div className="aspect-[4/3] bg-[var(--gray-100)] flex items-center justify-center relative overflow-hidden">
                <Icon className="w-12 h-12 text-[var(--green-400)] transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-500)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-2 group-hover:text-[var(--green-700)] transition-colors duration-300">
                  {t(`${key}.name`)}
                </h3>
                <p className="text-sm text-[var(--gray-500)] leading-relaxed mb-4">
                  {t(`${key}.shortDescription`)}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--green-600)] group-hover:text-[var(--green-700)] transition-colors">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Learn More'}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
