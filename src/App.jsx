import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    contact: "",
    notes: "",
    status: "",
  });
  const [jobApplications, setJobApplications] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleEdit(index) {
    let jobToEdit = jobApplications[index];
    setFormData(jobToEdit);
    setEditingIndex(index);
    openModal();
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          setJobData={setJobApplications}
          setData={setFormData}
          formData={formData}
          closeModal={closeModal}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          jobData={jobApplications}
        />
      )}

      <div className="min-h-screen mx-auto px-4 sm:px-6 md:px-10 bg-amber-50">
        <Header openModal={openModal} />
        <Jobcard
          jobData={jobApplications}
          onEdit={handleEdit}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
