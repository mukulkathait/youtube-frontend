export const SearchBar = () => {
  return (
    <div className="w-2/4">
      <form>
        <div className="w-full h-10 flex text-grey-900 border border-slate-400 rounded-3xl p-1 pl-3 text-sm pr-2">
          <input
            type="search"
            id="default-search"
            className="w-full bg-white text-grey-400 font-medium border-none outline-none"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="bg-white  text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
    </div>
  );
};
