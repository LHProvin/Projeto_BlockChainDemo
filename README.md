# Projeto Blockchain com Node.js

Este projeto implementa uma blockchain básica utilizando `Node.js` e `LevelDB` para persistência de dados.

## Funcionalidades

- Adicionar blocos à blockchain
- Validar blocos e a cadeia completa
- Obter informações de um bloco ou de toda a cadeia

## Tecnologias

- **Node.js**
- **LevelDB**
- **Express**
- **Crypto-js**

## Como Executar

1. Clone o repositório e instale as dependências:

   ```bash
   git clone https://github.com/LHProvin/Projeto_BlockChainDemo.git
   cd Projeto_BlockChainDemo
   npm install

2. Inicie o servidor
   node app.js

3. Acesse no navegador
   http://localhost:8080

4. Principais Rotas 

   GET /height: Obter a altura da blockchain
   
   GET /chain: Ver a blockchain completa
   
   POST /addblock: Adicionar um novo bloco

   GET /singleBlock?SingleB= <número_do_bloco>: Obter um bloco específico
   
