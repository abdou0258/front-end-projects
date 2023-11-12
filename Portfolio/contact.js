document.getElementById("Form").addEventListener("submit", function (event) {
    
  
    // Get the email input and error message element
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");
    const subject = document.getElementById("subject");
    const subError = document.getElementById("subError");
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
  
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const subjectRegex = /^[A-Za-z\s]+$/;
  
    let isValid = true;
  
    if (!nameRegex.test(name.value)) {
      nameError.textContent = "Invalid full name. Please enter a valid name.";
      name.focus();
       isValid = false;
    } else {
      nameError.textContent = "";
    }
    // Check if the email is valid
    if (!emailRegex.test(emailInput.value)) {
      errorMessage.textContent =
        "Invalid email format. Please enter a valid email.";
      emailInput.focus();
       isValid = false; // Set focus back to the email input
    } else {
      errorMessage.textContent = ""; // Clear any previous error message
    }
    if (!subjectRegex.test(subject.value)) {
      subError.textContent =
        "Invalid subject number format. Please enter a valid subject number.";
      subject.focus();
       isValid = false;
    } else {
      subError.textContent = ""; // Clear the subject number error message
    }
      // Check if the message textarea is not empty
      if (
        message.value.trim() === "" ||
        message.value.length < 30
      ) {
        messageError.textContent = "Please enter your message with 30 caracters or more";
        message.focus();
         isValid = false;
        
      } else {
        messageError.textContent = "";
        
      }
    
    if (!isValid) {
      return;
    }
  });
  document.getElementById("email").addEventListener("input", function () {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = ""; // Clear the error message
  });
  document.getElementById("name").addEventListener("input", function () {
    const nameError = document.getElementById("nameError");
    nameError.textContent = "";
  });
  document.getElementById("subject").addEventListener("input", function () {
    const subError = document.getElementById("subError");
    subError.textContent = "";
  });
  
  document.getElementById("message").addEventListener("input", function () {
    const messageError = document.getElementById("messageError");
    messageError.textContent = "";
  });

 

  /*-----------------------------------------------------------------*/

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
  
  
  