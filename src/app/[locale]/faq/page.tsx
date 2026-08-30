'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {Plus, Minus} from 'lucide-react';

export default function FAQPage() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = t.raw('questions') as Array<{question: string; answer: string}>;

  return (
    <main className="bg-[var(--gray-50)]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--green-700)] bg-[var(--green-50)] px-4 py-2 rounded-full border border-[var(--green-200)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-500)] animate-pulse" />
              {t('eyebrow')}
            </span>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-[var(--gray-900)] mb-6">
              {t('title')}
            </h1>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="space-y-4">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className="bg-white border border-[var(--gray-200)] rounded-sm overflow-hidden hover:border-[var(--green-300)] transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[var(--gray-900)] font-medium pr-4">{q.question}</span>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-[var(--green-600)] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[var(--gray-400)] flex-shrink-0" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-[var(--gray-200)] pt-4">
                      <p className="text-[var(--gray-600)] leading-relaxed">{q.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
