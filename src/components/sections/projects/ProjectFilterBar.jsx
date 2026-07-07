function ProjectFilterBar({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="mb-10 mt-8 flex flex-wrap justify-center gap-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition duration-200 ${
              isActive
                ? "border-blue-500/40 bg-blue-500/15 text-blue-300 shadow-sm shadow-blue-900/40"
                : "border-gray-700 bg-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilterBar;
