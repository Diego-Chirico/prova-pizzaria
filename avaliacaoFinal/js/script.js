const tamanhoPizza = [
    { tipoTamanho: "pequena", tamanho: 20, valorTamanho: 25 },
    { tipoTamanho: "média", tamanho: 25, valorTamanho: 30 },
    { tipoTamanho: "gigante", tamanho: 35, valorTamanho: 40 },
    { tipoTamanho: "família", tamanho: 40, valorTamanho: 45 }
]
const tipoBorda = [
    { borda: "gorgonzola", valorBorda: 10.00 },
    { borda: "provolone", valorBorda: 8.00 },
    { borda: "catupiry", valorBorda: 5.00 },
    { borda: "cheddar", valorBorda: 5.00 },
    { borda: "sem borda", valorBorda: 0.00 }
]
const saborPizza = [
    { sabor: "calabresa", ingredientes: "mussarela, cebola e calabresa" },
    { sabor: "4 queijos", ingredientes: "mussarela, cheddar, parmesão e prato" },
    { sabor: "frango com catupiry", ingredientes: "mussarela, frango e catupiry" },
    { sabor: "portuguesa", ingredientes: "mussarela, pimentão, cebola, presunto e ovo" },
    { sabor: "camarão", ingredientes: "mussarela, camarão, salsinha e cebolinha" },
    { sabor: "carne seca", ingredientes: "mussarela, carne seca e cream cheese" },
    { sabor: "lombo canadense", ingredientes: " mussarela, lombo canadense, tomate, orégano e cebola" },
    { sabor: "X- fritas", ingredientes: "mussarela, contra-filé, presunto, bacon, ovo, tomate, cebola e batata frita " }
]
const bebida = [
    { tipoBebida: "Coca-Cola", valorBebida: 12.00 },
    { tipoBebida: "Fanta", valorBebida: 10.00 },
    { tipoBebida: "Guaraná Antarctica", valorBebida: 10.00 },
    { tipoBebida: "H2O", valorBebida: 8.00 },
    { tipoBebida: "Del Valle", valorBebida: 7.00 }
]
const tipoEntrega = [
    { entrega: "retirada no balcão", valorEntrega: 0.00 },
    { entrega: "delivery", valorEntrega: 5.00 }
]
const formaPagamento = [
    { tipoPagamento: "cartão de débito" },
    { tipoPagamento: "cartão de crédito" },
    { tipoPagamento: "pix" },
    { tipoPagamento: "pic pay" },
    { tipoPagamento: "dinheiro" }
]

let pedido = {};

function chamarPagina1() {
    document.getElementById('pagina1').style.display = "flex"
}

function meuPedido() {

    //tamanhoPizza = array 
    //tamanhosPizzas = id select
    // tamanhoDaPizza =  variável que recebe o select

    saberTamanhoPizza()

    saberTipoSabor()

    saberTipoBorda()

    saberTipoBebida()

    saberTipoEntrega()

    saberTipoPagamento()

    calcular()

    console.log(pedido)
}

function saberTamanhoPizza() {
    let tamanhoDaPizza = document.getElementById('tamanhosPizzas').value
    for (posicao in tamanhoPizza) {
        if (tamanhoDaPizza == tamanhoPizza[posicao].tipoTamanho) {
            Object.assign(pedido, tamanhoPizza[posicao])
            console.log(pedido)
        }
    }
}
function saberTipoSabor() {
    let saborDaPizza = document.getElementById(`saboresPizzas`).value
    for (posicao in saborPizza) {
        if (saborDaPizza == saborPizza[posicao].sabor) {
            Object.assign(pedido, saborPizza[posicao])
            console.log(pedido)
        }
    }
}
function saberTipoBorda() {
    let tipoDeBorda = document.getElementById(`bordasPizzas`).value
    for (posicao in tipoBorda) {
        if (tipoDeBorda == tipoBorda[posicao].borda) {
            Object.assign(pedido, tipoBorda[posicao])
            console.log(pedido)
        }
    }
}
function saberTipoBebida() {
    let tipoDeBebida = document.getElementById(`bebidas`).value
    for (posicao in bebida) {
        if (tipoDeBebida == bebida[posicao].tipoBebida) {
            Object.assign(pedido, bebida[posicao])
            console.log(pedido)
        }
    }
}
function saberTipoEntrega() {
    let tipoDeEntrega = document.getElementById(`tiposEntregas`).value
    for (posicao in tipoEntrega) {
        if (tipoDeEntrega == tipoEntrega[posicao].entrega) {
            Object.assign(pedido, tipoEntrega[posicao])
            console.log(pedido)
        }
    }
}
function saberTipoPagamento() {
    let tipoDePagamento = document.getElementById(`tiposPagamentos`).value
    for (posicao in formaPagamento) {
        if (tipoDePagamento == formaPagamento[posicao].tipoPagamento) {
            Object.assign(pedido, formaPagamento[posicao])
            console.log(pedido)
        }
    }
}

function calcular() {

    document.getElementById('pagina1').style.display = "none"

    let informacoesPedido = document.getElementById('informacoesPedido')

    Object.assign(pedido, {valorTotal: pedido.valorTamanho + pedido.valorBorda + pedido.valorBebida + pedido.valorEntrega}) 

    informacoesPedido.innerHTML =
        `   
        <p>Confira abaixo as informações do seu pedido: </p>
        <p>Tamanho:  ${pedido.tipoTamanho} </p>
        <p>Sabor:  ${pedido.sabor} </p>
        <p>Borda:  ${pedido.borda} </p>
        <p>Bebida: ${pedido.tipoBebida} </p>
        <p>Tipo de entrega: ${pedido.entrega} </p>
        <p>Forma de pagamento: ${pedido.tipoPagamento} </p>
        <p>O valor total do seu pedido é igual à: ${pedido.valorTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<p>`


}
function nao() {

    let todos = document.getElementsByClassName('escondido')

    for (i = 0; i < todos.length; i++) {
        todos[i].style.display = 'block';
    }

    let botaoConfirmacao = document.getElementsByClassName('confirmacao')

    for (i = 0; i < botaoConfirmacao.length; i++) {
        botaoConfirmacao[i].style.display = 'none';
    }
}

function sim() {

}



function enviar() {

    let dadosUsuario = {

        nome: document.getElementById("nome").value,
        rua: document.getElementById("rua").value,
        numeroCasa: document.getElementById("casa").value,
        complemento: document.getElementById("complemento").value,
        bairro: document.getElementById("bairro").value,
        cep: document.getElementById("cep").value,
        pontoReferencia: document.getElementById("referencia").value,
        numeroTelefone: document.getElementById("telefone").value

    }

    Object.assign(pedido, dadosUsuario);
}
