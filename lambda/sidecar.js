import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'

export const handle = async (event, context, callback) => {
    let result = null;
    let browser = null;

    try {
        browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        });

        let page = await browser.newPage();

        await page.goto(event.url || 'https://targetbay.com');

        result = await page.title();
    } catch (error) {
        return callback(error);
    } finally {
        if (browser !== null) {
            await browser.close();
        }
    }

    return callback(null, result);
};

/*
import chromeLambda from 'chrome-aws-lambda'

export const handle = async (event) => {
    let browser = null;
    let result = ''

    try {

        // Launch a headless chrome browser.
        browser = await chromeLambda.puppeteer.launch({
            args: chromeLambda.args,
            executablePath: await chromeLambda.executablePath,
            defaultViewport: chromeLambda.defaultViewport,
            headless: chromeLambda.headless,
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
*/

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
