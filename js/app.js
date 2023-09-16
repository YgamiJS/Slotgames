const collapse = () => {
  const triggerBtns = document.querySelectorAll(".collapse__block-trigger");

  triggerBtns.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentNode.parentNode.classList.toggle("active");
    });
  });
};

collapse();
