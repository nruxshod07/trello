let closeButton = document.querySelector('.hide_aside button img');
let openButton = document.querySelector('.show_aside');
let aside = document.querySelector('aside');
let modal = document.querySelector('.modal')
let btns_open = document.querySelectorAll('[data-modal]')
let close_btns = document.querySelectorAll('[data-close]')
let body = document.querySelector('body')
let create_btn = document.querySelector('.create_btn')
let form =document.forms.form
let inps = document.querySelectorAll('.modal__input')

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
function modalToggler(arr , callBack){
  arr.forEach(btn =>{
      btn.onclick = () => {
          callBack()
      }
  })
}
form.onsubmit = (e) => {
  e.preventDefault()

  let task = {
      
  }

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    task[key] = value
  })

  console.log(task);
  let error = false

  inps.forEach(inp => {
      if (inp.value.length === 0) {
          inp.classList.add("error");
      } else {
          error = true
          inp.classList.remove("error");
      }
  });

  if (error) {
      postData('/task', task)
          .then(res => {
              if(res.status === 200 || res.status === 201) {
                  location.assign('/pages/cards/')
              }
          })
  }
}
function openModal() {
  modal.classList.add('fade', 'show')
  modal.classList.remove('hide')
  body.style.overflow = 'hidden'
}
function closeModal() {
  modal.classList.remove('fade', 'show')
  body.classList.remove('over')
}
modalToggler(btns_open, openModal)
modalToggler(close_btns, closeModal)