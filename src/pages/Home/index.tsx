import BlogSection from './components/Blog/BlogSection';
import CallToAction from './components/CallToAction/CallToAction';
import CommunitySection from './components/Community';
import WorkIn from './components/WorkIn/WorkIn';

export default function Home() {
  return (
    <>
      <CallToAction/>
      <WorkIn />
      <CommunitySection />
      <BlogSection />
    </>
  );
}
