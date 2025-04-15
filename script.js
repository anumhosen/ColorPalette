let childs = document.querySelectorAll(".childBox");

childs.forEach((child) => {
  let bgColor = child.innerText;
  console.log(bgColor);
  child.style.background = bgColor;

  child.addEventListener("click", () => {
    navigator.clipboard.writeText(bgColor);
    let msgBox = document.createElement("span");
    msgBox.innerHTML = 'Copied <i class="fa-solid fa-circle-check"></i>';

    child.prepend(msgBox);

    setTimeout(() => {
      msgBox.remove();
    }, 400);
  });
});
