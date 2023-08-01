// validation js
const emailInput = document.getElementById("emailAddress");
const emailValidationText = document.querySelector(".validation");
const emailValue = document.getElementById("userEmail");
const subBtn = document.getElementById('subscribeBtn')

const validateEmail = (email) => {
  const str =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return str.test(String(email).toLowerCase());
};

const validate = () => {
  const emailAddress = emailInput.value;
  if (validateEmail(emailAddress)) {
    emailValidationText.innerHTML = "valid email address";
    emailValidationText.classList.remove("not-valid");
    emailValidationText.classList.add("valid");
    emailInput.classList.remove("not-valid");
    sessionStorage.setItem("userEmail", emailAddress);

  } else if (emailAddress === "") {
    emailValidationText.innerHTML = "";
    emailInput.classList.remove("not-valid");
  } else {
    emailValidationText.innerHTML = "Please enter valid email";
    emailValidationText.classList.add("not-valid");
    emailInput.classList.add("not-valid");
    emailValidationText.classList.remove("valid");
  }
};

document.addEventListener("input", validate);


// lazy loading

const lazyImages = document.querySelectorAll("[data-src]");

const preloadImage = (img) => {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
};

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
  });
});

lazyImages.forEach((image) => {
  imageObserver.observe(image);
});

