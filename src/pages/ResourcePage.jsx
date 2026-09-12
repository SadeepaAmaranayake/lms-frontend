import { useState } from "react";
import ConfirmDialog from "../components/ConfirmDialog";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import ResourceForm from "../components/ResourceForm";
import TableControls from "../components/TableControls";

export default function ResourcePage({
  eyebrow,
  title,
  description,
  action,
  columns,
  rows,
  fields = [],
  searchKeys = [],
  searchPlaceholder = "Search records...",
  filters = [],
  pageSize = 5,
}) {
  const [records, setRecords] = useState(() => rows);
  const [editor, setEditor] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [notice, setNotice] = useState("");

  const [search, setSearch] = useState("");
  const [filterValues, setFilterValues] = useState({});
  const [sortConfig, setSortConfig] = useState({
    key: columns[0].key,
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const searchText = search.trim().toLowerCase();

  const searchedRecords = records.filter((record) => {
    if (!searchText || searchKeys.length === 0) {
      return true;
    }

    return searchKeys.some((key) =>
      String(record[key] ?? "")
        .toLowerCase()
        .includes(searchText),
    );
  });

  const filteredRecords = searchedRecords.filter((record) =>
    filters.every((filter) => {
      const selectedValue = filterValues[filter.key];

      if (!selectedValue) {
        return true;
      }

      return String(record[filter.key]) === selectedValue;
    }),
  );

  const sortedRecords = [...filteredRecords].sort((first, second) => {
    const firstValue = first[sortConfig.key] ?? "";
    const secondValue = second[sortConfig.key] ?? "";

    const result = String(firstValue).localeCompare(
      String(secondValue),
      undefined,
      {
        numeric: true,
        sensitivity: "base",
      },
    );

    return sortConfig.direction === "asc" ? result : -result;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(sortedRecords.length / pageSize),
  );

  const visiblePage = Math.min(currentPage, totalPages);
  const startIndex = (visiblePage - 1) * pageSize;
  const paginatedRecords = sortedRecords.slice(
    startIndex,
    startIndex + pageSize,
  );

  const initialValues =
    editor?.row ??
    Object.fromEntries(
      fields.map((field) => [
        field.key,
        field.defaultValue ?? "",
      ]),
    );

  function handleSearchChange(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleFilterChange(key, value) {
    setFilterValues((current) => ({
      ...current,
      [key]: value,
    }));

    setCurrentPage(1);
  }

  function handleSort(key) {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === "asc"
          ? "desc"
          : "asc",
    }));

    setCurrentPage(1);
  }

  function openCreateForm() {
    setNotice("");
    setEditor({ mode: "create", row: null });
  }

  function openEditForm(row) {
    setNotice("");
    setEditor({ mode: "edit", row });
  }

  function saveRecord(values) {
    if (editor.mode === "edit") {
      setRecords((current) =>
        current.map((row) =>
          row.id === editor.row.id
            ? { ...row, ...values }
            : row,
        ),
      );

      setNotice("Record updated temporarily.");
    } else {
      setRecords((current) => [
        {
          id: crypto.randomUUID(),
          ...values,
        },
        ...current,
      ]);

      setNotice("Record added temporarily.");
    }

    setEditor(null);
  }

  function deleteRecord() {
    setRecords((current) =>
      current.filter((row) => row.id !== deleteTarget.id),
    );

    setDeleteTarget(null);
    setNotice("Record deleted temporarily.");
  }

  const targetName =
    deleteTarget?.name ??
    deleteTarget?.title ??
    deleteTarget?.student ??
    deleteTarget?.topic ??
    "this record";

  const noMatches =
    records.length > 0 && filteredRecords.length === 0;

  return (
    <div className="space-y-7">
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={action}
        onAction={openCreateForm}
      />

      {notice && (
        <p
          role="status"
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
        >
          {notice}
        </p>
      )}

      <TableControls
        searchValue={search}
        onSearchChange={handleSearchChange}
        searchPlaceholder={searchPlaceholder}
        filters={filters}
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
      />

      <DataTable
        columns={columns}
        rows={paginatedRecords}
        onEdit={openEditForm}
        onDelete={setDeleteTarget}
        sortConfig={sortConfig}
        onSort={handleSort}
        emptyTitle={
          noMatches
            ? "No records match your search or filters"
            : `No ${title.toLowerCase()} yet`
        }
      />

      <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Showing {paginatedRecords.length} of{" "}
          {filteredRecords.length} matching records
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={visiblePage === 1}
            onClick={() =>
              setCurrentPage((page) => Math.max(1, page - 1))
            }
            className="rounded-lg border border-slate-300 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <span>
            Page {visiblePage} of {totalPages}
          </span>

          <button
            type="button"
            disabled={visiblePage === totalPages}
            onClick={() =>
              setCurrentPage((page) =>
                Math.min(totalPages, page + 1),
              )
            }
            className="rounded-lg border border-slate-300 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <p className="text-xs text-slate-400">
        Changes are temporary and will reset when the page reloads.
      </p>

      <Modal
        open={Boolean(editor)}
        title={editor?.mode === "edit" ? `Edit ${title}` : action}
        description="This form currently changes temporary browser data only."
        onClose={() => setEditor(null)}
      >
        {editor && (
          <ResourceForm
            key={`${editor.mode}-${editor.row?.id ?? "new"}`}
            fields={fields}
            initialValues={initialValues}
            records={records}
            editingId={editor.row?.id ?? null}
            onSubmit={saveRecord}
            onCancel={() => setEditor(null)}
            submitLabel={
              editor.mode === "edit" ? "Save changes" : action
            }
          />
        )}
      </Modal>

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title="Delete record?"
        description={`Delete ${targetName}? This only removes the temporary record.`}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={deleteRecord}
      />
    </div>
  );
}