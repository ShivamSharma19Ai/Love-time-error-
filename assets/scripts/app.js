const navSilde = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        nav.classList.toggle('nav-bg');
        burger.classList.toggle('toggle')
    });

}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

navSilde();
