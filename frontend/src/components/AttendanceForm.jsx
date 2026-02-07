import { useState } from "react";
import api from "../services/api";

export default function AttendanceForm({ employees, onSuccess }) {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/attendance/", form);
      setForm({ employee: "", date: "", status: "Present" });
      setError("");
      onSuccess();
    } catch {
      setError("Attendance already marked for this date");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Mark Attendance</h3>

      {error && <p className="error">{error}</p>}

      <select
        name="employee"
        value={form.employee}
        onChange={handleChange}
        required
      >
        <option value="">Select Employee</option>
        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.full_name} ({emp.employee_id})
          </option>
        ))}
      </select>

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit">Save Attendance</button>
    </form>
  );
}
