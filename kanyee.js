
const loadQout=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQout(data))
}

const displayQout=qoute=>{
    const qouteElement=document.getElementById('kanyee-qoute');
    qouteElement.innerText=qoute.quote;
}


