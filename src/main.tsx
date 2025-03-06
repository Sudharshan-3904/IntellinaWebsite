import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import EventDetail from './pages/EventDetail';
import Team from './components/Team';
import Chronoline from './components/Chronoline'; // Import Chronoline Page



import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/event/:id" element={<EventDetail />} /> {/* Event Detail Page */}
      <Route path="/team" element={<Team />} />
      <Route path="/chronoline" element={<Chronoline />} /> 
    </Routes>
  </BrowserRouter>
);
