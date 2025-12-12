// -------------------------------
// UTILITÁRIOS
// -------------------------------

// Atualiza o texto da interface ou coloca valor padrão
function atualizarTexto(el, valor, padrao) {
    el.textContent = valor || padrao;
}

// Mostra mensagem de erro
function setErro(el, msg) {
    el.textContent = msg;
}

// Limpa mensagem de erro
function limparErro(el) {
    el.textContent = "";
}


// -------------------------------
// MÁSCARAS
// -------------------------------

// Nome: somente letras e espaços
function mascaraNome(campo) {
    campo.value = campo.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
}

// Número do cartão: 4 em 4
function mascaraCartao(campo) {
    let v = campo.value.replace(/\D/g, "");
    campo.value = v.match(/.{1,4}/g)?.join(" ") || "";
}

// -------------------------------
// CAMPOS
// -------------------------------

const nomeCardEl   = document.getElementById("nome-inter");
const numCardEl    = document.getElementById("num-card-inter");
const monthCardEl  = document.getElementById("month-valid-inter");
const yearCardEl   = document.getElementById("year-valid-inter");
const cvvCardEl    = document.getElementById("cvv-card-inter");

const inputNome      = document.getElementById("input-nome");
const inputNumCard   = document.getElementById("input-num-card");
const inputMonth     = document.getElementById("input-month-card");
const inputYear      = document.getElementById("input-year-card");
const inputCVV       = document.getElementById("input-cvv-card");

// Alertas
const alertName  = document.getElementById("alert-name");
const alertNum   = document.getElementById("alert-num");
const alertMonth = document.getElementById("alert-month");
const alertYear  = document.getElementById("alert-year");
const alertCVV   = document.getElementById("alert-cvv");


// -------------------------------
// VALIDAÇÃO EM TEMPO REAL
// -------------------------------

// NOME
inputNome.addEventListener("input", e => {
    mascaraNome(e.target);
    const nome = e.target.value.trim().toUpperCase();

    if (nome.length < 5) {
        setErro(alertName, "Nome precisa ter no mínimo 5 caracteres.");
    } else {
        limparErro(alertName);
    }

    atualizarTexto(nomeCardEl, nome, "SEU NOME");
});

// NÚMERO DO CARTÃO
inputNumCard.addEventListener("input", e => {
    mascaraCartao(e.target);
    const valor = e.target.value;

    if (valor.length < 19) {
        setErro(alertNum, "Número do cartão precisa ter 16 números.");
    } else {
        limparErro(alertNum);
    }

    atualizarTexto(numCardEl, valor, "0000 0000 0000 0000");
});

// MÊS
inputMonth.addEventListener("input", e => { 
    let m = e.target.value.replace(/\D/g, "");    // só números
    m = m.replace(/^0+/, "");                     // remove zeros à esquerda

    if (m === "") {
        atualizarTexto(monthCardEl, "00");
        return setErro(alertMonth, "Mês inválido.");
    }

    if (m < 1 || m > 12) {
        return setErro(alertMonth, "Mês inválido.");
    }

    limparErro(alertMonth);
    atualizarTexto(monthCardEl, m.padStart(2, "0")); // exibe com zero à esquerda
});


// ANO
inputYear.addEventListener("input", e => {
    let y = e.target.value.replace(/\D/g, "");    // só números
    y = y.replace(/^0+/, "");                     // remove zeros à esquerda

    if (y === "") {
        atualizarTexto(yearCardEl, "00");
        return setErro(alertYear, "Ano inválido.");
    }

    if (y < 1 || y > 99) {
        return setErro(alertYear, "Ano inválido.");
    }

    limparErro(alertYear);
    atualizarTexto(yearCardEl, y.padStart(2, "0")); // exibe com zero à esquerda
});


// CVV
inputCVV.addEventListener("input", e => {
    let cvv = e.target.value.replace(/\D/g, "");
    e.target.value = cvv;

    if (cvv.length !== 3) {
        setErro(alertCVV, "Precisa ter 3 números.");
    } else {
        limparErro(alertCVV);
    }

    atualizarTexto(cvvCardEl, cvv, "000");
});


// -------------------------------
// VALIDAÇÃO FINAL DO FORMULÁRIO
// -------------------------------

document.getElementById("form").addEventListener("submit", e => {
    let valid = true;

    // Nome
    if (inputNome.value.trim().length < 5) {
        setErro(alertName, "Nome precisa ter no mínimo 5 caracteres.");
        valid = false;
    }

    // Número do cartão
    if (inputNumCard.value.length !== 19) {
        setErro(alertNum, "Número do cartão inválido.");
        valid = false;
    }

    // Mês
    const m = Number(inputMonth.value);
    if (m < 1 || m > 12) {
        setErro(alertMonth, "Mês inválido.");
        valid = false;
    }

    // Ano
    const y = Number(inputYear.value);
    if (y < 0 || y > 99) {
        setErro(alertYear, "Ano inválido.");
        valid = false;
    }

    // CVV
    if (inputCVV.value.length !== 3) {
        setErro(alertCVV, "CVV inválido.");
        valid = false;
    }

    // Impede o envio se houver erro
    if (!valid) e.preventDefault();
});
