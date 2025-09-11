
//Body
let body = document.getElementById("fondo")

//Footer
let footer = document.getElementById("contact")
let logo_footer = document.getElementById("logo_footer")
let correo = document.getElementById("correo")
let icono_correo = document.getElementById("icono_correo")
let icono_in1 = document.getElementById("in")
let icono_in2 = document.getElementById("in2")
let icono_git = document.getElementById("git")
let copyrai = document.getElementById("smal")



let logo = document.getElementById("logo")

let nombre = document.getElementById("nombre")

let h5 = document.getElementsByTagName("h5")
let image = document.getElementById("boton");
let oscuro = true

//Videos
const demoModal = document.getElementById('demoModal');
const demoContainer = document.getElementById('demoVideoContainer');
const demoURL = "https://www.youtube.com/embed/gORZsIDciPg?autoplay=1&controls=1&rel=0";

const modalAnim = document.getElementById('modalAnim');
const videoContainer = document.getElementById('animVideoContainer');


function color() {

    document.body.classList.toggle("dark");

    if (oscuro == true) {

        //Navegador
        nombre.style.color = "#01010fff"
        logo.src = "dsl_claro.png"
        image.src = "fondos/sol.png";


        //Body
        body.style.background = "linear-gradient(to bottom, rgba(151, 179, 216, 1), rgba(179, 204, 233, 1))";


        // Footer
        footer.style.background = "linear-gradient(to bottom, #7898c2ff, #6f73b3ff)";
        logo_footer.src = "dsl_claro.png"
        icono_correo.src = "fondos/correo.png"
        icono_in1.src = "fondos/in_claro.png"
        icono_in2.src = "fondos/in_claro.png"
        icono_git.src = "fondos/git_claro.png"
        copyrai.style.color = "#01010fff"

        oscuro = false
    } else {

        //Navegador
        image.src = "fondos/luna.png";
        logo.src = "dsl.png"
        nombre.style.color = "#ffffff"


        //Body
        body.style.background = "linear-gradient(to bottom, #0b111b, #2b4563)";


        //Footer
        footer.style.background = "linear-gradient(to bottom, #000307, #0c0e27)";
        logo_footer.src = "dsl.png"
        icono_correo.src = "fondos/correo_noche.png"
        icono_in1.src = "fondos/in.png"
        icono_in2.src = "fondos/in.png"
        icono_git.src = "fondos/git.png"
        copyrai.style.color = "#ffffff"

        oscuro = true
    }
}





//DemoReel
demoModal.addEventListener('show.bs.modal', () => {
    demoContainer.innerHTML = `<iframe width="100%" height="100%" 
                                src="${demoURL}" 
                                title="Demo Reel" 
                                frameborder="0" 
                                allow="autoplay; encrypted-media" 
                                allowfullscreen></iframe>`;
});

demoModal.addEventListener('hidden.bs.modal', () => {
    demoContainer.innerHTML = ""; // elimina el iframe para parar el audio
});





//Animacion
modalAnim.addEventListener('show.bs.modal', event => {
    const trigger = event.relatedTarget.closest('.video-hover-container');
    const videoID = trigger.getAttribute('data-video');

    videoContainer.innerHTML = `
      <iframe width="100%" height="100%" 
              src="https://www.youtube.com/embed/${videoID}?autoplay=1&controls=1&rel=0"
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen></iframe>`;
  });

  modalAnim.addEventListener('hidden.bs.modal', () => {
    videoContainer.innerHTML = ""; // eliminar iframe = cortar audio
  });


//Videojuegos
function mostrarGame(src) {
    const modalGame = document.getElementById("GameAmpliado");
    const source1 = modalGame.querySelector("source");

    // Cambiar video
    source1.src = src;
    modalGame.load(); // recargar el nuevo video
    modalGame.play(); // iniciar reproducción
}

// Pausar video al cerrar modal
document.getElementById('modalGame').addEventListener('hidden.bs.modal', function () {
    const modalGame = document.getElementById("GameAmpliado");
    modalGame.pause();
    modalGame.currentTime = 0;
});






//2D
function mostrarImagen(id) {
    const img = document.getElementById(id); // obtenemos el elemento <img> real
    const modalImg = document.getElementById("imagenAmpliada");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}




function Inicio() {
    document.getElementById("inicio").style.display = "block";
    document.getElementById("trabajos2D").style.display = "none";
    document.getElementById("Modelado").style.display = "none";
    document.getElementById("animacion").style.display = "none";
    document.getElementById("postproduccion").style.display = "none";
    document.getElementById("videojuegos").style.display = "none";
}

function dosD() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("trabajos2D").style.display = "block";
    document.getElementById("Modelado").style.display = "none";
    document.getElementById("animacion").style.display = "none";
    document.getElementById("postproduccion").style.display = "none";
    document.getElementById("videojuegos").style.display = "none";
}

function tresD() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("trabajos2D").style.display = "none";
    document.getElementById("Modelado").style.display = "block";
    document.getElementById("animacion").style.display = "none";
    document.getElementById("postproduccion").style.display = "none";
    document.getElementById("videojuegos").style.display = "none";
}

function anima() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("trabajos2D").style.display = "none";
    document.getElementById("Modelado").style.display = "none";
    document.getElementById("animacion").style.display = "block";
    document.getElementById("postproduccion").style.display = "none";
    document.getElementById("videojuegos").style.display = "none";
}

function postpro() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("trabajos2D").style.display = "none";
    document.getElementById("Modelado").style.display = "none";
    document.getElementById("animacion").style.display = "none";
    document.getElementById("postproduccion").style.display = "block";
    document.getElementById("videojuegos").style.display = "none";
}

function juegos() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("trabajos2D").style.display = "none";
    document.getElementById("Modelado").style.display = "none";
    document.getElementById("animacion").style.display = "none";
    document.getElementById("postproduccion").style.display = "none";
    document.getElementById("videojuegos").style.display = "block";
}

