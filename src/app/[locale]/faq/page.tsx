'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {Plus, Minus, MessageCircleQuestion} from 'lucide-react';

export default function FAQPage() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = t.raw('questions') as Array<{question: string; answer: string}>;

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-5 py-2.5 rounded-full border border-[var(--gold-200)] mb-6">
              <MessageCircleQuestion className="w-4 h-4 text-[var(--gold-500)]" />
              {t('eyebrow')}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
              {t('title')}
            </h1>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-12">
          <div className="space-y-4">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--gold-300)] transition-colors animate-fade-in-up"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-gray-900 font-semibold pr-4">{q.question}</span>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-[var(--gold-600)] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{q.answer}</p>
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
