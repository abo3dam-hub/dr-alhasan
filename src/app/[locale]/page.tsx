import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <main style={{padding: '40px'}}>
      <h1>{t('hero.title')}</h1>

      <p>{t('hero.description')}</p>

      <button>{t('hero.book')}</button>
    </main>
  );
}