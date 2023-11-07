import {
	dragDrop,
	dragEnter,
	dragLeave,
	dragOver,
	trash_head,
	trash
} from "./modules/dragNdrop"
import {
	getData, postData,removeData
} from "./modules/http";
import { reload } from "./modules/ui";

const empties = document.querySelectorAll(".empty");

getData('/tasks')
	.then(res => reload(res, empties))


for (let empty of empties) {
	empty.ondragover = dragOver;
	empty.ondragenter = dragEnter;
	empty.ondragleave = dragLeave;
	empty.ondrop = function () {
		dragDrop(this)
	};
}

trash.ondragover = (e) =>{ 
	dragOver(e)
	trash_head.style.transform = "translateX(1%)"
};
trash.ondragenter = dragEnterTrash;
trash.ondragleave = (e) =>{ 
	// dragLeaveTrash(e)
	trash_head.style.transform = "translateX(0%)"
};
trash.ondrop = function () {
	dragDrop(this)
};
function dragEnterTrash(event) {
	event.preventDefault();
}

// function dragLeaveTrash() {
// 	this.className = "trash";
// }

getData('/tasks')
	.then(res => {
		let filtered = res.filter(item => {
			if (item.status==null) {
				console.log("/tasks"+`/${item.id}`);
				removeData("/tasks",`${item.id}`)
			}
		})
		console.log(filtered);
	})
// trash.ondragover = () =>{
// 	dragOver
// 	console.log(1);
// 	trash_head.style.transform = "translateX(70%)"
// } ;;
// trash.ondragenter = dragEnter
// trash.ondragleave = () =>{
// 	dragLeave
// 	trash_head.style.transform = "translateX(0%)"
// } ;
// trash.className = "trash"
// trash.ondrop = ()=> {
// 	console.log("ssss");
// 	let temp = Array.from(document.querySelectorAll('.trash div'))
// 	this.className = "trash";

// 	temp.forEach((item) => {
// 		if (item.id === temp_id) {
// 			this.append(item);
// 			patchData('/tasks/' + temp_id, {status: this.getAttribute('data-status')})
// 		}
// 	});
// };
// getData('/tasks')
// 	.then(res => {
// 		let filtered = res.filter(item => typeof(item)!==null)
// 		console.log(filtered);
// 	})