(() => {
  const addNumber = ( a: number, b: number ) => a + b;
  const greet = ( name: string ) => `Hola ${ name }`;
  const saveTheWorld = () => `El mundo está salvado!`;

  //? let myFunction;
  //? let myFunction: Function; // Caso 1
  //? let myFunction: (y: number, z:number ) => number; // Caso 2
  //? let myFunction: (y: string ) => string; // Caso 3
  let myFunction: () => string; // Caso 4

  //* myFunction = 10;
  //* console.log(myFunction);

  //* myFunction = addNumber;
  //* console.log(myFunction(1, 2));

  //* myFunction = greet;
  //* console.log(myFunction('Noel'));

  myFunction = saveTheWorld;
  console.log(myFunction());
  
})();