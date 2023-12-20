const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const container = document.querySelector(".form-container");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const reBtn = document.querySelector(".re-btn");
const flwBtn = document.querySelector(".flw-btn");

yesBtn.addEventListener("click", () => {
    text.innerHTML = "Yayy, Drop a text at Instagram!";
    gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    gif.style.padding.left ='20%';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    reBtn.style.visibility = 'visible';
    flwBtn.style.visibility = 'visible';

});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

reBtn.addEventListener("click", () => {
    window.location.reload();
});

flwBtn.addEventListener("click", () => {
    window.open('https://www.instagram.com/suryaa.kiran/');
});