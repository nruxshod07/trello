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