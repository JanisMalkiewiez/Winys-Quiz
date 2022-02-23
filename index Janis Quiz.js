let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual a tag corpo do html?",
    alternativaA : "<head>",
    alternativaB : "<body>",
    alternativaC : "<header>",
    correta      : "<body>",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual comando importa o css para um arquivo html?",
    alternativaA : "<img src=>",
    alternativaB : "<link rel href=>",
    alternativaC : " <a href=>",
    correta      : "<link rel href=>",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Que organização cuida dos padrões Web?",
    alternativaA : "Mozilla",
    alternativaB : "Google",
    alternativaC : "W3C",
    correta      : "W3C",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual tag usarmos para destacar um texto como importante?",
    alternativaA : "<strong>",
    alternativaB : "<b>",
    alternativaC : "<important>",
    correta      : "<strong>",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual tag é utilizada para criar um rodapé?",
    alternativaA : "<footer>",
    alternativaB : "<article>",
    alternativaC : "<section>",
    correta      : "<footer>",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual extensão colocamos o código Javascript?",
    alternativaA : "<javascript>",
    alternativaB : "<js>",
    alternativaC : "<script>",
    correta      : "<js>",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Como exibir uma mensagem de alerta?",
    alternativaA : "msgBox('Olá');",
    alternativaB : "alertBox('Olá');",
    alternativaC : "alert('Olá');",
    correta      : "alert('Olá');",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Comos criar uma função no javascript?",
    alternativaA : "fuction minhaFuncao()",
    alternativaB : "fuction:minhaFuncao()",
    alternativaC : "fuction = minhaFuncao()",
    correta      : "fuction minhaFuncao()",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Como escrever uma condicional em javascript?",
    alternativaA : "if(i==5)",
    alternativaB : "if i == 5 then",
    alternativaC : "if i = 5",
    correta      : "if(i==5)",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Como fazer uma condicional de negativa no javascript?",
    alternativaA : "if i=!5",
    alternativaB : "if(i<>5)",
    alternativaC : "if(i!=5)",
    correta      : "if(i!=5)",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5,q6,q7,q8,q9,q10]



    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()


let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespB " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 20
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

     // atualizar placar
     placar = pontos
     instrucoes.textContent = "Pontos " + placar

   // bloquear a escolha de opcoes
   bloquearAlternativas()

   setTimeout(function() {
       //respostaEsta.textContent = '...'
       proxima = numeroDaQuestao+1

       if(proxima > totalDeQuestoes) {
           console.log('Fim do Jogo!')
           fimDoJogo()
       } else {
           proximaQuestao(proxima)
       }
   }, 250)
   desbloquearAlternativas()
}

function fimDoJogo() {
   instrucoes.textContent = "Fim de Jogo!"
   numQuestao.textContent = ""

   let pont = ''
   pontos == 0 ? pont = 'ponto' : pont = 'pontos'

   pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

   aviso.textContent = "Você conseguiu " + pontos + " " + pont

   a.textContent = ""
   b.textContent = ""
   c.textContent = ""

   a.setAttribute('value', '0')
   b.setAttribute('value', '0')
   c.setAttribute('value', '0')

   // OCULTAR O ARTICLE DA QUESTAO
   articleQuestoes.style.display = 'none'

   setTimeout(function() {
       pontos = 0 // zerar placar
       location.reload();
   }, 2000)
}
