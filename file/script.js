let level = 0;

const messages = [
  "Nyugodt reggel.",
  "Ne siess ma semmivel.",
  "Minden rendben lesz.",
  "Csak egy gondolat vagyok melletted.",
  "Nem kell tökéletesnek lenned.",
];

function spawnRose(intensity){
  for(let i = 0; i < intensity; i++){
    const r = document.createElement("div");
    r.innerHTML = "🌹";
    r.style.position = "absolute";
    r.style.left = Math.random() * 100 + "vw";
    r.style.top = "-20px";
    r.style.animation = "fall 4s linear";
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 4000);
  }
}

// animáció
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); }
}`;
document.head.appendChild(style);

document.getElementById("btn").onclick = () => {
  level++;

  // 100 szint
  if(level > 100){
    document.getElementById("message").innerText = "Kész 🌹";
    document.getElementById("btn").style.display = "none";
    return;
  }

  document.getElementById("message").innerText =
    messages[level % messages.length] + "\nLevel: " + level;

  // nehézség / intenzitás nő
  spawnRose(Math.min(level, 30));

  document.querySelector(".bg").style.filter =
    `hue-rotate(${level * 3}deg)`;
};
