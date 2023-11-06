import { dragEnd, dragStart } from "./dragNdrop";

export function reload(arr, places) {
    places.forEach(el => el.innerHTML = "")

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