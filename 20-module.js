"use strict";
// il est possible de découper le code de vos projets typescript en plusieurs fichiers 
exports.__esModule = true;
// ce qui permet de créer des modules
// au lieu de créer 1 grand fichier avec tout le code dedans 
// découper en plusieurs fichiers 
// créer un autre fichier 20-module-data.ts
var _20_module_data_1 = require("./20-module-data");
_20_module_data_1.data.push({ id: 3, nom: "Produit3" });
// afficher tout le contenu de la variable data 
_20_module_data_1.data.forEach(function (item) {
    console.log(item);
});
