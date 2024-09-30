const filiais = {
    'barra-da-tijuca': {
        local: 'Barra da Tijuca',
        phone: '(21) 1234-5678',
        address: 'Av. das Américas, 12345',
    },
    'copacabana': {
        local: 'Copacabana',
        phone: '(21) 2345-6789',
        address: 'Rua Nossa Senhora de Copacabana, 678',
    },
    'botafogo': {
        local: 'Botafogo',
        phone: '(21) 3456-7890',
        address: 'Rua Voluntários da Pátria, 789',
    },
    'leblon': {
        local: 'Leblon',
        phone: '(21) 4567-8901',
        address: 'Av. Ataulfo de Paiva, 1010',
    },
    'tijuca': {
        local: 'Tijuca',
        phone: '(21) 5678-9012',
        address: 'Rua Conde de Bonfim, 1234',
    },
    'recreio': {
        local: 'Recreio',
        phone: '(21) 6789-0123',
        address: 'Av. Genaro de Carvalho, 5678',
    }
};

function updateContactInfo() {
    const selectedValue = document.getElementById('filias').value;
    const contactInfo = filiais[selectedValue];

    if (contactInfo) {
        document.getElementById('local').textContent = contactInfo.local;
        document.getElementById('phone').textContent = contactInfo.phone;
        document.getElementById('address').textContent = contactInfo.address;
    }
}

window.onscroll = function() {
    const menu = document.querySelector('.menu');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    };
};

window.onload = () => {
    updateContactInfo(); 
};