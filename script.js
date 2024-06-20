document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    
    yesButton.addEventListener('click', function() {
        alert('¡Jaja, yo sabía que sí!');
        window.location.href = 'poema.html';
    });

    noButton.addEventListener('mouseover', function() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();
        
        let newTop = Math.random() * (containerRect.height - noButtonRect.height);
        let newLeft = Math.random() * (containerRect.width - noButtonRect.width);
        
        noButton.style.position = 'absolute';
        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    });
});
