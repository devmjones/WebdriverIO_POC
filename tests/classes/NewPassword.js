import BasePage from './BasePage';

class NewPassword extends BasePage{

  // Element Getters
  get passwordField() {
    return $('input.password');
  }

  // Methods
  open() {
    super.open('https://codepen.io/klamping/full/RMmqvq/');
  }

  enterNewPass(password){
    this.passwordField.addValue(password)
  }
}

export default new NewPassword()