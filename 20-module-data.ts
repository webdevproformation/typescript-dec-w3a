export interface Produit{
    id : number,
    nom : string
};

export let data : Array<Produit> = [
    {
        id : 1,
        nom : "Produit1"
    },
    {
        id: 2,
        nom :"Produit2"
    }
];

// on vient de créer un module 
// pouvoir utiliser l'interface Produit et la variable data dans le fichier 
// 20-module.ts 
// précédé l'interface et la variable avec le mot clé export 