class BasePage {

  // Could put root url of application here, or import from config baseurl
  open(path) {
    browser.url(path);
  }
}

export default BasePage;
