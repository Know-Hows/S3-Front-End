import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-16 flex h-screen bg-gray-100">
      <aside className="w-64 bg-deepBlue">
        <form className="mx-2 my-2">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search articles..."
              required
            />
            <button
              type="submit"
              class="text-white my-2 absolute end-2.5 bottom-2.5 bg-lightBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4 white dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>

        <div className="text-white font-bold text-lg mb-5 mt-10">Filters:</div>
        <div className="mb-3">
          <p className="text-white font-bold"> Format of the article:</p>
          <label className="flex items-center text-white mb-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox ml-2" />
            <span className="ml-2">Youtube Video</span>
          </label>
          <label className="flex items-center text-white mb-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox ml-2" />
            <span className="ml-2">Blog instruction</span>
          </label>
        </div>
        <div className="mb-3">
          <p className="text-white font-bold"> Category:</p>
          <label className="flex items-center text-white mb-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox ml-2" />
            <span className="ml-2">Coding</span>
          </label>
          <label className="flex items-center text-white mb-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox ml-2" />
            <span className="ml-2">Woodwork</span>
          </label>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
