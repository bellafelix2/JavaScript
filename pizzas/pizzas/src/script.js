import { DATA } from "./data.js";

function resgataPizzas() {
    const divPizzas = document.getElementById('pizzas');

    for (const item of DATA.pizzas) {
        const h2Sabor = document.createElement('h2');
        h2Sabor.textContent = item.sabor;
        divPizzas.appendChild(h2Sabor);

        const img = document.createElement('img');
        img.src = item.image;
        img.className = 'pizzas-imagens';
        divPizzas.appendChild(img);

        const selectElementTamanho = document.createElement('select');
        selectElementTamanho.name = 'tamanho';

        for (const tamanho of item.venda.tamanho) {
            const optionElement = document.createElement('option');
            optionElement.value = tamanho;
            optionElement.textContent = tamanho;
            selectElementTamanho.appendChild(optionElement);
        }

        divPizzas.appendChild(selectElementTamanho);

        const selectElementPreco = document.createElement('select');
        selectElementPreco.name = 'preco';

        for (const preco of item.venda.preco) {
            const optionElement = document.createElement('option');
            optionElement.value = preco;
            optionElement.textContent = preco;
            selectElementPreco.appendChild(optionElement);
        }

        divPizzas.appendChild(selectElementPreco);
    }
}

resgataPizzas();
