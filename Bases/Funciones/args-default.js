"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "no lastname"}`;
        }
    };
    const name2 = fullName("Tony", "Stark");
    const name = fullName("Tony", "Stark", true);
    console.log({ name2 });
    console.log({ name });
})();
