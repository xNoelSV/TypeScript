(() => {

  class Apocalipsis {

    static _instance:Apocalipsis;

    constructor(
      public name: string,
    ){}

    static callApocalipsis():Apocalipsis {
      if (!Apocalipsis._instance) {
        Apocalipsis._instance = new Apocalipsis('Soy Apocalipsis1... el único');
      }

      return Apocalipsis._instance;
    }

    changeName(newName: string):void {
      this.name = newName;
    }

  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName('Xavier')

  console.log(apocalipsis1, apocalipsis2, apocalipsis3)

  //const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único');
  //const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único');
  //const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único');

  //console.log(apocalipsis1)
  //console.log(apocalipsis2)
  //console.log(apocalipsis3)

})();