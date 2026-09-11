export const gradeOptions = Array.from({ length: 8 }, (_, index) => {
  const grade = index + 6;
  return { value: String(grade), label: `Grade ${grade}` };
});

export const publicationOptions = [
  { value: "Draft", label: "Draft" },
  { value: "Published", label: "Published" },
];

export const paymentOptions = [
  { value: "Paid", label: "Paid" },
  { value: "Pending", label: "Pending" },
  { value: "Unpaid", label: "Unpaid" },
];

export const scheduleOptions = [
  { value: "Active", label: "Active" },
  { value: "Scheduled", label: "Scheduled" },
  { value: "Draft", label: "Draft" },
];

export const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday", "Sunday"].map((day) => ({ value: day, label: day }));

export function validateSriLankanPhone(value) {
  const normalized = String(value).replace(/[\s-]/g, "");
  return /^(?:\+94|0)7\d{8}$/.test(normalized)
    ? ""
    : "Enter a Sri Lankan mobile number such as 0771234567 or +94771234567.";
}
