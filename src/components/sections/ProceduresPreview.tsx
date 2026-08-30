'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/routing';
import {ArrowRight, ArrowLeft} from 'lucide-react';

const procedures = [
  {key: 'rhinoplasty'},
  {key: 'facelift'},
  {key: 'botox'},
  {key: 'liposuction'}
] as const;

export default function ProceduresPreview() {
  const t = useTranslations('procedures');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

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
          <h2 className="text-3xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-[var(--charcoal-deep)] mb-4">
            {t('title')}
          </h2>
          <p className="text-base text-[var(--charcoal)]/60">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map(({key}, idx) => (
            <motion.div
              key={key}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{duration: 0.6, delay: idx * 0.1}}
            >
              <Link
                href={`/procedures/${key}`}
                className="group block bg-[var(--cream)] rounded-sm border border-[var(--border-light)] overflow-hidden hover:border-[var(--champagne)]/40 transition-all duration-300 hover:shadow-lg"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-[var(--ivory-warm)] flex items-center justify-center text-[var(--champagne)]/20 text-sm relative overflow-hidden">
                  {t(`${key}.imagePlaceholder`)}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--champagne)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--charcoal-deep)] mb-2 group-hover:text-[var(--champagne-muted)] transition-colors">
                    {t(`${key}.name`)}
                  </h3>
                  <p className="text-sm text-[var(--charcoal)]/60 leading-relaxed">
                    {t(`${key}.shortDescription`)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.4}}
          className="text-center mt-12"
        >
          <Link
            href="/procedures"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--charcoal)]/70 hover:text-[var(--champagne-muted)] transition-colors"
          >
            {t('viewAll')}
            <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
