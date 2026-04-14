function showWish() {
    document.getElementById("wishBox").classList.remove("hidden");
}

// Simple Fireworks Animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function createFirework() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        radius: 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        speed: Math.random() * 3 + 2
    };
}

function drawFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((f, index) => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = f.color;
        ctx.fill();

        f.y -= f.speed;

        if (f.y < 0) {
            fireworks.splice(index, 1);
        }
    });

    requestAnimationFrame(drawFireworks);
}

setInterval(() => {
    fireworks.push(createFirework());
}, 300);

drawFireworks();