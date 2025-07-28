import { useEffect, useState } from "react";
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
  const [hasLoadedFromStorage, setHasLoadedFromStorage] = useState(false);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobApplications");

    if (storedJobs) {
      setJobApplications(JSON.parse(storedJobs));
    }

    setHasLoadedFromStorage(true);
  }, []);

  useEffect(() => {
    if (hasLoadedFromStorage) {
      localStorage.setItem("jobApplications", JSON.stringify(jobApplications));
    }
  }, [jobApplications]);

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

  function handleDelete(index) {
    let filteredJobs = jobApplications.filter((_, i) => i !== index);

    setJobApplications(filteredJobs);
  }

  return (
    <div className="h-screen flex flex-col bg-amber-50">
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

      <Header openModal={openModal} />
      <main className="flex-1">
        <Jobcard
          isLoaded={hasLoadedFromStorage}
          jobData={jobApplications}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
