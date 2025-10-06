const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    
    const offset = 30; 
    customCursor.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
});