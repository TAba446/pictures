// cards.js
const cards = [
  {
    title: "زمین لرزه",
    text: "زمین لرزه چیست؟",
    image: "image-card1.png",
    link: "earthquake-top/index.html"
  },
  {
    title: "زمین لرزه‌های",
    text: "استان سیستان و بلوچستان",
    image: "image-card2.jpg",
    link: "earthquake/index.html"
  },
  {
    title: "دانستی‌ها",
    text: "",
    image: "image-card3.png",
    link: "popular/index.html"
  },
  {
    title: "سیل",
    text: "اطلاعات و راه‌های پیشگیری",
    image: "image-flood.jpg",
    link: "flood/index.html"
  }
];

// ساخت کارت‌ها
window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".grid-container");
  cards.forEach(card => {
    const cardHTML = `
      <a class="card" href="${card.link}">
        <img src="${card.image}" alt="${card.title}" />
        <div class="card-title">${card.title}</div>
        <div class="card-text">${card.text}</div>
      </a>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
});
