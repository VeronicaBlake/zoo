export default class Nightingale{
    constructor(name, age, Keats = true){
        this.name = name;
        this.age = age;
        this.Keats = Keats
    }
    eat(food){
        console.log(`tweet tweet peck all the ${food}ies.`)
    }
    speak(noise){
        alert(`the ${this.constructor.name} says ${noise}!`)
    }
}