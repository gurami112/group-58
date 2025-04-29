const addParagraphBtn = document.getElementById("addParagraphBtn");
const paragraphContainer = document.getElementById("paragraphContainer");

addParagraphBtn.addEventListener("click", function() {
  const p = document.createElement("p");
  p.innerText = "ახალი ელემენტი დამატებულია";
  paragraphContainer.appendChild(p);
});

const quotes = [
  "შენი დრო შეზღუდულია, არ დახარჯო სხვისი ცხოვრებით ცხოვრებაში.",
  "წარუმატებლობა წარმატების ნაწილი და გზა არის.",
  "გარისკე ან დაკარგე შანსი!",
  "შეცდომები გვასწავლის და გვაყალიბებს.",
  "ფიქრი მოქმედების გარეშე არაფერია."
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");

quoteBtn.addEventListener("click", function() {
  const i = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerText = quotes[i];
});

const imgs = ["img1.jpg", "img2.jpg", "img3.jpg"];
let imgIndex = 0;
const sliderImg = document.getElementById("sliderImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", function() {
  imgIndex = (imgIndex - 1 + imgs.length) % imgs.length;
  sliderImg.src = imgs[imgIndex];
});

nextBtn.addEventListener("click", function() {
  imgIndex = (imgIndex + 1) % imgs.length;
  sliderImg.src = imgs[imgIndex];
});

const box = document.getElementById("box");
const changeStyleBtn = document.getElementById("changeStyleBtn");

changeStyleBtn.addEventListener("click", function() {
  const colors = ["red", "blue", "green", "orange", "purple"];
  const size = Math.floor(Math.random() * 200) + 50;
  const color = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = color;
  box.style.width = size + "px";
  box.style.height = size + "px";
});

const counter = document.getElementById("counter");
let count = 0;

setInterval(function() {
  counter.innerText = count;
  counter.style.color = count % 2 === 0 ? "green" : "blue";
  count = (count + 1) % 10;
}, 3000);
