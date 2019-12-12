let estadoHam = false;
const menu = document.getElementById('hamb-links');

function abrirHamb() {
  estadoHam = !estadoHam;

  if (estadoHam) {
    menu.classList.add('hamb-ativo');
  } else {
    menu.classList.remove('hamb-ativo')
  }
}
