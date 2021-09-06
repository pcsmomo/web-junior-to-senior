// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
  a: 'john'
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
let sizeName: string = Size[2];
let sizeNumber: number = Size.Large;
// console.log(sizeName);
// console.log(sizeNumber);

// Any - !!!!!!!!!!!! BE CAREFUL
let whatever: any = 'aghhhhhhhhhhhh nooooooooooooo!!';
whatever = basket;

// void
let sing = (): void => {
  console.log('lalalala');
};

// never
// 1. never return
// 2. never true
let error = (): never => {
  throw Error('ooops');
};
