import { postData } from "./http"

let form = document.forms.form
let inps = document.querySelectorAll('.modal__input')

form.onsubmit = (e) => {
    e.preventDefault()

    let task = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })

    let error = false

    inps.forEach(inp => {
        if (inp.value.length === 0) {
            inp.classList.add("error");
        } else {
            error = true
            inp.classList.remove("error");
        }
    });

    if (error) {
        postData('/tasks', task)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    console.log(res);
                }
            })
    }
}