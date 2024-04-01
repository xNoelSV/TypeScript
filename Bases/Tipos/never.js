"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
    console.log('Hola');
})();
