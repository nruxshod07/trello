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

let form2 = document.forms.add_mem
let inps2 = document.querySelectorAll('.mem_inps')

form2.onsubmit = (e) => {
    e.preventDefault()

    let member = {}

    let fm = new FormData(form2)

    fm.forEach((value, key) => {
        member[key] = value
    })

    let error = false

    inps2.forEach(inp => {
        if (inp.value.length === 0) {
            inp.classList.add("error");
        } else {
            error = true
            inp.classList.remove("error");
        }
    });

    if (error) {
        postData('/members', member)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    console.log(res);
                }
            })
    }
}