class LoginScreen {
  constructor() {
    this.usernameInput = "[placeholder=Username]";
    this.passwordInput = "[placeholder=Password]";
    this.loginButton = ".android.widget.Button";
    this.signUpButton = "//button[@type='submit']";
    this.emailValidation = "";
    this.passwordValidation = "";
    this.passwordConfirmationValidation = "";
  }

  typeEmail(userName) {
    $(this.usernameInput).setValue(userName);
  }

  typePassword(password) {
    $(this.passwordInput).setValue(password);
  }

  typePasswordConfirmation(password) {
    $(this.passwordInput).setValue(password);
  }

  clickLoginButton() {
    $(this.loginButton).click();
  }

  clickSignUpButton() {
    $(this.registrationButton).click();
  }

  checkEmailValidationMessage(expectedMessage) {
    const emailValidation = $(this.emailValidation);
    expect(emailValidation).toHaveValueContaining(expectedMessage);
  }

  checkPasswordMessage(expectedMessage) {
    const passwordValidation = $(this.passwordValidation);
    expect(passwordValidation).toHaveValueContaining(expectedMessage);
  }

  checkPasswordConfirmationMessage(expectedMessage) {
    const passwordConfirmationValidation = $(
      this.passwordConfirmationValidation
    );
    expect(passwordConfirmationValidation).toHaveValueContaining(
      expectedMessage
    );
  }
}

export const Login = new LoginScreen();
