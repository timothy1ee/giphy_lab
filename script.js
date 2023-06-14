console.log("Hello")

var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission (optional)

    // Perform your desired action here
    console.log("Button clicked!");
});