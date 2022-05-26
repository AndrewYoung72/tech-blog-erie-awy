const loginFunction = async (event) => {
  event.preventDefault();

  //Get login values from login.handlebars
  const email = document.getElementById("email-login");
  const password = document.getElementById("password-login");

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    //If  valid user then redirect to blog page
    if (response.ok) {
      document.location.replace("/blog");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginFunction);
