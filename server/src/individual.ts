import { Firestore, collection, query, where, getDocs, CollectionReference } from "firebase/firestore";

const getIndividualSpace = async (db: Firestore, spaceTitle: string) => {
  const spacesRef: CollectionReference = collection(db, 'spaces');
  const q = query(spacesRef, where("title", "==", spaceTitle));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data())[0] || null;
};


export { getIndividualSpace };
