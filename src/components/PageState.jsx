const stateContent = {
  loading: {
    title: "Loading",
    message: "Please wait while the information is loaded.",
  },
  error: {
    title: "Something went wrong",
    message: "The information could not be loaded.",
  },
  offline: {
    title: "You are offline",
    message: "Check your internet connection and try again.",
  },
  unauthorized: {
    title: "Access denied",
    message: "You do not have permission to view this page.",
  },
  empty: {
    title: "Nothing here yet",
    message: "No records have been added.",
  },
  "no-results": {
    title: "No results found",
    message: "Try changing your search or filters.",
  },
  "payment-required": {
    title: "Payment required",
    message: "Complete the required payment to access this content.",
  },
  "file-unavailable": {
    title: "File unavailable",
    message: "This file has been removed or is temporarily unavailable.",
  },
};

export default function PageState({
  state = "success",
  onRetry,
  children,
}) {
  if (state === "success") {
    return children;
  }

  if (state === "loading") {
    return (
      <div className="grid min-h-64 place-items-center">
        <div className="text-center">
          <div className="mx-auto size-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />

          <p className="mt-4 font-medium text-slate-700">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  const content = stateContent[state] ?? stateContent.error;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        {content.title}
      </h2>

      <p className="mt-2 text-slate-500">
        {content.message}
      </p>

      {(state === "error" || state === "offline") && onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          Try again
        </button>
      )}
    </div>
  );
}