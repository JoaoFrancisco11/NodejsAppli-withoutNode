// Importa o módulo Express
const express = require('express')

// Cria a instância do aplicativo Express
const app = express()

// Define a porta na qual o servidor será executado
const port = 3000

// Configurando a rota para lidar com solicitações na raiz do servidor
app.get('/', (req, res) => {
    // Resposta usando um cabeçalho HTML simples
    res.send('<h1>Teste</h1>')
})

// Inicia o servidor na porta 3000
app.listen(port, () => {
    // Exibe a mensagem no console quando o servidor estiver rodando
    console.log('Rodando na porta: ' + port)
})
