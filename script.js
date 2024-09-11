//   Footer Carousel

// const carouselItems = document.querySelectorAll(".carousel-item");
// const prevButton = document.getElementById("prev-btn");
// const nextButton = document.getElementById("next-btn");
// let currentSlide = 0;

// function updateCarousel() {
//   for (let i = 0; i < carouselItems.length; i++) {
//     carouselItems[i].classList.remove("active");
//   }
//   carouselItems[currentSlide].classList.add("active");
// }

// prevButton.addEventListener("click", () => {
//   currentSlide =
//     (currentSlide - 1 + carouselItems.length) % carouselItems.length;
//   updateCarousel();
// });

// nextButton.addEventListener("click", () => {
//   currentSlide = (currentSlide + 1) % carouselItems.length;
//   updateCarousel();
// });

// updateCarousel();

// Auto Type Title

let typed = new Typed(".auto-typers", {
  strings: ["SMB revolution!"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Dark Mode Jquery

$(document).ready(function () {
  $(".darkmoding").click(function () {
    $("body").toggleClass("darkModer");
    // $(".darkmoding").toggleClass("darkModer2");
    $(".nav-li-a").toggleClass("nav-li-a-dark");
    $(".btn-outline-dark").toggleClass("btn-outline-moder");
    $(".btn-dark2").toggleClass("btn-outline-moder2");
    $(".btn-Investments").toggleClass("btn-outline-moder2");
    $(".btn-waitlist").toggleClass("btn-waitlist-dark");
  });
});


// Text Slide Animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add("slide-txt-show");
      }
      else{
          entry.target.classList.remove("slide-txt-show");
      }
  });
});


const hiddenElements = document.querySelectorAll(".slide-txt");
hiddenElements.forEach((el)=> observer.observe(el));

// Pre Loader

var loader = document.getElementById("pre-loader1");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Owl Carousel
