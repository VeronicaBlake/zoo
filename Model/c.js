export default class Condor{
    constructor(
        name = ' ',
        color = ' ',
        gender = ' ',
        weight = 0,
        wingspan = 0,
        beakSize = ''
    ){
        this.name = name;
        this,color = color;
        this.gender = gender;
        this.weight = weight;
        this.wingspan = wingspan;
        this.beakSize = beakSize
    }
    eat(food){
        console.log(`Cacaw! Peck all the ${food}ies!`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}!`)
    }
}