export const columns = [
  { title: "Employee ID", dataIndex: "employeeId", key: "employeeId" },
  {
    title: "Employee Name",
    dataIndex: "employeeName",
    key: "employeeName",
    type: "input",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    type: "input",
  },
  { title: "Date", dataIndex: "date", key: "date", type: "datepicker" },
  {
    title: "Attendance Status",
    dataIndex: "attendanceStatus",
    key: "attendanceStatus",
    type: "dropdown",
  },
  { title: "Clock In", dataIndex: "clockIn", key: "clockIn", type: "input" },
  { title: "Clock Out", dataIndex: "clockOut", key: "clockOut", type: "input" },
  {
    title: "Total Hours",
    dataIndex: "totalHours",
    key: "totalHours",
    type: "input",
  },
  {
    title: "Leave Type",
    dataIndex: "leaveType",
    key: "leaveType",
    type: "dropdown",
  },
  {
    title: "Leave Balance",
    dataIndex: "leaveBalance",
    key: "leaveBalance",
    type: "input",
  },
  {
    title: "Remarks/Notes",
    dataIndex: "remarks",
    key: "remarks",
    type: "input",
  },
];

export const dataSource = [
  {
    key: "1",
    employeeId: "101",
    employeeName: "John Doe",
    department: "HR",
    date: "01/27/2025",
    attendanceStatus: "Present",
    clockIn: "9:00 AM",
    clockOut: "5:00 PM",
    totalHours: 8,
    leaveType: "-",
    leaveBalance: "10 days",
    remarks: "-",
  },
  {
    key: "2",
    employeeId: "102",
    employeeName: "Jane Smith",
    department: "Marketing",
    date: "01/27/2025",
    attendanceStatus: "Absent",
    clockIn: "-",
    clockOut: "-",
    totalHours: "-",
    leaveType: "Sick Leave",
    leaveBalance: "5 days",
    remarks: "Doctor's note",
  },
  {
    key: "3",
    employeeId: "103",
    employeeName: "David Brown",
    department: "IT",
    date: "01/27/2025",
    attendanceStatus: "Late",
    clockIn: "9:15 AM",
    clockOut: "5:00 PM",
    totalHours: 7.75,
    leaveType: "-",
    leaveBalance: "12 days",
    remarks: "Traffic delay",
  },
  {
    key: "4",
    employeeId: "104",
    employeeName: "Alice Green",
    department: "Sales",
    date: "01/27/2025",
    attendanceStatus: "On Leave",
    clockIn: "-",
    clockOut: "-",
    totalHours: "-",
    leaveType: "Vacation",
    leaveBalance: "8 days",
    remarks: "-",
  },
  {
    key: "5",
    employeeId: "105",
    employeeName: "Bob White",
    department: "Finance",
    date: "01/27/2025",
    attendanceStatus: "Early Leave",
    clockIn: "8:30 AM",
    clockOut: "3:00 PM",
    totalHours: 6.5,
    leaveType: "-",
    leaveBalance: "6 days",
    remarks: "Personal appointment",
  },
  {
    key: "6",
    employeeId: "106",
    employeeName: "Eve Black",
    department: "HR",
    date: "01/27/2025",
    attendanceStatus: "Present",
    clockIn: "9:00 AM",
    clockOut: "5:00 PM",
    totalHours: 8,
    leaveType: "-",
    leaveBalance: "15 days",
    remarks: "-",
  },
  {
    key: "7",
    employeeId: "107",
    employeeName: "George Miller",
    department: "Marketing",
    date: "01/27/2025",
    attendanceStatus: "Present",
    clockIn: "9:00 AM",
    clockOut: "5:00 PM",
    totalHours: 8,
    leaveType: "-",
    leaveBalance: "12 days",
    remarks: "-",
  },
  {
    key: "8",
    employeeId: "108",
    employeeName: "Nina White",
    department: "Finance",
    date: "01/27/2025",
    attendanceStatus: "Late",
    clockIn: "9:30 AM",
    clockOut: "5:00 PM",
    totalHours: 7.5,
    leaveType: "-",
    leaveBalance: "5 days",
    remarks: "Traffic issues",
  },
  {
    key: "9",
    employeeId: "109",
    employeeName: "Mike Taylor",
    department: "Sales",
    date: "01/27/2025",
    attendanceStatus: "On Leave",
    clockIn: "-",
    clockOut: "-",
    totalHours: "-",
    leaveType: "Maternity Leave",
    leaveBalance: "10 days",
    remarks: "Maternity",
  },
  {
    key: "10",
    employeeId: "110",
    employeeName: "Linda Johnson",
    department: "IT",
    date: "01/27/2025",
    attendanceStatus: "Absent",
    clockIn: "-",
    clockOut: "-",
    totalHours: "-",
    leaveType: "Sick Leave",
    leaveBalance: "8 days",
    remarks: "Medical reasons",
  },
  {
    key: "11",
    employeeId: "111",
    employeeName: "Chris Adams",
    department: "HR",
    date: "01/27/2025",
    attendanceStatus: "Present",
    clockIn: "9:00 AM",
    clockOut: "5:00 PM",
    totalHours: 8,
    leaveType: "-",
    leaveBalance: "20 days",
    remarks: "-",
  },
  {
    key: "12",
    employeeId: "112",
    employeeName: "Rita Morgan",
    department: "Marketing",
    date: "01/27/2025",
    attendanceStatus: "Late",
    clockIn: "9:45 AM",
    clockOut: "5:00 PM",
    totalHours: 7.25,
    leaveType: "-",
    leaveBalance: "7 days",
    remarks: "Delayed due to traffic",
  },
  {
    key: "13",
    employeeId: "113",
    employeeName: "Samantha Lee",
    department: "Finance",
    date: "01/27/2025",
    attendanceStatus: "Present",
    clockIn: "8:50 AM",
    clockOut: "5:00 PM",
    totalHours: 8.17,
    leaveType: "-",
    leaveBalance: "10 days",
    remarks: "-",
  },
  {
    key: "14",
    employeeId: "114",
    employeeName: "William Clark",
    department: "IT",
    date: "01/27/2025",
    attendanceStatus: "On Leave",
    clockIn: "-",
    clockOut: "-",
    totalHours: "-",
    leaveType: "Annual Leave",
    leaveBalance: "14 days",
    remarks: "-",
  },
  {
    key: "15",
    employeeId: "115",
    employeeName: "Jessica Davis",
    department: "HR",
    date: "01/27/2025",
    attendanceStatus: "Absent",
    clockIn: "-",
    clockOut: "-",
    totalHours: "-",
    leaveType: "Sick Leave",
    leaveBalance: "9 days",
    remarks: "Flu",
  },
  {
    key: "16",
    employeeId: "116",
    employeeName: "Oliver King",
    department: "Sales",
    date: "01/27/2025",
    attendanceStatus: "Present",
    clockIn: "9:00 AM",
    clockOut: "5:00 PM",
    totalHours: 8,
    leaveType: "-",
    leaveBalance: "10 days",
    remarks: "-",
  },
  {
    key: "17",
    employeeId: "117",
    employeeName: "Sophia Wright",
    department: "Marketing",
    date: "01/27/2025",
    attendanceStatus: "Present",
    clockIn: "9:00 AM",
    clockOut: "5:00 PM",
    totalHours: 8,
    leaveType: "-",
    leaveBalance: "10 days",
    remarks: "-",
  },
  {
    key: "18",
    employeeId: "118",
    employeeName: "James Harris",
    department: "Finance",
    date: "01/27/2025",
    attendanceStatus: "Late",
    clockIn: "9:15 AM",
    clockOut: "5:00 PM",
    totalHours: 7.75,
    leaveType: "-",
    leaveBalance: "12 days",
    remarks: "Late due to traffic",
  },
  {
    key: "19",
    employeeId: "119",
    employeeName: "Benjamin Scott",
    department: "IT",
    date: "01/27/2025",
    attendanceStatus: "On Leave",
    clockIn: "-",
    clockOut: "-",
    totalHours: "-",
    leaveType: "Compensatory Leave",
    leaveBalance: "7 days",
    remarks: "-",
  },
  {
    key: "20",
    employeeId: "120",
    employeeName: "Isabella Moore",
    department: "Sales",
    date: "01/27/2025",
    attendanceStatus: "Absent",
    clockIn: "-",
    clockOut: "-",
    totalHours: "-",
    leaveType: "Personal Leave",
    leaveBalance: "4 days",
    remarks: "Family matter",
  },
];


