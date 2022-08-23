async function search_images_of(query = "rick roll", page = 00) {
    let res = await fetch(`https://duckduckgo.com/?q=${query}&iar=images`)
    let data = await res.text()
    // filtering data
    let vqd = data.split(';').find((e) => e.includes('vqd=')).split("'").join('')
    console.log(vqd);
    let res2 = await fetch(`https://duckduckgo.com/i.js?q=${query}&o=json&p=1&s=${page}&u=bing&f=,,,,,&` + vqd)
    let data2 = await res2.json()
    console.log(data2)
    return data2
}

module.exports = { search_images_of }