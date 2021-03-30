export default class Anteater {
    constructor(
        name = ' ',
        color = ' ',
        gender = ' ',
        weight = 0,
        antsEaten = 0,
        tongueSize = ' '
    ){
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.antsEaten = antsEaten;
        this.tongueSize = tongueSize;
    }
    eat(food){
        console.log(`slurp crunch crunch all the ${food}ies.`)
    }
    speak(noise){
        alert(`the ${this.constructor.name} says ${noise}!`)
    }
}