import { dragEnd, dragStart } from "./dragNdrop";
import { getData } from "./http";

export function reload(arr, places) {
    places.forEach(el => el.innerHTML = "")

    for (let todo of arr) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let des = document.createElement("p")
        let top = document.createElement("div")
        let bottom = document.createElement("div")
        let pfp = document.createElement("img")
        

        getData("/members")
            .then(res => {
                let nec = res.forEach(member => {
                    if (member.id == todo.members) {
                        
                        pfp.src = member.avatar
                    }
                });
            })
        

        pfp.classList.add("corner")
        top.classList.add("anim_line_top")
        bottom.classList.add("anim_line_bottom")

        div.setAttribute("id", todo.id);
        div.setAttribute("class", "fill");
        div.setAttribute("draggable", true);

        des.innerHTML = todo.description
        p.innerHTML = todo.title;

        div.append(p,top,bottom,des,pfp);

        switch (todo.status) {
            case "todo":
                places[0].append(div);
                break;
            case "inprogress":
                places[1].append(div);
                break;
            case "done":
                places[2].append(div);
                break;
        }

        div.ondragstart = dragStart;
        div.ondragend = dragEnd;
    }
}