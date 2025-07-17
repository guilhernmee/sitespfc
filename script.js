// Botão voltar ao topo
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.textContent = 'Topo ↑';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.backgroundColor = '#cc0000';
backToTop.style.color = '#fff';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
