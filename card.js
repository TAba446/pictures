const cardsData = [
  {
    href: "earthquake-top/index.html",
    img: "image-card1.png",
    title: "زمین لرزه",
    text: "زمین لرزه چیست؟"
  },
  {
    href: "earthquake/index.html",
    img: "image-card2.jpg",
    title: "زمین لرزه‌های",
    text: "استان سیستان و بلوچستان"
  },
  {
    href: "popular/index.html",
    img: "image-card3.png",
    title: "دانستی‌ها",
    text: ""
  }
];

function renderCards(containerSelector) {
  const container = document.querySelector(containerSelector);
  cardsData.forEach(card => {
    const cardElement = document.createElement('a');
    cardElement.className = 'card';
    cardElement.href = card.href;
    cardElement.innerHTML = `
      <img src="${card.img}" alt="تصویر" />
      <div class="card-title">${card.title}</div>
      <div class="card-text">${card.text}</div>
    `;
    container.appendChild(cardElement);
  });
}
