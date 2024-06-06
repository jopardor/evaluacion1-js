

//++++++++++++++++++ALERTA+++++++++++++++++++++ */






document.getElementById('liveAlertBtn').addEventListener('click', function () {


  const alertPlaceholder = document.getElementById('alertaContenedor'); // se crea variable de mi alerta
  const titulo = this.getAttribute('data-titulo'); //variable titulo del texto obteniendo la info de data-titulo
  
  
  document.getElementById('tituloAlert').innerText = titulo; // Actualizar el título de la alerta
  
  
  alertPlaceholder.classList.add('show'); // Esto me permite mostrar la alerta // ESTUDIAR COMPOSICIÓN -Obersvación: no funciona con la lógica del modal ya que la alerta se debe vincular con JS  

});






//++++++++++++++++++POPOVER+++++++++++++++++++++ */






//exbuenocorrecto
// document.addEventListener('DOMContentLoaded', function () {
//   const popoverTriggerEl = document.getElementById('popoverBtn');
//   const title = popoverTriggerEl.getAttribute('data-titulo');
//   const content = popoverTriggerEl.getAttribute('data-contenido');

//   const popover = new bootstrap.Popover(popoverTriggerEl, {
//     title: title,
//     content: content,
//     trigger: 'click',
//     placement: 'right'
//   });
// });



//nuevo y correcto llamados directamente de boostrap para activar el popover******


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))






//const popover = new bootstrap.Popover('.example-popover', {
//   container: '.modal-body'
// })

// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))







//++++++++++++++++++TOAST+++++++++++++++++++++ */



//id toast y boton
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');


const toastBootstrap = new bootstrap.Toast(toastLiveExample); // Crea una instancia del toast de Bootstrap para llamarlo abajo


toastTrigger.addEventListener('click', () => {
  toastBootstrap.show();
});



//++++++++++++++++++OFFCANVAS+++++++++++++++++++++ */


document.getElementById('offcanvasExample').addEventListener('show.bs.offcanvas', function(event) {
    console.log('Se abre offcanvas');

    
    let boton = event.relatedTarget; // Elemento que disparó el evento (se reconoce)

    // Obtener atributos del botón
    let mensaje = boton.getAttribute('data-titulo');
    let contenido = boton.getAttribute('data-contenido');

    // Modifico el contenido 
    document.getElementById('tituloOffcanvas').innerText = mensaje;
    document.getElementById('bodyOffcanvas').innerHTML = contenido;
});






