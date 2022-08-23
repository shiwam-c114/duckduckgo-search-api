# duckduckgo-search-api

A lightweight node package to programmatically obtain search results from DuckDuckGo search engine.

This currently support ```search_images_of``` function more function will be added soon . This is my first node package and it was fun.

## usage

To install, run:
```
npm i duckduckgo-search-api
```

search_images_of is async function return a promise that resolves to object of complete results.
```javascript
 const query = "bird";
 search_images_of(query).then((res) => console.log(res.results))
```

Please feel free to report any issues or feature requests.


### note

DuckDuckGo provides an instant answer API. This package does not use this route. This package mocks the browser behaviour using the same request format. Use it wisely. Also currently its only usable with ```CORS enabled``` in dev mode, you can use a proxy, or other solutions on top to it to work in productions.

check it on github https://github.com/shiwam-C114/duckduckgo-search-api

inspired by https://github.com/KshitijMhatre/duckduckgo-images-api. But it was not working, IDK why. So I made my own. 