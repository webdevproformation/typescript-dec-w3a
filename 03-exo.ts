// dans ce fichier réaliser le cas pratique suivant :

/**
// ce fichier va contenir plusieurs variables
// veuillez les typer les variables suivantes correctement :

// liste1 = "pêche poire ananas";
// liste2 = ["pêche" , "poire", "ananas"];
// liste3 = ["pêche", 4, "poire", 3, "ananas" , 2];
/* liste4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};*/
/* liste5 = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];*/

// pouvez donner le bon typage pour chaque variable créée

// correction 

let liste1:string = "pêche poire ananas";

// 2 solutions possibles 
let liste2:Array<string> = ["pêche" , "poire", "ananas"];
let liste2Prim :string[] = ["pêche" , "poire", "ananas"];

// 2 solutions possibles
let liste3:Array<string|number> = ["pêche", 4, "poire", 3, "ananas" , 2];
let liste3Prim:(string|number)[] = ["pêche", 4, "poire", 3, "ananas" , 2];

// 2 solutions possibles
let liste4:Object = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

// utiliser une interface 
interface Courses{
    items : Array<string|number>,
    budget : number ,
    unite : string
}

let liste4Prim :Courses = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

// plusieurs possibles 

let liste5:Array<Object> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

let liste5Prim:Object[] = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

// via une interface 
interface Achat {
    id : number ,
    nom : string ,
    quantite : number 
}

let liste5Ter:Array<Achat> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

let liste5Quatre:Achat[] = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

// fin correction
// 04-function.ts