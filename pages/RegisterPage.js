const { User } = require("../data/user");

class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstname = page.getByTestId("first-name");
    this.lastName = page.getByTestId("last-name");
    this.BirthDate = page.getByTestId("dob");
    this.country = page.getByTestId("country");
    this.postalCode = page.getByTestId("postal_code");
    this.houseNumber = page.getByTestId("house_number");
    this.street = page.getByTestId("street");
    this.city = page.getByTestId("city");
    this.state = page.getByTestId("state");
    this.phone = page.getByTestId("phone");
    this.email = page.getByTestId("email");
    this.password = page.getByTestId("password");
    this.registerButton = page.getByRole("button", { name: "Register" });
  }

  async open() {
    await this.page.goto("/auth/register");
  }

  async register(email ) {
    const userData = User.UserDataRegister();

    await this.firstname.fill(userData.firstName);
    await this.lastName.fill(userData.lastName);
    await this.BirthDate.fill(userData.birthDate);
    await this.country.selectOption(userData.country);
    await this.postalCode.fill(userData.postalCode);
    await this.houseNumber.fill(userData.houseNumber);
    await this.street.fill(userData.street);
    await this.city.fill(userData.city);
    await this.state.fill(userData.state);
    await this.phone.fill(userData.phone);
    await this.email.fill(email);
    await this.password.fill(userData.password);
    await this.registerButton.click();
  }
}

module.exports = { RegisterPage };