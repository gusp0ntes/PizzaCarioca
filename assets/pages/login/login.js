import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

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

// Elementos da interface
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