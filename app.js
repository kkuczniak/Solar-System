const btns = [...document.querySelectorAll("a.button")];

btns.forEach(item => {
    item.addEventListener("click", (e) => {
        console.log(e.target.title);

        btns.forEach(item => item.classList.remove("active"));

        if(item.title === e.target.title){
            item.classList.add("active");
        }
    });
})