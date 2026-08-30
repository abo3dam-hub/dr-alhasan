'use client';

import {useTranslations, useLocale} from 'next-intl';
import {ArrowRight, Sparkles} from 'lucide-react';

const procedures = [
  {key: 'rhinoplasty', emoji: '👃'},
  {key: 'facelift', emoji: '✨'},
  {key: 'botox', emoji: '💉'},
  {key: 'liposuction', emoji: '🔧'}
] as const;

export default function ProceduresPreview() {
  const t = useTranslations('procedures');
  const locale = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-5 py-2.5 rounded-full border border-[var(--gold-200)] mb-6">
            <Sparkles className="w-4 h-4 text-[var(--gold-500)]" />
            {t('eyebrow')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-base text-gray-500">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map(({key, emoji}, idx) => (
            <a
              key={key}
              href={`/procedures/${key}`}
              className={`group block bg-white rounded-lg border border-gray-200 overflow-hidden card-hover animate-fade-in-up`}
              style={{animationDelay: `${200 + idx * 100}ms`}}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <span className="text-5xl transition-transform duration-500 group-hover:scale-110">{emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold-500)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--gold-700)] transition-colors duration-300">
                  {t(`${key}.name`)}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {t(`${key}.shortDescription`)}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold-600)] group-hover:text-[var(--gold-700)] transition-colors">
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
