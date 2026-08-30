'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <p className="text-lg text-[var(--gray-500)] leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-white border border-[var(--green-200)] rounded-sm p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--green-50)] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[var(--green-500)]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--gray-900)] mb-4">
                    تم إرسال طلبك بنجاح!
                  </h3>
                  <p className="text-[var(--gray-600)]">
                    سنتواصل معك في أقرب وقت ممكن
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-[var(--gray-200)] rounded-sm p-8 lg:p-10 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('form.namePlaceholder')}
                      className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-sm focus:outline-none focus:border-[var(--green-500)] focus:ring-1 focus:ring-[var(--green-500)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t('form.emailPlaceholder')}
                      className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-sm focus:outline-none focus:border-[var(--green-500)] focus:ring-1 focus:ring-[var(--green-500)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      {t('form.phone')}
                    </label>
                    <input
                      type="tel"
                      placeholder={t('form.phonePlaceholder')}
                      className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-sm focus:outline-none focus:border-[var(--green-500)] focus:ring-1 focus:ring-[var(--green-500)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      {t('form.procedure')}
                    </label>
                    <select className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-sm focus:outline-none focus:border-[var(--green-500)] focus:ring-1 focus:ring-[var(--green-500)] transition-colors bg-white">
                      <option value="">اختر الإجراء</option>
                      <option value="rhinoplasty">جراحة تجميل الأنف</option>
                      <option value="facelift">شد وتنعيم الوجه</option>
                      <option value="botox">حقن البوتوكس</option>
                      <option value="liposuction">نحت وتشكيل الجسم</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      {t('form.message')}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t('form.messagePlaceholder')}
                      className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-sm focus:outline-none focus:border-[var(--green-500)] focus:ring-1 focus:ring-[var(--green-500)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-[var(--green-600)] text-white rounded-full hover:bg-[var(--green-700)] transition-all duration-300 shadow-lg"
                  >
                    {t('form.submit')}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white border border-[var(--gray-200)] rounded-sm p-8">
                <h3 className="text-xl font-semibold text-[var(--gray-900)] mb-6">
                  معلومات الاتصال
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--green-50)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--green-600)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--gray-900)] mb-1">{t('info.address')}</p>
                      <p className="text-[var(--gray-600)]">{t('info.addressValue')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--green-50)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--green-600)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--gray-900)] mb-1">{t('info.phone')}</p>
                      <p className="text-[var(--gray-600)]" dir="ltr">{t('info.phoneValue')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--green-50)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--green-600)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--gray-900)] mb-1">{t('info.email')}</p>
                      <p className="text-[var(--gray-600)]">{t('info.emailValue')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--green-50)] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[var(--green-600)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--gray-900)] mb-1">{t('info.hours')}</p>
                      <p className="text-[var(--gray-600)]">{t('info.hoursValue')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-[var(--gray-100)] border border-[var(--gray-200)] rounded-sm aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-[var(--gray-400)]">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-[var(--green-400)]" />
                  <p className="text-sm">خريطة الموقع</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
