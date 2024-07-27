console.log('Gestão estoque em POO')

//CRIAÇÃO DA CLASSE PRODUTO
//CRIAÇÃO CLASSE CARRINHO NO MODO DE AGREGAÇÃO COM METODOS DE ADICIONAR PRODUTO,REMOVER,SOMAR,
// E VISUALZIAR TODOS OS PRODUTOS E PRODUTOS ESPECIFICOS

class Produto {
    constructor (id,nome,preco,quantidade){
        this.id = id 
        this.nome = nome
        this.preco = preco 
        this.quantidade = quantidade
    }
}

class Carrinho {
    constructor(carro){
        this.carro =[]
    }

    //METODO ADICIONAR PRODUTO NO CARRINHO
    add = (n1) =>{
       c1.carro.push(n1)
        
    }
    

    //METODO VER TODOS PRODUTOS
    getview = () =>{
        for(let c  of this.carro){
            console.log(c)
     }


    }

  
    //REMOVE PELA POSIÇÃO DO ITEM E PELO NOME
    remove_produto = (exclui) =>{
    //PERCORRE O OBJETOS COM OS PRODUTOS
            for (let c =0; c<c1.carro.length;c++ ){
                if(exclui === c1.carro[c].nome){
                    console.log(`O produto ${exclui} foi removido`)
                    //METODO PARA REMOVER O PRODUUTO SPLICE, INDEX OF LOCALIZA POSIÇÃO DO PRODUTO
                    c1.carro.splice(c, 1)
                     
                }
                else{
                
                }
     
            }
            
            }
        

    //FUNÇÃO PARA ESCOLHER UM ITEM ESPECIFICO DA LISTA
    percorre = (n1) => {
        let c = 0
        while (c < c1.carro.length) {
            for (this.nome of c1.carro){ 
                if(n1 === c1.carro[c].nome){
                    console.log('O produto ' + c1.carro[c].nome + ' existe no carrinho de compras')  
                }
                else{

                }
                c++
            }
        } 
       
    }
   
    // FUNÇÃO DE SOMA
    soma_produtos = () =>{
        //VARIAVEL SOMA TEM QUE SER INSTANCIADA FORA DO LAÇO FOR, CASO CONTRARIO SEU VALOR SEMPRE VOLTA PARA ZERO
        var soma = 0
        for (let c = 0;c<this.carro.length;c ++){
            var preco = c1.carro[c].preco
            let quantity = c1.carro[c].quantidade
            var total = preco * quantity
            soma = soma + total
            console.log(`O produto é ${c1.carro[c].nome}, seu preço é R$ ${preco} e possui ${quantity} em quantidade`)
        }
        
        console.log(`A soma geral é R$ ${soma}`)
    }
    
}

//CRANDO PRODUTO
p1 = new Produto('1','banana',5.60,1),
p2 = new Produto('2','uva',7.60,2),
p3 = new Produto('3','maca',3.60,5),
p4 = new Produto('4','laranja',3.50,10),
p5 = new Produto('5','abacaxi',9.50,2) 



let c1 = new Carrinho
//ADICIONANDO
c1.add(p1)
c1.add(p2)
c1.add(p3)
c1.add(p4)
c1.add(p5)


//SOMANDO
c1.soma_produtos()
console.log('-------------------') 

//REMOVENDO
 c1.remove_produto('maca')
 console.log('-------------------') 

// //VISUALIZANDO
c1.getview()
console.log('-------------------') 

//VERIFICANDO SE ITEM EXISTE 
c1.percorre('banana')
console.log('-------------------') 

//SOMA DE PRODUTOS NOVAMENTE(REMOVIDO PRODUTO BANANA)
c1.soma_produtos()
console.log('-------------------') 

























