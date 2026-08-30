'use client';

import {useTranslations, useLocale} from 'next-intl';
import {ArrowRight, Sparkles, ChevronRight} from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative accent line - top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-400)]/40 to-transparent" />

      {/* Decorative circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[var(--purple-200)]/30 opacity-50" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full border border-[var(--gold-200)]/30 opacity-50" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-4 lg:px-12 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-5 py-2.5 rounded-full border border-[var(--gold-200)]">
              <Sparkles className="w-4 h-4 text-[var(--gold-500)]" />
              {t('eyebrow')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-8 animate-fade-in-up delay-200">
            {t('title')}
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mb-12 animate-fade-in-up delay-300">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold bg-[var(--gold-600)] text-white rounded-full hover:bg-[var(--gold-700)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              {t('book')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/procedures"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-gray-700 border-2 border-gray-300 rounded-full hover:border-[var(--purple-400)] hover:text-[var(--purple-700)] transition-all duration-300 hover:bg-[var(--purple-50)]"
            >
              {t('explore')}
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
