import { deleteFoyer } from "../services/foyerService";

export default function FoyerTable({ foyers, refresh }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th>Nom</th>
          <th>Personnes</th>
          <th>Ampoules</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {foyers.map((f) => (
          <tr key={f.id} className="text-center border-t">
            <td>{f.nom}</td>
            <td>{f.nbPersonnes}</td>
            <td>{f.nbAmpoules}</td>
            <td>{f.email}</td>

            <td>
              <button
                onClick={() => {
                  deleteFoyer(f.id);
                  refresh();
                }}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
