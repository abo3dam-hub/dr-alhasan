import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/routing';
import {MapPin, Phone, Mail} from 'lucide-react';

const footerLinks = [
  {key: 'about', href: '/about'},
  {key: 'procedures', href: '/procedures'},
  {key: 'beforeAfter', href: '/before-after'},
  {key: 'patientStories', href: '/patient-stories'},
  {key: 'faq', href: '/faq'},
  {key: 'contact', href: '/contact'}
] as const;

export default function Footer() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-400)]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="text-[var(--gold-400)]">✦</span>
              <span>Dr. AlHasan</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              {locale === 'ar'
                ? 'رعاية تجميلية متميزة بمعايير عالمية'
                : 'Premium aesthetic care with world-class standards'}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[var(--gold-400)]" />
                <span>{locale === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400" dir="ltr">
                <Phone className="w-4 h-4 text-[var(--gold-400)]" />
                <span>+20 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[var(--gold-400)]" />
                <span>info@dr-alhasan.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-6">
              {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.map(({key, href}) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-[var(--gold-400)] transition-colors"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-6">
              {locale === 'ar' ? 'ساعات العمل' : 'Working Hours'}
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>{locale === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}</p>
              <p dir="ltr">10:00 AM - 6:00 PM</p>
              <p className="text-gray-500 text-xs mt-4">
                {locale === 'ar' ? 'مغلق يومي الجمعة والسبت' : 'Closed on Friday & Saturday'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {year} Dr. AlHasan. {locale === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">
              {locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">
              {locale === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
