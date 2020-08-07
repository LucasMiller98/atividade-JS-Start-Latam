function load() {
    let title = document.querySelector('h3#title')
    let nome = ' '
    while(true){
        nome = prompt('Qual é o seu nome? ').toUpperCase()
        if(nome.length !== 0) {
            break
        }
    }
    let sexo = ' '
    while(true) {
        sexo = prompt('Informe o seu sexo: ')[0].toUpperCase()
        if(sexo === 'M' || sexo === 'F') {
            break
        }
    }
    if(sexo === 'F') {
        title.innerHTML = `Bem-vinda, ${nome}!`
    }else{
        title.innerHTML = `Bem-vindo, ${nome}!`
    }
}
function iniciaConversaPessoa1() {
    var nome_pessoa1 = document.getElementById('nome-pessoa1')
    var nome1 = ' '
    while(true) {
        nome1 = prompt('Quem está digitando? ').toUpperCase()
        if(nome1.length !== 0){
            break
        }
    }
    document.getElementById('nome-pessoa1').style.background = '#505005'
    document.getElementById('nome-pessoa1').style.color = '#fff'
    document.getElementById('nome-pessoa1').style.padding = '8px'
    document.getElementById('nome-pessoa1').style.borderRadius = '5px'
    nome_pessoa1.innerHTML = `${nome1}`
    var resA = document.getElementById('res-pessoaA')
    var mensagem_pessoa1 = document.getElementById('mensagemPessoa1')
    if(mensagem_pessoa1.value.length == 0) {
        alert('[ERRO] Digite alguma coisa no primeiro campo, por favor!')
        // Estilização
        document.getElementById('res-pessoaA').style.background = '#f00'
        document.getElementById('res-pessoaA').style.color = '#fff'
        document.getElementById('res-pessoaA').style.padding = '8px'
        document.getElementById('res-pessoaA').style.borderRadius = '5px'
        resA.innerHTML = `[ERRO] Digite alguma coisa no primeiro campo, por favor!`
    }else{
        // Converte o que foi digitado no input com o id mensagem_pessoa1
        let pessoa1 = String(mensagem_pessoa1.value)
        // Estilização
        document.getElementById('res-pessoaA').style.background = '#505005'
        document.getElementById('res-pessoaA').style.color = '#fff'
        document.getElementById('res-pessoaA').style.padding = '8px'
        document.getElementById('res-pessoaA').style.marginBottom = '5px'
        document.getElementById('res-pessoaA').style.borderRadius = '5px'
        if(pessoa1 === 'quero contar') {
            var inicio = Number(prompt('Você quer iniciar a sua contagem de: '))
            var fim = Number(prompt('até: '))
            for(var cont = inicio; cont <= fim; cont++) {
                alert(`Contando... ${cont}`)
            }
            var pessoaA1 = document.createElement('p')
            pessoaA1.innerHTML = `${nome1}: eu contei de ${inicio} até ${cont-1}`
            // O "res-pessoaA é a seção em que iremos criar o elemento p"
            document.getElementById('res-pessoaA').appendChild(pessoaA1)
        }else{
            // Criando o elemento p
            var pessoaA2 = document.createElement('p')
            pessoaA2.innerHTML = `${nome1}: ${pessoa1}`
            // O "res-pessoaA é a seção em que iremos criar o elemento p"
            document.getElementById('res-pessoaA').appendChild(pessoaA2)
        }
    }
}
function iniciaConversaPessoa2() {
    // Pega o nome da segunda pessoa
    var nome_pessoa2 = document.getElementById('nome-pessoa2')
    var nome2 = ' '
    while(true) {
        nome2 = prompt('Quem está digitando? ').toUpperCase()
        if(nome2.length !== 0) {
            break
        }
    }
    document.getElementById('nome-pessoa2').style.background = '#505005'
    document.getElementById('nome-pessoa2').style.color = '#fff'
    document.getElementById('nome-pessoa2').style.padding = '8px'
    document.getElementById('nome-pessoa2').style.borderRadius = '5px'
    nome_pessoa2.innerHTML = `${nome2}`
    var resB = document.getElementById('res-pessoaB')
    var mensagem_pessoa2 = document.getElementById('mensagemPessoa2')
    if(mensagem_pessoa2.value.length == 0) {
        alert('[ERRO] Digite alguma coisa no primeiro campo, por favor!')
        // Estilização
        document.getElementById('res-pessoaB').style.background = '#f00'
        document.getElementById('res-pessoaB').style.color = '#fff'
        document.getElementById('res-pessoaB').style.padding = '8px'
        document.getElementById('res-pessoaB').style.borderRadius = '5px'
        resB.innerHTML = `[ERRO] Digite alguma coisa no segundo campo, por favor!`  
    }else{
        // Converte o que foi digitado no input com o id mensagem_pessoa2 
        let pessoa2 = String(mensagem_pessoa2.value)
        // Estilização
        document.getElementById('res-pessoaB').style.background = '#505005'
        document.getElementById('res-pessoaB').style.color = '#fff'
        document.getElementById('res-pessoaB').style.padding = '8px'
        document.getElementById('res-pessoaB').style.borderRadius = '5px'
        if(pessoa2 === 'quero contar') {
            var inicio2 = Number(prompt('Você quer iniciar a sua contagem de: '))
            var fim2 = Number(prompt('até: '))
            for(var cont = inicio2; cont <= fim2; cont++) {
                alert(`Contando... ${cont}`)
            }
            var pessoaB1 = document.createElement('p')
            pessoaB1.innerHTML = `${nome2}: eu contei de ${inicio2} até ${cont-1}`
            // O "res-pessoaA é a seção em que iremos criar o elemento p"
            document.getElementById('res-pessoaB').appendChild(pessoaB1)
        }else{
            // Criando o elemento p
            var pessoaB2 = document.createElement('p')
            pessoaB2.innerHTML = `${nome2}: ${pessoa2} `
            // O "res-pessoaB é a seção em que iremos criar o elemento p"
            document.getElementById('res-pessoaB').appendChild(pessoaB2)
        }
    }
}