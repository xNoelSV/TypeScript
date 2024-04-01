(() => {

  //let nada: number = undefined; no se puede poner undefined a ningun tipo
  // Si queremos quitar esto, hay que modificar el tsconfig => strictNullChecks
  
  let nada: undefined = undefined;
  let isActive: (boolean|undefined) = undefined;

  // Hay 4 tipos de datos en un booleano: true, false, undefined y null
  // Si quitamos la restricción, el null puede ponerse.

  console.log(nada);

})();