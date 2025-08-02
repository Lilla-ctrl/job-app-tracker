export default function Header({ openModal, setSelectedStatus }) {
  function handleClick() {
    openModal();
  }

  function handleFilter(event) {
    setSelectedStatus(event.target.value);
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
        <select
          className="border border-teal-500 rounded-md hover:bg-amber-50"
          name="filter"
          id="filter"
          onChange={handleFilter}
        >
          <option value="">Filter by status </option>
          <option value="All">All (no filter)</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer received">Offer received</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button className="border-1 border-teal-500 rounded-md p-1 px-3 hover:bg-teal-500 hover:text-white cursor-pointer">
          Sort
        </button>
      </div>
    </>
  );
}
