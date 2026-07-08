/*=========================================
THE BOMBAY LIP CO.
script.js
=========================================*/

/*=========================
PRELOADER
=========================*/

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

preloader.style.opacity = "0";

setTimeout(() => {

preloader.style.display = "none";

},500);

});


/*=========================
MOBILE MENU
=========================*/

const menuBtn=document.getElementById("menu-btn");

const mobileMenu=document.getElementById("mobile-menu");

menuBtn.addEventListener("click",()=>{

menuBtn.classList.toggle("active");

mobileMenu.classList.toggle("active");

});


document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("active");

menuBtn.classList.remove("active");

});

});


/*=========================
HEADER
=========================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(255,255,255,.98)";

header.style.boxShadow="0 12px 35px rgba(0,0,0,.08)";

}

else{

header.style.background="rgba(255,255,255,.88)";

header.style.boxShadow="none";

}

});


/*=========================
SCROLL REVEAL
=========================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

});

document.querySelectorAll(

".card,.feature-box,.why-card,.testimonial,.faq-item"

).forEach(el=>observer.observe(el));


/*=========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*=========================
ACTIVE NAV
=========================*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

const height=section.offsetHeight;

if(scrollY>=top&&scrollY<top+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=========================
BACK TO TOP
=========================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";

topBtn.style.pointerEvents="auto";

}

else{

topBtn.style.opacity="0";

topBtn.style.pointerEvents="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*=========================
CONSOLE
=========================*/

console.log("✨ The Bombay Lip Co. Loaded");