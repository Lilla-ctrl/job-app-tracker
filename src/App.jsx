import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && <Modal closeModal={closeModal} />}

      <div className="min-h-screen mx-auto px-4 sm:px-6 md:px-10 bg-amber-50">
        <Header openModal={openModal} />
        <Jobcard />
        <Footer />
      </div>
    </>
  );
}

export default App;
