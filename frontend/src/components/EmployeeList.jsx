import api from "../services/api";

export default function EmployeeList({ employees, onDelete }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this employee?")) return;
    await api.delete(`/employees/${id}/`);
    onDelete();
  };

  return (
    <div className="card">
      <h3>Employee List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Dept</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.employee_id}</td>
              <td>{e.full_name}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
