export default function Jobcard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md border border-gray-200">
        <h2>Company</h2>
        <div className="grid grid-cols-2 ">
          <h3>Position</h3>
          <h3>Date</h3>
        </div>
        <h3>Status</h3>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
