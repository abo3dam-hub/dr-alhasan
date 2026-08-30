import Hero from '@/components/sections/Hero';
import DoctorIntro from '@/components/sections/DoctorIntro';
import ProceduresPreview from '@/components/sections/ProceduresPreview';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default async function HomePage() {
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
