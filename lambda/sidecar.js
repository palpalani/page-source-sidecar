// import puppeteer from 'puppeteer'
const chromeLambda = require('chrome-aws-lambda');

exports.handler = async (event) => {
    try {
        let result = ''

        // Launch a headless chrome browser.
        const browser = await chromeLambda.puppeteer.launch({
            args: chromeLambda.args,
            executablePath: await chromeLambda.executablePath,
            defaultViewport: chromium.defaultViewport,
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        });

        const page = await browser.newPage();

    	await page.goto(event.url);

        //result = await page.content();
    	// OR the faster method that doesn't wait for images to load:
    	result = await page.content({"waitUntil": "domcontentloaded"});

        await page.close();
    	await browser.close();

    } catch (error) {
        return formatError(error);
    } finally {
        if (browser !== null) {
          await browser.close();
        }
    }

    return JSON.stringify(result);
};

var formatError = function (error) {
    return {
        statusCode: error.statusCode,
        headers: {
            'Content-Type': 'text/plain',
            'x-amzn-ErrorType': error.code,
        },
        isBase64Encoded: false,
        body: error.code + ': ' + error.message,
    };
};

/*
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

*/
