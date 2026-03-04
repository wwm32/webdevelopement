/* ===========================
   Animated Sky Canvas
   sky.js
   =========================== */

(() => {
    "use strict";

    const canvas = document.getElementById("sky-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Stars
    const stars = Array.from({ length: 300 }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.5 + 0.3,
        twinkleSpeed: Math.random() * 2 + 1,
        twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Shooting stars
    const shootingStars = Array.from({ length: 5 }, () => ({
        x: 0,
        y: 0,
        len: 0,
        speed: 0,
        angle: 0,
        opacity: 0,
        active: false,
    }));

    const spawnShootingStar = (s) => {
        s.x = Math.random() * canvas.width * 0.8;
        s.y = Math.random() * canvas.height * 0.3;
        s.len = Math.random() * 100 + 50;
        s.speed = Math.random() * 8 + 4;
        s.angle = (Math.random() * 25 + 15) * (Math.PI / 180);
        s.opacity = 1;
        s.active = true;
    };

    const drawSkyGradient = (t) => {
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        const d = (Math.sin(t) + 1) / 2;
        grad.addColorStop(0, `rgb(${8 + 40 * d},${12 + 50 * d},${22 + 60 * d})`);
        grad.addColorStop(0.5, `rgb(${10 + 30 * d},${14 + 40 * d},${30 + 50 * d})`);
        grad.addColorStop(1, `rgb(${4 + 20 * d},${6 + 25 * d},${16 + 35 * d})`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStars = (t) => {
        const nightFactor = 1 - (Math.sin(t) + 1) / 2;
        stars.forEach((s) => {
            const twinkle = (Math.sin(Date.now() * 0.001 * s.twinkleSpeed + s.twinkleOffset) + 1) / 2;
            const alpha = nightFactor * (0.3 + twinkle * 0.7);

            ctx.beginPath();
            ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.fill();

            if (s.r > 1) {
                ctx.beginPath();
                ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200,220,255,${alpha * 0.15})`;
                ctx.fill();
            }
        });
    };

    const drawShootingStars = () => {
        shootingStars.forEach((s) => {
            if (!s.active) {
                if (Math.random() < 0.003) spawnShootingStar(s);
                return;
            }
            const tailX = s.x - Math.cos(s.angle) * s.len;
            const tailY = s.y - Math.sin(s.angle) * s.len;

            const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
            grad.addColorStop(0, "rgba(255,255,255,0)");
            grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);

            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(s.x, s.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Draw a small bright head
            ctx.beginPath();
            ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
            ctx.fill();

            s.x += Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;
            s.opacity -= 0.01;

            if (s.opacity <= 0 || s.x > canvas.width + 100 || s.y > canvas.height + 100) {
                s.active = false;
            }
        });
    };

    const drawSun = (t) => {
        const x = canvas.width / 2 + Math.cos(t) * canvas.width * 0.4;
        const y = canvas.height * 0.75 - Math.sin(t) * canvas.height * 0.5;

        const glow = ctx.createRadialGradient(x, y, 10, x, y, 250);
        glow.addColorStop(0, "rgba(255,244,176,0.8)");
        glow.addColorStop(0.15, "rgba(255,200,87,0.4)");
        glow.addColorStop(0.4, "rgba(255,160,60,0.1)");
        glow.addColorStop(1, "rgba(255,200,100,0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 250, 0, Math.PI * 2);
        ctx.fill();
    };

    const drawNebula = (t) => {
        const x1 = canvas.width * 0.2 + Math.sin(t * 0.3) * 50;
        const y1 = canvas.height * 0.3;
        const n1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, 300);
        n1.addColorStop(0, "rgba(100,120,255,0.03)");
        n1.addColorStop(0.5, "rgba(80,100,200,0.015)");
        n1.addColorStop(1, "rgba(60,80,180,0)");
        ctx.fillStyle = n1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const x2 = canvas.width * 0.75 + Math.cos(t * 0.2) * 30;
        const y2 = canvas.height * 0.5;
        const n2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, 250);
        n2.addColorStop(0, "rgba(245,185,66,0.025)");
        n2.addColorStop(0.5, "rgba(200,130,50,0.01)");
        n2.addColorStop(1, "rgba(150,100,40,0)");
        ctx.fillStyle = n2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawHorizon = () => {
        const h = ctx.createLinearGradient(0, canvas.height * 0.75, 0, canvas.height);
        h.addColorStop(0, "rgba(255,180,100,0.05)");
        h.addColorStop(0.5, "rgba(20,10,40,0.4)");
        h.addColorStop(1, "rgba(8,12,22,0.95)");
        ctx.fillStyle = h;
        ctx.fillRect(0, canvas.height * 0.75, canvas.width, canvas.height * 0.25);
    };

    const animate = () => {
        const t = Date.now() * 0.00008;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSkyGradient(t);
        drawNebula(t);
        drawStars(t);
        drawShootingStars();
        drawSun(t);
        drawHorizon();
        requestAnimationFrame(animate);
    };

    animate();
})();
