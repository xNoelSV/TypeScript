"use strict";
(() => {
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan negro`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    // console.log(batman.) // No obtiene ayuda de batman si es type any
    console.log(batman.toUpperCase());
    console.log(batman[10]);
})();