export const leaveRequestSchema = [
  {
    title: "Employee ID",
    dataIndex: "employeeId",
    key: "employeeId",
    type: "input",
  },
  {
    title: "Employee Name",
    dataIndex: "employeeName",
    key: "employeeName",
    type: "input",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    type: "input",
  },
  {
    title: "Leave Type",
    dataIndex: "leaveType",
    key: "leaveType",
    type: "dropdown",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    type: "datepicker",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
    type: "datepicker",
  },
  {
    title: "Reason",
    dataIndex: "Reason",
    key: "Reason",
    type: "input",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    type: "dropdown",
  },
];




export const leaveRequestData = [
  {
    employeeId: "E123",
    employeeName: "John Doe",
    department: "HR",
    leaveType: "Sick Leave",
    startDate: "2025-01-20",
    endDate: "2025-01-22",
    Reason: "Sick",
    status: "Pending",
  },
  {
    employeeId: "E124",
    employeeName: "Jane Smith",
    department: "Finance",
    leaveType: "Vacation",
    startDate: "2025-01-25",
    endDate: "2025-01-30",
    Reason: "Sick",
    status: "Pending",
  },
  {
    employeeId: "E125",
    employeeName: "Bob Johnson",
    department: "Engineering",
    leaveType: "Personal Leave",
    startDate: "2025-01-27",
    endDate: "2025-01-28",
    Reason: "Sick",
    status: "Pending",
  },
  {
    employeeId: "E126",
    employeeName: "Alice White",
    department: "Marketing",
    leaveType: "Sick Leave",
    startDate: "2025-01-28",
    endDate: "2025-01-29",
    Reason: "Sick",
    status: "Pending",
  },
  {
    employeeId: "E127",
    employeeName: "Michael Brown",
    department: "Finance",
    leaveType: "Vacation",
    startDate: "2025-01-15",
    endDate: "2025-01-20",
    Reason: "Sick",
    status: "Pending",
  },
  {
    employeeId: "E128",
    employeeName: "Emily Davis",
    department: "HR",
    leaveType: "Sick Leave",
    startDate: "2025-01-22",
    endDate: "2025-01-24",
    Reason: "Sick",
    status: "Pending",
  },
  {
    employeeId: "E129",
    employeeName: "David Wilson",
    department: "Engineering",
    leaveType: "Casual Leave",
    startDate: "2025-01-19",
    endDate: "2025-01-20",
    Reason: "Sick",
    status: "Pending",
  },
];

