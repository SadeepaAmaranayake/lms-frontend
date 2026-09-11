import Modal from "./Modal";

export default function ConfirmDialog({ open, title, description, onCancel,
  onConfirm, confirmLabel = "Delete" }) {
  return (
    <Modal open={open} title={title} description={description} onClose={onCancel}>
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={onCancel}
          className="min-h-11 rounded-xl border border-slate-200 px-4 text-sm
            font-semibold text-slate-700 hover:bg-slate-50">
          Cancel
        </button>
        <button type="button" onClick={onConfirm}
          className="min-h-11 rounded-xl bg-rose-600 px-4 text-sm font-semibold
            text-white hover:bg-rose-700 focus:outline-none focus:ring-2
            focus:ring-rose-500 focus:ring-offset-2">
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
}
