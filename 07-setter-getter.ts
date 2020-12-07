// setter et getter 

// dans une class méthodes spéciales dont le rôle est de donner une valeur / récupérer la valeur d'un attribut de class 
// ascesseurs => setter et getter 
export {}

class A{
    private _attr : string ; // dans le nommage de l'attribut pour pouvez choisir comme 1ère lettre le symbole _ => quand vous lisez la variable 

    constructor(attr : string){
        this.setAttr(attr)
    }
    private setAttr(attr){ // méthode setter 
        if(typeof(attr) == "string" && attr.length > 0){
            this._attr = attr;
        }else {
            throw new Error("attr non conforme")
        }
    }
    getAttr(){ // méthode getter 
        return this._attr;
    }
}

let a = new A("bonjour")

// a.setAttr("remodifer")
//a._attr
a.getAttr(); // récupérer le texte "bonjour"

// nouvelle syntaxe pour créer des setter et de getter 

class B{
    private _attr : number ;

    constructor(valeur: number){
        this._attr = valeur ;
    }

    set attr(valeur){ // ne pas de _ avant le nom de la méthode
        this._attr = valeur;
    }
    get attr(){
        return this._attr ;
    }
}

let b = new B(2);

b.attr ;
// b.getAttr()


