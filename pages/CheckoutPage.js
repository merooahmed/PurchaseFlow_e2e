const { expect } = require("@playwright/test");
const { User } = require("../data/user");
const { LoginPage } = require("./LoginPage");

class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.userData = User.UserDataRegister();


        this.proceedToCheckoutButton = page.getByRole('button', {
            name: 'Proceed to checkout'
        });
      //  this.proceedToCheckoutButton3 = page.getByTestId('proceed-3');

        this.paymentMethodDropdown = page.getByTestId('payment-method');
        this.checkPaymentButton = page.getByRole('button', { name: 'Check payment' });
        this.confirmPaymentButton = page.getByRole('button', { name: 'Confirm' });


        this.houseNumber = page.getByTestId("house_number");
        this.street = page.getByTestId("street");
        this.city = page.getByTestId("city");
        this.state = page.getByTestId("state");


        this.loadingIndicator = page.getByText('Looking up your address');

        this.orderConfirmedMsg = page.locator('#order-confirmation');

        this.loginPage = new LoginPage(page);
    }

    async waitForLookup() {

        await this.loadingIndicator
            .waitFor({ state: 'visible', timeout: 2000 })
            .catch(() => { });
        await this.loadingIndicator.waitFor({ state: 'hidden' });
    }

    async fillHouseNumber(value) {

        await this.houseNumber.fill(value);
        await this.waitForLookup();

        if ((await this.houseNumber.inputValue()) !== value) {
            await this.houseNumber.fill(value);
            await this.waitForLookup();
        }

        await expect(this.houseNumber).toHaveValue(value);
    }

    async Checkout(registeredEmail) {

        await this.proceedToCheckoutButton.click();

        await this.loginPage.login(registeredEmail, this.userData.password);

        await this.proceedToCheckoutButton.click();



        await this.fillHouseNumber(this.userData.houseNumber);

        await this.waitForLookup();

        /*await expect(this.street).not.toHaveValue('');
        await expect(this.city).not.toHaveValue('');
        await expect(this.state).not.toHaveValue('');*/
        // await this.page.waitForTimeout(1000);
        await this.proceedToCheckoutButton.click();
        await this.paymentMethodDropdown.selectOption('cash-on-delivery');

        await this.checkPaymentButton.click();
        await this.confirmPaymentButton.click();
    }

    async expectCheckoutPage() {
        await expect(this.street).toHaveValue(this.userData.street);
        await expect(this.city).toHaveValue(this.userData.city);
        await expect(this.state).toHaveValue(this.userData.state);

        await expect(this.orderConfirmedMsg)
            .toContainText(/Thanks for your order! Your invoice number is INV-\d+/);
    }
}

module.exports = { CheckoutPage };