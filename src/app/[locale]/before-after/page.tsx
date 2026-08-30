import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {ArrowRight, Sparkles} from 'lucide-react';

const beforeAfterCases = [
  {id: 1, procedure: 'rhinoplasty', emoji: '👃'},
  {id: 2, procedure: 'facelift', emoji: '✨'},
  {id: 3, procedure: 'botox', emoji: '💉'},
  {id: 4, procedure: 'liposuction', emoji: '🔧'},
  {id: 5, procedure: 'rhinoplasty', emoji: '👃'},
  {id: 6, procedure: 'facelift', emoji: '✨'}
] as const;

export default async function BeforeAfterPage() {
  const t = await getTranslations('procedures');

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-5 py-2.5 rounded-full border border-[var(--gold-200)] mb-6">
              <Sparkles className="w-4 h-4 text-[var(--gold-500)]" />
              قبل وبعد
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
              نتائج حقيقية لمرضانا
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              شاهد تحويلات مرضانا مع د. الحسن. النتائج تتحدث عن نفسها.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterCases.map(({id, procedure, emoji}, idx) => (
              <div
                key={id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--gold-300)] transition-all duration-300 card-hover animate-fade-in-up"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                {/* Before & After Images */}
                <div className="grid grid-cols-2 gap-1">
                  {/* Before */}
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                    <div className="text-center">
                      <span className="text-4xl mb-2 block">{emoji}</span>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">قبل</span>
                    </div>
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      قبل
                    </div>
                  </div>

                  {/* After */}
                  <div className="aspect-square bg-gradient-to-br from-[var(--gold-100)] to-[var(--gold-200)] flex items-center justify-center relative">
                    <div className="text-center">
                      <span className="text-4xl mb-2 block">{emoji}</span>
                      <span className="text-xs font-semibold text-[var(--gold-700)] uppercase tracking-wider">بعد</span>
                    </div>
                    <div className="absolute top-2 left-2 bg-[var(--gold-500)] text-white text-xs font-bold px-2 py-1 rounded">
                      بعد
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`${procedure}.name`)}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t(`${procedure}.shortDescription`)}
                  </p>
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
                تريد نتائج مماثلة؟
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                احجز استشارتك المجانية اليوم ودع د. الحسن يساعدك في تحقيق أحلامك
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
