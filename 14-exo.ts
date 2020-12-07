// ce fichier contient le code suivant :
// 1 créer un fichier ts et non js 
// 2 dans les fichiers ts je peux écrire du javascript 
// 3 dans les fichiers ts pouvoir écrire du javascript enrichis 
// mot clés qui n'existent pas en javascript
// interface => typescript
// variable : type
// swim() : string => créer une fonction qui n'a pas de paramètres et qui retourne une chaine de caractère 

interface Duck{
    name : string ;
    swim(): string; 
}

// implements => disponible que en typescript 

// 1 créer une class qui implémente l'interface Duck 
// choisir le nom de la class que vous voulez ! 
class Oiseau implements Duck{
    // il faut obligatoirement que les membres de cette interface soient présents dans la class  
    name : string ;

    constructor(name :string){
        this.name = name
    }

    swim() :string{
        return `${this.name} est en train de nager`;
        // template string
    }
}

// 2 ne pas hésiter à utiliser la class, la méthode swim
let o = new Oiseau( "Donald Duck" );
console.log(o.swim());

// 3 transformer votre fichier ts en js en utilisant les lignes de commande 

// installer le transpiler logiciel ts => js 
// npm i -g typescript
// tsc --version // Version 4.1.2


// transformer mon fichier ts => js et en suite executer mon fichier js 
// tsc 14-exo.ts && node 14-exo.js


// créer un nouveau fichier 15-exo.ts