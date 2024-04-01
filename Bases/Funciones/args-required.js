"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    /*const fullName = (firstName: string, lastName: (string|boolean)): string => {
      return `${firstName} ${lastName}`;
    };*/
    // const name = fullName("Tony", ); Error: argumentos necesarios
    //const name = fullName("Tony", true);
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
