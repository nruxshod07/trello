import { patchData, removeData } from "./http";

let temp_id;
let div_bin = document.querySelector('.div_bin')

export function dragStart() {
	temp_id = this.id;
	this.className += " hold";
	setTimeout(() => (this.className = "invisible"), 0);
	div_bin.classList.remove('hide')
}

export function dragEnd() {
	this.className = "fill";
	div_bin.classList.add('hide')
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
			patchData('/tasks/' + temp_id, {status: ctx.getAttribute('data-status')})
		}
	});
}
export function dragDropdel(ctx) {
	let temp = Array.from(document.querySelectorAll('.empty div'))
	ctx.className = "empty";

	temp.forEach((item) => {
		if (item.id === temp_id) {
			ctx.append(item);
			removeData('/tasks/', temp_id)
			ctx.classList.add('hide')
		}
	});
}