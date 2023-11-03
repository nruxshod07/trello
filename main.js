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

let add1 = document.querySelector('.add1')
let add2 = document.querySelector('.add2')
let add3 = document.querySelector('.add3')
let add_div1 = document.querySelector('.add_div1')
let add_div2 = document.querySelector('.add_div2')
let add_div3 = document.querySelector('.add_div3')
let close1 = document.querySelector('.close1')
let close2 = document.querySelector('.close2')
let close3 = document.querySelector('.close3')

add1.onclick = () => {
  add_div1.classList.add('fade', 'show')
  add_div1.classList.remove('hide')
}
add2.onclick = () => {
  add_div2.classList.add('fade', 'show')
  add_div2.classList.remove('hide')
}
add3.onclick = () => {
  add_div3.classList.add('fade', 'show')
  add_div3.classList.remove('hide')
}

close1.onclick = () => {
  add_div1.classList.remove('fade', 'show')
  add_div1.classList.add('hide')
}
close2.onclick = () => {
  add_div2.classList.remove('fade', 'show')
  add_div2.classList.add('hide')
}
close3.onclick = () => {
  add_div3.classList.remove('fade', 'show')
  add_div3.classList.add('hide')
}




const empties = document.querySelectorAll(".empty");
// let form = document.forms.add_task1
// let form2 = document.forms.add_task2
// let form3 = document.forms.add_task3
let inp = document.querySelector(".titel");
let des = document.querySelector(".des");
let todos = [
  {
    id: "1sdffdfwe2543241",
    description: "create trello",
    status: "todo",
  },
  {
    id: "1sadasd2543241",
    description: "buy milk",
    status: "inprogress",
  },
  {
    id: "1sdasdasd241",
    description: "buy fruits",
    status: "done",
  },
];

function dragStart() {
  temp_id = this.id;
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

let temp = [];
let temp_id;
  for (let todo of todos) {
    let div = document.createElement("div");
    let p = document.createElement("p");
  
    div.setAttribute("id", todo.id);
    div.setAttribute("class", "fill");
    div.setAttribute("draggable", true);
  
    p.innerHTML = todo.description;
  
    div.append(p);
  
    switch (todo.status) {
      case "todo":
        empties[0].append(div);
        break;
      case "inprogress":
        empties[1].append(div);
        break;
      case "done":
        empties[2].append(div);
        break;
    }
  
    div.ondragstart = dragStart;
    div.ondragend = dragEnd;
  
    temp.push(div);
  }
for (let empty of empties) {
  empty.ondragover = dragOver;
  empty.ondragenter = dragEnter;
  empty.ondragleave = dragLeave;
  empty.ondrop = dragDrop;
}

function dragDrop() {
  this.className = "empty";
  temp.forEach((item, index) => {
    if (item.id === temp_id) {
      this.append(item);
    }
  });
}

// form.onsubmit = (event) => {
//   event.preventDefault();

//   let todo = {
//     id: Math.random(),
//     status: document.querySelector("select").value,
//     title: inp.value,
//     description: des.value,
//   };

//   let fm = new FormData(event.target);

//   fm.forEach((value, key) => {
//     todo[key] = value;
//   });

//   todos.push(todo);
// };
// form2.onsubmit = (event) => {
//   event.preventDefault();

//   let todo = {
//     id: Math.random(),
//     status: document.querySelector("select").value,
//     title: inp.value,
//     description: des.value,
//   };

//   let fm = new FormData(event.target);

//   fm.forEach((value, key) => {
//     todo[key] = value;
//   });

//   todos.push(todo);
// };
// form3.onsubmit = (event) => {
//   event.preventDefault();

//   let todo = {
//     id: Math.random(),
//     status: document.querySelector("select").value,
//     title: inp.value,
//     description: des.value,
//   };

//   let fm = new FormData(event.target);

//   fm.forEach((value, key) => {
//     todo[key] = value;
//   });

//   todos.push(todo);
// };