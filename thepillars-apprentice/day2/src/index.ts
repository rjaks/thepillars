let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;

// function render(document) {
//     console.log(document);
// }

let numbers: number[] = [];
numbers[0] = 1;
// numbers[1] = '1';

let user: [number, string] = [1, 'Adrian']; // tuples, mainly used for key-value pairs

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number{
    if (taxYear < 2022) return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

// let employee: {
    // readonly id: number;
    // name: string,
    // retire: (date: Date) => void
// } = {
    // id: 1,
    // name: 'Adrian', 
    // retire: (date:Date) => {
        // console.log(date)
    // }
// };

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10');

let weight: number & string;

type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
}

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

function greet(name: string | null | undefined ){
    if (name) console.log(name.toUpperCase());
    else console.log('Hola!');
}

greet(null);

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null: { birthday: new Date()};
}

let customer = getCustomer(1);
console.log(customer?.birthday);