function Animal(name, speed){
    this.name = name;
    this.speed = speed;
}
function Dog(gav){
    this.gav= gav;
}

var Animal_1 = new Animal("Dog",15);
Dog.prototype = Animal_1;
var dog_1 = new Dog(14);

console.log(dog_1.name, dog_1.speed, dog_1.gav);
