"use strict";
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 20;
            this.name = 'Sear';
            this.realName = 'Noel';
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Noel',
        age: 21,
        address: {
            id: 125,
            zip: '08402',
            city: 'New York'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Fernando',
        age: 30,
        address: {
            city: 'Barcelona',
            id: 150,
            zip: '08032'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map