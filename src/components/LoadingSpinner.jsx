export default function LoadingSpinner({ label = "Loading" }) {
  return (
    <span role="status" aria-label={label}
      className="inline-flex items-center gap-2">
      <span className="size-4 animate-spin rounded-full border-2
        border-current border-r-transparent" />
      <span>{label}</span>
    </span>
  );
}
