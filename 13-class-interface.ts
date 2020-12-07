// 13-class-interface.ts

// lorsque l'on veut typer un objet litteral de manière précise 
// on crée un interface 

interface Panier{
    total : number,
    listeProduit : Array<string> ,
    devise : string
}

let p:Panier = {
    total : 1000,
    listeProduit : ["Produit1","Produit2"],
    devise : "Euros"
}
// interface permettent de typer les objets littéraux 
// 1ère utilisation des interfaces 

// 2ème utilisation possible implémenter les class 

class PanierAchat implements Panier{
    // il faut obligatoirement que cette class dispose de toutes propriétés de l'interface = interface == class à 100% abstraite
    total : number;
    listeProduit : Array<string> ;
    devise : string ;

    private autreAttribut : boolean ;

    methode(){}
}

// 