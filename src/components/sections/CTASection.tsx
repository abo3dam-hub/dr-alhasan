'use client';

import {useTranslations, useLocale} from 'next-intl';
import {ArrowRight, Sparkles} from 'lucide-react';

export default function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-[var(--gray-900)] relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--gold-500)]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-12 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold-400)] bg-[var(--gold-900)]/30 px-4 py-2 rounded-full border border-[var(--gold-800)] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-400)]" />
            {t('eyebrow')}
          </span>
        </div>

        <h2 className="text-3xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-gray-50 mb-6 animate-fade-in-up delay-200">
          {t('title')}
        </h2>

        <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-10 animate-fade-in-up delay-300">
          {t('description')}
        </p>

        <div className="animate-fade-in-up delay-400">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-medium bg-[var(--gold-500)] text-white rounded-full hover:bg-[var(--gold-400)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            {t('book')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
