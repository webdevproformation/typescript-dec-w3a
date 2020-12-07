// class abstraite ?? 

// pour créer un class abstraite 
// il faut utiliser la syntaxe suivante 
export{}

abstract class A{}

// class qui ne peut pas être instanciée 

// let a = new A()
// vous avez un erreur 
// par contre on peut hériter d'une class Abstraite

class B extends A{}

// aucun problème pour hérité de la class B et l'utiliser pour créer une instance 
let b = new B();

// pourquoi créer une class abstraite 
// forcer les créer de class à nommer certaine méthode avec un nom bien définit

abstract class C{
    abstract methode1() ; // attention ne définir que la signature de la méthode
    methode2(){

    }
}

// il n'est pas possible de créer de méthode abstraite dans une class qui n'est pas elle même abstraite

// si dans la class vous avez créer une méthode abstraite 
// vous ne pouvez définir que la signature de la méthode 
// vous n'utilisez pas les accolades et vous ne mettez pas d'instructions entre les accolades

// let c = new C() impossible 

// vous ne pouvez que hérité de cette class  

class D extends C{
    // si vous héritez d'une class abstraite => et quelle possible une ou plusieurs méthodes abstraites il faut les créer dans la class enfant

    methode1(){
        // ici que je vais pouvoir définit les instructions de la méthode1
    }
}

// contrat => impose au développeur qui utilise la class Parent d'avoir des méthodes avec un nom bien particulier 




