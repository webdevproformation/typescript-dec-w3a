// comme pour les variables, il est possible de typer les fonctions 
// les fonctions vont être typé à deux endroits

// au niveau des paramètre 
// au niveau du retour (ce que va renvoyer la fonction )
export {} ;

function a ( param1 :number , param2 :number ) :number {
    return param1 * param2 ;
}

// elle vient du fait que typescript est en train de regarder tous les fichiers 
// qui sont dans dossier ts 
// pour éviter cette erreur 
// ajouter au debut de votre code 
// export {} ;

// si jamais j'ai une fonction qui dans laquelle je ne mets pas de return 
// void (vide) => la fonction ne retourne rien 
function b ( rayon :number ) :void {
    console.log(rayon)
}

// il est possible d'utiliser des fonctions lorsque l'on définit des interfaces

interface Gestion{
    nom : string,
    description() : void
}
// attention , on créer une fonction et cette fonction doit d'appeler description et elle retourne rien

let c:Gestion = {
    nom : "Formation en informatique",
    description : function(){  
        console.log("je suis la fonction")
    }
}

// le cas où j'ai dans interface des propriétés facultatives 

interface Vehicule {
    marque : string,
    modele : (string|number),
    proprietaire ? : string // l'attribut est facultatif grâce au symbole ?
}

let d:Vehicule = {
    marque : "Peugeot",
    modele : 206
    // la propriété proprietaire est facultative
}

let e: Vehicule = {
    marque : "VW",
    modele :"Touran",
    proprietaire : "Charles"
}


// en javascript il est possible de créer une variable 

let f ; // en javascript => undefined 

let g : any ; // n'importe quelle type 
// essayer de l'utiliser le moins possible 
g = 2 ;
g = "bonjour";

let h : Array<any> = [ 2, "bonjour", {}]

let i : any = { v : 2 , a :[] }


// let j <T> type générique 