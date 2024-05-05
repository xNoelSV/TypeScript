(() => {

  type Hero = {
    name: string; 
    age?:number, 
    powers:string[];
    getName?: () => string,
  }

  let flash: Hero = { // Objeto literal
    name: 'Barry Alen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  }

  let superman: Hero = { // Objeto literal
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper velocidad'],
    getName() {
      return this.name;
    }
  }
  
  console.log(flash)

})();