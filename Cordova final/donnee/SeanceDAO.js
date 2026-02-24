// donne/SeanceDAO.js
import { db } from "../firebase.js";

import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export default class SeanceDAO {
  constructor() {
    this.nomCollection = "seances";
  }

  async lister() {
    const ref = collection(db, this.nomCollection);
    const q = query(ref, orderBy("dateSeance", "desc"));
    const snap = await getDocs(q);

    return snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));
  }

  async ajouter(seance) {
    const ref = collection(db, this.nomCollection);

  const seanceFirestore = {
  nom: seance.nom ?? "",
  type: seance.type ?? "",
  partiecible: seance.partiecible ?? "",
  description: seance.description ?? "",

  dateSeance: seance.dateSeance ?? "",
  dureeMinutes: Number(seance.dureeMinutes ?? 0),
  intensite: seance.intensite ?? "moyenne",
  caloriesEstimees: Number(seance.caloriesEstimees ?? 0),
  notes: seance.notes ?? "",

  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
};
    const docRef = await addDoc(ref, seanceFirestore);
    return { id: docRef.id, ...seanceFirestore };
  }

  async modifier(seanceModifiee) {
    if (!seanceModifiee?.id) throw new Error("modifier(): id manquant");

    const refDoc = doc(db, this.nomCollection, seanceModifiee.id);

    const payload = {
  nom: seanceModifiee.nom ?? "",
  type: seanceModifiee.type ?? "",
  partiecible: seanceModifiee.partiecible ?? "",
  description: seanceModifiee.description ?? "",

  dateSeance: seanceModifiee.dateSeance ?? "",
  dureeMinutes: Number(seanceModifiee.dureeMinutes ?? 0),
  intensite: seanceModifiee.intensite ?? "moyenne",
  caloriesEstimees: Number(seanceModifiee.caloriesEstimees ?? 0),
  notes: seanceModifiee.notes ?? "",

  updatedAt: serverTimestamp(),
};

    await updateDoc(refDoc, payload);
    return { ...seanceModifiee, ...payload };
  }

  async supprimer(id) {
    if (!id) throw new Error("supprimer(): id manquant");
    const refDoc = doc(db, this.nomCollection, id);
    await deleteDoc(refDoc);
  }
}
