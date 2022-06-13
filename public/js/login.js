const loginFunction = async (event) => {
  event.preventDefault();
  //Get login values from login.handlebars
  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    //If  valid user then redirect to user page
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFunction = async (event) => {
  event.preventDefault();

  const name = document.getElementById("name-signUp").value.trim();
  const email = document.getElementById("email-signUp").value.trim();
  const password = document.getElementById("password-signUp").value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

if (document.querySelector(".login-form"))
{document.querySelector(".login-form").addEventListener("submit", loginFunction);}

if (document.querySelector(".signUp-form"))
{document.querySelector(".signUp-form").addEventListener("submit", signupFunction);}