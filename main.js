import {
	dragDrop,
	dragEnter,
	dragLeave,
	dragOver,
	trash_head,
	trash
} from "./modules/dragNdrop"
import {
	getData
} from "./modules/http";
import {
	reload
} from "./modules/ui";

const empties = document.querySelectorAll(".empty");
const neag = document.querySelector(".neag");
const inp = document.querySelector('#search')
const inp_real = inp.querySelector('input')
let tasks = []

getData('/tasks')
	.then(res => {
		reload(res, empties)
		tasks = res
	})


for (let empty of empties) {
	empty.ondragover = dragOver;
	empty.ondragenter = dragEnter;
	empty.ondragleave = dragLeave;
	empty.ondrop = function () {
		dragDrop(this)
	};
}

trash.ondragover = (e) => {
	dragOver(e)
	trash_head.style.transform = "rotate(80deg)"
};
trash.ondragenter = dragEnterTrash;

trash.ondragleave = (e) => {
	trash_head.style.transform = "translateX(0%)"
};
trash.ondrop = function () {
	dragDrop(this)
};

function dragEnterTrash(event) {
	event.preventDefault();
	trash_head.style.marginLeft = "50px"
}
inp_real.onfocus = () => {
	getData('/tasks')
		.then(res => tasks = res)
	neag.style.display = 'block'
	inp.style.width = '400px'
	inp.classList.add("boxShadow")
	inp.style.zindex = "11"
}
inp_real.onblur = () => {
	neag.style.display = 'none'
	inp.style.width = '200px'
	inp.classList.remove("boxShadow")
	let temp = Array.from(document.querySelectorAll('.empty div'))

	for (let div of temp) {
		div.classList.remove("boxShadow")
		div.classList.remove('finded')
	}
}


inp_real.onkeyup = () => {
	let val = inp_real.value.toLowerCase().trim()
	
	if (val.length === 0) return

	let filtered = tasks.filter(item => {
		let title = item.title.toLowerCase().trim()
		if (title.includes(val)) {
			
			return item
		}
	})
	let temp = Array.from(document.querySelectorAll('.empty div'))

	for (let div of temp) {

		for (let task of filtered) {
			if (div.id.toString() === task.id.toString()) {
				div.classList.add("boxShadow")
				div.classList.add('finded')
			}else{
				div.classList.remove('finded')
				div.classList.remove("boxShadow")

			}
		}
	}


}
