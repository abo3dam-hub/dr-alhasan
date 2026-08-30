import {getTranslations} from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import DoctorIntro from '@/components/sections/DoctorIntro';
import ProceduresPreview from '@/components/sections/ProceduresPreview';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <>
      <Hero />
      <DoctorIntro />
      <ProceduresPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
