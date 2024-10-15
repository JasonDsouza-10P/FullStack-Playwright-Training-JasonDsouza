const {test} = require('@playwright/test')

test ('sign up',async({browser})=>{
    const context =await browser.newContext();
    const page = await context.newPage()
    page.goto('https://letcode.in/signup')
    await page.pause()
    await page.locator('#name').fill('Jason Dsouza')
    await page.pause()
    await page.locator('//*[@id="email"]').fill('jason.dsouza@10pearls.com');
    await page.pause()
    await page.getByPlaceholder('Enter your password').fill('10@Pearls');
    await page.getByLabel('I agree to the terms and').check();
    await page.pause()
    await page.getByRole('button', { name: 'SIGN UP' }).click();
    await page.pause()
    


})