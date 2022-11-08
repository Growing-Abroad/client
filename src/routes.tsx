import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageLayout } from './components';
import AboutUs from './pages/Aboout-us';
import Home from './pages/Home';

export function Router() {
  return (
    <PageLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </PageLayout>
  );
}
