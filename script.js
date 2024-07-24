

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('focus', () => {
            link.style.backgroundColor = '#555';
        });
        link.addEventListener('blur', () => {
            link.style.backgroundColor = '';
        });
    });
});
