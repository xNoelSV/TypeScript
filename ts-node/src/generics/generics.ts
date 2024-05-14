export const printObject = ( argument: any) => {
  console.log( argument )
}

export function genericFunction<T> /* <T>: letra que identifica que es de tipo genérico */ ( argument: T ) {
  return argument;
}

export const genericFunctionArrow = <T>( argument: T ) => argument;