'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import {Star, Quote} from 'lucide-react';

const testimonials = [
  {key: 'testimonial1'},
  {key: 'testimonial2'},
  {key: 'testimonial3'}
] as const;

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-[var(--ivory)] relative">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--champagne-muted)] mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-[var(--charcoal-deep)]">
            {t('title')}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({key}, idx) => (
            <motion.div
              key={key}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{duration: 0.6, delay: idx * 0.12}}
              className="bg-[var(--cream)] border border-[var(--border-light)] rounded-sm p-8 relative group hover:border-[var(--champagne)]/30 transition-colors duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-[var(--champagne)]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({length: 5}).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[var(--champagne)] text-[var(--champagne)]"
                  />
                ))}
              </div>

              <p className="text-sm text-[var(--charcoal)]/70 leading-relaxed mb-6 relative z-10">
                &ldquo;{t(`${key}.quote`)}&rdquo;
              </p>

              <div className="border-t border-[var(--border-light)] pt-4">
                <p className="text-sm font-semibold text-[var(--charcoal-deep)]">
                  {t(`${key}.name`)}
                </p>
                <p className="text-xs text-[var(--charcoal)]/50 mt-0.5">
                  {t(`${key}.procedure`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
