// step 1 ----------------

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;

// var studente = {
//   nome: "Andrea",
//   cognome: "Maraldi",
//   eta: "27",
// };
//
// for (var chiave in studente) {
//   console.log(studente[chiave]);
// }


// step 2 ----------------

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
//
var studenti = [
  {
  nome: "Andrea",
  cognome: "Maraldi",
  eta: "25",
  },

  {
  nome: "Luca",
  cognome: "Carioni",
  eta: "27",
  },

  {
  nome: "Francesco",
  cognome: "Altini",
  eta: "29",
  },

  {
  nome: "Lucia",
  cognome: "Scaffardi",
  eta: "23",
  },

];

for (var chiave in studenti) {
  console.log(studenti[chiave]);
}


// step 3 ----------------

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//
// var nome = prompt("come ti chiami?");
// studente.nome.push(nome);
//
// var cognome = prompt("qual'è il tuo cognome");
// studente.cognome.push(cognome);
//
// var eta = prompt("quanto anni hai?");
// studente.eta.push(eta);
//
// var studente = {
//   nome: "",
//   cognome: "",
//   eta: "",
// };
