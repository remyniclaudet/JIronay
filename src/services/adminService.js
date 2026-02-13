import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const addAdmin = async (uid, email) => {
  await setDoc(doc(db, "admins", uid), {
    email,
    role: "admin",
    createdAt: new Date()
  });
};
