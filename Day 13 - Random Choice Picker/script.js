const tags = document.querySelector('.tags');
const textarea = document.querySelector('#textarea');

textarea.focus();

textarea.addEventListener('keyup', e => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => (e.target.value = ''), 10);
    choicePicker();
  }
});

function createTags(input) {
  const allTags = input
    .split(',')
    .filter(tag => tag.trim() != '')
    .map(tag => tag.trim());
  tags.innerHTML = '';

  allTags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tags.appendChild(tagEl);
  });
}

function choicePicker() {
  const randomTag = () => {
    const spans = document.querySelectorAll('.tags span');
    return spans[Math.floor(Math.random() * spans.length)];
  };
  const times = 30;
  const interval = setInterval(() => {
    const currentTag = randomTag();
    currentTag.classList.add('select');
    setTimeout(() => {
      currentTag.classList.remove('select');
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const currentTag = randomTag();
      currentTag.classList.add('select');
    }, 200);
  }, times * 100);
}
