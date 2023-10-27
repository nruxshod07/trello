let closeButton = document.querySelector('.hide_aside button img');
let openButton = document.querySelector('.show_aside');
let aside = document.querySelector('aside');
let lower_header = document.querySelector(".lower_header")
let invert_items = document.querySelectorAll(".invert")

console.log(invert_items);
invert_items.forEach(item => {
  item.onmouseenter = () =>{
    item.classList.remove("invert")
  }
  item.onmouseleave = () =>{
    item.classList.add("invert")

  }
});
function closeAside() {
  aside.style.transition = 'transform 0.3s';
  aside.style.transform = 'translateX(-94.5%)';
  openButton.classList.remove('hide')
  lower_header.style.left = "30px"
  lower_header.style.backdropFilter = "blur(0px)"
  lower_header.style.width = '98%'
  lower_header.style.background = 'none'
}

function openAside() {
  aside.style.transition = 'transform 0.3s';
  aside.style.transform = 'translateX(0)';
  openButton.classList.add('hide')
  lower_header.style.left = "236px"
  lower_header.style.backdropFilter = "blur(4px)"
  lower_header.style.width = 'calc(100% - 236px)'
  lower_header.style.background = 'rgba(0, 0, 0, 0.158)'
}

closeButton.onclick = closeAside
openButton.onclick = openAside
