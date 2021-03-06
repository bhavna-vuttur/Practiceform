
import { Given, When, Then } from '@cucumber/cucumber'
import App from '../pageobjects/form.page'

Given(/^I am on the practice page \"([^\"]*)\"$/, async function (appurl: string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

Then(/^I Validate page header \"([^\"]*)\"$/, async function (headertext: string) {
    expect(await App.header).toHaveText(headertext);
});

When(/^I enter firstname (.+) and lastname (.+)$/, async function (fname: string, lname: string) {
    // await (await App.firstname).setValue(fname)
    await App.firstNameAtt(fname)
    // await (await App.lastname).setValue(lname)
    await App.lastNameAtt(lname)
});

When(/^I select gender (.+) years (.+) favourite chai (.+) and reason (.+)$/, async function (gender: string, yrs: string, favchai: string, reason: string) {

    await App.selectGender(gender)
    await App.selectExperience(yrs)
    await App.selectFavChai(favchai)
    await App.selectReason(reason)

});

When(/^I select continent (.+) and commands (.+)$/, async function (continent: string, command: string) {

    await (await App.continent_dropdown).selectByVisibleText(continent)
    await (await App.commands).selectByVisibleText(command)
    await browser.pause(3000);

});

When(/^I click on sumbit button$/, async function () {
    await (await App.submit_btn).click()
});