//função que cria uma conta e testa se todos os parâmetros foram preenchidos
const createConta = (request, response) => {
    const conta = request.body
    logins.push(conta)
    console.log('Nova conta: ', conta)
    if (conta.name && conta.email && conta.password) {
        return response.status(201).send({ message: 'Conta Cadastrada com Sucesso!' })
    } else {
        return response.status(400).send({ message: 'Faltando dados' })
    }
}