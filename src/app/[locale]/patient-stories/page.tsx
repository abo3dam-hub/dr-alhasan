import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {Star, User, ArrowRight, Sparkles} from 'lucide-react';

const patientStories = [
  {id: 1, procedure: 'rhinoplasty', emoji: '👃'},
  {id: 2, procedure: 'facelift', emoji: '✨'},
  {id: 3, procedure: 'botox', emoji: '💉'}
] as const;

export default async function PatientStoriesPage() {
  const t = await getTranslations('testimonials');

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-5 py-2.5 rounded-full border border-[var(--gold-200)] mb-6">
              <User className="w-4 h-4 text-[var(--gold-500)]" />
              تجارب المرضى
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
              قصص نجاح حقيقية من مرضانا
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              اسمع من مرضانا أنفسهم عن تجربتهم مع د. الحسن
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="space-y-8">
            {patientStories.map(({id, procedure, emoji}, idx) => (
              <div
                key={id}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[var(--gold-300)] transition-all duration-300 card-hover animate-fade-in-up"
                style={{animationDelay: `${idx * 150}ms`}}
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Patient Photo */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-3">
                        <User className="w-10 h-10 text-gray-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-500">{t(`testimonial${id}.name`)}</span>
                    </div>
                  </div>

                  {/* Before & After */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center relative">
                      <div className="text-center">
                        <span className="text-3xl mb-1 block">{emoji}</span>
                        <span className="text-xs font-semibold text-gray-500">قبل</span>
                      </div>
                      <div className="absolute top-1 left-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                        قبل
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-[var(--gold-100)] to-[var(--gold-200)] rounded-lg flex items-center justify-center relative">
                      <div className="text-center">
                        <span className="text-3xl mb-1 block">{emoji}</span>
                        <span className="text-xs font-semibold text-[var(--gold-700)]">بعد</span>
                      </div>
                      <div className="absolute top-1 left-1 bg-[var(--gold-500)] text-white text-xs font-bold px-1.5 py-0.5 rounded">
                        بعد
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({length: 5}).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[var(--gold-500)] text-[var(--gold-500)]"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      &ldquo;{t(`testimonial${id}.quote`)}&rdquo;
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-bold text-gray-900">
                        {t(`testimonial${id}.name`)}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {t(`testimonial${id}.procedure`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="bg-gray-900 rounded-xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--gold-500)]/5 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                تريد أن تكون القصة القادمة؟
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                احجز استشارتك المجانية اليوم وابدأ رحلتك نحو الجمال
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-[var(--gold-500)] text-white rounded-full hover:bg-[var(--gold-400)] transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                احجز استشارتك المجانية
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
