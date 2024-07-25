console.log('Gestão estoque em POO')

//classes Produto, fornecedor , pedido
//mmetodo para adicionar produto remover produtos
//metodo para gerenciar pedidos
//metodos para 

class Produto {
    constructor (id,nome,preco,quantidade){
        this.id = id 
        this.nome = nome
        this.preco = preco 
        this.quantidade = quantidade
    }
}

//FUNÇÃO PARA ESCOLHER UM ITEM ESPECIFICO DA LISTA
percorre = (n1) => {
    c = 0
    while (c < lista_produto.length) {
        for (n of lista_produto){
            if(n1 == lista_produto[c].nome){
                console.log(lista_produto[c])
            }
            c++
        }
    } 
}

// FUNÇÃO DE SOMA
soma_produtos_individual = () =>{
    for (c = 0;c<lista_produto.length;c ++){
        var total = lista_produto[c].preco
        var soma = soma + total
        console.log(`O produto é ${lista_produto[c].nome}, seu preço é R$ ${total}`)
    }
   
}

//CRIAR UMA LISTA DE PRODUTOS PARA ELIMINAR A NECESSIDADE DE CHAMAR METODO PUSH
let lista_produto = [
    p1 = new Produto('1','banana',5.60,1),
    p2 = new Produto('2','uva',7.60,2),
    p3 = new Produto('3','maca',3.60,5),
    p4 = new Produto('4','laranja',3.50,10)
]

//VER PRODUTO ESPECIFICO  PELO NOME  
percorre('laranja')

//SOMA PRODUTOS
//soma_produtos_individual()