// typescript => typage 
// apport sur la portée de variable dans une class (private / protected)
// grâce à typescript il est possible de créer des class abstraites 

// => rendre nos script javascript plus Robuste 

// je souhaite transpiler 
// transformer le fichier en cours 11-transpilier.ts en un fichier .js

// créer une fonction via la nouvelle syntaxe arrow functions
// j'ai utilisé le typage :void pour le retour de la fonction 
export {};
let a = () :void =>  {
    console.log("transpiler en javascript");
}

// utiliser 
a();

// pour transpiler un fichier ts => js 
// 1 j'ai besoin d'un terminal > Terminal > Nouveau terminal
// 2 attention bien vérifier que le terminal est bien ouvert dans le dossier en cours
// 3 vérifier que vous avez accès tsc 
// tsc --version // tsc -v

// tsc 11-transpiler.ts

// tsc 11-transpiler.ts => ES3 de javascript

// attention vous compilez des fichiers .ts et non des fichiers .js !!! 

// error TS6504: File '11-transpiler.js' is a JavaScript file. Did you mean to enable the 'allowJs' option?

// 12-tp.ts