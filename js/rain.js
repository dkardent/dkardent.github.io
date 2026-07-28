/* =========================================
   D. K. ARDENT - Sitio Oficial
   Archivo: rain.js
   ========================================= */

const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

const totalParticles = 80;

for(let i = 0; i < totalParticles; i++){

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        radius: Math.random() * 2 + .5,

        speedX: (Math.random() - .5) * .15,

        speedY: -.05 - Math.random() * .08,

        alpha: .08 + Math.random() * .18

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(const p of particles){

        ctx.beginPath();

        ctx.fillStyle = `rgba(255,230,180,${p.alpha})`;

        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

        ctx.fill();

        p.x += p.speedX;

        p.y += p.speedY;

        if(p.y < -10){

            p.y = canvas.height + 10;

            p.x = Math.random() * canvas.width;

        }

    }

    requestAnimationFrame(animate);

}

animate();