const nameInput = document.getElementById("nameSignUp");
const emailInput = document.getElementById("emailSignUp");
const passwordInput = document.getElementById("passwordSignUp");
const signUpBtn = document.getElementById("signUpBtn");
const errorStyle = "0.5px solid Red";

signUpBtn.addEventListener("click", () => {
  let name = nameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;

  if (validateName(name) && validatePassword(password)) {
    fetch("https://65523afb5c69a7790329bc41.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => showSuccess())
      .catch((error) => console.log(error));
  }
});

nameInput.addEventListener("blur", () => {
  validateName(nameInput.value);
});

passwordInput.addEventListener("blur", () => {
  validatePassword(passwordInput.value);
});

function showMessage(elem, msg, border) {
  elem.style.border = border;
  elem.nextElementSibling.innerText = msg;
}

function validateName(name) {
  if (name === "") {
    showMessage(nameInput, "Cannot Be empty", errorStyle);
    return false;
  } else if (name.length < 5) {
    showMessage(nameInput, "Name Must Be Greater Than 5 Letters", errorStyle);
    return false;
  } else {
    showMessage(nameInput, "", "");
    return true;
  }
}

function validatePassword(password) {
  if (password === "") {
    showMessage(passwordInput, "Cannot Be empty", errorStyle);
    return false;
  } else if (password.length < 8) {
    showMessage(passwordInput, "Password Must Be Longer Than 8", errorStyle);
    return false;
  } else {
    showMessage(passwordInput, "", "");
    return true;
  }
}
function showSuccess() {
  showMessage(signUpBtn, "Sign Up succeeded, You Can Sign in Now!");
}
