export default class Dingo{
    constructor(name, age, likes, eats){
        this.name = name;
        this.likes = likes;
        this.age = age;
        this.eats = eats;
    }
    eat(food){
        console.log(`slurp crunch crunch all the ${food}ies.`)
    }
    speak(noise){
        alert(`the ${this.constructor.name} says ${noise}!`)
    }
}