import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import FoyerForm from "../components/FoyerForm";
import FoyerTable from "../components/FoyerTable";
import { getFoyers } from "../services/foyerService";

export default function Foyers() {
  const [foyers, setFoyers] = useState([]);

  const loadFoyers = async () => {
    const data = await getFoyers();
    setFoyers(data);
  };

  useEffect(() => {
    loadFoyers();
  }, []);

  return (
    <Layout>
      <FoyerForm refresh={loadFoyers} />
      <FoyerTable foyers={foyers} refresh={loadFoyers} />
    </Layout>
  );
}
