import DataTable from "../components/DataTable";
import PageHeader from "../components/PageHeader";
export default function ResourcePage({ eyebrow, title, description,
  action, columns, rows }) {
  return (
    <div className="space-y-7">
      <PageHeader eyebrow={eyebrow} title={title} description={description}
        action={action} />
      <DataTable columns={columns} rows={rows} />
      <p className="text-xs text-slate-400">
        Showing {rows.length} temporary records. Changes are not saved yet.
      </p>
    </div>
  );
}