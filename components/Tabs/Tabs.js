
class TabLink {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    console.log("TabLink", this.link);
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.link.addEventListener("click", () => this.select());
  }
  

  select() {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).forEach((tabsLinks) => {
      tabsLinks.classList.remove("tabs-link-selected");
    });
    this.link.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
    console.log("TabItem", this.element);
  }

  select() {
    this.items = Array.from(document.querySelectorAll(".tabs-item"));
    this.items.forEach(item => item.classList.remove("tabs-item-selected"));
    this.element.classList.add('tabs-item-selected');
  }
}

const links = document.querySelectorAll('.tabs-link');

links.forEach(link => {
  return new TabLink(link);
})