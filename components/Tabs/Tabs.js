class TabsItem {
  constructor(element) { this.element = element }
  select() { this.element.classList.add('Tabs__item-selected') }
  deselect() { this.element.classList.remove('Tabs__item-selected') }
}

// Make this higher-order
class TabsLink {
  constructor(element) { this.element = element }
  select() { this.element.classList.add('Tabs__link-selected') }
  deselect() { this.element.classList.remove('Tabs__link-selected') }
}

class Tabs {
  constructor(element) {
    this.element = element
    this.state = 1

    const links = [...element.querySelectorAll('.Tabs__link')]
    links.forEach(link => new TabsLink(link))

    this.links = links

    console.log(links)
    console.log(this.links)

    this.items = [...element.querySelectorAll('.Tabs__item')]

    this.init()
  }

  init() {
    this.links.forEach(link => new TabsLink(link))
    this.items.forEach(item => new TabsItem(item))

    this.addListeners('click', this.links)
  }

  addListeners(eventType, elements) {
    elements.map(el => el.addEventListener(eventType, (evt) => {
      console.log(evt.target)

    }))

  }

  updateTab() {

  }

  // getDOMNOde = fn : Int -> Node
  getTab(data) {
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`)
  }
}

const tabs = new Tabs(document.querySelector(".Tabs"));

//const tabsLinks = Array.from(document.querySelectorAll('.Tabs__link')).map(link => new TabsLink(link))


/*
    // DOM Collections
    const domLinks = element.querySelectorAll(".Tabs__link")
    const domItems = element.querySelectorAll(".Tabs__item")
    // Class Collections
    this.links = [...domLinks].map(link => new TabsLink(link))
    this.items = [...domItems].map(item => new TabsItem(item))

    this.activeLink = this.links[0]
    this.activeItem = this.items[0]

    domLinks.forEach((domLink, i) => {
      domLink.addEventListener('click', (event) => {
	this.updateActiveLink(this.links[i], i)
	this.updateActiveItem(this.getItem(domLink.dataset.tab))
      })
    })

    this.init()
  }

  init() {
    // select the first link and tab upon ititialization
    this.activeLink.select()
    this.activeItem.select()
  }

  updateActiveLink(newLink) {
    this.activeLink.deselect()
    this.activeLink = newLink
    this.activeLink.select()
  }

  updateActiveItem(newItem) {
    this.activeItem.deselect()
    this.activeItem = newItem
    console.log(this.activeItem)
  }

  // getTab :: Number -> DOM Node
  getItem(data) {
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`)
  }
}

const tabs = new Tabs(document.querySelector(".Tabs"));

*/
