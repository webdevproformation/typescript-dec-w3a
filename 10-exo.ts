// dans ce fichier vous avez le code suivant :

abstract class Music {
    protected _instrument: string = 'nothing';
    abstract makeSound(param:string):string;

    get instrument():string{
        return this._instrument;
    }

    play(): string {
        return "play music";
    }
}

// 1 vous devez créer une class qui hérite de Music 
// Guitar 
// implémenter cette class enfant 

class Guitar extends Music{
    // il faut implémenter les méthodes abstraites du parent
    makeSound(param:string){
        return `retour sous forme de string - ${param}`;
    }
}

// 2 et utiliser les méthodes makeSound() et play() de la class Guitar

let g = new Guitar();
g.play(); // "play music"
g.makeSound("valeur") ; //  "retour sous forme de string"

// 11-transpiler.ts 