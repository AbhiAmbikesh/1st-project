const slider = document.querySelector('.slider');

function activate() {
  const items = document.querySelectorAll('.item');
  slider.append(items[0]);
}

document.querySelector('.slider').addEventListener('click', activate);