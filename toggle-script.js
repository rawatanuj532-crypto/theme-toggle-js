let button = document.querySelector("#theme-btn");
let body = document.querySelector("body");

let savedTheme = localStorage.getItem("theme");

if(savedTheme){
    body.classList.add(savedTheme);
}

button.addEventListener("click", function () {


    if (body.classList.contains("light")) {

        body.classList.add("dark");
        body.classList.remove("light");
        localStorage.setItem("theme","dark");

    }
    else{
        body.classList.add("light");
        body.classList.remove("dark");
        localStorage.setItem("theme","light");
    }

});

