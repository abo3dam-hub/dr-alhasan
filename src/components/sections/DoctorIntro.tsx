'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Clock, Users, Award, Stethoscope} from 'lucide-react';

const stats = [
  {key: 'years', icon: Clock},
  {key: 'patients', icon: Users},
  {key: 'certifications', icon: Award}
] as const;

export default function DoctorIntro() {
  const t = useTranslations('doctor');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative aspect-[3/4] bg-[var(--gray-100)] rounded-sm overflow-hidden group hover-lift ${isRtl ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--gray-400)] transition-transform duration-500 group-hover:scale-105">
              <Stethoscope className="w-16 h-16 mb-4 text-[var(--green-400)]" />
              <span className="text-sm">{t('imagePlaceholder')}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--green-500)] to-transparent" />
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[var(--purple-300)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[var(--purple-300)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Text */}
          <div className={`space-y-6 ${isRtl ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
            <div className="animate-fade-in-up delay-200">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--green-700)] bg-[var(--green-50)] px-4 py-2 rounded-full border border-[var(--green-200)]">
                <Stethoscope className="w-3.5 h-3.5 text-[var(--green-500)]" />
                {t('eyebrow')}
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-[var(--gray-900)] animate-fade-in-up delay-300">
              {t('title')}
            </h2>

            <p className="text-base lg:text-lg text-[var(--gray-600)] leading-relaxed animate-fade-in-up delay-400">
              {t('description')}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--gray-200)] animate-fade-in-up delay-500">
              {stats.map(({key, icon: Icon}, idx) => (
                <div key={key} className={`text-center animate-scale-in`} style={{animationDelay: `${600 + idx * 100}ms`}}>
                  <div className="w-10 h-10 rounded-full bg-[var(--green-50)] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-4 h-4 text-[var(--green-600)]" />
                  </div>
                  <p className="text-xs text-[var(--gray-500)] leading-snug">
                    {t(`stats.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
