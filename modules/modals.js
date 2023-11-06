let aside = document.querySelector('aside');
let modal = document.querySelector('.modal')
let btns_open = document.querySelectorAll('[data-modal]')
let close_btns = document.querySelectorAll('[data-close]')
let openButton = document.querySelector('.show_aside');
let blocks_container = document.querySelector('.container');
let closeButton = document.querySelector('.hide_aside button img');
let body = document.body

function closeAside() {
	aside.style.transition = 'transform 0.3s';
	aside.style.transform = 'translateX(-94.5%)';
	blocks_container.style.marginLeft = "20px"
	openButton.classList.remove('hide')
}

function openAside() {
	aside.style.transition = 'transform 0.3s';
	aside.style.transform = 'translateX(0)';
	blocks_container.style.marginLeft = "250px"
	openButton.classList.add('hide')
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
}

function closeModal() {
	modal.classList.remove('fade', 'show')
	body.classList.remove('over')
}
modalToggler(btns_open, openModal)
modalToggler(close_btns, closeModal)

let add_mem = document.querySelectorAll('.add_mem')
let close_btns2 = document.querySelectorAll('[data-close2]')
let modal2 = document.querySelector('.m2')

function openModal2() {
	modal2.classList.add('fade', 'show')
	modal2.classList.remove('hide')
	body.style.overflow = 'hidden'
}

function closeModal2() {
	modal2.classList.remove('fade', 'show')
	body.classList.remove('over')
}
modalToggler(add_mem, openModal2)
modalToggler(close_btns2, closeModal2)