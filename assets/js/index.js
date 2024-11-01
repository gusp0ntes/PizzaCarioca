import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const firebaseConfig = {
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

const userInfo = document.getElementById('user-info');
const loginLink = document.getElementById('login-link');
const userName = document.getElementById('user-name');
const logoutButton = document.getElementById('logout');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Usuário está logado
        if (userInfo && loginLink && userName) {
            userInfo.style.display = 'flex';
            loginLink.style.display = 'none';
            userName.textContent = `Olá, ${user.displayName || user.email}`;
        }
    } else {
        // Usuário não está logado
        if (userInfo && loginLink) {
            userInfo.style.display = 'none';
            loginLink.style.display = 'block';
        }
    }
});

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
            console.log('Usuário desconectado');
        }).catch((error) => {
            console.error('Erro ao desconectar:', error);
        });
    });
}

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// Inicializa o menu mobile
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();


mobileNavbar.init();
