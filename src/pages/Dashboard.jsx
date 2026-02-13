import { logoutAdmin } from "../services/authService";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <button
        onClick={logoutAdmin}
        className="bg-red-500 text-white p-2"
      >
        Logout
      </button>
    </div>
  );
}
