import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {
  GraduationCap,
  Award,
  Heart,
  Target,
  CheckCircle,
  ArrowRight,
  Stethoscope
} from 'lucide-react';

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <main className="bg-[var(--gray-50)]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold-700)] bg-[var(--gold-50)] px-4 py-2 rounded-full border border-[var(--gold-200)] mb-6">
              <Stethoscope className="w-3.5 h-3.5 text-[var(--gold-500)]" />
              {t('eyebrow')}
            </span>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-[var(--gray-900)] mb-6">
              {t('title')}
            </h1>
            <p className="text-lg text-[var(--gray-500)] leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] bg-[var(--gray-100)] rounded-sm overflow-hidden group hover-lift animate-slide-in-left">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--gray-400)] transition-transform duration-500 group-hover:scale-105">
                <Stethoscope className="w-16 h-16 mb-4 text-[var(--gold-400)]" />
                <span className="text-sm">Dr. Photo</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent" />
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <p className="text-base text-[var(--gray-600)] leading-relaxed animate-fade-in-up delay-200">
                {t('bio1')}
              </p>
              <p className="text-base text-[var(--gray-600)] leading-relaxed animate-fade-in-up delay-300">
                {t('bio2')}
              </p>
              <p className="text-base text-[var(--gray-600)] leading-relaxed animate-fade-in-up delay-400">
                {t('bio3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="w-12 h-12 rounded-full bg-[var(--gold-50)] flex items-center justify-center mx-auto mb-6">
              <Heart className="w-6 h-6 text-[var(--gold-600)]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--gray-900)] mb-6">
              {t('philosophy.title')}
            </h2>
            <p className="text-lg text-[var(--gray-600)] leading-relaxed">
              {t('philosophy.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <Target className="w-6 h-6 text-[var(--gold-600)]" />
            <h2 className="text-3xl font-semibold text-[var(--gray-900)]">
              {t('approach.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t.raw('approach.items').map((item: string, idx: number) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white border border-[var(--gray-200)] rounded-sm card-hover animate-fade-in-up"
                style={{animationDelay: `${200 + idx * 100}ms`}}
              >
                <CheckCircle className="w-5 h-5 text-[var(--gold-500)] flex-shrink-0" />
                <span className="text-[var(--gray-600)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <GraduationCap className="w-6 h-6 text-[var(--purple-600)]" />
            <h2 className="text-3xl font-semibold text-[var(--gray-900)]">
              {t('qualifications.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t.raw('qualifications.items').map((item: string, idx: number) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-sm card-hover animate-fade-in-up"
                style={{animationDelay: `${200 + idx * 100}ms`}}
              >
                <Award className="w-5 h-5 text-[var(--purple-500)] flex-shrink-0" />
                <span className="text-[var(--gray-600)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="bg-[var(--gray-900)] rounded-sm p-12 lg:p-16 text-center relative overflow-hidden animate-scale-in">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--gold-500)]/5 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-50 mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book your free consultation today and let Dr. AlHasan help you achieve your dreams
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-[var(--gold-500)] text-white rounded-full hover:bg-[var(--gold-400)] transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                Book Your Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
