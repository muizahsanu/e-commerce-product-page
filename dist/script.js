"use strict";function ToggleSideBar(){document.querySelector(".nav .nav_side").classList.toggle("show")}function ShowCart(){var e=document.querySelector("#navcart"),t=document.querySelector("#outside-cart");e.classList.toggle("show"),t.classList.toggle("show")}var lightboxIndex=1;function currentSlide(e,t){showSlide(lightboxIndex=e,t)}function plusSlide(e,t){showSlide(lightboxIndex+=e,t)}function openModal(e,t){document.getElementById("lightbox-modal").style.display="flex",showSlide(lightboxIndex=e,t)}function closeModal(){document.getElementById("lightbox-modal").style.display="none"}function showSlide(e,t){var l=document.querySelectorAll("."+t+" .preview"),o=document.querySelectorAll("."+t+" .item");e>l.length&&(lightboxIndex=1),e<1&&(lightboxIndex=l.length);for(var n=0;n<l.length;n++)l[n].style.display="none";for(var i=0;i<o.length;i++)o[i].classList.remove("active");l[lightboxIndex-1].style.display="block",o[lightboxIndex-1].classList.add("active")}showSlide(lightboxIndex,"main");
//# sourceMappingURL=script.js.map