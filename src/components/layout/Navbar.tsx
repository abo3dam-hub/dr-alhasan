'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useState, useEffect} from 'react';
import {Link} from '@/i18n/routing';
import {Menu, X, Globe} from 'lucide-react';

const navLinks = [
  {key: 'home', href: '/'},
  {key: 'about', href: '/about'},
  {key: 'procedures', href: '/procedures'},
  {key: 'beforeAfter', href: '/before-after'},
  {key: 'patientStories', href: '/patient-stories'},
  {key: 'faq', href: '/faq'},
  {key: 'contact', href: '/contact'}
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-lg border-b border-gray-200 shadow-md'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <nav className="mx-auto flex h-16 lg:h-18 max-w-7xl items-center justify-between px-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900">
          <span className="text-[var(--gold-500)]">✦</span>
          <span>Dr. AlHasan</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map(({key, href}) => (
            <li key={key}>
              <Link
                href={href}
                className="text-base lg:text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors py-2 px-1 relative after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[var(--gold-500)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: CTA + Language + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <Link
            href="/"
            locale={otherLocale}
            className="flex items-center gap-1.5 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full border-2 border-gray-200 hover:border-[var(--gold-400)]"
            aria-label={otherLocale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe className="w-5 h-5" />
            <span className="text-base">{otherLocale === 'ar' ? 'AR' : 'EN'}</span>
          </Link>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-6 py-3 text-base font-bold bg-[var(--gold-600)] text-white rounded-full hover:bg-[var(--gold-700)] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {t('book')}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 text-gray-900"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({key, href}) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-4 px-4 text-lg font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t(key)}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
              <Link
                href="/"
                locale={otherLocale}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 py-4 px-4 text-lg font-semibold text-gray-600 border-2 border-gray-200 rounded-full hover:border-[var(--gold-400)] transition-colors"
              >
                <Globe className="w-5 h-5" />
                {otherLocale === 'ar' ? 'English' : 'العربية'}
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center py-4 px-4 text-lg font-bold bg-[var(--gold-600)] text-white rounded-full hover:bg-[var(--gold-700)] transition-all shadow-sm"
              >
                {t('book')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
