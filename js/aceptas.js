const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

noButton.addEventListener('click', function () {
    const buttonContainer = document.getElementById('button-container');

    const containerWidth = buttonContainer.clientWidth;
    const containerHeight = buttonContainer.clientHeight;

    const randomX = Math.random() * (containerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (containerHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Incrementar el tamaño del botón "Sí"
    const currentWidth = yesButton.offsetWidth;
    const currentHeight = yesButton.offsetHeight;

    yesButton.style.width = `${currentWidth + 10}px`;
    yesButton.style.height = `${currentHeight + 5}px`;
    yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton).fontSize) + 1}px`;
});

yesButton.addEventListener('click', function () {
    confetti();

    setTimeout(function () {
        alert('¡Acabas de tomar la mejor decisión! 😊');
    }, 1500);
});
