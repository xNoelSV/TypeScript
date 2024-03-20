(() => {


  let isSuperman: boolean = true; 
  let isBatman: boolean = false;

  // isSuperman = ( isBatman ) ? 'ABC' : 'XYZ'; // Valor incorrecto, devuelve un string
  isSuperman = ( isBatman ) ? true : false;
  console.log({ isSuperman })

})()