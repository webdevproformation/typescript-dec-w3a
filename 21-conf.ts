// lorsque l'on finit de créer nos fichiers .ts

// on doit les compiler en javascript => .js

// tsc nom-fichier.ts drapeaux 
// options de transformation 
// --target versionde javascript
// --outDir où le ou les fichiers doivent être compilé 

// sur le site officiel de Typescript 

// la liste de complète de toutes les drapeaux possibles que l'on peut utiliser 

// https://www.typescriptlang.org/docs/handbook/compiler-options.html

// CLIENT tsc 

// --init
// --outDir
// --removeComments
// --rootDir
// --target
// --module
// --experimentalDecorators

// --version ou -v
// --watch ou -w

// tsc nom.fr --outDir dist --removeComments --target es6 --module CommonJS -experimentalDecorators true 

// tsc 21-conf.ts --outDir dist --removeComments --target es6 --module CommonJS --experimentalDecorators true 

// dispose d'une grande quantité de flag 
// afin d'éviter d'avoir à saisir une commande trop longue
// tsconfig.json 

// tsc --init 
// permet de créer un fichier tsconfig.json 
// message TS6071: Successfully created a tsconfig.json file.
// de base 

// tsc

// cas pratique 
// créer un dossier cas-pratique1
// ce dossier contient un fichier tsconfig.json 
// ce fichier de configuration va disposer des informations suivantes : 
//1 outDir share
//2 experimentalDecorators true
//3 suppression de commentaires
//4 version de javascript version 5
//5 il doit automatiquement compiler le fichier index.ts et le fichier presentation.ts

// créer deux fichiers index.ts et presentation.ts
// tester votre commande tsc 
// => 