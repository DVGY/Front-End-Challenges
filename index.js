/* --------ARTICLE PREVIEW ---------*/
const shareBtn = document.querySelector('.content__icon');
const sharePopUpMenu = document.querySelector('.article-preview__toast');

shareBtn.addEventListener('click', () => {
  sharePopUpMenu.classList.toggle('article-preview__toast--hide');
});

/*------------------------------------ */
