const menu_Icon =document.getElementById("menu-icon");
const navbar= document.querySelector(".navbar");



menu_Icon.onclick=()=>{
    menu_Icon.classList.toggle("bx-x");
    navbar.classList.toggle("navbar")
}

