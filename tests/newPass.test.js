import NewPassword from "./classes/NewPassword";

const inputs = [
  {
    value: "short",
    expectedError: "Must be at least 8 characters long"
  },
  {
    value: "NOLOWERCASE",
    expectedError: "Must contain a lowercase letter."
  },
  {
    value: "nottooshort",
    expectedError: "Must contain an uppercase letter."
  },
  {
    value: "Nottooshort",
    expectedError: "Must contain a number or special character."
  }
];

describe("Set New Password", function(){
  beforeEach(() => {
    NewPassword.open();
  });

  inputs.forEach((input) => {
    let testName = input.value;
    let error = input.expectedError;

    it("should show the correct error with invalid password format", () => {
      browser.switchToFrame($('#result'));
      NewPassword.enterNewPass(testName);
      const visibleErrorMessages = $('.helper-text').getText();
      expect(visibleErrorMessages).to.contain(error);
    })
  })
});