// Armazenar os dados 
let dados =[];

// Gerar ID aleatório com 5 dígitos
function gerarID() {
    return Math.floor(10000 + Math.random()*90000);
} 

// Adicionar dados à tela 
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const descrição = document.getElementById('descrição').value;
    const valor = parseFloat(document.getElementById('valor').value.replace(',','.')); //Aceite centavos
    const tipo = document.getElementById('tipo').value;

// Captura a data do input e formata corretamente 
    const dataInput = new Date(document.getElementById('data').value);
    const data = `${Sting(dataInput.getDate()).padStart(2, '0')}/${String(dataInput.getMonth() + 1).padStart(2, '0')}/${dataInput.getFullYear()}`; //Formato DD/MM/AAAA

    // Adiciona os dados ao array
});
