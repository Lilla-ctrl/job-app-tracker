export default function Jobcard({ jobData }) {
  if (jobData.length === 0) {
    return <p className="text-center text-2xl mt-6">No applications yet.</p>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6">
      {jobData.map((singleJob, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-300"
        >
          <h2 className="text-2xl mb-2">{singleJob.company}</h2>
          <div className="flex flex-wrap justify-between">
            <h3>{singleJob.position}</h3>
            <h3>{singleJob.date}</h3>
          </div>
          <h3>{singleJob.contact}</h3>
          <h3>{singleJob.status}</h3>
          <div className="flex flex-wrap gap-3 justify-end">
            <button className="border-1 border-gray-300 rounded-md px-3">
              Edit
            </button>
            <button className="border-1 border-gray-300 rounded-md px-3">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
