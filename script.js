document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk mengatur Show More / Show Less
  function setupShowMore(buttonId, sectionId) {
    const showMoreBtn = document.getElementById(buttonId);
    const produkItems = document.querySelectorAll(
      `#${sectionId} .produk-item.d-none`
    );

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
  }

  // Atur Show More / Show Less untuk bagian Kasih
  setupShowMore("showMoreBtnKasih", "produk-kasih");

  // Atur Show More / Show Less untuk bagian Sayang
  setupShowMore("showMoreBtnSayang", "produk-sayang");

  // Atur Show More / Show Less untuk bagian Sayang
  setupShowMore("showMoreBtnKangen", "produk-kangen");

  // Atur Show More / Show Less untuk bagian Sayang
  setupShowMore("showMoreBtnSpesial", "produk-spesial");
});
