// Inject current year in footer
const variableOne = new Date();
document.querySelector('#year').textContent = variableOne.getFullYear();

function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;