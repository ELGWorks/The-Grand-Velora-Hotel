import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { RoomSelectionPage } from './pages/RoomSelectionPage';
import { GuestInfoPage } from "./pages/GuestInfoPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from "./pages/TermsPage";
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/setbooking" element={<BookingPage />} />
      <Route path="/rooms" element={<RoomSelectionPage />} />
      <Route path="/guest-info" element={<GuestInfoPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}

export default App;