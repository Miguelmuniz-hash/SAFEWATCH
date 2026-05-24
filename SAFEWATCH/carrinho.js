document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos da aba lateral e botões de gatilho
    const carrinho = document.getElementById("carrinho-lateral");
    const btnFechar = document.getElementById("fechar-carrinho");
    const btnAbrir = document.getElementById("abrir-carrinho"); // Novo gatilho do ícone
    
    // Seleciona os botões de mais e menos e o campo de texto da quantidade
    const btnMais = document.getElementById("btn-mais");
    const btnMenos = document.getElementById("btn-menos");
    const inputQtd = document.getElementById("input-qtd");
    
    // Seleciona os campos de texto onde os preços e parcelas são exibidos
    const precoExibido = document.getElementById("preco-exibido");
    const parcelasExibidas = document.getElementById("parcelas-exibidas");
    const subtotalValor = document.getElementById("subtotal-valor");

    // Preço unitário base
    const PRECO_UNITARIO = 650.00;

    // 1. AÇÃO DE ABRIR A ABA LATERAL AO CLICAR NO ÍCONE DO CARRINHO
    if (btnAbrir && carrinho) {
        btnAbrir.addEventListener("click", function () {
            carrinho.classList.add("ativa");
        });
    }

    // 2. AÇÃO DE FECHAR A ABA LATERAL AO CLICAR NO "X"
    if (btnFechar && carrinho) {
        btnFechar.addEventListener("click", function () {
            carrinho.classList.remove("ativa");
        });
    }

    // 3. FUNÇÃO QUE CALCULA OS VALORES AUTOMATICAMENTE
    function atualizarPrecos(quantidade) {
        const total = PRECO_UNITARIO * quantidade;
        const valorParcela = total / 12;

        precoExibido.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        subtotalValor.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        parcelasExibidas.innerText = `ou 12x de ${valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }

    // 4. EVENTOS DE CLIQUE NOS BOTÕES DE + E -
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