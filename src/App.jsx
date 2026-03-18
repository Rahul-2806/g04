import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import ServicesSection from './components/ServicesSection';
import DestinationsSection from './components/DestinationsSection';
import FoodSection from './components/FoodSection';
import TransportSection from './components/TransportSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingModal from './components/BookingModal';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const [modalPkg, setModalPkg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openBook = (pkg = null) => {
    setModalPkg(pkg);
    setModalOpen(true);
  };

  const closeBook = () => {
    setModalOpen(false);
    setModalPkg(null);
  };

  return (
    <>
      <Navbar onBookNow={() => openBook()} />
      <Hero onBookNow={() => openBook()} />
      <PackagesSection onBook={openBook} />
      <ServicesSection />
      <DestinationsSection onBook={openBook} />
      <FoodSection />
      <TransportSection />
      <TestimonialsSection />
      <Footer onBookNow={() => openBook()} />

      {/* Floating WhatsApp */}
      <WhatsAppButton />

      {/* Booking Modal */}
      {modalOpen && (
        <BookingModal pkg={modalPkg} onClose={closeBook} />
      )}
    </>
  );
}
