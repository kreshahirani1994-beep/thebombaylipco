/*=========================================================
THE BOMBAY LIP CO.
Luxury Website
=========================================================*/

/*=========================
PRELOADER
=========================*/

window.addEventListener("load", () => {

const preloader=document.getElementById("preloader");

preloader.style.opacity="0";

setTimeout(()=>{

preloader.style.display="none";

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

menuBtn.classList.remove("active");

mobileMenu.classList.remove("active");

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
BACK TO TOP
=========================*/

const topBtn=document.getElementById("topBtn");

topBtn.style.opacity="0";

topBtn.style.pointerEvents="none";

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
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href==="#") return;

e.preventDefault();

const target=document.querySelector(href);

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

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

).forEach(el=>{

observer.observe(el);

});


/*=========================
ACTIVE NAVIGATION
=========================*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(scrollY>=top&&scrollY<top+height){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});/*=========================================================
WHATSAPP POPUP
=========================================================*/

let whatsappURL="";

const popup=document.getElementById("popup");
const continueBtn=document.getElementById("continueWhatsapp");
const closeBtn=document.getElementById("closePopup");

function openWhatsapp(message){

    whatsappURL=`https://wa.me/919820002657?text=${encodeURIComponent(message)}`;

    popup.classList.add("active");

}

continueBtn.addEventListener("click",()=>{

    window.open(whatsappURL,"_blank");

    popup.classList.remove("active");

});

closeBtn.addEventListener("click",()=>{

    popup.classList.remove("active");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

});


/*=========================================================
HERO BUTTONS
=========================================================*/

document.querySelector(".hero .btn").addEventListener("click",(e)=>{

    e.preventDefault();

    openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and I'd love to explore your collection.

Could you please share more details? 💕`);

});

document.querySelector(".hero .btn-outline").addEventListener("click",(e)=>{

    e.preventDefault();

    openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and I'd love to create my own customised lipstick.

Could you guide me through the process? 💄`);

});


/*=========================================================
PRODUCT BUTTONS
=========================================================*/

const productButtons=document.querySelectorAll(".card-content a");

productButtons[0].addEventListener("click",(e)=>{

    e.preventDefault();

    openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and I'm interested in your Handmade Lip Balms.

Could you please share more details? 💕`);

});

productButtons[1].addEventListener("click",(e)=>{

    e.preventDefault();

    openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and I'd love to know more about your Luxury Lip Scrubs.

Could you please share more details. ✨`);

});

productButtons[2].addEventListener("click",(e)=>{

    e.preventDefault();

    openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and I'd love to create a customised lipstick made especially for me.

Could you guide me through the process? 💄`);

});


/*=========================================================
FOUNDER BUTTON
=========================================================*/

document.querySelector(".founder .btn").addEventListener("click",(e)=>{

    e.preventDefault();

    openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and would love to connect regarding your products.

Looking forward to hearing from you. 😊`);

});

/*=========================================
BEYOND BEAUTY BUTTON
=========================================*/

document.querySelector(".beyond-beauty .btn").addEventListener("click",(e)=>{

e.preventDefault();

openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and I'm interested in your wedding favours, corporate gifting, live events and bulk order services.

Could you please share more details? ✨`);

});
/*=========================================================
CONTACT BUTTONS
=========================================================*/

const contactButtons=document.querySelectorAll(".contact-buttons a");

/* WhatsApp */

contactButtons[0].addEventListener("click",(e)=>{

    e.preventDefault();

    openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and would love to know more about your products.

Looking forward to hearing from you. 💕`);

});

/* Email */
/* No JavaScript required.
The mailto link works normally. */

/* Instagram */
/* No JavaScript required.
Instagram link works normally. */


/*=========================================================
NEWSLETTER
=========================================================*/

document.querySelector(".newsletter form").addEventListener("submit",(e)=>{

    e.preventDefault();

    openWhatsapp(`Hi! 👋

I came across The Bombay Lip Co. and would love to stay updated with your latest launches, exclusive collections and special offers. 🌸`);

});


/*=========================================================
CONSOLE
=========================================================*/

console.log("✨ The Bombay Lip Co. website loaded successfully.");