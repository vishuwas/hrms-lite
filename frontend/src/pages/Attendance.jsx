import { useEffect, useState } from "react";
import api from "../services/api";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";
import Loader from "../components/Loader";
import Dashboard from "../components/Dashboard";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const [empRes, attRes] = await Promise.all([
        api.get("/employees/"),
        api.get("/attendance/"),
      ]);
      setEmployees(empRes.data);
      setAttendance(attRes.data);
    } catch {
      setError("Failed to load attendance data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Attendance Management</h1>

      <AttendanceForm employees={employees} onSuccess={fetchData} />

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {!loading && attendance.length === 0 && (
        <p>No attendance records found.</p>
      )}

      <AttendanceList attendance={attendance} employees={employees} />
      <Dashboard employees={employees} attendance={attendance} />
    </div>
  );
}
