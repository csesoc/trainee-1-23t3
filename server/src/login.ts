import {
  CollectionReference,
  Firestore,
  collection,
  getDocs
} from "firebase/firestore";

const login = async (db: Firestore, email: string, password: string) => {
  const usersReference: CollectionReference = collection(db, 'users');
  const docsSnapshot = await getDocs(usersReference);
  const users = docsSnapshot.docs.map(d => d.data());

  const user = users.filter(user => user.email === email && user.password === password)[0];
  if (user === undefined) {
    return { error: "Invalid email or password." };
  } else {
    return { username: user.username };
  }
};

export { login };