const banderas=document.getElementById("banderas");


document.addEventListener("DOMContentLoaded",()=>{
    fetchData();
});


fetchData=async ()=>{
    try{
        const response=await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json()

        banderillas(data);
        formularioCliente(data);
        Filter(data);
        
    } catch(error){
        console.log(error)
    }
}


const banderillas=(data)=>{
    let elementos =""
    data.forEach(item => {
        elementos += `<article class="card">
        <img src="${item.flags.svg}" alt="" class="img-fluid">
        <div class="card-content">
            <h3>${item.name.common}</h3>
            <p>
               <b>Population:</b>
               ${item.population}
            </p>
            <p>
                <b>Capital:</b>
                ${item.capital}
            </p>
            <p>
                <b>Region:</b>
                ${item.region}
            </p>
        </div>
    </article>   `
    });
    banderas.innerHTML = elementos;
}