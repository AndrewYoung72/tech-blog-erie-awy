
const blogHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("blog-title").value.trim();
  const description = document.getElementById("blog-description").value.trim();
 


  if (title && description) {
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

const commentHandler = async (event) => {
  event.preventDefault();
  const blogId = (window.location.pathname).split("/")[2]
  if (description) {
    const response = await fetch("api/comments/"+ blogId, {
      method: "POST",
      body: JSON.stringify({ description }),
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

if (document.querySelector(".comment-form"))
{document.querySelector(".comment-form").addEventListener("submit", commentHandler)}


if (document.querySelector(".blog-form"))
{document.querySelector(".blog-form").addEventListener("submit", blogHandler)}
