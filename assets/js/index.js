import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { firebaseConfig } from '../config/firebaseConfig.js';



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userInfo = document.getElementById('user-info');
const loginLink = document.getElementById('login-link');
const userName = document.getElementById('user-name');
const logoutButton = document.getElementById('logout');

onAuthStateChanged(auth, (user) => {
    if (user) {
        userInfo.style.display = 'flex';
        loginLink.style.display = 'none';
        userName.textContent = `Olá, ${user.displayName || user.email}`;
    } else {
        userInfo.style.display = 'none';
        loginLink.style.display = 'block';
    }
});

logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('Usuário desconectado');
    }).catch((error) => {
        console.error('Erro ao desconectar:', error);
    });
});

