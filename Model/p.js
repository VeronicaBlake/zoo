export default class Panther{
    constructor(name, age, screams = true){
        this.name = name
        this.age = age
        this.screams = screams
    }
    eat(food){
        console.log(`slurp crunch crunch all the ${food}ies.`)
    }
    speak(noise){
        alert(`the ${this.constructor.name} says ${noise}!`)
    }
}