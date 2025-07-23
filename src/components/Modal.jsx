export default function Modal({ closeModal }) {
  function handleClick() {
    closeModal();
  }

  return (
    <div className="bg-black/60 fixed inset-0 flex items-center justify-center min-h-screen ">
      <div className="bg-amber-50 p-6 rounded shadow-lg max-w-lg md:max-w-xl w-full ">
        <form action="">
          <div>
            <div className="space-y-4">
              <label htmlFor="company" className="text-gray-500 text-lg">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="shadow-inner p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400
"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="position" className="text-gray-500 text-lg">
                Position
              </label>
              <input
                type="text"
                name="position"
                id="position"
                className="shadow-inner p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400
"
              />
            </div>
            <label htmlFor="contact" className="text-gray-500 text-lg">
              Contact info
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              className="shadow-inner p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400
"
            />
            <textarea
              id="notes"
              rows="4"
              placeholder=" Add any notes here"
              className="border mt-4 mb-2 w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
            ></textarea>
            <select
              name="status"
              id="status-select"
              className="shadow-inner p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Application status</option>
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </form>{" "}
        <button
          onClick={handleClick}
          className="border-1 border-gray-300 rounded-md px-3 mt-5 hover:bg-gray-300 cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}
