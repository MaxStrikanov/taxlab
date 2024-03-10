const links = async () => {
  const links = document.querySelectorAll('.header__item_link')


  links.forEach((item, i) => {
    item.onclick = () => {
      document.getElementById(item.getAttribute('data-link')).scrollIntoView({
        behavior: "smooth"
      })
    }
  });
}

export default links;