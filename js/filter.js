

const selectFiltro = document.getElementById("selectFiltro");

/*selectFiltro.addEventListener("change", (event) => {
    const valueSelect = selectFiltro.value;
    
    if (valueSelect === "todos") {
        // Si se selecciona "todos", muestra todos los elementos sin filtrar.
        banderillas(data);
    } else {
        // Filtra los elementos según la región seleccionada.
        const arrayFiltrado = data.filter((item) => item.region === valueSelect);
        banderillas(arrayFiltrado);
    }
});*/

/*
const Filter=(data)=>{
    selectFiltro.addEventListener("change", (event) => {
        const valueSelect = selectFiltro.value;
        
        if (valueSelect === "todos") {
            // Si se selecciona "todos", muestra todos los elementos sin filtrar.
            banderillas(data);
        } else {
            // Filtra los elementos según la región seleccionada.
            const arrayFiltrado = data.filter((item) => item.region === valueSelect);
            banderillas(arrayFiltrado);
        }

        if(valueSelect==="Americas"){
            const arrayAmericas=data.filter((item)=>item.region === valueSelect)
            banderillas(arrayAmericas)
        }
        if(valueSelect==="Asia"){
            const arrayAmericas=data.filter((item)=>item.region === valueSelect)
            banderillas(arrayAmericas)
        }
        if(valueSelect==="Europe"){
            const arrayAmericas=data.filter((item)=>item.region === valueSelect)
            banderillas(arrayAmericas)
        }
        if(valueSelect==="Oceania"){
            const arrayAmericas=data.filter((item)=>item.region === valueSelect)
            banderillas(arrayAmericas)
        }

    });
}*/
const Filter = (data) => {
    selectFiltro.addEventListener("change", (event) => {
        const valueSelect = selectFiltro.value;

        let arrayFiltrado = data;  // Inicializa con todos los datos

        if (valueSelect !== "todos") {
            // Filtra los elementos según la región seleccionada.
            arrayFiltrado = data.filter((item) => item.region === valueSelect);
        }

        banderillas(arrayFiltrado);
    });
}