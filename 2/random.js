const ramdomUserLoad=()=>{
    fetch('https://randomuser.me/api/0.8/?results=10')
    .then(res=>res.json())
    .then(data=>displayData(data))
}
ramdomUserLoad();

const displayData=randomuser=>{
    const userlog=randomuser.results;
    console.log(userlog);
    const randomsDiv=document.getElementById('buddies');
    for(let buddy of userlog){
        console.log(buddy.user.email);
        const p=document.createElement('p');
        p.innerText=buddy.user.email;
        randomsDiv.appendChild(p);
    }
}