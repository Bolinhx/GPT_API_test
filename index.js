const { OpenAIClient, AzureKeyCredential } = require('@azure/openai'); //chama a api
const readline = require ('readline'); // chama o modulo do node "readline" pra ler o input
require('dotenv').config() //chama o dotenv e coloca como " obrigatorio na leitura"

const client = new OpenAIClient(  
    process.env.GPT_ENDPOINT,
    new AzureKeyCredential(process.env.GPT_KEY)
);

const getMessageFromAPI = async (message) => { //funcao que pega e trata a resposta da api
    try {
        const response = await client.getCompletions(
            process.env.AzureKeyCredential,
            message,
            {
                temperature: 0.5,
                maxTokens: 50,
            }
        );
        return response.choices[0].text.trim(); // retorna a resposta o [0] estipula que é a primeira resposta
    } catch(error) { //se der errado mostra o erro 
        console.log(error);
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mensagens() { //mostra as mensagens 
    console.log("=========================================================================");
    console.log("Se voce esta lendo isso, é porque quer interagir com um robo @.@ ========");
    console.log("=========================================================================");
    console.log("FIQUE TRANQUILO, EU NÃO VOU TE JULGAR, SOU SEU AMIGO(confia)=============");
    console.log("=========================================================================");
    console.log("A qualquer momento voce pode digitar 'SAIR' para sair do programa =======");
    console.log("=========================================================================");

}

mensagens();

rl.question('Agora me conta alguma coisa: ', async (message) => { //cria a questionario e coloca a mesage em assincrono pra esperar a resposta
    if (message.toLowerCase() === 'sair') { // sai do programa caso digite "sair"
        console.log('Saindo do programa...');
        rl.close();
        process.exit(0);
    } else {
        const response = await getMessageFromAPI(message); // resposta da api
        console.log(response);
        rl.close();
    }
});