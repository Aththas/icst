import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PartnerPage from './pages/partners/PartnerPage';
import CareerPage from './pages/Careers/CareerPage';
import LoginPage from './ADMIN/pages/login/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PartnerPage/>} />
        <Route path="/partners" element={<PartnerPage/>} />
        <Route path="/careers" element={<CareerPage/>} />

        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  )
}

export default App