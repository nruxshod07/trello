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

	temp.forEach((item) => {
		if (item.id === temp_id) {
			ctx.append(item);
		}
	});
}