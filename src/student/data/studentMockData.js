export const students = [
  {
    id: "student-001",
    fullName: "Test Student",
    phone: "0771234567",
    grade: 10,
    school: "Test School",
    status: "active",
    paymentStatus: "paid",
    registrationDate: "2026-01-10",
    purchasedCourseIds: ["course-001"],
    payments: [
      {
        id: "payment-001",
        month: "September",
        year: 2026,
        amount: 2500,
        status: "paid",
        paymentDate: "2026-09-03",
        reference: "PAY-001",
      },
      {
        id: "payment-002",
        month: "August",
        year: 2026,
        amount: 2500,
        status: "paid",
        paymentDate: "2026-08-02",
        reference: "PAY-002",
      },
    ],
  },
];

export const studentClasses = [
  {
    id: "class-001",
    grade: 10,
    subject: "Mathematics",
    teacher: "Mr. Perera",
    date: "2026-09-15",
    time: "4:00 PM",
    zoomAvailable: true,
  },
  {
    id: "class-002",
    grade: 10,
    subject: "Science",
    teacher: "Ms. Silva",
    date: "2026-09-18",
    time: "5:00 PM",
    zoomAvailable: false,
  },
  {
    id: "class-003",
    grade: 11,
    subject: "Mathematics",
    teacher: "Mr. Perera",
    date: "2026-09-16",
    time: "6:00 PM",
    zoomAvailable: true,
  },
];

export const studentTutes = [
  {
    id: "tute-001",
    grade: 10,
    title: "Algebra Revision Tute",
    subject: "Mathematics",
    fileAvailable: true,
    requiresPayment: true,
  },
  {
    id: "tute-002",
    grade: 10,
    title: "Electricity Lesson Tute",
    subject: "Science",
    fileAvailable: true,
    requiresPayment: false,
  },
  {
    id: "tute-003",
    grade: 10,
    title: "Grammar Practice Tute",
    subject: "English",
    fileAvailable: false,
    requiresPayment: false,
  },
];

export const studentPapers = [
  {
    id: "paper-001",
    grade: 10,
    title: "Mathematics Term Test",
    subject: "Mathematics",
    year: 2025,
    paperType: "Term test",
    fileAvailable: true,
    requiresPayment: true,
  },
  {
    id: "paper-002",
    grade: 10,
    title: "Science Model Paper",
    subject: "Science",
    year: 2026,
    paperType: "Model paper",
    fileAvailable: true,
    requiresPayment: false,
  },
];

export const studentCourses = [
  {
    id: "course-001",
    title: "Grade 10 Mathematics Revision",
    subject: "Mathematics",
    description: "Recorded lessons and revision exercises.",
  },
  {
    id: "course-002",
    title: "Grade 10 Science Revision",
    subject: "Science",
    description: "Science theory lessons and model questions.",
  },
];

export function normalizePhone(value) {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("94") && digits.length === 11) {
    return `0${digits.slice(2)}`;
  }

  return digits;
}

export function findStudentByPhone(phone) {
  const normalizedPhone = normalizePhone(phone);
  return students.find((student) => student.phone === normalizedPhone) ?? null;
}

export function getStudentById(studentId) {
  return students.find((student) => student.id === studentId) ?? null;
}

export const studentMockData = students[0];
