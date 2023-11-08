import { getData, patchData, removeData } from "./http";
import { reload } from "./ui";

let temp_id;
let trash = document.querySelector('.bin')


export function dragStart() {
	temp_id = this.id;
	this.className += " hold";
	setTimeout(() => (this.className = "invisible"), 0);
	trash.classList.remove('hide')
}

export function dragEnd() {
	this.className = "fill";
	trash.classList.add('hide')
}

export function dragOver(event) {
	event.preventDefault();
}

export function dragEnter(event) {
	event.preventDefault();
	this.className += " hovered";
}

export function dragLeave() {
	this.className = "empty";
}


export function dragDrop(ctx) {
	let temp = Array.from(document.querySelectorAll('.empty div'))
	ctx.className = "empty";

	temp.forEach((item) => {
		if (item.id === temp_id) {
			ctx.append(item);
			patchData('/tasks/' + temp_id, { status: ctx.getAttribute('data-status')})
		}
	});

}

export function dragDropDelete(ctx) {
	let temp = Array.from(document.querySelectorAll('.empty div'))

	temp.forEach((item) => {
		if (item.id === temp_id) {
			removeData('/tasks/', item.id)
		}
	});
}