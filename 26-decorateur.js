// décorateur
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// concept expérimental => ES6 pas disponible 
// concept pour pouvoir l'utiliser 
// drapeau experimentalDecorator true 
// tsc nom-fichier.ts --experimentalDecorator true --target es5
// décorateur => utiliser une fonction pour modifier / ajouter des comportement / des informations à une class 
function Composant(target) {
    // target la class 
    console.log(target);
}
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu = __decorate([
        Composant // attention ne pas mettre de ; après le décorateur 
    ], Menu);
    return Menu;
}());
// tsc 26-decorateur.ts && node 26-decorateur.js
// ne peut pas fonctionner car la fonctionnalité est expérimentale 
// tsc 26-decorateur.ts --experimentalDecorators true --target es5 && node 26-decorateur.js
// 1er exemple de décorateur = exécuter la class directement depuis le décorateur  
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
// Object.defineProperty(target , key , descriptor)
function Decorateur(target) {
    var m = new target();
    m.bonjour();
}
var Article = /** @class */ (function () {
    function Article() {
    }
    Article.prototype.hello = function () {
        return "hello";
    };
    Article.prototype.bonjour = function () {
        console.log("je suis un article");
    };
    __decorate([
        readonly
    ], Article.prototype, "hello", null);
    Article = __decorate([
        Decorateur
    ], Article);
    return Article;
}());
var a = new Article();
a.hello = function () {
    return "salut les amis";
};
console.log(a.hello());
// tsc 26-decorateur.ts --experimentalDecorators true --target es5 && node 26-decorateur.js
// modifier les class sans toucher leur code 
