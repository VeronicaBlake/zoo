
import Anteater from "./Model/a.js";
import Bear from "./Model/b.js";
import Dingo from "./Model/d.js";

let anita = new Anteater('Anita', 'yellow', 'F', 46, 143, 'long')
console.log(anita)

let bearnie = new Bear('Bearnie', 'yellow', 'F', 350, 'fast', 12)
console.log(bearnie)
bearnie.eat('people')
bearnie.speak('yo')

let jared = new Dingo('Jared', 24)
console.log(jared)