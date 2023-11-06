import { getData, patchData } from "./http";

let temp_id;

export function dragStart() {
	temp_id = this.id;
	this.className += " hold";
	setTimeout(() => (this.className = "invisible"), 0);
}

export function dragEnd() {
	this.className = "fill";
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
	// temp[0].classList.add('todo')
	// temp[1].classList.add('inprogress')
	// temp[2].classList.add('done')

	temp.forEach((item) => {
		if (item.id === temp_id) {
			ctx.append(item);
			patchData('/tasks/' + temp_id, { status: ctx.getAttribute('data-status')})
		}
	});

}