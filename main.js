import {
	dragDrop,
	dragDropDelete,
	dragEnter,
	dragLeave,
	dragOver,
} from "./modules/dragNdrop"
import {
	getData, postData
} from "./modules/http";
import { reload } from "./modules/ui";

const empties = document.querySelectorAll(".empty");

getData('/tasks')
	.then(res => reload(res, empties))


for (let empty of empties) {
	empty.ondragover = dragOver;
	empty.ondragenter = dragEnter;
	empty.ondragleave = dragLeave;
	empty.ondrop = function () {
		dragDrop(this)
	};
}

let trash = document.querySelector('.bin')

trash.ondragover = (e) => {
	e.preventDefault();

	trash.classList.add('hovered_bin')
}
trash.ondragenter = (e) => {
	e.preventDefault();

	// trash.style.scale = '1.2'
}

trash.ondragleave = (e) => {
	e.preventDefault();

	// trash.style.scale = '1'
	trash.classList.remove('hovered_bin')
}

trash.ondrop = function () {
	dragDropDelete(this)
	media()
	getData('/tasks')
		.then(res => reload(res, empties))
	trash.classList.remove('hovered_bin')
}

function media() {
	let audio = new Audio()
	audio.src = '/public/deletion.mp3'
	audio.autoplay = true

	return true
}

let search_div = document.querySelector('.search')
let search = document.querySelector('.search input')
let block = document.querySelector('.focusing')
let tasks = []


search.onfocus = () => {

	getData('/tasks')
		.then(res => tasks = res)


	search_div.classList.add('focused')
	search.classList.add('focused_input')
	block.style.display = 'block'
}

search.addEventListener('focusout', () => {
	search_div.classList.remove('focused')
	search.classList.remove('focused_input')
	block.style.display = 'none'
})

search.onkeyup = () => {
	let value = search.value.toLowerCase().trim()

	let temp = Array.from(document.querySelectorAll('.empty div'))

	for (let div of temp) {
		div.classList.remove('finded')
		div.style.zIndex = 'initial';
	}

	if (value.length > 0) {
		let filtered = tasks.filter(task => {
			let title = task.title.toLowerCase().trim()
			return title.includes(value)
		})

		for (let task of filtered) {
			let div = document.getElementById(task.id)
			if (div) {
				div.classList.add('finded')
				div.style.zIndex = '99';
			}
		}
	}
}
