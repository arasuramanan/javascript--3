async function quotes(){
 let response = await fetch("https://dummyjson.com/quotes")
    let result =   await response.json()
    console.log(result.quotes);
    document.writeln("Quote: " + result.quotes[1].quote + "<br>")
    document.writeln("Author: " + result.quotes[1].author)


}
quotes()