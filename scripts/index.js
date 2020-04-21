
const ApiOfSearch = async (url) => {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const puppeteer = require('puppeteer')


  try {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`https://www.google.com/search?client=macos&channel=fs&q=${url}`)

    await page.waitForSelector('h3[class="LC20lb DKV0Md"]')
    const pages = page.evaluate(async () => {
      const array = await document.querySelectorAll('h3[class="LC20lb DKV0Md"]')
      const array2 = await document.querySelectorAll('div[class="r"] > a')
      const titleLink = []
      const jsonResult = []
      const Links = [].map.call(array2, a => a.href)

      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        await titleLink.push(element.textContent)
      }

      for (let i = 0; i < titleLink.length; i++) {
        const Title = titleLink[i];
        const Link = Links[i]

        await jsonResult.push({
          "Title": Title,
          "Link": Link
        })

      }
      return jsonResult

    })
    await sleep(100)
    browser.close()
    return pages
  } catch (err) {
    return err
  }

}
module.exports = {
  ApiOfSearch,
}