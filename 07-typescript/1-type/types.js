// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'john'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.Large;
// console.log(sizeName);
// console.log(sizeNumber);
// Any - !!!!!!!!!!!! BE CAREFUL
var whatever = 'aghhhhhhhhhhhh nooooooooooooo!!';
whatever = basket;
// void
var sing = function () {
    console.log('lalalala');
};
// never
// 1. never return
// 2. never true
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT');
};
var dog = {}; // Can be dangerous
dog.count;
// Function
var fightRobotArmy3 = function (robot) {
    console.log('FIGHT');
};
var fightRobotArmy4 = function (robot) {
    console.log('FIGHT');
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'alaallalala';
        this.singPrivate = 'lala';
        this.sing = sound;
    }
    Animal.prototype.great = function () {
        return "Hello, " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAWWWR');
console.log(lion.great());
// Union
var confused = 'hello';
// implicit
var x = 4;
x = 'hello';
