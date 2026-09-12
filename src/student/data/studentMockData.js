export const studentMockData = {
  id: "student-001",
  fullName: "Test Student",
  phone: "0771234567",
  grade: 10,
  school: "Test School",
  status: "active",
  paymentStatus: "paid",

  nextClass: {
    subject: "Mathematics",
    date: "2026-09-15",
    time: "4:00 PM",
    zoomAvailable: true,
  },

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
  ],

  purchasedCourseIds: ["course-001"],
};