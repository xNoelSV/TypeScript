(() => {

  class Avenger {
  
    //private name:string;
    //private team: string;
    //public realName?: string;
    
    /*constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }*/
    
    static avgAge: number = 35;
    static getAvgAge() { // Devuelve el nombre de la clase
      return this.name;
    }

    constructor (
      private name: string, 
      private team: string, 
      public realName?: string,
      /* static: NO SE PUEDE PONER STATIC */ avgAge: number = 55,
    ){
      Avenger.avgAge = avgAge;
    }

    public bio() {
      return `${this.name} (${this.team})`
    }

  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  console.log(antman)
  console.log(Avenger.avgAge)
  console.log(antman.bio())

})();