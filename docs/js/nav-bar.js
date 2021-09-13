 /*Header Scroll Effect*/
 window.addEventListener("scroll", function() {
     var header = document.querySelector("header");
     header.classList.toggle("sticky", window.scrollY > 0);
 });

 /*DropDown Show*/
 function dropDown() {
     document.getElementById("dropdown").classList.toggle("show");
 }
 window.onclick = function(event) {
     if (!event.target.matches('.dropbtn')) {
         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
                 openDropdown.classList.remove('show');
             }
         }
     }
 }

 /*DropDown Icon Change*/
 window.addEventListener("click", function() {

     var icon = document.getElementById("icon");
     var dropD = document.getElementById("dropdown");
     if (dropD.classList.contains('show')) {
         icon.classList.replace('fa-bars', 'fa-times');
     } else {
         icon.classList.replace('fa-times', 'fa-bars');
     }
 });

 /*Nav Click Scroll To Name*/
 function ScrollToAbout() {
     var toAbout = document.getElementById("about-start");
     toAbout.scrollIntoView();
 }

 function ScrollToPortfolio() {
     var toPortfolio = document.getElementById("portfolio-start");
     toPortfolio.scrollIntoView();
 }

 function ScrollToContact() {
     var toContact = document.getElementById("contact-start");
     toContact.scrollIntoView();
 }

 /*Back To Top Button*/
 var mybutton = document.getElementById("myBtn");

 window.onscroll = function() {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }