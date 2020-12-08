"use strict";
// Object.defineProperty(target , key , descriptor)
exports.__esModule = true;
var a = {
    prenom: "Alain",
    nom: "Dupont"
};
// ajouter une nouvelle propriété à l'objet a
a.age = 22;
Object.defineProperty(a, "adresse", {
    value: "75 rue du Paradis Paris",
    writable: false // la propriété adresse que l'on vient de rajouter à l'objet a est en lecture seule 
});
console.log(a);
a.adresse = "autre adresse";
console.log(a);
// tsc 27-decorateur-fin.ts && node 27-decorateur-fin.js
// pas possible pas ce que 
