let menu = document.querySelector('#fixed-button');
let navbar = document.querySelector('.fixed .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); //vai dar a classe fa-times para o menu, que faz o "X, que chama fa-times na lib"
    navbar.classList.toggle('active'); //vai dar a classe active para o navbar, que faz o "polígono cheio"
};

let mcairmenu = document.querySelector('#mcairmenu');
let mcpromenu = document.querySelector('#mcpromenu');

let mcpro = document.querySelector('#mcpro');
let mcair = document.querySelector('#mcair');

mcairmenu.onclick = () => {
    mcair.classList.add('active');
    mcpro.classList.remove('active');
    mcpro.classList.add('hide');
    mcair.classList.remove('hide');   
}

mcpromenu.onclick = () => {
    mcpro.classList.add('active');
    mcair.classList.remove('active');
    mcpro.classList.remove('hide');
    mcair.classList.add('hide'); 
}

let appwatchmenu = document.querySelector('#amenu');
let airpodsmenu = document.querySelector('#bmenu');

let appwatch = document.querySelector('#appwatch');
let airpods = document.querySelector('#airpods');

appwatchmenu.onclick = () => {
    appwatch.classList.add('active');
    appwatch.classList.remove('hide');
    airpods.classList.remove('active');
    airpods.classList.add('hide'); 
}

airpodsmenu.onclick = () => {
    airpods.classList.add('active');
    airpods.classList.remove('hide');
    appwatch.classList.remove('active');
    appwatch.classList.add('hide');
}
