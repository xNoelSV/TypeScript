(() => {

  interface addTwoNumbers {
    (a: number, b:number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (a: number, b:number,/* c: number */) => {
    return 10;
  }

})();