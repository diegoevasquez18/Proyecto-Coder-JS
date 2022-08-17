//-----------------------------------------------------------------------------------------------------------------------------------------
//Constantes
let campeones = await getCampeones();
const cartContainer = document.querySelector("#cart");
const contadorBolsa = document.querySelector("#cart-counter");
const busqueda = document.getElementById("buscar");
let listaPersonajes = document.getElementById("cards")
//-----------------------------------------------------------------------------------------------------------------------------------------
//Listeners
document.querySelector("#clear").addEventListener("click", limpiarBolsa);
document.querySelector("#pelear").addEventListener("click", pelear);


async function getCampeones(){
  let resp = await fetch ('https://diegoevasquez18.github.io/Proyecto-Coder-JS/JS/campeones.json')
  let campeones = await resp.json()
  return campeones
}
//-----------------------------------------------------------------------------------------------------------------------------------------
//Cargar datos en html
function cargarDatos(campeonesShow) {
  listaPersonajes.innerHTML = ""; 
  campeonesShow.forEach((campeon) =>{
     let cardNueva = document.createElement("div");
     cardNueva.innerHTML = ` 
   <img src= ${campeon.img} class="card-img-top border" alt="...">
   <h5 class="card-title" id="name">${campeon.nombre}</h5>
   <div class="card-body text-center">
     <p class="card-text">PC: ${campeon.pc}</p>
     <button id="${campeon.id}" class="third add">Seleccionar<i class="fa in-card" aria-hidden="true"></i> </button>
   </div>
     `; 
       
     listaPersonajes.append(cardNueva); 
 
     cardNueva.classList.add("card", "col-4", "m-3"); 
    //Esperar a que se cargue el boton.
    cargarBotones(); 
    })
}
//-----------------------------------------------------------------------------------------------------------------------------------------
//Creo botones
 function cargarBotones(){
   const btns = document.querySelectorAll(".add");
  for (const boton of btns) {
    boton.addEventListener("click", agregarCampeon);
  }
 } 
//-----------------------------------------------------------------------------------------------------------------------------------------
//Agrego a la bolsa

 function agregarCampeon(e) { 
   e.target.style.minWidth = "100px";
   let campeonClickeado = campeones.find((item) => item.id == e.target.id);
   let arrayLocal = JSON.parse(localStorage.getItem('Bolsa')) || [];;
 
   arrayLocal.push(campeonClickeado);
 
   localStorage.setItem("Bolsa", JSON.stringify(arrayLocal)); 
 
   actualizarBolsa(arrayLocal);
   actualizarBotones(arrayLocal);
 }
 //-----------------------------------------------------------------------------------------------------------------------------------------
 //Elimino de la bolsa
 function eliminarCampeon() {
   let arrayLocal = JSON.parse(localStorage.getItem('Bolsa')) || [];;
   let campeonEliminado = arrayLocal.find((item) => `#${item.id}` === this.id);
   let selectId = campeonEliminado.id;
   let btncampeon = document.getElementById(selectId);
   document.getElementById(selectId).innerHTML = "Seleccionar";
 
   btncampeon.disabled = false;
  
   let indiceDeCampeon = arrayLocal.indexOf(campeonEliminado); 
 
   arrayLocal.splice(indiceDeCampeon, 1); 
 
   localStorage.setItem("Bolsa", JSON.stringify(arrayLocal));
 
   actualizarBolsa(arrayLocal);
 }
 //-----------------------------------------------------------------------------------------------------------------------------------------
 //Actializacion de campeones en bolsa

 function actualizarBolsa(local) {
   cartContainer.innerHTML = "";
   for (const campeonAgregado of local) {
     cartContainer.innerHTML += ` <div class="d-flex justify-content-between align-items-center mt-3 p-4 items rounded border-bottom border-top" >
     <img class="rounded border" src=${campeonAgregado.img} width="100">
         <div class="ml-2"><span class="font-weight-bold d-block m-2">${campeonAgregado.nombre}</span><span class="d-block ml-5 font-weight-bold">PC:${campeonAgregado.pc}</span></div>
         <div class="ml-2 rounded">
         <span class="eliminar-item" id= "#${campeonAgregado.id}"><i class="fa fa-trash" aria-hidden="true"></i> </span>
 </div>`;
   }
 
   let btnsEliminar = document.querySelectorAll(".eliminar-item");
 
   for (const btn of btnsEliminar) {
     btn.addEventListener("click", eliminarCampeon);
   }
 
   contadorBolsa.innerText = local.length; 
 
   document.querySelector("#total").innerText = sumarTotal(local);
 }

//-----------------------------------------------------------------------------------------------------------------------------------------
 //Agrego botones de la bolsa
 function actualizarBotones(local) {
   const btns = document.querySelectorAll("button.third");
 
   for (const item of local) {
     for (const btn of btns) {
       if (item.id == btn.id) {
         let botonAdd = document.getElementById(`${item.id}`);
         botonAdd.setAttribute("disabled", true); 
         botonAdd.innerHTML = `<i class="fas fa-ban" aria-hidden="true">`;
         botonAdd.style.minWidth = "120px"; 
       }
     }
   }
 }

//-----------------------------------------------------------------------------------------------------------------------------------------
 //Sumar los PC
 function sumarTotal(cart) {
   let total = cart.reduce((acc, item) => acc + item.pc, 0);
   return total;  
 }
 
 let bolsaDeCampeones = JSON.parse(localStorage.getItem('Bolsa')) || [];; 
 
 if (bolsaDeCampeones) {
   actualizarBotones(bolsaDeCampeones);
 
   actualizarBolsa(bolsaDeCampeones);
 } else {
   localStorage.setItem("Bolsa", "[]");
 }

//-----------------------------------------------------------------------------------------------------------------------------------------
//Filtro
const filtrado = async () => {
  
  busqueda.addEventListener('keyup', async() =>{
    
    cargarDatos(await campeones.filter( item => 
      item.nombre.toLowerCase().includes(busqueda.value.toLowerCase()))

)})}
//-----------------------------------------------------------------------------------------------------------------------------------------
//Limpiar la bolsa
function limpiarBolsa() {
     document.querySelector("#cart").innerHTML = 0;
     localStorage.setItem("Bolsa", "[]");
     document.querySelector("#cards").innerHTML = "";
     cargarDatos(campeones);
   }

 //-----------------------------------------------------------------------------------------------------------------------------------------
//Funcion para crear numero random simulando pelea, utilizando sweet alert.
 function pelear(){
 
   let rival = Math.floor(Math.random() * 10) + 18;
   total.innerHTML > rival ?   Swal.fire({
     title: 'HAS GANADO!',
     text: 'Espero tengas la misma suerte la proxima vez!',
     imageUrl: 'https://www.jeumobi.com/wp-content/uploads/2021/01/victory-wild-rift.jpg',
     imageWidth: 400,
     imageHeight: 200,
     imageAlt: 'Custom image',
   }) :   Swal.fire({
     title: 'DERROTA!',
     text: 'Mas suerte la proxima vez!',
     imageUrl: 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/6b2be942-0f17-4fa3-814b-c0bc58143dab/4d368f77-ab10-48b5-8ed9-4445ace93f35.jpg',
     imageWidth: 400,
     imageHeight: 200,
     imageAlt: 'Custom image',
   });
 }

//----------------------------------------------------------------------------------------------------------------------------------------- 
//Cargo datos de la app
cargarDatos(campeones);
await filtrado();