const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

// Configuración dinámica del tamaño del canvas
function resizeCanvas() {
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
}
resizeCanvas();

// Redimensionar cuando se cambia el tamaño de la ventana
window.addEventListener("resize", () => {
    resizeCanvas();
    currentStep = 0; // Reiniciar animación
    animate();
});

// Parámetros del corazón
const centerX = () => canvas.width / 2;
const centerY = () => canvas.height / 2;
const size = () => canvas.width / 15; // Ajustar tamaño proporcional al ancho

// Tiempo de animación
const totalSteps = 300;
let currentStep = 0;

// Dibujar la "base" del corazón (donde se sienta)
function drawBase() {
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.ellipse(centerX(), centerY() + size() * 2, size() * 1.6, size() * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Dibujar el corazón en función del progreso
function drawHeart(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar lienzo
    drawBase(); // Dibujar la base

    ctx.beginPath();
    ctx.moveTo(centerX(), centerY());

    // Curva izquierda
    ctx.bezierCurveTo(
        centerX() - size() * progress, centerY() - size() * 1.5 * progress, // Control 1
        centerX() - size() * 2 * progress, centerY() + size() * 0.5 * progress, // Control 2
        centerX(), centerY() + size() * 2 * progress // Fin izquierda
    );

    // Curva derecha
    ctx.bezierCurveTo(
        centerX() + size() * 2 * progress, centerY() + size() * 0.5 * progress, // Control 1
        centerX() + size() * progress, centerY() - size() * 1.5 * progress, // Control 2
        centerX(), centerY() // Fin derecha
    );

    ctx.closePath();

    // Dibujar relleno y borde
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "#d299996d";
    ctx.lineWidth = 1;

    ctx.fill();
    ctx.stroke();
}

// Animación progresiva
function animate() {
    const progress = currentStep / totalSteps; // Progreso normalizado (0 a 1)
    drawHeart(progress);

    if (currentStep < totalSteps) {
        currentStep++;
        requestAnimationFrame(animate); // Continuar animación
    }
}

// Iniciar la animación
animate();
