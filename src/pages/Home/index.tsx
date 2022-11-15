import BlogSection from './components/Blog/BlogSection';
import CallToAction from './components/CallToAction/CallToAction';
import CommunitySection from './components/Community';
import DiscoverGA from './components/DiscoverGA';
import OurServicesSection from './components/OurServices';
import SuccessStories from './components/Success-stories';
import WorkIn from './components/WorkIn/WorkIn';

export default function Home() {
  return (
    <>
      <CallToAction />
      <WorkIn />
      <DiscoverGA />
      <OurServicesSection />
      <SuccessStories />
      <CommunitySection />
      <BlogSection />
    </>
  );
}
