const btnDark = document.querySelector(".btn-dark-mode");  //recomiendas hacer por getelementByid
btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.className === "dark-mode") {
        btnDark.innerHTML = `<i class="far fa-moon"></i> 🌓  Dark Mode `
    }
    else {
        btnDark.innerHTML = `<i class="far fa-sun"></i>
        🌓 Light Mode`
    }

    //innerHTML reemplaza el contenido html
})