import { patchData } from "./http";
let body = 	document.body
export let trash = document.querySelector(".trash")
export let trash_head = document.querySelector(".trash_head")
let temp_id;

export function dragStart() {
	temp_id = this.id;
	this.className += " hold";
	setTimeout(() => (this.className = "invisible"), 0);
	body.style.filter = "brightness(70%)"
	trash.style.transform = "translateX(0)"
}

export function dragEnd() {
	this.className = "fill";
	body.style.filter = "brightness(100%)"
	trash.style.transform = "translateX(100%)"
	// trash_head.style.rotate = "0deg"
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