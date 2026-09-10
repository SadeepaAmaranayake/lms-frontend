export default function statusBadge({ status }) {
  const styles = {
    Paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Published: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Active: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
    Scheduled: "bg-blue-50 text-blue-700 ring-blue-600/20",
    Draft: "bg-slate-100 text-slate-600 ring-slate-500/20",
    Unpaid: "bg-rose-50 text-rose-700 ring-rose-600/20",
  };

  return (
    <span className={styles[status]}>
      {status}
    </span>
  );
}