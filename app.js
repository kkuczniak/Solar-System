const btns = [...document.querySelectorAll("a.button")];
const planets = [...document.querySelectorAll(".planet")];

btns.forEach(item => {

    // click on left menu
    item.addEventListener("click", (e) => {
        //console.log(e.target.title);
        let index = 0, tmp_index = 0;

        btns.forEach((item, i) => {
            // reset class
            item.classList.remove("active");
            planets[i].firstElementChild.classList.remove("hide-infos");

            if(item.title === e.target.title){
                item.classList.add("active");
                index = tmp_index;
            }else{
                tmp_index++;
            }
        })

        planets[index].firstElementChild.classList.add("hide-infos");
    });
})

planets.forEach(item => {

    //click on planet
    item.addEventListener("click", (e) => {
        
        planets.forEach(item => {
            item.classList.remove("planet--active");
        })

        if(item.title === e.target.title){
            item.classList.add("planet--active");
        }

    })
})