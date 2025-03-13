document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const produkItems = document.querySelectorAll(".produk-item.d-none");

  let isExpanded = false;

  showMoreBtn.addEventListener("click", function () {
    produkItems.forEach((item) => {
      item.classList.toggle("d-none");
    });

    if (isExpanded) {
      showMoreBtn.textContent = "Show More";
    } else {
      showMoreBtn.textContent = "Show Less";
    }

    isExpanded = !isExpanded;
  });
});