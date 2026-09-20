import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { RoomSelectionPage } from './pages/RoomSelectionPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/setbooking" element={<BookingPage />} />
      <Route path="/rooms" element={<RoomSelectionPage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;