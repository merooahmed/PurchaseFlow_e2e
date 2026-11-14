# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckoutTest.spec.js >> Add to cart >> verify checkout 
- Location: tests\CheckoutTest.spec.js:38:3

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://practicesoftwaretesting.com/auth/register
Call log:
  - navigating to "https://practicesoftwaretesting.com/auth/register", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | const { User } = require("../data/user");
  2  | 
  3  | class RegisterPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.firstname = page.getByTestId("first-name");
  7  |     this.lastName = page.getByTestId("last-name");
  8  |     this.BirthDate = page.getByTestId("dob");
  9  |     this.country = page.getByTestId("country");
  10 |     this.postalCode = page.getByTestId("postal_code");
  11 |     this.houseNumber = page.getByTestId("house_number");
  12 |     this.street = page.getByTestId("street");
  13 |     this.city = page.getByTestId("city");
  14 |     this.state = page.getByTestId("state");
  15 |     this.phone = page.getByTestId("phone");
  16 |     this.email = page.getByTestId("email");
  17 |     this.password = page.getByTestId("password");
  18 |     this.registerButton = page.getByRole("button", { name: "Register" });
  19 |   }
  20 | 
  21 |   async open() {
> 22 |     await this.page.goto("/auth/register");
     |                     ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://practicesoftwaretesting.com/auth/register
  23 |   }
  24 | 
  25 |   async register(email ) {
  26 |     const userData = User.UserDataRegister();
  27 | 
  28 |     await this.firstname.fill(userData.firstName);
  29 |     await this.lastName.fill(userData.lastName);
  30 |     await this.BirthDate.fill(userData.birthDate);
  31 |     await this.country.selectOption(userData.country);
  32 |     await this.postalCode.fill(userData.postalCode);
  33 |     await this.houseNumber.fill(userData.houseNumber);
  34 |     await this.street.fill(userData.street);
  35 |     await this.city.fill(userData.city);
  36 |     await this.state.fill(userData.state);
  37 |     await this.phone.fill(userData.phone);
  38 |     await this.email.fill(email);
  39 |     await this.password.fill(userData.password);
  40 |     await this.registerButton.click();
  41 |   }
  42 | }
  43 | 
  44 | module.exports = { RegisterPage };
```