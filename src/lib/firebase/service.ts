import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retriveData(colectionName: string) {
  const snapshot = await getDocs(collection(firestore, colectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retriveDataById(colectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, colectionName, id));
  const data = snapshot.data();
  return data;
}

export async function retriveDataByField(
  colectionName: string,
  field: string,
  value: string
) {
  const q = query(
    collection(firestore, colectionName),
    where(field, "==", value)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function addData(
  colectionName: string,
  data: any,
  callback: Function
) {
  await addDoc(collection(firestore, colectionName), data)
    .then(() => {
      callback(true);
    })
    .catch((error) => {
      callback(false);
      console.log(error);
    });
}
