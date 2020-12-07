// dans ce fichier vous avez le code suivant :

abstract class Music {
    protected _instrument: string = 'nothing';
    abstract makeSound(param):string;

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

// 2 et utiliser les méthodes makeSound() et play() de la class Guitar
