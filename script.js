function generateRandomCircle() {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.top = Math.random() * window.innerHeight + "px";
    circle.style.left = Math.random() * window.innerWidth + "px";
  
    const colors = [
        '#7EC6BE',
        '#B5FFF7',
        '#F8EEDA' 
    ];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex];

    circle.style.background = `radial-gradient(circle at 50% 50%, ${color}, rgba(255, 255, 255, 0))`;
    document.body.appendChild(circle);
}

const circleCount = 6; // Change to desired number of circles
for (let i = 0; i < circleCount; i++) {
    generateRandomCircle();
}


