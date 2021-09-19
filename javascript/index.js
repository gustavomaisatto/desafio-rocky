const btnMobile = document.getElementById('btn-mobile');
const cancelMenu = document.getElementById('cancel-menu');
const servicoLista = document.getElementById('servico-seta');
const diferenciaisLista = document.getElementById('diferenciais-seta');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

//função para abrir a lista dos serviços

function toggleServico() {  
    const servico = document.getElementById('servico-seta');
    servico.classList.toggle('lista-servico');
    //condição se lista de diferenciais estiver aberta, fechará quando chamar a função
    if (document.getElementsByClassName('lista-diferenciais' == true)) {
        document.getElementById('diferenciais-seta').classList.remove('lista-diferenciais');
    }
}

// função para abrir a lista de diferenciais

function toggleDiferenciais() {
    const diferenciais = document.getElementById('diferenciais-seta');
    diferenciais.classList.toggle('lista-diferenciais');

    //condição se lista de serviço estiver aberta, fechará quando chamar a função
    if (document.getElementsByClassName('lista-servico' == true)) {
        document.getElementById('servico-seta').classList.remove('lista-servico');
    }
}
//Chamando as funcões e adicionando evento de click aos botões
btnMobile.addEventListener('click', toggleMenu);

cancelMenu.addEventListener('click', toggleMenu);

servicoLista.addEventListener('click', toggleServico);

diferenciaisLista.addEventListener('click', toggleDiferenciais);



