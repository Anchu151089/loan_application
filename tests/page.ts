import {Locator, Page} from "@playwright/test";


export class LoanApplicationPage
{
    readonly page : Page;
    readonly applyButton : Locator;
    readonly continueButton : Locator;
    readonly usernameField : Locator;
    readonly passwordField : Locator;
    readonly finalPageContinueButton : Locator;
    readonly finalPageOkButton : Locator;
    readonly fieldAmount : Locator;
    readonly fieldError : Locator;
    readonly imageButton1 : Locator;
    readonly imageButton2 : Locator;
    readonly dropdownFieldPeriod : Locator;
    readonly dropdownButtonPeriodOption : Locator;

    constructor(page : Page)
    {
        this.page = page;
        this.applyButton = page.getByTestId('id-small-loan-calculator-field-apply');
        this.continueButton = page.getByTestId('login-popup-continue-button');
        this.usernameField = page.getByTestId('login-popup-username-input');
        this.passwordField = page.getByTestId('login-popup-password-input');
        this.finalPageContinueButton = page.getByTestId('final-page-continue-button');
        this.finalPageOkButton = page.getByTestId('final-page-success-ok-button');
        this.fieldAmount = page.getByTestId('id-small-loan-calculator-field-amount');
        this.fieldError = page.getByTestId('id-small-loan-calculator-field-error');
        this.imageButton1 = page.getByTestId('id-image-element-button-image-1');
        this.imageButton2 = page.getByTestId('id-image-element-button-image-2');
        this.dropdownFieldPeriod = page.getByTestId('ib-small-loan-calculator-field-period');
        this.dropdownButtonPeriodOption = page.locator('[data-testid^="ib-small-loan-calculator-button-period-option-"]');


    }

    async apply()
    {
        await this.applyButton.click();
    }
    async continueLoginButton()
    {
        await this.continueButton.click();
    }
    async credentials(username : string , password : string)
    {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
    }
    async finalContinueButton()
    {
        await this.finalPageContinueButton.click();
    }
    async finalOkButton()
    {
        await this.finalPageOkButton.click();
    }


}