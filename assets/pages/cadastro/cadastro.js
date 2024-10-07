import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { firebaseConfig } from '../../config/firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const googleButton = document.querySelector('.signupwithgoogle');

googleButton.addEventListener('click', (e) => {
  e.preventDefault();

  signInWithPopup(auth, provider)
    .then((result) => {

      const user = result.user;
      console.log('Usuário autenticado:', user);

      window.location.href = "../../../index.html";
    })
    .catch((error) => {
      console.error('Erro durante a autenticação:', error);
      window.location.href = "../../../erro.html";
    });
});
