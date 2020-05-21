const btns = [...document.querySelectorAll("a.button")];
const planets = [...document.querySelectorAll(".planet")];

btns.forEach(item => {

    // click on left menu
    item.addEventListener("click", (e) => {
        let index = 0, tmp_index = 0;

        btns.forEach((item, i) => {
            // reset class
            item.classList.remove("active");
            planets[i].firstElementChild.classList.remove("hide-infos");
            planets[i].classList.remove("planet--active");

            if(item.title === e.target.title){
                item.classList.add("active");
                index = tmp_index;
            }else{
                tmp_index++;
            }
        })

        planets[index].firstElementChild.classList.add("hide-infos");
        planets[index].classList.add("planet--active");
    });
})

planets.forEach(item => {

    // click on planets
    item.addEventListener("click", (e) => {
        let index = 0, tmp_index = 0;
        //console.log(e.target.dataset.name);

        planets.forEach((item, i) => {
            // reset class
            item.firstElementChild.classList.remove("hide-infos");
            item.classList.remove("planet--active");
            btns[i].classList.remove("active");

            if(item.dataset.name === e.target.dataset.name){
                item.firstElementChild.classList.add("hide-infos");
                item.classList.add("planet--active");
                index = tmp_index;
            }else{
                tmp_index++;
            }
        })

        btns[index].classList.add("active");
    });
})