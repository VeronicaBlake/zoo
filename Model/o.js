export default class Ostrich{
    constructor(name, age, legs){
        this.name = name;
        this.age = age;
        this.legs = legs;
}
eat(food){
    console.log(`slurp crunch crunch all the ${food}ies.`)
}
speak(noise){
    alert(`the ${this.constructor.name} says ${noise}!`)
}
}