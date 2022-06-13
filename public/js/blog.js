
const blogHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("blog").value.trim();
  const description = document.getElementById("address").value.trim();
 


  if (description) {
    const response = await fetch("api/blogs", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  } else {
    console.log("something went wrong");
  }
};

document
  .querySelector("#blog-input")
  .addEventListener("submit", blogHandler);