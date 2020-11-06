import {Selector} from 'testcafe'

fixture `Next EPM footer test with TestCafe`
.page `https://www.nextdirect.com/bg/en`

test("Launching Next international site", async t=>{
  debugger;
    await t.click("#btnFlagSelectorShopNow")

    await t.expect(Selector('[data-link-id="DataLinkId"]').innerText).contains("My Account")

  //  await t.click("a[aria-label='Media & Press']")
  //  await t.click('#cc-saveAll-startBtn')
    await t.maximizeWindow()


   // await t.typeText('[id="searchTextbox"]', 'Refaque Ahmad')

    await t.navigateTo("https://www.nextplc.co.uk/media/media-contacts");
      await t.click('#cc-saveAll-startBtn')
     await t.typeText('[id="searchTextbox"]', 'Refaque Ahmad')

  //  t.wait(3000)
  //  await t.navigateTo("https://www.nextdirect.com/bg/en");

   
})