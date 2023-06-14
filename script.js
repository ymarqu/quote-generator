const quoteContainer = document.querySelector('.quote-container');
const quoteText= document.querySelector('#quote');
const twitterBtn = document.querySelector('.twitter-button');
const quoteBtn = document.querySelector('#new-quote');

//Quotes from API
let apiQuotes = "";

async function getQuote() {
    const url = "https://api.kanye.rest";
    try{

    const res = await fetch(url);
    apiQuotes = await res.json();
    // Check Quote lenght to determine styling
    if(apiQuotes.quote.length > 100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = apiQuotes.quote;

    }catch(error){
        alert(error);
    }
}


//On load
getQuote();


//Tweet quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - Kanye West`
    window.open(twitterUrl, '_blank');

}


//Get new quote to display
quoteBtn.addEventListener('click', () => {
    getQuote();
});

twitterBtn.addEventListener('click', () => {
    tweetQuote();
})
