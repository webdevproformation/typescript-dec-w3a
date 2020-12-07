// 18-type-generique.ts
// vous êtes en train de créer votre code 
// vous ne voulez pas utiliser le type any 
// vous pouvez à la place utiliser le type générique T 
function agregator(a, b) {
    return a.concat(b);
}
// prendre le nom de votre fonction agregator<T> (param )
// quand vous utilisez T à la place de any 
// Typescript va déterminer le type au moment de l'exécution 
// en non au moment de la création de la fonction 
console.log(agregator(["1", "2", "3"], ["a", "b", "c"]));
// le type T permet d'éviter dêtre trop précis lors de la créationde la fonction
console.log(agregator([1, 2], [3, 4]));
