// les fichiers doivent être compilé en js pour être compris en suite 
// soit par un navigateur soit par un node 
var Tp = /** @class */ (function () {
    function Tp(nom, sommaire) {
        this._nom = nom;
        this._sommaire = sommaire;
    }
    Tp.prototype.description = function () {
        var resultat = " mon tp est " + this._nom + " utilise les sujets suivants \n        " + this._sommaire.map(function (item) { return "matiere " + item; }).join() + " ";
        return resultat;
    };
    return Tp;
}());
var t = new Tp("formation Angular", ["js", "es6", "typescript"]);
console.log(t.description());
// transformer ce code => js 
// tsc 12-tp.ts 
// transforme mon fichier .ts -> .js version 3
// le fichier js généré => on ne doit pas le modifier, il est généré depuis le fichier ts 
// maintenant que le fichier js est généré => executer
// node 12-tp.js
// au lieu de saisir une premier pour générer le fichier ts 
// puis une deuxième commande exectuer le fichier js 
// tsc 12-tp.ts && node 12-tp.js
