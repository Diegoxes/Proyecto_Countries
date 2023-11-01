



const formulario = document.getElementById("formulario");

const inputFormulario = document.getElementById("inputFormulario");





const formularioCliente = (data) => {
    console.log(data)
    formulario.addEventListener('keyup', async (e) => {
        e.preventDefault()

        const letraCliente = inputFormulario.value.toLowerCase()
        console.log(letraCliente)

        const arrayFiltrado = data.filter(item => {
            const textoApi = item.name.common.toLowerCase()
            if (textoApi.indexOf(letraCliente) !== -1) {
                return item
            }
        })
        banderillas(arrayFiltrado)

    })
}