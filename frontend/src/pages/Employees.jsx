import { useEffect, useState } from "react";
import api from "../services/api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import Loader from "../components/Loader";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await api.get("/employees/");
      setEmployees(res.data);
    } catch (err) {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h1>Employee Management</h1>

      <EmployeeForm onSuccess={fetchEmployees} />

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {!loading && employees.length === 0 && <p>No employees found.</p>}

      <EmployeeList employees={employees} onDelete={fetchEmployees} />
    </div>
  );
}
