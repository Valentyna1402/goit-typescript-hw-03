class Key {
  constructor(private signature: number) {
    this.signature = signature;
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome!");
    } else {
      console.log("The door is closed, you need a key to enter.");
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open, you can enter.");
    } else {
      console.log("The key does not match. Door closed");
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
