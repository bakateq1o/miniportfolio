document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт мини-портфолио загружен');
    
    // текущая дата в футер
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    
    const footer = document.querySelector('footer');
    if (footer) {
        const copyright = footer.querySelector('p:last-child');
        if (copyright) {
            copyright.innerHTML = `&copy; ${yearSpan.textContent} Лабораторная работа №8`;
        }
    }
});