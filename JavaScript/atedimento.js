// Referências aos elementos do DOM
const addFormBtn = document.getElementById('add-form-btn');
const formSection = document.getElementById('form-section');
const atendimentoForm = document.getElementById('atendimento-form');
const historicoList = document.getElementById('historico-list');

// Mostrar o formulário ao clicar no botão
addFormBtn.addEventListener('click', () => {
    formSection.classList.toggle('hidden');
});

// Função para adicionar um atendimento ao histórico
function addAtendimentoToHistorico(nome, cnpj, data, status) {
    const listItem = document.createElement('li');
    listItem.textContent = `${nome} - ${cnpj} - ${data} - ${status}`;
    historicoList.appendChild(listItem);
}

// Evento de submissão do formulário
atendimentoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = atendimentoForm.querySelectorAll('input');
    const nome = inputs[0].value;
    const cnpj = inputs[1].value;
    const data = inputs[2].value;
    const status = inputs[3].value;

    // Adiciona o atendimento ao histórico
    addAtendimentoToHistorico(nome, cnpj, data, status);

    // Limpa os campos do formulário
    atendimentoForm.reset();
    formSection.classList.add('hidden');
});
