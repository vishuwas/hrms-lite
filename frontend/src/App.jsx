import { useState } from "react";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import "./index.css";

function App() {
  const [page, setPage] = useState("employees");

  return (
    <div>
      <nav className="nav">
        <button
          className={page === "employees" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("employees")}
        >
          Employees
        </button>

        <button
          className={page === "attendance" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("attendance")}
        >
          Attendance
        </button>
      </nav>

      {page === "employees" && <Employees />}
      {page === "attendance" && <Attendance />}
    </div>
  );
}

export default App;
