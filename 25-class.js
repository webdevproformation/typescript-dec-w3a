// manière classique de créer une class 
var Jour2 = /** @class */ (function () {
    function Jour2(sommaire, professeur) {
        this.sommaire = sommaire;
        this.professeur = professeur;
    }
    return Jour2;
}());
// en typescript 
var Jour3 = /** @class */ (function () {
    function Jour3(sommaire, professeur) {
        this.sommaire = sommaire;
        this.professeur = professeur;
    }
    return Jour3;
}());
// c'est manière de créer la class est strictement équivalente 
// à la précédente 
var j3 = new Jour3(["js", "angular"], "Alain");
console.log(j3);
// tsc 25-class.ts && node 25-class.js
