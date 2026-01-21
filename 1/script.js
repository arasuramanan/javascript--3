async function quotes(){
 let response = await fetch("https://dummyjson.com/quotes")
    let result =   await response.json()
    console.log(result.quotes);
    document.writeln(result.quotes[10].quote)

}
quotes()