const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o(a) cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value) 
    if (formValido) {  
        const containerMensagemSucesso = document.querySelector('.sucess-mensage')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-mensage').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNome(e.target.value);
    if (!formValido) { 
        nomeBeneficiario.classList.add('error');
        //nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-mensage').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-mensage').style.display = 'none';
    }
});

