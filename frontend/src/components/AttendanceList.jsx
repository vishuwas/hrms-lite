export default function AttendanceList({ attendance, employees }) {
  const getEmployeeName = (id) => {
    const emp = employees.find((e) => e.id === id);
    return emp ? emp.full_name : "Unknown";
  };

  return (
    <div className="card">
      <h3>Attendance Records</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((a) => (
            <tr key={a.id}>
              <td>{getEmployeeName(a.employee)}</td>
              <td>{a.date}</td>
              <td>
                <span className={`badge ${a.status.toLowerCase()}`}>
                  {a.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
