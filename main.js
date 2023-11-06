import {
	dragDrop,
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