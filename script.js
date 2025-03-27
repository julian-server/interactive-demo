const interactiveElement = document.getElementById('interactive-element');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    interactiveElement.style.left = x + 'px';
    interactiveElement.style.top = y + 'px';
});