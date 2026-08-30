'use client';

import {useTranslations} from 'next-intl';
import {Star, Quote} from 'lucide-react';

const testimonials = [
  {key: 'testimonial1'},
  {key: 'testimonial2'},
  {key: 'testimonial3'}
] as const;

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-24 lg:py-32 bg-[var(--gray-50)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-4 py-2 rounded-full border border-[var(--gold-200)] mb-6">
            <Star className="w-3.5 h-3.5 text-[var(--gold-500)]" />
            {t('eyebrow')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-[var(--gray-900)]">
            {t('title')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({key}, idx) => (
            <div
              key={key}
              className={`bg-white border border-[var(--gray-200)] rounded-sm p-8 relative group card-hover animate-fade-in-up`}
              style={{animationDelay: `${200 + idx * 150}ms`}}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="w-8 h-8 text-[var(--purple-400)]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({length: 5}).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--gold-500)] text-[var(--gold-500)] animate-scale-in"
                    style={{animationDelay: `${500 + i * 100}ms`}}
                  />
                ))}
              </div>

              <p className="text-sm text-[var(--gray-600)] leading-relaxed mb-6 relative z-10">
                &ldquo;{t(`${key}.quote`)}&rdquo;
              </p>

              <div className="border-t border-[var(--gray-200)] pt-4">
                <p className="text-sm font-semibold text-[var(--gray-900)]">
                  {t(`${key}.name`)}
                </p>
                <p className="text-xs text-[var(--gray-400)] mt-0.5">
                  {t(`${key}.procedure`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
