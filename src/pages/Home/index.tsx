import BlogSection from './components/Blog/BlogSection';
import CallToAction from './components/CallToAction/CallToAction';
import OurServicesSection from './components/OurServices';
import WorkIn from './components/WorkIn/WorkIn';

export default function Home() {
  return (
    <>
      <CallToAction/>
      <WorkIn />
      <OurServicesSection />
      <BlogSection />
    </>
  );
}
