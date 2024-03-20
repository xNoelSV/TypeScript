(() => {

  let avengers: number = 10;

  console.log(avengers)

  const villians: number = 20;
  // villians.toFix;

  if (avengers < villians) {
    console.log('Estamos en problemas')
  } else {
    console.log('Estamos salvados')
  }
  
  // avengers = 123;
  // avengers = Number('55');
  avengers = Number('55A');

  console.log({avengers});

})()