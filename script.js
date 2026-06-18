const themeButton = document.getElementById("themeButton");

function updateThemeButtonText() {
  const isDark = document.body.classList.contains("dark");
  themeButton.textContent = isDark ? "ライトに戻す" : "テーマ切替";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateThemeButtonText();
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
    card.style.transition = "transform 0.2s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
