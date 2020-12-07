// nous venons de voir le typage 
// apport important de type script 

// en javascript lorsque l'on crée des class 
// tout est public 

//en js  ES6 

class A{
    attr1 ;
    attr2 ;

    // 1ère manière de créer des méthodes en js 
    methode1 = function(){}

    // 2ème manière de créer des méthodes (celle que l'on utilise le plus )
    methode2(){}

    // 3ème et dernière manière de créer des méthodes dans une class en js
    methode3 = () => { }
}
// créer un objet littéral depuis notre class 
let a = new A();

// a.attr1  possibilité d'accéder en lecture l'attribut attr1
// a.attr1 = "Bonjour" p possibilité d'accéder en écrire l'attribut attr1
//a.methode1(); 

// impossible de dire qu'une propriété est privée // protected 
// tous les membres de la class sont public !! 

// un deuxième apport import de typescript => possibilité de privée // protected les membres de class 

class B {
    private attr1 :string;
    protected attr2 :(number|boolean) ;
    attr3 :Array<any> ;  // si vous ne mettez rien avant l'attribut => public 

    // méthode 
    private methode1():void{ }
    protected methode2():void{}
    methode3():void{}  // si vous ne mettez rien avant la méthode => public 
}

let b = new B();

// b.attr1 erreur pas possible 
// b.attr2 erreur 
// b.methode1() erreur 
// pour les class il est possible de leur définir une portée (scope)
// et même temps le donner un type 

// -------------------

// 07-setter-getter.ts
