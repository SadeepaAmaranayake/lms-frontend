import { useState } from "react";
import ConfirmDialog from "../components/ConfirmDialog";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import ResourceForm from "../components/ResourceForm";

export default function ResourcePage({ eyebrow, title, description,
  action, columns, rows, fields }) {
  const [records, setRecords] = useState(() => rows);
  const [editor, setEditor] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [notice, setNotice] = useState("");

  const initialValues = editor?.row ?? Object.fromEntries(
    fields.map((field) => [field.key, field.defaultValue ?? ""]),
  );

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
      setRecords((current) => current.map((row) =>
        row.id === editor.row.id ? { ...row, ...values } : row));
      setNotice("Record updated temporarily.");
    } else {
      setRecords((current) => [
        { id: crypto.randomUUID(), ...values },
        ...current,
      ]);
      setNotice("Record added temporarily.");
    }
    setEditor(null);
  }

  function deleteRecord() {
    setRecords((current) => current.filter((row) => row.id !== deleteTarget.id));
    setDeleteTarget(null);
    setNotice("Record deleted temporarily.");
  }

  const targetName = deleteTarget?.name ?? deleteTarget?.title
    ?? deleteTarget?.student ?? deleteTarget?.topic ?? "this record";

  return (
    <div className="space-y-7">
      <PageHeader eyebrow={eyebrow} title={title} description={description}
        action={action} onAction={openCreateForm} />
      {notice && (
        <p role="status" className="rounded-xl border border-emerald-200
          bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          {notice}
        </p>
      )}
      <DataTable columns={columns} rows={records} onEdit={openEditForm}
        onDelete={setDeleteTarget} emptyTitle={`No ${title.toLowerCase()} yet`} />
      <p className="text-xs text-slate-400">
        Showing {records.length} temporary records. Changes are not saved to a
        database and will be reset.
      </p>
      <Modal open={Boolean(editor)}
        title={editor?.mode === "edit" ? `Edit ${title}` : action}
        description="This form currently changes temporary browser data only."
        onClose={() => setEditor(null)}>
        {editor && (
          <ResourceForm key={`${editor.mode}-${editor.row?.id ?? "new"}`}
            fields={fields} initialValues={initialValues}
            onSubmit={saveRecord} onCancel={() => setEditor(null)}
            submitLabel={editor.mode === "edit" ? "Save changes" : action} />
        )}
      </Modal>
      <ConfirmDialog open={Boolean(deleteTarget)} title="Delete record?"
        description={`Delete ${targetName}? This only removes the temporary record.`}
        onCancel={() => setDeleteTarget(null)} onConfirm={deleteRecord} />
    </div>
  );
}
