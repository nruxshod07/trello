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

trash.ondragover = (e) =>{ 
	dragOver(e)
	trash_head.style.transform = "rotate(80deg)"
};
trash.ondragenter = dragEnterTrash;

trash.ondragleave = (e) =>{ 
	trash_head.style.transform = "translateX(0%)"
};
trash.ondrop = function () {
	dragDrop(this)
};
function dragEnterTrash(event) {
	event.preventDefault();
	trash_head.style.marginLeft = "50px"
}
