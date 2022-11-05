import App from '@pages/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}
