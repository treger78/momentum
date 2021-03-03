function getJoke() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (4 == req.readyState && 200 == req.status) {
            var reponse = JSON.parse(req.responseText);
            document.getElementById('response_icon_url').innerHTML = reponse.icon_url;
            document.getElementById('response_id').innerHTML = reponse.id;
            document.getElementById('response_url').innerHTML = reponse.url;
            document.getElementById('response_url').href = reponse.url;
            document.getElementById('response_text').innerHTML = reponse.value;
        }
    };
    req.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    req.send();
}
window.onload = getJoke;
/*
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');

async function getQuote() {  
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);
*/