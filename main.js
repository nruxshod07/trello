let closeButton = document.querySelector('.hide_aside button img');
let openButton = document.querySelector('.show_aside');
let aside = document.querySelector('aside');

function closeAside() {
  aside.style.transition = 'transform 0.3s';
  aside.style.transform = 'translateX(-94.5%)';
  openButton.classList.remove('hide')
}

function openAside() {
  aside.style.transition = 'transform 0.3s';
  aside.style.transform = 'translateX(0)';
  openButton.classList.add('hide')
}

closeButton.onclick = closeAside
openButton.onclick = openAside
