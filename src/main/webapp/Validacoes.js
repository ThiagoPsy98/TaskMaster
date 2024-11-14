function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    if (email === '') {
        alert("Por favor, insira seu email.");
        return false;
    }

    if (senha === '') {
        alert("Por favor, insira sua senha.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    return true;
}

