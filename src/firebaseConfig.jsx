
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQi3p2XWR9Hw-ETSutBuFi_igkDjiWJaU",
    authDomain: "tienda-tiggy.firebaseapp.com",
    projectId: "tienda-tiggy",
    storageBucket: "tienda-tiggy.appspot.com",
    messagingSenderId: "481918353516",
    appId: "1:481918353516:web:f07f435ef1b1ef662d5849"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


