import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageLayout } from './components';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
