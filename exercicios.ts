import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n======= Menu de Exercícios =======");
    console.log("1 - Soma de dois números");
    console.log("2 - Verificar se é par ou ímpar");
    console.log("3 - Calcular média de três notas");
    console.log("4 - Converter Celsius para Fahrenheit");
    console.log("5 - Mostrar números pares de 1 a 20");
    console.log("6 - Ler 5 números e exibir");
    console.log("7 - Encontrar maior número em um array");
    console.log("8 - Contar vogais em uma string");
    console.log("9 - Calculadora simples (+ - * /)");
    console.log("10 - Ordenar array em ordem crescente");
    console.log("11 - Classe Pessoa (nome e idade)");
    console.log("12 - Classe Aluno herdando de Pessoa");
    console.log("13 - Interface Veiculo e classe Carro");
    console.log("14 - Tabuada de um número");
    console.log("15 - Calculadora de IMC");
    console.log("16 - Validador de senha");
    console.log("17 - Jogo de adivinhação");
    console.log("18 - Contar palavras em uma string");
    console.log("0 - Sair");
    console.log("==================================\n");

    rl.question('Escolha um exercício (0 a 18): ', (resposta) => {
        const opcao = parseInt(resposta);

        switch (opcao) {
            case 1:
                exercicio1();
                break;
            case 2:
                exercicio2();
                break;
            case 3:
                exercicio3();
                break;
            case 4:
                exercicio4();
                break;
            case 5:
                exercicio5();
                break;
            case 6:
                lerCincoNumeros();
                break;
            case 7:
                exercicio7();
                break;
            case 8:
                exercicio8();
                break;
            case 9:
                exercicio9();
                break;
            case 10:
                exercicio10();
                break;
            case 11:
                exercicio11();
                break;
            case 12:
                exercicio12();
                break;
            case 13:
                exercicio13();
                break;
            case 14:
                exercicio14();
                break;
            case 15:
                exercicio15();
                break;
            case 16:
                exercicio16();
                break;
            case 17:
                exercicio17();
                break;
            case 18:
                exercicio18();
                break;
            case 0:
                console.log("\nSaindo... Até mais!");
                rl.close();
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.");
                afterExercise();
                break;
        }
    });
}

function afterExercise() {
    rl.question('\nPressione Enter para voltar ao menu...', () => {
        console.clear();
        menu();
    });
}

// Exercício 1
function exercicio1() {
    rl.question("Digite o primeiro número: ", (num1) => {
        rl.question("Digite o segundo número: ", (num2) => {
            const soma = parseFloat(num1) + parseFloat(num2);
            console.log(`A soma é: ${soma}`);
            afterExercise();
        });
    });
}

// Exercício 2
function exercicio2() {
    rl.question("Digite um número inteiro: ", (num) => {
        const numero = parseInt(num);
        console.log(`O número ${numero} é ${numero % 2 === 0 ? 'Par' : 'Ímpar'}`);
        afterExercise();
    });
}

// Exercício 3
function exercicio3() {
    rl.question("Nota 1: ", (n1) => {
        rl.question("Nota 2: ", (n2) => {
            rl.question("Nota 3: ", (n3) => {
                const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
                console.log(`A média é: ${media.toFixed(2)}`);
                afterExercise();
            });
        });
    });
}

// Exercício 4
function exercicio4() {
    rl.question("Digite a temperatura em Celsius: ", (temp) => {
        const celsius = parseFloat(temp);
        const fahrenheit = (celsius * 9 / 5) + 32;
        console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
        afterExercise();
    });
}

// Exercício 5
function exercicio5() {
    console.log("Números pares de 1 a 20:");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) console.log(i);
    }
    afterExercise();
}

// Exercício 6 já implementado (lerCincoNumeros)

// Exercício 7
function exercicio7() {
    const array = [15, 7, 23, 4, 18, 12, 9];
    const maior = Math.max(...array);
    console.log(`Array: ${array}`);
    console.log(`Maior número: ${maior}`);
    afterExercise();
}

// Exercício 8
function exercicio8() {
    rl.question('Digite uma frase: ', (frase) => {
        const vogais = frase.match(/[aeiouáéíóúãõâêîôû]/gi);
        const count = vogais ? vogais.length : 0;
        console.log(`A frase possui ${count} vogais.`);
        afterExercise();
    });
}

