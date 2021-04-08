const tamanhoPizza = [
    {
        tipo: "pequena",
        tamanho: 20,
        valor: 25
    },
    {
        tipo: "média",
        tamanho: 25,
        valor: 30
    },
    {
        tipo: "gigante",
        tamanho: 35,
        valor: 40
    },
    {
        tipo: "família",
        tamanho: 40,
        valor: 45
    }
]

const tipoBorda = [
    {
        borda: "gorgonzola",
        valor: 10.00
    },
    {
        borda: "provolone",
        valor: 8.00
    },
    {
        borda: "catupiry",
        valor: 5.00
    },

    {
        borda: "cheddar",
        valor: 5.00

    },

    {
        borda: "sem borda",
        valor: 0.00
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
        bebida: "Coca-Cola",
        valor: 12.00
    },
    {
        tipo: "Fanta",
        valor: 10.00
    },
    {
        tipo: "Guaraná Antarctica",
        valor: 10.00
    },
    {
        tipo: "H2O",
        valor: 8.00
    },
    {
        tipo: "Del Valle",
        valor: 7.00
    }
]
const tipoEntrega = [
    {
        entrega: "retirada no balcão",
        valor: 0.00
    },
    {
        entrega: "delivery",
        valor: 5.00
    }   
]
const formaPagamento = ["Dinheiro", "Cartão (crédito ou débito)", "Pix", "Pic Pay"]

let carrinho= []

let tamanho = document.getElementById("tamanho")

function meuPedido() {
   
// tamanhoPizza = array 
//tamanhosPizzas = id select
// tamanhoDaPizza =  variável que recebe o select


   
    let tamanhoDaPizza = document.getElementById('tamanhosPizzas').value

    console.log(tamanhoDaPizza)

    for(posicao in tamanhoPizza){
        
        if(tamanhoDaPizza == tamanhoPizza[posicao].tipo){
        //    tamanho.innerHTML= `O tamanho de pizza que você escolheu é: ${tamanhoDaPizza}, o valor da pizza é igual a: ${(tamanhoPizza[cont].valor).toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}`
        
            Object.assign(carrinho, tamanhoPizza[posicao])
            console.log(carrinho)
        } 
        
    }

    let saborDaPizza = document.getElementById(`saboresPizzas`).value

    console.log(saborDaPizza)

    for(posicao in saborPizza){

        if(saborDaPizza == saborPizza[posicao].sabor){

            Object.assingn(carrinho, saborPizza[posicao])
        }


    }
    

}


