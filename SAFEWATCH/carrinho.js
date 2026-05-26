document.addEventListener("DOMContentLoaded", function () {
    
    const carrinho = document.getElementById("carrinho-lateral");
    const btnFechar = document.getElementById("fechar-carrinho");
    const btnAbrir = document.getElementById("abrir-carrinho"); 
    
    // Seleciona os botões 
    const btnMais = document.getElementById("btn-mais");
    const btnMenos = document.getElementById("btn-menos");
    const inputQtd = document.getElementById("input-qtd");
    
    // Seleciona os campos de texto 
    const precoExibido = document.getElementById("preco-exibido");
    const parcelasExibidas = document.getElementById("parcelas-exibidas");
    const subtotalValor = document.getElementById("subtotal-valor");

    const PRECO_UNIDADE = 650.00;

    if (btnAbrir) {
        btnAbrir.addEventListener("click", function () {
            carrinho.classList.add("ativa");
        });
    }



    
    if (btnFechar) {
        btnFechar.addEventListener("click", function () {
            carrinho.classList.remove("ativa");
        });
    }




    function atualizarPrecos(quantidade) {
        const total = PRECO_UNIDADE * quantidade;
       

        //toLocaleString: Transforma o número em moeda brasileira
        precoExibido.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        subtotalValor.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //parcelasExibidas.innerText: Atualiza o texto 
        parcelasExibidas.innerText = `ou 12x de ${valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }



// o & siginifca "e"
//addEventListener:espera o evento acontecer
    if (btnMais && btnMenos && inputQtd) {
        btnMais.addEventListener("click", function () {
            let qtd = parseInt(inputQtd.value);
            qtd++;
            inputQtd.value = qtd;
            atualizarPrecos(qtd);
        });

        btnMenos.addEventListener("click", function () {
            let qtd = parseInt(inputQtd.value);
            if (qtd > 1) {
                qtd--;
                inputQtd.value = qtd;
                atualizarPrecos(qtd);
            }
        });
    }
});