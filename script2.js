document.addEventListener("DOMContentLoaded", function () {
     const button = document.getElementById("show-more-btn");
     const content = document.querySelector(".grid-suspenser"); 
     button.addEventListener("click", function () {
         content.classList.toggle("revel_project");
         if (content.classList.contains("revel_project")) {
             button.innerHTML = 'Show Less <i class="bi bi-arrow-up-short fs-4"></i>';
             button.classList.add("mt-4");
         } else {
             button.innerHTML = 'Show More <i class="bi bi-arrow-down-short fs-4"></i>';
             button.classList.remove("mt-4");
         }
     });
 });
 