import {
  CollectionReference,
  Firestore,
  collection,
  doc,
  getDocs,
  updateDoc
} from "firebase/firestore";

const forgot = async (db: Firestore, email: string, password: string) => {
  const usersReference: CollectionReference = collection(db, 'users');
  const docsSnapshot = await getDocs(usersReference);
  const users = docsSnapshot.docs.map(d => {
    const id = d.id;
    const email = d.data().email;
    return { id, email };
  });

  const user = users.filter(user => user.email === email)[0];
  if (user === undefined) {
    return { error: "Invalid email, user does not exist." };
  } else {
    await updateDoc(doc(db, "users", user.id), { password: password });
    return {};
  }
};

export { forgot };