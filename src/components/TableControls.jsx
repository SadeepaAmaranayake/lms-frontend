export default function TableControls({
  searchValue,
  onSearchChange,
  searchPlaceholder,
  filters,
  filterValues,
  onFilterChange,
}) {
  return (
    <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-3">
      <div>
        <label
          htmlFor="table-search"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Search
        </label>

        <input
          id="table-search"
          type="search"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {filters.map((filter) => (
        <div key={filter.key}>
          <label
            htmlFor={`filter-${filter.key}`}
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            {filter.label}
          </label>

          <select
            id={`filter-${filter.key}`}
            value={filterValues[filter.key] ?? ""}
            onChange={(event) =>
              onFilterChange(filter.key, event.target.value)
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">
              All {filter.label.toLowerCase()}
            </option>

            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}