const tamanhoPizza = [
    {
        tipoTamanho: "pequena",
        tamanho: 20,
        valorTamanho: 25
    },
    {
        tipoTamanho: "média",
        tamanho: 25,
        valorTamanho: 30
    },
    {
        tipoTamanho: "gigante",
        tamanho: 35,
        valorTamanho: 40
    },
    {
        tipoTamanho: "família",
        tamanho: 40,
        valorTamanho: 45
    }
]
const tipoBorda = [
    { borda: "gorgonzola", valorBorda: 10.00 },
    { borda: "provolone", valorBorda: 8.00 },
    { borda: "catupiry", valorBorda: 5.00 },
    {
        borda: "cheddar",
        valorBorda: 5.00

    },
    {
        borda: "sem borda",
        valorBorda: 0.00
    }
]
const saborPizza = [
    {
        sabor: "calabresa",
        ingredientes: "mussarela, cebola e calabresa"
    },
    {
        sabor: "4 queijos",
        ingredientes: "mussarela, cheddar, parmesão e prato"
    },
    {
        sabor: "frango com catupiry",
        ingredientes: "mussarela, frango e catupiry"
    },
    {
        sabor: "portuguesa",
        ingredientes: "mussarela, pimentão, cebola, presunto e ovo"
    },

    {
        sabor: "camarão",
        ingredientes: "mussarela, camarão, salsinha e cebolinha"
    },
    {
        sabor: "carne seca",
        ingredientes: "mussarela, carne seca e cream cheese"
    },
    {
        sabor: "lombo canadense",
        ingredientes: " mussarela, lombo canadense, tomate, orégano e cebola"
    },
    {
        sabor: "X- fritas",
        ingredientes: "mussarela, contra-filé, presunto, bacon, ovo, tomate, cebola e batata frita "
    }
]
const bebida = [
    {
        tipoBebida: "Coca-Cola",
        valorBebida: 12.00
    },
    {
        tipoBebida: "Fanta",
        valorBebida: 10.00
    },
    {
        tipoBebida: "Guaraná Antarctica",
        valorBebida: 10.00
    },
    {
        tipoBebida: "H2O",
        valorBebida: 8.00
    },
    {
        tipoBebida: "Del Valle",
        valorBebida: 7.00
    }
]
const tipoEntrega = [
    {
        entrega: "retirada no balcão",
        valorEntrega: 0.00
    },
    {
        entrega: "delivery",
        valorEntrega: 5.00
    }
]
const formaPagamento = [
    { tipoPagamento: "cartão de débito" },
    { tipoPagamento: "cartão de crédito" },
    { tipoPagamento: "pix" },
    { tipoPagamento: "pic pay" },
    { tipoPagamento: "dinheiro" }
]


let carrinho = {};

let tamanho = document.getElementById("tamanho")

function meuPedido() {

    // tamanhoPizza = array 
    //tamanhosPizzas = id select
    // tamanhoDaPizza =  variável que recebe o select

    saberTamanhoPizza()

    saberTipoSabor()

    saberTipoBorda()

    saberTipoBebida()

    saberTipoEntrega()

    saberTipoPagamento()

    esconder()

    calcular()


    console.log(carrinho)
}


function saberTamanhoPizza() {

    let tamanhoDaPizza = document.getElementById('tamanhosPizzas').value

    for (posicao in tamanhoPizza) {

        if (tamanhoDaPizza == tamanhoPizza[posicao].tipoTamanho) {
            Object.assign(carrinho, tamanhoPizza[posicao])
            console.log(carrinho)
        }
    }
}

function saberTipoSabor() {

    let saborDaPizza = document.getElementById(`saboresPizzas`).value

    for (posicao in saborPizza) {

        if (saborDaPizza == saborPizza[posicao].sabor) {
            Object.assign(carrinho, saborPizza[posicao])
            console.log(carrinho)
        }
    }
}

function saberTipoBorda() {

    let tipoDeBorda = document.getElementById(`bordasPizzas`).value

    for (posicao in tipoBorda) {

        if (tipoDeBorda == tipoBorda[posicao].borda) {
            Object.assign(carrinho, tipoBorda[posicao])
            console.log(carrinho)
        }
    }
}

function saberTipoBebida() {

    let tipoDeBebida = document.getElementById(`bebidas`).value

    for (posicao in bebida) {

        if (tipoDeBebida == bebida[posicao].tipoBebida) {
            Object.assign(carrinho, bebida[posicao])
            console.log(carrinho)
        }
    }

}

function saberTipoEntrega() {

    let tipoDeEntrega = document.getElementById(`tiposEntregas`).value


    for (posicao in tipoEntrega) {

        if (tipoDeEntrega == tipoEntrega[posicao].entrega) {
            Object.assign(carrinho, tipoEntrega[posicao])
            console.log(carrinho)

        }

    }

}

function saberTipoPagamento() {

    let tipoDePagamento = document.getElementById(`tiposPagamentos`).value

    for (posicao in formaPagamento) {

        if (tipoDePagamento == formaPagamento[posicao].tipoPagamento) {
            Object.assign(carrinho, formaPagamento[posicao])
            console.log(carrinho)
        }

    }

}

function esconder(){

    let todos = document.getElementsByClassName('escondido')

    for( i = 0; i < todos.length; i++){
        todos[i].style.display = 'none';
    }

    let botaoConfirmacao = document.getElementsByClassName('confirmacao')

    for( i = 0; i < botaoConfirmacao.length; i++){
        botaoConfirmacao[i].style.display = 'block';
    }
}

function sim() {

}

function nao() {

    let todos = document.getElementsByClassName('escondido')

    for( i = 0; i < todos.length; i++){
        todos[i].style.display = 'block';
    }

    let botaoConfirmacao = document.getElementsByClassName('confirmacao')

    for( i = 0; i < botaoConfirmacao.length; i++){
        botaoConfirmacao[i].style.display = 'none';
    }
}


function calcular( ){

    let pedido = document.getElementById('informacoesPedido')

    let valorTotal = carrinho.valorTamanho + carrinho.valorBorda + carrinho.valorBebida + carrinho.valorEntrega

    pedido.innerHTML = 
    `
        Tamanho ${carrinho.tipoTamanho} <br>
        O sabor da sua pizza é ${carrinho.sabor} <br>
        O valor total do seu pedido é igual à: ${valorTotal}
       
     `


}