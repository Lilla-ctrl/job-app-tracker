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
  const [selectedStatus, setSelectedStatus] = useState("All");

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

  const filteredJobs =
    selectedStatus === "All"
      ? jobApplications
      : jobApplications.filter(
          (job) =>
            job.status.trim().toLowerCase() === selectedStatus.toLowerCase()
        );

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
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

      <Header openModal={openModal} setSelectedStatus={setSelectedStatus} />
      <main className="flex-1">
        <Jobcard
          isLoaded={hasLoadedFromStorage}
          jobData={filteredJobs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          selectedStatus={selectedStatus}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
