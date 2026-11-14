// INFORMACIÓN DE LAS PLANTAS

const plantas = {

    guayaba: {
        titulo: "guayaba - Psidium guajava L",

        texto: `
        <strong>Familia:</strong> Myrtaceae<br><br> 

        <br><br>

        <strong>Importancia:</strong>
        Es conocida principalmente por sus usos
        tradicionales y culturales.
        `
    },


    guayaba: {
        titulo: "Guayaba - Psidium guajava",

        texto: `
        <strong>Familia:</strong> Myrtaceae<br><br>

        La guayaba es un árbol frutal tropical
        que produce frutos comestibles.

        <br><br>

        <strong>Importancia:</strong>
        Tiene importancia alimentaria y agrícola.
        `
    },


    papaya: {
        titulo: "Papaya - Carica papaya",

        texto: `
        <strong>Familia:</strong> Caricaceae<br><br>

        La papaya es una planta tropical
        cultivada principalmente por sus frutos.

        <br><br>

        <strong>Importancia:</strong>
        Es una especie de importancia económica
        y alimentaria.
        `
    },


    sabila: {
        titulo: "Sábila - Aloe vera",

        texto: `
        <strong>Familia:</strong> Asphodelaceae<br><br>

        La sábila es una planta suculenta
        de hojas carnosas.

        <br><br>

        <strong>Importancia:</strong>
        Es conocida por sus usos tradicionales
        y comerciales.
        `
    }

};


// ABRIR INFORMACIÓN

function mostrarInfo(planta) {

    document.getElementById("titulo-modal").innerHTML =
        plantas[planta].titulo;

    document.getElementById("texto-modal").innerHTML =
        plantas[planta].texto;

    document.getElementById("modal").style.display =
        "flex";
}


// CERRAR INFORMACIÓN

function cerrarInfo() {

    document.getElementById("modal").style.display =
        "none";
}


// BUSCADOR

const buscador = document.getElementById("busqueda");

buscador.addEventListener("keyup", function () {

    const texto = buscador.value.toLowerCase();

    const tarjetas =
        document.querySelectorAll(".tarjeta");

    tarjetas.forEach(function (tarjeta) {

        const contenido =
            tarjeta.textContent.toLowerCase();

        if (contenido.includes(texto)) {

            tarjeta.style.display = "";

        } else {

            tarjeta.style.display = "none";

        }

    });

});
// Abrir el mapa en grande
function abrirMapa() {
    const ventana = document.getElementById("ventanaMapa");

    ventana.style.display = "flex";
    document.body.style.overflow = "hidden";
}
// Cerrar el mapa ampliado
function cerrarMapa() {
    document.getElementById("ventanaMapa").style.display = "none";
    document.body.style.overflow = "";
}