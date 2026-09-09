export const grades = Array.from({ length: 8 }, (_, index) => ({
  id: index + 6,
  name: `Grade ${index + 6}`,
  students: [42, 48, 51, 46, 39, 34, 29, 22][index],
  nextClass: [
    "Mon 4:00 PM", "Tue 4:00 PM", "Wed 4:00 PM", "Thu 4:00 PM",
    "Fri 4:00 PM", "Sat 8:00 AM", "Sat 10:30 AM", "Sun 8:00 AM",
  ][index],
}));
export const students = [
  { id: 1, name: "Kasun Perera", phone: "077 123 4567",
    grade: 8, status: "Paid" },
  { id: 2, name: "Nethmi Silva", phone: "071 824 9031",
    grade: 10, status: "Paid" },
  { id: 3, name: "Dinuka Fernando", phone: "076 449 1820",
    grade: 9, status: "Pending" },
  { id: 4, name: "Ayesha Bandara", phone: "075 603 1184",
    grade: 11, status: "Unpaid" },
  { id: 5, name: "Sahan Jayasinghe", phone: "078 945 2057",
    grade: 7, status: "Paid" },
  { id: 6, name: "Tharushi Madushani", phone: "070 318 7724",
    grade: 13, status: "Paid" },
];
export const timetable = [
  { id: 1, grade: 6, day: "Monday", time: "4:00 PM - 5:30 PM",
    topic: "Introduction" },
  { id: 2, grade: 7, day: "Tuesday", time: "4:00 PM - 5:30 PM",
    topic: "Core lesson" },
  { id: 3, grade: 8, day: "Wednesday", time: "4:00 PM - 6:00 PM",
    topic: "Theory and questions" },
  { id: 4, grade: 10, day: "Friday", time: "4:00 PM - 6:00 PM",
    topic: "Revision" },
  { id: 5, grade: 13, day: "Sunday", time: "8:00 AM - 11:00 AM",
    topic: "Advanced paper class" },
];
export const zoomLinks = [
  { id: 1, grade: 6, title: "Monday live class",
    date: "14 Sep 2026", status: "Active" },
  { id: 2, grade: 8, title: "Wednesday theory class",
    date: "16 Sep 2026", status: "Active" },
  { id: 3, grade: 10, title: "Friday revision",
    date: "18 Sep 2026", status: "Scheduled" },
  { id: 4, grade: 13, title: "Sunday paper class",
    date: "20 Sep 2026", status: "Scheduled" },
]
export const tutes = [
  { id: 1, title: "Unit 01 - Foundations", grade: 6,
    uploaded: "03 Sep 2026", status: "Published" },
  { id: 2, title: "Unit 04 - Practice", grade: 8,
    uploaded: "06 Sep 2026", status: "Published" },
  { id: 3, title: "Revision Pack A", grade: 10,
    uploaded: "08 Sep 2026", status: "Draft" },
  { id: 4, title: "Model Questions 02", grade: 13,
    uploaded: "09 Sep 2026", status: "Published" },
];
export const papers = [
  { id: 1, title: "Term Test 1 - 2025", grade: 7,
    category: "Past Paper", status: "Published" },
  { id: 2, title: "September Model Paper", grade: 9,
    category: "Model Paper", status: "Published" },
  { id: 3, title: "Structured Essay Set", grade: 11,
    category: "Worksheet", status: "Draft" },
  { id: 4, title: "Paper Class Week 03", grade: 13,
    category: "Model Paper", status: "Published" },
];
export const courses = [
  { id: 1, title: "Exam Basics", grade: 8,
    type: "Free", price: "Free", status: "Published" },
  { id: 2, title: "Complete Grade 10 Revision", grade: 10,
    type: "Paid", price: "LKR 3,500", status: "Published" },
  { id: 3, title: "A/L Paper Mastery", grade: 13,
    type: "Paid", price: "LKR 5,000", status: "Draft" },
];
export const payments = [
  { id: 1, student: "Kasun Perera", grade: 8,
    month: "September 2026", amount: "LKR 2,000", status: "Paid" },
  { id: 2, student: "Nethmi Silva", grade: 10,
    month: "September 2026", amount: "LKR 2,500", status: "Paid" },
  { id: 3, student: "Dinuka Fernando", grade: 9,
    month: "September 2026", amount: "LKR 2,000", status: "Pending" },
  { id: 4, student: "Ayesha Bandara", grade: 11,
    month: "September 2026", amount: "LKR 3,000", status: "Unpaid" },
];
export const announcements = [
  { id: 1, title: "Friday class time changed", audience: "Grade 10",
    date: "09 Sep 2026", status: "Published" },
  { id: 2, title: "New September tute available", audience: "All grades",
    date: "08 Sep 2026", status: "Published" },
  { id: 3, title: "Holiday class notice", audience: "Grades 6-9",
    date: "07 Sep 2026", status: "Draft" },
]