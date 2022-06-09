
const reviewHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("review").value.trim();
  const description = document.getElementById("address").value.trim();
 


  if (description) {
    const response = await fetch("api/reviews", {
      method: "POST",
      body: JSON.stringify({ description, address, title, carMake, carSize, parkingType }),
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