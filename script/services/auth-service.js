import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7GLVShPYgx-fhdBq6UcAUKtCPRhhDudg",
  authDomain: "placefinder-maisprati.firebaseapp.com",
  projectId: "placefinder-maisprati",
  storageBucket: "placefinder-maisprati.firebasestorage.app",
  messagingSenderId: "621659977918",
  appId: "1:621659977918:web:426e021e1023dc996206ef",
  measurementId: "G-QPJM5DD68R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- FUNÇÃO DE CADASTRO ---
export async function cadastrarUsuario(email, senha) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        return { sucesso: true, usuario: userCredential.user };
    } catch (error) {
        let mensagemErro = "Ocorreu um erro ao cadastrar.";
        if (error.code === "auth/email-already-in-use") {
            mensagemErro = "Este e-mail já está cadastrado no sistema! Tente fazer o login.";
        } else if (error.code === "auth/weak-password") {
            mensagemErro = "A senha deve ter pelo menos 6 caracteres.";
        } else if (error.code === "auth/invalid-email") {
            mensagemErro = "O formato do e-mail digitado é inválido.";
        }
        return { sucesso: false, erro: mensagemErro };
    }
}

// --- FUNÇÃO DE LOGIN (NOVA) ---
export async function logarUsuario(email, senha) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        return { sucesso: true, usuario: userCredential.user };
    } catch (error) {
        let mensagemErro = "E-mail ou senha incorretos.";
        
        // Trata os códigos de erro do Firebase para o usuário não ver inglês feio
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
            mensagemErro = "Usuário não encontrado ou senha inválida. Verifique os dados.";
        } else if (error.code === "auth/invalid-email") {
            mensagemErro = "O formato do e-mail digitado é inválido.";
        }
        
        return { sucesso: false, erro: mensagemErro };
    }
}

// --- FUNÇÃO DE LOGOUT ---
export async function deslogarUsuario() {
    try {
        await signOut(auth);
        return { sucesso: true };
    } catch (error) {
        return { sucesso: false, erro: "Erro ao tentar sair do sistema." };
    }
}