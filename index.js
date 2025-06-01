const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const mainText = document.getElementById("mainText");
const cinnamoroll = document.getElementById("cinnamoroll");

yesBtn.addEventListener("click", function () {
  console.log("click");
  yesBtn.classList.add("accept");
  noBtn.classList.add("hide");
  cinnamoroll.src = "./happy.png";
  mainText.textContent = "УРААААААА 💖💖💖";
  cinnamoroll.classList.add("jump");
  const heartEl = "♥";
  createHearts(heartEl);
});

noBtn.addEventListener("click", function () {
  console.log("click");
  noBtn.classList.add("decline");
  yesBtn.classList.add("hide");
  cinnamoroll.src = "./sad.png";
  mainText.textContent = "Чтож....";
  const heartEl = "💔";
  createHearts(heartEl);
});

function createHearts(heartEl) {
  const container = document.querySelector("main");
  const colors = ["#ff69b4", "#ff1493", "#ff00ff", "#ff99cc"];

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = heartEl;
      heart.classList.add("heart");

      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${Math.random() * 20 + 40}px`;
      heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];

      container.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 2000);
    }, i * 100);
  }
}
