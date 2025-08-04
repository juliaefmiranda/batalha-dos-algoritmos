//Nivel 1

//Variaveis principais
let nome = 'Ártemis';
let classe = 'Arqueira';
let nivel = 14;
let vida = 120;
let ouro = 100;
let xp = 8;
let danoBase = 60;

//Definicao de constantes
const NOMEARMA = 'Arco de Dados';
const NOMEARMADURA = 'Armadura Java';
const DEFESABASE = 30;

//Operadores de atribuicao, treinou e ganhou pontos de experiencia
xp += 150;

//Comprou poçao com seu ouro
ouro -= 30;

//Usou poçao e recuperou vida
vida += 40

//Arma fez seu dano dobrar
danoBase *= 2;

//Calculo atributos finais
let ataqueTotal = nivel + danoBase;
let defesaTotal = DEFESABASE + (nivel / 2);

//Operadores logicos
let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarVirus = vidaSuficiente && (ataqueForte || nivelAvancado); 

console.log('📝LORE DA HEROINA:', nome);
console.log('----------------------------------');
console.log(nome, 'uma grande', classe, 'estava percorrendo seu caminho na misteriosa cidade de Algorithmia.');
console.log('Junto com seu', NOMEARMA, 'é responsável por garantir a segurança do local e impedir que virus e bugs façam invasões.');
console.log('Graças a seu nivel', nivel, 'e seu grande ataque total de', ataqueTotal, 'pontos, é temida por todos que tentam causar falhas no sistema.');
console.log('Sua melhor amiga é sua', NOMEARMADURA, 'que tem defesa de', defesaTotal, 'pontos.')
console.log('Considerada a mais habilidosa,', nome, 'ja está com', xp, 'pontos de experiência.')
console.log('Ao longo de sua jornada a', classe, 'acumulou', ouro, 'moedas, assim consegue fazer negócios com malwares interesseiros.')
console.log('Mesmo com tantas batalhas, ela tem', vida, 'pontos de vida, e é considerada a melhor dentre todos de sua classe.')
console.log('Tem vida suficiente?', vidaSuficiente);
console.log('Seu ataque é forte o suficiente?', ataqueForte);
console.log('Tem nivel avancado?', nivelAvancado);
console.log('Pode enfrentar o terrível Big Vírus para salvar Algorithmia para sempre?', podeEnfrentarVirus);
console.log('')

//Nivel 2

//Continuacao do Nivel 1

let nomePersonagem = 'Ártemis';
let classePersonagem = 'Arqueira';
let vidaMaxima = 150;
let vidaAtual = 120;
let manaAtual = 65;
let manaMaxima = 80;
let nivelPersonagem = 14;
let experiencia = 8;
let ouroAtual = 100;

//Novos atributos para a batalha
let forca = 70;
let defesa = 50;
let agilidade = 100;
let combatesVencidos = 25;

//Info. da historia (Nivel 1)
let localAtual = 'Algorithmia';
let missaoAtual = 'Protejer Algorithmia do Big Vírus e seus capangas'

//Recaptulacao da historia Nivel 1 - Prologo 
console.log('Prólogo');
console.log('---------');
console.log(nomePersonagem, 'uma destemida', classePersonagem, 'precisa enfrentar o pior vilão já ouvido falar: Big Vírus.');
console.log('Contando apenas com sua agilidade de ', agilidade, 'pontos, seu ouro acumulado de ', ouroAtual, 'moedas e seu', NOMEARMA, 'está se preparando para fazer com que Algorithmia fique salva para sempre.');
console.log('')

//Capitulo 1 - Condicionais Simples
console.log('Capítulo 1: O Alerta dos Ancestrais');
console.log('-------------------------------------')

//Verificação baseada nos combates vencidos
if (combatesVencidos >= 20) {
    console.log('⭐ Os ancestrais liberam a entrada de', nomePersonagem, 'para esta missão!');
}

//Verificação baseada na Mana Maxima e no Nivel do personagem
if (manaMaxima <= 100 ) {
    console.log('⚠️ A', classePersonagem, 'precisa reunir mais mana para enfrentar os inimigos deste nível, treine mais com seu', NOMEARMA, 'para se garantir nas próximas disputas.');
    console.log('No entanto, se estiver disposta e arriscar, prossiga!');
}

//Verificação baseada na classe do personagem
if (classePersonagem === 'Arqueira') {
    console.log('🏹 Suas flechas são leves mas carregam toda sua força...')
}