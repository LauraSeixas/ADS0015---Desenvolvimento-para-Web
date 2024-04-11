function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var telefone = document.getElementById('telefone').value;
    var senha = document.getElementById('senha').value;
    
    if (!validarCPF(cpf)) {
        alert('CPF inválido');
        return false;
    }

    if (!validarTelefone(telefone)) {
        alert('Telefone inválido');
        return false;
    }

    return true;
}

function validarCPF(cpf) {
    
    return true; 
}

function validarTelefone(telefone) {
    
    return true; 
}