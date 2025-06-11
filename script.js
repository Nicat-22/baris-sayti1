const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const finalMessage = document.getElementById("finalMessage");
const container = document.querySelector(".container");
const reactionVideo = document.getElementById("reactionVideo");

const messages = [
  "EMİNSEN?",
  "DEQİQ EMİNSEN?",
  "TAM DEQİQ EMİNSEN?",
  "BİRDE FİKİRLEŞ",
  "YOX DESEN ÜZÜLÜRÜM",
  "HEYQİ ÜZÜLEREM",
  "COX AMA COX ÜZÜLEREM",
  "YAXSİ DAY DİRESMİREM"
];

let clickCount = 0;
let yesScale = 1;

noBtn.addEventListener("click", () => {
  if (clickCount < messages.length) {
    noBtn.textContent = messages[clickCount];
    clickCount++;

    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;

    // Video göstərilsin
    reactionVideo.classList.remove("hidden");
    reactionVideo.currentTime = 0;
    reactionVideo.play();

    if (clickCount === messages.length) {
      setTimeout(() => {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.zIndex = "9999";
        yesBtn.style.fontSize = "40px";
        yesBtn.textContent = "BARISAAQQQ ❤️";
      }, 600);
    }
  }
});

yesBtn.addEventListener("click", () => {
  document.getElementById("mainCard").style.display = "none";
  finalMessage.classList.remove("hidden");
});
