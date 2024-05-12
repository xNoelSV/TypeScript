(() => {

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress( id:string ):string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Noel',
    age: 21,
    address: {
      id: 125,
      zip: '08402',
      city: 'New York'
    },
    getFullAddress( id:string ) {
      return this.address.city;
    }
  }

  const client2: Client = {
    name: 'Fernando', 
    age: 30,
    address: {
      city: 'Barcelona',
      id: 150,
      zip: '08032'
    },
    getFullAddress( id:string ) {
      return this.address.city;
    }
  }

})();