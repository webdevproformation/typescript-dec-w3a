// ce fichier contient le code suivant :
// 1 créer un fichier ts et non js 
// 2 dans les fichiers ts je peux écrire du javascript 
// 3 dans les fichiers ts pouvoir écrire du javascript enrichis 
// mot clés qui n'existent pas en javascript
// interface => typescript
// variable : type
// swim() : string => créer une fonction qui n'a pas de paramètres et qui retourne une chaine de caractère 
// implements => disponible que en typescript 
// 1 créer une class qui implémente l'interface Duck 
// choisir le nom de la class que vous voulez ! 
var Oiseau = /** @class */ (function () {
    function Oiseau(name) {
        this.name = name;
    }
    Oiseau.prototype.swim = function () {
        return this.name + " est en train de nager";
        // template string
    };
    return Oiseau;
}());
// 2 ne pas hésiter à utiliser la class, la méthode swim
var o = new Oiseau("Donald Duck");
console.log(o.swim());
// 3 transformer votre fichier ts en js en utilisant les lignes de commande 
