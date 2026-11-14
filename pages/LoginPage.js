const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.EmailInputField = page.getByTestId("email");
        this.passwordInputField = page.getByTestId("password");
        this.loginButton = page.getByRole("button", { name: "Login", exact: true });
        this.title = page.getByRole("heading", { name: "My account", exact: true });
    }

    async open() {
        await this.page.goto("/auth/login");
    }

    async login(email, password) {
        await this.EmailInputField.fill(email);
        await this.passwordInputField.fill(password);
        
        await this.loginButton.click();
    }

    async expectLoggedIn() {
        await expect(this.page).toHaveURL(/\/account$/);
        await expect(this.title).toBeVisible();
    }
}

module.exports = { LoginPage };