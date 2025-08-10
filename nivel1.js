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
const DEFESABASE = 43;

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
console.log('Ao longo de sua jornada, a', classe, 'acumulou', ouro, 'moedas, para assim conseguir fazer negócios com malwares interesseiros.')
console.log('Mesmo com tantas batalhas, ela tem', vida, 'pontos de vida, e é considerada a melhor dentre todos de sua classe.')
console.log('Tem vida suficiente para enfrentar os vilões dessa jornada?', vidaSuficiente);
console.log('Seu ataque é forte o suficiente?', ataqueForte);
console.log('Tem nivel avançado?', nivelAvancado);
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
let experiencia = 158;
let ouroAtual = 70;

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
console.log(nomePersonagem, 'uma destemida', classePersonagem, 'precisa enfrentar o pior vilão já ouvido falar em Algorithmia: Big Vírus.');
console.log('Sem companheiros e contando apenas com sua armadura', NOMEARMADURA, 'seu ouro acumulado de', ouroAtual, 'moedas e seu', NOMEARMA, 'está se preparando para fazer com que o terrível vilão não contamine Algorithmia, e garantirá que a cidade fique salva para sempre.');
console.log('')

//Capitulo 1 - Condicionais Simples
console.log('Capítulo 1: O Alerta dos Ancestrais');
console.log('-------------------------------------')

//Verificação baseada nos combates vencidos
if (combatesVencidos >= 20) {
    console.log('⭐ Os ancestrais liberam a entrada de', nomePersonagem, 'para esta missão! Siga em frente atentamente.');
}

//Verificação baseada na Mana Maxima e no Nivel do personagem
if (manaMaxima <= 100) {
    console.log('⚠️ A', classePersonagem, 'precisará reunir mais mana para enfrentar os inimigos deste nível, treine mais com seu', NOMEARMA, 'para se garantir nas próximas disputas.');
    console.log('Somente se estiver disposta a arriscar prossiga!');
}

//Verificação baseada na classe do personagem
if (classePersonagem === 'Arqueira') {
    console.log('🏹 Suas flechas são leves mas carregam toda sua força... Algorithmia está contando com você...');
}
console.log('')

//Capítulo 2 - Condicionais Compostos
console.log('Capítulo 2: Escolhas que moldarão o Futuro');
console.log('---------------------------------------------');

//Escolha baseada na agilidade
if (agilidade >= 50) {
    console.log('🎉 Graças a sua grande agilidade,', nomePersonagem, 'combate os bugs, avança um nível e ganha mais 20 pontos de experiência!');
    nivelPersonagem++;
    experiencia += 20;
    console.log('Nível atual:', nivelPersonagem, '| Experiência atual:', experiencia);
} else {
    console.log('👊 Infelizmente sua agilidade não está alta o suficiente para passar de fase, pratique mais suas habilidades e depois tente novamente.');
}

//Escolha baseada no ouro
if (ouro >= 45) {
    console.log('💰Parabéns! Conseguiu adquirir ouro o suficiente e aprimorou seu', NOMEARMA, 'para conseguir enfrentar os próximos bugs!');
    ouro -= 15;
    console.log('Ouro restante:', ouro);

} else {
    console.log(nomePersonagem, 'não conseguiu atingir o número necessário de moedas para conseguir aprimorar seu', NOMEARMA, 'acumule mais ouro para prosseguir.');

}

//Escolha baseada nos combates vencidos
if (combatesVencidos >= 50) {
    console.log('A', classePersonagem, 'venceu batalhas suficientes para ganhar sua recompensa de 4 pontos de mana! Use com responsabilidade pois nunca se sabe quando vai precisar usar seu poder contra ataques surpresas...');

} else {
console.log('A', classePersonagem, 'precisa vencer mais batalhas para conseguir adquirir pontos extras de mana. Se apresse pois você irá precisar do máximo de mana possível para combater o Big Vírus!! Sua batalha está chegando...');
}

console.log('📣 Os acestrais previram que a heroína não conseguiria vencer combates suficientes em tão pouco tempo para ser recompensada com a mana, e por isso, deixaram reservados 30 pontos de mana para quando ela chegasse nesse nível!');
console.log('Mana disponível:', manaAtual + 30 );

console.log('');

//Condicionais Encadeadas
console.log('Capítulo 3:', nomePersonagem, 'vs Big Vírus')
console.log('----------------------------------');

//Estratégia de luta dinâmica
let ataqueVirus = 45;

if (defesa > ataqueVirus ) {
    let ataqueBatlha = manaMaxima + forca
    console.log('A guerra começou e', nomePersonagem, 'foi atacada por um exército de scripts corrompidos e sua defesa caiu', defesa - ataqueVirus, 'pontos! Eles sabiam que ela estava a caminho e fizeram uma armadilha!');
    console.log('Defesa atual:', defesa);
    console.log('⚔️ Mesmo tendo perdido alguns pontos de defesa, ela não vai desistir! A', classePersonagem, 'fez o ataque mais forte que conseguia unindo sua força e mana máxima, dando um dano de', ataqueBatlha, 'no exército, que agora se tranformara no temido Big Vírus!!');
    ataqueVirus -= ataqueBatlha;
} else if (ouroAtual > 150){
    console.log(' A', classePersonagem, 'utilizou suas', ouroAtual, 'moedas e comprou uma poção para turbinar seu', NOMEARMA);
} else if (vidaAtual <= 20) {
    console.log('🚨 A heroína precisa procurar um local para descansar ou não sobreviverá ao próximo ataque inimigo!');
} else {
    console.log('Combate estratégico e preciso!', nomePersonagem, 'recuperu sua vida e fez um último ataque utilizando toda sua força restante!');
    ataqueVirus -= forca;
    vidaAtual += 15;
}
    
console.log('');

//Final da história
console.log('Epílogo: Desfecho ');
console.log('-------------------');

//Vendo quem venceu a batalha, Ártemis ou Big Vírus
if (ataqueVirus <= 5) {
    console.log('🏆Sucesso!', nomePersonagem, 'derrota o temido Big Vírus e salva Algorithmia da ameaça de softwares maliciosos, garantindo a segurança do mundo digital!');
    experiencia += 200;
    combatesVencidos++;
 } else {
    console.log('🗡️ Foi uma batalha desafiadora que fez', nomePersonagem, ' recuar para recuperar sua vida e, para que da próxima vez consiga combater o Big Vírus.');
 }
console.log('');

console.log('Fim do capítulo: Continue firme - a próxima missão está por vir!');
