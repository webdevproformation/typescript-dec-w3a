"use strict";
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special"
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const MockProducts_1 = require("./data/MockProducts");
let produits = [];
MockProducts_1.MockDetails.forEach((item) => {
    let id = item.id;
    let delivery = MockProducts_1.MockDelivery.find((deliveryDetail) => {
        return deliveryDetail.id === id;
    });
    //console.log(delivery);
    produits.push(new Product_1.Product(item, delivery.delivery));
});
console.log(produits);
let produitLivraisonSpeciale = produits.filter((item) => {
    return item.option === "special";
});
console.log(produitLivraisonSpeciale);
