console.log("main.js connected");
const title = document.getElementById("title");
const testBtn = document.getElementById("testBtn");

testBtn.addEventListener("click", () => {
  title.textContent = "button clicked!";
});
