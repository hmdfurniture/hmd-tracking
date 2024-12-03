// Configurações do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMINIO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_BUCKET.appspot.com",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

document.getElementById("searchButton").addEventListener("click", async () => {
    const code = document.getElementById("searchInput").value.trim();
    const message = document.getElementById("resultMessage");

    if (!code) {
        message.textContent = "Por favor, insira um código.";
        message.style.color = "red";
        return;
    }

    try {
        const fileRef = storage.ref(`pdfs/${code}.pdf`);
        const url = await fileRef.getDownloadURL();
        window.open(url, "_blank");
    } catch (error) {
        message.textContent = "Documento não encontrado.";
        message.style.color = "red";
    }
});

// Acesso à administração (atualização futura)
document.getElementById("adminAccess").addEventListener("click", () => {
    alert("Funcionalidade em construção.");
});
