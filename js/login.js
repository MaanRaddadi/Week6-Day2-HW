const emailInput = document.getElementById("emailSignIn");
const passwordInput = document.getElementById("passwordSignIn");
const errorStyle = "0.5px solid Red";
const signInBtn = document.getElementById("signInBtn");

signInBtn.addEventListener("click", () => {
  let email = emailInput.value;
  let password = passwordInput.value;

  if (valiDateEmail(email) && valiDatePassword(password)) {
    fetch("https://65523afb5c69a7790329bc41.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        for (const d of data) {
          if (d.email === email && d.password === password) {
            signInBtn.nextElementSibling.innerText = "Login succeeded";

            window.open("pages/store.html");
          }
        }
      })
      .catch((error) => showMessage(signInBtn, error, errorStyle));
  }
});

function valiDatePassword(password) {
  if (password === "") {
    showMessage(passwordInput, "Cannot Be Empty", errorStyle);
    return false;
  } else {
    return true;
  }
}

function valiDateEmail(email) {
  if (email === "") {
    showMessage(emailInput, "Cannot Be Empty", errorStyle);
    return false;
  } else {
    return true;
  }
}
function showMessage(elem, msg, border) {
  elem.style.border = border;
  elem.nextElementSibling.innerText = msg;
}
