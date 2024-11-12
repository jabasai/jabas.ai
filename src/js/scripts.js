//
// Scripts
//

const images = [
  "../assets/img/bg/header-bg-2.jpg",
  "../assets/img/bg/header-bg-3.jpg",
  "../assets/img/bg/header-bg-4.jpg",
  "../assets/img/bg/header-bg-5.jpg",
  "../assets/img/bg/header-bg-6.jpg",
];

// bg image carousal
let currentIndex = 0;
const masthead = document.querySelector("header.masthead");

function changeBackgroundImage() {
  // Apply the new background image
  masthead.style.backgroundImage = `url(${images[currentIndex]})`;

  // Add the sliding animation class
  masthead.classList.add("slide-animation");

  // Remove the animation class after it completes (1s)
  setTimeout(() => {
    masthead.classList.remove("slide-animation");
  }, 1000);

  // Update the index
  currentIndex = (currentIndex + 1) % images.length;
}

// Set the interval for changing the image
setInterval(changeBackgroundImage, 5000);

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
