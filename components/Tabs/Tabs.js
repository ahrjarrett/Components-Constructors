class TabsItem {
  constructor(element) { this.element = element }
  select() { this.element.classList.add('Tabs__item-selected') }
  deselect() { this.element.classList.remove('Tabs__item-selected') }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;

    const tabsItem = this.tabs.getTab(this.element.dataset.tab);
    this.tabsItem = new TabsItem(tabsItem);

    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add('Tabs__link-selected');
    this.tabsItem.select();
  }
  deselect() {
    this.element.classList.remove('Tabs__link-selected');
    this.tabsItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = [...this.links].map(link => new TabsLink(link, this));
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    // select the first link and tab upon ititialization
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
    this.activeLink.select();
  }

  // getTab :: Number -> DOM Node
  getTab(data) {
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  }
}

const tabs = new Tabs(document.querySelector(".Tabs"));

