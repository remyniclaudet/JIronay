import { useState } from "react";
import { addFoyer } from "../services/foyerService";

export default function FoyerForm({ refresh }) {
  const [nom, setNom] = useState("");
  const [personnes, setPersonnes] = useState("");
  const [ampoules, setAmpoules] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addFoyer({
      nom,
      nbPersonnes: Number(personnes),
      nbAmpoules: Number(ampoules),
      email,
      telephone
    });

    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">

      <h2 className="font-bold mb-3">Ajouter Foyer</h2>

      <input placeholder="Nom foyer" onChange={(e)=>setNom(e.target.value)} className="border p-2 mb-2 w-full"/>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="border p-2 mb-2 w-full"/>
      <input placeholder="Téléphone" onChange={(e)=>setTelephone(e.target.value)} className="border p-2 mb-2 w-full"/>
      <input placeholder="Nombre personnes" onChange={(e)=>setPersonnes(e.target.value)} className="border p-2 mb-2 w-full"/>
      <input placeholder="Nombre ampoules" onChange={(e)=>setAmpoules(e.target.value)} className="border p-2 mb-2 w-full"/>

      <button className="bg-blue-500 text-white p-2 rounded w-full">
        Ajouter
      </button>
    </form>
  );
}
