import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/Home';

export default function AppRouting() {
  return (
    <Router>
      <Routes location="/">
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
