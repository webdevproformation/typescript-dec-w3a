// fonction générique
function generate(param1, param2) {
    return param1 + param2;
}
console.log(generate(1, 2)); // 3
console.log(generate("A", "b")); // "Ab"
console.log(generate(1, "a"));
// tsc 19-exo.ts && node 19-exo.js
