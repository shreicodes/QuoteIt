


const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

//Get quotes from api
let apiQuotes=[];

//show loading
function loading() {
    loader.hidden=false;
    quoteContainer.hidden = true;
}

//hide loading
function show() {
    loader.hidden=true; //hide loading class
    quoteContainer.hidden = false; // show quotecontainer class
}

//Show one quote

function newQuote()
{
    const quote= apiQuotes [Math.floor(Math.random()*apiQuotes.length)];
  //CHeck if author field is blank and if yes replace it with 'unknown'
  if(!quote.author){
    authorText.textContent='Unknown';
  }
  else{
    authorText.textContent=quote.author;
  }
 //Check quote length to determine styling
 if(quote.text.length>120){
    quoteText.classList.add('long-quote');
 }
 else{
    quoteText.classList.remove('long-quote');
 }

  quoteText.textContent=quote.text ;
  

}


async function getQuotes() 
{
    
const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json';

try{
const response= await fetch(apiUrl);
apiQuotes=await response.json();
newQuote();
}
catch(error)
{
 
}
}

//for tweet button
function tweetQuote()
{
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}` ;
    window.open(twitterUrl,'_blank');
}

//Eventlistener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//on Load
 getQuotes();
