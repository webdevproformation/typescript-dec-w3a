// Object.defineProperty(target , key , descriptor)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// méthode permet d'ajouter un nouvelle propriété à un objet litteral 
export {};
interface Person{
    prenom : string,
    nom : string ,
    age : number,
    adresse : string
}
let a : any = {
    prenom : "Alain",
    nom : "Dupont"
};
// ajouter une nouvelle propriété à l'objet a
a.age = 22;

Object.defineProperty(a , "adresse" , { 
    value: "75 rue du Paradis Paris",
    writable : false // la propriété adresse que l'on vient de rajouter à l'objet a est en lecture seule 
});
console.log(a);
// a.adresse = "autre adresse"; Erreur 
// Cannot assign to read only property 'adresse' of object
console.log(a);
// tsc 27-decorateur-fin.ts && node 27-decorateur-fin.js
// pas possible pas ce que 


