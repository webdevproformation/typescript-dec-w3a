// dans un fichier typescript 
// vous pouvez écrire du javascript classique  

let a = "hello" ;

let b = 2 ;

let c = 10 > 3 ;

// vous pouvez créer des fonctions 
// classique 
function d(){
    return "bonjour";
}

// expression de fonction 
let e = function(){
    return "expression de fonctions";
}

// arrow function 
let f = () => { };

// tableau 
let g = [ 1, 2, 3 ];

// objet littéraux 

let h = { 
    nom : "Alain",
    age : 22 ,
    competences : ["js", "jquery", "react"],
    adresse : {
        nom : "27 rue du Paradis",
        cp : 75000,
        ville : "Paris"
    }
}

// ------------------------------- 
// ici que l'on va avoir un apport de Typescript 
// Typer les variables 

let i :string = "Bonjour" ; // là vous êtes sur du typescript 

let j :number = 123 ; // là vous donner un type number à la variable j 

let k :boolean = 20 > 2 ; 

// si vous êtes amené à utiliser la variable plus tard dans le code 

// i = 2; // erreur au moment de l'utilisation dans votre IDE (Visual Studio)
        // message d'erreur lors de la transpilation 

// 1ère syntaxe possible  
let l : Array<number> = [ 1, 2 , 3 ];

l.push(123); // pas d'erreur de compréhension 

// il existe une deuxième syntaxe possible pour créer des tableaux qui contiennent des chiffres

let m : number[] = [2,3,4] ; // 2ème syntaxe possible 

// tableau qui contient chaines de caratères et des nombres
// 1ère manière d'écrire 
let n : Array<string|number|boolean> = [ 1, "bonjour" , 10 > 2 ] ;

// 2ème manière d'écrire 
let o : (string|boolean)[] = ["a" , "b" , false ];

// : type => on doit l'utiliser que dans des fichiers .ts 
// pas dans des fichiers .js 

// objets litteraux :
// 1ère manière de typer
let q : Object  = {
    nom : "Béatrice",
    age : 12
};

// 2ème manière de typer un objet litéral 
// créer une interface => décrire en détail les différentes propriétés de l'objet litéral 
// n'existe que en ts
// créer une interface => conseil (mettre la première lettre en majuscule)
interface Person{
    nom : string ,
    age : number
};

let r : Person = {
    nom : "Charles",
    age : 23
}