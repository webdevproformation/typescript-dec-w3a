// 15-typage-par-class.ts

// lorque l'on veut typer une variable on a les solutions suivantes :

let a : string = "hello";
let b : number = 2 ;
let c : boolean = 10 > 2;

interface Produit{
    nom : string,
    ref : string
}

let d : Produit = {
    nom : "Produit1",
    ref : "12345A"
}

class Panier {
    // le code que l'on veut 
}
// il est possible de typer une variable directement avec le nom d'une class
let e : Panier = new Panier();

function f ( param1 : string , param2 : string ) : Panier{
    // instructions 
    return new Panier();
}

