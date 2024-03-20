"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    // isSuperman = ( isBatman ) ? 'ABC' : 'XYZ'; // Valor incorrecto, devuelve un string
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
