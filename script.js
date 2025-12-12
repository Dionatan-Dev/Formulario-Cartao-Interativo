// Validação e Interação NOME CARTÃO
const nome_card = document.getElementById("nome-inter");
const input_nome = document.getElementById("input-nome");

input_nome.addEventListener('input', function(){
    const texto_input = event.target.value.toUpperCase();
    const alert = document.getElementById("alert-name");

    if(texto_input.length < 25){
        if(texto_input.length < 5){
            alert.textContent = "Nome precisa ter no mínimo 5 caracteres";
        }else{
            alert.textContent = '';
            if(texto_input != ''){
                nome_card.textContent = texto_input;
            }else{
                nome_card.textContent = 'SEU NOME';
            }    
        }
        
    }
})

function mascaraNome(campo) {
    let v = campo.value;

    v = v.replace(/[^A-Za-zÀ-ÿ\s]/g, ''); // Remove tudo que NÃO é letra ou espaço

    campo.value = v;
}

// Validação e Interação NÚMERO CARTÃO

const num_card = document.getElementById('num-card-inter');
const input_num_card = document.getElementById('input-num-card');

input_num_card.addEventListener('input', function(){
    const texto_input = event.target.value;
    const alert = document.getElementById("alert-num")

    if(texto_input != ''){
        if(texto_input.length<19){
            alert.textContent = "Número do cartão precisa ter 16 números"
        }else if(texto_input.length>19){
            alert.textContent = "Apenas 16 números"
        }else{
            num_card.textContent = texto_input;
            alert.textContent = ''
        }
    }else{
        num_card.textContent = "0000 0000 0000 0000"
    }
})

function mascaraCartao(campo) {
    let v = campo.value;

    v = v.replace(/\D/g, '');                // Remove tudo que não é dígito
    v = v.replace(/(\d{4})(?=\d)/g, '$1 ');  // Insere espaço a cada 4 dígitos

    campo.value = v.trim();                 
}


// Validação e Interação VALIDADE CARTÃO

const month_valid = document.getElementById("month-valid-inter");
const input_month = document.getElementById("input-month-card");
const year_valid = document.getElementById("year-valid-inter")
const input_year = document.getElementById("input-year-card");


input_month.addEventListener('input', function(){
    const texto_input = event.target.value; 
    const alert = document.getElementById("alert-month")

    if(texto_input.length < 3){
        if(texto_input != ''){
            if(texto_input > 0 && texto_input < 13){
                if(texto_input.length <2){
                    month_valid.textContent = '0' + texto_input
                }else{
                    month_valid.textContent = texto_input;
                }
                
                    alert.textContent = '';
                
                
            }else{
                alert.textContent = "Mês Inválido";
            }
        }else{
            month_valid.textContent = '00'
        }
    }else{
        alert.textContent = "Mês Inválido";
    }
})

input_year.addEventListener('input', function(){
    const texto_input = event.target.value;
    const alert = document.getElementById("alert-year")

    if(texto_input.length < 3){
        if(texto_input != ''){
            if(texto_input > 0 && texto_input < 99){
                if(texto_input.length < 2){
                    year_valid.textContent = '0' + texto_input;
                }else{
                    year_valid.textContent = texto_input;
                }
                
                alert.textContent = '';
                
            }else{
                alert.textContent = "Data Inválida";
            }
        }else{
            year_valid.textContent = '00'
        }
    }else{
        alert.textContent = "Ano Inválido";
    }
})

// Validação e Interação CVV CARTÃO
const cvv_card = document.getElementById('cvv-card-inter');
const input_cvv_card = document.getElementById('input-cvv-card');

input_cvv_card.addEventListener('input', function(){
    const texto_input = event.target.value;
    const alert = document.getElementById("alert-cvv")

    if(texto_input != ''){
        
        if(texto_input.length<3){
            alert.textContent = "Precisa ter 3 números"
        }else if(texto_input.length>3){
            alert.textContent = "Apenas 3 números"
        }else{
            cvv_card.textContent = texto_input;
            alert.textContent = ''
        }
    }else{
        cvv_card.textContent = "000"
    }
})


// Validação Formulário

const form = document.getElementById("form");
form.addEventListener("submit", function(){
    const alertName = document.getElementById("alert-name");
    
    const nome = input_nome.value.trim();
    const num = input_num_card
    let isValid = true;

    if(nome === '' || nome.length < 5){
        alertName.textContent = "Nome precisa ter no mínimo 5 caracteres.";
        isValid = false;
    }

    if(!isValid){
        event.preventDefault();
    }
})