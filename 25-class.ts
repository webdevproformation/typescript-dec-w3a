// manière classique de créer une class 

class Jour2{
    private sommaire : Array<string>;
    private professeur : string;

    constructor(sommaire  : Array<string> ,  professeur : string ){
        this.sommaire = sommaire;
        this.professeur = professeur;
    }
}

// en typescript 

class Jour3 {
    constructor(   
        private sommaire  : Array<string>  ,
        private professeur : string
        ){
    }
}
// c'est manière de créer la class est strictement équivalente 
// à la précédente 

let j3 = new Jour3( ["js","angular"] , "Alain");
console.log(j3);

// cd ..
// cls // clear
// tsc 25-class.ts && node 25-class.js

// https://github.com/webdevproformation/typescript-dec-w3a

// 26-decorateur.ts