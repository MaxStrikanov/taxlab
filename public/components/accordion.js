const accordion = () => {
  const accordionItems = document.querySelectorAll('.accordion__items');
  const accordionContent = document.querySelectorAll('.accordion__wrapper');
  const accordionItemImg = document.querySelectorAll('.accordion__item_img ')
  const accordionTitle = document.querySelectorAll('.accordion__item_title');
  const accordionText = document.querySelectorAll('.accordion__item_text');

  accordionItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')
      accordionTitle[i].classList.toggle('open');
      accordionContent[i].classList.toggle('open');
      accordionItemImg[i].classList.toggle('open');
      accordionText[i].classList.toggle('open');
    })
  })
}

export default accordion;