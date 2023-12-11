import {
  CollectionReference,
  Firestore,
  addDoc,
  collection,
  getDocs
} from "firebase/firestore"

const register = async (db: Firestore, username: string, email: string, password: string) => {
  const usersReference: CollectionReference = collection(db, 'users');
  const docsSnapshot = await getDocs(usersReference);
  const users = docsSnapshot.docs.map(d => d.data());

  const emailTaken = users.filter(user => user.email === email).length > 0;
  if (emailTaken) {
    return { error: "Email has already been taken." };
  } else {
    const newUser = {
      username: username,
      email: email,
      password: password
    };

    await addDoc(usersReference, newUser);
    return { username: username };
  }
};

export { register };