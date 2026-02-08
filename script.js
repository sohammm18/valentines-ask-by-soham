// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});



// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 250;
    const max = 250;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.4s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

const surpriseBtn = document.getElementById("surprise-btn");
const letterContainer = document.getElementById("letter-container");
const surprisePage = document.getElementById("surprise-page");

// show button after YES is clicked
document.querySelector(".yes-btn").addEventListener("click", () => {
  document.getElementById("final-text").style.display = "block";
  surpriseBtn.style.display = "block";
});



// when surprise button clicked
surpriseBtn.addEventListener("click", () => {
  letterContainer.style.display = "none";
  surprisePage.style.display = "flex";
  music.play();
});



const polaroids = document.querySelectorAll(".polaroid");
let current = 0;

function showPolaroid(index) {
  polaroids.forEach(p => p.classList.remove("active"));
  polaroids[index].classList.add("active");
}

// change every 3.5 seconds
setInterval(() => {
  current = (current + 1) % polaroids.length;
  showPolaroid(current);
}, 3500);



// reusable floating logic
function setupFloatingText(elementId, maxRuns) {
  const el = document.getElementById(elementId);
  let count = 0;

  function play() {
    if (!el) return;

    if (count >= maxRuns) {
      el.remove();
      return;
    }

    // random vertical position
    el.style.top = Math.floor(Math.random() * 80 + 10) + "%";

    // restart animation
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "floatText 6s linear forwards";

    count++;
  }

  play();
  el.addEventListener("animationend", play);
}

// awwwww → 5 times
setupFloatingText("floating-text", 5);

// mwahhhhh → 1 time only
setupFloatingText("floating-text2", 1);



const videos = ["gateway.mp4", "rickshaw.mp4" , "bkc.mp4"];
let index = 0;

const video = document.getElementById("surpriseVideo");

video.src = videos[index];
video.load();
video.play();

video.addEventListener("ended", () => {
  index = (index + 1) % videos.length;
  video.src = videos[index];
  video.load();
  video.play();
});



const music = document.getElementById("bg-music");

envelope.addEventListener("click", () => {
  music.play().catch(err => console.log(err));
});



const lines = document.querySelectorAll(".love-text .line");

lines.forEach((line, index) => {
  setTimeout(() => {
    line.style.opacity = "1";
    line.style.transform = "translateY(0)";
  }, index * 1200); // delay between lines
});
