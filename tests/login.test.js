import { expect } from "chai";
import Login from "./classes/Login";

describe("Login Form", () => {
  beforeEach(() => {
    Login.open();
  });

  it("should not allow login with invalid username", () => {
    // can us browser.debug() to set breakpoints

    Login.username.addValue("fooooooo");
    Login.password.addValue("baaaaarrrrrr");
    Login.submit.click();
    Login.error.waitForDisplayed();
    const error = Login.error.getText();
    expect(error).to.contain("Your username is invalid!");
  });

  it("should login with valid credentials", () => {
    Login.open();
    Login.login("tomsmith", "SuperSecretPassword!");
    Login.successMsg.waitForDisplayed();
    const msg = Login.successMsg.getText();
    expect(msg).to.contain("You logged into a secure area!");
  });
});
