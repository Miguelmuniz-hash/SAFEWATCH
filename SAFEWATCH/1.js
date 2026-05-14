document.addEventListener('DOMContentLoaded', () => {
    const btnCarrinho = document.getElementById('btn-carrinho');
    const btnComprar = document.getElementById('btn-comprar');

    function salvarProdutoNaMemoria() {
        // Pega o nome "SafeWatch Pro 3" direto do seu h1
        const nomeProduto = document.querySelector('.apresentaçãodoproduto h1').innerText;
        
        // Pega o preço "R$ 650,00" direto da sua classe .price
        const precoTexto = document.querySelector('.price').innerText;

        // Monta o objeto estruturado para salvar
        const infoPedido = {
            nome: nomeProduto,
            preco: precoTexto
        };

        // Grava no navegador
        localStorage.setItem('meuPedidoSafewatch', JSON.stringify(infoPedido));
    }

    if (btnCarrinho) {
        btnCarrinho.addEventListener('click', () => {
            salvarProdutoNaMemoria();
            alert("Produto adicionado ao carrinho com sucesso!");
        });
    }

    if (btnComprar) {
        btnComprar.addEventListener('click', () => {
            salvarProdutoNaMemoria();
        });
    }
});


