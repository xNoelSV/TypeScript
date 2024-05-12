import powers from './../data/powers'

export class Hero {
  constructor (
    public name:string,
    public powerId: number,
    public age: number
  ) {}

  get power():string {
    return powers.find( power => power.id === this.powerId)?.desc || 'not found';
    // Si le ponemos un "!", TypeScript interpreta que no va a fallar el codigo
  }
}

export class Hero2 {  }
export class Hero3 {  }
export class Hero4 {  }
