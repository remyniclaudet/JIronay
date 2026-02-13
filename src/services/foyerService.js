import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

const foyerRef = collection(db, "foyers");

export const getFoyers = async () => {
  const snapshot = await getDocs(foyerRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addFoyer = async (foyer) => {
  return await addDoc(foyerRef, foyer);
};

export const deleteFoyer = async (id) => {
  return await deleteDoc(doc(db, "foyers", id));
};

export const updateFoyer = async (id, data) => {
  return await updateDoc(doc(db, "foyers", id), data);
};
