const checkboxes = document.querySelectorAll('input[type="checkbox"]')
let lastClick // lastCheckbox = checkboxes[lastClick]

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('click', e => {
    if (e.shiftKey) {
      if (index > lastClick) {
        for (let i = lastClick + 1; i < index; i++) {
          checkboxes[i].checked = checkboxes[lastClick].checked
        }
      } else if (index < lastClick) {
        for (let i = index + 1; i < lastClick; i++) {
          checkboxes[i].checked = checkboxes[lastClick].checked
        }
      }
    }
    lastClick = index
  })
})