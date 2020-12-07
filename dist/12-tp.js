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
// à la suite de la commande tsc vous pouvez mettre des drapeaux (options)
// tsc 12-tp.ts --target es6 --outDir dist -w
// mode watch => à chaque fois que vous réaliser des modifications dans le ts 
// tsc est exécuter 
// --outDir dist => tsc a créé un dossier dist => et il va le fichier généré directement dans ce dossier
// --target es6 => dire dans quelle version de javascript il doit transpiler le code ts
// pour arrêter le mode watch Ctrl +C 
// tsc 12-tp.ts --target es3 --outDir dist -w
