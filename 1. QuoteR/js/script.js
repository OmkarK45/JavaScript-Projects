//  Getting quote from API ~OK
var quote = document.querySelector('#quote');
var author = document.querySelector('#author');
fetch('http://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
    .then(response=>{
        try{
            return response.json()
        }
        catch(error){
            
        }
        
        
    })
    .then(data=>{
        let quoteText = data.quoteText;
        let quoteAuthor = data.quoteAuthor;
        quote.innerHTML = quoteText;
        author.innerHTML = quoteAuthor;
    })
// Load fx when page loads
