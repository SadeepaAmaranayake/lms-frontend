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

export const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
].map((day) => ({ value: day, label: day }));

function normalizePhone(value) {
  return String(value).replace(/[\s-]/g, "");
}

export function validateSriLankanPhone(value) {
  return /^(?:\+94|0)7\d{8}$/.test(normalizePhone(value))
    ? ""
    : "Enter a Sri Lankan mobile number such as 0771234567 or +94771234567.";
}

export function validateGrade(value) {
  const validGrades = gradeOptions.map((option) => option.value);

  return validGrades.includes(String(value))
    ? ""
    : "Select a valid grade from Grade 6 to Grade 13.";
}

export function validatePositiveAmount(value) {
  const amount = Number(value);

  return Number.isFinite(amount) && amount > 0
    ? ""
    : "Enter an amount greater than zero.";
}

export function validateDate(value) {
  return Number.isNaN(Date.parse(value)) ? "Enter a valid date." : "";
}

function convertTimeToMinutes(value) {
  const match = String(value)
    .trim()
    .match(/^(\d{1,2}):([0-5]\d)\s*(AM|PM)$/i);

  if (!match) return null;

  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const period = match[3].toUpperCase();

  if (hour < 1 || hour > 12) return null;
  if (period === "AM" && hour === 12) hour = 0;
  if (period === "PM" && hour !== 12) hour += 12;

  return hour * 60 + minute;
}

export function validateTimeRange(value) {
  const parts = String(value).split(/\s+-\s+/);

  if (parts.length !== 2) {
    return "Use a time range such as 4:00 PM - 5:30 PM.";
  }

  const startTime = convertTimeToMinutes(parts[0]);
  const endTime = convertTimeToMinutes(parts[1]);

  if (startTime === null || endTime === null) {
    return "Use valid times such as 4:00 PM - 5:30 PM.";
  }

  return endTime > startTime
    ? ""
    : "The ending time must be later than the starting time.";
}

export function validateZoomUrl(value) {
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();

    if (url.protocol !== "https:") {
      return "The Zoom URL must use https.";
    }

    if (hostname !== "zoom.us" && !hostname.endsWith(".zoom.us")) {
      return "Enter a valid zoom.us meeting URL.";
    }

    return "";
  } catch {
    return "Enter a valid Zoom URL such as https://zoom.us/j/123456789.";
  }
}

export function validateMaterialFile(file) {
  if (!file) return "";

  const allowedExtensions = [".pdf", ".doc", ".docx"];
  const filename = file.name.toLowerCase();
  const validExtension = allowedExtensions.some((extension) =>
    filename.endsWith(extension));

  if (!validExtension) {
    return "Only PDF, DOC and DOCX files are allowed.";
  }

  if (file.size > 10 * 1024 * 1024) {
    return "The file must be smaller than 10 MB.";
  }

  return "";
}

export function validateDuplicateStudentPhone(value, _values, context = {}) {
  const { records = [], editingId = null } = context;
  const phone = normalizePhone(value);
  const duplicate = records.some((student) =>
    student.id !== editingId && normalizePhone(student.phone) === phone);

  return duplicate
    ? "Another student already uses this phone number."
    : "";
}
