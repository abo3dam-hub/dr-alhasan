'use client';

import {motion} from 'framer-motion';
import {Award, Clock, Users, Heart} from 'lucide-react';
import {useLocale, useTranslations} from 'next-intl';

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
    <section className="py-24 lg:py-32 bg-[var(--white)] relative">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{opacity: 0, x: isRtl ? 30 : -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.8}}
            className="relative aspect-[3/4] bg-[var(--gray-100)] rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center text-[var(--gray-400)] text-sm">
              {t('imagePlaceholder')}
            </div>
            {/* Green accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--green-500)] to-transparent" />

            {/* Decorative corner */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[var(--purple-300)]" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[var(--purple-300)]" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{opacity: 0, x: isRtl ? -30 : 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.8, delay: 0.15}}
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-4 h-4 text-[var(--green-500)]" />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--green-700)]">
                {t('eyebrow')}
              </p>
            </div>

            <h2 className="text-3xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-[var(--gray-900)] mb-6">
              {t('title')}
            </h2>

            <p className="text-base lg:text-lg text-[var(--gray-600)] leading-relaxed mb-8">
              {t('description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--gray-200)]">
              {stats.map(({key, icon: Icon}) => (
                <motion.div
                  key={key}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5, delay: 0.3}}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--green-50)] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-4 h-4 text-[var(--green-600)]" />
                  </div>
                  <p className="text-xs text-[var(--gray-500)] leading-snug">
                    {t(`stats.${key}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
