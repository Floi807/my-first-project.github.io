function showPage(pageId) {
      // Скрыть все страницы
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => {
        page.classList.remove('active');
      });

      // Показать нужную страницу
      const targetPage = document.getElementById(pageId);
      if (targetPage) {
        targetPage.classList.add('active');
      }
    }




const descriptions = document.querySelectorAll('.description');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.description').forEach(desc => {
    desc.addEventListener('wheel', e => {
      e.preventDefault();
      desc.scrollTop += e.deltaY * 0.1;
    }, { passive: false });
  });
});



document.querySelectorAll('.book img').forEach(img => {
  img.addEventListener('click', () => {
    const title = encodeURIComponent(img.dataset.title);
    const description = encodeURIComponent(img.dataset.description);
    const imgSrc = encodeURIComponent(img.dataset.img);

    const url = `book.html?title=${title}&description=${description}&img=${imgSrc}`;
    window.open(url, '_blank');
  });
});









