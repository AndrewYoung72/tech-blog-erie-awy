const commentHandler = async (event) => {
  event.preventDefault();
  const blogId = window.location.pathname.split("/")[2];
  if (description) {
    const response = await fetch("api/comments/" + blogId, {
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

document.querySelector(".comment-form").addEventListener("submit", commentHandler);