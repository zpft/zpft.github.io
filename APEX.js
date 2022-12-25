// alert("弹出框");
const cursorX = document.querySelector(".cursor.horizontal");
const cursorY = document.querySelector(".cursor.vertical");

window.addEventListener("mousemove", (e) => {
  cursorX.style.left = e.clientX + "px";
  cursorY.style.top = e.clientY + "px";
});
