import BasePage from "./BasePage";

class Login extends BasePage {
  // Element Getters
  get username() {
    return $("#username");
  }

  get password() {
    return $("#password");
  }

  get submit() {
    return $('[type="submit"]');
  }

  get error() {
    return $("#flash");
  }

  get successMsg() {
    return $("div.flash.success");
  }

  // Methods
  open() {
    super.open("https://the-internet.herokuapp.com/login");
  }

  login(username, password) {
    this.username.addValue(username);
    this.password.addValue(password);
    this.submit.click();
    // return this; would allow for method chaining if needed
  }
}

export default new Login();
