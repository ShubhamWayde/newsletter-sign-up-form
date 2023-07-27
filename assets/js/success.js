const userEmail = document.getElementById("userEmail");
const continueBrowsing = document.getElementById("continueBrowsing");

const waydzo = () => {
  window.location.href = "https://waydzo.com";
};

continueBrowsing.addEventListener("click", waydzo);

// get data from local storage

const localUserEmail = sessionStorage.getItem("userEmail");

userEmail.innerHTML = localUserEmail;
