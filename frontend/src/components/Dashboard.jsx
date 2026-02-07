export default function Dashboard({ employees, attendance }) {
  const today = new Date().toISOString().split("T")[0];

  const todayAttendance = attendance.filter((a) => a.date === today);

  const presentToday = todayAttendance.filter(
    (a) => a.status === "Present",
  ).length;

  const absentToday = todayAttendance.filter(
    (a) => a.status === "Absent",
  ).length;

  return (
    <div className="dashboard">
      <div className="card stat">
        <h2>{employees.length}</h2>
        <p>Total Employees</p>
      </div>

      <div className="card stat present">
        <h2>{presentToday}</h2>
        <p>Present Today</p>
      </div>

      <div className="card stat absent">
        <h2>{absentToday}</h2>
        <p>Absent Today</p>
      </div>
    </div>
  );
}
