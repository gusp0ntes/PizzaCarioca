import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { firebaseConfig } from '../../config/firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleLoginButton = document.getElementById('google-login');

// Função para login com Google
googleLoginButton.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Usuário logado:', user);
      window.location.href = "../../../index.html";

    })
    .catch((error) => {
      console.error('Erro ao fazer login:', error);
      window.location.href = "../../../erro.html";
    });
});

// Função para logout (opcional)
const logoutButton = document.getElementById('logout'); // Adicione esse elemento ao HTML se precisar
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
      console.log('Usuário desconectado');
    }).catch((error) => {
      console.error('Erro ao desconectar:', error);
      window.location.href = "../../../erro.html";
    });
  });
}

// Observa mudanças no estado de autenticação
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`Usuário autenticado: ${user.displayName || user.email}`);
  } else {
    console.log('Usuário não autenticado');
  }
});