const user = require("./user_auth_test.json");
class User {
  static UserDataRegister() {
    
    const userData = {
      firstName: user.register.firstName,
      lastName: user.register.lastName,
      birthDate: user.register.birthDate,
      country: user.register.country,
      postalCode: user.register.postalCode,
      houseNumber: user.register.houseNumber,
      street: user.register.street,
      city: user.register.city,
      state: user.register.state,
      phone: user.register.phone,
      password: user.register.password,
    };
    return userData;
  }
}

module.exports = { User };
