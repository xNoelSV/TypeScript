// Crear interfaces
interface Auto {
  encender:boolean;
  velocidadMaxima:number;
  acelear():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Villano {
  reir?:boolean;
  comer?:boolean;
  llorar?:boolean;
}

const guason:Villano = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface Ciudad {
  ( ciudadanos: string[] ): number;
}

const ciudadGotica:Ciudad = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Atributos {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements Atributos {
  nombre: 'Noel';
  edad: 20;
  sexo: 'Hombre';
  estadoCivil: 'Soltero';
  imprimirBio(): void {
    `${this.nombre} - ${this.edad} - ${this.sexo}`
  }
  
}