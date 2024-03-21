"use strict";
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan negro`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    // console.log(batman.) // No obtiene ayuda de batman si es type any
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
