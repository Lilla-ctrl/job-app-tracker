import { StickyNote } from "lucide-react";

export default function Jobcard({ jobData, onEdit, onDelete, isLoaded }) {
  const statusColors = {
    Applied: "bg-blue-100 text-blue-800",
    Interviewing: "bg-green-200 text-green-900",
    "Offer received": "bg-yellow-100 text-yellow-800",
    Rejected: "bg-red-100 text-red-800",
  };

  if (isLoaded && jobData.length === 0) {
    return <p className="text-center text-2xl mt-6">No applications yet.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center px-4 gap-6">
      {jobData.map((singleJob, index) => (
        <div
          key={index}
          className="w-[300px] bg-gray-50 p-4 rounded-xl shadow-md border border-gray-300 flex flex-col justify-between"
        >
          <h2 className="text-2xl mb-2">{singleJob.company}</h2>
          <div className="flex flex-wrap justify-between">
            <h3>{singleJob.position}</h3>
            <h3>{singleJob.date}</h3>
          </div>
          <h3>{singleJob.contact}</h3>
          <p>
            {singleJob.notes && (
              <div className="flex items-start gap-2 mt-3 py-1 bg-yellow-50 border-1 border-yellow-400 text-md text-gray-700 rounded-md">
                <StickyNote className="w-5 h-5 mt-1 ml-1 text-yellow-500" />
                <p className="whitespace-pre-line">{singleJob.notes}</p>
              </div>
            )}
          </p>
          <h3
            className={`w-fit tracking-wide mt-2 px-3 py-1 rounded text-sm font-medium ${
              statusColors[singleJob.status]
            }`}
          >
            {singleJob.status}
          </h3>
          <div className="flex flex-wrap gap-3 justify-end mt-auto">
            <button
              onClick={() => onEdit(index)}
              className="border-1 border-gray-300 rounded-md px-3"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              className="border-1 border-gray-300 rounded-md px-3"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
