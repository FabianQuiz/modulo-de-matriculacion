import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";

const collectionName = "matriculas-pendientes";
const collectpendiente = "Fichas-socioeconomicas";

export const savematricula = (newMatricula) =>
  addDoc(collection(db, collectionName), newMatricula);

export const matricula = (Matricula) =>
addDoc(collection(db, "Matriculados"), Matricula);

export const ficha = (Ficha) =>
addDoc(collection(db, "Fichas-socioeconomicas"), Ficha);

export const updateWebsite = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetLinks = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getWebsites = () => getDocs(collection(db, collectionName));

export const deleteWebsite = (id) => deleteDoc(doc(db, collectionName, id));
export const deletependiente = (id) => deleteDoc(doc(db, collectpendiente, id));

export const getWebsite = (id) => getDoc(doc(db, collectionName, id));

export const getsolicitud = () => getDocs(collection(db, collectionName));