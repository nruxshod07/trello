import {
	dragDrop,
	dragEnd,
	dragEnter,
	dragLeave,
	dragOver,
	dragStart
} from "./modules/dragNdrop"
import {
	getData, postData
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



let membersModal = document.querySelector('.members_modal')
let form = document.forms.memberAdd
let inp = form.querySelector('input')
let error
let src = ''

form.onsubmit = (e) => {
	e.preventDefault();
	error = false;

	if (inp.value.length === 0) {
		error = true;
		inp.classList.add("error");
	} else {
		inp.classList.remove("error");
	}
	if (error) {
		return error
	} else {
		submit();
		membersModal.classList.add('hide')
	}
};


function submit() {
	let user = {
		'avatar': src,
	}
	let fm = new FormData(form);

	fm.forEach((value, key) => {
		user[key] = value;
	});
	postData('/members', user) 
}


let avas = document.querySelectorAll('.ava')

avas.forEach((ava) => {
	ava.onclick = () => {
		avas.forEach((avaa) => avaa.classList.remove('selected'))
		ava.classList.add('selected')

		let img = ava.querySelector('img')
		src = img.src
	}
})

let select = document.querySelector('.members_select')

getData('/members')
	.then(res => {
		res.forEach((member) => {
			let option = document.createElement('option')
			option.value = member.id
			option.innerHTML = member.name
			select.append(option)
		})
	})