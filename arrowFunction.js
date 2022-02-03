

class ModuloDeImpressao{
    constructor(){
        this._codigo = 10;
    };

    imprime(nomes){
        nomes.forEach(nome => { //eu tinha tido uma duvida a respeito desse 'nome' nessa arrow Function mas isso eh um for each(nao igual exatamente em JAVA) e o nome recebe o valor do atributo que esta sendo percorrido
            console.log(`${this._codigo}: ${nome}`); 
        });
    }

}


const professores = ['Elias', 'Yuri','Gabriel', 'Guilherme','Yan'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);


// na arrow function eu não preciso declarar ela como function 
// tudo que vem após a fat arrow '=>' eh assumido como retorno... assim:

const sum = (a,b) => console.log(a + b); 
sum(5,7);

// caso seja apenas um parametro nem precisa do parenteses

const isAdult = age => age >= 18;

// caso não haja parametros se coloca o parenteses vazio

const getRandomNumber = () => Math.random();

// codando para a web e a partir de um evento fica assim:


//document.addEventListener('click', () => console.log('clicked')); //note que o 'click' eh uma acao e nao um parametro por isso os parenteses vazios


// e caso a funcao execute mais do que uma acao eh necessario a colocacao das chaves '{}':


// document.addEventListener('click', () => {
//     console.log('clicked')
//     doSomething();
// });


// a arrow function trata o this(quando estamos trabalhando com classes) de forma diferente que a funcao normal, para o exemplo:

class Person{
    constructor(name){
        this.name = name;
    }

    printNameFunction(){
        setTimeout(function () {
            console.log(this.name)
        }, 100); //esse '100' eh apenas ilustrativo como se houvesse outro parametro
    }

    printNameArrowFunction(){
        setTimeout(() => {
            console.log(this.name)
        }, 100); //esse '100' eh apenas ilustrativo como se houvesse outro parametro
    }

}

// aparentemente foi atualizado mas o this em funcao normal nao deveria printar pois a funcao normal vai buscar o this dentro da propria funcao
// porem o this na arrow function meio que busca dentro do escopo que está inserida
const creature = new Person("Carlinhos");

creature.printNameArrowFunction();
creature.printNameArrowFunction();
