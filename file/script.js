const screens = {
    s1: document.getElementById("screen1"),
    s2: document.getElementById("screen2"),
    s3: document.getElementById("screen3"),
};

const sub = document.getElementById("sub");
const typed = document.getElementById("typed");
const btn = document.getElementById("btn");
const hearts = document.getElementById("hearts");

const text =
"Nem kell sok.\n\nCsak annyi, hogy tudd:\nfontos vagy nekem.\n\nÉs ma is gondoltam rád. ❤️";

setTimeout(() => {
    sub.innerText = "valaki hagyott neked egy üzenetet...";
}, 1200);

setTimeout(() => {
    switchScreen("s2");
    type();
}, 3500);

function switchScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* gépelés */
let i = 0;

function type() {
    const interval = setInterval(() => {
        typed.innerText += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(interval);
            setTimeout(() => switchScreen("s3"), 1200);
        }
    }, 45);
}

/* szívek */
setInterval(() => {
    const h = document.createElement("div");
    h.classList.add("heart");
    h.innerText = "❤️";

    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (14 + Math.random() * 20) + "px";

    hearts.appendChild(h);

    setTimeout(() => h.remove(), 6000);
}, 300);

/* gomb */
btn.onclick = () => {
    for (let i = 0; i < 25; i++) {
        const h = document.createElement("div");
        h.classList.add("heart");
        h.innerText = "💖";

        h.style.left = Math.random() * 100 + "vw";
        h.style.fontSize = "22px";

        hearts.appendChild(h);

        setTimeout(() => h.remove(), 3000);
    }
};
