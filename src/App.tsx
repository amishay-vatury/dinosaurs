import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLandingPage } from './pages/MainLandingPage';
import { LandingPage } from './pages/LandingPage';
import { DinosaurPage } from './pages/DinosaurPage';
import { AnimalDetailPage } from './pages/AnimalDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                           element={<MainLandingPage />} />
        <Route path="/dinosaurs"                  element={<LandingPage />} />
        <Route path="/dinosaur/:id"               element={<DinosaurPage />} />
        <Route path="/animals/:category/:id"      element={<AnimalDetailPage />} />
        <Route path="*"                           element={<MainLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
