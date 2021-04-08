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


let carrinho = []

let tamanho = document.getElementById("tamanho")

function meuPedido() {

    // tamanhoPizza = array 
    //tamanhosPizzas = id select
    // tamanhoDaPizza =  variável que recebe o select

    saberTamanhoPizza()

    saberTipoSabor()
    


    
    let tipoDeBorda = document.getElementById(`bordasPizzas`).value
    let tipoDeBebida = document.getElementById(`bebidas`).value
    let tipoDeEntrega = document.getElementById(`tiposEntregas`).value
    let tipoDePagamento = document.getElementById(`tiposPagamentos`).value

    
    for (posicao in tipoBorda) {

        if (tipoDeBorda == tipoBorda[posicao].borda) {
            Object.assign(carrinho, tipoBorda[posicao])
            console.log(carrinho)
        }
    }

    for (posicao in bebida) {

        if (tipoDeBebida == bebida[posicao].tipoBebida) {
            Object.assign(carrinho, bebida[posicao])
            console.log(carrinho)
        }
    }


    for (posicao in tipoEntrega) {

        if (tipoDeEntrega == tipoEntrega[posicao].entrega) {
            Object.assign(carrinho, tipoEntrega[posicao])
            console.log(carrinho)

        }

    }


    for (posicao in formaPagamento) {

        if (tipoDePagamento == formaPagamento[posicao].tipoPagamento) {
            Object.assign(carrinho, formaPagamento[posicao])
            console.log(carrinho)
        }

    }

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

function saberTipoSabor(){

    let saborDaPizza = document.getElementById(`saboresPizzas`).value

    for (posicao in saborPizza) {

        if (saborDaPizza == saborPizza[posicao].sabor) {
            Object.assign(carrinho, saborPizza[posicao])
            console.log(carrinho)
        }
    }
}