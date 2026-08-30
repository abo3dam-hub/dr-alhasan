'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/routing';
import {ArrowLeft, ArrowRight, Sparkles} from 'lucide-react';

export default function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 lg:py-32 bg-[var(--charcoal-deep)] relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--champagne)]/5 rounded-full blur-3xl" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--champagne)]/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-12 text-center">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-[var(--champagne)]/60" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--champagne)]/60">
              {t('eyebrow')}
            </p>
          </div>

          <h2 className="text-3xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-[var(--ivory)] mb-6">
            {t('title')}
          </h2>

          <p className="text-base lg:text-lg text-[var(--ivory)]/50 leading-relaxed max-w-xl mx-auto mb-10">
            {t('description')}
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-medium bg-[var(--champagne)] text-[var(--charcoal-deep)] rounded-full hover:bg-[var(--champagne-light)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            {t('book')}
            <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[var(--champagne)]/10 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[var(--champagne)]/10 hidden lg:block" />
    </section>
  );
}
