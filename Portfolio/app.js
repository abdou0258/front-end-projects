//full screen scrolling

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  let index = 0;
  let isScrolling = false;

  function preventDefault(e) {
    if (!e.cancelable) return;
    e.preventDefault();
  }

  function scrollToSection(event) {
    if (isScrolling) return;
    isScrolling = true;

    setTimeout(() => {
      isScrolling = false;
    }, 500);

    const delta = event.wheelDelta || -event.deltaY || -event.detail;

    if (delta < 0 && index < sections.length - 1) {
      index++;
    } else if (delta > 0 && index > 0) {
      index--;
    }

    sections[index].scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollListeners() {
    const mediaQuery = window.matchMedia("(max-width: 992px)"); // Change the breakpoint as needed

    if (mediaQuery.matches) {
      window.removeEventListener("wheel", preventDefault, { passive: false });
      window.removeEventListener("wheel", scrollToSection);
    } else {
      window.addEventListener("wheel", preventDefault, { passive: false });
      window.addEventListener("wheel", scrollToSection);
    }
  }

  handleScrollListeners();

  window.addEventListener("resize", handleScrollListeners);
});

//active link

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function setActiveLink() {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;

    if (scrollPosition >= sectionTop) {
      const sectionId = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

document.addEventListener("scroll", setActiveLink);
document.addEventListener("DOMContentLoaded", setActiveLink);

//scroll arrow

window.onload = function () {
  setTimeout(function () {
    document.querySelector(".scroll").style.display = "block";
  }, 5000);
};

//carousel

$(document).ready(function () {
  $(".slides").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//nav mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const hamIcon = document.getElementById("ham-img");
  const closeIcon = document.getElementById("close-img");
  const menuLinks = document.querySelector("nav ul");

  const isMobile = () => window.innerWidth < 992;
  if (isMobile()) {
    hamIcon.addEventListener("click", function () {
      hamIcon.style.display = "none";
      closeIcon.style.display = "block";
      menuLinks.style.display = "block";
      
    });

    closeIcon.addEventListener("click", function () {
      closeIcon.style.display = "none";
      hamIcon.style.display = "block";
      menuLinks.style.display = "none";
      
    });

    menuLinks.querySelectorAll("nav ul a").forEach((link) => {
      link.addEventListener("click", function () {
        closeIcon.style.display = "none";
        hamIcon.style.display = "block";
        menuLinks.style.display = "none";
        
        
      });
    });
    //link go bit over section
    const navHeight = document.querySelector("nav").offsetHeight; 

    function scrollToSection(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const targetOffset = targetSection.offsetTop -100;
        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    }

    document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", scrollToSection);
    });
  }
});

//header scroll

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});


//animations on scroll

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


const elements = document.querySelectorAll('.animate-on-scroll');


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach(element => {
  observer.observe(element);
});


document.addEventListener('scroll', () => {
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const elementsLeft = document.querySelectorAll('.animate-left');
const elementsRight = document.querySelectorAll('.animate-right');

const observerLeft = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});

elementsLeft.forEach(element => {
  observerLeft.observe(element);
});

const observerRight = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});

elementsRight.forEach(element => {
  observerRight.observe(element);
});

document.addEventListener('scroll', () => {
  elementsLeft.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });

  elementsRight.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
});


//typewriter heading

document.addEventListener("DOMContentLoaded", function () {
const headingElements = document.querySelectorAll('.typed-heading');


headingElements.forEach((element) => {
  const headingText = element.textContent;
  element.textContent = ""; 

  let index = 0;
  let typingEffect = setInterval(function () {
    if (index <= headingText.length) {
      element.textContent = headingText.substring(0, index);
      index++;
    } else {
      clearInterval(typingEffect);
      typingEffect = null;
      element.style.width = "auto"; 
      element.style.borderRight = "none"; 
    }
  }, 300); 
});
})














