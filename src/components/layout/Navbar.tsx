'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useState, useEffect} from 'react';
import {Link} from '@/i18n/routing';
import {Menu, X, Globe, ChevronDown} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

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
  const isRtl = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--ivory)]/95 backdrop-blur-md border-b border-[var(--border-light)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[var(--charcoal)]">
          <span className="text-[var(--champagne)]">✦</span>
          <span>Dr. AlHasan</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-[var(--charcoal)]/80">
          {navLinks.map(({key, href}) => (
            <li key={key}>
              <Link
                href={href}
                className="relative py-1 transition-colors hover:text-[var(--charcoal)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[var(--champagne)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: CTA + Language + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <Link
            href="/"
            locale={otherLocale}
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--charcoal)]/70 hover:text-[var(--charcoal)] transition-colors px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--champagne)]"
            aria-label={otherLocale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{otherLocale === 'ar' ? 'AR' : 'EN'}</span>
          </Link>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium bg-[var(--charcoal)] text-[var(--ivory)] rounded-full hover:bg-[var(--charcoal-deep)] transition-colors shadow-sm hover:shadow-md"
          >
            {t('book')}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-[var(--charcoal)]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.2}}
            className="lg:hidden bg-[var(--ivory)] border-b border-[var(--border-light)] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map(({key, href}) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-sm font-medium text-[var(--charcoal)]/80 hover:text-[var(--charcoal)] hover:bg-[var(--ivory-warm)] rounded-lg transition-colors"
                >
                  {t(key)}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-[var(--border-light)] flex flex-col gap-3">
                <Link
                  href="/"
                  locale={otherLocale}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-[var(--charcoal)]/70 border border-[var(--border)] rounded-full hover:border-[var(--champagne)] transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {otherLocale === 'ar' ? 'English' : 'العربية'}
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center py-3 px-4 text-sm font-medium bg-[var(--charcoal)] text-[var(--ivory)] rounded-full hover:bg-[var(--charcoal-deep)] transition-colors shadow-sm"
                >
                  {t('book')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
