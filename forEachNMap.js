nomes = ['carlos','eduardo','miranda','roriz'];

nomes.forEach((nome,i) => { // esse forEach deveria receber uma funcao, entao ao inves de fazer uma function eu passo uma arrow function
    console.log(nome,i); /* carlos 0/ eduardo 1/ miranda 2/ roriz 3 */
});

// usando for each eu nao preciso iterar nem a array e nem um auxiliador, note que eu passei o 'nome' pra receber cada nome da array nomes
// e passei o i para icrementar o valor e o console log imprime o valor de i icrementando automaticamente
// * aqui usei arrow function, note que passei duas variaveis para receber valores *


/* se formos quebrar o codigo do forEach vamos descobrir que nada mais eh que um for normalq ue percorre o array enquanto 
menor que array.lenght e etc... a diferença que do forEach pro map, eh que o map constri uma array novas dentro da funcao assim:
*/ 

function nossoMap(arr,funcao){  //esse parametro 'funcao' que eu to passando pro map seria o que eu iria querer fazer com os itens dessa array
    const novoArray = [];       // que no caso eh a arrow function que to criando a qual printa o nome com o index e retorna uma lista(html) com os nomes 
    for(let i = 0; i < arr.length; i++){
        const itemDoArray = arr[i];
        novoArray.push(funcao(itemDoArray,i));
    }
}

const retornoDoNossoMap = nossoMap(nomes, (nome,i) => {
    console.log(nome,i);
    return `<li>${nome}</li>`;
});

/* isso seria a dibunhando o map, para mostrar que o map pode ser utilizado quando eu quero não só percorrer pelos itens de uma array como modificalos, o map normal seria assim: */ 

nomes.map((nome, i) => {
    console.log(nome,i);
    return `<li>${nome}</li>`; //nesse caso eu poderia passar esse map para um <ul> </ul> para construir uma lista de nomes
});