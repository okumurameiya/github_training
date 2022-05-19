const greetingBtn = document.getElementById("greetingBtn");

greetingBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.textContent = "Hello World!!";

  let msgArea = document.getElementById("message");
  msgArea.appendChild(paragraph);
});
