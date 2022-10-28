import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCvJay1pVgziCYR1MtL2UvmB7RcJ-ctUus",
        authDomain: "tablica-demo.firebaseapp.com",
        databaseURL: "https://tablica-demo-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "tablica-demo",
        storageBucket: "tablica-demo.appspot.com",
        messagingSenderId: "933549254782",
        appId: "1:933549254782:web:080677d42f3893e85ed02f",
        measurementId: "G-CB0T9FMZHR"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    return getDatabase(app);
}

export default StartFirebase;