
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special"

import { Product } from "./Product";
import { Details , Delivery , MockDetails , MockDelivery } from "./data/MockProducts";

let produits : Array<Product<Details , Delivery>> = [];

MockDetails.forEach( (item :Details) => {
    let id = item.id;
    let delivery = MockDelivery.find( (deliveryDetail ) => {
        return deliveryDetail.id === id;
    } );
    //console.log(delivery);
    produits.push(new Product<Details, Delivery>( item , delivery.delivery  ));
} )

console.log(produits);

let produitLivraisonSpeciale = produits.filter( (item : Product<Details , Delivery>)=> {
    return item.option === "special"
} )

console.log(produitLivraisonSpeciale);
// pour compiler tsc
// pour exécuter node/App.js