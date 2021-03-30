export default class Moose{
    constructor(name, age, bite, Scandinavian = true){
        this.name = name;
        this.age = age;
        this.bite = bite;
        this.Scandinavian = Scandinavian
    }
    eat(food){
        console.log(`chomp chomp Moose all the ${food}ies.`)
    }
    speak(noise){
        alert(`the ${this.constructor.name} says ${noise}!`)
    }
}