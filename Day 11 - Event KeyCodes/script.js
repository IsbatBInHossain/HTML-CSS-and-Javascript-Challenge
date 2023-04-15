const key = document.querySelector('.key');
const keyCode = document.querySelector('.keyCode');
const code = document.querySelector('.code');
const initial = document.getElementById('initial');
const boxes = document.querySelectorAll('.key');

document.body.addEventListener('keydown', e => handleKeyPress(e));

function handleKeyPress(e) {
  if (initial.style.display !== 'none') {
    boxes.forEach(box => (box.style.display = 'flex'));
    initial.style.display = 'none';
  }
  key.innerHTML = `${e.key} <small>event.key</small>`;
  keyCode.innerHTML = `${e.keyCode} <small>event.keyCode</small>`;
  code.innerHTML = `${e.code} <small>event.code</small>`;
}
