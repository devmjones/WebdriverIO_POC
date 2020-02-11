import BasePage from "./BasePage";

class NewPassword extends BasePage{

  // Element Getters
  get password() {
    return $("#password");
  }

  // Methods
  open() {
    super.open("https://the-internet.herokuapp.com/login");
  }
}

export default new NewPassword()