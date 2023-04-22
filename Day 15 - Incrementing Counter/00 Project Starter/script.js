const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const updateCount = () => {
    const count = +counter.innerText;
    const increment = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
