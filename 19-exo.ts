// fonction générique

function generate<T ,U> ( param1:T  , param2:U ) {
    return [param1 , param2 ].join("");
}

console.log(generate( 1 , 2)) ; // 3
console.log(generate( "A", "b"))  ; // "Ab"
console.log(generate( 1 , "a")) ;  //1a

// tsc 19-exo.ts && node 19-exo.js

// 20-module.ts

// 25-class.ts