
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

// Configuração do Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBgHghy5MUH8Yldjd9SAT3EkUciC6NtN5A",
  authDomain: "pzcarioca-bc945.firebaseapp.com",
  projectId: "pzcarioca-bc945",
  storageBucket: "pzcarioca-bc945.appspot.com",
  messagingSenderId: "1066231544171",
  appId: "1:1066231544171:web:0a40accc799f944410342e",
  measurementId: "G-V1SZYRTVB8"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Referência ao botão de cadastro com Google
const googleButton = document.querySelector('.signupwithgoogle');

// Função para autenticar com Google
googleButton.addEventListener('click', (e) => {
  e.preventDefault();

  signInWithPopup(auth, provider)
    .then((result) => {
      // Sucesso na autenticação
      const user = result.user;
      console.log('Usuário autenticado:', user);

      // Redireciona o usuário após o login
      window.location.href = "/index.html";
    })
    .catch((error) => {
      console.error('Erro durante a autenticação:', error);
    });
});