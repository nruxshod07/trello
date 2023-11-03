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

// ???????//DRAG & DRO{P}

const empties = document.querySelectorAll('.task_box_items')

let todos = [{
        id: '1sdffdfwe2543241',
        title: 'buy milk',
        description: 'description will be here',
        status: "todo"
    },
    {
        id: '1sadasd2543241',
        title: 'chek h w',
        description: 'description will be here',
        status: "inprogress"
    },
    {
        id: '1sdasdasd241',
        title: 'todo h/t',
        description: 'description will be here',
        status: "done"
    }
]

function dragStart() { 
  console.log(this.parentElement);
  let items = document.querySelectorAll(".task_box_items")
  items.forEach(item => {
    console.log(item.firstElementChild);
    if (item.firstElementChild ==null) {
          item.style.height = "100px"
    }
  });
  // if (emp.innerHTML == "") {
  //   emp.style.height = "100px"
  // }
    temp_id = this.id
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)

}

function dragEnd() {
  let items = document.querySelectorAll(".task_box_items")
  items.forEach(item => {
    console.log(item.firstElementChild);
    if (item.firstElementChild ==null) {
          item.style.height = "0px"
    }
  });
    this.className = 'fill'
    this.lastElementChild = "jj"
}

function dragOver(event) {

    event.preventDefault()
}

function dragEnter(event) {
    event.preventDefault()
    this.className += ' hovered_item'
}

function dragLeave() {
    this.className = 'task_box_items'
}

let temp = []
let temp_id

for (let todo of todos) {
    let div = document.createElement('div')
    let b = document.createElement('p')
    let img = document.createElement("img")

    img.src = "https://play-lh.googleusercontent.com/ivAXDbkway-Tfh_aiaivOkrb0ok52is0EpW6WuEUMx4fXZPg1AIrjUEIN3pYjoHE9Os=s256-rw"
    img.classList.add("jj")
    b.classList.add("marginbot")
    div.setAttribute('id', todo.id)
    div.setAttribute('class', 'fill')
    div.setAttribute('draggable', true)

    b.innerHTML = todo.title

    div.append(b,img)

    switch (todo.status) {
        case "todo":
            empties[0].append(div)
            break;
        case "inprogress":
            empties[1].append(div)
            break;
        case "done":
            empties[2].append(div)
            break;
    }

    div.ondragstart = dragStart
    div.ondragend = dragEnd
    temp.push(div)
}


for (let empty of empties) {
    empty.ondragover = dragOver
    empty.ondragenter = dragEnter
    empty.ondragleave = dragLeave
    empty.ondrop = dragDrop
}

function dragDrop() {
  let items = document.querySelectorAll(".task_box_items")
  items.forEach(item => {
    console.log(item.firstElementChild);
    if (item.firstElementChild ==null) {
          item.style.height = "auto"
    }
  });
    this.className = 'task_box_items'
    temp.forEach((item, index) => {
        if (item.id === temp_id) {
            this.append(item)
        }
    })
}

