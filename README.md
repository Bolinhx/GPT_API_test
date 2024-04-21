# ChatGPT CLI

## O que é
Uma aplicação em linha de comando (CLI) que funciona como uma interface do ChatGPT.

## Como rodar
Certifique-se de ter instalado as dependências do Node.js no seu computador. Ao abrir a pasta na sua IDE, execute os seguintes comandos no terminal:
<ol>
<li>npm init -y</li>
<li>npm install @azure/openai</li>
<li>npm install dotenv --save</li>
</ol>

Crie um arquivo `.env` e insira suas credenciais da Azure Open AI com os seguintes nomes: <b>`GPT_KEY`, `AzureKeyCredential` e `GPT_ENDPOINT`</b>.
<bl>Agora basta rodar no terminal da IDE ou do próprio computador o comando:<ol><b>node index.js</b></ol>


## Auto crítica
A maior dificuldade no início foi entender o uso do módulo ReadLine do Node.js, mas depois parecia até fácil. Algo que ficou faltando foi o uso da "promisse" para criar um loop e fazer com que o programa continue rodando até que o usuário digite "sair".




