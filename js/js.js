const puntosCombatesMK = 89;
const puntosCombatesMS = 86;
const puntosCombatesDBZ = 92;
const puntosCombatesKOF = 87;
const puntosCombatesSF = 88;
const puntosCombatesM = 84;
const puntosCombatesNS = 86;
const puntosCombatesP = 89;

const equipo = (a, b) => (a + b) / 4;

let seleccion = prompt(
  "BIENVENIDO, elija su equipo para calcular su promedio de victoria : \n Seleccionar equipo 1 (Mortal Kombat + Marvel) \n Seleccionar equipo 2 (Mario Smash + Street Fighter) \n Seleccionar equipo 3 (DB FighterZ + Naruto Shippuden UNS4) \n Seleccionar equipo 4 (The King of Fighters + Pokemon)"
);
switch (seleccion) {
  case "1":
    alert(
      "Selecciono 1er equipo. Su promedio de victoria es " +
        equipo(puntosCombatesMK, puntosCombatesM)
    );
    break;
  case "2":
    alert(
      "Selecciono 2do equipo. Su promedio de victoria es " +
        equipo(puntosCombatesMS, puntosCombatesSF)
    );
    break;
  case "3":
    alert(
      "Selecciono 3ro equipo. Su promedio de victoria es " +
        equipo(puntosCombatesDBZ, puntosCombatesNS)
    );
    break;
  case "4":
    alert(
      "Selecciono 4to equipo. Su promedio de victoria es " +
        equipo(puntosCombatesKOF, puntosCombatesP)
    );
    break;
  default:
    alert("No encontrado.");
    break;
}

let mortalK = [
  { id: 1, Name: "Scorpion", Type: "Range", PC: 27 },
  { id: 2, Name: "Sub Zero", Type: "Melee", PC: 30 },
];

mortalK.push({ id: 3, Name: "Raiden", Type: "Range", PC: 32 });

console.log(mortalK);

let marioSmash = [
  { id: 4, Name: "Mario", Type: "Melee", PC: 32 },
  { id: 5, Name: "Luigi", Type: "Melee", PC: 24 },
  { id: 6, Name: "Princesa Peach", Type: "Melee", PC: 30 },
  { id: 7, Name: "Yoshi", Type: "Melee", PC: 12 },
];

marioSmash.pop();
console.log(marioSmash);
//id: 9, Name: , Type: , PC:
let dragonBall = [
  { id: 8, Name: "Goku", Type: "Melee", PC: 35 },
  { id: 9, Name: "Vegeta", Type: "Melee", PC: 32 },
  { id: 10, Name: "Freezer", Type: "Range", PC: 25 },
];

let kingOf = [
  { id: 11, Name: "Kyo", Type: "Melee", PC: 27 },
  { id: 12, Name: "Iori", Type: "Range", PC: 25 },
  { id: 13, Name: "Rugal", Type: "Range", PC: 35 },
];

let stretFighter = [
  { id: 14, Name: "Ryu", Type: "Range", PC: 29 },
  { id: 15, Name: "Chun-Li", Type: "Melee", PC: 30 },
  { id: 16, Name: "Bison", Type: "Range", PC: 29 },
];

let marvel = [
  { id: 17, Name: "Spider-Man", Type: "Range", PC: 25 },
  { id: 18, Name: "Thanos", Type: "Melee", PC: 31 },
  { id: 19, Name: "Tormenta", Type: "Range", PC: 28 },
];

let narutoStorm = [
  { id: 20, Name: "Naruto", Type: "Melee", Pc: 29 },
  { id: 21, Name: "Sasuke", Type: "Melee", PC: 30 },
  { id: 22, Name: "Kakashi", Type: "Range", PC: 27 },
];

let pokemon = [
  { id: 23, Name: "Bulbasaur", Type: "Range", Pc: 27 },
  { id: 24, Name: "Squirtle", Type: "Range", PC: 30 },
  { id: 25, Name: "Charmander", Type: "Melee", PC: 32 },
  { id: 25, Name: "Sprigatito", Type: "Melee", PC: 30 },
  { id: 25, Name: "Fuecoco", Type: "Range", PC: 32 },
  { id: 25, Name: "Quaxly", Type: "Melee", PC: 32 },
];

pokemon.splice(2,3)


const miEquipo = mortalK.concat(marvel);
console.log("Equipo 1 ", miEquipo);

const miEquipo2 = marioSmash.concat(stretFighter);
console.log("Equipo 2 ", miEquipo2);

const miEquipo3 = dragonBall.concat(narutoStorm);
console.log("Equipo 3 ", miEquipo3);

const miEquipo4 = kingOf.concat(pokemon);
console.log("Equipo 4 ", miEquipo4);