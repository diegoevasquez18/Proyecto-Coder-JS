//alert("Bienvenido a la pestana equipos. Aceptar para continuar");

class campeon {
    constructor(game, id, name, type, pc){
        this.game = game;
        this.id = id;
        this.name = name;
        this.type = type;
        this.pc = pc;
    }
}

const campeonesMF = [];
campeonesMF.push(new campeon("Mortal Kombat", 1, "Scorpion", "Range", 27));
campeonesMF.push(new campeon("Mortal Kombat", 2, "Sub Zero", "Melee", 30 ))
campeonesMF.push(new campeon("Mortal Kombat", 3, "Raiden", "Range", 32 ))
campeonesMF.push(new campeon("Mario Smash", 4, "Mario", "Melee", 32 )),
campeonesMF.push(new campeon("Mario Smash", 5, "Luigi", "Melee", 24 )),
campeonesMF.push(new campeon("Mario Smash", 6, "Princesa Peach", "Melee", 30 )),
campeonesMF.push(new campeon("Mario Smash", 7, "Yoshi", "Melee", 12 )),
campeonesMF.push(new campeon("Dragon Ball FighterZ", 8, "Goku", "Melee", 35 )), 
campeonesMF.push(new campeon("Dragon Ball FighterZ", 9, "Vegeta", "Melee", 32)),
campeonesMF.push(new campeon("Dragon Ball FighterZ", 10, "Freezer", "Range",25)),
campeonesMF.push(new campeon("The King of Fighter", 11,  "Kyo", "Melee", 27)), 
campeonesMF.push(new campeon("The King of Fighter", 12,  "Iori",  "Range", 25 )),
campeonesMF.push(new campeon("The King of Fighter", 13, "Rugal",  "Range", 35 )),
campeonesMF.push(new campeon("Street Fighter",  14,  "Ryu", "Range",  29 )),
campeonesMF.push(new campeon("Street Fighter", 15, "Chun-Li",  "Melee",  30 )),
campeonesMF.push(new campeon("Street Fighter",  16, "Bison",  "Range",  29 )),
campeonesMF.push(new campeon("Marvel",  17,  "Spider-Man",  "Range",  25 )),
campeonesMF.push(new campeon("Marvel", 18,  "Thanos",  "Melee",31 )),
campeonesMF.push(new campeon("Marvel",  19,  "Tormenta",  "Range",  28)),
campeonesMF.push(new campeon("Naruto Shippuden NS4", 20,  "Naruto",  "Melee",  29 )),
campeonesMF.push(new campeon("Naruto Shippuden NS4", 21,  "Sasuke",  "Melee", 30 )),
campeonesMF.push(new campeon("Naruto Shippuden NS4", 22,  "Kakashi", "Range",  27 )),
campeonesMF.push(new campeon("Pokemon", 23,  "Bulbasaur","Range", 27 )),
campeonesMF.push(new campeon("Pokemon", 24, "Squirtle",  "Range",  30 )),
campeonesMF.push(new campeon("Pokemon",  25, "Charmander", "Melee", 32 )),
campeonesMF.push(new campeon("Pokemon", 26, "Sprigatito", "Melee", 30 )),
campeonesMF.push(new campeon("Pokemon",  27, "Fuecoco", "Range", 32 )),
campeonesMF.push(new campeon("Pokemon",  28,  "Quaxly",  "Melee",  32 )),

campeonesMF.splice(6,1);
campeonesMF.splice(24,3);


console.log(campeonesMF);

localStorage.setItem('campeonesMF', JSON.stringify(campeonesMF));


/*/function filtrado(player, type){
//    return filtrar = player.filter((campeon)=> campeon.type == (type));
//}
function listaCampeones(campeonesMF){
    let salida = '';
    for (const campeon of campeonesMF){
        salida +=  campeon.game + ": " +campeon.name +".Tipo: " +campeon.type + '\n';
        console.log();
    }
    return salida;
}
for(let i = 0; i <campeonesMF.length; i++){
    let filtro = filtrado(campeonesMF, prompt("Elija su tipo de camepon escribiendo 'Range', si es de rango y 'Melee' si es de cuerpo a cuerpoo"));
    if (filtro.length > 0) {
        alert(listaCampeones(filtro));
    } else {
        alert('No existe tipo de combate');
    }
    break;
}
*/
let btn = document.querySelectorAll(".btn");
for(let i = 0; i <btn.length; i++){
btn[i].addEventListener('click', event => {
    alert("Selecciono a " + campeonesMF[i].name);
  console.log(campeonesMF[i]);

});}

let cerrar = document.querySelector("#cerrar");
let mostrar = document.querySelector("#mostrar");
for(let i = 0; i <btn.length; i++){
btn[i].addEventListener('click', ()=>{
    mostrar.showModal();
})}

cerrar.addEventListener("click", ()=>{
    mostrar.close();
})