'use client';

import {useTranslations, useLocale} from 'next-intl';
import {motion} from 'framer-motion';
import {ArrowLeft, ArrowRight, Sparkles} from 'lucide-react';
import {Link} from '@/i18n/routing';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center bg-[var(--ivory)] overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--charcoal) 1px, transparent 1px), linear-gradient(90deg, var(--charcoal) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Decorative gold line - top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--champagne)]/20 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.1}}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[var(--champagne)]" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--champagne-muted)]">
              {t('eyebrow')}
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.2}}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-[var(--charcoal-deep)] mb-8"
          >
            {t('title')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.35}}
            className="text-lg lg:text-xl text-[var(--charcoal)]/70 leading-relaxed max-w-xl mb-12"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.5}}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium bg-[var(--charcoal)] text-[var(--ivory)] rounded-full hover:bg-[var(--charcoal-deep)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              {t('book')}
              <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/procedures"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-[var(--charcoal)] border border-[var(--border)] rounded-full hover:border-[var(--champagne-muted)] hover:text-[var(--charcoal-deep)] transition-all duration-300 hover:bg-[var(--cream)]"
            >
              {t('explore')}
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.8}}
          className="absolute top-1/2 -translate-y-1/2 right-12 hidden xl:block"
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--champagne)]/40 to-transparent" />
        </motion.div>

        {/* Decorative circle */}
        <motion.div
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 1.2, delay: 1}}
          className="absolute bottom-20 right-20 hidden xl:block"
        >
          <div className="w-32 h-32 rounded-full border border-[var(--champagne)]/10" />
        </motion.div>
      </div>
    </section>
  );
}
