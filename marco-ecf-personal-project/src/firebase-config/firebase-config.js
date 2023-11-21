
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBNwnvDuwQHKoBBgKHAAwuzpiON75AfqXw",
  authDomain: "personal-project-ecf.firebaseapp.com",
  projectId: "personal-project-ecf",
  storageBucket: "personal-project-ecf.appspot.com",
  messagingSenderId: "452995842172",
  appId: "1:452995842172:web:31f61518cad8dcdcbc49f9"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
