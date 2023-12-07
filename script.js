const input = document.querySelector("#fname");
input.addEventListener("blur", () => {
  alert(input.value.toUpperCase());
});
