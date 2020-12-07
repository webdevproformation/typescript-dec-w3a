// dans ce fichier vous avez le code suivant :

class Product {
    private _name: string; // privé dans la classe actuelle
    private _marque : string ;

    constructor(name: string) {
        this.name = name; // setter assigne une valeur à l'attribut _name
    }

    // setter
    set name(name: string) {
        this._name = name;
    }

    // getter afficher une valeur dans le code courant
    get name(): string {
        return this._name;
    }

}

// dans la class Product 
// 1 créer le setter et le getter pour l'attribut _marque
// 2 modifier la constructeur de la class pour que l'on puisse attribuer la valeur de marque des que l'on instancie la class 


// 3 utilisez la class Product avec les valeurs suivantes 
// "Btwin" , "Decathlon"
// "Peugeot" , 206
