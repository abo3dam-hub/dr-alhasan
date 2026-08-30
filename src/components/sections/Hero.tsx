'use client';

import {useTranslations, useLocale} from 'next-intl';
import {ArrowRight, Sparkles, ChevronRight} from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="min-h-screen flex items-center bg-[var(--gray-50)] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(var(--gray-900) 1px, transparent 1px), linear-gradient(90deg, var(--gray-900) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Decorative accent line - top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-400)]/30 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-4 py-2 rounded-full border border-[var(--gold-200)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--gold-500)]" />
              {t('eyebrow')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-[var(--gray-900)] mb-8 animate-fade-in-up delay-200">
            {t('title')}
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-[var(--gray-600)] leading-relaxed max-w-xl mb-12 animate-fade-in-up delay-300">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium bg-[var(--gold-600)] text-white rounded-full hover:bg-[var(--gold-700)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              {t('book')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/procedures"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-[var(--gray-700)] border border-[var(--gray-300)] rounded-full hover:border-[var(--purple-400)] hover:text-[var(--purple-700)] transition-all duration-300 hover:bg-[var(--purple-50)]"
            >
              {t('explore')}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -translate-y-1/2 right-12 hidden xl:block animate-fade-in-left delay-600">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--gold-400)]/40 to-transparent" />
        </div>

        <div className="absolute bottom-20 right-20 hidden xl:block animate-scale-in delay-800">
          <div className="w-32 h-32 rounded-full border border-[var(--purple-200)]" />
        </div>
      </div>
    </section>
  );
}
