const accordion = () => {
  const accordionItems = document.querySelectorAll('.accordion__items');
  const accordionContent = document.querySelectorAll('.accordion__wrapper');
  const accordionItemImg = document.querySelectorAll('.accordion__item_img ')

  accordionItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')
      accordionContent[i].classList.toggle('open');
      accordionItemImg[i].classList.toggle('open')
    })
  })
}


export default accordion;