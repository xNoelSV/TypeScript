(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Héroe: Volcan negro`;

  const abc = 123;

  console.log(`I'm ${batman}, ${ abc }`);

  // console.log(batman.) // No obtiene ayuda de batman si es type any
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || 'No está presente');
})();
