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
    soma_produtos = () =>{
        //VARIAVEL SOMA TEM QUE SER INSTACIADA FORA DO LAÇO FOR, CASO CONTRARIO SEU VALOR SEMPRE VOLTA PARA ZERO
        var soma = 0
        for (c = 0;c<lista_produto.length;c ++){
            var total = lista_produto[c].preco
            soma = soma + lista_produto[c].preco
            console.log(`O produto é ${lista_produto[c].nome}, seu preço é R$ ${total}`)
        }
        
        console.log(`A soma geral é R$ ${soma}`)
    }

//REMOVE PELA POSIÇÃO DO ITEM E PELA QUANTIDADE
//REMOVER PRODUTO PELO NOME
    remove_produto = (exclui) =>{
//PERCORRE O OBJETOS COM OS PRODUTOS
        for (nomes of lista_produto){
            if(exclui === nomes.nome){
                console.log(`O produto ${exclui} foi removido`)
                //METODO PARA REMOVER O PRODUUTP SPLICE, INDEX OF LOCALIZA POSIÇÃO DO PRODUTO
                lista_produto.splice(lista_produto.indexOf(nomes),1)   
            }
            else{

            }
        // console.log(lista_produto)
        // break
        }
    }

//CRIAR UMA LISTA DE PRODUTOS PARA ELIMINAR A NECESSIDADE DE CHAMAR METODO PUSH
let lista_produto = [
    p1 = new Produto('1','banana',5.60,1),
    p2 = new Produto('2','uva',7.60,2),
    p3 = new Produto('3','maca',3.60,5),
    p4 = new Produto('4','laranja',3.50,10),
    p5 = new Produto('5','abacaxi',9.50,2)
]

//VER PRODUTO ESPECIFICO  PELO NOME  
//percorre('laranja')

//SOMA PRODUTOS
//Falta implmeentar soma pela quantidade
soma_produtos()

//REMOVER PRODUTO
//FALTA AJUSTAR O ELSE POR CAUSA DA REPETIÇÃO
remove_produto('laranja')
console.log(lista_produto)


soma_produtos()