let contenedor = document.querySelector('.container');
let menu = document.querySelector('.menu');
let header = document.querySelector('header');



contenedor.addEventListener('click', iniciarPrograma = (e) => {
    menuToggler(e);

});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    menu.classList.remove('mostrar');
}

const menuToggler = (e) => {
    if(e.target.classList.contains('menu')){
        menu.classList.toggle('fa-times');
        header.classList.toggle('mostrar');
    }
}
