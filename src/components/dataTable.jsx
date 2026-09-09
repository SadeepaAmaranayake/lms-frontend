import StatusBadge from "./statusBadge";
export default function DataTable({ columns, rows }) {
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}