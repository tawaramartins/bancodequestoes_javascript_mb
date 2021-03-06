// Exercício 01:
// Declara a variável diaDeSemana que receba uma string "domingo". Depois implemente uma condicional usando o if que compare se 
// diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string "Hoje é dia de futebol!!!".
// Resolução:
var diaDeSemana = "domingo";
if (diaDeSemana == "domingo") {
    console.log("Hoje é dia de futebol! ! !");
};

// Exercício 02:
// Define a função hojeSeJoga, que receba por parâmetro uma string que informe o día da semana. Esta função deve retornar"Hoje é dia de futebol!!!" 
// se parâmetro for "domingo", caso contrário deve retornar "Hoje não é dia de futebol :(".
// Resolução:
function hojeSeJoga(diaDaSemana) {
    if (diaDaSemana == "domingo") {
        return ("Hoje é dia de futebol! ! !");
    } else {
        return ("Hoje não é dia de futebol :(");
    };
};
console.log(hojeSeJoga("domingo"));
console.log(hojeSeJoga("terça"));

// Exercício 03:
// Defina a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.
// Resolução:
function eMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1 + " é maior";
    } else {
        return numero2 + " é maior";
    };
};
console.log(eMaior(10, 8));

// Exercício 04:
// Podemos dizer que é um número da sorte se o número: 1-é positivo 2-é um múltiplo de 2 ou 3 3-não é 15
// Escreva a função eNumeroDaSorte que, recebendo um número, diz se é um número da sorte (true). Lembre-se de que o número deve 
// obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.
// Resolução:
function eNumeroDaSorte(numero1) {
    return numero1 >= 1 && numero1 % 2 == 0 && numero1 != 15;
}
console.log(eNumeroDaSorte(4));

// Exercício 05:
// Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o 
// segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.
// Resolução:
function possoIrAoBanco(diaDaSemana, horaAtual) {
    return diaDaSemana != "Sábado" && diaDaSemana != "Domingo" && horaAtual >= 9 && horaAtual <= 15;
};
console.log(possoIrAoBanco("Terça", 10));
console.log(possoIrAoBanco('Sábado', 11));
console.log(possoIrAoBanco('Domingo', 13));

// Exercício 06:
// Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string) 
// e o número de quilômetros que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa é ou não (true / false), um filósofo Hipster. 
// Tenha em mente que um filósofo Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.
// Resolução:
function filosofoHipster(profissao, nacionalidade, kmDia) {
    return profissao == "Músico" && nacionalidade == "Brasil" && kmDia >= 5;
};
console.log(filosofoHipster('Músico', 'Brasil', 5));
console.log(filosofoHipster('Jogador de futebol', 'Alemanha', 12));
console.log(filosofoHipster('Músico', 'Argentina', 1));

// Exercício 07:
// Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária que uma pessoa tem.
// Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.
// Resolução:
function podeSeAposentar(idade, sexo, anosContribuicao) {
    return idade >= 60 && sexo == "F" && anosContribuicao >= 30 || idade >= 65 && sexo == "M" && anosContribuicao >= 30;
};
console.log(podeSeAposentar(62, "M", 34));

// Exercício 08:
// Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true ou false 
// conforme o caso. Levar em conta as condições necessárias mencionadas acima.
// Condições: 1- Atingir a altura mínima de 1,5 m (ou 1,2 m, se acompanhada por um adulto) 2- Não ter qualquer problema cardíaco.
// Resolução:
function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco) {
    return alturaPessoa >= 1.5 && temProblemaCardiaco == false || alturaPessoa >= 1.2 && vemComCompania == true && temProblemaCardiaco == false;
};
console.log(podeSubir(1.7, false, true));
console.log(podeSubir(1.2, true, false));

// Exercício 09:
// Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de acordo com o parâmetro. Dica: nessa função você pode usar vários if.
// Resolução:
function medalhaSegundoOPosto(posto) {
    if (posto == 1) {
        return "ouro"
    };
    if (posto == 2) {
        return "prata"
    };
    if (posto == 3) {
        return "bronze"
    } else {
        return "Continue participando"
    };
};
console.log(medalhaSegundoOPosto(1));
console.log(medalhaSegundoOPosto(2));
console.log(medalhaSegundoOPosto(3));
console.log(medalhaSegundoOPosto(5));

