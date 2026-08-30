import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const procedures = [
  {key: 'rhinoplasty', emoji: '👃'},
  {key: 'facelift', emoji: '✨'},
  {key: 'botox', emoji: '💉'},
  {key: 'liposuction', emoji: '🔧'}
] as const;

export default async function ProceduresPage() {
  const t = await getTranslations('procedures');

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-5 py-2.5 rounded-full border border-[var(--gold-200)] mb-6">
              <Sparkles className="w-4 h-4 text-[var(--gold-500)]" />
              {t('eyebrow')}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="space-y-16">
            {procedures.map(({key, emoji}, idx) => (
              <div
                key={key}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--gold-300)] transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${idx * 150}ms`}}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group">
                    <span className="text-7xl transition-transform duration-500 group-hover:scale-110">{emoji}</span>
                    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[var(--purple-300)]" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[var(--purple-300)]" />
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {t(`${key}.name`)}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {t(`${key}.fullDescription`)}
                    </p>

                    <div className="space-y-3 mb-8">
                      {t.raw(`${key}.benefits`).map((benefit: string, bIdx: number) => (
                        <div key={bIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[var(--gold-500)] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-base font-semibold text-[var(--gold-600)] hover:text-[var(--gold-700)] transition-colors"
                    >
                      Book Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
