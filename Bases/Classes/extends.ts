(() => {

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ){
      console.log('Constructor Avenger llamado')
    }

    protected getFullName() {
      return `${this.name} - ${this.realName}`
    }
  }

  class Xmen extends Avenger {
    constructor (
      /* public */ name: string,
      /* public */ realName: string,
      public isMutant: boolean,
    ){
      super(name, realName);
      console.log('Constructor Xmen llamado')
    }

    get fullName() {
      return `${this.name} - ${this.realName}`
    }

    set fullName(name: string) {
      if (name.length < 3) throw new Error('El nombre tiene que ser de más de 3 carácteres.');
      this.name = name;
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName())
    }
  }

  //const wolverine = new Xmen('Wolverine', 'Logan', true);
  //console.log(wolverine)
  //wolverine.getFullNameDesdeXmen();
  //wolverine.fullName = 'Noel';
  //console.log(wolverine.fullName);

})();