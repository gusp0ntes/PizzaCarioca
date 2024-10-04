import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBgHghy5MUH8Yldjd9SAT3EkUciC6NtN5A",
  authDomain: "pzcarioca-bc945.firebaseapp.com",
  projectId: "pzcarioca-bc945",
  storageBucket: "pzcarioca-bc945.appspot.com",
  messagingSenderId: "1066231544171",
  appId: "1:1066231544171:web:0a40accc799f944410342e",
  measurementId: "G-V1SZYRTVB8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };