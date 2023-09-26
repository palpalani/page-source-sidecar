import puppeteer from 'puppeteer'

export const handle = async function (event) {
    let result = ''

    try {
        const browser = await puppeteer.launch();
   	const page = await browser.newPage();
    	await page.goto(event.url);

    	//result = await page.content();
    	// OR the faster method that doesn't wait for images to load:
    	result = await page.content({"waitUntil": "domcontentloaded"});
    	browser.close();
    } catch (exception) {
        return JSON.stringify({pageSource: exception.toString()});
    }

    return JSON.stringify(result);
}
