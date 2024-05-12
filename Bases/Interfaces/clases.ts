(() => {

  interface Xmen {
    name: string;
    realName: string;
    mutantPower ( id:number ):string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public age: number = 20;
    public name: string = 'Sear';
    public realName: string = 'Noel';
    mutantPower(id: number): string {
      return `${this.name} ${this.realName}`
    }
  }

})();