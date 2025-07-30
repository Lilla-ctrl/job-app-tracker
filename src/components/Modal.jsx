export default function Modal({
  closeModal,
  setData,
  formData,
  setJobData,
  jobData,
  editingIndex,
  setEditingIndex,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    if (editingIndex === null) {
      setJobData((prevData) => [...prevData, formData]);
      setEditingIndex(null);
    } else {
      let updatedJobs = [...jobData];
      updatedJobs[editingIndex] = formData;
      setJobData(updatedJobs);
      setEditingIndex(null);
    }
    setData({
      company: "",
      position: "",
      contact: "",
      notes: "",
      status: "",
    });
    closeModal();
  }

  function handleChange(event) {
    let value = event.target.value;
    let fieldName = event.target.name;

    setData({
      ...formData,
      [fieldName]: value,
    });
  }

  function handleClose() {
    closeModal();
  }

  return (
    <div className="bg-black/60 fixed inset-0 flex items-center justify-center min-h-screen ">
      <div className="bg-amber-50 p-6 rounded shadow-lg max-w-lg md:max-w-xl w-full ">
        <form onSubmit={handleSubmit} action="">
          <div>
            <div className="space-y-4">
              <label htmlFor="company" className="text-gray-500 text-lg">
                Company
              </label>
              <input
                value={formData.company}
                onChange={handleChange}
                type="text"
                name="company"
                id="company"
                required
                className="shadow-inner p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400
"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="position" className="text-gray-500 text-lg">
                Position
              </label>
              <input
                value={formData.position}
                onChange={handleChange}
                type="text"
                name="position"
                id="position"
                required
                className="shadow-inner p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400
"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="contact" className="text-gray-500 text-lg">
                Contact info
              </label>
              <input
                value={formData.contact}
                onChange={handleChange}
                type="text"
                name="contact"
                id="contact"
                className="shadow-inner p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400
"
              />
            </div>
            <textarea
              value={formData.notes}
              name="notes"
              onChange={handleChange}
              id="notes"
              rows="4"
              placeholder=" Add any notes here"
              className="border mt-4 mb-2 w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-md"
            ></textarea>
            <select
              value={formData.status}
              onChange={handleChange}
              name="status"
              id="status-select"
              className="shadow-inner p-2 border border-gray-300 rounded-md w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Application status</option>
              <option value="Applied">Applied</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offer received">Offer received</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <button
            type="submit"
            className="border-1 border-gray-300 text-gray-500 rounded-md px-3 py-1 mt-5 hover:bg-gray-300 cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="border-1 border-gray-300 text-gray-500 rounded-md px-3 py-1 mt-5 hover:bg-gray-300 cursor-pointer ml-2"
          >
            Cancel
          </button>
        </form>{" "}
      </div>
    </div>
  );
}
