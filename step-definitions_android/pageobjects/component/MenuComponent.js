class MenuComponent {
  clickTabByName(tabName) {
    const dotMenu = $(`~${tabName}`);
    dotMenu.click();
  }
}

export const Menu = new MenuComponent();
