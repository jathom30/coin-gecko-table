# Sample Crypto Table

## Runnig the app

To run the app, after cloning, `cd` into the directory and run `npm i && npm run dev`

This should start a local dev server.

## APIs used

This uses Coin Gecko's free API. No API key is needed for the endpoint used. However, they do impose a rate limit of 10-30 calls/minute. If you run into a 429 error, you'll likely need to kill the app for a bit and try again later.

## Libraries

A number of libraries are used in the app. Notably tanstack query and tanstack table. Both are probably overkill for this small web app, but still effective.
