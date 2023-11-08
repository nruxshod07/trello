import { getData } from "./http";

let aside = document.querySelector('aside');
let modal = document.querySelector('.modal')
let btns_open = document.querySelectorAll('[data-modal]')
let close_btns = document.querySelectorAll('[data-close]')
let openButton = document.querySelector('.show_aside');
let blocks_container = document.querySelector('.container');
let closeButton = document.querySelector('.hide_aside button');
let body = document.body

let lower_header = document.querySelector('.lower_header')

function closeAside() {
	closeButton.classList.add('hide')
	aside.style.transition = 'transform 0.3s';
	aside.style.transform = 'translateX(-94.5%)';
	blocks_container.style.marginLeft = "20px"
	openButton.classList.remove('hide')
	lower_header.style.paddingLeft = '30px'
}

function openAside() {
	aside.style.transition = 'transform 0.3s';
	aside.style.transform = 'translateX(0)';
	blocks_container.style.marginLeft = "250px"
	openButton.classList.add('hide')
	lower_header.style.paddingLeft = '250px'
	closeButton.classList.remove('hide')
}

closeButton.onclick = closeAside
openButton.onclick = openAside

function modalToggler(arr, callBack) {
	arr.forEach(btn => {
		btn.onclick = () => {
			callBack()
		}
	})
}


function openModal() {
	modal.classList.add('fade', 'show')
	modal.classList.remove('hide')
	body.style.overflow = 'hidden'


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
}

function closeModal() {
	modal.classList.remove('fade', 'show')
	body.classList.remove('over')
}
modalToggler(btns_open, openModal)
modalToggler(close_btns, closeModal)

let pfpBtn = document.querySelector('.PFPs')
let membersModal = document.querySelector('.members_modal')
let close_btn = document.querySelector('.close_members')

pfpBtn.onclick = () => {
	membersModal.classList.add('fade', 'show')
	membersModal.classList.remove('hide')
	body.style.overflow = 'hidden'
}

close_btn.onclick = () => {
	membersModal.classList.remove('fade', 'show')
	membersModal.classList.add('hide')
	body.classList.remove('over')
}