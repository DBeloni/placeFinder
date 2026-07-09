import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
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

export async function cadastrarUsuario(email, senha) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        return { sucesso: true, usuario: userCredential.user };
    } catch (error) {
        let chaveErro = "error_generic";
        if (error.code === "auth/email-already-in-use") chaveErro = "error_email_in_use";
        else if (error.code === "auth/weak-password") chaveErro = "error_weak_password";
        else if (error.code === "auth/invalid-email") chaveErro = "error_invalid_email";
        return { sucesso: false, erroKey: chaveErro };
    }
}

export async function logarUsuario(email, senha) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        return { sucesso: true, usuario: userCredential.user };
    } catch (error) {
        let chaveErro = "error_generic";
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
            chaveErro = "error_user_not_found";
        } else if (error.code === "auth/invalid-email") {
            chaveErro = "error_invalid_email";
        }
        return { sucesso: false, erroKey: chaveErro };
    }
}

export async function deslogarUsuario() {
    try {
        await signOut(auth);
        return { sucesso: true };
    } catch (error) {
        return { sucesso: false, erroKey: "error_generic" };
    }
}