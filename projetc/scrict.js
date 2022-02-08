
 const menuNav = document.getElementById("menu-nav");
 const btnHamb = document.getElementById("menu-hamburguer");

 function toggleMenu(event){
    if(event.type === "touchstart"){event.preventDefault()};
    btnHamb.classList.toggle("actived");
    menuNav.classList.toggle("menu-actived")
}

btnHamb.addEventListener("click", toggleMenu);
btnHamb.addEventListener("touchstart", toggleMenu);

