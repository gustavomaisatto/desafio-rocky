const btnMobile = document.getElementById('btn-mobile');
const cancelMenu = document.getElementById('cancel-menu');
const servicoLista = document.getElementById('servico-seta');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

//função para abrir a lista dos serviços e diferenciais

function toggleServico() {  
    const servico = document.getElementById('nav');
    servico.classList.toggle('servico');
}

btnMobile.addEventListener('click', toggleMenu);

cancelMenu.addEventListener('click', toggleMenu);

servicoLista.addEventListener('click', toggleServico);

