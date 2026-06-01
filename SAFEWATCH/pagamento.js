let pix = document.getElementById("telapix"); 
let cartao = document.getElementById("telacartao");
let boleto = document.getElementById("telaboleto");

let opcaoSelecionada = 'pix';

function trocarformaPIX() {
    opcaoSelecionada = 'pix';
    if (opcaoSelecionada === 'pix') {
        pix.style.display = 'block';
        cartao.style.display = 'none';
        boleto.style.display = 'none';  
    }
}

function trocarformaCARTAO() {
    opcaoSelecionada = 'cartao';
    if (opcaoSelecionada === 'cartao') {
        pix.style.display = 'none';     
        cartao.style.display = 'block';    
        boleto.style.display = 'none';  
    }
}

function trocarformaBOLETO() {
    opcaoSelecionada = 'boleto';
    if (opcaoSelecionada === 'boleto') {
        pix.style.display = 'none';   
        cartao.style.display = 'none';    
        boleto.style.display = 'block';  
    }
}

function Finalizar() {
    alert("Compra finalizada com sucesso!");
}
