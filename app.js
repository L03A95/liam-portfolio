
const scrollBtn = (value) => {
    const btn1 = document.getElementById("uno")
    const btn2 = document.getElementById("dos")
    const btn3 = document.getElementById("tres")
    const btn4 = document.getElementById("cuatro")

    if(value === 1) {
        window.scrollTo({
        behavior: "smooth",
        top: 0,
        left: 0
        });
        btn1.classList.add("nav__btn-selected")
        btn2.classList.remove("nav__btn-selected")
        btn3.classList.remove("nav__btn-selected")
        btn4.classList.remove("nav__btn-selected")
    }
    if(value === 2) {
        window.scrollTo({
        behavior: "smooth",
        top: 0,
        left: window.screen.width
        });
        btn1.classList.remove("nav__btn-selected")
        btn2.classList.add("nav__btn-selected")
        btn3.classList.remove("nav__btn-selected")
        btn4.classList.remove("nav__btn-selected")
    }
    if(value === 3) {
        window.scrollTo({
        behavior: "smooth",
        top: 0,
        left: window.screen.width * 2
        });
        btn1.classList.remove("nav__btn-selected")
        btn2.classList.remove("nav__btn-selected")
        btn3.classList.add("nav__btn-selected")
        btn4.classList.remove("nav__btn-selected")
    }
    if(value === 4) {
        window.scrollTo({
        behavior: "smooth",
        top: 0,
        left: window.screen.width * 3
        });
        btn1.classList.remove("nav__btn-selected")
        btn2.classList.remove("nav__btn-selected")
        btn3.classList.remove("nav__btn-selected")
        btn4.classList.add("nav__btn-selected")
    }
}
