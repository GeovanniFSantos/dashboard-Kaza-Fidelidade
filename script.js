// scripts.js
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', event => {
        event.currentTarget.classList.toggle('open');
    });
});

// scripts.js

document.querySelectorAll('.menu-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.parentElement.getAttribute('data-target');
        const contentSections = document.querySelectorAll('.content-section');
        
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

document.querySelectorAll('.dropdown .submenu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('data-target');
        const contentSections = document.querySelectorAll('.content-section');
        
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});



const responses = [
    {
        keywords: ["adicionar", "construtora"],
        response: "® O cadastro inicial é feito pelo MAISKAZA. \n® A construtora entra em contato com o MAISKAZA e inicia o cadastro. \n® A construtora envia seus dados: Razão social, CNPJ, inscrição estadual, endereço completo, logo, telefone para contato, contato financeiro e contato administrativo (NOME, CPF, E-MAIL, TELEFONE DE CADA CONTATO). \n® O acesso inicial será através do CONTATO Administrativo. \n® Ao fazer o LOGIN pela primeira vez, verificar se seus dados estão completos e se foram preenchidos corretamente \n® A construtora receberá um e-mail para aceitar a Política de Privacidade e Regulamento e alterar sua senha.\n® A construtora poderá atualizar ou adicionar informações através do Menu Construtora."
    },
    {
        keywords: ["Como estabelecer o percentual de pontuação para os consumidores ", "percentual"],
        response: "® No menu Construtora: \n® Selecione o campo Tx pontos - Consumidor. \n® Defina a % de pontuação e Clique em “Salvar”.",
        imageUrls: ["img/pencentualinicial.jpg"],
        intermediateText: "® Esse valor ficará padronizado para todas as vendas, entretanto será possível alterar esse valor, se for desejado pela construtora, no momento da negociação."
    },
    {
        keywords: ["adicionar", "empreendimento"],
        response: "® Entre no menu Empreendimento:\n® E clique em Adicionar Empreendimento:",
        imageUrls: ["img/addImpreendimento1.jpg", "img/addImpreendimento2.jpg"],
        intermediateText: "® Preencha todos os campos.\n® E clique em Salvar."
    },
    {
        keywords: ["bloquear", "empreendimento"],
        response: "® Clique no menu Empreendimento:\n® E clique em Editar: na caneta a direita.",
        imageUrls: ["img/bloquear1.jpg", "img/bloquear1.jpg"],
        intermediateText: "® Preencha todos os campos.\n® E clique em Salvar."
    },
    {
        keywords: ["bloquear", "funcionário"],
        response: "® Clique no menu Funcionário:\n® E clique em Editar: na caneta a direita.",
        imageUrls: ["img/bloquearfucionario.jpg", "img/bloquearfucionario2.jpg"],
        intermediateText: "® Clique no campo “Status” e mude para “Bloqueado”.®\n E clique em “Salvar”."
    },    
    {
        keywords: ["adicionar", "funcionário"],
        response: "® Entre no menu “Funcionário” e clique em “Adicionar Funcionário”.\n® Preencha todos os campos disponíveis, com os dados do seu novo funcionário.",
        imageUrls: ["img/addFuncionario.jpg", "img/addFuncionario2.jpg"],
        intermediateText: "® Clique “Acesso” -> e dê um acesso a esse funcionário. \n® Diretor, Administrador e Vendedor - o acesso do diretor e administrador da direito a todos os itens da página, já a página do vendedor é delimitada em menos funções (acesso a consulta de voucher, consulta de cadastro e as suas vendas). \n® Clique “Salvar”. "
    },
    {
        keywords: ["Como saber quantos pontos as lojas deram para a", "construtora"],
        response: "® Entre no menu Pontos Recebidos. \n® Na Coluna “Data Liberação” -> Dia que esses pontos foram liberados para a construtora. \n® Na Coluna “Pedido” -> É a numeração dos pedidos. \n® Na Coluna “Loja” -> Loja onde foram utilizados os pontos. \n® Na Coluna “Consumidor” -> Os clientes que compraram com sua construtora e utilizaram os pontos recebidos. \n® Na Coluna “Pontos Construtora” -> São os pontos que a construtora recebe através das compras de seus clientes. \n® Na Coluna “Data Vencimento” -> A data em que vão expirar os PONTOS RECEBIDOS pela CONSTRUTORA, cujo prazo para EXPIRAÇÃO é de 2 anos.",
        imageUrls: ["img/pontosrecebidos.jpg"]
    },    
    {
        keywords: ["adicionar", "contrato"],
        response: "® Entre no Menu Contratos:.\n® E clique em Adicionar Contrato: \n® Preencha todos os campos solicitados. \n® Selecione o empreendimento e selecione um vendedor.",
        imageUrls: ["img/addContrato.jpg", "img/addContrato2.jpg"],
        intermediateText: "® Preencha o campo do “CPF/CNPJ” e clique em pesquisar.\n® Insira o valor total do contrato. \n® Selecione a Taxa pontos (Consumidor) de (1% a 10%) ou escolha um valor de pontos para o consumidor (Não pode ser menor que 1% do valor do contrato). \n® Faça o upload do CONTRATO ou outro documento interno que demonstre a transação. \n® Clique “Salvar”. "
    }
];


