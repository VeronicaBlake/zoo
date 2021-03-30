export default class Eagle{
    constructor(name, age, American = true,){
        this.name= name;
        this.age = age;
        this.American = American
    }
    eat(food){
        console.log(`slurp crunch crunch all the ${food}ies.`)
    }
    speak(noise){
        alert(`the ${this.constructor.name} says ${noise}!`)
    }
}