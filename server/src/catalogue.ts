import {
  CollectionReference,
  Firestore,
  collection,
  getDocs
} from "firebase/firestore";

const catalogue = async (db: Firestore) => {
  const spacesReference: CollectionReference = collection(db, 'spaces');
  const docsSnapshot = await getDocs(spacesReference);
  return docsSnapshot.docs.map(d => d.data())
};

export { catalogue };