function suggestResponses() {
    const input = document.getElementById('questionInput').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (input) {
        const matchedResponses = responses.filter(r => 
            r.keywords.some(keyword => input.includes(keyword))
        );

        if (matchedResponses.length > 0) {
            matchedResponses.forEach(matchedResponse => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.textContent = "Você quis dizer: " + matchedResponse.keywords.join(" ");
                suggestionItem.onclick = () => showResponse(matchedResponse);
                suggestions.appendChild(suggestionItem);
            });
        } else {
            const noSuggestionItem = document.createElement('div');
            noSuggestionItem.className = 'suggestion-item';
            noSuggestionItem.textContent = "Nenhuma sugestão encontrada.";
            suggestions.appendChild(noSuggestionItem);
        }
    }
}

function showResponse(response) {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `<p>${response.response}</p>`;
    responseDiv.innerHTML += `<img src="${response.imageUrls[0]}" alt="Imagem relacionada">`;
    responseDiv.innerHTML += `<p>${response.intermediateText}</p>`;
    responseDiv.innerHTML += `<img src="${response.imageUrls[1]}" alt="Imagem relacionada">`;
}




// scripts.js

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Captura os dados do formulário
    const formData = {
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('phone').value,
        cpf: document.getElementById('cpf').value,
        endereco: document.getElementById('address').value,
        mensagem: document.getElementById('message').value
    };

    // Adiciona os dados à tabela
    addDataToTable(formData);

    // Mostra a mensagem de sucesso
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Limpa o formulário
    document.getElementById('registrationForm').reset();

    // Esconde a mensagem de sucesso após 3 segundos
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});

// Função para adicionar os dados à tabela
function addDataToTable(data) {
    const tableBody = document.querySelector('#savedDataTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${data.nome}</td>
        <td>${data.email}</td>
        <td>${data.telefone}</td>
        <td>${data.cpf}</td>
        <td>${data.endereco}</td>
        <td>${data.mensagem}</td>
    `;

    tableBody.appendChild(row);
}






// Referências aos elementos do DOM
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

// Objeto de palavras-chave e respostas
const keywordResponses = {
    "olá": "Olá! Tudo bem? Me chamo Giovanna e vou te atender.",
    "oi": "Oi! Como posso ajudar você?",
    "ajuda": "Claro! Estou aqui para ajudar. O que você precisa?",
    "pedido": "Você gostaria de saber o status de um pedido? Me passe mais detalhes.",
    // Adicione mais palavras-chave e respostas conforme necessário
};

// Função para adicionar mensagens ao chat
function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll para o final do chat
}

// Função para verificar e responder com base em palavras-chave
function respondToKeyword(message) {
    // Converte a mensagem para minúsculas para comparação mais flexível
    const lowerCaseMessage = message.toLowerCase();
    for (let keyword in keywordResponses) {
        if (lowerCaseMessage.includes(keyword)) {
            addMessage(keywordResponses[keyword], 'received');
            return true; // Para a função após encontrar a primeira palavra-chave
        }
    }
    // Se nenhuma palavra-chave for encontrada, responde de forma genérica
    addMessage("Desculpe, não entendi. Pode repetir?", 'received');
    return false;
}

// Evento de clique no botão de enviar
sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, 'sent'); // Adiciona a mensagem enviada pelo usuário
        chatInput.value = '';
        setTimeout(() => {
            respondToKeyword(message); // Responde com base em palavras-chave
        }, 1000);
    }
});

// Evento de enviar a mensagem ao pressionar Enter
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});

