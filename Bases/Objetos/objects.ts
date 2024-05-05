(() => {

  let flash: { 
    name: string, 
    age?:number, 
    powers:string[],
    getName?: () => string
  } = { // Objeto literal
    name: 'Barry Alen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  }

  /*
  flash = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper fuerza'],
    getName() {
      return this.name;
    }
  }
  */

  let superman: { 
    name: string, 
    age?:number, 
    powers:string[],
    getName?: () => string
  } = { // Objeto literal
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper velocidad']
  }
  
  console.log(flash)

})();