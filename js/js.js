const puntosCombatesMK = 89;
const puntosCombatesMS = 86;
const puntosCombatesDBZ = 92;
const puntosCombatesKOF = 87;
const puntosCombatesSF = 88;
const puntosCombatesM= 84;
const puntosCombatesNS = 86;
const puntosCombatesP = 89;

let mortalK = [{id: 1, Name: "Scorpion", Type: "Fire", PC: 27},
                {id: 2, Name: "Sub Zero", Type: "Frozen", PC: 30}] 

mortalK.push({id: 3, Name: "Raiden", Type: "Thunder", PC: 32});

console.log(mortalK);

let marioSmash = [{id: 4, Name: "Mario", Type: "Fighter", PC: 32},
                  {id: 5, Name: "Luigi", Type: "Fighter", PC: 24},
                  {id: 6, Name: "Princesa Peach", Type: "Fighter", PC: 30},
                  {id: 7, Name: "Yoshi", Type: "Fighter", PC: 12}];

marioSmash.pop();
console.log(marioSmash);