class Dropdown {
  constructor(element, hideClass) {
    this.element = element
    this.clicked = false
    this.child = [...this.element.children].find(child => child.className === hideClass)

    this.element.addEventListener('click', () => this.handleClickEvent())
  }

  handleClickEvent() {
    if (this.clicked && this.child.classList) this.child.classList.remove('display')
    else this.child.classList.add('display')
    this.toggleDropdown()
  }

  toggleDropdown() {
    this.clicked = !this.clicked
  }
}

const dropdown = new Dropdown(
  document.querySelector('.Dropdown'),
  'Dropdown__List'
)

