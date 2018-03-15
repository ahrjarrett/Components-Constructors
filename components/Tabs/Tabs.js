class TabsItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add('Tabs__item-selected');
  }

  deselect() {
    // should use classList
    this.element.classList.remove('Tabs__item-selected');
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object

    const tabsItem = this.tabs.getTab(this.element.dataset.tab);
    this.tabsItem = new TabsItem(tabsItem);

    // reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    // select the associated tab
    this.element.classList.add('Tabs__link-selected');
    this.tabsItem.select();
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
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
    // deselect the old active link
    // assign the new active link
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

