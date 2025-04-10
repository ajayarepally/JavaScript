let div = document.getElementById("main")
        div.style.display = "grid"
        div.style.justifyContent = "center"
        div.style.alignItems = "center"

let child = document.getElementById("child")
        child.style.display = "grid"
        child.style.justifyContent = "center"
        child.style.alignItems = "center"
        child.style.rowGap="1rem"

let btns = document.getElementsByClassName("btn");

    for (let i=0;i<btns.length;i++){
        btns[i].addEventListener("click", () => {
            document.body.style.backgroundColor = btns[i].innerText;
        });
    }