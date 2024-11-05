function updateProgress() {
    const name = document.getElementById('name').value;
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;
    const pizzaType = document.getElementById('pizza-type').value;
    const size = document.getElementById('size').value;

    const progressBar = document.querySelector('.progress-bar');
    const dots = document.querySelectorAll('.dot');

    let progress = 0;

    if (name) progress++;
    if (cep) progress++;
    if (endereco) progress++;
    if (numero) progress++;
    if (pizzaType) progress++;
    if (size) progress++;

    progressBar.style.width = (progress / 6) * 100 + '%';

    dots.forEach((dot, index) => {
        if (index < progress) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Função para buscar o endereço pelo CEP usando a API ViaCEP
function buscarEndereco(cep) {
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('endereco').value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                } else {
                    alert('CEP não encontrado.');
                }
                updateProgress();
            })
            .catch(error => console.error('Erro ao buscar CEP:', error));
    }
}

document.getElementById('cep').addEventListener('input', function() {
    const cep = this.value.replace(/\D/g, '');
    if (cep.length === 8) {
        buscarEndereco(cep);
    }
});

document.getElementById('pizza-type').addEventListener('change', function() {
    const meioMeioContainer = document.getElementById('meio-a-meio-container');
    if (this.value === 'meio-a-meio') {
        meioMeioContainer.style.display = 'block';
    } else {
        meioMeioContainer.style.display = 'none';
    }
    updateProgress();
});

document.getElementById('pizza-order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pedido enviado!');
});

document.querySelectorAll('#pizza-order-form input, #pizza-order-form select').forEach(element => {
    element.addEventListener('input', updateProgress);
    element.addEventListener('change', updateProgress);
});
