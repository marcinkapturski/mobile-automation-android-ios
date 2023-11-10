class NavigationComponent {
  clickHomeScreen() {
    $("~Home").click();
  }

  clickWebviewSceen() {
    $("~Webview").click();
  }

  clickLoginSceen() {
    $("~Login").click();
  }

  clickFormsScreen() {
    $("~Forms").click();
  }

  clickSwipeScreen() {
    $("~Swipe").click();
  }

  clickDragScreen() {
    $("~Drag").click();
  }
}

export const Navigation = new NavigationComponent();
