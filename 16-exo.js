// ce fichier contient le code suivant :
var Recette = /** @class */ (function () {
    function Recette() {
    }
    return Recette;
}());
var recettes = [];
/* 1 Créez une variable « recettes »,
2 précisez le type de cette variable dans sa définition (Array<Recette>).

3 Ajoutez quelques valeurs dans ce tableau et affichez en console le contenu de celle-ci. */
recettes.push({ name: "Recette1" });
recettes.push({ name: "Recette2", note: 5 });
recettes.push(new Recette());
recettes.forEach(function (item) {
    console.log((item.name || "inconnue") + " a une note de " + (item.note || "aucune note pour l'instant "));
});
// compiler et l'exécuter
// tsc 16-exo.ts && node 16-exo.js
