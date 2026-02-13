import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const addTestFoyer = async () => {
  await addDoc(collection(db, "foyers"), {
    nom: "Test famille",
    nbPersonnes: 2,
    nbAmpoules: 3
  });
};
