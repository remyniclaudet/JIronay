import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { logoutAdmin } from "../services/authService";

export default function Navbar() {
  const { admin } = useContext(AuthContext);

  return (
    <div className="h-16 bg-white shadow flex justify-between items-center px-6">
      
      {/* Titre */}
      <h2 className="text-xl font-semibold">
        Tableau de bord Jironay
      </h2>

      {/* Admin Info */}
      <div className="flex items-center gap-4">
        
        <div className="text-right">
          <p className="font-medium">{admin?.email}</p>
          <p className="text-sm text-gray-500">Administrateur</p>
        </div>

        <button
          onClick={logoutAdmin}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
