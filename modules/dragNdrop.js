import { patchData } from "./http";

let temp_id;
let div_bin = document.querySelector('.div_bin')

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
export function dragEnter2(event) {
	event.preventDefault();
	this.className += " hovered2";
}

export function dragLeave() {
	this.className = "empty";
}


export function dragDrop(ctx) {
	let temp = Array.from(document.querySelectorAll('.empty div'))
	if(ctx.getAttribute('data-status') === "delete") {
		removeData('/tasks', temp_id)
			.then(res => {
				if(res.status === 200 || res.status === 201) {
					temp.find(el => +el.id === +temp_id).remove()
				}
			})
		return
	}

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

	temp.forEach((item) => {
		if (item.id === temp_id) {
			ctx.append(item);
			removeData('/tasks/', temp_id)
			div_bin.classList.add('hide')
		}
	});
}