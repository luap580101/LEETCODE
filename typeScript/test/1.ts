let str: string = "Hello World";
let num: number = 123;
let boo: boolean = true;

let n: null = null;
let nu: undefined = undefined;

// 就是都可以
let test: any = true

// 陣列
let arr: string[] = ['a','b','c'];
let arr2: string[][] = [['a'],['b','c']];

// 元組
let tuple: [number, string, boolean] = [1,'a', true];
let tuple2: [string, string][]= [['a','b']]

// ============Enum===========
enum LiveState{
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const staus = LiveState.SUCCESS
console.log(staus);
