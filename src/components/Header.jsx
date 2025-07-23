export default function Header({ openModal }) {
  function handleClick() {
    openModal();
  }

  return (
    <>
      <div>
        <h1 className="text-gray-800 text-4xl font-medium text-center mt-3">
          Job Application Tracker
        </h1>
      </div>
      <div className="flex flex-wrap gap-3 justify-center my-4">
        <button
          className="bg-teal-500 text-white font-medium p-1 px-3 rounded-md hover:bg-teal-600 cursor-pointer"
          onClick={handleClick}
        >
          + New Application
        </button>
        <button className="border-1 border-teal-500 rounded-md p-1 px-3 hover:bg-teal-500 hover:text-white cursor-pointer">
          Filter
        </button>
        <button className="border-1 border-teal-500 rounded-md p-1 px-3 hover:bg-teal-500 hover:text-white cursor-pointer">
          Sort
        </button>
      </div>
    </>
  );
}
