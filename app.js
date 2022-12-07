const loadQuote=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>loadData(data))
}

const loadData=quote=>{
    const quoteElement=document.getElementById('qoute');
    quoteElement.innerText=quote.quote;
}