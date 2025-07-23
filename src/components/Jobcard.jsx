export default function Jobcard() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6">
      <div className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-300">
        <h2 className="text-2xl mb-2">Company</h2>
        <div className="flex flex-wrap justify-between">
          <h3>Position</h3>
          <h3>Date</h3>
        </div>
        <h3>Contact info</h3>
        <h3>Status</h3>
        <div className="flex flex-wrap gap-3 justify-end">
          <button className="border-1 border-gray-300 rounded-md px-3">
            Edit
          </button>
          <button className="border-1 border-gray-300 rounded-md px-3">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
