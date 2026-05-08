
class Cat {
  say() {
    return 'meow';
  }
}

class Dog {
  // Renamed from talk to say
  say() {
    return 'woof';
  }
}

class Bird {
  // Renamed from sing to say
  say() {
    return 'chirp';
  }
}

let animals = [
  new Cat(),
  new Dog(),
  new Bird()
];

function listen(animals) {
  let sounds = [];

  // Replaced if statements with a single polymorphic call
  animals.forEach(animal => {
    sounds.push(animal.say());
  });

  return sounds;
}
