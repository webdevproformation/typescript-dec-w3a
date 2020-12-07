// il est possible de découper le code de vos projets typescript en plusieurs fichiers 

// ce qui permet de créer des modules

// au lieu de créer 1 grand fichier avec tout le code dedans 
// découper en plusieurs fichiers 

// créer un autre fichier 20-module-data.ts

import { Produit , data } from "./20-module-data";

data.push({ id : 3 , nom: "Produit3"});

// afficher tout le contenu de la variable data 

data.forEach( (item : Produit) => {
    console.log( item )
} );

// lorsque vous avez plusieurs fichiers qui sont importés dans un autre 
// vous avez juste besoin de compiler le fichier principal 

// tsc 20-module.ts && node 20-module.js 

// le fichier et ceux qui sont importés sont automatiquement compilés 
// exemple juste après la pause rdv 16h15 @ toutes suite !!

// 21-conf.ts