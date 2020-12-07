// 18-type-generique.ts

// vous êtes en train de créer votre code 
// vous ne voulez pas utiliser le type any 
// vous pouvez à la place utiliser le type générique T 

function agregator<T> ( a:Array<T> , b:Array<T> ): T[] {
    return a.concat(b);
}

// prendre le nom de votre fonction agregator<T> (param )

// quand vous utilisez T à la place de any 
// Typescript va déterminer le type au moment de l'exécution 
// en non au moment de la création de la fonction 

console.log(agregator(["1","2","3"] , ["a","b","c"]))

// le type T permet d'éviter dêtre trop précis lors de la créationde la fonction

console.log(agregator([1,2], [3,4]));

// tsc 18-type-generique.ts && node 18-type-generique.js

// créer un nouveau fichier 19-exo.ts 

// ce fichier contient une fonction 
// generate qui est de type générique
// elle a deux paramètres 
// param1 type générique
// param2 type générérique
// le retour est générique

// dans cette fonction une seule instruction
// param1 + param2

// utiliser la fonction generate avec les arguments suivants

// 1 , 2
// "A", "b"
// 1 et a

//afficher le résultat de chaque exécution de fonction dans la console