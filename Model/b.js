export default class Bear{
    constructor(
        name = ' ',
        color = ' ',
        gender = ' ',
        weight = 0,
        treeClimbing = ' ',
        claws = 0, 
    ){
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight; 
        this.treeClimbing = treeClimbing;
        this.claws = claws;
    }
    eat(food){
        console.log(`Rip and tear all the ${food}ies.`)
    }
    speak(noise){
        console.log (`The ${this.constructor.name} says ${noise}!`)
    }
}