function printToConsole ( constructor: Function ) {
  console.log(constructor);
}

const printToConsoleConditional = (print:boolean = false):Function => {
  if (print) return printToConsole;
  else return () => {}
}

const blockPrototype = function( constructor:Function ) {
  Object.seal( constructor );
  Object.seal( constructor.prototype )
}

function CheckValidPokemonId() {
  return function( target:any, propertyKey:string, descriptor:PropertyDescriptor ) {
    const originalMethod = descriptor.value;
    descriptor.value = ( id:number ) => {
      if (id < 1 || id > 800) {
        return console.log('El id del pokemon debe estar entre el 1 y el 800');
      } 
      return originalMethod(id)
    }
  }
}

function readOnly( isWritable: boolean = true ):Function {
  return function(target:any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this)
        return 'Noel'
      },
      set(this, val) {
        // console.log(this, val)
        Object.defineProperty( this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }

    return descriptor;
  }
}



@blockPrototype
@printToConsoleConditional( true )
export class Pokemon {

  @readOnly(true)
  public publicApi:string = 'https://pokeapi.co';

  constructor(
    public name: string
  ) {}

  @CheckValidPokemonId()
  savePokemonToDB( id: number ) {
    console.log('Pokemon saved into DB')
  }

}