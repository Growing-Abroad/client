import BlogSection from '../../../pages/components/Blog/BlogSection';
import CallToAction from '../../../pages/components/CallToAction/CallToAction';
import CommunitySection from '../../../pages/components/Community';
import DiscoverGA from '../../../pages/components/DiscoverGA';
import OurServicesSection from '../../../pages/components/OurServices';
import SuccessStories from '../../../pages/components/Success-stories';
import WorkIn from '../../../pages/components/WorkIn/WorkIn';

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
