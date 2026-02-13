import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Foyers", path: "/foyers" },
    { name: "Factures", path: "/factures" },
    { name: "Répartitions", path: "/repartitions" },
    { name: "Historique", path: "/historique" },
    { name: "Paramètres", path: "/parametres" }
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10">Jironay</h1>

      {/* Menu */}
      <nav className="flex flex-col gap-3">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-blue-500" : "hover:bg-gray-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
