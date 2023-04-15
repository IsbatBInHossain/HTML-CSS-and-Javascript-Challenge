const initial = document.getElementById('initial');
const insert = document.querySelector('.container');

document.body.addEventListener('keydown', e => handleKeyPress(e));

function handleKeyPress(event) {
  if (initial.style.display !== 'none') {
    initial.style.display = 'none';
  }
  insert.innerHTML = `
        <div class="key">
          ${event.key === ' ' ? 'Space' : event.key}
          <small>event.key</small>
        </div>
        <div class="key">
          ${event.keyCode}
          <small>event.keyCode</small>
        </div>
        <div class="key">
          ${event.code}
          <small>event.code</small>
        </div>
  `;
}
