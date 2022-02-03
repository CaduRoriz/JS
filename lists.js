console.log(`Making lists`);

const listaDeDestinos = new Array (
    `Salvador`,
    `Sao Paulo`,
    `Rio de janeiro`
);

console.log(`Lista de destinos possiveis: `);
console.log(listaDeDestinos);

listaDeDestinos.push("Coritiba");

console.log(listaDeDestinos[3]);

// retirar um elemento da array:

listaDeDestinos.splice(2,2); //primeiro parametro eh a posicao, o segundo eh a quantidade de elementos que quero apagar, no caso meio que faz assim a partir da posicao tal delete x elementos

//aqui ele pegou a partir do rio de janeiro que eh a posicao 2 e deleta o rio e coritiba pois queria dois elemntos a partir daquela posicao
 
console.log(listaDeDestinos);

for(i = 0; i < 5; i++) {
    console.log(i+1);
};
i = 0;
while(i < 5){
    console.log(i+1);
    i++;
};