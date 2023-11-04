import {
	dragDrop,
	dragEnd,
	dragEnter,
	dragLeave,
	dragOver,
	dragStart
} from "./modules/dragNdrop"
import {
	getData
} from "./modules/http";

const empties = document.querySelectorAll(".empty");

getData('/tasks')
	.then(res => reload(res))

let temp = [];

function reload(arr, place) {

	for (let todo of arr) {
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
}


for (let empty of empties) {
	empty.ondragover = dragOver;
	empty.ondragenter = dragEnter;
	empty.ondragleave = dragLeave;
	empty.ondrop = function () {
		dragDrop(temp, this)
	};
}
