// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore , collection ,getDoc ,doc,addDoc,updateDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNsof1JFw6DYlSUPDORtkzI5WBjvmCtB4",
  authDomain: "ecomerce-guitar.firebaseapp.com",
  projectId: "ecomerce-guitar",
  storageBucket: "ecomerce-guitar.appspot.com",
  messagingSenderId: "754330307025",
  appId: "1:754330307025:web:8910cba27d1f487e94b8f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getAllGitars(){
  try{
    const data = collection(db,"items");
    const guitarCollection = await getDocs(data);
    const restult = guitarCollection.docs.map( guitar => {
      return {...guitar.data(),id:guitar.id}
    });
    return restult;
  }
  catch (err) {
    console.log(err);
  }
}

export async function getGuitar(guitarId){
  try{
    const data = collection(db,"items");
    const guitarRef = doc(data,guitarId);

    let resultDoc = await getDoc(guitarRef)
    return {...resultDoc.data(), id:resultDoc.id}
  }
  catch (err) {
    console.log(err);
  }
}

export async function createOrder({data}){
  try{
    
    const col = collection(db,"orders");
    const order = await addDoc(col,data)
    alert(order.id)
    data.items.forEach(element => updateStock(element.id,element.quantity));
  }
  catch (err) {
    console.log(err);
  }
}

export async function updateStock(guitarId,numLess){
  try{
      const data = collection(db,"items");  
      const stockRef = doc(data,guitarId);
      let response = await getDoc(stockRef)
      let stockUpdated = response.data().stock - numLess
      await updateDoc(stockRef,{stock:stockUpdated})
    console.log('actualizado el stock')
  }
  catch (err) {
    console.log(err);
  }
}