// Exercício 9
function exercicio9() {
    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            rl.question('Digite a operação (+, -, *, /): ', (operacao) => {
                const n1 = parseFloat(num1);
                const n2 = parseFloat(num2);
                let resultado: number;
                switch (operacao) {
                    case '+': resultado = n1 + n2; break;
                    case '-': resultado = n1 - n2; break;
                    case '*': resultado = n1 * n2; break;
                    case '/':
                        if (n2 !== 0) resultado = n1 / n2;
                        else { console.log("Erro: divisão por zero!"); afterExercise(); return; }
                        break;
                    default:
                        console.log("Operação inválida!"); afterExercise(); return;
                }
                console.log(`Resultado: ${resultado}`);
                afterExercise();
            });
        });
    });
}

// Exercício 10
function exercicio10() {
    const array = [64, 34, 25, 12, 22, 11, 90];
    console.log(`Array original: ${array}`);
    array.sort((a, b) => a - b);
    console.log(`Array ordenado: ${array}`);
    afterExercise();
}

// Exercício 11
function exercicio11() {
    const pessoa = new Pessoa("Maria", 28);
    pessoa.exibirInformacoes();
    afterExercise();
}

// Exercício 12
function exercicio12() {
    const aluno = new Aluno("Carlos", 20, "123456");
    aluno.exibirInformacoes();
    afterExercise();
}

// Exercício 13
function exercicio13() {
    const carro = new Carro("Fusca");
    carro.acelerar();
    carro.acelerar();
    carro.frear();
    afterExercise();
}

// Exercício 14
function exercicio14() {
    rl.question('Digite um número: ', (num) => {
        const numero = parseInt(num);
        console.log(`Tabuada de ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        afterExercise();
    });
}

// Exercício 15
function exercicio15() {
    rl.question('Digite o peso (kg): ', (peso) => {
        rl.question('Digite a altura (m): ', (altura) => {
            const imc = parseFloat(peso) / (parseFloat(altura) ** 2);
            console.log(`Seu IMC é: ${imc.toFixed(2)}`);
            afterExercise();
        });
    });
}

// Exercício 16
function exercicio16() {
    rl.question('Digite a senha: ', (senha) => {
        const valida = senha.length >= 8 && /[A-Z]/.test(senha) && /\d/.test(senha);
        console.log(valida ? 'Senha válida!' : 'Senha inválida! A senha deve ter ao menos 8 caracteres, incluir uma letra maiúscula e um número.');
        afterExercise();
    });
}

// Exercício 17
function exercicio17() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    function perguntar() {
        rl.question('Adivinhe o número (1 a 100): ', (palpite) => {
            const numero = parseInt(palpite);
            if (numero === numeroAleatorio) {
                console.log('Parabéns! Você acertou!');
                afterExercise();
            } else if (numero < numeroAleatorio) {
                console.log('Tente um número maior.');
                perguntar();
            } else {
                console.log('Tente um número menor.');
                perguntar();
            }
        });
    }
    perguntar();
}

// Exercício 18
function exercicio18() {
    rl.question('Digite uma frase: ', (frase) => {
        const palavras = frase.trim().split(/\s+/);
        console.log(`Número de palavras: ${palavras.length}`);
        afterExercise();
    });
}

// Exercício 6
function lerCincoNumeros() {
    const numeros: number[] = [];
    function perguntar(i: number) {
        rl.question(`Digite o ${i + 1}º número: `, (numero) => {
            numeros.push(parseFloat(numero));
            if (i < 4) {
                perguntar(i + 1);
            } else {
                console.log('Números digitados:', numeros);
                afterExercise();
            }
        });
    }
    perguntar(0);
}

// Classes e Interfaces usadas nos exercícios
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}

class Aluno extends Pessoa {
    matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        super(nome, idade);
        this.matricula = matricula;
    }

    exibirInformacoes(): void {
        super.exibirInformacoes();
        console.log(`Matrícula: ${this.matricula}`);
    }
}

interface Veiculo {
    acelerar(): void;
    frear(): void;
}

class Carro implements Veiculo {
    modelo: string;
    velocidade: number = 0;

    constructor(modelo: string) {
        this.modelo = modelo;
    }

    acelerar(): void {
        this.velocidade += 10;
        console.log(`${this.modelo} acelerou. Velocidade atual: ${this.velocidade} km/h`);
    }

    frear(): void {
        this.velocidade = Math.max(0, this.velocidade - 10);
        console.log(`${this.modelo} freou. Velocidade atual: ${this.velocidade} km/h`);
    }
}

// Executa o menu principal
menu();
