const site = document.querySelector('.site-wrap')
const images = site.querySelectorAll('img')
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  images.forEach(img => {
    const imgPos = img.getBoundingClientRect()

    if (st > lastScrollTop) {
      if ((imgPos.top + img.height/2) < window.innerHeight) img.classList.add('active')
    } else if (imgPos.bottom > 0) img.classList.add('active')

    if (imgPos.bottom < 0 || imgPos.top > window.innerHeight) img.classList.remove('active')
  })

  lastScrollTop = st <= 0 ? 0 : st;
})