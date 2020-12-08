// décorateur

// concept expérimental => ES6 pas disponible 
// concept pour pouvoir l'utiliser 
// drapeau experimentalDecorator true 

// tsc nom-fichier.ts --experimentalDecorator true --target es5

// décorateur => utiliser une fonction pour modifier / ajouter des comportement / des informations à une class 

function Composant( target ){
    // target la class 
    console.log(target);
}

@Composant // attention ne pas mettre de ; après le décorateur 
class Menu{ }

// tsc 26-decorateur.ts && node 26-decorateur.js
// ne peut pas fonctionner car la fonctionnalité est expérimentale 
// tsc 26-decorateur.ts --experimentalDecorators true --target es5 && node 26-decorateur.js

// 1er exemple de décorateur = exécuter la class directement depuis le décorateur  

function readonly(target , key , descriptor){
    descriptor.writable = false ;
    return descriptor;
}

// Object.defineProperty(target , key , descriptor)

function Decorateur(target){
    let m = new target()
    m.bonjour();
}
@Decorateur
class Article{

    @readonly
    hello() : string {
        return "hello";
    }
    bonjour() :void{
        console.log("je suis un article");
    }
}

let a = new Article()
// rédéfinit la méthode hello dans l'instance de class
a.hello = () :string =>  { // même si c'est redéfinit ce n'est pas pris en compte 
    return "salut les amis";
}
console.log(a.hello());

// tsc 26-decorateur.ts --experimentalDecorators true --target es5 && node 26-decorateur.js
// modifier les class sans toucher leur code 
