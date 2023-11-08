import {
    getData,
    postData
} from "./http"
import {
    reload
} from "./ui"

let form = document.forms.form
let modal = document.querySelector('.modal')
let inps = document.querySelectorAll('.modal__input')
let empties = document.querySelectorAll('.empty')

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
                    modal.classList.add('hide')
                    getData('/tasks')
                        .then(res => {
                            reload(res, empties)
                        })
                }
            })
    }
}

let membersModal = document.querySelector('.members_modal')
let form_member = document.forms.memberAdd
let inp = form_member.querySelector('input')
let error
let src = ''

form_member.onsubmit = (e) => {
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
    let fm = new FormData(form_member);

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
