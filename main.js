import {
	dragDrop,
	dragDropdel,
	dragEnter,
	dragEnter2,
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
let div_bin = document.querySelector('.div_bin')

div_bin.ondragover = dragOver;
div_bin.ondragenter = dragEnter2;
div_bin.ondragleave = dragLeave;
div_bin.ondrop = function () {
	dragDropdel(this)
};