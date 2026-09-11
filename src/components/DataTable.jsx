import { Pencil, Trash2 } from "lucide-react";
import EmptyState from "./EmptyState";
import StatusBadge from "./StatusBadge";

export default function DataTable({ columns, rows, onEdit, onDelete,
  emptyTitle }) {
  if (rows.length === 0) {
    return <EmptyState title={emptyTitle} />;
  }

  const showActions = Boolean(onEdit || onDelete);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200
      bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key}
                  className="border-b border-slate-200 px-5 py-3.5 text-xs
                    font-bold uppercase tracking-wider text-slate-500">
                  {column.label}
                </th>
              ))}
              {showActions && (
                <th className="border-b border-slate-200 px-5 py-3.5 text-right
                  text-xs font-bold uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-100
                last:border-0 hover:bg-slate-50/70">
                {columns.map((column) => (
                  <td key={column.key}
                    className="px-5 py-4 text-sm text-slate-700">
                    {column.badge
                      ? <StatusBadge value={row[column.key]} />
                      : column.grade
                        ? `Grade ${row[column.key]}`
                        : row[column.key]}
                  </td>
                ))}
                {showActions && (
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      {onEdit && (
                        <button type="button" onClick={() => onEdit(row)}
                          aria-label="Edit record"
                          className="rounded-lg border border-slate-200 p-2
                            text-slate-600 hover:border-indigo-200
                            hover:bg-indigo-50 hover:text-indigo-700">
                          <Pencil size={16} />
                        </button>
                      )}
                      {onDelete && (
                        <button type="button" onClick={() => onDelete(row)}
                          aria-label="Delete record"
                          className="rounded-lg border border-slate-200 p-2
                            text-slate-600 hover:border-rose-200 hover:bg-rose-50
                            hover:text-rose-700">
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
