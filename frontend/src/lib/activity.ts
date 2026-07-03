import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export type ActivityAction = 'CREATE' | 'UPDATE' | 'DELETE' | 'SYSTEM';

export const logActivity = async (action: ActivityAction, moduleName: string, detail: string) => {
  try {
    await addDoc(collection(db, "activities"), {
      action,
      moduleName,
      detail,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Gagal menyimpan log aktivitas:", error);
  }
};
