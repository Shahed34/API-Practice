const travelLoad=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>travelCountry(data))
}
travelLoad()

const travelCountry=countryData=>{
    console.log(countryData);
    const countryDiv=document.getElementById('country');
    countryData.forEach(element => {
        //console.log(element);
        const div=document.createElement('div');
        const h3=document.createElement('h3');
        h3.innerText=`Country Name:${element.name.common}`;
        div.appendChild(h3);
        const p=document.createElement('p');
        p.innerText=`Capital:${element.capital}`;
        div.appendChild(p);
        countryDiv.appendChild(div);
    });

    
}